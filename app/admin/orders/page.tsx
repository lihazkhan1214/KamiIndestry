"use client"
import { useEffect } from 'react';
import OrderTable from '@/components/OrderTable'
import Sidebar from '@/components/Siderbar'
import React from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import AddButtton from '@/components/AddButtton';

function Order() {
  const router = useRouter();
  const session = useSession();
  console.log("ooorrdr", session);
  const { data } = session;

  useEffect(() => {
    if (data?.user?.role !== "admin") {
      router.push('/admin/login');
    }
  }, [data, router]);
  
  return (
    <>

      <div className="flex gap-5 bg-[#F8FAFB] flex-col  lg:flex-row justify-between">

        <div className="lg:w-[20%] w-full ">
          <Sidebar />

        </div>
        <div className="lg:w-[80%] w-full  padding-x">
          <div className="flex justify-between mt-5 items-center">
            <h1 className='globalHeading'>Orders</h1>

            <div><AddButtton/></div>
          </div>
          <OrderTable />






        </div>

      </div>












    </>
  )
}

export default Order