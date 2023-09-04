"use client"

import OrderTable from '@/components/OrderTable'
import Sidebar from '@/components/Siderbar'
import React from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

function page() {
  const router=useRouter();
  const session=useSession();
  console.log("ooorrdr",session);
  const {data}=session;



  if (!(data?.user?.role !== "admin")) {
    router.push('/admin/login');
  }
  
  return (
    <>

      <div className="flex gap-5 bg-[#F8FAFB] flex-col  lg:flex-row justify-between">

        <div className="lg:w-[20%] w-full ">
          <Sidebar />

        </div>
        <div className="lg:w-[80%] w-full  padding-x">
          <div className="flex justify-between mt-5 items-center">
            <h1 className='globalHeading'>Orders</h1>

            <div><button className='bg-[#181F36] text-lg py-3 rounded-lg  px-6 text-[#FFF]'>Add Product</button></div>
          </div>
          <OrderTable />






        </div>

      </div>












    </>
  )
}

export default page