import { prisma } from "components/prisma/seed";


export async function POST(req: Request): Promise<Response> {

    const { guitarId, userId }: {guitarId: string, userId: string} = await req.json();
      
        const responseFromPrisma = await prisma.userFavorites.delete({
          where: {
            userandguitar:{
                userId: userId, // Provide the userId value here
                guitarId: guitarId,
            }
          },
        });
      
        return new Response(JSON.stringify(responseFromPrisma));
}
  