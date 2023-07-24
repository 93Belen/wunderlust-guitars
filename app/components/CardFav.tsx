"use client"
import Image from "next/image"
import AddToCart from "./AddToCart"

export default function CardFav(){
    return (
        <div className='flex justify-between'>
            <div className='flex gap-x-4 h-[8.375rem]'>
                <Image
                src="/placeholderpic.jpg"
                height={500}
                width={500}
                alt="guitar"
                className='max-w-[8.375rem] h-[100%]'
                />
                <div className='flex flex-col text-white font-mono w-[15rem]'>
                    <h2 className='text-[1rem]'>Guitar Name</h2>
                    <p className='text-[0.75rem]'>
                    Nam et vitae molestie consectetur volutpat mi placerat.
                    Amet aliquam commodo gravida cras. Lectus euismod semper turpis nam neque eget.
                    </p>
                    <p className='text-[0.75rem]'>$5,000</p>
                </div>
            </div>
            <p className='text-white font-mono'>IN STOCK</p>
            <div className='text-white font-mono flex flex-col justify-between'>
                <p>Remove</p>
                <AddToCart />
            </div>
        </div>
    )
}