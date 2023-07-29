"use client"
import Image from "next/image";


export default function CorauselEment ({ images }) {

  return (
    <div className="w-64 carousel rounded-box">
  <div className="carousel-item w-full">
    <Image src='/placeholderpic.jpg'
    width={2500}
    height={2500}
    alt="pic"
    />
  </div> 
  <div className="carousel-item w-full">
  <Image src='/placeholderpic.jpg'
    width={2500}
    height={2500}
    alt="pic"
    />
  </div> 
  <div className="carousel-item w-full">
    <Image src='/placeholderpic.jpg'
    width={2500}
    height={2500}
    alt="pic"
    />
  </div> 
  <div className="carousel-item w-full">
  <Image src='/placeholderpic.jpg'
    width={2500}
    height={2500}
    alt="pic"
    />
  </div> 
</div>
  )
  
};


