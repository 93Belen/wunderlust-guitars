import { prisma } from "components/prisma/seed";

// Add a guitar to database to track likes for most-popular functionality
export async function POST(req: Request): Promise<Response>  {
    try{
        const { id }: { id: string } = await req.json();

        const responseFromPrisma = await prisma.guitar.create({
            data: {
                id: id,
                likes: 0
            }
        })

    
        return new Response(JSON.stringify(responseFromPrisma));
    }
    catch (error) {
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
      }

  }
  