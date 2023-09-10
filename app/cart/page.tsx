"use client"
import { useCallback, useState } from 'react';
import React from 'react';
import Image from 'next/image';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useSelector } from 'react-redux';
import { selectCart, increaseQuantity, reset, decreaseQuantity, removeProduct } from '@/redux/cartSlice';
import { useDispatch } from 'react-redux';
import { Session } from 'next-auth';
import { useRouter } from 'next/navigation';
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import { useSession } from 'next-auth/react';
import { ownerDocument } from '@mui/material';

const forminputs = [
    {
        label: "FullName",
        type: "text",
        name: "customer",
        placeholder: "Name"

    },
    {
        label: "Address",
        type: "text",
        placeholder: "Address",
        name: "address",

    }, {
        label: "Phone",
        type: "number",
        placeholder: " Phone",
        name: "phone",

    }, {
        label: "Country",
        type: "text",
        placeholder: "Country",
        name: "country",
    }, {
        label: "Postal Code",
        type: "number",
        placeholder: "112200",
        name: "postalcode",
    }
];

function Cart() {
    const cart = useSelector(selectCart);
    const dispatch = useDispatch();
    const session = useSession();
    const router = useRouter();
    console.log(session)
    const [open, setopen] = useState(false);
    const [orderob, setorderob] = useState({
        customer: "",
        address: "",
        phone: +92,
        country: "",
        postalcode: 12



    });

  


    const style = {"layout":"vertical"};
    const { products, quantity, total } = cart;
    const amount = total;
    const currency = "usd"

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


    const handleremoveProduct = (id: string) => {
        dispatch(removeProduct(id));
    }

    const handleopen = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (session.status === 'authenticated') {
            setopen(true);
        }
        else {
            router.push('/login')
        }
        setopen(true)
    }


    // const style = ;



    function createOrder() {
        // replace this url with your server
        return fetch("https://react-paypal-js-storybook.fly.dev/api/paypal/create-order", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            // use the "body" param to optionally pass additional order information
            // like product ids and quantities
            body: JSON.stringify({
                cart: [
                    {
                        sku: "1blwyeo8",
                        quantity: 2,
                    },
                ],
            }),
        })
            .then((response) => response.json())
            .then((order) => {
                // Your code here after create the order
                return order.id;
            });
    }




    function onApprove() {
        // replace this url with your server
        return fetch("https://react-paypal-js-storybook.fly.dev/api/paypal/capture-order", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                orderID: "khan",
            }),
        })
            .then((response) => response.json())
            .then((orderData) => {
                // Your code here after capture the order
            });

    }





    const ButtonWrapper = ({ showSpinner }: { showSpinner: boolean }) => {
        const [{ isPending }] = usePayPalScriptReducer();
    
        return (
            <>
                { (showSpinner && isPending) && <div className="spinner" /> }
                <PayPalButtons
                    
                    disabled={false}
                    forceReRender={undefined}
                    fundingSource={undefined}
                    createOrder={createOrder}
                    onApprove={onApprove}
                />
            </>
        );
    }


    return (
        <>
            {/* this is cart background image */}

            {
                quantity === 0 ? <h1 className='text-center'>Cart is Empty</h1> : <>


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
                                                        <div className="relative w-[100px] h-[100px]">
                                                        <Image src={item?.img} alt='not found' fill /></div>
                                                        <div className='text-sm  font-semibold '>{item?.name}</div>

                                                    </td>

                                                    <td className='text-sm  font-semibold text-center'>{item.price.toFixed(2)}$</td>
                                                    <td className='text-sm   text-center font-semibold'>
                                                        <button className='text-[#242648] border-2 border-[#242648] rounded-lg px-6 py-4 flex flex-nowrap text-center gap-2'> <RemoveIcon onClick={() => handleDecreaseQuantity(item?.id)} className='mx-2' />{item?.quantity}<AddIcon onClick={() => handleIncreaseQuantity(item?.id)} className='mx-2' /></button>

                                                    </td>
                                                    <td className='text-sm text-center  font-semibold whitespace-nowrap'>{item?.stock}</td>
                                                    <td className='text-sm text-center  font-semibold'>${item?.price * item?.quantity}</td>
                                                    <td className='text-sm text-center  font-semibold'><button className='bg-[#242648] text-[#FFF] rounded-lg px-11 py-4' onClick={() => handleremoveProduct((item?.id))}>Remove</button></td>

                                                </tr>

                                            ))
                                        }

                                    </tbody>
                                </table>

                            </div>

                            <h1 className='my-3 globalHeading text-[#181F36] text-center'>Order summary</h1>

                            <form onSubmit={handleopen} className="px-4 flex  flex-col lg:flex-row  gap-12">

                                <div className="flex-1">
                                    <div className='w-full flex flex-col' >
                                        {
                                            forminputs.map((item, ind) => (
                                                <>
                                                    <label key={ind} className='text-[#181F36] text-xl font-bold' htmlFor="">{item.label}</label>
                                                    <input required name={item.name} onChange={(e) => setorderob((pre) => ({ ...pre, [item.name]: e.target.value }))} className='mb-3 p-4 rounded-md border-2 bg-[#FFF] outline-none placeholder:text-[#515253] placeholder:font-extrabold border-[#242648]' type={item.type} placeholder={item.placeholder} />

                                                </>

                                            ))
                                        }


                                    </div>


                                </div>
                                <div className="flex-1">
                                    <h1 className='text-[#181F36] text-xl font-bold'>Order Details:</h1>
                                    <div className='flex justify-between my-3'>

                                        <div className='text-[#181F36] text-lg font-normal'>{quantity}Items</div>
                                        <div className='text-[#181F36] text-lg font-normal'>${total.toFixed(2)}</div>
                                    </div>
                                    <div className='flex justify-between my-3'>

                                        <div className='text-[#181F36] text-lg font-normal'>Delivery Fee </div><div className='text-[#181F36] text-lg font-normal'>$0</div>
                                    </div>
                                    <div className='flex justify-between my-3'>

                                        <div className='text-[#181F36] text-xl font-bold'>Sub Total</div><div className='text-[#181F36] text-xl font-bold'>${total.toFixed(2)}</div>
                                    </div>
                                    {
                                        open ? (
                                        
                                        <PayPalScriptProvider options={{ clientId: "AdwMgmJUSf25uNE7s_RJJ9iLz5C7IAszOI_Kn1A7rs3mpcbzr4Vd664c9WidrgnnuzzwYF9Y0WHZvJbj", components: "buttons", currency: "USD", disableFunding: ['credit', 'card', 'p24', 'venmo'], }}>
                                            <ButtonWrapper showSpinner={false}


                                            />
                                        </PayPalScriptProvider>





                                        ) : (
                                            <button type='submit' className=' w-full text-[rgb(255,255,255)] text-2xl font-normal text-center mb-3 p-4 rounded-md border-2  bg-[#242648]'>Add Payment</button>
                                        )
                                    }



                                </div>
                            </form>

                        </div>
                    </div >
                </>

            }


        </>
    )
}

export default Cart;