import { create } from "zustand"
import { persist } from "zustand/middleware"

export const useWebStore = create()(
    persist(
        (set) => ({
            cart: [],
            allGuitars: []
        }),
        { name: "web-store" }
    )
)