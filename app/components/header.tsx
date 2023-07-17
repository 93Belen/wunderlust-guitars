"use client"
import { useEffect, useState } from 'react';
import {RiAccountCircleLine} from 'react-icons/ri'
import Link from 'next/link';
import { initializeMagic } from 'components/magic/initializeMagic';
import { Magic } from 'magic-sdk';

export default function Header(): JSX.Element {
    const m: Magic = initializeMagic
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    // check that user is logged in
    // If user is logged in it will display the log-out button
    // If user is not logged in, it will display the link to the log-in page
    useEffect(() => {
        checkLoginStatus();
    }, []);

    const checkLoginStatus = async (): Promise<void> => {
        try {
            const loggedIn: boolean = await m.user.isLoggedIn();
            setIsLoggedIn(loggedIn);
        } catch (error) {
            console.log(error);
        }
    };

    const logout = async (): Promise<void> => {
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
