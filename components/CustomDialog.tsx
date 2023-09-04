"use client"

import React,{useState, ChangeEvent, FormEvent} from "react";

import CancelIcon from '@mui/icons-material/Cancel';
import { renderToStaticMarkup } from "react-dom/server";
import { ContactPageSharp, ContactlessOutlined } from "@mui/icons-material";
import { Console } from "console";
import Uploadbutton from "./Uploadbutton";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const CustomDialog: React.FC<DialogProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

 
  const [name, setName] = useState<string>("");
  const [description, setDesc] = useState<string>("");
  const [heading, setheading] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [stock, setstock] = useState<number>(0);
  const [category, setCategory] = useState<string>("Eyelash");
  const [featured, setFeatured] = useState<boolean>(false);
  const [images, setImages] = useState<{ url: string;}[]>([])
  console.log(images);

 

  const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDesc(e.target.value);
  };


  const handleHeadingChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setheading(e.target.value);
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
  
    try {

      const res = await fetch("http://localhost:3000/api/products", {
        method: "POST",
        body: JSON.stringify({
          name,
          description,
          heading,
          price,
          category,
          featured,
          images,
          stock

          
        
        }),
      });

      // const data = await res.json();
      if(res.status===201){
        console.log("responsive ok")
        onClose();
       
      }
      else{
        console.log("erorr")
      }
    
       
    } catch (error) {
      console.error("Error:", error);
    }
  };
  



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
          <h2 className="text-lg font-semibold mb-2">Add new Product</h2>

          <form className="flex  gap-5 justify-between" onSubmit={handleSubmit} action="">

            <div className="flex gap-2 flex-col">
              <label htmlFor="" className="text-[#424242] text-lg">Choose an images</label>
             <Uploadbutton setImages={setImages}/>

              <label htmlFor="" className="text-[#424242] text-lg">Title</label>
              <input className=" border-2 py-2 px-5 outline-none rounded-lg border-[#676565]" onChange={(e:ChangeEvent<HTMLInputElement>)=>setName(e.target.value)} type="text"  placeholder="Title" />
              <label htmlFor="" className="text-[#424242] text-lg">Heading</label>
             <textarea className=" h-[100px] border-2 py-2 px-5 outline-none rounded-lg border-[#676565]" onChange={handleHeadingChange} placeholder="write Description" name="" id="" ></textarea>
              <label htmlFor="" className="text-[#424242] text-lg">Description</label>
             <textarea className=" h-[100px] border-2 py-2 px-5 outline-none rounded-lg border-[#676565]" onChange={handleDescriptionChange} placeholder="write Description" name="" id="" ></textarea>
           

            </div>

<div className="flex flex-col gap-5">
<label htmlFor="" className="text-[#424242] text-lg">Category</label>
<select    onChange={(e) =>setCategory(e.target.value)} className="px-20 bg-[#FFF] border-2 py-2 outline-none rounded-lg border-[#676565]"  id="selectOption">
    <option value="Eyelash">Eyelash</option>
    <option value="Eyebrow">Eyebrow</option>
    <option value="Mirror">Mirror</option>
    <option value="Municure">Municure</option>
</select>
<div className="flex gap-5"><label htmlFor=""  className="text-[#424242] text-lg">Featured</label>
<input className="font-lg w-5" type="checkbox" onChange={(e)=>setFeatured(e.target.checked)} id="checkBoxTrue" name="checkbox" />
</div>

<label htmlFor="" className="text-[#424242] text-lg">Price</label>
<input className=" border-2 py-2 px-5 outline-none rounded-lg border-[#676565]"   onChange={(e: ChangeEvent<HTMLInputElement>) => setPrice(Number(e.target.value))} type="number" placeholder="10$" />
<label htmlFor="" className="text-[#424242] text-lg">Stock</label>
<input className=" border-2 py-2 px-5 outline-none rounded-lg border-[#676565]"   onChange={(e: ChangeEvent<HTMLInputElement>) => setstock(Number(e.target.value))} type="number" placeholder="10" />

<button type="submit" className='bg-[#181F36]  mt-5 text-lg py-3 rounded-lg  px-6 text-[#FFF]'>Create</button>

</div>



          </form>

        </div>

      </div>
    </div>
  );
};

export default CustomDialog
