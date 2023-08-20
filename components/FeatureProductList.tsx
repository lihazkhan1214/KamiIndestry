import React from 'react'

import CardCarosel from './CardCarosel';
import Image from 'next/image';

function FeatureProductList() {
  return (
    <div className='py-10'>
        <div className=' mb-3 flex justify-center'>
<Image src='/products.png' alt='' width={120} height={60}/>

        </div>
        <h1 className='globalHeading text-center mb-3'>Featured Products</h1>




        <CardCarosel/>
    </div>
  )
}

export default FeatureProductList