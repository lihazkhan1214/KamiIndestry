"use client"
import React, { useState } from 'react';
import Image from 'next/image';
const pimages = ['/productdt1.png', '/productdt2.png', '/productdt3.png'];

function ProductdetailSlider() {
  const [Index, setindex] = useState(0);
  return (
    <div className='flex gap-5  items-center py-5'>

      <div className=" ">
        {
          pimages.map((item, ind) => (
            <Image key={ind} src={`${item}`} className='mb-3 cursor-pointer' onClick={() => setindex(ind)}  width={100} height={100} />
          ))
        }

      </div>
      <div className=''>
        <Image src={`${pimages[Index]}`} alt="" width={500} height={500} />




      </div>


    </div>
  )
}

export default ProductdetailSlider