"use client"
import Image from "next/image";


export default function CorauselEment ({ images }) {
{/* <div className="carousel-item w-full">
    <Image src='/placeholderpic.jpg'
    width={2500}
    height={2500}
    alt="pic"
    />
  </div>  */}

  return (
    <div className="w-64 carousel rounded-box">
  {images.map(guitar => (
    <div className="carousel-item w-full">
    <Image src={guitar}
    width={2500}
    height={2500}
    alt="pic"
    />
  </div> 
  ))}
</div>
  )
  
};


