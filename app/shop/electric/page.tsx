'use client'

import { useWebStore } from "components/store";
import Card from "../../components/Card";

export default function Electric(){
    const store = useWebStore()
    const allGuitars = store.allGuitars
    const electric = allGuitars.filter(guitar => {
        if(guitar.metadata.electric === 'true'){
            return guitar
        }
    })
    return (
        <section className='w-full max-w-[550px] md:max-w-none grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:w-[100%] lg:max-w-[1250px]'>
            {electric.map((guitar) => (
                <div className='h-[15rem] lg:h-[22rem]'>
                <Card data={guitar} />
            </div>
            ))}
        </section>
    )
}