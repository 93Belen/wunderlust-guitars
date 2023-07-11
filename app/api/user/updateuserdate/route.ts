import { prisma } from "components/prisma/seed";


export async function POST(req: Request) {

    const { email } = await req.json();
    
    
    const responseFromPrisma = await prisma.user.update({
        where: {
            email: email
        },
        data: {
            last_logged: new Date()
        }
    })

    return new Response(JSON.stringify(responseFromPrisma));
  }
  