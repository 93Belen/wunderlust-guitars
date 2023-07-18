import Stripe from "stripe"

export const getProduct = async() => {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
        apiVersion: "2022-11-15"
    })
    const product = await stripe.products.list()
    return product
}