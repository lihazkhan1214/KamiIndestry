import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative">
      <div className="bg-[url('/hero2.png')] bg-cover bg-no-repeat bg-center h-[800px]">
        <div className="absolute inset-0 mt-60   sm:mt-0 ">

          <Image className="mt-[10px]" src="/herolefttop.png" alt="not found" width={200} height={200} />
        </div>
        <div className="absolute inset-0 flex flex-col justify-end">

          <Image className=" sm:ml-[100px]" src="/heroleftbottom.png" alt="not found" width={200} height={200} />
        </div>

        <div className="absolute inset-0 flex flex-col items-end justify-end">

          <Image className="mb-[100px] sm:mt-0" src="/heroright.png" alt="not found" width={200} height={200} />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="w-[60%] sm:w-full text-white my-5 text-sm sm:globalpara  sm:text-3xl text-center ">Elevate your Grooming with kami Idustries Premium Tweezers</p>
          <h1 className="text-white my-5 text-center  title lg:text-[130px] "> Tweezers and <br className="" />Mirrors</h1>
          <p className="text-white my-5 text-sm  sm:globalpara sm:text-3xl text-center w-[60%] sm:w-full">Explore Exclusive Hair Removal, Stainless Steel <br />, Eyelash Tweezers and Mirrors</p>
          <button className="my-5 text-lg font-semibold rounded text-[#1A1D3A] py-3 px-10 bg-[#FFF]">Shop Now</button>

        </div>
      </div>
    </div>
  );
};

export default Hero;