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
import {FaRegHeart }from 'react-icons/fa'
import { motion, AnimatePresence} from 'framer-motion'

export default function Header({allGuitars}: {allGuitars: Product[]}): JSX.Element {
    const m: Magic = initializeMagic
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [checkStatus, setCheckStatus] = useState<boolean>(false)

    const store = useWebStore()

    // check that user is logged in
    // If user is logged in it will display the log-out button
    // If user is not logged in, it will display the link to the log-in page

    const toggleMenu = () => {
        setIsOpen((state) => !state)
    }
    const checkLoginStatus = async (): Promise<void> => {
        try {
            const loggedIn: boolean = await m.user.isLoggedIn();
            setIsLoggedIn(loggedIn);
        } catch (error) {
            console.log(error)
        }
    };
    const closeMenu = () => {
        if(isOpen) {
            setIsOpen(false)
        }
    }

    useEffect(() => {
        store.addAllGuitars(allGuitars)
    },[]);
    useEffect(() => {
        checkLoginStatus();
    }, [checkStatus])


    const logout = async (): Promise<void> => {
        try {
            if (isLoggedIn) {
                await m.user.logout();
                setIsLoggedIn(false);
                store.removeAllCart()
                closeMenu()
            }
        } catch (error) {
            console.log(error)
        }
    };

    const toggleStatus = () => {
        setCheckStatus((state) => !state)
    }


    return (
        <div className="h-fit w-[99%] md:py-4 pb-1 md:px-4 p-2 justify-between items-center flex bg-black">
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
                <Link href="/favorites">
                    <FaRegHeart className='text-white text-[23px] hover:text-red duration-[0.4s]' />
                </Link>
                <AnimatePresence>
                <motion.div onMouseOver={toggleStatus} className="has-tooltip">
                    <RiAccountCircleLine className='text-white text-[25px]' />
                    <motion.span className="tooltip text-white font-mono w-fit py-2 px-4 ml-[-25px]  bg-gray rounded-lg">
                    {isLoggedIn  && (
                        <motion.button onClick={logout}>Log out</motion.button>
                    )}
                    {!isLoggedIn && (
                        <Link href="/login">Log in</Link>
                    )}
                    </motion.span>
                </motion.div>
                </AnimatePresence>
                <Link className='' href="/cart">
                    <BsBag className='text-white text-[22px] hover:text-pink duration-[0.4s]' />
                </Link>
            </div>
            {/* MOBILE NAV */}
            <div className='md:hidden' onClick={toggleMenu}>
                <AnimatePresence>
                     <motion.svg layout data-isOpen={isOpen} style={{padding: '5px'}}  className="parent" width="2rem" height="auto" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* First line with conditional animation */}
                        <motion.path
                            data-isOpen={isOpen}
                            initial={{ x: 0, y: 0, rotate: 0 }}
                            animate={{ x: isOpen ? 6 : 0, y: isOpen ? 4 : 0, rotate: isOpen ? -90 : 0 }}
                            d="M16.9184 0H0.805637C0.361641 0 0 0.477541 0 1.06383C0 1.65012 0.361641 2.12766 0.805637 2.12766H16.9184C17.3624 2.12766 17.724 1.65012 17.724 1.06383C17.724 0.477541 17.3624 0 16.9184 0Z"
                            fill="white"
                        />
                        {/* Second line with conditional animation */}
                        <motion.path
                            data-isOpen={isOpen}
                            initial={{ x: 0, y: 0, rotate: 0 }}
                            animate={{ x: isOpen ? -6 : 0, y: isOpen ? -4 : 0, rotate: isOpen ? 90 : 0 }}
                            d="M16.9184 8.9375H0.805637C0.361641 8.9375 0 9.41504 0 10.0013C0 10.5876 0.361641 11.0652 0.805637 11.0652H16.9184C17.3624 11.0652 17.724 10.5876 17.724 10.0013C17.724 9.41504 17.3624 8.9375 16.9184 8.9375Z"
                            fill="white"
                        />
                        <motion.path 
                                initial={{ scaleX: 1 }} // Initial scale is 1
                                animate={{ scaleX: isOpen ? 0 : 1 }} // Animate scaleX to 0 when isOpen is true, back to 1 when isOpen is false
                                style={{ scaleX: 1 }} // Set the scaleX style to 1, so it doesn't jump back after animation 
                                d="M16.9167 17.8711H8.86032C8.41633 17.8711 8.05469 18.3486 8.05469 18.9349C8.05469 19.5212 8.41633 19.9988 8.86032 19.9988H16.9167C17.3607 19.9988 17.7223 19.5212 17.7223 18.9349C17.7223 18.3486 17.3607 17.8711 16.9167 17.8711Z" fill="white"/>
                    </motion.svg>
                </AnimatePresence>
            </div>
            <AnimatePresence>
            {isOpen && (
                <motion.div onTouchEnd={toggleStatus} layout initial={{opacity: 0}} exit={{opacity: 0}} animate={{opacity: 1}} className='absolute top-[4rem] left-0 text-white text-[1.5rem] font-sans font-normal z-60 w-screen bg-black h-screen backdrop-blur-md'>
                   <div className='flex flex-col items-start gap-[2.25rem] p-14'>
                    <Link onTouchEnd={closeMenu} className='hover:text-pink active:text-pink' href='/services'>Services</Link>
                    <Link onTouchEnd={closeMenu}  className='hover:text-pink active:text-pink' href='/shop'>All Guitars</Link>
                    <Link onTouchEnd={closeMenu}  className='hover:text-pink active:text-pink' href='/about-us'>About Us</Link>
                    <Link onTouchEnd={closeMenu}  className='hover:text-pink active:text-pink' href='/favorites'>Favorites</Link>
                    <Link onTouchEnd={closeMenu}  className='hover:text-pink active:text-pink' href='/cart'>My Cart</Link>
                    {isLoggedIn ? (
                        <button className='hover:text-pink active:text-pink' onClick={logout}>Log out</button>
                    ) : (
                        <Link onTouchEnd={closeMenu} className='hover:text-pink active:text-pink' href='/login'>Login</Link>
                    )

                    }
                   </div>
                </motion.div>
            )}
            </AnimatePresence>
        </div>
    );
}
