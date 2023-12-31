'use client'

import ContactForm from "../components/ContactForm";
import { Link  } from "react-scroll";
import { useState } from "react";

export default function Services(){
    const [contactReason, setContactReason] = useState<String>()
    const changeContactReason = (reason: string) => {
        setContactReason((reason))
    }



    return (
        <main className='h-fit min-h-screen px-4 md:px-8 w-screen overflow-x-hidden box-border flex flex-col gap-y-10 md:gap-y-20'>
            <section  className='text-white font-sans text-[2.25rem] md:text-[4.5rem] font-[700] bg-[url("/servicesmobile.jpg")]  md:bg-[url("/services.png")] w-screen h-[25rem] p-2 md:pl-16 pr-0 md:ml-[-2rem] ml-[-1rem] bg-no-repeat bg-center bg-cover flex items-end'>
                <h1 className="">Wunderlust<br />
                Services</h1>
            </section>
            <section className='h-fit mt-6 w-full flex flex-col gap-y-10 md:mb-5'>
            <div className='w-full flex h-fit md:justify-end md:w-screen justify-left'>
                <div className='md:ml-5'>
                    <h3 className='font-sans text-[4.5rem] font-[700] leading-[3.1875rem] lg:leading-[7rem] md:leading-[7rem] text-gray tracking-[-0.20rem] md:tracking-[-0.11rem] md:text-[9rem] lg:text-[10rem] lg:mr-10'>Services</h3>
                    <h4 className='text-white font-mono text-[1.7rem] font-[700] mt-[-1rem] pl-2 leading-[2.35625rem] lg:leading-[-2rem] tracking-[-0.10rem] md:tracking-[-0.05rem] lg:text-[3rem]'>What we provide</h4>
                </div>
            </div>
        </section>
        <section className='grid grid-cols-2 grid-rows-2 md:flex p-5 gap-6 gap-x-8 md:px-10 lg:gap-x-20 border-b-white border-b-2 pb-20'>
            <Link className='cursor-pointer' to='personal-shopper' smooth={true}>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
                        <path d="M31.0481 10.0474H29.9334C29.4912 4.31631 24.2096 0.0859375 18.1522 0.0859375C12.0966 0.0859375 6.815 4.31631 6.37275 10.0474H4.94812C3.6358 10.0474 2.37723 10.5688 1.44927 11.4967C0.521319 12.4247 0 13.6832 0 14.9956V44.9199C0 46.2323 0.521319 47.4908 1.44927 48.4188C2.37723 49.3467 3.6358 49.8681 4.94812 49.8681H25.491C25.7991 50.9556 26.796 51.7422 27.9669 51.7422H50.0431C51.4569 51.7422 52.6169 50.5967 52.6169 49.1793V25.325C52.6169 23.8877 51.4569 22.7422 50.0431 22.7422H35.9963V14.9956C35.9963 14.3458 35.8683 13.7023 35.6196 13.102C35.3709 12.5017 35.0065 11.9562 34.547 11.4967C34.0875 11.0372 33.542 10.6728 32.9417 10.4241C32.3414 10.1754 31.6979 10.0474 31.0481 10.0474ZM4.94812 13.6724H6.34375V16.3984C6.34375 16.8791 6.53471 17.3402 6.87462 17.6801C7.21453 18.02 7.67555 18.2109 8.15625 18.2109C8.63696 18.2109 9.09797 18.02 9.43788 17.6801C9.77779 17.3402 9.96875 16.8791 9.96875 16.3984V13.6724H26.3374V16.3984C26.3374 16.8791 26.5284 17.3402 26.8683 17.6801C27.2082 18.02 27.6692 18.2109 28.1499 18.2109C28.6306 18.2109 29.0917 18.02 29.4316 17.6801C29.7715 17.3402 29.9624 16.8791 29.9624 16.3984V13.6724H31.0481C31.2219 13.6724 31.3939 13.7067 31.5545 13.7732C31.715 13.8396 31.8609 13.9371 31.9837 14.06C32.1066 14.1828 32.204 14.3287 32.2705 14.4892C32.337 14.6498 32.3713 14.8218 32.3713 14.9956V23.9946H3.625V14.9956C3.625 14.8218 3.65922 14.6498 3.72572 14.4892C3.79221 14.3287 3.88967 14.1828 4.01253 14.06C4.1354 13.9371 4.28126 13.8396 4.44179 13.7732C4.60232 13.7067 4.77437 13.6724 4.94812 13.6724ZM18.154 3.71094C22.5457 3.71094 25.8481 6.62544 26.2885 10.0474H10.0195C10.4581 6.62544 13.7605 3.71094 18.154 3.71094ZM35.9963 38.5816C36.9806 38.9174 38.0139 39.087 39.0539 39.0837C43.6813 39.0837 47.1812 35.8846 47.1812 32.1944V27.3278C47.1812 27.0875 47.2767 26.857 47.4466 26.687C47.6166 26.517 47.8471 26.4216 48.0874 26.4216C48.3278 26.4216 48.5583 26.517 48.7283 26.687C48.8982 26.857 48.9937 27.0875 48.9937 27.3278V32.1926C48.9937 37.1244 44.4226 40.8926 39.0539 40.8926C38.0201 40.8935 36.9911 40.7514 35.9963 40.4702V38.5816ZM3.625 28.2159H32.3713V32.1309H3.625V28.2159ZM3.625 40.2673V36.3523H32.3713V40.2673H3.625ZM3.625 44.4922H32.3713V44.9381C32.3713 45.6522 31.7931 46.2431 31.0481 46.2431H4.94812C4.59721 46.2431 4.26067 46.1037 4.01253 45.8555C3.7644 45.6074 3.625 45.2709 3.625 44.9199V44.4922Z" fill="white"/>
                    </svg>
                </div>
                <div>
                    <p className='text-pink font-mono hoverlink'>Personal Shopper</p>
                    <p className='text-white font-mono hidden md:block'>I have a lot of guitars, 
                        but I have seen more, 
                        and I can hunt down what you are looking for.</p>
                </div>
            </Link>
            <Link className='cursor-pointer' to='collection-curator' smooth={true}>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="59" height="58" viewBox="0 0 59 58" fill="none">
                        <path d="M15.8352 52.9165C16.7581 52.9165 17.5063 52.1683 17.5063 51.2453C17.5063 50.3224 16.7581 49.5742 15.8352 49.5742C14.9123 49.5742 14.1641 50.3224 14.1641 51.2453C14.1641 52.1683 14.9123 52.9165 15.8352 52.9165Z" fill="black"/>
                        <path d="M22.8052 40.0784L18.2857 35.5634L20.4997 33.3477L25.0173 37.8626L22.8052 40.0784ZM13.9502 39.898L16.1651 37.6841L20.6809 42.2008L18.4661 44.4157L13.9502 39.898ZM12.5319 42.4237L16.0301 45.9219L14.7677 47.1843L11.2695 43.6862L12.5319 42.4237ZM19.3397 47.148C19.0475 47.4403 18.8486 47.8127 18.768 48.2181C18.6875 48.6234 18.7289 49.0436 18.8871 49.4254C19.0454 49.8072 19.3132 50.1335 19.6569 50.3631C20.0005 50.5927 20.4045 50.7152 20.8178 50.7152C21.2311 50.7152 21.6351 50.5927 21.9787 50.3631C22.3224 50.1335 22.5902 49.8072 22.7484 49.4254C22.9066 49.0436 22.9481 48.6234 22.8675 48.2181C22.787 47.8127 22.588 47.4403 22.2959 47.148C21.4793 46.3324 20.1562 46.3324 19.3397 47.148Z" fill="black"/>
                        <path d="M54.6488 10.9026L54.1993 10.454C57.16 7.64101 57.4237 6.88248 54.4539 3.91451C51.4841 0.942013 50.7247 1.20845 47.9126 4.16826L47.4649 3.71967C47.8573 3.23936 48.0213 2.76086 47.5873 2.32676C47.0526 1.79298 46.4544 2.15458 45.8627 2.74636C45.2718 3.33723 44.912 3.93445 45.4449 4.46642C45.8799 4.90051 46.3566 4.7392 46.8378 4.34679L47.3054 4.81442C46.623 5.54214 45.83 6.39311 44.8785 7.37095L44.3456 6.83808C44.7389 6.35686 44.8993 5.88017 44.467 5.44517C43.9333 4.91411 43.3351 5.27208 42.7461 5.86114C42.1534 6.45383 41.7936 7.05104 42.3283 7.58483C42.7624 8.01892 43.24 7.85489 43.7212 7.46158L44.2604 8.00079C44.1562 8.10592 44.0628 8.20289 43.955 8.31073C43.1249 9.14086 42.4071 9.86314 41.7882 10.5156L41.229 9.95557C41.6205 9.47436 41.7827 8.99767 41.3477 8.56448C40.8148 8.03161 40.2167 8.38958 39.6277 8.98045C39.0368 9.57314 38.6752 10.1704 39.2099 10.7023C39.6449 11.1373 40.1216 10.976 40.6028 10.5827L41.1855 11.1672C39.4011 13.1447 38.7876 14.4053 39.4654 15.8281L27.8047 26.8309C26.3674 25.4334 24.738 24.278 22.2123 24.471C16.1739 24.9277 20.1324 31.8044 12.3976 32.3191C9.63169 32.5013 7.00538 33.1084 5.10588 35.0125C0.275567 39.841 1.81982 46.4693 6.85857 51.5099C11.8964 56.5486 18.5256 58.0901 23.355 53.2625C25.8735 50.7459 25.7892 46.1793 26.6311 43.4506C27.7177 39.9244 33.3945 41.1179 33.1344 37.1956C33.1117 36.8259 33.0211 36.5921 32.8797 36.4525C32.1738 35.7465 30.1945 37.4295 29.0046 36.2386C28.6312 35.8671 28.3376 35.21 28.1835 34.118L42.5394 18.9048C43.9623 19.5836 45.2247 18.9682 47.203 17.1838L47.7857 17.7665C47.3924 18.2487 47.232 18.7263 47.6634 19.1613C48.1963 19.6941 48.7962 19.3344 49.3871 18.7417C49.9779 18.1526 50.3377 17.5536 49.803 17.0198C49.3689 16.5866 48.8923 16.7497 48.411 17.1421L47.8519 16.5839C48.5053 15.9649 49.2267 15.2472 50.0568 14.4161C50.1646 14.3083 50.2625 14.2159 50.3685 14.1107L50.9041 14.649C50.5117 15.1312 50.3495 15.6079 50.7854 16.0429C51.3183 16.5757 51.9155 16.216 52.5064 15.6251C53.0936 15.0342 53.4552 14.4352 52.9223 13.9032C52.4892 13.4691 52.0125 13.6313 51.5313 14.0228L50.9993 13.4909C51.9762 12.5384 52.8272 11.7454 53.554 11.0648L54.0225 11.5315C53.6283 12.0128 53.4679 12.4904 53.9029 12.9244C54.4358 13.4555 55.033 13.0975 55.623 12.5058C56.2157 11.9149 56.5745 11.3159 56.0417 10.7839C55.6067 10.348 55.13 10.5111 54.6488 10.9026ZM29.5728 38.6384C29.4913 38.6737 29.4079 38.7073 29.3182 38.7444C27.7096 39.406 25.5019 40.3113 24.7162 42.8597C24.428 43.7904 24.2486 44.8226 24.0592 45.9183C23.6858 48.077 23.2608 50.5229 21.9395 51.8452C20.0916 53.693 17.9166 54.4506 15.4698 54.1017C13.0745 53.7619 10.518 52.3391 8.27322 50.0925C6.02754 47.8477 4.60472 45.293 4.26579 42.8987C3.91597 40.4527 4.67632 38.2768 6.52144 36.4289C7.78838 35.162 9.64166 34.5104 12.5308 34.3183C17.9103 33.9621 19.1346 30.8292 19.9448 28.7566C20.5774 27.1354 20.7913 26.588 22.3654 26.4684C24.003 26.3442 25.1005 27.0103 26.3475 28.2065L22.4279 31.9059L26.4626 35.9423L26.5351 35.8653C26.7816 36.603 27.1268 37.1947 27.5881 37.656C28.1199 38.198 28.8194 38.5442 29.5728 38.6384ZM43.6614 13.074C43.5533 13.1819 43.4251 13.2674 43.2839 13.3257C43.1428 13.384 42.9916 13.414 42.8389 13.4139C42.6862 13.4137 42.535 13.3835 42.394 13.325C42.253 13.2664 42.1249 13.1807 42.017 13.0726C41.9091 12.9646 41.8236 12.8363 41.7652 12.6952C41.7069 12.5541 41.677 12.4028 41.6771 12.2501C41.6772 12.0974 41.7074 11.9463 41.766 11.8053C41.8245 11.6642 41.9103 11.5361 42.0183 11.4282C42.2366 11.2104 42.5324 11.0881 42.8408 11.0883C43.1492 11.0886 43.4449 11.2114 43.6627 11.4296C43.8806 11.6478 44.0029 11.9437 44.0026 12.2521C44.0024 12.5605 43.8796 12.8561 43.6614 13.074ZM45.1503 8.29533C45.6053 7.8422 46.3412 7.8422 46.797 8.29533C47.014 8.51395 47.1357 8.80961 47.1353 9.11767C47.135 9.42572 47.0127 9.72112 46.7952 9.93926C46.3393 10.3942 45.6035 10.3924 45.1522 9.93926C45.0437 9.83167 44.9576 9.70369 44.8988 9.56269C44.8399 9.42169 44.8096 9.27045 44.8094 9.11767C44.8092 8.96489 44.8393 8.81359 44.8978 8.67246C44.9563 8.53133 45.0421 8.40316 45.1503 8.29533ZM46.9511 16.3609C46.7294 16.562 46.439 16.6701 46.1399 16.6628C45.8407 16.6556 45.5558 16.5336 45.3442 16.3221C45.1325 16.1105 45.0104 15.8257 45.003 15.5266C44.9956 15.2275 45.1035 14.9369 45.3044 14.7152C45.7612 14.2621 46.4961 14.2621 46.9511 14.717C47.0593 14.8248 47.1452 14.9529 47.2038 15.0939C47.2624 15.235 47.2926 15.3862 47.2926 15.539C47.2926 15.6917 47.2624 15.843 47.2038 15.984C47.1452 16.1251 47.0593 16.2532 46.9511 16.3609ZM48.2823 5.16423C48.3902 5.05612 48.5184 4.97038 48.6596 4.91193C48.8007 4.85348 48.952 4.82348 49.1047 4.82365C49.2574 4.82382 49.4086 4.85415 49.5496 4.91291C49.6906 4.97167 49.8186 5.05769 49.9263 5.16604C50.0888 5.32881 50.1993 5.53611 50.244 5.76172C50.2887 5.98733 50.2654 6.22112 50.1772 6.43351C50.089 6.6459 49.9397 6.82736 49.7484 6.95494C49.557 7.08251 49.3321 7.15047 49.1021 7.15022C48.8721 7.14996 48.6474 7.08151 48.4563 6.95351C48.2652 6.82552 48.1164 6.64373 48.0287 6.43114C47.9409 6.21855 47.9182 5.98471 47.9633 5.7592C48.0085 5.53369 48.1195 5.32664 48.2823 5.16423ZM50.0822 13.228C49.8619 13.4353 49.5695 13.5486 49.2671 13.5439C48.9647 13.5393 48.676 13.4171 48.4621 13.2033C48.2482 12.9894 48.1261 12.7007 48.1214 12.3983C48.1168 12.0958 48.2301 11.8035 48.4373 11.5832C48.8904 11.1319 49.6272 11.1301 50.0831 11.5832C50.3007 11.8016 50.4228 12.0975 50.4227 12.4058C50.4225 12.7142 50.3 13.0099 50.0822 13.228ZM53.2133 10.096C53.1054 10.2039 52.9774 10.2895 52.8365 10.3479C52.6956 10.4063 52.5446 10.4364 52.3921 10.4365C52.2395 10.4365 52.0885 10.4065 51.9476 10.3482C51.8066 10.2898 51.6786 10.2043 51.5707 10.0965C51.4628 9.98867 51.3772 9.86066 51.3188 9.71976C51.2604 9.57886 51.2303 9.42783 51.2303 9.2753C51.2302 9.12278 51.2602 8.97173 51.3186 8.8308C51.3769 8.68987 51.4624 8.5618 51.5702 8.45392C52.0233 7.99717 52.7601 7.99898 53.2142 8.45392C53.6682 8.90886 53.67 9.64111 53.2133 10.096Z" fill="white"/>
                    </svg>
                </div>
                <div>
                    <p className='text-pink font-mono hoverlink'>Collection Curator</p>
                    <p className='text-white font-mono hidden md:block'>
                    Talk to me, together we will see what makes sense for you to buy, 
                    we might have something here for you.
                    </p>
                </div>
            </Link>
            <Link className='cursor-pointer' to='appraisals' smooth={true}>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="48" viewBox="0 0 50 48" fill="none">
                        <path d="M0.550782 5.15079C0.550782 3.99709 1.00908 2.89066 1.82487 2.07487C2.64065 1.25909 3.74709 0.800786 4.90078 0.800786H42.6008C43.6281 0.799256 44.6228 1.16135 45.4087 1.82292C46.1946 2.4845 46.721 3.40287 46.8946 4.41538C47.0683 5.42789 46.878 6.46919 46.3575 7.35485C45.837 8.24052 45.0199 8.91339 44.0508 9.25429V26.9008H41.1508V9.50079H6.35078V38.5008H9.25078V28.3508C9.25078 27.9662 9.40355 27.5974 9.67548 27.3255C9.9474 27.0536 10.3162 26.9008 10.7008 26.9008H22.3008C22.5799 26.9006 22.8531 26.9809 23.0877 27.1321C23.3223 27.2834 23.5082 27.4991 23.6232 27.7534C22.776 28.2715 22.0761 28.9986 21.5907 29.8649C21.1052 30.7312 20.8504 31.7077 20.8508 32.7008V29.8008H12.1508V38.5008H20.8508V41.4008H4.90078C4.51622 41.4008 4.1474 41.248 3.87548 40.9761C3.60355 40.7042 3.45078 40.3354 3.45078 39.9508V9.25429C2.60231 8.9543 1.86775 8.39855 1.34836 7.66361C0.828972 6.92867 0.55031 6.05073 0.550782 5.15079ZM4.90078 3.70079C4.51622 3.70079 4.1474 3.85355 3.87548 4.12548C3.60355 4.39741 3.45078 4.76622 3.45078 5.15079C3.45078 5.53535 3.60355 5.90416 3.87548 6.17609C4.1474 6.44802 4.51622 6.60079 4.90078 6.60079H42.6008C42.9853 6.60079 43.3542 6.44802 43.6261 6.17609C43.898 5.90416 44.0508 5.53535 44.0508 5.15079C44.0508 4.76622 43.898 4.39741 43.6261 4.12548C43.3542 3.85355 42.9853 3.70079 42.6008 3.70079H4.90078ZM10.7008 12.4008C10.3162 12.4008 9.9474 12.5536 9.67548 12.8255C9.40355 13.0974 9.25078 13.4662 9.25078 13.8508V22.5508C9.25078 22.9354 9.40355 23.3042 9.67548 23.5761C9.9474 23.848 10.3162 24.0008 10.7008 24.0008H36.8008C37.1853 24.0008 37.5542 23.848 37.8261 23.5761C38.098 23.3042 38.2508 22.9354 38.2508 22.5508V13.8508C38.2508 13.4662 38.098 13.0974 37.8261 12.8255C37.5542 12.5536 37.1853 12.4008 36.8008 12.4008H10.7008ZM12.1508 21.1008V15.3008H35.3508V21.1008H12.1508ZM49.8508 34.1508V42.8508C49.8508 44.0045 49.3925 45.1109 48.5767 45.9267C47.7609 46.7425 46.6545 47.2008 45.5008 47.2008H28.1008C26.9471 47.2008 25.8406 46.7425 25.0249 45.9267C24.2091 45.1109 23.7508 44.0045 23.7508 42.8508V34.1508C23.7508 32.9971 24.2091 31.8907 25.0249 31.0749C25.8406 30.2591 26.9471 29.8008 28.1008 29.8008H45.5008C46.6545 29.8008 47.7609 30.2591 48.5767 31.0749C49.3925 31.8907 49.8508 32.9971 49.8508 34.1508ZM45.5008 44.3008C45.5008 43.9162 45.6535 43.5474 45.9255 43.2755C46.1974 43.0036 46.5662 42.8508 46.9508 42.8508V39.9508C45.7971 39.9508 44.6907 40.4091 43.8749 41.2249C43.0591 42.0407 42.6008 43.1471 42.6008 44.3008H45.5008ZM46.9508 34.1508C46.5662 34.1508 46.1974 33.998 45.9255 33.7261C45.6535 33.4542 45.5008 33.0854 45.5008 32.7008H42.6008C42.6008 33.8545 43.0591 34.9609 43.8749 35.7767C44.6907 36.5925 45.7971 37.0508 46.9508 37.0508V34.1508ZM28.1008 32.7008C28.1008 33.0854 27.948 33.4542 27.6761 33.7261C27.4042 33.998 27.0353 34.1508 26.6508 34.1508V37.0508C27.8045 37.0508 28.9109 36.5925 29.7267 35.7767C30.5425 34.9609 31.0008 33.8545 31.0008 32.7008H28.1008ZM26.6508 42.8508C27.0353 42.8508 27.4042 43.0036 27.6761 43.2755C27.948 43.5474 28.1008 43.9162 28.1008 44.3008H31.0008C31.0008 43.1471 30.5425 42.0407 29.7267 41.2249C28.9109 40.4091 27.8045 39.9508 26.6508 39.9508V42.8508ZM36.8008 34.1508C35.6471 34.1508 34.5406 34.6091 33.7249 35.4249C32.9091 36.2407 32.4508 37.3471 32.4508 38.5008C32.4508 39.6545 32.9091 40.7609 33.7249 41.5767C34.5406 42.3925 35.6471 42.8508 36.8008 42.8508C37.9545 42.8508 39.0609 42.3925 39.8767 41.5767C40.6925 40.7609 41.1508 39.6545 41.1508 38.5008C41.1508 37.3471 40.6925 36.2407 39.8767 35.4249C39.0609 34.6091 37.9545 34.1508 36.8008 34.1508Z" fill="white"/>
                    </svg>
                </div>
                <div>
                    <p className='text-pink font-mono hoverlink'>Appraissals</p>
                    <p className='text-white font-mono hidden md:block'>
                    If you are not sure how much your guitar is worth… 
                    Let me have a look, I will give you a free estimate.
                    </p>
                </div>
            </Link>
            <Link className='cursor-pointer' smooth={true} to='hand-delivery'>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="59" height="49" viewBox="0 0 59 49" fill="none">
                        <path d="M7.47578 24.2809H29.1976V27.2534H7.47578V24.2809ZM3.85547 16.8496H21.957V19.8221H3.85547V16.8496Z" fill="white"/>
                        <path d="M54.3922 25.1811L48.9617 14.7774C48.8223 14.51 48.5904 14.2821 48.2947 14.122C47.9989 13.9618 47.6524 13.8766 47.2982 13.8767H41.8677V10.9042C41.8677 10.51 41.677 10.132 41.3375 9.85328C40.9981 9.57456 40.5376 9.41797 40.0576 9.41797H11.0951V12.3905H38.2474V31.0518C37.4226 31.4451 36.7007 31.9685 36.1235 32.5919C35.5462 33.2154 35.125 33.9265 34.8841 34.6842H23.5091C23.0685 33.2832 22.0208 32.0622 20.5622 31.2501C19.1036 30.438 17.3344 30.0905 15.5861 30.2729C13.8378 30.4552 12.2305 31.1548 11.0655 32.2405C9.90055 33.3262 9.25781 34.7235 9.25781 36.1705C9.25781 37.6174 9.90055 39.0147 11.0655 40.1005C12.2305 41.1862 13.8378 41.8858 15.5861 42.0681C17.3344 42.2504 19.1036 41.903 20.5622 41.0909C22.0208 40.2787 23.0685 39.0577 23.5091 37.6567H34.8841C35.2779 38.9323 36.1784 40.0636 37.4433 40.8717C38.7081 41.6799 40.265 42.1186 41.8677 42.1186C43.4704 42.1186 45.0273 41.6799 46.2921 40.8717C47.557 40.0636 48.4575 38.9323 48.8513 37.6567H52.7286C53.2087 37.6567 53.6691 37.5001 54.0086 37.2214C54.3481 36.9427 54.5388 36.5646 54.5388 36.1705V25.7667C54.5389 25.5654 54.489 25.3661 54.3922 25.1811ZM16.5256 39.143C15.8095 39.143 15.1096 38.9686 14.5142 38.642C13.9189 38.3154 13.4548 37.8512 13.1808 37.308C12.9068 36.7648 12.8351 36.1672 12.9748 35.5906C13.1145 35.014 13.4593 34.4843 13.9656 34.0686C14.4719 33.6529 15.117 33.3698 15.8193 33.2551C16.5215 33.1404 17.2495 33.1993 17.911 33.4242C18.5725 33.6492 19.1379 34.0302 19.5357 34.519C19.9335 35.0079 20.1459 35.5826 20.1459 36.1705C20.1449 36.9586 19.7632 37.7142 19.0844 38.2715C18.4057 38.8288 17.4854 39.1422 16.5256 39.143ZM41.8677 16.8492H46.1035L49.9844 24.2805H41.8677V16.8492ZM41.8677 39.143C41.1517 39.143 40.4517 38.9686 39.8564 38.642C39.261 38.3154 38.797 37.8512 38.523 37.308C38.249 36.7648 38.1773 36.1672 38.317 35.5906C38.4567 35.014 38.8015 34.4843 39.3078 34.0686C39.8141 33.6529 40.4591 33.3698 41.1614 33.2551C41.8637 33.1404 42.5916 33.1993 43.2531 33.4242C43.9147 33.6492 44.4801 34.0302 44.8779 34.519C45.2757 35.0079 45.488 35.5826 45.488 36.1705C45.4871 36.9586 45.1053 37.7142 44.4266 38.2715C43.7479 38.8288 42.8276 39.1422 41.8677 39.143ZM50.9185 34.6842H48.8513C48.4525 33.4111 47.5506 32.2827 46.2867 31.4758C45.0229 30.6689 43.4687 30.2291 41.8677 30.2255V27.253H50.9185V34.6842Z" fill="white"/>
                    </svg>
                </div>
                <div>
                    <p className='text-pink font-mono hoverlink'>Hand Delivery</p>
                    <p className='text-white font-mono hidden md:block'>
                    From my private collection to your door. Traveling by plane, car, 
                    or boat, not matter how, your guitar will remain next to me.
                    </p>
                </div>
            </Link>
        </section>
        <section id='personal-shopper' className='flex flex-col md:gap-y-5 border-b-white border-b-2 pb-20 md:ml-5'>
            <div>
                <h3 className='font-sans text-[3.7rem] font-[700] leading-[3.1875rem] lg:leading-[7rem] md:leading-[7rem] text-gray tracking-[-0.20rem] md:tracking-[-0.11rem] md:text-[7rem] lg:text-[10rem] lg:mr-10'>Personal</h3>
                <h4 className='text-pink font-mono text-[1.7rem] font-[700] mt-[-1rem] pl-4 leading-[2.35625rem] lg:leading-[-2rem] tracking-[-0.10rem] md:tracking-[-0.05rem] lg:text-[3rem]'>Shopper</h4>
            </div>
            <h5 className='text-white font-[700] font-mono text-[1.5rem] md:text-[2rem] leading-[140%] p-2'>I have a lot of guitars, but I have seen more, and I can hunt down what you are looking for. </h5>
            <p className='font-mono text-white text-[1.5em] p-2 md:w-[60vw]'>
                Over the years I have met many guitar enthusiasts and people in the industry, so I've got a network of contacts all over the world. Let me know what guitar you are looking for and I will find it for you. 
                Hey! Don’t worry, you don’t pay anything until I find it. And once I do, you pay for the guitar, no extra fee.
                But listen, if for some reason your guitar has disappeared off the face of the Earth, let me come out with some ideas, I could have something else that might interest you.
            </p>
            <p className='font-mono text-white text-[1.5em] p-2 md:w-[80vw]'>
                Pay just for the guitar after I find it and If you are still interested in it. Not payment upfront, no contract signed. Settle your decision after I get what you need.
            </p>
            <Link onClick={() => (changeContactReason("personal-shopper"))} className='text-pink text-[1.5rem] font-normal font-mono p-2 hoverlink cursor-pointer' to='contact-form' smooth={true} >Contact me</Link>
        </section>

        <section id='collection-curator' className='flex flex-col md:gap-y-5 border-b-white border-b-2 pb-20 md:ml-5'>
            <div>
                <h3 className='font-sans text-[3.7rem] font-[700] leading-[3.1875rem] lg:leading-[7rem] md:leading-[7rem] text-gray tracking-[-0.20rem] md:tracking-[-0.11rem] md:text-[7rem] lg:text-[10rem] lg:mr-10'>Collection</h3>
                <h4 className='text-pink font-mono text-[1.7rem] font-[700] mt-[-1rem] pl-4 leading-[2.35625rem] lg:leading-[-2rem] tracking-[-0.10rem] md:tracking-[-0.05rem] lg:text-[3rem]'>Curator</h4>
            </div>
            <h5 className='text-white font-[700] font-mono text-[1.5rem] md:text-[2rem] leading-[140%] p-2'>Listen, guitar enthusiasts usually know what they want.</h5>
            <p className='font-mono text-white text-[1.5em] p-2 md:w-[60vw]'>
                Although… maybe life is going well and you have some money to spend but aren’t sure what your next acquisition can be… Or you are not a guitar enthusiast, 
                but your partner is, and you don’t know what to buy for your guitar’s maniac’s birthday. 
                Talk to me, and together we will see what makes sense for you to buy, we might have something here for you.
            </p>
            <p className='font-mono text-white text-[1.5em] p-2 md:w-[80vw]'>
                Pay just for what you buy, and if you decide to buy it somewhere else... hey! no hard feelings
            </p>
            <Link onClick={() => (changeContactReason("collection-curator"))} className='text-pink text-[1.5rem] font-normal font-mono p-2 hoverlink cursor-pointer' to='contact-form' smooth={true}>Contact me</Link>
        </section>

        <section id='appraisals' className='flex flex-col md:gap-y-5 border-b-white border-b-2 pb-20 md:ml-5'>
            <div>
                <h3 className='font-sans text-[3.7rem] font-[700] leading-[3.1875rem] lg:leading-[7rem] md:leading-[7rem] text-gray tracking-[-0.20rem] md:tracking-[-0.11rem] md:text-[7rem] lg:text-[10rem] lg:mr-10'>Appraisals</h3>
                <h5 className='text-white font-[700] font-mono text-[1.5rem] md:text-[2rem] leading-[140%] p-2'>Today you are not here to buy, you are here to sell and make some money</h5>
            </div>
            <p className='font-mono text-white text-[1.5em] p-2 md:w-[60vw]'>
                If you are not sure how much your guitar is worth… Let me have a look, I will give you a free estimate. Then you can sell it on your own.
                Of course, you already know, if your guitar catches my eye, I will make you an offer.
            </p>
            <Link onClick={() => (changeContactReason("appraisals"))} className='text-pink text-[1.5rem] font-normal font-mono p-2 hoverlink cursor-pointer' to='contact-form'  smooth={true}>Contact me</Link>
        </section>

        <section id='hand-delivery' className='flex flex-col md:gap-y-5 border-b-white border-b-2 pb-20 md:ml-5'>
            <div>
                <h3 className='font-sans text-[3.7rem] font-[700] leading-[3.1875rem] lg:leading-[7rem] md:leading-[7rem] text-gray tracking-[-0.20rem] md:tracking-[-0.11rem] md:text-[7rem] lg:text-[10rem] lg:mr-10'>Hand</h3>
                <h4 className='text-pink font-mono text-[1.7rem] font-[700] mt-[-1rem] pl-4 leading-[2.35625rem] lg:leading-[-2rem] tracking-[-0.10rem] md:tracking-[-0.05rem] lg:text-[3rem]'>Delivery</h4>
            </div>
            <h5 className='text-white font-[700] font-mono text-[1.5rem] md:text-[2rem] leading-[140%] p-2'>From my private collection to your door.</h5>
            <p className='font-mono text-white text-[1.5em] p-2 md:w-[60vw]'>
                You just bought a really expensive guitar, and you want to get it hand delivered and intact, no carrier service, no third party involved.
                Traveling by plane, car, or boat, no matter how, your guitar will remain next to me. Believe me, I won’t lose sight of your precious new acquisition. 
            </p>
            <Link onClick={() => (changeContactReason("hand-delivery"))} className='text-pink text-[1.5rem] font-normal font-mono p-2 hoverlink cursor-pointer' to='contact-form' smooth={true} >Contact me</Link>
        </section>
        <section id='contact-form' className='flex justify-center pb-20'>
            <ContactForm reason={contactReason as string} />
        </section>
        </main>
    )
}