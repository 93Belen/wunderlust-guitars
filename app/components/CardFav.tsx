"use client"
import { initializeMagic } from "components/magic/initializeMagic";
import formatPrice from "components/util/PriceFormat";
import { Magic } from "magic-sdk";
import Image from "next/image"
import AddToCart from "./AddToCart"
import Link from "next/link";
import { Product } from "components/types/storeTypes";
import { motion } from "framer-motion"

export default function CardFav({ guitar, onDelete }: { guitar: Product, onDelete: (guitarId: string) => Promise<void> }){
    const m : Magic = initializeMagic;
    const queryParams = encodeURIComponent(JSON.stringify(guitar)); // Stringify and encode the data

    // // remove guitar from favorites
    // const removeFromFav = async (): Promise<void> => {
    //     try {
    //         // check if user is logged in
    //         const loggedIn: boolean = await m.user.isLoggedIn();
    //         if(loggedIn){
    //             const info = await m.user.getMetadata()
    //             const email = info.email
    //             const user = await fetch("/api/user/finduser", {
    //                 method: "POST",
    //                 body: JSON.stringify({email})
    //             })

    //             const jsonUser = await user.json()
    //             const userId = jsonUser.id

    //             const response = await fetch("/api/user/unlikeguitar", {
    //                 method: "POST",
    //                 body: JSON.stringify({
    //                     userId: userId,
    //                     guitarId: guitar.id
    //                 })
    //             })
               
    //         }
    //         }
    //         catch (error) {
    //         console.log(error);
    //     }
    // };

    return (
        <motion.div
        className='flex justify-between w-[99%] max-w-[900px]'>
            <Link href={{pathname: `/product/${guitar.id}`, query: { data: queryParams }}} className='flex gap-x-4 h-[8.375rem] rounded-lg'>
                <Image
                src={guitar.images[0]}
                height={500}
                width={500}
                alt="guitar"
                className='md:max-w-[8.375rem] max-w-[8.375rem] h-auto pr-5 md:pr-0 rounded-lg'
                />
            </Link>
                <motion.div className='flex flex-col text-white font-mono md:w-[19.9375rem] justify-between'>
                    <motion.h2 className='text-[1rem]'>{guitar.name}</motion.h2>
                    <motion.p className='text-[0.75rem] hidden md:block'>Color: {guitar.metadata.color}</motion.p>
                    <motion.p className='text-[0.75rem] hidden md:block'>Weight: {guitar.metadata.weight}</motion.p>
                    <motion.p className='text-[0.75rem] hidden md:block'>{formatPrice(guitar.unit_amount as number)}</motion.p>
                    <motion.button onClick={() => (onDelete(guitar.id))} className='cursor-pointer md:hidden text-left'>Remove</motion.button>
                    <motion.div layout className='text-white font-mono md:hidden grid grid-rows-2 gap-x-0 text-left'>
                        <div className='self-end row-span-2'>
                            <AddToCart guitar={guitar} />
                        </div>
                    </motion.div>
                </motion.div>
            <motion.p className='text-white font-mono hidden md:block'>IN STOCK</motion.p>
            <motion.div className='text-white font-mono md:flex flex-col justify-between hidden'>
                <motion.button onClick={() => (onDelete(guitar.id))} className='cursor-pointer'>Remove</motion.button>
                <AddToCart key={guitar.name + guitar.id} guitar={guitar} />
            </motion.div>
        </motion.div>
    )
}
// const queryParams = encodeURIComponent(JSON.stringify(guitar)); // Stringify and encode the data
// <Link href={{pathname: `/product/${guitar.id}`, query: { data: queryParams }}}