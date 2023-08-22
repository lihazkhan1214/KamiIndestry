import React from 'react'
import CategoryCard from './CategoryCard'

function Municure() {
    return (
        <>
            <div className="padding-x py-10" id="municure">

                <h1 className='my-2 text-center globalHeading text-[#1A1D3A]'>Municure Instruments </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                 <div className='mx-auto'>
                 <CategoryCard />

                 </div>
                 <div className='mx-auto'>
                 <CategoryCard />

                 </div>
                 <div className='mx-auto'>
                 <CategoryCard />

                 </div>
                 <div className='mx-auto'>
                 <CategoryCard />

                 </div>
                 <div className='mx-auto'>
                 <CategoryCard />

                 </div> <div className='mx-auto'>
                 <CategoryCard />

                 </div>
                
                   
                    








                </div>
            </div>
        </>
    )
}

export default Municure