import { prisma } from "components/prisma/seed";

interface Favorite {
    id: string;
    likes: number;
    user: User[];
  }
  
  interface User {
    id: string;
    email: string;
    created: Date;
    last_logged: Date;
    favorites: Favorite[];
  }
  
  

export async function POST(req: Request): Promise<Response> {
  const { userId, favoriteId }: { userId: string; favoriteId: string } = await req.json();

  try {
    // Fetch the existing user
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      // Include the favorites field in the select to ensure it is returned in the result
      select: {
        id: true,
        email: true,
        created: true,
        last_logged: true,
        favorites: true, // Include the favorites field in the select
      },
    });
    
    if (!user) {
      // Handle the case when the user with the given ID is not found
      return new Response(JSON.stringify({ error: "User not found" }), { status: 404 });
    }

    // Get the existing favorites array or initialize it to an empty array if it's null
    const existingFavorites: Favorite[] = user.favorites || [];

    // Check if the favoriteId already exists in the favorites array
    if (existingFavorites.some((favorite) => favorite.id === favoriteId)) {
      return new Response(JSON.stringify({ message: "Favorite already exists" }), { status: 200 });
    }

    // Create a new favorite object with the given favoriteId and default likes
    const newFavorite: Favorite = {
      id: favoriteId,
      likes: 0, // You can set the default value for likes here
    };

    // Add the new favorite to the existing favorites array
    const updatedFavorites: Favorite[] = [...existingFavorites, newFavorite];

    // Update the user with the new favorites array
    const updatedUser = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        favorites: updatedFavorites,
      },
    });

    return new Response(JSON.stringify(updatedUser));
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}

  