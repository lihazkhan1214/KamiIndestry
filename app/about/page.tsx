import React from 'react';
import Image from 'next/image';
import Choise from '@/components/Choise';
import Testimonail from '@/components/Testimonail';

function About() {
  return (
    <>
      {/* this is hero of about us page */}
      <div className="h-[calc(100vh-80px)] bg-[url('/aboutbg.png')] bg-no-repeat bg-cover bg-center flex items-center justify-center relative z-0  mx-auto">

        <h1 className='title text-[#FFF] text-center'>About Us</h1>

      </div>
      <div className='flex justify-between  items-center flex-col lg:flex-row  gap-10 padding-x padding-y mt-10'>

        <div className='flex-1'>
          <h1 className='globalHeading'>About <span className='text-[#2697D3]'>Kami Industries</span></h1>
          <p className='globalpara text-justify text-[#3C3B3B]'>At Kami Industries, we’ve been perfecting precision since 2022. Our tweezers are more than just tools – they’re your trusted companions for flawlessness. Designed with meticulous care, they effortlessly pluck, shape, and define, adding finesse to your every move. What sets us apart is our unwavering dedication to your satisfaction. Our customers aren’t just clients; they’re partners in our journey. We listen, learn, and evolve because your trust fuels our innovation. Discover the elegance of Kami Industries tweezers – a blend of time-honored craftsmanship and modern excellence, designed to empower your best self.</p>

        </div>
        <div className='flex-1 relative h-[350px]'>
          <Image src="/aboutInd.png" alt='' fill />



        </div>


      </div>
      <Choise />
      <Testimonail/>

      <div className="h-screen lg:h-[400px] bg-[url('/aboutcontactbg.png')] bg-no-repeat bg-cover bg-[#1D1D1D] flex items-center justify-center relative z-0  mx-auto">
        <div className='flex flex-col gap-5 items-center justify-center'>
          <h1 className=' text-[#FFF] title text-center'>We deliver best quality <span className='text-[#2697D3]'>Tweezers</span></h1>
          <button className='border-2 border-[#FFF] rounded-sm text-lg font-bold px-6 py-2 text-[#FFF]'>Contact Us</button>

        </div>

      </div>
    


    </>
  )
}

export default About;