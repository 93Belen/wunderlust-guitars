"use client"

import { initializeMagic } from "components/magic/initializeMagic";
import { Magic } from "magic-sdk";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CardFav from "../components/CardFav";
import FavoritesSvg from "../components/favoritesSVG";
import { AnimatePresence, motion } from 'framer-motion'
import { Product } from "components/types/storeTypes";


export default function Favorites(){
  const [favorites, setFavorites] = useState([])
  const { push } = useRouter()
  const m: Magic = initializeMagic
  const [render, setRender] = useState(false)

  const removeFromFav = async (guitarId: string): Promise<void> => {
    try {
        // check if user is logged in
        const loggedIn: boolean = await m.user.isLoggedIn();
        if(loggedIn){
            const info = await m.user.getMetadata()
            const email = info.email
            const user = await fetch("/api/user/finduser", {
                method: "POST",
                body: JSON.stringify({email})
            })

            const jsonUser = await user.json()
            const userId = jsonUser.id

            const response = await fetch("/api/user/unlikeguitar", {
                method: "POST",
                body: JSON.stringify({
                    userId: userId,
                    guitarId: guitarId
                })
            }).then(() => setRender((state) => !state))
           
        }
        }
        catch (error) {
        console.log(error);
    }
};


// Get user's favorites for display
    const getFavorites = async (): Promise<void> => {
      try {
          const loggedIn: boolean = await m.user.isLoggedIn();
          if(loggedIn){
              const info = await m.user.getMetadata()
              const email = info.email
              const user = await fetch("/api/user/finduser", {
                  method: "POST",
                  body: JSON.stringify({email})
              })

              const jsonUser = await user.json()
              const userId = jsonUser.id

              try {
                const getfavs = await fetch('api/user/getlikedguitars', {
                    method: 'POST',
                    body: JSON.stringify({userId})
                  })
        
                const myfavorites = await getfavs.json();
                setFavorites(myfavorites)
                
              } catch {
                // Handle errors if required!
              }

             
          }
          // if user isnt logged in, go to log in page
          else {
              push("/login")
          }
          }
          catch (error) {
          console.log(error);
      }
  };


    useEffect(() => {
        getFavorites()
    }, [])
    useEffect(() => {
      getFavorites()
  }, [render])



    
    return (
        <main className='h-fit min-h-screen w-screen overflow-x-hidden box-border flex flex-col gap-y-20 md:gap-y-20 md:pt-20'>
          <section className='w-screen flex flex-col-reverse md:flex-row justify-between'>
            <div>
              <h2 className='font-sans text-[3.7rem] font-[700] leading-[3.1875rem] lg:leading-[7rem] md:leading-[7rem] text-gray tracking-[-0.20rem] md:tracking-[-0.11rem] md:text-[7rem] lg:text-[10rem] lg:mr-10 hidden md:block'>Favorites</h2>
              <h3 className='text-white font-mono text-[1.7rem] font-[700] mt-[-1rem] pl-4 leading-[2.35625rem] lg:leading-[-2rem] tracking-[-0.10rem] md:tracking-[-0.05rem] lg:text-[3rem]'>MY FAVORITES</h3>
            </div>
          <div>
            <FavoritesSvg />
          </div>
          </section>
          <motion.section layout className='h-fit w-screen box-border flex flex-col gap-y-20 md:gap-y-20 pb-20'>
          <AnimatePresence>
        {favorites.length > 0 && favorites.map((guitar: Product) => (
          <motion.section key={guitar.id} exit={{ opacity: 0 }} className='p-5 md:px-12 flex justify-center'>
            <CardFav onDelete={removeFromFav} key={guitar.name} guitar={guitar} />
          </motion.section>
        ))}
        {favorites.length === 0 && (
           <p className='font-mono text-white mx-auto'>Your don't have Favorites right now...</p>
        )}
      </AnimatePresence>
          </motion.section>
        </main>
    )
}