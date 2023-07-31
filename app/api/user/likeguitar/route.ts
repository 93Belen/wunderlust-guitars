import { prisma } from "components/prisma/seed";
  
// Add favorite guitar to this user in db
export async function POST(req: Request): Promise<Response> {
    const { userId, guitarId }: { userId: string; guitarId: string } = await req.json();

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
          likes: 1
        }
        
      });
  
      return new Response(JSON.stringify(responseFromPrisma));
    } catch (error) {
      return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}

  