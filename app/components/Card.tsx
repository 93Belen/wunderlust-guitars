"use client"

import AddToFavorites from "./AddFavorite";
import Image from "next/image";

// Size needs to be determined by prop comming from page where is rendered, or be 100% and determine size in page where rendered div
export default function Card() {
  return (
    <div className={`bg-darkgray flex flex-col p-[1.25rem] justify-center items-center rounded-lg w-[100%] max-h-[100%] box-border gap-[1rem] max-w-[300px] md:p-3 lg:p-[1.25rem]`}>
      <div className="w-[100%] bg-gray rounded-lg bg-[url('/placeholderpic.jpg')] h-[17rem] md:h-[12rem] lg:h-[17rem] bg-center bg-no-repeat bg-cover">
          <div className='w-full flex justify-end pr-2 pt-2 top-1'>
            <AddToFavorites />
          </div>
      </div>
      <div className='w-full h-fit text-white font-mono font-normal'>
        <p className='text-[1rem] md:text-[0.9rem] lg:text-[1.2rem]'>
          Lorem ipsum dolor sit amet consectetur. Enim netus leo diam faucibus
          porta nullam
        </p>
      </div>
    </div>
  );
}
