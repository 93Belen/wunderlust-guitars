"use client"

import Logo from "./Logo"

export default function Footer(){
    return (
        <div className='h-[19.5rem] grid grid-cols-5 grid-rows-2 font-mono text-white text-[0.9375rem] font-normal p-12'>
            <div> 
                <Logo/>
            </div>
            <div className='flex flex-col gap-6'>
                <p>Popular</p>
                <p>Electric</p>
                <p>Acoustic</p>
            </div>
            <div className='flex flex-col gap-6'>
                <p>Shop</p>
                <p>Services</p>
                <p>About Us</p>
                <p>Contact</p>
            </div>
            <div className='md:flex flex-col gap-6 hidden'>
                <p>Personal Shopper</p>
                <p>Hand Delivery</p>
                <p>Appraisals</p>
                <p>Curator</p>              
            </div>
            <div className='md:flex flex-col gap-6 hidden'>
                <p>Sign in</p>
                <p>Favorites</p>
                <p>Cart</p>
                
            </div>
            <div className='col-span-5 flex items-end justify-self-end'>
                <p>Wunderlust Guitars 2023</p>
            </div>
        </div>
    )
}