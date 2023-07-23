import { prisma } from "components/prisma/seed";

// Remove a guitar from database
export async function POST(req: Request): Promise<Response> {

    const { id }: {id: string} = await req.json();

    try{
      const responseFromPrisma = await prisma.guitar.delete({
        where: {
              id: id
        }
      });
      return new Response(JSON.stringify(responseFromPrisma));
    
    }
    catch (error) {
      return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
    
}
  