import { prisma } from "components/prisma/seed";
  

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
        favorites: true, // Include the favorites field in the select
      },
    });
    if (!user) {
      // Handle the case when the user with the given ID is not found
      return new Response(JSON.stringify({ error: "User not found" }), { status: 404 });
    }

    // Get the existing favorites array or initialize it to an empty array if it's null
    const existingFavorites = user.favorites;

    // Check if the favoriteId already exists in the favorites array
    if (existingFavorites.some((favorite) => favorite.id === favoriteId)) {
      return new Response(JSON.stringify({ message: "Favorite already exists" }), { status: 200 });
    }

    // Create a new favorite object with the given favoriteId and default likes
    const newFavorite = await prisma.guitar.findUnique({
        where: {
            id: favoriteId
        }  
    })

    // Check if the newFavorite is null (not found)
    if (!newFavorite) {
        return new Response(JSON.stringify({ error: "Guitar not found" }), { status: 404 });
    }


    // Add the new favorite to the existing favorites array
    const updatedFavorites = [...existingFavorites,  { id: newFavorite.id, likes: newFavorite.likes }];

    // Update the user with the new favorites array
    const updatedUser = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        favorites: {
            set: updatedFavorites
        }
      },
    });

    return new Response(JSON.stringify(updatedUser));
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}

  