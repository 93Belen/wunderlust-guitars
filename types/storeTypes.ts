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
    id: string;
    object: string;
    active: boolean;
    created: number;
    default_price: string | null | undefined; // Update this to match the Stripe.Product type
    description: string;
    images: string[]; // Update this to the appropriate type for images
    livemode: boolean;
    metadata: {
        [key: string]: string;
    };
    name: string;
    package_dimensions: any; // Update this to the appropriate type
    shippable: any; // Update this to the appropriate type
    statement_descriptor: any; // Update this to the appropriate type
    tax_code: any; // Update this to the appropriate type
    unit_label: any; // Update this to the appropriate type
    updated: number;
    url: any; // Update this to the appropriate type
  }
  