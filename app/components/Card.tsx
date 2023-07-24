"use client"

import AddToFavorites from "./AddFavorite";
import Image from "next/image";

export default function Card() {
  return (
    <div className="bg-darkgray flex flex-col p-[1.25rem] justify-center items-center rounded-lg w-fit h-fit box-border">
      <div className="w-[14.75rem] h-[15.625rem] bg-gray relative rounded-lg">
        <AddToFavorites />
        <Image
          src="/placeholderpic.jpg"
          height={500}
          width={500}
          alt="guitar"
          className="rounded-lg h-[100%] w-[100%]"
        />
      </div>
      <div className='w-[14.75rem] h-[4.625rem] text-white font-mono font-normal'>
        <p>
          Lorem ipsum dolor sit amet consectetur. Enim netus leo diam faucibus
          porta nullam
        </p>
      </div>
    </div>
  );
}
