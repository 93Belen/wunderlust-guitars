"use client"
import { useEffect, useState } from 'react';
import {RiAccountCircleLine} from 'react-icons/ri'
import Link from 'next/link';
import { initializeMagic } from 'components/magic/initializeMagic';
import { Magic } from 'magic-sdk';
import Logo from './Logo';
import {BsBag} from 'react-icons/bs'
import { useWebStore } from 'components/store';
import { Product } from 'components/types/storeTypes';

export default function Header({allGuitars}: {allGuitars: Product[]}): JSX.Element {
    const m: Magic = initializeMagic
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const store = useWebStore()
    //console.logallGuitars)

    // check that user is logged in
    // If user is logged in it will display the log-out button
    // If user is not logged in, it will display the link to the log-in page
    useEffect(() => {
        checkLoginStatus();
        store.addAllGuitars(allGuitars)
    }, []);

    const toggleMenu = () => {
        setIsOpen((state) => !state)
    }
    const checkLoginStatus = async (): Promise<void> => {
        try {
            const loggedIn: boolean = await m.user.isLoggedIn();
            setIsLoggedIn(loggedIn);
        } catch (error) {
        }
    };

    const logout = async (): Promise<void> => {
        try {
            if (isLoggedIn) {
                await m.user.logout();
                setIsLoggedIn(false);
                store.removeAllCart()
            }
        } catch (error) {
        }
    };

    return (
        <div className="h-fit w-[99%] py-4 pb-1 px-4 justify-between items-center flex bg-black">
            <Link href='/'>
                <Logo />
            </Link>
            {/* DESKTOP NAV */}
            <div className='md:flex gap-[2rem] hidden text-white font-sans text-[1.125rem] font-normal'>
                <Link className='hover' href='/services'>Services</Link>
                <Link className='hover' href='/shop'>All Guitars</Link>
                <Link className='hover' href='/about-us'>About Us</Link>
            </div>
            <div className='md:flex gap-4 hidden pr-3'>
                <Link className='' href="/favorites">
                <div className='w-[22px] h-[22px]'>
                    <svg width="100%" height="100%" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="path-1-inside-1_13596_7880" fill="white">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.22652 2.02975C0.444561 3.92259 0.444561 6.99148 2.22652 8.88431L8.87405 15.9455C9.24893 16.3437 9.85446 16.3475 10.2338 15.9571C10.3348 15.9076 10.4294 15.8386 10.5126 15.7502L17.1601 8.68906C18.9421 6.79623 18.9421 3.72734 17.1601 1.8345C15.3782 -0.0583292 12.489 -0.0583275 10.7071 1.83451L9.60141 3.00897L8.67955 2.02975C6.89759 0.136921 4.00847 0.136921 2.22652 2.02975Z"/>
                        </mask>
                        <path d="M10.2338 15.9571L9.82732 15.0223L9.67767 15.0957L9.55929 15.2176L10.2338 15.9571ZM10.5126 15.7502L9.82712 15.0221L9.82712 15.0221L10.5126 15.7502ZM17.1601 8.68906L17.8456 9.41717L17.1601 8.68906ZM17.1601 1.8345L17.8456 1.10639L17.1601 1.8345ZM10.7071 1.83451L10.0216 1.1064L10.7071 1.83451ZM9.60141 3.00897L8.91595 3.73708L9.60141 4.46519L10.2869 3.73708L9.60141 3.00897ZM2.91198 8.1562C1.50859 6.66549 1.50859 4.24857 2.91198 2.75786L1.54106 1.30164C-0.619468 3.5966 -0.619468 7.31746 1.54106 9.61242L2.91198 8.1562ZM9.55951 15.2174L2.91198 8.1562L1.54106 9.61242L8.18859 16.6736L9.55951 15.2174ZM9.55929 15.2176L9.55951 15.2174L8.18859 16.6736C8.93841 17.4701 10.1494 17.4778 10.9084 16.6966L9.55929 15.2176ZM9.82712 15.0221L9.82732 15.0223L10.6404 16.8919C10.8435 16.7922 11.0328 16.6538 11.198 16.4783L9.82712 15.0221ZM16.4746 7.96095L9.82712 15.0221L11.198 16.4783L17.8456 9.41717L16.4746 7.96095ZM16.4747 2.56261C17.878 4.05332 17.878 6.47024 16.4746 7.96095L17.8456 9.41717C20.0061 7.12221 20.0061 3.40135 17.8456 1.10639L16.4747 2.56261ZM11.3925 2.56262C12.7959 1.07191 15.0713 1.07191 16.4747 2.56261L17.8456 1.10639C15.685 -1.18857 12.1821 -1.18856 10.0216 1.1064L11.3925 2.56262ZM10.2869 3.73708L11.3925 2.56262L10.0216 1.1064L8.91595 2.28086L10.2869 3.73708ZM7.99409 2.75786L8.91595 3.73708L10.2869 2.28086L9.36501 1.30164L7.99409 2.75786ZM2.91198 2.75786C4.31536 1.26716 6.5907 1.26716 7.99409 2.75786L9.36501 1.30164C7.20448 -0.993314 3.70158 -0.993314 1.54106 1.30164L2.91198 2.75786Z" fill="white" mask="url(#path-1-inside-1_13596_7880)"/>
                    </svg>
                </div>
                </Link>
                <div className="has-tooltip">
                    <RiAccountCircleLine className='text-white text-[25px]' />
                    <span className="tooltip text-white font-mono w-fit py-2 px-4 ml-[-25px]  bg-gray rounded-lg">
                    {isLoggedIn ? (
                        <button onClick={logout}>Log out</button>
                    ) : (
                            <Link href="/login">Log in</Link>
                    )}
                    </span>
                </div>
                <Link className='' href="/cart">
                    <BsBag className='text-white text-[22px]' />
                </Link>
            </div>
            {/* MOBILE NAV */}
            <div className='md:hidden relative z-70' onClick={toggleMenu}>
                <svg width="1.10775rem" height="1.25rem" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.9184 0H0.805637C0.361641 0 0 0.477541 0 1.06383C0 1.65012 0.361641 2.12766 0.805637 2.12766H16.9184C17.3624 2.12766 17.724 1.65012 17.724 1.06383C17.724 0.477541 17.3624 0 16.9184 0Z" fill="white"/>
                    <path d="M16.9184 8.9375H0.805637C0.361641 8.9375 0 9.41504 0 10.0013C0 10.5876 0.361641 11.0652 0.805637 11.0652H16.9184C17.3624 11.0652 17.724 10.5876 17.724 10.0013C17.724 9.41504 17.3624 8.9375 16.9184 8.9375Z" fill="white"/>
                    <path d="M16.9167 17.8711H8.86032C8.41633 17.8711 8.05469 18.3486 8.05469 18.9349C8.05469 19.5212 8.41633 19.9988 8.86032 19.9988H16.9167C17.3607 19.9988 17.7223 19.5212 17.7223 18.9349C17.7223 18.3486 17.3607 17.8711 16.9167 17.8711Z" fill="white"/>
                </svg>
            </div>
            {isOpen && (
                <div className='absolute top-[4rem] left-0 text-white text-[1.5rem] font-sans font-normal z-60 w-screen bg-black bg-opacity-70 h-screen backdrop-blur-md'>
                   <div className='flex flex-col items-start gap-[2.25rem] p-14'>
                    <Link className='hover:text-pink active:text-pink' href='/services'>Services</Link>
                    <Link className='hover:text-pink active:text-pink' href='/shop'>All Guitars</Link>
                    <Link className='hover:text-pink active:text-pink' href='/about-us'>About Us</Link>
                    <Link className='hover:text-pink active:text-pink' href='/favorites'>Favorites</Link>
                    <Link className='hover:text-pink active:text-pink' href='/cart'>My Cart</Link>
                    {isLoggedIn ? (
                        <button className='hover:text-pink active:text-pink' onClick={logout}>Log out</button>
                    ) : (
                        <Link className='hover:text-pink active:text-pink' href='/login'>Login</Link>
                    )

                    }
                   </div>
                </div>
            )}
        </div>
    );
}
