import Stripe from "stripe";

export const getOneProduct = async (id: string) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY! as string, {
    apiVersion: "2022-11-15"
  });

  try {
    const product = await stripe.products.retrieve(id);
    return product;
  } catch (error) {
    // Handle the error if product is not found
    if (
      error instanceof Stripe.errors.StripeInvalidRequestError &&
      error.raw.code === "resource_missing"
    ) {
      console.log("Product not found:");
      return null;
    } else {
      // Handle other errors
      console.error("Error retrieving product:", error);
      return null;
    }
  }
};
