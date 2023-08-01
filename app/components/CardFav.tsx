"use client"
import { initializeMagic } from "components/magic/initializeMagic";
import { Magic } from "magic-sdk";
import Image from "next/image"
import { getModeForResolutionAtIndex } from "typescript";
import AddToCart from "./AddToCart"

export default function CardFav({guitar}){
    const m : Magic = initializeMagic;



    const removeFromFav = async (): Promise<void> => {
        try {
            const loggedIn: boolean = await m.user.isLoggedIn();
            if(loggedIn){
                const info = await m.user.getMetadata()
                const email = info.email
                const user = await fetch("/api/user/finduser", {
                    method: "POST",
                    body: JSON.stringify({email})
                })

                const jsonUser = await user.json()
                const userId = jsonUser.id
                // //console.logjsonUser)
                // //console.loguserId)
                const response = await fetch("/api/user/unlikeguitar", {
                    method: "POST",
                    body: JSON.stringify({
                        userId: userId,
                        guitarId: guitar.id
                    })
                })
               
            }
            }
            catch (error) {
            //console.logerror);
        }
    };

    return (
        <div className='flex justify-between w-[99%] max-w-[900px]'>
            <div className='flex gap-x-4 h-[8.375rem] rounded-lg'>
                <Image
                src={guitar.images[0]}
                height={500}
                width={500}
                alt="guitar"
                className='md:max-w-[8.375rem] max-w-[8.375rem] h-[100%] rounded-lg'
                />
                <div className='flex flex-col text-white font-mono md:w-[19.9375rem] justify-between'>
                    <h2 className='text-[1rem]'>{guitar.name}</h2>
                    <p className='text-[0.75rem]'>Color Shell Pink</p>
                    <p className='text-[0.75rem]'>Weight: 12lb</p>
                    <p className='text-[0.75rem]'>$5,000</p>
                    <div className='text-white font-mono md:hidden grid grid-cols-2 grid-rows-2 gap-x-0'>
                        <p>IN STOCK</p> 
                        <div className='self-end row-span-2'>
                            <AddToCart />
                        </div>
                        <button onClick={removeFromFav} className='cursor-pointer'>Remove</button>
                    </div>
                </div>
            </div>
            <p className='text-white font-mono hidden md:block'>IN STOCK</p>
            <div className='text-white font-mono md:flex flex-col justify-between hidden'>
                <button onClick={removeFromFav} className='cursor-pointer'>Remove</button>
                <AddToCart />
            </div>
        </div>
    )
}