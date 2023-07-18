"use client"

import { initializeMagic } from "components/magic/initializeMagic";
import { useEffect } from "react";


export default function Favorites(){

    const magic = initializeMagic


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




    const getFavorites = async() => {
    try {
        const { email } = await magic.user.getInfo();
        const getfavs = await fetch('api/favorites/getmyfavorites', {
            method: 'POST',
            body: JSON.stringify({email})
          })

        const myfavorites = await getfavs.json();
        console.log(myfavorites)
        
      } catch {
        // Handle errors if required!
      }
    }
    useEffect(() => {
        getFavorites()
        createGuitar()
    }, [])



    
    return (
        <p>Favorites</p>
    )
}