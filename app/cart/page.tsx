"use client"
import { useWebStore } from "components/store"
import FavoritesSvg from "../components/favoritesSVG"
import CardCart from "../components/CardCart"
import Checkout from "../components/Checkout"
import { AnimatePresence, motion } from 'framer-motion'


export default function Cart(){
    const store = useWebStore()
    const cart = store.cart


    
    return (
        <main className='h-fit min-h-screen w-screen overflow-x-hidden box-border flex flex-col gap-y-20 md:gap-y-20 md:pt-20'>
          <section className='w-screen flex flex-col-reverse md:flex-row justify-between'>
            <div>
              <h2 className='font-sans text-[3.7rem] font-[700] leading-[3.1875rem] lg:leading-[7rem] md:leading-[7rem] text-gray tracking-[-0.20rem] md:tracking-[-0.11rem] md:text-[7rem] lg:text-[10rem] lg:mr-10 hidden md:block'>Cart</h2>
              <h3 className='text-white font-mono text-[1.7rem] font-[700] mt-[-1rem] pl-4 leading-[2.35625rem] lg:leading-[-2rem] tracking-[-0.10rem] md:tracking-[-0.05rem] lg:text-[3rem]'>MY CART</h3>
            </div>
          <div>
            <FavoritesSvg />
          </div>
          </section>
          <motion.section layout className='h-fit w-screen box-border flex flex-col gap-y-20 md:gap-y-20 pb-20'>
          <AnimatePresence>
        {cart.map((guitar) => (
          <motion.section key={guitar.id} exit={{ opacity: 0 }} className='p-5 md:px-12 flex justify-center'>
            <CardCart guitar={guitar} />
          </motion.section>
        ))}
      </AnimatePresence>
          </motion.section>
          {/* {cart.map((guitar) => (
            <section className='p-5 md:px-12 flex justify-center'>
                <CardCart guitar={guitar} />
            </section>
))} */}
          <section className='w-[90%] flex justify-end p-5'>
              <Checkout lineItems={cart} />
          </section>
        </main>
    )
}


