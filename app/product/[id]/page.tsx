"use client"
import React, { useState } from 'react';
import Productdetailslider from '@/components/ProductdetailSlider';
import FeaturedCard from '@/components/FeaturedCard';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { dividerClasses } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import Image from 'next/image';
const descpara = [
    {
        title: "The Right Choice:",
        desc: "Surpass your customers’ expectations and deliver professional eyelash extensionS services with the ASPIRE BEAUTY tweezers! Our premium tweezers for eyelash extensions are made with high attention to detail for accurate and easy application."
    }, {
        title: "Premium Materials: ",
        desc: "The Aspire Beauty eyelash applicator tool is made with premium Japanese steel, which is extremely durable and corrosion-proof. The steel volume lash tweezers are covered in a high-grade finishing that makes them more resistant and easier to clean and disinfect.",

    }
    , {
        title: "High-Precision Application:",
        desc: " Our Aspire Beauty tweezers for eyelash extensions feature an anti-slip diamond grip handle for better and firm control during eyelash placement. The tweezers are lightweight and balanced, with finely crafted tips for superior precision."
    }
    , {
        title: "Complete Set:",
        desc: " The complete set includes 4 different precise tweezers that cover all eyelash extension needs. The kit comes with a volume tweezer for fan making, a 90-degree tweezer for the pinching method, a curved tweezer for isolation and eyelash placement as well as a 45-degree tweezer."
    }, {
        title: "Choose Your Favorite: ",
        desc: "The Aspire Beauty lash extension tweezers set is available in a wide range of designs and colors for you to pick your favorite! Choose between a simple white, pink, multi-colored, silver, champagne and more!"
    }
]

