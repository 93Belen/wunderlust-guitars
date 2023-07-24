"use client"

import Logo from "./Logo"

export default function Footer(){
    return (
        <div className='box-border h-[20%] grid grid-cols-3 md:grid-cols-5 grid-rows-[70%_30%] font-mono text-white text-[0.9375rem] font-normal p-10 w-[99vw] gap-4 md:gap-1 justify-items-center md:justify-items-start'>
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