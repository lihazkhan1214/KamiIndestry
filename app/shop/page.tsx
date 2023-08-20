"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Eyebrow from '@/components/Eyebrow';
import Eyelash from '@/components/Eyelash';
import Mirror from '@/components/Mirror';

const Links = [
    {
        category: "eyebrow",
        href: "#eyebrwo",
        title: "Eyebrow Tweezers"
    }, {
        category: "eyelash",
        href: "#eyelash",
        title: "Eyelash Tweezers"
    }, {
        category: "mirror",
        href: "#mirror",
        title: "Eyelash Mirrors"
    }
];


function Shop() {
    const [Ct, setCt] = useState('eyebrow');

    const changeCategory = (arg: String) => {
        if (arg === 'eyebrow')
            setCt('eyebrow')
        else if (arg === 'eyelash')
            setCt('eyelash')
        else
            setCt('mirror');
    }


    return (
        <>
            <div className="padding-x py-10">

                <h1 className='my-2 globalHeading text-center'>Product categories</h1>

                <div className='mt-10 flex justify-center'>

                    {
                        Links.map((item, ind) => (

                            <Link key={ind} className={Ct ===`${item.category}` ? 'w-[180px]  mx-10 py-2 text-center px-2 bg-[#1A1D3A] text-lg font-medium text-[#FFF]' : ' w-[180px] mx-10 py-2 text-center px-2 text-[#1A1D3A] border-2  border-[#1A1D3A] text-lg font-medium '} href={item.href} >{item.title}</Link>
                ))
                    }



            </div>

        </div >
            <Eyebrow/>
            <Eyelash/>
            <Mirror/>


        </>
    )
}

export default Shop