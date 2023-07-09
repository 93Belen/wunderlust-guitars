"use client"
import { Magic } from "magic-sdk"

export default function Login(){

    const onSubmit = async() => {
        const magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY as string)
        const didToken = await magic.auth.loginWithMagicLink({email: 'belengm@live.com'})
        console.log(didToken)
    }

    return (
        <div className="p-10">
            <input className='bg-slate-300 m-5' type="text" name="" id="" />
            <button onClick={onSubmit} type='submit' className='bg-lime-500 p-2 rounded-md'>Log in</button>
        </div>
    )
}