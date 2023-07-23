import Header from './components/header'
import Hydrate from './components/Hydrate'
import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {



  return (
    <html lang="en">
      <body>
        <Hydrate>
        <Header />
        {children}
        </Hydrate>
        </body>
    </html>
  )
}
