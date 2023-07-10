"use client"
import { Magic } from 'magic-sdk';

export default function Header(){
    const m = new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY as string);
    const logout = async() => {
        try {
        if(await m.user.isLoggedIn()){
            await m.user.logout();
            console.log(await m.user.isLoggedIn()); // => `false`
        }
        } catch(e) {
            console.log(e)
        }
    }

    return (
        <div className="p-10">
            <button onClick={logout}>Log out</button>
        </div>
    )
}