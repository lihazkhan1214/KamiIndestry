
import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer';
import { Providers } from './Provider';
import AuthProvider from '@/components/AuthProvider/AuthProvider';

export const metadata: Metadata = {
  title: 'kamiindustries',
  description: '',
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
