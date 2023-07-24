"use client"

export default function ContactForm(){
    return (
        <div className='flex flex-col h-fit gap-3 w-[23.875rem] md:w-[49rem]'>
            <h2 className='text-pink font-sans text-[2.625rem] font-[700]'>Contact Us</h2>
            <p className='text-white font-mono w-fit text-[1.5rem] font-normal'>Lorem ipsum dolor sit amet consectetur. 
                Enim netus leo diam faucibus porta nullam elementum. </p>
            <form className='flex flex-col h-fit gap-3 w-[23.875rem] md:w-[49rem]'>
                <label htmlFor="" className='text-white font-mono text-[1.5rem] font-semibold'>NAME</label>
                <input type="text" className='h-[2.5rem] border-[1px] border-white bg-black' />
                <label htmlFor="" className='text-white font-mono text-[1.5rem] font-semibold'>EMAIL</label>
                <input type="text" className='h-[2.5rem] border-[1px] border-white bg-black' />
                <label htmlFor="" className='text-white font-mono text-[1.5rem] font-semibold'>REASON FOR CONTACT</label>
                <input type="text" className='h-[2.5rem] border-[1px] border-white bg-black' />
                <label htmlFor="" className='text-white font-mono text-[1.5rem] font-semibold'>MESSAGE</label>
                <textarea cols={10} rows={10} className='border-[1px] max-w-[49rem] border-white bg-black' />
            </form>
        </div>
    )
}