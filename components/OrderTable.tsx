"use client"

import React, { useState,useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';
import Loading from './Loading';




interface Item {
  _id: string;
  customer: string;
  address: string;
  phone: number;
  createdAt: string;
  total: number;
  status: string;
  // Add more properties here
}
  

    

 
//   // Add more dummy items here
// ];

const itemsPerPage = 5; // Number of items to display per page

const OrderTable: React.FC = () => {
  const [data, setdata] = useState<Item[]>([]); // Specify the type for data
  const [error, seterror] = useState<boolean>(false); // Specify the type for error
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

  const handleStatusChange = (status: string | null) => {
    setSelectedStatus(status);
  };

  // Filter the data based on the selected status
  const filteredData = selectedStatus
    ? data.filter((item) => item.status === selectedStatus)
    : data;







  useEffect(() => {
  const GetData = async () => {
    try {
      const res = await axios.get<Item[]>("http://localhost:3000/api/order"); // Specify the expected response type
      if (res) {
        setdata(res.data);
      } else {
        seterror(true);
      }
    } catch (error) {
      seterror(true);
    }
  };

  GetData();
}, []);

if (!data) {
  return (
    <div className='mx-auto'>
      <Loading />
    </div>
  );
}

if (error) {
  return <div>Error loading data</div>;
}




  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const displayedItems = data.slice(startIndex, endIndex);

  return (
    <div className="container rounded-lg p-5 bg-[#FFF] shadow-md my-5">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className='border-b-2 border-[#D3D3D3]'>
            <th className="text-center text-sm text-[#333237]">OrderID</th>
              <th className="text-center text-sm text-[#333237]">Customer</th>
              <th className="text-center text-sm text-[#333237]">Adress</th>
              <th className="text-center text-sm text-[#333237]">Phone</th>
              <th className="text-center text-sm text-[#333237]">Date</th>
            
             
              <th className="text-center text-sm text-[#333237]">Payment</th>
              <th className="text-center text-sm text-[#333237]">Status</th>
              
            </tr>
          </thead>
          <tbody>
            {displayedItems.map((item) => (
              <tr key={item._id}  className="border-b-2 border-[#D3D3D3]  hover:bg-gray-100">
                <td  className="text-center text-sm py-4  text-[#333237]">{item._id}</td>
                <td  className="text-center text-sm  text-[#333237]">{item.customer}</td>
                <td  className="text-center text-sm  text-[#333237]" >{item.address}</td>
                <td  className="text-center text-sm  text-[#333237]">{item.phone}</td>
                <td  className="text-center text-sm  text-[#333237]">{item.createdAt}</td>
               
                <td  className="text-center text-sm  text-[#333237]">{item.total}</td>
                <td  className="text-center text-sm  text-[#333237]">

                       <select name="" id="">

                        <option value="Preparing">Preparing</option>
                        <option value="On the Way">on The Way</option>
                        <option value="Deliverd">Delivered</option>
                       </select>

                </td>
               
              
             
              
                {/* Add more table cells here */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-center mt-6">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
         className='mx-2'
          disabled={currentPage === 1}
        >
          <Image src="/arrowleft.png" alt='not found' width={30} height={30} />
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className='mx-2'
          disabled={currentPage === totalPages}
        >
           <Image src="/arrowright.png" alt='not found' width={30} height={30} />
        </button>
      </div>
    </div>
  );
};

export default OrderTable;
