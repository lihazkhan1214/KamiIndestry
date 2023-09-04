import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CategoryIcon from '@mui/icons-material/Category';

function Siderbar() {
  
  return (
    <>
    
    <div className="h-screen mb-5 bg-[#FFF] padding-x ">

       <div className="list">

        <ul className='flex flex-col gap-5  justify-center py-20'>

          <li className='text-lg font-meduim hover:text-[#2697D3]'><Link className='flex items-center gap-2' href="/admin/orders"><ShoppingCartIcon/> Orders</Link></li>
          <li className='text-lg font-meduim hover:text-[#2697D3]'><Link className='flex items-center gap-2' href="/admin/products"><CategoryIcon/>Products</Link></li>
        
        </ul>





      

       </div>


    </div>
    
    </>
  )
}

export default Siderbar