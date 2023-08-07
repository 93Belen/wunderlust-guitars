"use client"

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Shop(
    {
        children
      }: {
        children: React.ReactNode
      }
){
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    const changeLocation = (tab: string) => {
      setCurrentPath(() => tab)
     }
     useEffect(()=> {
         setCurrentPath(window.location.pathname)
     }, [])
     console.log(currentPath)

    return (
      <main className='h-fit min-h-screen px-4 md:px-8 w-screen overflow-x-hidden box-border pt-10 md:pt-20 scroll-smooth'>
        <div className='w-full flex justify-center'>
          <header className='flex justify-around w-full md:max-w-[800px] text-white h-fit font-mono text-[1.125rem]'>
            <Link onClick={() => {changeLocation('/shop')}}  className={`${currentPath === "/shop" ? "border-b-purple" : "border-b-black"} duration-[0.4s] ease-out border-b-2`} href="/shop">Most Popular</Link>
            <Link onClick={() => {changeLocation('/shop/acoustic')}}  className={`${currentPath === "/shop/acoustic" ? "border-b-purple" : "border-b-black"} border-b-2 duration-[0.4s] ease-out`} href="/shop/acoustic">Acoustic</Link>
            <Link onClick={() => {changeLocation('/shop/electric')}}  className={`${currentPath === "/shop/electric" ? "border-b-purple" : "border-b-black"} border-b-2 duration-[0.4s] ease-out`} href="/shop/electric">Electric</Link>
            <Link onClick={() => {changeLocation('/shop/bass')}} className={`${currentPath === "/shop/bass" ? "border-b-purple" : "border-b-black"} border-b-2 duration-[0.4s] ease-out`} href="/shop/bass">Bass</Link>
            <Link onClick={() => {changeLocation('/shop/sixstrings')}} className={`${currentPath === "/shop/sixstrings" ? "border-b-purple" : "border-b-black"} border-b-2 duration-[0.4s] ease-out`} href="/shop/sixstrings">6 Strings</Link>
          </header>
        </div>
        <article className='pt-10 w-full p-2 md:p-20 flex justify-center'>
          {children}
        </article>
      </main>
    )
}