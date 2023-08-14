'use client'
import { useWebStore } from "components/store"
import { Product } from "components/types/storeTypes"
import formatPrice from "components/util/PriceFormat"
import Image from "next/image"
import Link from "next/link"
import AddToFavorites from "./AddFavorite"
import { motion } from "framer-motion"

export default function CardCart({guitar}: {guitar: Product}){
    const store = useWebStore()
    const queryParams = encodeURIComponent(JSON.stringify(guitar)); // Stringify and encode the data
    const removeItemFromCart = () => {
        store.removeFromCart(guitar)
    }
    return (
        <motion.div
        key={guitar.id}
        className='flex justify-between w-[99%] max-w-[900px]'>
            <div className='flex gap-x-4 h-[8.375rem] rounded-lg'>
            <Link href={{pathname: `/product/${guitar.id}`, query: { data: queryParams }}}>
                <Image
                src={guitar.images}
                height={500}
                width={500}
                alt="guitar"
                className='md:max-w-[8.375rem] max-w-[8.375rem] h-[100%] rounded-lg'
                />
            </Link>
                <div className='flex flex-col text-white font-mono md:w-[19.9375rem] justify-between'>
                    <h2 className='text-[1rem]'>{guitar.name}</h2>
                    <p className='text-[0.75rem]'>Color: {guitar.metadata.color}</p>
                    <p className='text-[0.75rem]'>Weight: {guitar.metadata.weight}</p>
                    <p className='text-[0.75rem]'>{formatPrice(guitar.unit_amount as number)}</p>
                    <div className='text-white font-mono md:hidden'>
                    <p className='cursor-pointer'><span className="active:text-red hover:text-red duration-[0.4s]" onClick={removeItemFromCart}>Remove</span> | <AddToFavorites id={guitar.id} guitar={guitar} /></p>
                    </div>
                </div>
            </div>
            <div className='text-white font-mono hidden md:block'>
                <p className='cursor-pointer flex gap-10'><span className="active:text-red hover:text-red duration-[0.4s]" onClick={removeItemFromCart}>Remove</span> | <AddToFavorites guitar={guitar} id={guitar.id} /></p>
            </div>
        </motion.div>
    )
}