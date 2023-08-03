import { create } from "zustand";
import { persist } from "zustand/middleware";
import { WebStore } from './types/storeTypes';

export const useWebStore = create<WebStore>()(
  persist(
    (set) => ({
      cart: [],
      allGuitars: [],
      addAllGuitars: (payload) => set(() => ({ allGuitars: payload })),
      addToCart: (payload) => set((state) => ({ cart: [...state.cart, payload] })),
      removeAllCart: () => set(() => ({ cart: [] })),
      removeFromCart: (item) =>
        set((state) => ({ cart: state.cart.filter((cartItem) => cartItem.id !== item.id) })),
    }),
    { name: "web-store" }
  )
);
