"use client"

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Menunav from './Menunav';
import { navlinks } from '@/constants';
// import { useRouter } from 'next/router';
// import ShopDropdown from './ShopDropdown';

import CartBadge from './CartBadge';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



function Navbar() {
  
  return (
   <>
  <header className='h-[80px] padding-x bg-[#F9FBFE] flex justify-between items-center '>



    <div className='flex items-center'>
    <Image src='/ecomercelogo.png' alt='' height={30} width={60}/>
 
    </div>
   <div className='hidden lg:block navbar flex justify-center'>
      {
        navlinks.map((item)=>(
          <Link className='mx-6 text-[#1A1D3A] text-lg font-medium hover:text-[#2697D3]' key={item.title} href={item.url}>{item.title}</Link>
        ))
      }
</div>
<div className='hidden lg:block flex items-center '>

      
      <Link href='/cart' className='mx-6 text-[#1A1D3A] text-lg font-medium hover:text-[#2697D3]'> <CartBadge /> MyCart</Link>
      <Link href='#' className='mx-6 text-[#1A1D3A] text-lg font-medium hover:text-[#2697D3]'> <AccountCircleIcon  className=""/> MyAccount</Link>
 
  </div>

<div className="block lg:hidden">

  <Menunav/>
</div>
  


  </header>
   
   
   
   
   </>
  )
}

export default Navbar