"use client"
import { Magic } from "magic-sdk";
import { initializeMagic } from "components/magic/initializeMagic";
import { useRouter } from "next/navigation";
import { FaRegHeart }from 'react-icons/fa'
import { useEffect, useState } from "react";
import { FaHeart} from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'


// ... existing imports

export default function AddToFavorites({ id }: { id: string }) {
    const m: Magic = initializeMagic;
    const guitarId = id;
    const { push } = useRouter();
    const [isInFav, setIsInFav] = useState(false);
  
    const checkGuitarinFav = async () => {
      const loggedIn: boolean = await m.user.isLoggedIn();
      if (loggedIn) {
        const info = await m.user.getMetadata();
        const email = info.email;
        const user = await fetch("/api/user/finduser", {
          method: "POST",
          body: JSON.stringify({ email }),
        });
  
        const jsonUser = await user.json();
        const userId = jsonUser.id;
  
        const getlikedGuitar = await fetch("/api/user/checkguitarinfavorites", {
          method: "POST",
          body: JSON.stringify({
            userId: userId,
            guitarId: guitarId,
          }),
        });
        const likedGuitars = await getlikedGuitar.json();
        if (likedGuitars.length > 0) {
          setIsInFav(true);
        } else {
          setIsInFav(false);
        }
      }
    };
  
    useEffect(() => {
      checkGuitarinFav();
    }, []);
  
    const addToFavorites = async (): Promise<void> => {
      try {
        const loggedIn: boolean = await m.user.isLoggedIn();
        if (loggedIn) {
          const info = await m.user.getMetadata();
          const email = info.email;
          const user = await fetch("/api/user/finduser", {
            method: "POST",
            body: JSON.stringify({ email }),
          });
  
          const jsonUser = await user.json();
          const userId = jsonUser.id;
  
          const getlikedGuitar = await fetch("/api/user/checkguitarinfavorites", {
            method: "POST",
            body: JSON.stringify({
              userId: userId,
              guitarId: guitarId,
            }),
          });
          const likedGuitars = await getlikedGuitar.json();
  
          if (likedGuitars.length > 0) {
            const response = await fetch("/api/user/unlikeguitar", {
              method: "POST",
              body: JSON.stringify({
                userId: userId,
                guitarId: guitarId,
              }),
            });
            setIsInFav(false); // Set isInFav to false as the guitar is now unliked
          } else {
            const response = await fetch("/api/user/likeguitar", {
              method: "POST",
              body: JSON.stringify({
                userId: userId,
                guitarId: guitarId,
              }),
            });
            setIsInFav(true); // Set isInFav to true as the guitar is now liked
          }
        } else {
          push("/login");
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <div onClick={addToFavorites} className="w-[25px] h-auto cursor-pointer my-auto">
          <AnimatePresence>
        {isInFav ? (
            <motion.div initial={{scale: 0}} exit={{scale: 0}} animate={{scale: 1}} >
                <FaHeart className="text-red text-[23px] duration-[0.4s]" />
            </motion.div>
        ) : (
          <FaRegHeart className="text-white text-[23px] hover:text-red duration-[0.4s]" />
        )}
        </AnimatePresence>
      </div>
    );
  }
  