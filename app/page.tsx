import { useEffect } from "react";
import AddToFavorites from "./components/AddFavorite";
import AddToCart from "./components/AddToCart";
import Card from "./components/Card";
import Checkout from "./components/Checkout";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <main className='bg-black min-h-screen'>
     <AddToFavorites /><br />
     <AddToCart /><br />
     <Card /><br />
     <Checkout /><br />
     <ContactForm />
    </main>
  )
}
