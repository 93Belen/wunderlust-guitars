import AddToFavorites from "./components/AddFavorite";
import AddToCart from "./components/AddToCart";
import Card from "./components/Card";
import Checkout from "./components/Checkout";
import ContactForm from "./components/ContactForm";
import Logo from "./components/Logo";

export default function Home() {
  return (
    <main className='h-fit min-h-screen p-8'>
      <AddToFavorites /><br />
      <AddToCart /><br />
      <Card /><br />
      <Checkout /><br />
      <Logo/><br />
      <ContactForm /><br />
    </main>
  )
}
