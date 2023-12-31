import React from 'react'
import CategoryCard from './CategoryCard';
interface FetchedProduct {
    _id: string;
    name: string;
    stock:number;
    price: number;
    description: string;
    images: { url: string }[];// Update this to the actual type of images if needed
    ratings: number;
    category: string  // Update this to the actual type of ratings if needed
}
interface EyebrowProps {
    eyebrow: FetchedProduct[];
  }
function Eyebrow({eyebrow}:EyebrowProps) {
    return (
        <>
            <div className="padding-x py-10" id="eyebrow">

                <h1 className='my-2 text-center globalHeading text-[#1A1D3A]'>Eyebrow Tweezers</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">

                    {
                        eyebrow.map((item)=>(
                            <div className='mx-auto' key={item._id}>
                            <CategoryCard category={item.category} stock={item.stock}  name={item.name} images={item.images} ratings={item.ratings} price={item.price} desc={item.description} id={item._id}/>
           
                            </div>

                        ))
                    }
                
                 
                 
                
                   
                    








                </div>
            </div>
        </>
    )
}

export default Eyebrow