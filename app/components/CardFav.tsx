"use client"
import Image from "next/image"
import AddToCart from "./AddToCart"

export default function CardFav(){
    return (
        <div className='flex justify-between w-[99%]'>
            <div className='flex gap-x-4 h-[8.375rem]'>
                <Image
                src="/placeholderpic.jpg"
                height={500}
                width={500}
                alt="guitar"
                className='md:max-w-[8.375rem] max-w-[8.375rem] h-[100%]'
                />
                <div className='flex flex-col text-white font-mono md:w-[19.9375rem] justify-between'>
                    <h2 className='text-[1rem]'>Guitar Name</h2>
                    <p className='text-[0.75rem]'>Color Shell Pink</p>
                    <p className='text-[0.75rem]'>Weight: 12lb</p>
                    <p className='text-[0.75rem]'>$5,000</p>
                    <div className='text-white font-mono md:hidden grid grid-cols-2 grid-rows-2 gap-x-0'>
                        <p>IN STOCK</p> 
                        <div className='self-end row-span-2'>
                            <AddToCart />
                        </div>
                        <p>Remove</p>
                    </div>
                </div>
            </div>
            <p className='text-white font-mono hidden md:block'>IN STOCK</p>
            <div className='text-white font-mono md:flex flex-col justify-between hidden'>
                <p>Remove</p>
                <AddToCart />
            </div>
        </div>
    )
}