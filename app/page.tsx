import { useEffect } from "react";
import AddToFavorites from "./components/AddFavorite";
import AddToCart from "./components/AddToCart";

export default function Home() {
  return (
    <main className='bg-black min-h-screen'>
     <AddToFavorites /><br />
     <AddToCart />
    </main>
  )
}
