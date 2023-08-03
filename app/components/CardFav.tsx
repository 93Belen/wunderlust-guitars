"use client"
import { initializeMagic } from "components/magic/initializeMagic";
import formatPrice from "components/util/PriceFormat";
import { Magic } from "magic-sdk";
import Image from "next/image"
import AddToCart from "./AddToCart"
import Link from "next/link";
import { Product } from "components/types/storeTypes";

export default function CardFav({guitar}: {guitar: Product}){
    const m : Magic = initializeMagic;
    const queryParams = encodeURIComponent(JSON.stringify(guitar)); // Stringify and encode the data


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
            <Link href={{pathname: `/product/${guitar.id}`, query: { data: queryParams }}} className='flex gap-x-4 h-[8.375rem] rounded-lg'>
                <Image
                src={guitar.images[0]}
                height={500}
                width={500}
                alt="guitar"
                className='md:max-w-[8.375rem] max-w-[8.375rem] h-[100%] rounded-lg'
                />
                <div className='flex flex-col text-white font-mono md:w-[19.9375rem] justify-between'>
                    <h2 className='text-[1rem]'>{guitar.name}</h2>
                    <p className='text-[0.75rem]'>Color: {guitar.metadata.color}</p>
                    <p className='text-[0.75rem]'>Weight: {guitar.metadata.weight}</p>
                    <p className='text-[0.75rem]'>{formatPrice(guitar.unit_amount as number)}</p>
                    <div className='text-white font-mono md:hidden grid grid-cols-2 grid-rows-2 gap-x-0'>
                        <p>IN STOCK</p> 
                        <div className='self-end row-span-2'>
                            <AddToCart />
                        </div>
                        <button onClick={removeFromFav} className='cursor-pointer'>Remove</button>
                    </div>
                </div>
            </Link>
            <p className='text-white font-mono hidden md:block'>IN STOCK</p>
            <div className='text-white font-mono md:flex flex-col justify-between hidden'>
                <button onClick={removeFromFav} className='cursor-pointer'>Remove</button>
                <AddToCart />
            </div>
        </div>
    )
}
// const queryParams = encodeURIComponent(JSON.stringify(guitar)); // Stringify and encode the data
// <Link href={{pathname: `/product/${guitar.id}`, query: { data: queryParams }}}