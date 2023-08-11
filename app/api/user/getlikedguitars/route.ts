import { prisma } from "components/prisma/seed";
import { getOneProduct } from "components/stripe/getOneProduct";
import { Product } from "components/types/storeTypes";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Get user's favorite guitars
export async function POST(req: Request): Promise<Response> {
  const { userId }: { userId: string } = await req.json();

  try {
    const responseFromPrisma = await prisma.userFavorites.findMany({
      where: {
        userId: userId,
      },
    });

    const onlyInStock: Product[] = [];

    for (const guitar of responseFromPrisma) {
      try {
        const product = await getOneProduct(guitar.guitarId);

        if (product) {
          onlyInStock.push(product as Product);
        } else {
          // If product is not in stock, delete it from favorites
          await prisma.userFavorites.deleteMany({
            where: {
              guitarId: guitar.guitarId,
              userId: guitar.userId,
            },
          });
        }

        // Add a delay of 40 milliseconds to achieve approximately 25 calls per second
        await delay(40);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }

    return new Response(JSON.stringify(onlyInStock));
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}

  