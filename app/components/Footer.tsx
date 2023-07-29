"use client"
import Link from "next/link"

import Logo from "./Logo"

export default function Footer(){
    return (
        <div className='box-border h-[20%] grid grid-cols-2 md:grid-cols-5 grid-rows-[70%_30%] font-mono text-white text-[0.9375rem] font-normal p-10 w-[99vw] gap-4 md:gap-1 justify-items-center md:justify-items-start'>
            <div> 
                <Logo/>
            </div>
            <div className='flex flex-col gap-6'>
                <Link href='/shop'>Popular</Link>
                <Link href='/shop/electric'>Electric</Link>
                <Link href='/shop/acoustic'>Acoustic</Link>
            </div>
            <div className='flex flex-col gap-6'>
                <Link href='/shop'>Shop</Link>
                <Link href='/services'>Services</Link>
                <Link href='/about-us'>About Us</Link>
                <Link href='/services/#contact-form'>Contact</Link>
            </div>
            <div className='md:flex flex-col gap-6 hidden'>
                <Link href='/services/#personal-shopper'>Personal Shopper</Link>
                <Link href='/services/#hand-delivery'>Hand Delivery</Link>
                <Link href='/services/#appraisals'>Appraisals</Link>
                <Link href='/services/#collection-curator'>Curator</Link>           
            </div>
            <div className='md:flex flex-col gap-6 hidden'>
                <Link href='/login'>Sign In</Link>
                <Link href='/favorites'>Favorites</Link>
                <Link href='/cart'>Cart</Link>
                
            </div>
            <div className='col-span-5 flex items-end justify-self-end'>
                <p>Wunderlust Guitars 2023</p>
            </div>
        </div>
    )
}