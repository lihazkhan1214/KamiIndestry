import React from 'react';
import Image from 'next/image';
const homeiconImages = [
    {
        img: "/home2.png"
    },
    {
        img: "/home3.png"
    }, {
        img: "/home4.png"
    }
]

function Homeicons() {
    return (
        <>
            <div className="padding-x padding-y relative">

                <div className=" grid py-5 gap-5 grid-cols-1 content-center md:grid-cols-2 lg:grid-cols-4">
                <div className='border-r-2 border-[#1A1D3A]  justify-center lg:justify-start flex  items-center' >
                                <Image src='/home1.png' alt='' width={100} height={100} />

                              


                            </div>
                 
                    {
                        homeiconImages.map((item, ind) => (
                            <div className='border-r-2 border-[#1A1D3A]   flex justify-center items-center' key={ind}>
                                <Image src={item.img} alt='' width={100} height={100} />

                              


                            </div>

                        ))
                    }




                </div>
              

            </div>

        </>
    )
}

export default Homeicons