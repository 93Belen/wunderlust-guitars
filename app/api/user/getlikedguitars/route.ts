import GuitarInfo from "components/app/components/GuitarInfo";
import { prisma } from "components/prisma/seed";
import { getOneProduct } from "components/stripe/getOneProduct";
import { Product } from "components/types/storeTypes";
import { getDefaultHighWaterMark } from "stream";

// Get user's favorite guitars
export async function POST(req: Request): Promise<Response> {
  const { userId }: { userId: string } = await req.json();

  try {
    const responseFromPrisma = await prisma.userFavorites.findMany({
      where: {
        userId: userId,
      },
    });

    const arrayGuitars: Product[] = [];

    for (const guitar of responseFromPrisma) {
      try {
        // const product = await getOneProduct(guitar.guitarId);

        // if (product) {
        //   onlyInStock.push(product as Product);
        // } else {
        //   // If product is not in stock, delete it from favorites
        //   await prisma.userFavorites.deleteMany({
        //     where: {
        //       guitarId: guitar.guitarId,
        //       userId: guitar.userId,
        //     },
        //   });
        // }
        const guitarInfo = await prisma.guitar.findUnique({
          where:{
            id: guitar.guitarId
          }
        })
        if(guitarInfo){
          arrayGuitars.push(guitarInfo as Product)
        }
       
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }

    return new Response(JSON.stringify(arrayGuitars));
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}

  