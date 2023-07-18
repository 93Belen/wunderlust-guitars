import { create } from "zustand"
import { persist } from "zustand/middleware"

type CartItem = {
    name: string,
    id: string,
    images?: string[],
    decription?: string,
    unit_amount: number
}

type WebStore = {
    cart: CartItem[],
    allGuitars: CartItem[]
}

export const useWebStore = create<WebStore>()(
    persist(
        (set) => ({
            cart: [],
            allGuitars: []
        }),
        { name: "web-store" }
    )
)