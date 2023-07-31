import { prisma } from "components/prisma/seed";

// Remove favorite guitar from this user in db
export async function POST(req: Request): Promise<Response> {

    const { guitarId, userId }: {guitarId: string, userId: string} = await req.json();

    try {
      const responseFromPrisma = await prisma.userFavorites.deleteMany({
        where: {
              userId: userId,
              guitarId: guitarId,
        }
      });

      const removeLike = await prisma.guitar.update({
        where: {
          id: guitarId
        },
        data: {
          likes: {
            decrement: 1
          }
        }      
      });
    
      return new Response(JSON.stringify(responseFromPrisma));
    }
    catch (error) {
      return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
      
}
  