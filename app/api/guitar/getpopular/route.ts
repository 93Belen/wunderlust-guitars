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

    const onlyInStock: Product[] = [];

    // Define rate limiting parameters
    const maxRequestsPerSecond = 15;
    const requestInterval = 1000 / maxRequestsPerSecond;
    let lastRequestTime = 0;

    // Use Promise.all to fetch product details from Stripe with rate limiting
    await Promise.all(
      responseFromPrisma.map(async (guitar: { id: string, likes: number }) => {
        const currentTime = Date.now();
        const timeSinceLastRequest = currentTime - lastRequestTime;

        if (timeSinceLastRequest < requestInterval) {
          // Wait to ensure rate limit compliance
          await new Promise(resolve => setTimeout(resolve, requestInterval - timeSinceLastRequest));
        }

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

        lastRequestTime = Date.now();
      })
    );

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
