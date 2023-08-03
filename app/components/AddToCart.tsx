"use client"

import { useWebStore } from "components/store"
import { Product } from "components/types/storeTypes"

export default function AddToCart({guitar}: {guitar: Product}) {
    const store = useWebStore()
    const addGuitarToCart = () => {
        if(!store.cart.includes(guitar)){
            store.addToCart(guitar)
        }
        else {
            window.alert("This guitar is already in your cart")
        }
    }
    return (
        <button onClick={addGuitarToCart} className='py-[0.5rem] px-[1rem] bg-purple font-mono text-white rounded-lg text-[1.125rem] font-normal w-[8rem]'>
            Add to Cart
        </button>
    )
}