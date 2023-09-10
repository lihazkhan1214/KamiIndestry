import React, { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { navlinks } from '@/constants';
import Link from 'next/link';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import CartBadge from './CartBadge';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useSession,signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
const Menunav = () => {
  const [open, setopen] = useState(false);
const router=useRouter();
  const toggleMenu = () => {
    setopen(!open);
  };

  const session=useSession();
  return (
    <div className="absolute z-10">

      {
        open ? <DisabledByDefaultIcon onClick={toggleMenu} /> : <MenuOpenIcon onClick={toggleMenu} />
      }



      {open && (
        <div className="absolute w-[300px] right-4 mt-2 bg-white border rounded shadow-md">
          <ul>
            {
              navlinks.map((item,ind) => (
                <li className="px-4 py-2 hover:bg-gray-100" key={ind}>
                  <Link className='break-normal text-[#1A1D3A]' key={item.title} href={item.url} onClick={toggleMenu}>{item.title}</Link></li>
              ))
            }
            <li className="px-4 py-2 hover:bg-gray-100">
              <Link className='break-normal text-[#1A1D3A]' href='/cart' onClick={toggleMenu}><CartBadge/><span>MyCart</span></Link></li>
            <li className="px-4 py-2 hover:bg-gray-100">
           <div className='break-normal text-[#1A1D3A]' > <AccountCircleIcon className="" />{session.status === 'authenticated' ? <span onClick={() => signOut()}>Logout</span> : <span onClick={() => router.push('/login')}>Sign In</span>} </div> </li>


          </ul>
        </div>
      )}
    </div>
  );
};

export default Menunav;
