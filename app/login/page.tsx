"use client"
import { Magic, RPCError, RPCErrorCode } from 'magic-sdk';

export default function Login(){

    const onSubmit = async() => {
        try{
            const magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY as string)
            const didToken = await magic.auth.loginWithMagicLink({email: 'belengm@live.com'})
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

    return (
        <div className="p-10">
            <input className='bg-slate-300 m-5' type="text" name="" id="" />
            <button onClick={onSubmit} type='submit' className='bg-lime-500 p-2 rounded-md'>Log in</button>
        </div>
    )
}