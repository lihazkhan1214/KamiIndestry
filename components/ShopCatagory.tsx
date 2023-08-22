import React from 'react';
import Image from 'next/image';
import Homeicons from './HomeIcons';
import Link from 'next/link';

const categories = [
    {
        img: "/cate1.png",
        title: "Eyelash Tweezers",
        url:"/shop/#eyelash"
    }, {
        img: "/cate2.png",
        title: "EyeBrow Tweezers ",
        url:"/shop/#eyebrow"
    },
    {
        img: "/cate3.png",
        title: "Eyelash Mirrors",
        url:"/shop/#mirror"
    },
    ,
    {
        img: "/cate3.png",
        title: "Municure Instrument",
        url:"/shop/#municure"
    },

]

function ShopCatagory() {
    return (
        <>
            <Homeicons />
            <div className="padding-x py-10 bg-[#E3ECF7] relative">

                <div className='flex justify-center items-center'>
                    <Image src='/Categories.png' alt='not found' width={100} height={100} />

                </div>
                <h1 className='text-center  globalHeading'>Shop By Catogories</h1>
                <p className='globalpara text-center'>“Experience perfection with Kami Industries Tweezers – where quality and innovation unite.”</p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 content-between'>

                    {
                        categories.map((item, ind) => (
                            <Link href={item.url} className=''key={ind}>
                                <div className="relative text-center">
                                    <Image src={item.img} alt="Your Image" width={400} height={400} className="block mx-auto" />
                                    <div className="absolute mb-6 inset-0 flex items-end justify-center cursor-pointe ">
                                        <Image className=' border-2 border-dashed rounded-full border-spacing-2' src="/arrow.png" alt='' width={60} height={60} />
                                    </div>
                                </div>

                                <h3 className='cardheading text-center'>{item.title}</h3>
                            </Link>
                        ))
                    }




                </div>
            </div>



        </>
    )
}

export default ShopCatagory