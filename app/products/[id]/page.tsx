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

interface FetchedProduct {
    _id: string;
    name: string;
    price: number;
    description: string;
    images: { url: string }[];// Update this to the actual type of images if needed
    ratings: number;
    category: string;
    heading:string;
    stock:number // Update this to the actual type of ratings if needed
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
    // const [product, setProduct] = useState<FetchedProduct | null>(null);
    // const [category, setcategory] = useState<  []>([]);
    const changecompment = (arg: String) => {

        if (arg == "desc")
            setchangecmp("rew")
        else
            setchangecmp('desc');



    }


    const { data: product, error: productError } = useSWR<FetchedProduct | null>(
        `${process.env.API_URL}/api/products/${id}`,
        fetchData
    );

    const { data: category, error: categoryError } = useSWR<FetchedProduct[]>(
        `${process.env.API_URL}/api/products?category=${product?.category}`,
        fetchData
    );

    // async function fetchProduct(id: string): Promise<FetchedProduct | null> {
    //     try {
    //       const response = await fetch(`${process.env.API_URL}/api/products/${id}`);
    //       if (!response.ok) {
    //         throw new Error('Network response was not ok');
    //       }
    //       return await response.json();
    //     } catch (error : any) {
    //       throw new Error(`Failed to fetch product: ${error.message}`);
    //     }
    //   }
      
    //   async function fetchCategory(category: string): Promise<FetchedProduct[]> {
    //     try {
    //       const response = await fetch(`${process.env.API_URL}/api/products?category=${category}`);
    //       if (!response.ok) {
    //         throw new Error('Network response was not ok');
    //       }
    //       return await response.json();
    //     } catch (error: any) {
    //       throw new Error(`Failed to fetch category: ${error.message}`);
    //     }
    //   }
      
    //   // Usage:
    //   // Replace with the desired product ID
    //   const fetchData = async (): Promise<{ product: FetchedProduct | null; category: FetchedProduct[] | null }> => {
    //     try {
    //       const product = await fetchProduct(id);
    //       const category = await fetchCategory(product?.category || ''); // Use an empty string as a fallback if category is undefined
    //       return { product, category };
    //     } catch (error) {
    //       // Handle errors here
    //       console.error(error);
    //       return { product: null, category: null };
    //     }
    //   };
      
    //  const data = await fetchData();

     

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

        //   const handleReview = (e: React.MouseEvent<HTMLButtonElement>) => {
        //     e.preventDefault();
        //     alert("You can give a review after payment");
        //   }
          


    return (
        <>
            {/* this is bakgroundimage of procts */}
            <div className="h-[calc(100vh-80px)] bg-[url('/productbg.jpg')] bg-no-repeat bg-cover  flex items-center justify-center relative z-0 max-w-[1440px] mx-auto">

                <h1 className='title text-[#FFF] text-center'>Product Details</h1>

            </div>



            <div className='padding-x py-10 '>

                <div className='bg-[#FFF] gap-10 font-bold text-shadow py-5 padding-x flex flex-col  lg:flex-row  '>

                    <div className='flex-1 '>
                        {
                            product && (
                                <div className='flex gap-5  items-center py-5'>

                                    <div className=" ">
                                        {
                                            product?.images?.map((img, ind) => (
                                                <Image key={ind} src={img?.url} alt='not found' className='mb-3 cursor-pointer' onClick={() => setindex(ind)} width={100} height={100} />
                                            ))
                                        }

                                    </div>
                                    <div className=''>
                                        <Image src={`${product?.images[Index]?.url}`} alt="" width={500} height={500} />




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
                            <h5 className='text-lg mb-3 text-[#242648] font-medium'>1 review for Eyelash Tweezer</h5>
                            <div className='flex gap-5 items-center'>

                                <Image src="/productbg.jpg" alt="not fuondt " width={100} height={100} />
                                <div className='flex-1 flex items-center  gap-0'>

                                    <Image className='mx-2' src="/Polygon.png" alt='hi' width={60} height={60} />
                                    <div className=' w-[100%] bg-[#FFF] py-6 px-4 border-2 border-[#CCC] '>
                                        <div className='my-2 flex justify-between'>
                                            <h3 className=' text-lg font-medium text-[#242648]'>lihazkhan <span>-20 Agu,2023</span></h3>
                                            <div>
                                                <StarIcon className='text-[#EBA122]' />
                                                <StarIcon className='text-[#EBA122]' />
                                                <StarIcon className='text-[#EBA122]' />
                                                <StarIcon className='text-[#EBA122]' />
                                                <StarIcon className='text-[#EBA122]' />

                                            </div>


                                        </div>
                                        <p className=' my-2 text-lg text-[#686973]'>Excellent!</p>



                                    </div>

                                </div>


                            </div>
                            <h1 className='my-2 globalHeading text-[#363636]'>Add Review</h1>
                            <h3 className='my-2 text-lg font-medium text-[#242648]'>Your rating *</h3>

                            <div>

                                <StarIcon className='text-[#909090]' />
                                <StarIcon className='text-[#909090]' />
                                <StarIcon className='text-[#909090]' />
                                <StarIcon className='text-[#909090]' />
                                <StarIcon className='text-[#909090]' />
                            </div>

                            <form className='my-2 flex flex-col' action="">
                                <textarea className='my-2 py-2 px-4 border-2 placeholder:text-[#626262] outline-none border-[#CCC] h-[120px]' name="" id="" placeholder='Tour Review'></textarea>
                                <input required className='my-2 py-6 px-4 border-2 placeholder:text-[#626262] outline-none border-[#CCC]' type="text" placeholder='Name*' />

                                <input className='my-2 py-6 px-4 border-2 placeholder:text-[#626262] outline-none border-[#CCC]' type="email" placeholder='Email*' />

                                <div className='flex items-center'>
                                    <input className='w-6 h-6  ' required type="checkbox" />
                                    <label className='mx-2 globalpara text-[#1A1D3A]' htmlFor="">Save my name, email, and website in this browser for the next time I comment.</label>

                                </div>
                                <button typeof='submit' className='my-2 py-6 px-4 bg-[#242648] text-lg font-bold text-[#FFF]' onClick={()=>alert("you can review after")}>Submit</button>
                            </form>
                        </div>
                }






            </div>

            {/* related items */}
            <div className='padding-x py-10'>
                <h1 className='globalHeading mb-3 text-[#242648]'>Related Items</h1>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>


                    {category?.map((item) => (
                        <>
                            <div className='mx-auto ' key={item._id}>
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