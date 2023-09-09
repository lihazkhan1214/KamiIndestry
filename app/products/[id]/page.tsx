"use client"
import React, { useState, useEffect } from 'react';
import FeaturedCard from '@/components/FeaturedCard';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { dividerClasses } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Category } from '@mui/icons-material';
import useSWR from "swr";
import Loading from '@/components/Loading';
import { fetchData } from '@/apicalls/api';
import { useDispatch } from 'react-redux';
import { addProduct } from '@/redux/cartSlice';
import StarRatings from "react-star-ratings"
import axios from 'axios';
interface ReviewType {
    name: string;
    email: string;
    comment: string;
    rating: number;
}

interface FetchedProduct {
    _id: string;
    name: string;
    price: number;
    description: string;
    images: { url: string }[];// Update this to the actual type of images if needed
    ratings: number;
    category: string;
    heading:string;
    stock:number ;
    reviews: ReviewType[]; 
}



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




function Productid({ params }: { params: { id: string } }) {
    const id = params.id;

    const router = useRouter();

     const dispatch=useDispatch();


    const [count, setcount] = useState(1);
    const [Index, setindex] = useState(0);
   
    const [changecmp, setchangecmp] = useState('desc');
    // const [value, setvalue] = useState(0);
    const [rating, setrating] = useState<number>(3);
    const [name, setname] = useState<string>("");
    const [email, setemail] = useState<string>("");
    const [comment, setcomment] = useState<string>("");
    const changecompment = (arg: String) => {

        if (arg == "desc")
            setchangecmp("rew")
        else
            setchangecmp('desc');



    }


    const { data: product, error: productError } = useSWR<FetchedProduct | null>(
        `/api/products/${id}`,
        fetchData
    );

    const { data: category, error: categoryError } = useSWR<FetchedProduct[]>(
        `/api/products?category=${product?.category}`,
        fetchData
    );


     

    if (productError || categoryError) return <div>Error loading data</div>;
    if (!product || !category)
        return <div className="flex justify-center items-center"><Loading /></div>;

        const handleAddToCart = () => {
   
            const productToAdd = {
              id:product?._id,
              img: product?.images ? product.images[0]?.url : "/gallery2.png", // Correct image path
              name: product?.name,
              price: product?.price,
              quantity:count,
              stock:product?.stock,
              heading:product?.heading
            };
        
            dispatch(addProduct(productToAdd));
          };

        
          const handleReview=async(e:any)=>{
            e.preventDefault();
           try {
            const res= await axios.post('/api/reviews',{
                name,
                email,
                comment,
                rating,
                id
            });
          if(res.status===201){
            alert("Thanks for review")
          }


            
           } catch (error) {
            
           }

          }


    return (
        <>
            {/* this is bakgroundimage of procts */}
            <div className="h-[calc(100vh-80px)] bg-[url('/productbg.jpg')] bg-no-repeat bg-cover  flex items-center justify-center relative z-0 max-w-[1440px] mx-auto">

                <h1 className='title text-[#FFF] text-center'>Product Details</h1>

            </div>



            <div className='padding-x py-10 '>

                <div className='bg-[#FFF] gap-10 font-bold text-shadow mt-2 padding-x flex flex-col  lg:flex-row  '>

                    <div className='flex-1 '>
                        {
                            product && (
                                <div className='flex gap-5  items-center py-5'>

                                   <div className='flex flex-col gap-5'>
                                        {
                            
                                            product?.images?.map((img, ind) => (
                                                <div className=" w-[100px] h-[100px] relative">
                                                <Image key={ind} src={img?.url} alt='not found' className='mb-3 cursor-pointer' onClick={() => setindex(ind)} fill/>
                                                </div>
                                            ))
                                        }
</div>
                                  
                                    <div className=' w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] relative'>
                                        <Image src={`${product?.images[Index]?.url}`} alt="" fill />




                                    </div>


                                </div>


                            )
                        }




                    </div>
                    <div className='flex-1 flex flex-col  py-5'>
                        <p className='descsmall text-[#242648] text-2xl mb-3 text-justify'>{product?.heading}</p>

                        <span className='text-[#2697D3] mb-3 text-lg'>{product?.price}$</span>

                        <p className='global text-[#242648] text-shadow  text-justify mb-3'>{product?.description}</p>

                        <div className=' mb-3 flex gap-4  justify-between'>
                            <button className='rounded-lg w-full flex justify-between items-center border-2 text-[#181F36] py-4 p-6 border-[#242648] text-2xl'><RemoveIcon
                                onClick={() => setcount(count > 0 ? count-1 :0)} />{count}<AddIcon onClick={() => setcount(count + 1)} /></button>
                            <button className=' rounded-lg w-full text-center bg-[#242648] border-2 text-[#FFF] py-4 p-6 border-[#242648] ' onClick={()=>router.push('/cart')}>Add Payment</button>

                        </div>
                        <button className='mb-3  rounded-lg w-full  border-2 text-[#181F36] text-center py-4 p-6 border-[#242648] text-lg' onClick={handleAddToCart}>Add Cart</button>

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
                            <h5 className='text-lg mb-3 text-[#242648] font-medium'>{product.reviews.length} {product.name}</h5>
              
                                {             
                                    product.reviews?.map((item:any)=>(
                                        <div className='flex gap-5 items-center py-5' key={item.name}>

                                        <Image src={product.images[0]?.url } alt="not fuondt " width={100} height={100} />
                                        <div className='flex-1 flex items-center  gap-0'>

                                        <Image className='mx-2' src="/Polygon.png" alt='hi' width={60} height={60} />
                                        <div className=' w-[100%] bg-[#FFF] py-6 px-4 border-2 border-[#CCC] '>
                                            <div className='my-2 flex justify-between'>
                                                <h3 className=' text-lg font-medium text-[#242648]'>{item?.name} <span>{item?.createdAt}</span></h3>
                                                <div>
                                            <StarRatings rating={item.rating}  starRatedColor="#ffb829" 
                                                 numberOfStars={5} 
                                                starDimension="20px" 
                                                starSpacing="2px"
                                                  name="rating"
                                                 
                                                                 />
    
                                                </div>
    
    
                                            </div>
                                            <p className=' my-2 text-lg text-[#686973]'>{item?.comment}</p>
    
    
    
                                        </div>
    
                                    </div>
                                    </div>

                                    ))

                                }



                           
                            <h1 className='my-2 globalHeading text-[#363636]'>Add Review</h1>
                            <h3 className='my-2 text-lg font-medium text-[#242648]'>Your rating *</h3>

                            <div>

                            <StarRatings  rating={rating}  starRatedColor="#ffb829" 
                                             numberOfStars={5} 
                                            starDimension="20px" 
                                            starSpacing="2px"
                                              name="rating"
                                              changeRating={(e) => setrating(e)}
                                                             />
                            </div>

                            <form onSubmit={handleReview} className='my-2 flex flex-col' action="">
                                <textarea required name="comment" className='my-2 py-2 px-4 border-2 placeholder:text-[#626262] outline-none border-[#CCC] h-[120px]' onChange={(e)=>setcomment(e.target.value)}  id="" placeholder='To your Review'></textarea>
                                <input required name="name" onChange={(e)=>setname(e.target.value)}   className='my-2 py-6 px-4 border-2 placeholder:text-[#626262] outline-none border-[#CCC]' type="text" placeholder='Name*' />

                                <input required name="email" onChange={(e)=>setemail(e.target.value)}  className='my-2 py-6 px-4 border-2 placeholder:text-[#626262] outline-none border-[#CCC]' type="email" placeholder='Email*' />

                                <div className='flex items-center'>
                                    <input className='w-6 h-6  ' required type="checkbox" />
                                    <label className='mx-2 globalpara text-[#1A1D3A]' htmlFor="">Save my name, email, and website in this browser for the next time I comment.</label>

                                </div>
                                <button typeof='submit' className='my-2 py-6 px-4 bg-[#242648] text-lg font-bold text-[#FFF]'>Submit</button>
                            </form>
                        </div>
                }






            </div>

            {/* related items */}
            <div className='padding-x py-10'>
                <h1 className='globalHeading mb-3 text-[#242648]'>Related Items</h1>

                <div className='grid mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>


                    {category?.map((item) => (
                        <>
                            <div className='mx-auto' key={item._id}>
                                <FeaturedCard category={item.category} name={item.name} stock={item.stock} images={item.images} desc={item.description} ratings={item.ratings} id={item._id} price={item.price} />
                            </div>
                        </>
                    ))}





                </div>





            </div>





        </>
    )
}

export default Productid