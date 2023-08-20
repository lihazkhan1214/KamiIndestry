import React from 'react'
import ChoiseServices from './ChoiseServices';
const Services=[
    {
        img:"/choice1.png",
        title:"Free Shipment",
        desc:"Enjoy the convenience of free shipment, making your shopping experience even more delightful."
    },

{
    img:"/choice2.png",
    title:"Best Quality",
    desc:"Discover unparalleled excellence as you explore our curated collection of premium products"
},{
    img:"/choice3.png",
    title:"Money Back Gurantee",
    desc:"Shop confidently with our ecommerce Money Back Guarantee, prioritizing your satisfaction."
},{
    img:"/choice4.png",
    title:"Dedicated Support",
    desc:"Experience unmatched customer support, available 24/7 for your seamless online shopping."
},
]

function Choise() {
    return (
        <>
            <div className=" mt-10 padding-x py-10 bg-[#FFF]">

                <h1 className='globalHeading mb-3 text-center text-shadow '>Why Choose Us?</h1>

                <div className='flex justify-between gap-5 flex-wrap lg:flex-nowrap'>

                  {
                    Services.map((item,ind)=>{
                        return   <ChoiseServices key={ind} title={item.title} img={item.img}  desc={item.desc}/> 
                    }
                
                    )
                  }
                    



                </div>



            </div>


        </>
    )
}

export default Choise