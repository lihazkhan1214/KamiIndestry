const Hero = () => {
  return (
    <div className="relative">
      <div className="bg-[url('/heromobile.png')] sm:bg-[url('/hero.png')] bg-cover bg-no-repeat bg-center h-[calc(100vh-80px)]">

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-white mb-3 globalpara text-center ">Elevate your Grooming with kami Idustries Premium Tweezers</p>
          <h1 className="text-white mb-4 text-center title"> Tweezers and <br className="" />Mirrors</h1>
          <p className="text-white  mb-5 globalpara text-center">Explore Exclusive Hair Removal, Stainless Steel, Eyelash Tweezers and Mirrors</p>
          <button className="mt-2 text-lg font-semibold rounded text-[#1A1D3A] py-3 px-10 bg-[#FFF]">Shop Now</button>

        </div>
      </div>
    </div>
  );
};

export default Hero;