"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import SoundWave from "./components/SoundWave";

export default function Home() {
  const [popular, setPopular] = useState([])
  console.log(popular)

  const getPopularGuitars = async() => {
    const popular = await fetch("/api/guitar/getpopular");
    const popularJson = await popular.json();
    setPopular(popularJson)
    console.log(popularJson)
  }
  useEffect(()=> {
    getPopularGuitars()
  },[])

  
  return (
    <main className='h-fit min-h-screen px-4 md:px-8 w-screen overflow-x-hidden'>
      <section className='w-[54rem] md:w-[100vw] m-0 p-0 md:ml-[-2rem] ml-[-7rem]'>
        <SoundWave />
      </section>
      <section className='flex flex-col items-end pr-0 md:pr-2 w-[90vw] mt-[-5rem] lg:mt-[-7rem] lg:pr-24'>
        <div>
          <h1 className='text-white font-sans text-[3rem] font-[700] md:text-[5.375rem] leading-[2.65625rem] md:leading-[4.1875rem] tracking-[-0.20rem] md:tracking-[-0.10rem]'>Wunderlust<br/>Guitars</h1>
          <h2 className='text-red font-serif text-[1.rem] md:text-[2.3125rem]'>Handpicked, globally sourced</h2>
        </div>
      </section>
      <section className='pt-16 md:pt-60 flex gap-1 flex-col'>
        <div className='md:ml-[-3rem]'>
          <h3 className='font-sans text-[4.5rem] font-[700] leading-[3.1875rem] md:leading-[6rem] text-gray tracking-[-0.20rem] md:tracking-[-0.11rem] md:text-[10rem]'>Most Popular</h3>
          <h4 className='text-white font-mono text-[1.7rem] font-[700] mt-[-1.8rem] pl-5 leading-[3.35625rem] md:leading-[-5rem] md:ml-[7.5%] tracking-[-0.10rem] md:tracking-[-0.05rem] md:text-[3rem]'>Search our most viewed</h4>
          <Link href='/shop' className='text-pink font-mono text-[1.125rem] p-2 md:py-0 md:mt-[-1%] md:text-[1.5rem] md:ml-[8%]'>Shop now</Link>
        </div>
        <div className='hidden md:grid m-auto pt-4 md:mt-8 md:grid-cols-2 lg:grid-cols-4 md:w-fit md:max-w-[500px] lg:max-w-[1400px] w-[100%] gap-[1rem] md:gap-[3rem] justify-center'>
        {popular.map((guitar) => (
                <div className='h-[15rem] lg:h-[22rem]'>
                <Card data={guitar} />
            </div>
            ))}
        </div>
        <div className='md:hidden m-auto pt-4 md:mt-8 grid w-[100%] justify-center max-w-[250px]'>
                <div className='h-[20rem]'>
                  <Card data={popular[0]} />
                </div>
        </div>
      </section>
      <section className='pt-28 mb-28 md:mb-80 flex flex-col md:grid md:grid-cols-[35vw_65vw] lg:grid-cols-[40vw_60vw] md:grid-rows-2 md:pt-32 h-fit md:gap-x-6 lg:mt-12'>
        <div className='col-start-2 flex h-fit md:justify-end md:w-[60vw]'>
            <div className='md:ml-5'>
              <h3 className='font-sans text-[4.5rem] font-[700] leading-[3.1875rem] lg:leading-[7rem] md:leading-[6rem] text-gray tracking-[-0.20rem] md:tracking-[-0.11rem] md:text-[9rem] lg:text-[10rem] lg:mr-10'>About Us</h3>
              <h4 className='text-white font-mono text-[1.7rem] font-[700] mt-[-1rem] pl-2 leading-[2.35625rem] lg:leading-[-2rem] tracking-[-0.10rem] md:tracking-[-0.05rem] lg:text-[3rem]'>The story behind Wunderlust</h4>
            </div>
        </div>
          <div className='lg:w-[40vw] md:w-[35vw] w-full row-span-2 row-start-1 flex mt-10 md:mt-0 ml-0  bg-[url("/homepageabout.png")] bg-contain bg-no-repeat md:ml-4 md:bg-right' >
            <Image
          src='/homepageabout.png'
          width={2500}
          height={2500}
          alt='about'
          className='w-[90%] md:w-[100%] lg:w-[70%] self-center md:hidden'
          />
          </div>
        <div className='h-fit flex mx-[2%] flex-col w-full'>
          <p className='text-white font-mono text-[1.5rem] md:p-2 py-4 md:max-w-[40rem] self-end md:mr-[15%]'>
          This OCD-type-of-guy has taken his guitar addiction to a whole new level.
          But make no mistake, he ain't no random fool who fell off a Kansas farm truck.
          No, sir!  This guy toured through North America, Europe, and the "God-save-the-Queen" UK.
          <br />
          <Link href='/about-us' className='text-pink font-mono text-[1.125rem] md:text-[1.5rem] md:max-w-[40rem] self-end md:mr-[10%]'>Read more</Link>
          </p>
        </div>
      </section>
    </main>
  )
}
