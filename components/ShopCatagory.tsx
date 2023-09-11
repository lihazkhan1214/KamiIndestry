"use client"

import React from 'react';
import Image from 'next/image';
import Homeicons from './HomeIcons';
import Link from 'next/link';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const categories = [
    {
        img: "/cate1.png",
        title: "Eyelash Tweezers",
        url: "/shop/#eyelash"
    }, {
        img: "/cate2.png",
        title: "Eyebrow Tweezers ",
        url: "/shop/#eyebrow"
    },
    {
        img: "/cate3.png",
        title: "Eyelash Mirrors",
        url: "/shop/#mirror"
    },
    ,
    {
        img: "/municure.png",
        title: "Municure Instruments",
        url: "/shop/#municure"
    },
    {
        img: "/predicure.png",
        title: "Pedicure Instruments",
        url: "/shop/#pedicure"
    },

]

function ShopCatagory() {














    const settings = {
        dots: true,
        infinite: true,
        speed: 500,

        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 0,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

















    return (
        <>
            <Homeicons />
            <div className="padding-x py-10 bg-[#E3ECF7] relative">

                <div className='flex justify-center items-center'>
                    <Image src='/Categories.png' alt='not found' width={100} height={100} />

                </div>
                <h1 className='text-center  globalHeading'>Shop By Catogories</h1>
                <p className='globalpara text-center'>“Experience perfection with Kami Industries Tweezers – where quality and innovation unite.”</p>



                <Slider {...settings}>
                    {
                        categories.map((item, ind) => (
                            <Link href={`${item?.url}`} className='' key={ind}>
                                <div className="relative text-center">
                                    <Image src={`${item?.img}`} alt="Your Image" width={400} height={400} className="block mx-auto" />
                                    <div className="absolute mb-6 inset-0 flex items-end justify-center cursor-pointe ">
                                        <Image className=' border-2 border-dashed rounded-full border-spacing-2' src="/arrow.png" alt='' width={60} height={60} />
                                    </div>
                                </div>

                                <h3 className='cardheading text-center'>{item?.title}</h3>
                            </Link>
                        ))
                    }


                </Slider>





            </div>



        </>
    )
}

export default ShopCatagory