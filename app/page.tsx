import { useEffect } from "react";
import AddToFavorites from "./components/AddFavorite";

export default function Home() {
  return (
    <main className='bg-black min-h-screen'>
     <AddToFavorites />
    </main>
  )
}
