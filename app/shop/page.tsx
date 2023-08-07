"use client"

import Card from "../components/Card";
import { useEffect, useState } from "react";

export default function Popular(){
    const [popular, setPopular] = useState([])

    const getPopularGuitars = async() => {
      const popular = await fetch("/api/guitar/getpopular");
      const popularJson = await popular.json();
      setPopular(popularJson)
      console.log(popularJson)
    }
    useEffect(()=> {
      getPopularGuitars()
    }, [])
  



    return (
        <section className='w-full max-w-[550px] md:max-w-none grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:w-[100%] lg:max-w-[1250px]'>
            {popular.map((guitar) => (
                <div className='h-[15rem] lg:h-[22rem]'>
                <Card data={guitar} />
            </div>
            ))}
        </section>
    )
}