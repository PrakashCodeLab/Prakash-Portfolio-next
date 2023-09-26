import { Footer, Navbar } from '@/components/components'
import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ThemeProviders from './Providers'
import { ThemecontextProvider } from '@/context/ThemeContext'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title:"Prakash Portfolio",
  description :" Explore the web development journey of Prakash  A Creative Web Developer"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html  lang="en">
      <body className=' body'>
        
        
      <ThemecontextProvider>
       <ThemeProviders>
        <div className='body__container'>
        
              <Navbar/>
         
        {children}
           <Footer/>
        </div>
        
        </ThemeProviders>
        </ThemecontextProvider>
        </body> 
    </html>
  )
}
