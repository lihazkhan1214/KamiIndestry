
import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer';
import { Providers } from './Provider';

export const metadata: Metadata = {
  title: 'WebCollect',
  description: 'Created by Lihaz Khan',
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
        <Navbar/>
        {children}
        <Footer/>
        </Providers>
       
        </body>
    </html>
  )
}
