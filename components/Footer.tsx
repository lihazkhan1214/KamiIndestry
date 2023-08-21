"use client"
import React from 'react';
import Image from 'next/image';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import PinDropIcon from '@mui/icons-material/PinDrop';
import InstagramIcon from '@mui/icons-material/Instagram';
const info = [
  {
    Icon: <PhoneIcon />,
    desc: "+923554250211​"
  },
  {
    Icon: <EmailIcon />,
    desc: "info@kamiindustries.com​"
  },
  {
    Icon: <PinDropIcon />,
    desc: "Industrial Area, Shahab Pura, Sialkot,Pakistan"
  }
]

function Footer() {
  return (
    <>
      <div className='padding-x py-4 bg-[#FFF]'>

        <div className='flex justify-between flex-col lg:flex-row'>
          <Image src='/ecomercelogo.png' alt='' width={60} height={30} />
          <h1 className="globalHeading text-[#0A142F]">Subscribe Newsletters</h1>
          <div className="bg-[#FFF] border-2 border-[#ccc] px-2 py-2 flex items-center justify-between relative h-15">

            <input className='px-2  focus:outline-none  placeholder:text-[#2B3D51] placeholder:font-bold' placeholder='Enter Your Email' type="text" />
            <button className='bg-[#242648] hidden sm:block text-[#FFF] rounded px-6 py-2'>Subscribe</button>


          </div>
          <button className='bg-[#242648] block my-2 sm:hidden text-[#FFF] rounded px-6 py-2'>Subscribe</button>

        </div>
        <div className="mt-10 flex justify-between  flex-wrap lg:flex-no-wrap items-center ">

          <p className='globalpara w-[400px]'>Experience perfection with Kami Industries Tweezers – where quality and innovation unite.</p>

          {
            info.map((item, ind) => (
              <div className='flex items-center' key={ind}>
                {item.Icon}
                <span className='text-[#181F36] text-sm'>{item.desc}​</span>





              </div>
            ))
          }



        </div>
        <hr className='border-2 border-[#71777D]' />
        <div className='flex justify-between items-center flex-wrap lg:flex-no-wrap'>
          <p className='globalpara text-[#181F36]'>Copyright © 2023 Kami Industries | Powered by Kami Industries</p>
          <div className="flex">
            <span className='text-sm font-normal mx-2'>Follow us on Instagram</span>
            <Image src="/instagram.png" alt=''  width={20} height={20}/>

          </div>

        </div>



      </div>





    </>
  )
}

export default Footer