'use client'

import { initializeMagic } from 'components/magic/initializeMagic';
import { RPCError, RPCErrorCode } from 'magic-sdk';
import { useState } from 'react';
import { useRouter } from 'next/navigation';


export default function Login(): JSX.Element{
    const [email, setEmail] = useState<string>("")
    const { push } = useRouter();

    const onSubmit = async(): Promise<void> => {
        try{
            const magic = initializeMagic
            const didToken = await magic.auth.loginWithMagicLink({email: email})
            // if log-in goes thru, I receive a didToken
            if(didToken){
                push("/")
                // If user exists, update last_logged
                // If user doesn't exists, create user
                    const addUser = await fetch('api/user/addnewuser', {
                        method: 'POST',
                        body: JSON.stringify({email})
                      })
                      const json = await addUser.json()
                      //console.logjson)
                }
        }
        catch(err){
            // if there is an error during the log-in processs
            if (err instanceof RPCError) {
                switch (err.code) {
                  case RPCErrorCode.MagicLinkFailedVerification:
                      
                      break;
                  case RPCErrorCode.MagicLinkExpired:
                    
                    break;
                  case RPCErrorCode.MagicLinkRateLimited:
                    
                    break;
                  case RPCErrorCode.UserAlreadyLoggedIn:
                    
                    break;
                  default:
                    
                    break;
                }
              }
        }
        
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const email = e.target.value;
        setEmail(email)
    }

    return (
      <main className='flex justify-center'>
        <div className="p-10 flex flex-col justify-center text-center gap-y-5 w-[90%] max-w-[500px]">
          <h1 className='font-mono text-[1.375rem] font-[700] text-white'>SIGN IN | CREATE ACCOUNT</h1>
          <p className='font-mono text-[1.25rem] text-white font-normal'>Enter your email to get started.</p>
          <div className='text-left flex flex-col justify-center gap-y-4'>
            <label className='text-white text-[0.875rem] font-mono gap-2 w-full' htmlFor="">EMAIL</label>
            <input onChange={onChange} className='text-white border-white border-2 rounded-lg bg-black w-full h-[2.5rem] px-4 font-mono text-[1rem]' type="email" name="" id="" />
            <p className='text-white font-mono text-[0.875rem] w-[90%]'>By tapping Next, you agree to our Privacy Policy and Terms & Conditions.</p>
            <button onClick={onSubmit} type='submit' className='bg-pink p-2 rounded-md font-mono text-white w-full m-auto'>Log in</button>
          </div>
        </div>
      </main>
    )
}