import { prisma } from "components/prisma/seed";
import { getOneProduct } from "components/stripe/getOneProduct";
import { Product } from "components/types/storeTypes";

export async function GET(): Promise<Response> {
  try {
    const responseFromPrisma = await prisma.guitar.findMany({
      orderBy: {
        likes: "asc",
      },
    });

    // const onlyInStock: Product[] = [];

    // Use Promise.all to fetch product details from Stripe with rate limiting
    // await Promise.all(
    //   responseFromPrisma.map(async (guitar: { id: string, likes: number }) => {
    //     const product = await getOneProduct(guitar.id);
    //     if (product) {
    //       onlyInStock.push(product);
    //     } else {
    //       // If product is not in stock, delete it from guitars
    //       await prisma.guitar.deleteMany({
    //         where: {
    //           id: guitar.id,
    //         },
    //       });
    //     }

    //   })
    // );

    if (responseFromPrisma.length > 4) {
      // Return a maximum of 4 guitars to fit the design
      return new Response(
        JSON.stringify([
          responseFromPrisma[0],
          responseFromPrisma[1],
          responseFromPrisma[2],
          responseFromPrisma[3],
        ])
      );
    }

    return new Response(JSON.stringify(responseFromPrisma));
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
