"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router=useRouter();
  return (
    <div className="relative">
      <div className="bg-[url('/mobilehero.png')]  sm:bg-[url('/hero2.png')] bg-cover bg-no-repeat bg-center h-[800px]">
        <div className="absolute inset-0 mt-16 sm:mt-0">

          <Image className="w-20 h-20 sm:w-[200px] sm:h-[200px]  mt-[10px]" src="/herolefttop.png" alt="not found" width={200} height={200} />
        </div>
        <div className="absolute inset-0 flex py-[250px]   sm:py-0 flex-col justify-center sm:justify-end">

          <Image className="w-20 h-20 sm:w-[200px]  sm:h-[200px]   sm:ml-[100px]" src="/heroleftbottom.png" alt="not found" width={200} height={200} />
        </div>

        <div className="absolute inset-0 flex flex-col py-[250px] sm:py-0 items-end justify-center sm:justify-end">

          <Image className=" w-20 h-20 sm:w-[200px]   sm:h-[200px] " src="/heroright.png" alt="not found" width={200} height={200} />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-start mt-12 sm:mt-0 sm:justify-center">
          <p className="w-[60%] sm:w-full text-white my-5 text-sm sm:globalpara  sm:text-3xl text-center ">Elevate Your Beauty Routine with Premium Instruments and Tools</p>
          <h1 className="text-white my-5 text-center font-bold title lg:text-[100px]  "> Your Source for Beauty  <br className="" />Instruments</h1>
          <p className="text-white my-5 text-sm  sm:globalpara sm:text-3xl text-center w-[60%] sm:w-full">Explore Exclusive Stainless Steel Eyelash Tweezers ,<br /> Eyebrow Tweezers, Manicure and Pedicure Instruments</p>
          <button className="my-5 text-lg font-semibold rounded text-[#1A1D3A] py-3 px-10 bg-[#FFF]" onClick={()=>router.push('/shop')}>Shop Now</button>

        </div>
      </div>
    </div>
  );
};

export default Hero;