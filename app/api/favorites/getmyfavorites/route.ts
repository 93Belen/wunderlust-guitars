
import { prisma } from "components/prisma/seed";


export async function POST(req: Request): Promise<Response>  {

    const { email }: { email: string } = await req.json();
    const responseFromPrisma = await prisma.user.findUnique({
        where: {
            email: email as string
        }
    })
    console.log(responseFromPrisma)


     const createGuitar = await prisma.guitar.create()
    // const createPostAndCategory = await prisma.user.create({
    //     data: {
    //       id: 'clk8esfff000134hzm2pkcjmf',
    //       favorites: {
    //         create: [{ id: '1oleole' }],
    //       },
    //     },
    //   })



  
    return new Response(JSON.stringify(responseFromPrisma));
  }
  
