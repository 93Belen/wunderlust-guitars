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
      <main className='h-fit min-h-screen px-4 md:px-8 w-screen md:overflow-x-hidden box-border pt-10 md:pt-20'>
        <div
        id="shop-mobile-nav"
        className="md:w-full flex md:justify-center box-content overflow-x-auto md:overflow-x-hidden box-content md:box-border no-scrollbar"
        >
          <header className='flex justify-around w-fit md:w-full md:max-w-[800px] text-white h-fit font-mono text-[1.125rem] flex-nowrap md:flex-wrap text-center'>
            <Link onClick={() => {changeLocation('/shop')}}  className={`${currentPath === "/shop" ? "border-b-purple" : "border-b-black"} duration-[0.4s] ease-out border-b-2 w-[150px] md:w-auto`} href="/shop">Most Popular</Link>
            <Link onClick={() => {changeLocation('/shop/acoustic')}}  className={`${currentPath === "/shop/acoustic" ? "border-b-purple" : "border-b-black"} border-b-2 duration-[0.4s] ease-out w-[150px] md:w-auto`} href="/shop/acoustic">Acoustic</Link>
            <Link onClick={() => {changeLocation('/shop/electric')}}  className={`${currentPath === "/shop/electric" ? "border-b-purple" : "border-b-black"} border-b-2 duration-[0.4s] ease-out w-[150px] md:w-auto`} href="/shop/electric">Electric</Link>
            <Link onClick={() => {changeLocation('/shop/bass')}} className={`${currentPath === "/shop/bass" ? "border-b-purple" : "border-b-black"} border-b-2 duration-[0.4s] ease-out w-[150px] md:w-auto`} href="/shop/bass">Bass</Link>
            <Link onClick={() => {changeLocation('/shop/sixstrings')}} className={`${currentPath === "/shop/sixstrings" ? "border-b-purple" : "border-b-black"} border-b-2 duration-[0.4s] ease-out w-[150px] md:w-auto`} href="/shop/sixstrings">6 Strings</Link>
          </header>
        </div>
        <article className='pt-10 w-full md:w-full p-2 md:p-20 flex justify-center box-border justify-center overflow-x-hidden box-border'>
          {children}
        </article>
      </main>
    )
}