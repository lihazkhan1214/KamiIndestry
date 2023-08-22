import React from 'react';
import Image from 'next/image';
import StarIcon from '@mui/icons-material/Star';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

function CategoryCard() {
  const router = useRouter()
  return (
    <>
      <div
        className="block   shadow-xs sm:shadow-md md:shadow-lg lg:shadow-xl  border-[1px]  border-[#B0B0B0]     mx-2 rounded-lg bg-[#FFF]">
      
          <Image
            className="rounded-t-lg cursor-pointer"
            src="/gallery2.png"
            alt=""
            width={800}
            height={200}
            onClick={()=>router.push('/product/123')}
          />
        



        <div className="p-6">
          <div  className='cursor-pointer' onClick={()=>router.push('/product/123')}>
            <div className='flex justify-between cursor-pointer1'>

              <h5 className='cardheading'>
                Tweezer
              </h5>
              <div className=" mb-3 flex justify-center items-center">
                <StarIcon style={{ color: "#FBA122" }} />
                <StarIcon style={{ color: "#FBA122" }} />
                <StarIcon style={{ color: "#FBA122" }} />
                <StarIcon style={{ color: "#FBA122" }} />
                <StarIcon style={{ color: "#FBA122" }} />

              </div>
            </div>
            <p className='flex justify-between'>
              <span className='text-lg font-medium text-[#292929]'>Price:</span><span>$4.5</span>
            </p>

            <p className=' mb-4 text-justify text-sm text-[#424242]'>
              KAMI EYELASH for Volume Fans Professional Precision Stainless Steel Non-Slip Tip Eyelash Tweezers Curved Lash Extensions Tweezers Eyelash Extension Tools by GEMERRY</p>
          </div>


          <button className='w-full bg-[#1D1D1D] border-2 py-2 font-bold text-[#FFF]' onClick={() => router.push('/cart')} >
            Add Cart

          </button>
        </div>
      </div>








    </>
  )
}

export default CategoryCard