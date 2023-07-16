"use client"
import { initializeMagic } from 'components/magic/initializeMagic';
import { RPCError, RPCErrorCode } from 'magic-sdk';
import { useState } from 'react';
import { useRouter } from 'next/navigation';


export default function Login(){
    const [email, setEmail] = useState("")
    const { push } = useRouter();

    const onSubmit = async() => {
        try{
            const magic = initializeMagic
            const didToken = await magic.auth.loginWithMagicLink({email: email})
            if(didToken){
                push("/")
                const exist = await fetch('api/user/finduser', {
                            method: 'POST',
                            body: JSON.stringify({email})
                          })

                const userExists = await exist.json(); // Parse the response as JSON
                if(userExists){
                    const res = await fetch('api/user/updateuserdate', {
                        method: 'POST',
                        body: JSON.stringify({email})
                      })
                }
                else {
                    const addUser = await fetch('api/user/addnewuser', {
                        method: 'POST',
                        body: JSON.stringify({email})
                      })
                }
                   
                }
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