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
    allGuitars: CartItem[],
    addAllGuitars: (payload: CartItem[]) => void
}

export const useWebStore = create<WebStore>()(
    persist(
        (set) => ({
            cart: [],
            allGuitars: [],
            addAllGuitars: (payload) => set(() => ({allGuitars: payload}))
        }),
        { name: "web-store" }
    )
)