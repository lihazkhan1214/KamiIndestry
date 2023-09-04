"use client";
 import { useState } from "react";
// You need to import our styles for the button to look right. Best to import in the root /layout.tsx but this is fine
// import "@uploadthing/react/styles.css";
 
import { UploadButton } from "@/utils/uploadthing";
interface UploadButtonProps {
  setImages: React.Dispatch<React.SetStateAction<{ url: string }[]>>;
}
export default function Uploadbutton({ setImages }: UploadButtonProps) {
    const [files, setfiles] = useState<{
        url: string;
    
    }[]>([])
   
   
  
  return (
    <div className="w-[200px]">
      <UploadButton
        className=" bg-[blue] outline-none"
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          if (res) {
           
          setfiles(res);
          setImages(res.filter(item=>item.url));
                   
            
        }
        //   alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </div>
  );
}