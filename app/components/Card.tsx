"use client"

import AddToFavorites from "./AddFavorite";
import Link from "next/link";
import { Product } from "components/types/storeTypes";

// Size needs to be determined by prop comming from page where is rendered, or be 100% and determine size in page where rendered div
export default function Card({data}) {
  console.log(data)
  const queryParams = encodeURIComponent(JSON.stringify(data)); // Stringify and encode the data
  return (
    <div className={`bg-darkgray flex flex-col p-[0.5rem] justify-center items-center rounded-lg w-[100%] h-[100%] box-border gap-[1rem] max-w-[300px] md:p-3 lg:p-[1.25rem]`}>
      <div style={{backgroundImage: `url(${data.images[0]})`}} className="w-[100%] bg-gray rounded-lg h-[80%] bg-center bg-no-repeat bg-cover">
          <div className='w-full flex justify-end pr-2 pt-2 top-1'>
            <AddToFavorites id={data.id} />
          </div>
      </div>
      <Link href={{pathname: `/product/${data.id}`, query: { data: queryParams }}} className='w-full h-fit text-white font-mono font-normal'>
        <p className='md:text-[0.79rem] lg:text-[1rem]'>
          {data.description}
        </p>
      </Link>
    </div>
  );
}
