"use client"

import { Product } from "components/types/storeTypes"
import { checkOut } from "components/stripe/checkOut"

export default function Checkout({lineItems}: {lineItems: Product[]}) {
    const itemsToCheckout = lineItems.map(item => ({
        price: item.default_price,
        quantity: 1
    }))
    
    return (
        <button
        onClick={()=> {
            checkOut({
                lineItems: itemsToCheckout
            })
        }}
         className='py-[0.5rem] px-[1rem] bg-purple font-mono text-white rounded-lg text-[1.125rem] font-normal w-[8rem] active:bg-[#394293]'>
            Checkout
        </button>
    )
}