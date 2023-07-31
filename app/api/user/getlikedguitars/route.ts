import { prisma } from "components/prisma/seed";
import { getOneProduct } from "components/stripe/getOneProduct";


export async function POST(req: Request): Promise<Response> {

    const { userId }: {userId: string} = await req.json();

    try{
        const responseFromPrisma = await prisma.userFavorites.findMany({
            where: {
                userId: userId
            }
        })
        
        const onlyInStock = [];

        // Use Promise.all to concurrently fetch product details from Stripe for all favorites
        await Promise.all(
          responseFromPrisma.map(async (guitar) => {
            const product = await getOneProduct(guitar.guitarId);
            if (product) {
              onlyInStock.push(product);
            }
          })
        );

        return new Response(JSON.stringify(onlyInStock));
    }
    catch (error) {
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
      }
    
    

  }
  