function Productid() {
    const [count, setcount] = useState(1);
    const [changecmp, setchangecmp] = useState('desc');
    const changecompment = (arg: String) => {

        if (arg == "desc")
            setchangecmp("rew")
        else
            setchangecmp('desc');



    }


    return (
        <>
            {/* this is bakgroundimage of procts */}
            <div className="h-[calc(100vh-80px)] bg-[url('/productbg.jpg')] bg-no-repeat bg-cover  flex items-center justify-center relative z-0 max-w-[1440px] mx-auto">

                <h1 className='title text-[#FFF] text-center'>Product Details</h1>

            </div>

            <div className='padding-x py-10 '>

                <div className='bg-[#FFF] gap-10 font-bold text-shadow py-5 padding-x flex flex-col  lg:flex-row  '>

                    <div className='flex-1 '>

                        <Productdetailslider />


                    </div>
                    <div className='flex-1 flex flex-col  py-5'>
                        <p className='descsmall text-[#242648] text-2xl mb-3 text-justify'>KAMI Beauty Professional Set Of Fiber Tip Eyelash Extensions Tweezers Japanese Steel Lash Supply</p>

                        <span className='text-[#2697D3] mb-3 text-lg'>4.5$</span>

                        <p className='global text-[#242648] text-shadow  text-justify mb-3'>The Aspire Beauty eyelash applicator tool is made with premium Japanese steel, which is extremely durable and corrosion-proof. The steel volume lash tweezers are covered in a high-grade finishing that makes them more resistant and easier to clean and disinfect.</p>

                        <div className=' mb-3 flex gap-4  justify-between'>
                            <button className='rounded-lg w-full flex justify-between items-center border-2 text-[#181F36] py-4 p-6 border-[#242648] text-2xl'><RemoveIcon
                                onClick={() => setcount(count - 1)} />{count}<AddIcon onClick={() => setcount(count + 1)} /></button>
                            <button className=' rounded-lg w-full text-center bg-[#242648] border-2 text-[#FFF] py-4 p-6 border-[#242648] '>Add Payment</button>

                        </div>
                        <button className='mb-3  rounded-lg w-full  border-2 text-[#181F36] text-center py-4 p-6 border-[#242648] text-lg'>Add Cart</button>

                    </div>
                </div>



            </div>
            {/* this is description and reviews pagas */}
            <div className="padding-x py-10">
                <div className="flex mb-3 gap-5 items-center">
                    <h6 onClick={() => changecompment(changecmp)} className={changecmp === 'desc' ? `text-[#2697D3] text-2xl font-medium cursor-pointer underline` : 'text-[#242648] text-2xl font-medium cursor-pointer'} >Description</h6>
                    <h6 onClick={() => changecompment(changecmp)} className={changecmp === 'rew' ? `text-[#2697D3] underline text-2xl font-medium cursor-pointer` : 'text-[#242648] text-2xl font-medium cursor-pointer'}>Reviews(2)</h6></div>

                {
                    changecmp === 'desc' ? <div>
                        {
                            descpara.map((item, ind) => (
                                <p key={ind} className='globalpara mb-3 text-[#181F36] text-justify'> <span className='text-2xl font-bold'>{item.title}</span>{item.desc} </p>

                            ))
                        }
                    </div> :
                        <div className='w-[80%]'>
                            <h5 className='text-lg mb-3 text-[#242648] font-medium'>1 review for Eyelash Tweezer</h5>
                            <div className='flex gap-5 items-center'>

                                <Image src="/productbg.jpg" alt="not fuondt " width={100} height={100} />
                                <div className='flex-1 flex items-center  gap-0'>

                                    <Image className='mx-2' src="/Polygon.png" alt='hi' width={60} height={60} />
                                    <div className=' w-[100%] bg-[#FFF] py-6 px-4 border-2 border-[#CCC] '>
                                        <div className='my-2 flex justify-between'>
                                            <h3 className=' text-lg font-medium text-[#242648]'>lihazkhan <span>-20 Agu,2023</span></h3>
                                            <div>
                                                <StarIcon className='text-[#EBA122]' />
                                                <StarIcon className='text-[#EBA122]' />
                                                <StarIcon className='text-[#EBA122]' />
                                                <StarIcon className='text-[#EBA122]' />
                                                <StarIcon className='text-[#EBA122]' />

                                            </div>


                                        </div>
                                        <p className=' my-2 text-lg text-[#686973]'>Excellent!</p>



                                    </div>

                                </div>


                            </div>
                            <h1 className='my-2 globalHeading text-[#363636]'>Add Review</h1>
                            <h3 className='my-2 text-lg font-medium text-[#242648]'>Your rating *</h3>

                            <div>

                                <StarIcon className='text-[#909090]' />
                                <StarIcon className='text-[#909090]' />
                                <StarIcon className='text-[#909090]' />
                                <StarIcon className='text-[#909090]' />
                                <StarIcon className='text-[#909090]' />
                            </div>

                            <form className='my-2 flex flex-col' action="">
                            <textarea className='my-2 py-2 px-4 border-2 placeholder:text-[#626262] outline-none border-[#CCC]' name="" id="" cols="30" rows="5" placeholder='Tour Review'></textarea>
                            <input className='my-2 py-6 px-4 border-2 placeholder:text-[#626262] outline-none border-[#CCC]' type="text" placeholder='Name*' />
                            
                            <input className='my-2 py-6 px-4 border-2 placeholder:text-[#626262] outline-none border-[#CCC]' type="email" placeholder='Email*' />

                            <div className='flex items-center'>
                            <input className='w-6 h-6  ' type="checkbox" />
                            <label className='mx-2 globalpara text-[#1A1D3A]' htmlFor="">Save my name, email, and website in this browser for the next time I comment.</label>

                            </div>  
                            <button className='my-2 py-6 px-4 bg-[#242648] text-lg font-bold text-[#FFF]'>Submit</button>
                            </form>
                        </div>
                }






            </div>

            {/* related items */}
            <div className='padding-x py-10'>
                <h1 className='globalHeading mb-3 text-[#242648]'>Related Items</h1>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>

                    <div className='mx-auto '> <FeaturedCard /></div>
                    <div className='mx-auto '> <FeaturedCard /></div>
                    <div className='mx-auto '> <FeaturedCard /></div>

                </div>





            </div>


        </>
    )
}

export default Productid