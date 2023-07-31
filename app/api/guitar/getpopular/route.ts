import { prisma } from "components/prisma/seed";
import { getOneProduct } from "components/stripe/getOneProduct";

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
          if(onlyInStock.length > 4){
            return new Response(JSON.stringify([onlyInStock[0], onlyInStock[1], onlyInStock[2], onlyInStock[3]]));
          }
          return new Response(JSON.stringify(onlyInStock));
        

    }
    catch (error) {
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
      }
    
    

  }
  