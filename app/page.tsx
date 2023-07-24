import AddToFavorites from "./components/AddFavorite";
import AddToCart from "./components/AddToCart";
import Card from "./components/Card";
import Checkout from "./components/Checkout";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Logo from "./components/Logo";

export default function Home() {
  return (
    <main className='bg-black min-h-screen'>
     <AddToFavorites /><br />
     <AddToCart /><br />
     <Card /><br />
     <Checkout /><br />
     <Logo/><br />
     <ContactForm /><br />
     <Footer />
    </main>
  )
}
