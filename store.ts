import { create } from "zustand"
import { persist } from "zustand/middleware"
import { WebStore } from './types/storeTypes'

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