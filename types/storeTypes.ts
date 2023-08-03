export type CartItem = {
    name: string,
    id: string,
    images?: string[],
    decription?: string,
    unit_amount: number
}

export type WebStore = {
    cart: CartItem[],
    allGuitars: Product[],
    addAllGuitars: (payload: Product[]) => void
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
  