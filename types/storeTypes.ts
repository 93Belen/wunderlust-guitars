export type CartItem = {
    name: string,
    id: string,
    images?: string[],
    decription?: string,
    unit_amount: number
}

export type WebStore = {
    cart: CartItem[],
    allGuitars: CartItem[],
    addAllGuitars: (payload: CartItem[]) => void
}