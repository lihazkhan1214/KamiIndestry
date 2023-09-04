import React from 'react'
import CategoryCard from './CategoryCard';
interface FetchedProduct {
    _id: string;
    name: string;
    price: number;
    stock:number;
    description: string;
    images: { url: string }[];// Update this to the actual type of images if needed
    ratings: number;
    category: string  // Update this to the actual type of ratings if needed
}
interface MinicureProps {
    municure: FetchedProduct[];
  }
function Municure({municure}:MinicureProps) {
    return (
        <>
            <div className="padding-x py-10" id="municure">

                <h1 className='my-2 text-center globalHeading text-[#1A1D3A]'>Municure Tweezers</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

                    {
                        municure.map((item)=>(
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

export default Municure