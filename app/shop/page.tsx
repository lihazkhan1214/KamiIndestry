"use client"
import React, { useState } from 'react';
import useSWR from "swr";
import { fetchData } from '@/apicalls/api';
import Loading from '@/components/Loading';
import Link from 'next/link';
import Eyebrow from '@/components/Eyebrow';
import Eyelash from '@/components/Eyelash';
import Mirror from '@/components/Mirror';
import Municure from '@/components/Municure';
import Predicure from '@/components/Predicure';


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
    }, {
        category: "municure",
        href: "#municure",
        title: "Municure Instruments"
    }
    , {
        category: "predicure",
        href: "#predicure",
        title: "Predicure Instruments"
    }
];

interface FetchedProduct {
    _id: string;
    name: string;
    price: number;
    description: string;
    images: { url: string }[];// Update this to the actual type of images if needed
    ratings: number;
    category: string
    stock:number;  // Update this to the actual type of ratings if needed
}

function Shop() {
    const [Ct, setCt] = useState('eyebrow');

    const changeCategory = (arg: String) => {
        if (arg === 'eyebrow')
            setCt('eyebrow')
        else if (arg === 'eyelash')
            setCt('eyelash')
        else if(arg=='mirror')
            setCt('mirror');
            else if(arg==='predicure')
            setCt('predicure')
    }
    const { data, error } = useSWR<FetchedProduct []>(
        `/api/products`,
        fetchData
    );

    if (error) return <div>Error loading data</div>;
    if (!data)
        return <div className="flex justify-center items-center"><Loading /></div>;

        const EyebrowProducts = data.filter((product) => product.category === "Eyebrow");
        const EyelashProducts = data.filter((product) => product.category === "Eyelash");
        const MirrorProducts = data.filter((product) => product.category === "Mirror");
        const MunicureProducts = data.filter((product) => product.category === "Municure");
        const PredicureProducts = data.filter((product) => product.category === "Predicure");

    return (
        <>
            <div className="padding-x py-10">

                <h1 className='my-2 globalHeading text-center'>Product categories</h1>

                <div className='mt-10 flex flex-wrap mlg:flex-row justify-center'>

                    {
                        Links.map((item, ind) => (

                            <Link key={ind} className={Ct ===`${item.category}` ? 'w-[200px] h-[50px] mt-5  mx-4 py-2 text-center px-2 bg-[#1A1D3A] text-lg font-medium text-[#FFF]' : ' h-[50px] mt-5 w-[200px] mx-4 py-2 text-center px-2 text-[#1A1D3A] border-2  border-[#1A1D3A] text-lg font-medium '} href={item.href} >{item.title}</Link>
                ))
                    }



            </div>

        </div >







           
<Eyebrow eyebrow={EyebrowProducts}/>
<Eyelash eyelash={EyelashProducts}/>
<Mirror mirror={MirrorProducts}/>
<Municure municure={MunicureProducts} />
<Predicure predicure={PredicureProducts} />



        </>
    )
}

export default Shop