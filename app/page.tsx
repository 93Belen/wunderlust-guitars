import AddToFavorites from "./components/AddFavorite";
import AddToCart from "./components/AddToCart";
import Card from "./components/Card";
import CardCart from "./components/CardCart";
import CardFav from "./components/CardFav";
import Checkout from "./components/Checkout";
import ContactForm from "./components/ContactForm";
import Logo from "./components/Logo";

export default function Home() {
  return (
    <main className='h-fit min-h-screen p-8 w-screen'>
      <CardCart /><br />
      <CardFav />
    </main>
  )
}
