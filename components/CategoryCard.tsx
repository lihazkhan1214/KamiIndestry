import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import StarRatings from "react-star-ratings";
import { ProductType } from '@/types';



function CategoryCard({ name, images, price, desc, id, ratings }: ProductType) {
  const router = useRouter()

  return (
    <>
      <div
        className="block   shadow-xs sm:shadow-md md:shadow-lg lg:shadow-xl  border-[1px]  border-[#B0B0B0]  rounded-lg bg-[#FFF]">

        <div className='h-[200px] w-[100%] relative'>
          <Image
            className="rounded-t-lg relative cursor-pointer"
            src={images ? images[0]?.url : "/gallery2.png"}
            alt=""
            fill={true}
            onClick={() => router.push(`/products/${id}`)}
          />

        </div>



        <div className="p-6">
          <div className='cursor-pointer' onClick={() => router.push(`/products/${id}`)}>
            <div className='flex justify-between cursor-pointer1'>

              <h5 className='cardheading'>
                {name}
              </h5>
              <StarRatings
                rating={ratings}
                starRatedColor="#ffb829"
                numberOfStars={5}
                starDimension="20px"
                starSpacing="2px"
                name="rating"
              />

            </div>
            <div className=" mb-3 py-2 flex justify-between items-center">
            <span className='text-[#292929]'>
               Price:
              </span>
              <span className='text-[#292929]'>
                ${price}
              </span>

            </div>
            <p className=' mb-4 text-justify text-sm text-[#424242]'>
              {desc?.substring(0, 150)}...</p>
          </div>
          <button className='w-full  border-[#1D1D1D] rounded-[2px] border-[1px] py-2 font-bold text-[#2D2C40]' onClick={() => router.push('/cart')} >
            Add Cart

          </button>
        </div>
      </div>








    </>
  )
}

export default CategoryCard;