import { prisma } from "components/prisma/seed";

// Find user in db with email
// Im not using this endpoint right now
export async function POST(req: Request): Promise<Response> {

    const { userId, guitarId }: {userId: string, guitarId: string } = await req.json();

    try{
        const responseFromPrisma = await prisma.userFavorites.findMany({
            where: {
                userId: userId,
                guitarId: guitarId
            },
            select: {
                guitarId: true,
                userId: false
            }

        })
    
        return new Response(JSON.stringify(responseFromPrisma));
    }
    catch (error) {
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
      }
    
    

  }
  