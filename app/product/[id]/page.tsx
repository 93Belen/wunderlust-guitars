"use client"

import AddToFavorites from "components/app/components/AddFavorite";
import AddToCart from "components/app/components/AddToCart";
import CarouselElement from "components/app/components/CrouselElement";
import myImageLoader from "components/util/loader";
import formatPrice from "components/util/PriceFormat";
import Image from "next/image";

export default function Product({searchParams}){
    // Parse the data query parameter back to an object
  const parsedData = searchParams.data ? JSON.parse(decodeURIComponent(searchParams.data)) : null;
    console.log("Here", parsedData)
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

                </div>
                <h2 className='text-[1.5rem]'>Similar Styles</h2>
                <div className='grid grid-cols-2 md:flex gap-2 max-w-[500px] m-auto md:max-w-none md:m-0'>
                <div>
                    <Image
                        src='/placeholderpic.jpg'
                        width={2500}
                        alt="guitar"
                        height={2500}
                        className='rounded-lg w-full h-auto'
                        />
                </div>
                <div>
                    <Image
                        src='/placeholderpic.jpg'
                        width={2500}
                        alt="guitar"
                        height={2500}
                        className='rounded-lg w-full h-auto'
                        />
                </div>
                <div>
                    <Image
                        src='/placeholderpic.jpg'
                        width={2500}
                        alt="guitar"
                        height={2500}
                        className='rounded-lg w-full h-auto'
                        />
                </div>
                <div>
                    <Image
                        src='/placeholderpic.jpg'
                        width={2500}
                        alt="guitar"
                        height={2500}
                        className='rounded-lg w-full h-auto'
                        />
                </div>
                </div>
            </section>
        </main>
    )
}