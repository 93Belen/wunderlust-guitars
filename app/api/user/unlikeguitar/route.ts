import { prisma } from "components/prisma/seed";


export async function POST(req: Request): Promise<Response> {

    const { guitarId, userId }: {guitarId: string, userId: string} = await req.json();
      
        const responseFromPrisma = await prisma.userFavorites.deleteMany({
          where: {
                userId: userId,
                guitarId: guitarId,
          }
        });
      
        return new Response(JSON.stringify(responseFromPrisma));
}
  