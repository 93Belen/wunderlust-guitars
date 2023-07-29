import Link from "next/link";

export default function Shop(
    {
        children,
      }: {
        children: React.ReactNode
      }
){
    return (
        <main className='h-fit min-h-screen px-4 md:px-8 w-screen overflow-x-hidden box-border pt-10 md:pt-20'>
            <div className='w-full flex justify-center'>
            <header className='flex justify-around w-full md:max-w-[800px] text-white h-fit font-mono text-[1.125rem]'>
                <Link href="/shop">Most Popular</Link>
                <Link href="/shop/acoustic">Acoustic</Link>
                <Link href="/shop/electric">Electric</Link>
                <Link href="/shop/bass">Bass</Link>
                <Link href="/shop/sixstrings">6 Strings</Link>
            </header>
            </div>
            <article className='pt-10 w-full p-2 md:p-20 flex justify-center'>
                {children}
            </article>
        </main>
    )
}