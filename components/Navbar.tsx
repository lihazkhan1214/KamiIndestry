"use client"

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Menunav from './Menunav';
import { navlinks } from '@/constants';
import { useRouter } from 'next/navigation';
// import ShopDropdown from './ShopDropdown';
import { useSession, signOut } from 'next-auth/react';



import CartBadge from './CartBadge';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



function Navbar() {
  const router = useRouter();

  const session = useSession();

  return (
    <>
      <header className=' h-[80px] px-16 sm:padding-x bg-[#F9FBFE] flex justify-between items-center '>



        <div className='flex items-center'>
          <Image src='/kamilogo.png' className='cursor-pointer' onClick={()=>router.push('/')} alt='not found' height={100} width={200} />

        </div>
        <div className='hidden lg:block navbar flex justify-center'>
          {
            navlinks.map((item, ind) => (
              <Link key={ind} className='mx-6 text-[#1A1D3A] text-lg font-medium hover:text-[#2697D3]' href={item.url}>{item.title}</Link>
            ))
          }
        </div>
        <div className='hidden lg:block'>
        <div className=' flex items-center '>


          <Link href='/cart' className='mx-6 text-[#1A1D3A] text-lg font-medium hover:text-[#2697D3]'> <CartBadge /> MyCart</Link>
          <div className='mx-6 text-[#1A1D3A] cursor-pointer  text-lg font-medium hover:text-[#2697D3]'> <AccountCircleIcon className="" />{session.status === 'authenticated' ? <span onClick={() => signOut()}>Logout</span> : <span onClick={() => router.push('/login')}>SignIn</span>} </div>

        </div>
        </div>

        <div className="block lg:hidden">

          <Menunav />
        </div>



      </header>




    </>
  )
}

export default Navbar