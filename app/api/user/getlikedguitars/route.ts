import { prisma } from "components/prisma/seed";


export async function POST(req: Request): Promise<Response> {

    const { userId }: {userId: string} = await req.json();

    try{
        const responseFromPrisma = await prisma.userFavorites.findMany({
            where: {
                userId: userId
            }
        })
    
        return new Response(JSON.stringify(responseFromPrisma));
    }
    catch (error) {
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
      }
    
    

  }
  