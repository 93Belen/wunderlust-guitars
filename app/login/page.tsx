"use client"
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
                      console.log(json)
                }
        }
        catch(err){
            // if there is an error during the log-in processs
            if (err instanceof RPCError) {
                switch (err.code) {
                  case RPCErrorCode.MagicLinkFailedVerification:
                      window.alert("Verification failed")
                      break;
                  case RPCErrorCode.MagicLinkExpired:
                    window.alert("Link expired. Plase, try again.")
                    break;
                  case RPCErrorCode.MagicLinkRateLimited:
                    window.alert("Magic link rate limited.")
                    break;
                  case RPCErrorCode.UserAlreadyLoggedIn:
                    window.alert("You are already logged in.")
                    break;
                  default:
                    window.alert("Sorry, something went wrong. Please, try again.")
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
        <div className="p-10">
            <input onChange={onChange} className='m-5 bg-gray text-white' type="email" name="" id="" />
            <button onClick={onSubmit} type='submit' className='bg-pink p-2 rounded-md font-mono text-white'>Log in</button>
        </div>
    )
}