"use client"

import { initializeMagic } from "components/magic/initializeMagic";
import { Magic } from "magic-sdk";
import { useEffect, useState } from "react";
import CardFav from "../components/CardFav";
import FavoritesSvg from "../components/favoritesSVG";


export default function Favorites(){
  const [favorites, setFavorites] = useState([])

    const m: Magic = initializeMagic


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
              // console.log(jsonUser)
              // console.log(userId)

              try {
                const getfavs = await fetch('api/user/getlikedguitars', {
                    method: 'POST',
                    body: JSON.stringify({userId})
                  })
        
                const myfavorites = await getfavs.json();
                setFavorites(myfavorites)
                console.log(myfavorites)
                
              } catch {
                // Handle errors if required!
              }

             
          }
          }
          catch (error) {
          console.log(error);
      }
  };


    const createGuitar = async() => {
        try {
            const res = await fetch('api/guitars/createguitar', {
                method: 'POST',
                body: JSON.stringify({id: "123guitaridtest"})
              })
    
            const response = await res.json();
            console.log(response)
            
          } catch {
            // Handle errors if required!
          }
        }

    useEffect(() => {
        getFavorites()
        createGuitar()
    }, [])



    
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
          {favorites.map(() => (
            <section className='p-5 md:px-12 flex justify-center'>
                <CardFav />
            </section>
          ))}
        </main>
    )
}