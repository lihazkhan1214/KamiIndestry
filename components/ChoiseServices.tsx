import React from 'react';
import { CustomChoiseServices } from '@/types';
import Image from 'next/image';

function ChoiseServices({ title, img, desc }: CustomChoiseServices) {
    return (
        <>
            <div className='flex gap-5 flex-col items-center '>
                <Image src={`${img}`} alt='' width={50} height={50} />
                <h3 className='cardheading text-shadow'>{title}</h3>
                <p className='globalpara text-[#4A4949] text-center'>{desc}</p>

            </div>







        </>
    )
}

export default ChoiseServices