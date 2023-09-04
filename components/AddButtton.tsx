"use client"
import React,{useState} from 'react';
import CustomDialog from './CustomDialog';


function AddButtton() {
    const [close, setClose] = useState(true);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const openDialog = () => {
        setIsDialogOpen(true);
      };
    
      const closeDialog = () => {
        setIsDialogOpen(false);
      };
  return (
    <><button  onClick={openDialog}  className='bg-[#181F36] text-lg py-3 rounded-lg  px-6 text-[#FFF]'>Add Product</button>
    
    <CustomDialog isOpen={isDialogOpen} onClose={closeDialog} />
    </>
  )
}

export default AddButtton