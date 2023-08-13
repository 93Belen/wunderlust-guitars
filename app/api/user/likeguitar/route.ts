import { prisma } from "components/prisma/seed";
import { Product } from "components/types/storeTypes";
  
// Add favorite guitar to this user in db
export async function POST(req: Request): Promise<Response> {
    const { userId, guitarId, guitar }: { userId: string; guitarId: string, guitar: Product } = await req.json();

    try {
      const responseFromPrisma = await prisma.userFavorites.create({
        data: {
          userId: userId,
          guitarId: guitarId,
        }
      });
      const addToLikes = await prisma.guitar.upsert({
        where: {
          id: guitarId
        },
        update: {
          likes: {
            increment: 1
          }
        },
        create: {
          id: guitarId,
          likes: 1,
          description:guitar.description,
          default_price: guitar.default_price,
          images: guitar.images,
          metadata: guitar.metadata,
          name: guitar.name,
          unit_amount: guitar.unit_amount
        }
        
      });
  
      return new Response(JSON.stringify(responseFromPrisma));
    } catch (error) {
      return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}

  