import Link from "next/link";
import AddToFavorites from "./components/AddFavorite";
import AddToCart from "./components/AddToCart";
import Card from "./components/Card";
import SoundWave from "./components/SoundWave";

export default function Home() {
  return (
    <main className='h-fit min-h-screen px-4 md:px-8 w-screen overflow-x-hidden'>
      <section className='w-[54rem] md:w-[100vw] m-0 p-0 md:ml-[-2rem] ml-[-7rem]'>
        <SoundWave />
      </section>
      <section className='flex flex-col items-end pr-0 md:pr-2 w-[90vw] mt-[-5rem] lg:mt-[-7rem] lg:pr-24'>
        <div>
          <h1 className='text-white font-sans text-[3rem] font-[700] md:text-[5.375rem] leading-[2.65625rem] md:leading-[4.1875rem] tracking-[-0.20rem] md:tracking-[-0.10rem]'>Wunderlust<br/>Guitars</h1>
          <h2 className='text-red font-serif tex-[1.rem] md:text-[2.3125rem]'>Handpicked, globally sourced</h2>
        </div>
      </section>
      <section className='pt-16 flex gap-1 flex-col'>
        <div>
          <h3 className='font-sans text-[4.5rem] font-[700] leading-[3.1875rem] md:leading-[6rem] text-gray tracking-[-0.20rem] md:tracking-[-0.11rem] md:text-[10rem]'>Most Popular</h3>
          <h4 className='text-white font-mono text-[1.7rem] font-[700] mt-[-1.8rem] pl-5 leading-[3.35625rem] md:leading-[-5rem] md:ml-[7.5%] tracking-[-0.10rem] md:tracking-[-0.05rem] md:text-[3rem]'>Search our most viewed</h4>
        </div>
        <Link href='' className='text-pink font-mono text-[1.125rem] p-2 md:py-0 md:mt-[-1%] md:text-[1.5rem] md:ml-[8%]'>Shop now</Link>
        <div className='m-auto pt-4 md:mt-8 grid md:grid-cols-4 md:w-fit md:max-w-[1500px] w-[100%] gap-[1rem] justify-center'>
          <div>
            <Card />
          </div>
          <div className='hidden md:block'>
            <Card />
          </div>
          <div className='hidden md:block'>
            <Card />
          </div>
          <div className='hidden md:block'>
            <Card />
          </div>
        </div>
      </section>
    </main>
  )
}
