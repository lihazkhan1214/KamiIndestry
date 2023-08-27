import React from 'react'
import CategoryCard from './CategoryCard';
interface FetchedProduct {
    _id: string;
    name: string;
    price: number;
    description: string;
    images: { url: string }[];// Update this to the actual type of images if needed
    ratings: number;
    category: string  // Update this to the actual type of ratings if needed
}
interface EyelashProps {
    eyelash: FetchedProduct[];
  }
function Eyelash({eyelash}:EyelashProps) {
    return (
        <>
            <div className="padding-x py-10" id="eyelash">

                <h1 className='my-2 text-center globalHeading text-[#1A1D3A]'>Eyelash Tweezers</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

                    {
                        eyelash.map((item)=>(
                            <div className='mx-auto' key={item._id}>
                            <CategoryCard  name={item.name} images={item.images} ratings={item.ratings} price={item.price} desc={item.description} id={item._id}/>
           
                            </div>

                        ))
                    }
                
                 
                 
                
                   
                    








                </div>
            </div>
        </>
    )
}

export default Eyelash