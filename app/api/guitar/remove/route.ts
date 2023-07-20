import { prisma } from "components/prisma/seed";


export async function POST(req: Request): Promise<Response> {

    const { guitarId }: {guitarId: string, userId: string} = await req.json();
      
        const responseFromPrisma = await prisma.guitar.delete({
          where: {
                id: guitarId
          }
        });
      
        return new Response(JSON.stringify(responseFromPrisma));
}
  