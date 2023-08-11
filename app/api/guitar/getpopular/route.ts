import { prisma } from "components/prisma/seed";
import { getOneProduct } from "components/stripe/getOneProduct";
import { Product } from "components/types/storeTypes";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function GET(): Promise<Response> {
  try {
    const responseFromPrisma = await prisma.guitar.findMany({
      orderBy: {
        likes: "asc",
      },
    });

    const onlyInStock: Product[] = [];

    for (const guitar of responseFromPrisma) {
      try {
        const product = await getOneProduct(guitar.id);

        if (product) {
          onlyInStock.push(product as Product);
        } else {
          // If product is not in stock, delete it from guitars
          await prisma.guitar.deleteMany({
            where: {
              id: guitar.id,
            },
          });
        }

        // Add a delay of 40 milliseconds to achieve approximately 25 calls per second
        await delay(40);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }

    if (onlyInStock.length > 4) {
      // Return a maximum of 4 guitars to fit the design
      return new Response(
        JSON.stringify([
          onlyInStock[0],
          onlyInStock[1],
          onlyInStock[2],
          onlyInStock[3],
        ])
      );
    }

    return new Response(JSON.stringify(onlyInStock));
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
