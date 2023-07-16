"use client"
import { useEffect, useState } from 'react';
import {RiAccountCircleLine} from 'react-icons/ri'
import Link from 'next/link';
import { initializeMagic } from 'components/magic/initializeMagic';

export default function Header() {
    const m = initializeMagic
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        checkLoginStatus();
    }, []);

    const checkLoginStatus = async () => {
        try {
            const loggedIn = await m.user.isLoggedIn();
            setIsLoggedIn(loggedIn);
        } catch (error) {
            console.log(error);
        }
    };

    const logout = async () => {
        try {
            if (isLoggedIn) {
                await m.user.logout();
                setIsLoggedIn(false);
                console.log(await m.user.isLoggedIn()); // => `false`
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="p-10">
            <div className="has-tooltip">
                <RiAccountCircleLine />
                <span className="tooltip">
                {isLoggedIn ? (
                    <button onClick={logout}>Log out</button>
                 ) : (
                        <Link href="/login">Log in</Link>
                 )}
                </span>
            </div>
        </div>
    );
}
