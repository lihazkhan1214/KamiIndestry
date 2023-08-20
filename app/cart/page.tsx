import React from 'react';
import Image from 'next/image';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
const carts = [1, 2, 3];
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
    return (
        <>
            {/* this is cart background image */}
            <div className="h-[calc(100vh-80px)] bg-[url('/cartbg.png')] bg-no-repeat bg-cover flex items-center justify-center relative z-0 max-w-[1440px] mx-auto">

                <h1 className='title text-[#FFF] text-center'>Cart</h1>

            </div>
            <div className="padding-x py-10">

                <div className='bg-[#FFF] py-5'>
                    <h3 className='mx-4 text-[#181F36] globalHeading'>Here’s what you’re getting!</h3>
                    <hr className='mx-4 border-2 my-2 border-[#242648]' />
                    <div className='overflow-x-auto'>
                        <table className='table-auto w-full border-2'>
                            <thead className='bg-[#252063] text-[#FFF] text-lg'>
                                <th className='pl-6 -6 py-3 text-start'>Product</th>
                                <th className='py-3  text-center'>Unit Price</th>
                                <th className='py-3 text-center'>Quantity</th>
                                <th className='py-3 text-center'>Stock Status</th>
                                <th className='py-3 text-center'>Total</th>
                                <th></th>
                            </thead>
                            <tbody>
                                {
                                    carts.map((item, ind) => (
                                        <tr className='border-b-2 border-[#242648]' key={ind}>
                                            <td className=' p-5 flex items-center gap-2'>
                                                <Image src='/productdt1.png' alt='not found' width={100} height={100} />
                                                <span className='text-sm  font-semibold'>Eyelash Mirror</span>

                                            </td>

                                            <td className='text-sm  font-semibold text-center'>10$</td>
                                            <td className='text-sm   text-center font-semibold'>
                                                <button className='text-[#242648] border-2 border-[#242648] rounded-lg px-6 py-4 text-center gap-2'> <RemoveIcon className='mx-2' />2<AddIcon className='mx-2' /></button>

                                            </td>
                                            <td className='text-sm text-center  font-semibold'>In Stock</td>
                                            <td className='text-sm text-center  font-semibold'>$20</td>
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

                                <span className='text-[#181F36] text-lg font-normal'>3Items</span><span className='text-[#181F36] text-lg font-normal'>$30</span>
                            </div>
                            <div className='flex justify-between my-3'>

                                <span className='text-[#181F36] text-lg font-normal'>Delivery Fee</span><span className='text-[#181F36] text-lg font-normal'>$10</span>
                            </div>
                            <div className='flex justify-between my-3'>

                                <span className='text-[#181F36] text-xl font-bold'>Sub Total</span><span className='text-[#181F36] text-xl font-bold'>$10</span>
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