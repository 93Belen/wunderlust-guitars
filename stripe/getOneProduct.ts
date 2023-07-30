import Stripe from "stripe";

export const getOneProduct = async (id: string) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY! as string, {
    apiVersion: "2022-11-15"
  });

  try {
    const product = await stripe.products.retrieve(id);
    return product;
  } catch (error) {
    console.error("Error fetching product from Stripe:", error);
    throw error;
  }
};
