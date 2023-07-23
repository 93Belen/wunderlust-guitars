import { prisma } from "components/prisma/seed";

// Update last time this user logged in to current time
// Right now I am not using this endpoint
export async function POST(req: Request): Promise<Response> {

    const { email }: {email: string} = await req.json();

    try {
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
    catch (error) {
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
      }
   
  }
  