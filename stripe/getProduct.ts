import Stripe from "stripe"

export const getProduct = async() => {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
        apiVersion: "2022-11-15"
    })
    const products = await stripe.products.list()
    const productWithPrices = await Promise.all(
        products.data.map(async (product) => {
            const prices = await stripe.prices.list({product: product.id})
            return {
                id: product.id,
                name: product.name,
                metadata: product.metadata,
                unit_amount: prices.data[0].unit_amount,
                images: product.images,
                currency: prices.data[0].currency,
                description: product.description,
                default_price: product.default_price as string
            }
        })
    )
    return productWithPrices
}

