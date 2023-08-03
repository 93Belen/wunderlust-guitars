export default function GuitarInfo({data}: {data: string}){
    
    return (
        <section className='text-[1rem] font-normal w-full md:w-[90%] py-2 md:py-5'>
            <p>{data}</p>
        </section>
    )
}