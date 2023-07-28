import Image from "next/image";

export default function Product(){
    return (
        <main className='w-full p-2 md:p-28 md:grid grid-cols-2 flex flex-col gap-x-10 box-border'>
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
            <section>

            </section>
        </main>
    )
}