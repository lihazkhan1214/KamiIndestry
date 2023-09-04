// import ProductTable from '@/components/ProductTable'


"use client"
import React, { useState } from 'react';
import Sidebar from '@/components/Siderbar'
import useSWR , { mutate }  from 'swr';
import Loading from '@/components/Loading';
import { fetchData } from '@/apicalls/api';
import Image from 'next/image';

import DeleteIcon from '@mui/icons-material/Delete';
import { Add } from '@mui/icons-material';
import AddButtton from '@/components/AddButtton';
import EditButtton from '@/components/EditButton';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
interface FetchedProduct {
  _id: string;
  name: string;
  price: number;
  featured: boolean;
  description: string;
  images: { url: string }[];// Update this to the actual type of images if needed
  ratings: number;
  category: string
  stock: number // Update this to the actual type of ratings if needed
}
const itemsPerPage = 3;


function page() {
  const [currentPage, setCurrentPage] = useState(1);
  const session=useSession();
const router=useRouter();
console.log("ooorrdr",session);
  



  if ((session.data?.user?.role !== "admin")) {
    router.push('/admin/login');
  }
  
  
  const { data, error } = useSWR<FetchedProduct[]>(
    `${process.env.API_URL}/api/products`,
    fetchData
  );
  
 
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
  
if(session.data?.user.role !=="admin"){

  // router.push('/admin/login');
}
 
 

  


  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const displayedItems =data.slice(startIndex, endIndex);

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`${process.env.API_URL}/api/products/${id}`, {
        method: "DELETE",
      });
  
      if (res.status === 200) {
        // The request was successful, handle the response if needed
        const updatedData = data.filter((product) => product._id !== id);
        mutate(`${process.env.API_URL}/api/products`, updatedData, false);
        
        
      } else {
        // Handle error responses here
        console.error("Failed to delete product");
      }
    } catch (error) {
      console.error(error);
    }
  };
  


  return (
    <>

      <div className="flex gap-5 bg-[#F8FAFB] flex-col  lg:flex-row justify-between">

        <div className="lg:w-[20%] w-full ">
          <Sidebar />

        </div>
        <div className="lg:w-[80%] w-full  padding-x">
          <div className="flex justify-between mt-5 items-center">
            <h1 className='globalHeading'>Products</h1>

            <div><AddButtton/></div>
          </div>
         
          <div className="container rounded-lg p-5 bg-[#FFF] shadow-md my-5">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className='border-b-2 border-[#D3D3D3]'>
                    <th className="text-center text-sm p-3 text-[#333237]">Product</th>
                    <th className="text-center text-sm text-[#333237]">Category</th>
                    <th className="text-center text-sm text-[#333237]">featured</th>
                    <th className="text-center text-sm text-[#333237]">Stock</th>
                    <th className="text-center text-sm text-[#333237]">ratings</th>

                    <th className="text-center text-sm text-[#333237]">price</th>
                    <th className="text-center text-sm text-[#333237]">Action</th>


                  </tr>
                </thead>
                <tbody>
                  {displayedItems.map((item) => (
                    <tr key={item._id} className="border-b-2 border-[#D3D3D3]  hover:bg-gray-100">
                      <td className="text-center flex items-center gap-5 text-sm p-4 text-[#333237]">
                        <Image src={item.images ? item.images[0].url : '/productdt1.png'} alt='not found' width={50} height={50} />
                        <h1 className='text-[#2D2C40]'>{item.name}</h1>

                      </td>
                      <td className="text-center text-sm  text-[#333237]">{item.name}</td>
                      <td className="text-center text-sm  text-[#333237]">{item.featured === true ? "feature" : "not "}</td>
                      <td className="text-center text-sm  text-[#333237]">{item.stock}</td>
                      <td className="text-center text-sm  text-[#333237]">{item.ratings}</td>
                      <td className="text-center text-sm  text-[#333237]">{item.price}</td>
                      <td className="text-center text-sm  text-[#333237]"><EditButtton id={item._id}/> <DeleteIcon onClick={()=>handleDelete(item._id)} className='text-[#FF3103] cursor-pointer mx-2' /></td>


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







        </div>

      </div>












    </>
  )
}

export default page