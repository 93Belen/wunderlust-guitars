import { prisma } from "components/prisma/seed";
  

export async function POST(req: Request): Promise<Response> {
    const { userId, guitarId }: { userId: string; guitarId: string } = await req.json();

    try {
      const responseFromPrisma = await prisma.userFavorites.create({
        data: {
          userId: userId,
          guitarId: guitarId,
        },
      });
  
      return new Response(JSON.stringify(responseFromPrisma));
    } catch (error) {
      return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}

  