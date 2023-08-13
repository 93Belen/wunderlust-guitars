'use client'

import { ReactNode, useEffect, useState } from "react"

export default function Hydrate({children}: {children: ReactNode}){
    const [isHydrated, setIsHydrated] =useState(false);
 
    useEffect(() => {
        setIsHydrated(true)
    })
    return (
        <>
        { isHydrated ? <>{children}</> : <div className='text-white font-mono m-auto'>Loading...</div>}
        </>
    )
}