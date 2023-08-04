"use client"

import { ChangeEvent, useState } from "react"

export default function ContactForm(){
    const [formType, setFormType] = useState<string>()

    const selectFormType = (e: ChangeEvent<HTMLSelectElement>) => {
        const type = e.target.value;
        setFormType(type)
    }


    return (
        <div className='flex flex-col h-fit gap-3 w-[85vw] lg:w-[49rem]'>
            <h2 className='text-pink font-sans text-[2.625rem] font-[700]'>Contact Us</h2>
            <p className='text-white font-mono w-fit text-[1.5rem] font-normal'>Lorem ipsum dolor sit amet consectetur. 
                Enim netus leo diam faucibus porta nullam elementum. </p>
            <form className='flex flex-col h-fit gap-3 w-[85vw] lg:w-[49rem]'>
                <label htmlFor="" className='text-white font-mono text-[1.5rem] font-semibold'>NAME</label>
                <input type="text" className='h-[2.5rem] border-[1px] border-white bg-black rounded-lg px-2' />
                <label htmlFor="" className='text-white font-mono text-[1.5rem] font-semibold'>EMAIL</label>
                <input type="text" className='h-[2.5rem] border-[1px] border-white bg-black rounded-lg px-2' />
                <label htmlFor="" className='text-white font-mono text-[1.5rem] font-semibold'>REASON FOR CONTACT</label>
                <select onChange={selectFormType} className='h-[2.5rem] border-[1px] border-white bg-black appearance-none text-white font-mono p-2 rounded-lg'>
                    <option value="other">Other</option>
                    <option value="personal-shopper">Personal Shopper</option>
                    <option value="collection-curator">Collection Curator</option>
                    <option value="appraisals">Appraisals</option>
                    <option value="hand-delivery">Hand Delivery</option>
                </select>
                {/* PERSONAL SHOPPER */}
                {formType === "personal-shopper" && (
                    <div className='flex flex-col h-fit gap-3 w-[85vw] lg:w-[49rem]'>
                        <label htmlFor="" className='text-white font-mono text-[1.5rem] font-semibold'>WHAT ARE YOU LOOKING FOR</label>
                        <input type="text" className='h-[2.5rem] border-[1px] border-white bg-black rounded-lg px-2' />
                        <label htmlFor="" className='text-white font-mono text-[1.5rem] font-semibold'>PRICE RANGE</label>
                        <input type="text" className='h-[2.5rem] border-[1px] border-white bg-black rounded-lg px-2' />
                        <label htmlFor="" className='text-white font-mono text-[1.5rem] font-semibold'>HAVE YOU SEEN ANYTHING SIMILAR?</label>
                        <input type="text" className='h-[2.5rem] border-[1px] border-white bg-black rounded-lg px-2' />
                    </div>
                )}
                {/* COLLECTION CURATOR */}
                {formType === "collection-curator" && (
                    <div className='flex flex-col h-fit gap-3 w-[85vw] lg:w-[49rem]'>
                        <label htmlFor="" className='text-white font-mono text-[1.5rem] font-semibold'>WHAT ARE YOU LOOKING FOR</label>
                        <input type="text" className='h-[2.5rem] border-[1px] border-white bg-black rounded-lg px-2' />
                        <label htmlFor="" className='text-white font-mono text-[1.5rem] font-semibold'>DESCRIBE YOUR CURRENT COLLECTION</label>
                        <textarea cols={10} rows={5} className='border-[1px] max-w-[49rem] border-white bg-black rounded-lg p-2' />
                    </div>
                )}
                {/* APPRAISALS */}
                {formType === "appraisals" && (
                    <div className='flex flex-col h-fit gap-3 w-[85vw] lg:w-[49rem]'>
                        <label htmlFor="" className='text-white font-mono text-[1.5rem] font-semibold'>GUITAR NAME</label>
                        <input type="text" className='h-[2.5rem] border-[1px] border-white bg-black rounded-lg px-2' />
                        <label htmlFor="" className='text-white font-mono text-[1.5rem] font-semibold'>GUITAR CONDITIONS</label>
                        <select className='h-[2.5rem] border-[1px] border-white bg-black appearance-none text-white font-mono p-2 rounded-lg'>
                            <option value="">Perfect</option>
                            <option value="">Almost perfect</option>
                            <option value="">Very used</option>
                            <option value="">Modified</option>
                            <option value="">Broken</option>
                        </select>
                    </div>
                )}
                {/* HAND DELIVERY */}
                {formType === "hand-delivery" && (
                    <div className='flex flex-col h-fit gap-3 w-[85vw] lg:w-[49rem]'>
                        <label htmlFor="" className='text-white font-mono text-[1.5rem] font-semibold'>CITY/STATE/COUNTRY</label>
                        <input type="text" className='h-[2.5rem] border-[1px] border-white bg-black rounded-lg px-2' />
                        <label htmlFor="" className='text-white font-mono text-[1.5rem] font-semibold'>GUITAR</label>
                        <input type="text" className='h-[2.5rem] border-[1px] border-white bg-black rounded-lg px-2' />
                    </div>
                )}
                <label htmlFor="" className='text-white font-mono text-[1.5rem] font-semibold'>MESSAGE</label>
                <textarea cols={10} rows={10} className='border-[1px] max-w-[49rem] border-white bg-black rounded-lg p-2' />
            </form>
        </div>
    )
}