import Header from './components/header'
import Hydrate from './components/Hydrate'
import './globals.css'
import { Goldman, Play, Gruppo } from "@next/font/google"
import Footer from './components/Footer'


export const metadata = {
  title: 'Wunderlust Guitars',
  description: 'Buy unique guitars online',
}

const goldman = Goldman({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
  variable: '--font-goldman'
})

const play = Play({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
  variable: '--font-play'
})

const gruppo = Gruppo({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
  variable: '--font-gruppo'
})





export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" className={`${play.variable}`}>
      <body className={`${goldman.variable} min-h-screen h-fit bg-black w-[100vw] box-border flex flex-col justify-between overflow-x-hidden`}>
        <Hydrate>
        <Header />
        <div className={`h-[70%] ${gruppo.variable}`}>
        {children}
        </div>
        <Footer />
        </Hydrate>
        </body>
    </html>
  )
}
