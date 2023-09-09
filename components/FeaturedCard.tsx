import React from 'react';
import Image from 'next/image';
import StarRatings from "react-star-ratings";
import { ProductType } from '@/types';
import { useDispatch } from 'react-redux';
import { addProduct } from '@/redux/cartSlice';
import { useRouter } from 'next/navigation';

function FeaturedCard({ name, images, price, desc, id, ratings, stock }: ProductType) {
const router=useRouter();
  const dispatch = useDispatch();

  const handleAddToCart = () => {
   
    const productToAdd = {
      id: id,
      img: images ? images[0]?.url : "/gallery2.png", // Correct image path
      name: name,
      price: price,
      quantity: 1,
      stock: stock
    };

    dispatch(addProduct(productToAdd));
  };

  return (
    <div className="block shadow-xs lg:h-[450px] sm:shadow-md md:shadow-lg lg:shadow-xl border-[1px] border-[#B0B0B0] p-2 mx-2 rounded-lg bg-[#FFF]">
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
            <h5 className='cardheading text-[#2D2C40]'>
              {name}
            </h5>
            <p className='font-semibold text-sm whitespace-pre-line   text-[#2D2C40] '>
              ${price}
            </p>
          </div>
          <div className="mb-3 flex justify-center items-center">
            <StarRatings
              rating={ratings}
              starRatedColor="#ffb829"
              numberOfStars={5}
              starDimension="20px"
              starSpacing="2px"
              name="rating"
            />
          </div>
          <p className='mb-4  whitespace-pre-line text-sm font-semibold text-center text-[#424242]'>
            {desc?.substring(0, 120)}...
          </p>
        </div>
        <button className='w-full border-[#1D1D1D] rounded-[2px] border-[1px] py-2 font-bold text-[#2D2C40]' onClick={handleAddToCart}>
          Add Cart
        </button>
      </div>
    </div>
  )
}

export default FeaturedCard;
