import { prisma } from "components/prisma/seed";


export async function POST(req: Request): Promise<Response> {

    const { id }: {id: string} = await req.json();
      
        const responseFromPrisma = await prisma.guitar.delete({
          where: {
                id: id
          }
        });
      
        return new Response(JSON.stringify(responseFromPrisma));
}
  