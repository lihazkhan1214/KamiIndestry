import React from 'react'
import Image from 'next/image';
const gallerImages=['/gallery3.png','/gallery4.png','/gallery5.png'];
function Gallery() {
    return (
        <>

            <div className="padding-x  mt-10  bg">
                <div className="flex mb-3 justify-center items-center">

                    <Image src="/Gallery.png" alt='' height={60} width={120} />
                </div>
                <h1 className='globalHeading text-[#181F36] mb-3 text-center'>Our Gallery</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
                    <div className='w-full relative h-[180px]'>
                        <Image src="/gallery1.png" alt='' fill />


                    </div>
                    <div className='w-full relative h-[180px]'>
                        <Image src="/gallery2.png" alt='' fill />


                    </div>




                </div>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-2 my-2'>
                    {
                        gallerImages.map((item,ind)=>(
                            <div className='w-full relative h-[180px]' key={ind}>
                            <Image src={item} alt='' fill />
    
    
                        </div>
                        ))
                    }
                  
                   




                </div>

            </div>

        </>
    )
}

export default Gallery