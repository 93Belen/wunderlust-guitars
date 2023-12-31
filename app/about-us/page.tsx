import Image from "next/image";

export default function About(){
    return (
        <main className='h-fit min-h-screen px-4 md:px-8 w-screen overflow-x-hidden box-border flex flex-col gap-y-20 md:gap-y-0'>
            <section  className='text-white font-sans text-[2.25rem] md:text-[4.5rem] font-[700] bg-[url("/aboutmobile.jpg")]  md:bg-[url("/aboutpic.jpg")] w-screen h-[25rem] p-2 md:pl-16 pr-0 md:ml-[-2rem] ml-[-1rem] bg-no-repeat bg-center bg-cover flex items-end'>
                <h1 className="">We are <br />
                Wunderlust Guitars</h1>
            </section>
            <section className='h-fit mt-6 w-full flex flex-col gap-y-10 md:mb-20'>
            <div className='w-full flex h-fit md:justify-end md:w-screen justify-left'>
                <div className='md:ml-5'>
                    <h3 className='font-sans text-[4.5rem] font-[700] leading-[3.1875rem] lg:leading-[7rem] md:leading-[7rem] text-gray tracking-[-0.20rem] md:tracking-[-0.11rem] md:text-[9rem] lg:text-[10rem] lg:mr-10'>About Us</h3>
                    <h4 className='text-white font-mono text-[1.7rem] font-[700] mt-[-1rem] pl-2 leading-[2.35625rem] lg:leading-[-2rem] tracking-[-0.10rem] md:tracking-[-0.05rem] lg:text-[3rem]'>Ou story</h4>
                </div>
            </div>
            <div className='grid h-fit w-full md:grid-cols-2 md:grid-rows-1 justify-center'>
                <div className='w-full md:w-[90%] lg:w-full ms:col-start-1 flex justify-center rounded-lg self-start pt-10' >
                    <Image
                    src='/aboutpic2.jpg'
                    width={2500}
                    height={2500}
                    alt='about'
                    className='md:w-[100%] lg:w-[70%] self-center rounded-lg'
                    />
                </div>
                <div className='h-fit w-screen mr-[-1rem] row-start-1 justify-center mt-5 md:col-start-2 p-5'>
                    <p className='text-white font-mono text-[1.5rem] md:mr-[15%] 2xl:text-[2rem] self-center md:w-[40%] w-[90%] md:p-x-10 px-1'>
                    <span className='text-pink'>Alright, prepare yourselves</span> because we're about to plunge headfirst into the story of Ben 
                    and his obsession with chasing down the best and most unique guitars.
                    Let's rewind the clock and take a trip back to Ben's roots. 
                    Born in the home of punk rock, London, this man didn't simply stumble upon music; 
                    it was ingrained in his very DNA. And growing up in the Kansas City music scene, surely didn’t  dampen his passion. 
                    Everybody around this boy was a musician.
                    </p>
                    </div>
            </div>
        </section>
            <section className='h-fit bg-[url("/skypic.jpg")] bg-no-repeat bg-cover p-5 md:p-20 w-screen ml-[-1rem] flex md:ml-[-2rem] justify-center'>
                <p className='text-white font-mono text-[1.5rem] self-center text-center md:w-[38rem] 2xl:w-[50rem] 2xl:text-[2rem]'>
                Fast forward to today, and this OCD-type-of-guy has taken his guitar addiction to a whole new level. 
                But make no mistake, he ain't no random fool who fell off a Kansas farm truck. No, sir!  
                <span className='text-pink'>This guy toured through North America, Europe, and the "God-save-the-Queen" UK</span> in 2015 and 2016. 
                He was the tour manager for Beautiful Bodies. And in 2016, part of Moose Blood’s crew in their North American tour. 
                Oh, and let me tell you, he learned the hell out of taking care of their instruments.
                </p>
                
            </section>
            <section className='h-fit md:h-fit lg:pl-52 md:mt-28'>
            <div className='w-full flex h-fit md:w-screen justify-left'>
                <div className='md:ml-5'>
                    <h3 className='font-sans text-[3.7rem] font-[700] leading-[3.1875rem] lg:leading-[7rem] md:leading-[7rem] text-gray tracking-[-0.20rem] md:tracking-[-0.11rem] md:text-[9rem] lg:text-[10rem] lg:mr-10'>Denmark</h3>
                    <h4 className='text-pink font-mono text-[1.7rem] font-[700] mt-[-1rem] pl-4 leading-[2.35625rem] lg:leading-[-2rem] tracking-[-0.10rem] md:tracking-[-0.05rem] lg:text-[3rem]'>Street</h4>
                </div>
            </div>
            <div className='flex flex-col md:flex-row w-full'>
                <div className='w-full md:max-w-[650px] 2xl:max-w-[1000px] md:pl-10 md:pt-16'>
                    <p className='text-white font-mono text-[1.5rem] self-center px-1 2xl:text-[2rem]' >
                    But wait, there's more! 
                    Ben worked on Denmark Street in London, and if you don't know what that street means, 
                    search it!
                    It's a real music shop heaven, and Ben was right in the thick of it, 
                    soaking up all the knowledge and secrets of the trade.</p>
                </div>
                <div className='flex justify-center flex-col w-full md:w-[50%] md:pl-10 md:mt-[-5rem]'>
                    <Image
                    src="/ben.png"
                    width={2500}
                    height={2500}
                    alt='ben'
                    className='w-auto h-auto md:max-w-[400px]'
                     />
                </div>
            </div>

            </section>
            <section className='h-fit bg-[url("/skypic.jpg")] bg-no-repeat bg-cover w-screen ml-[-1rem] md:ml-[-2rem] bg-bottom' >
                <div className='h-fit mb-40 md:grid md:grid-cols-2 md:p-10 md:mt-32 p-4' >
                <div className='md:col-start-2 flex items-center'>
                    <p className='text-white font-mono text-[1.5rem] px-1 md:max-w-[38rem] 2xl:max-w-[50rem] 2xl:text-[2rem]'>
                    And if you thought that was the end of his story, think again. 
                    When he was 37, Ben married Belen, who shares his love for traveling the world. 
                    That means if you're wondering whether that guitar you've been dreaming about is 
                    sitting in some dude's house in Madrid, or locked away in a music shop in Berlin, 
                    you bet that Ben knows about it. <span className='text-pink'>He's been there, and played that.</span> 
                    So, my friends, buckle up, because this ride is about to get crazy. Welcome to Wunderlust guitars.
                    </p>
                </div>
                <div className='col-start-1 md:w-[80%] 2xl:w-[90%] row-start-1 w-full flex justify-center'>
                <Image
                    src="/benandbelen.jpg"
                    width={2500}
                    height={2500}
                    alt='ben'
                    className='w-auto h-auto md:pt-18 rounded-lg mt-2'
                     />
                </div>
                </div>
            </section>
        </main>
    )
}