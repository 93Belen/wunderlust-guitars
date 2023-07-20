import { prisma } from "components/prisma/seed";


export async function POST(req: Request): Promise<Response>  {

    const { id }: { id: string } = await req.json();
    console.log(id)
    const responseFromPrisma = await prisma.guitar.create({
        data: {
            id: id,
            likes: 0
        }
    })
    console.log(responseFromPrisma)
  
    return new Response(JSON.stringify(responseFromPrisma));
  }
  