import { prisma } from "components/prisma/seed";


export async function POST(req: Request): Promise<Response>  {

    const { email }: { email: string } = await req.json();
    
    const responseFromPrisma = await prisma.user.create({
        data: {
            email: email
        }
    })
  
    return new Response(JSON.stringify(responseFromPrisma));
  }
  