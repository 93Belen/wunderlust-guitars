"use client"

import AddToFavorites from "components/app/components/AddFavorite";
import AddToCart from "components/app/components/AddToCart";
import CarouselElement from "components/app/components/CrouselElement";
import GuitarInfo from "components/app/components/GuitarInfo";
import { useWebStore } from "components/store";
import { ProductProps } from "components/types/ProductPropsType";
import { SearchParamsType } from "components/types/searchParamsType";
import { Product } from "components/types/storeTypes";
import myImageLoader from "components/util/loader";
import formatPrice from "components/util/PriceFormat";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Product({searchParams}: ProductProps){
    console.log(searchParams)
    const store = useWebStore()
    const allGuitars = store.allGuitars
    // Parse the data query parameter back to an object
  const parsedData: SearchParamsType = searchParams.data ? JSON.parse(decodeURIComponent(searchParams.data)) : null;


  const similarStyles: Product[] = allGuitars.filter((guitar) => {
      if(guitar.id !== parsedData.id){
        if(guitar.metadata["6 strings"] === parsedData.metadata["6 strings"] && guitar.metadata.acoustic === parsedData.metadata.acoustic){
            return guitar
    }
        else if(guitar.metadata.electric === parsedData.metadata.electirc){
            return guitar
        }
        }
       
    })

console.log("SIMILAR STYLES:", similarStyles)


    //console.log("Here", parsedData)
    const [data, setData] = useState(parsedData.description)
    const changeTab = (tab: string) => {
        if(tab === 'description'){
            setData(parsedData.description)
        }
        else if(tab === 'specs'){
            setData(parsedData.metadata.specs)
        }
        else if(tab === 'backgroundStory'){
            setData(parsedData.metadata.backgroundStory)
        }
        else {
            setData(parsedData.description)
        }

    }
    const images = [
        parsedData.images[0],
        parsedData.metadata.imageangle,
        parsedData.metadata.imagefar,
        parsedData.metadata.imageclose
        // Add more image URLs as needed
      ];
    return (
        <main className='w-full p-5 md:p-28 md:grid grid-cols-2 flex flex-col gap-x-10 lg:gap-20 box-border text-white font-mono max-w-[1600px] m-auto xl:gap-36'>
            <section className='hidden md:flex flex-col h-fit gap-y-10'>
                <div className='rounded-lg h-fit'>
                    <Image
                    src={parsedData.images[0]}
                    width={2500}
                    alt="guitar"
                    height={2500}
                    className='rounded-lg w-full h-auto'
                    />
                </div>
                <div className='flex w-full gap-5 max-w-[40vw]'>
                <Image
                    src={parsedData.metadata.imageangle}
                    width={2500}
                    alt="guitar"
                    height={2500}
                    className='rounded-lg w-[50%] h-auto'
                    loader={myImageLoader}
                    />
                    <Image
                    src={parsedData.metadata.imageclose}
                    width={2500}
                    alt="guitar"
                    height={2500}
                    className='rounded-lg w-[50%] h-auto'
                    />
                </div>
                <div>
                    <Image
                        src={parsedData.metadata.imagefar}
                        width={2500}
                        alt="guitar"
                        height={2500}
                        className='rounded-lg w-full h-auto'
                        />
                </div>
            </section>
            <section className='flex flex-col gap-5'>
                <div className='text-white font-mono flex flex-col gap-5'>
                    <h1 className='text-[1.5rem] font-[700]'>{parsedData.name}</h1>
                    <p>{parsedData.description}</p>
                    <p>
                        {formatPrice(parsedData.unit_amount)}
                    </p>
                </div>
                <div className='block md:hidden h-fit m-auto'>
                <div>
                    <CarouselElement images={images} />
                </div>
                </div>
                <div className='flex gap-5'>
                    <AddToCart />
                    <AddToFavorites id={""} />
                </div>
                <div>
                <div className='w-full text-white flex justify-between'>
                    <p className='cursor-pointer' onClick={() => {changeTab("description")}}>Description</p>
                    <p className='cursor-pointer' onClick={() => {changeTab("specs")}}>Specs</p>
                    <p className='cursor-pointer' onClick={() => {changeTab("backgroundStory")}}>Bakground Story</p>

                </div>
                <GuitarInfo data={data} />
                </div>  
                <h2 className='text-[1.5rem]'>Similar Styles</h2>
                <div className='grid grid-cols-2 md:flex gap-2 max-w-[500px] m-auto md:max-w-none md:m-0'>
                {similarStyles.map((guitar) => {
                    const queryParams = encodeURIComponent(JSON.stringify(guitar)); // Stringify and encode the data
                    return (
                <Link href={{pathname: `/product/${guitar.id}`, query: { data: queryParams }}}>
                    <Image
                        src={guitar.images[0]}
                        width={2500}
                        alt="guitar"
                        height={2500}
                        className='rounded-lg w-full h-auto'
                        />
                </Link>
                )})}
                </div>
            </section>
        </main>
    )
}