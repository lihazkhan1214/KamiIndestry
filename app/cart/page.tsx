"use client"
import { useCallback } from 'react';
import React from 'react';
import Image from 'next/image';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useSelector } from 'react-redux';
import { selectCart,increaseQuantity, decreaseQuantity } from '@/redux/cartSlice';
import { useDispatch } from 'react-redux';

const forminputs = [
    {
        label: "FullName",
        type: "text",
        placeholder: "lihazkhan"

    },
    {
        label: "Address",
        type: "text",
        placeholder: "kohat"

    }, {
        label: "City",
        type: "text",
        placeholder: "kohat "

    }, {
        label: "Country",
        type: "text",
        placeholder: "pak"
    }, {
        label: "Postal Code",
        type: "number",
        placeholder: "112200"
    }
];

function Cart() {
    const cart=useSelector(selectCart);
    const dispatch=useDispatch();
    console.log("cart",cart);
    if(!cart.products || !cart.quantity|| !cart.total){
        return <h1>Cart is Empty</h1>
    }
    const {products,quantity,total}=cart;


    const handleIncreaseQuantity = useCallback(
        (id: string) => {
          dispatch(increaseQuantity(id));
        },
        [dispatch]
      );
      
      const handleDecreaseQuantity = useCallback(
        (id: string) => {
          dispatch(decreaseQuantity(id));
        },
        [dispatch]
      );
      


    return (
        <>
            {/* this is cart background image */}



            <div className="h-[calc(100vh-80px)] bg-[url('/cartbg.png')] bg-no-repeat bg-cover  flex items-center justify-center relative z-0 max-w-[1440px] mx-auto">


                <h1 className='title text-[#FFF] text-center'>Cart</h1>
            </div>









            <div className="padding-x py-10">

                <div className='bg-[#FFF] py-5'>
                    <h3 className='mx-4 text-[#181F36] globalHeading'>Here’s what you’re getting!</h3>
                    <hr className='mx-4 border-2 my-2 border-[#242648]' />
                    <div className="overflow-x-auto">
                        <table className='table-auto w-full border-2'>
                            <thead className='bg-[#252063] text-[#FFF] text-lg'>
                                <tr>
                                    <th className='pl-6 -6 py-3 text-start whitespace-nowrap'>Product</th>
                                    <th className='py-3 text-center whitespace-nowrap'>Unit Price</th>
                                    <th className='py-3 text-center whitespace-nowrap'>Quantity</th>
                                    <th className='py-3 text-center whitespace-nowrap'>Stock Status</th>
                                    <th className='py-3 text-center whitespace-nowrap'>Total</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products.map((item, ind) => (
                                        <tr className='border-b-2 border-[#242648]' key={ind}>
                                            <td className=' p-5 flex flex-col lg:flex-row items-center gap-2'>
                                                <Image src={item?.img} alt='not found' width={100} height={100} />
                                                <div className='text-sm  font-semibold '>{item?.name}</div>

                                            </td>

                                            <td className='text-sm  font-semibold text-center'>{item.price}$</td>
                                            <td className='text-sm   text-center font-semibold'>
                                                <button className='text-[#242648] border-2 border-[#242648] rounded-lg px-6 py-4 flex flex-nowrap text-center gap-2'> <RemoveIcon  onClick={handleDecreaseQuantity(item?.id)} className='mx-2' />{item?.quantity}<AddIcon onClick={handleIncreaseQuantity(item?.id)} className='mx-2' /></button>

                                            </td>
                                            <td className='text-sm text-center  font-semibold whitespace-nowrap'>{item?.stock}</td>
                                            <td className='text-sm text-center  font-semibold'>${item?.price*item?.quantity}</td>
                                            <td className='text-sm text-center  font-semibold'><button className='bg-[#242648] text-[#FFF] rounded-lg px-11 py-4'>Remove</button></td>

                                        </tr>

                                    ))
                                }

                            </tbody>
                        </table>

                    </div>

                    <h1 className='my-3 globalHeading text-[#181F36] text-center'>Order summary</h1>

                    <div className="px-4 flex  flex-col lg:flex-row  gap-12">

                        <div className="flex-1">
                            <form className='w-full flex flex-col' action="">
                                {
                                    forminputs.map((item, ind) => (
                                        <>
                                            <label key={ind} className='text-[#181F36] text-xl font-bold' htmlFor="">{item.label}</label>
                                            <input className='mb-3 p-4 rounded-md border-2 bg-[#FFF] outline-none placeholder:text-[#515253] placeholder:font-extrabold border-[#242648]' type={item.type} placeholder={item.placeholder} />

                                        </>

                                    ))
                                }


                            </form>


                        </div>
                        <div className="flex-1">
                            <h1 className='text-[#181F36] text-xl font-bold'>Order Details:</h1>
                            <div className='flex justify-between my-3'>

                                <div className='text-[#181F36] text-lg font-normal'>{quantity}Items</div>
                                <div className='text-[#181F36] text-lg font-normal'>${total}</div>
                            </div>
                            <div className='flex justify-between my-3'>

                                <div className='text-[#181F36] text-lg font-normal'>Delivery Fee </div><div className='text-[#181F36] text-lg font-normal'>$0</div>
                            </div>
                            <div className='flex justify-between my-3'>

                                <div className='text-[#181F36] text-xl font-bold'>Sub Total</div><div className='text-[#181F36] text-xl font-bold'>${total}</div>
                            </div>
                            <button className=' w-full text-[rgb(255,255,255)] text-2xl font-normal text-center mb-3 p-4 rounded-md border-2  bg-[#242648]'>Add Payment</button>
                            <button className=' w-full text-[#242648] text-2xl font-normal text-center mb-3 p-4 rounded-md border-2  border-[#242648]'>Cancel</button>
                        </div>
                    </div>

                </div>
            </div >




        </>
    )
}

export default Cart;