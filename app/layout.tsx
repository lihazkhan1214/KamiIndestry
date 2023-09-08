
import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer';
import { Providers } from './Provider';
import AuthProvider from '@/components/AuthProvider/AuthProvider';

export const metadata: Metadata = {
  title: 'kamiindustries',
  description: 'Explore Exclusive Municure Hair Removal, Stainless Steel Eyebrow Tweezers, Eyelash Tweezers, and Mirrors. Shop by Categories and Discover Why Choose Us. Explore Our Featured Products, including the Municure Mirror, to Elevate Your Grooming Experience.',
  icons:{
    icon:"/favicon.png"
  }

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bgcolor'>
    
      <Providers>
        <AuthProvider>
        <Navbar/>
        {children}
        <Footer/>
        </AuthProvider>
        </Providers>
       
        </body>
    </html>
  )
}
