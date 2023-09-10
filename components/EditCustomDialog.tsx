"use client"

import React,{useState,useEffect ,ChangeEvent, FormEvent} from "react";
import useSWR , { mutate }  from 'swr';
import CancelIcon from '@mui/icons-material/Cancel';
import { renderToStaticMarkup } from "react-dom/server";
import { ContactPageSharp, ContactlessOutlined } from "@mui/icons-material";
import { Console } from "console";
import Uploadbutton from "./Uploadbutton";
import Loading from "./Loading";
import { fetchData } from "@/apicalls/api";
import axios from "axios";
import { useRouter } from "next/navigation";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  id:string;
}
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

const EditCustomDialog: React.FC<DialogProps> = ({ isOpen, onClose,id }) => {
  const router = useRouter();
  const [data, setData] = useState<FetchedProduct | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [name, setName] = useState<string>("");
  const [description, setDesc] = useState<string>("");
  const [price, setPrice] = useState<number | undefined>(undefined);
  const [stock, setStock] = useState<number | undefined>(undefined);
  const [category, setCategory] = useState<string>("");
  const [featured, setFeatured] = useState<boolean>(false);
  const [images, setImages] = useState<{ url: string }[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/products/${id}`);
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error loading data");
        setLoading(false);
      }
    };

    if (isOpen) {
      fetchData();
    }
  }, [isOpen, id]);

  useEffect(() => {
    // Initialize state variables when data is available
    if (data) {
      setName(data.name);
      setDesc(data.description);
      setPrice(data.price);
      setStock(data.stock);
      setCategory(data.category);
      setFeatured(data.featured);
      setImages(data.images);
    }
  }, [data]);

  const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDesc(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    try {
      const res = await fetch(`/api/products/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          name,
          description,
          price,
          category,
          featured,
          images,
          stock
        }),
      });

      if (res.status === 201) {
        console.log("responsive ok");
        const newData = { ...data, name, description, price, category, featured, images, stock };
        // Use the mutate function to revalidate and update the data
        mutate(`/api/products/${id}`, newData, false);
        alert("Data has been updated");
        onClose();
      } else {
        console.log("error");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (!isOpen) {
    return null;
  }
  



  return (
    <div className="fixed  inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-500 hover:text-gray-700"
        >
          <CancelIcon />
        </button>
        <div className="py-2 lg:w-[60vw]">
          <h2 className="text-lg font-semibold mb-2">Update Product</h2>

          <form className="flex  gap-5 justify-between" onSubmit={handleSubmit} action="">

            <div className="flex gap-2 flex-col">
              <label htmlFor="" className="text-[#424242] text-lg">Choose an images</label>
             <Uploadbutton setImages={setImages}/>

              <label htmlFor="" className="text-[#424242] text-lg">Title</label>
              <input className=" border-2 py-2 px-5 outline-none rounded-lg border-[#676565]" onChange={(e:ChangeEvent<HTMLInputElement>)=>setName(e.target.value)} value={name} type="text"  placeholder="Title" />
              <label htmlFor="" className="text-[#424242] text-lg">Description</label>
             <textarea className=" h-[100px] border-2 py-2 px-5 outline-none rounded-lg border-[#676565]" onChange={handleDescriptionChange} value={description} placeholder="write Description" name="" id="" ></textarea>
             <button type="submit" className='bg-[#181F36]  mt-5 text-lg py-3 rounded-lg  px-6 text-[#FFF]'>Update</button>

            </div>

<div className="flex flex-col gap-5">
<label htmlFor="" className="text-[#424242] text-lg">Category</label>
<select    onChange={(e) =>setCategory(e.target.value)} value={category} className="px-20 bg-[#FFF] border-2 py-2 outline-none rounded-lg border-[#676565]"  id="selectOption">
    <option value="Eyelash">Eyelash</option>
    <option value="Eyebrow">Eyebrow</option>
    <option value="Mirror">Mirror</option>
    <option value="Municure">Municure</option>
    <option value="Predicure">Predicure</option>
</select>
<div className="flex gap-5"><label htmlFor=""  className="text-[#424242] text-lg">Featured</label>
<input className="font-lg w-5" type="checkbox" onChange={(e)=>setFeatured(e.target.checked)}  id="checkBoxTrue" name="checkbox" />
</div>

<label htmlFor="" className="text-[#424242] text-lg">Price</label>
<input className=" border-2 py-2 px-5 outline-none rounded-lg border-[#676565]"  value={price}  onChange={(e: ChangeEvent<HTMLInputElement>) => setPrice(Number(e.target.value))} type="number" placeholder="10$" />
<label htmlFor="" className="text-[#424242] text-lg">Stock</label>
<input className=" border-2 py-2 px-5 outline-none rounded-lg border-[#676565]" value={stock}   onChange={(e: ChangeEvent<HTMLInputElement>) => setStock(Number(e.target.value))} type="number" placeholder="10" />



</div>



          </form>

        </div>

      </div>
    </div>
  );
};

export default EditCustomDialog
