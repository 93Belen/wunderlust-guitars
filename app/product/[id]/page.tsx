import AddToFavorites from "components/app/components/AddFavorite";
import AddToCart from "components/app/components/AddToCart";
import Image from "next/image";

export default function Product(){
    return (
        <main className='w-full p-5 md:p-28 md:grid grid-cols-2 flex flex-col gap-x-10 lg:gap-20 box-border text-white font-mono'>
            <section className='hidden md:flex flex-col h-fit gap-y-10 max-w-[600px]'>
                <div className='rounded-lg h-fit'>
                    <Image
                    src='/placeholderpic.jpg'
                    width={2500}
                    alt="guitar"
                    height={2500}
                    className='rounded-lg w-full h-auto'
                    />
                </div>
                <div className='flex w-full gap-5 max-w-[40vw]'>
                <Image
                    src='/placeholderpic.jpg'
                    width={2500}
                    alt="guitar"
                    height={2500}
                    className='rounded-lg w-[50%] h-auto'
                    />
                    <Image
                    src='/placeholderpic.jpg'
                    width={2500}
                    alt="guitar"
                    height={2500}
                    className='rounded-lg w-[50%] h-auto'
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
            </section>
            <section className='flex flex-col gap-5 max-w-[600px]'>
                <div className='text-white font-mono flex flex-col gap-5'>
                    <h1 className='text-[1.5rem] font-[700]'>Guitar name</h1>
                    <p>G2215-P90 Steamliner Junior Jet Electric Guitar<br/>
                        Soapbar single <br />
                         coil3-way switch </p>
                    <p>$400</p>
                </div>
                <div className='block md:hidden'>
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
                <div className='flex gap-5'>
                    <AddToCart />
                    <AddToFavorites />
                </div>
                <div>

                </div>
                <h2 className='text-[1.5rem]'>Similar Styles</h2>
                <div className='grid grid-cols-2 md:flex gap-2'>
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