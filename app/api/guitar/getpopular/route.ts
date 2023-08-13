import { prisma } from "components/prisma/seed";

export async function GET(): Promise<Response> {
  try {
    const responseFromPrisma = await prisma.guitar.findMany({
      orderBy: {
        likes: "asc",
      },
    });
    
    if (responseFromPrisma.length > 4) {
      // Return a maximum of 4 guitars to fit the design
      return new Response(
        JSON.stringify([
          responseFromPrisma[0],
          responseFromPrisma[1],
          responseFromPrisma[2],
          responseFromPrisma[3],
        ])
      );
    }

    return new Response(JSON.stringify(responseFromPrisma));
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
