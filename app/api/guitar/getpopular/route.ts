import { prisma } from "components/prisma/seed";
import { getOneProduct } from "components/stripe/getOneProduct";

// Find user in db with email
// Im not using this endpoint right now
export async function GET(): Promise<Response> {
    try{
        const responseFromPrisma = await prisma.guitar.findMany({
            orderBy: {
                likes: "asc"
            }
        })
        const onlyInStock = [];

        // Use Promise.all to concurrently fetch product details from Stripe for all favorites
        await Promise.all(
          responseFromPrisma.map(async (guitar : {id: string, likes: number}) => {
            const product = await getOneProduct(guitar.id);
            if (product) {
              onlyInStock.push(product);
            } else {
                // If product is not in stock, delete it from favorites
                await prisma.guitar.deleteMany({
                  where: {
                    id: guitar.id
                  },
                });
              }
          })
        );

        return new Response(JSON.stringify(onlyInStock));

    }
    catch (error) {
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
      }
    
    

  }
  