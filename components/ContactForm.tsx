"use client"

import React,{useState} from 'react';
import emailjs from "emailjs-com";


function ContactForm() {
  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>)=> {
    e.preventDefault();
 
    emailjs.sendForm('service_6jz4m2l', 'template_67y2y15',e.target as HTMLFormElement, 'k4eRTPcywcrqJuNjD')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
 
    

    
  };
  
  
  return (
    <form onSubmit={handleSubmit}  className='flex flex-col'>
       

        <input required name='name' type="text"  className='mb-3 p-4 border-2 bg-[#F6F6F6] focus:outline-none placeholder:text-[#626262] placeholder:font-extrabold border-[#CCC]'  placeholder='NAME*' />
        
        <input required type="email"  name="email"    className='mb-3 p-4 border-2 bg-[#F6F6F6] focus:outline-none placeholder:text-[#626262] placeholder:font-extrabold border-[#CCC]'  placeholder='EMAIL*' />


          <textarea required name="message"   className='h-[120px] mb-3 p-4 border-2 bg-[#F6F6F6] focus:outline-none placeholder:text-[#626262] placeholder:font-extrabold border-[#CCC]'  placeholder='MESSAGE*'  ></textarea>

          <button type='submit' className='bg-[#242648] py-2 text-[#FFF] text-lg font-medium rounded-md'>Send Message</button>
       
          </form>
    
  )
}

export default ContactForm