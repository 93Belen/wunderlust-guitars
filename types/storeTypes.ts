export type WebStore = {
    cart: Product[],
    allGuitars: Product[]
    addAllGuitars: (payload: Product[]) => void
    addToCart: (payload: Product) => void,
    removeAllCart: () => void,
    removeFromCart: (item: Product) => void
}

// types/storeTypes.ts
export type Product = {
    description?: string | null
    id: string;
    images: string[];
    metadata: {
      [key: string]: string;
    };
    name: string;
    unit_amount: number | null;
  }
  