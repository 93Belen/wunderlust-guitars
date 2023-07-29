"use client"
import Image from "next/image"

export default function CardCart(){
    return (
        <div className='flex justify-between w-[99%] max-w-[900px]'>
            <div className='flex gap-x-4 h-[8.375rem] rounded-lg'>
                <Image
                src="/placeholderpic.jpg"
                height={500}
                width={500}
                alt="guitar"
                className='md:max-w-[8.375rem] max-w-[8.375rem] h-[100%] rounded-lg'
                />
                <div className='flex flex-col text-white font-mono md:w-[19.9375rem] justify-between'>
                    <h2 className='text-[1rem]'>Guitar Name</h2>
                    <p className='text-[0.75rem]'>Color Shell Pink</p>
                    <p className='text-[0.75rem]'>Weight: 12lb</p>
                    <p className='text-[0.75rem]'>$5,000</p>
                    <div className='text-white font-mono md:hidden'>
                        <p>Remove | Save For Later</p>
                    </div>
                </div>
            </div>
            <div className='text-white font-mono hidden md:block'>
                <p>Remove | Save For Later</p>
            </div>
        </div>
    )
}