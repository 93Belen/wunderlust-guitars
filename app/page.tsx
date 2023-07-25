import AddToFavorites from "./components/AddFavorite";
import AddToCart from "./components/AddToCart";
import Card from "./components/Card";
import CardCart from "./components/CardCart";
import CardFav from "./components/CardFav";
import Checkout from "./components/Checkout";
import ContactForm from "./components/ContactForm";
import Logo from "./components/Logo";
import SoundWave from "./components/SoundWave";

export default function Home() {
  return (
    <main className='h-fit min-h-screen px-8 w-screen overflow-x-hidden'>
      <section className='w-[54rem] md:w-[100vw] m-0 p-0 md:ml-[-2rem] ml-[-7rem]'>
        <SoundWave />
      </section>
      <section className='flex flex-col items-end pr-2 w-[90vw] mt-[-5rem] lg:mt-[-7rem] lg:pr-24'>
        <div>
          <h1 className='text-white font-sans text-[3rem] font-[700] md:text-[5.375rem] leading-[2.65625rem] md:leading-[4.1875rem]'>Wunderlust<br/>Guitars</h1>
          <h2 className='text-red font-serif tex-[1.rem] md:text-[2.3125rem]'>Handpicked, globally sourced</h2>
        </div>
      </section>
      
    </main>
  )
}
