"use client"
import React,{useState} from 'react';
import EditCustomDialog from './EditCustomDialog';
import EditIcon from '@mui/icons-material/Edit';

interface Idprops{
    id:string;
}

function EditButtton({id}:Idprops) {
    const [close, setClose] = useState(true);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const openDialog = () => {
        setIsDialogOpen(true);
      };
    
      const closeDialog = () => {
        setIsDialogOpen(false);
      };
     
  return (
    <><button  onClick={openDialog}  className='cursor-pointer'><EditIcon className='cursor-pointer bg-[#2697D3] text-[#FFF] mx-2'/></button>
    
    <EditCustomDialog id={id} isOpen={isDialogOpen} onClose={closeDialog} />
    </>
  )
}

export default EditButtton;