import { prisma } from "components/prisma/seed";
import { getOneProduct } from "components/stripe/getOneProduct";
import { Product } from "components/types/storeTypes";

// Get user's favorite guitars
export async function POST(req: Request): Promise<Response> {

    const { userId }: {userId: string} = await req.json();

    try{
        const responseFromPrisma = await prisma.userFavorites.findMany({
            where: {
                userId: userId
            },
            orderBy: {
              guitarId: "desc"
            }
        })
        
        const onlyInStock: Product[] = [];

        // Use Promise.all to concurrently fetch product details from Stripe for all favorites
        await Promise.all(
          responseFromPrisma.map(async (guitar : {guitarId: string, userId: string}) => {
            const product = await getOneProduct(guitar.guitarId);
            if (product) {
              onlyInStock.push(product as Product);
            } else {
                // If product is not in stock, delete it from favorites
                await prisma.userFavorites.deleteMany({
                  where: {
                    guitarId: guitar.guitarId,
                    userId: guitar.userId
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
  