"use client"
import { Magic } from "magic-sdk";
import { initializeMagic } from "components/magic/initializeMagic";



export default function AddToFavorites({id}) {
    const m: Magic = initializeMagic
    // const guitarId = props.guitarId;
    const guitarId = id;

    const addToFavorites = async (): Promise<void> => {
        try {
            const loggedIn: boolean = await m.user.isLoggedIn();
            if(loggedIn){
                const info = await m.user.getMetadata()
                const email = info.email
                const user = await fetch("/api/user/finduser", {
                    method: "POST",
                    body: JSON.stringify({email})
                })

                const jsonUser = await user.json()
                const userId = jsonUser.id
                // console.log(jsonUser)
                // console.log(userId)


                const response = await fetch("/api/user/likeguitar", {
                    method: "POST",
                    body: JSON.stringify({
                        userId: userId,
                        guitarId: guitarId
                    })
                })
            }
            
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div onClick={addToFavorites} className='w-[25px] h-auto'>
            <svg width="100%" height="100%" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-inside-1_13596_7880" fill="white">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.22652 2.02975C0.444561 3.92259 0.444561 6.99148 2.22652 8.88431L8.87405 15.9455C9.24893 16.3437 9.85446 16.3475 10.2338 15.9571C10.3348 15.9076 10.4294 15.8386 10.5126 15.7502L17.1601 8.68906C18.9421 6.79623 18.9421 3.72734 17.1601 1.8345C15.3782 -0.0583292 12.489 -0.0583275 10.7071 1.83451L9.60141 3.00897L8.67955 2.02975C6.89759 0.136921 4.00847 0.136921 2.22652 2.02975Z"/>
                </mask>
                <path d="M10.2338 15.9571L9.82732 15.0223L9.67767 15.0957L9.55929 15.2176L10.2338 15.9571ZM10.5126 15.7502L9.82712 15.0221L9.82712 15.0221L10.5126 15.7502ZM17.1601 8.68906L17.8456 9.41717L17.1601 8.68906ZM17.1601 1.8345L17.8456 1.10639L17.1601 1.8345ZM10.7071 1.83451L10.0216 1.1064L10.7071 1.83451ZM9.60141 3.00897L8.91595 3.73708L9.60141 4.46519L10.2869 3.73708L9.60141 3.00897ZM2.91198 8.1562C1.50859 6.66549 1.50859 4.24857 2.91198 2.75786L1.54106 1.30164C-0.619468 3.5966 -0.619468 7.31746 1.54106 9.61242L2.91198 8.1562ZM9.55951 15.2174L2.91198 8.1562L1.54106 9.61242L8.18859 16.6736L9.55951 15.2174ZM9.55929 15.2176L9.55951 15.2174L8.18859 16.6736C8.93841 17.4701 10.1494 17.4778 10.9084 16.6966L9.55929 15.2176ZM9.82712 15.0221L9.82732 15.0223L10.6404 16.8919C10.8435 16.7922 11.0328 16.6538 11.198 16.4783L9.82712 15.0221ZM16.4746 7.96095L9.82712 15.0221L11.198 16.4783L17.8456 9.41717L16.4746 7.96095ZM16.4747 2.56261C17.878 4.05332 17.878 6.47024 16.4746 7.96095L17.8456 9.41717C20.0061 7.12221 20.0061 3.40135 17.8456 1.10639L16.4747 2.56261ZM11.3925 2.56262C12.7959 1.07191 15.0713 1.07191 16.4747 2.56261L17.8456 1.10639C15.685 -1.18857 12.1821 -1.18856 10.0216 1.1064L11.3925 2.56262ZM10.2869 3.73708L11.3925 2.56262L10.0216 1.1064L8.91595 2.28086L10.2869 3.73708ZM7.99409 2.75786L8.91595 3.73708L10.2869 2.28086L9.36501 1.30164L7.99409 2.75786ZM2.91198 2.75786C4.31536 1.26716 6.5907 1.26716 7.99409 2.75786L9.36501 1.30164C7.20448 -0.993314 3.70158 -0.993314 1.54106 1.30164L2.91198 2.75786Z" fill="white" mask="url(#path-1-inside-1_13596_7880)"/>
            </svg>
        </div>
    )
}