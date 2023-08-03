import { loadStripe, Stripe } from "@stripe/stripe-js";

// Define the interface for line items
interface LineItem {
  price: string;
  quantity: number;
}

// Define the return type of the getStripe function
type StripePromise = ReturnType<typeof loadStripe>;

// Define the return type of the checkOut function
export async function checkOut({ lineItems }: { lineItems: LineItem[] }): Promise<void> {
  let stripePromise: StripePromise | null = null;
console.log(lineItems)
  const getStripe = () => {
    if (!stripePromise) {
      stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);
    }
    return stripePromise;
  }

  const stripe: Stripe | null = await getStripe();

  if (!stripe) {
    console.error("Failed to load Stripe.");
    return;
  }

  await stripe.redirectToCheckout({
    shippingAddressCollection: { allowedCountries: ['US', 'CA'] },
    mode: 'payment',
    lineItems: lineItems,
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}`
  });
}
