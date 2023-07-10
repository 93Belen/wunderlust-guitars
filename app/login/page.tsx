"use client"
import { Magic, RPCError, RPCErrorCode } from 'magic-sdk';
import { useState } from 'react';

export default function Login(){
    const [email, setEmail] = useState("")

    const onSubmit = async() => {
        try{
            const magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY as string)
            const didToken = await magic.auth.loginWithMagicLink({email: email})
            console.log(didToken)
        }
        catch(err){
            if (err instanceof RPCError) {
                switch (err.code) {
                  case RPCErrorCode.MagicLinkFailedVerification:
                  case RPCErrorCode.MagicLinkExpired:
                  case RPCErrorCode.MagicLinkRateLimited:
                  case RPCErrorCode.UserAlreadyLoggedIn:
                    // Handle errors accordingly :)
                    break;
                }
              }
        }
        
    }

    const onChange = (e) => {
        const email = e.target.value;
        setEmail(email)
    }

    return (
        <div className="p-10">
            <input onChange={onChange} className='bg-slate-300 m-5' type="email" name="" id="" />
            <button onClick={onSubmit} type='submit' className='bg-lime-500 p-2 rounded-md'>Log in</button>
        </div>
    )
}