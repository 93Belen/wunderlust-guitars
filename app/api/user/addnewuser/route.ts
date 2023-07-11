import { prisma } from "components/prisma/seed";


export async function POST(req: Request) {

    const { email } = await req.json();
    
    const responseFromPrisma = await prisma.user.create({
        data: {
            email: email
        }
    })
  
    return new Response(JSON.stringify(responseFromPrisma));
  }
  