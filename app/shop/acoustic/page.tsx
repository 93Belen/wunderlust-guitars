'use client'

import { useWebStore } from "components/store";
import Card from "../../components/Card";


export default function Acoustic(){
    const store = useWebStore()
    const allGuitars = store.allGuitars
    
    const acoustic = allGuitars.filter(guitar => {
        if(guitar.metadata.acoustic === 'true'){
            return guitar
        }
    })

    return (
        <section className='w-full max-w-[550px] md:max-w-none grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:w-[100%] lg:max-w-[1250px]'>
            {acoustic.map((guitar) => (
                <div className='h-[15rem] lg:h-[22rem]'>
                <Card data={guitar} />
            </div>
            ))}
        </section>
    )
}