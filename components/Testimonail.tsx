import React from 'react';
import Image from 'next/image';
import TestimonialSlider from './TestimonialSlider';

function Testimonail() {
    return (
        <>
            <div className="padding-x   bg-[#E3ECF7] py-10">
                <div className='flex items-center justify-center mb-3'>
                    <Image src='/Testimonials.png' alt='' width={120} height={60} />


                </div>
                <h1 className='globalHeading text-center mb-3'>What Our Client Says About Our <br></br>Products</h1>

<TestimonialSlider/>

            </div>

        </>
    )
}

export default Testimonail