'use client'
import Link from "next/link"

import Logo from "./Logo"

export default function Footer(){
    return (
        <div className='box-border h-[20%] grid grid-cols-2 md:grid-cols-5 grid-rows-[70%_30%] font-mono text-white text-[0.9375rem] font-normal p-10 w-[99vw] gap-4 md:gap-1 justify-items-center md:justify-items-start'>
            <div> 
                <Logo/>
            </div>
            <div className='flex flex-col gap-6'>
                <Link className='hover' href='/shop'>Popular</Link>
                <Link className='hover' href='/shop/electric'>Electric</Link>
                <Link className='hover' href='/shop/acoustic'>Acoustic</Link>
            </div>
            <div className='flex flex-col gap-6'>
                <Link className='hover' href='/shop'>Shop</Link>
                <Link className='hover' href='/services'>Services</Link>
                <Link className='hover' href='/about-us'>About Us</Link>
                <Link className='hover' href={{pathname: '/services', hash:"contact-form"}} scroll={false} replace>Contact</Link>
            </div>
            <div className='md:flex flex-col gap-6 hidden'>
                <Link scroll={false} className='hover' href='/services#personal-shopper'>Personal Shopper</Link>
                <Link scroll={false} className='hover' href='/services#hand-delivery'>Hand Delivery</Link>
                <Link scroll={false} className='hover' href='/services#appraisals'>Appraisals</Link>
                <Link scroll={false} className='hover' href='/services#collection-curator'>Curator</Link>           
            </div>
            <div className='md:flex flex-col gap-6 hidden'>
                <Link className='hover' href='/login'>Sign In</Link>
                <Link className='hover' href='/favorites'>Favorites</Link>
                <Link className='hover' href='/cart'>Cart</Link>
                
            </div>
            <div className='col-span-5 flex items-end justify-self-end'>
                <p>Wunderlust Guitars 2023</p>
            </div>
        </div>
    )
}