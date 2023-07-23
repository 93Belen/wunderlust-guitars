import { prisma } from "components/prisma/seed";

// Add a new user to db
export async function POST(req: Request): Promise<Response>  {

    const { email }: { email: string } = await req.json();
    

    const responseFromPrisma = await prisma.user.upsert({
        where: {
          email: email,
        },
        update: {
          last_logged: new Date()
        },
        create: {
          email: email,
        },
      })
  
    return new Response(JSON.stringify(responseFromPrisma));
  }
  