"use client"
import React from 'react'

function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Rest of your code for handling form submission
    alert("thanks for contacting")
  };
  
  return (
    <form onSubmit={handleSubmit}  className='flex flex-col'>
       

        <input required type="text" className='mb-3 p-4 border-2 bg-[#F6F6F6] focus:outline-none placeholder:text-[#626262] placeholder:font-extrabold border-[#CCC]'  placeholder='NAME*' />
        
        <input required type="email" className='mb-3 p-4 border-2 bg-[#F6F6F6] focus:outline-none placeholder:text-[#626262] placeholder:font-extrabold border-[#CCC]'  placeholder='EMAIL*' />

        <input required type="number" className='mb-3 p-4 border-2 bg-[#F6F6F6] focus:outline-none placeholder:text-[#626262] placeholder:font-extrabold border-[#CCC]'  placeholder='PHONE*' />

          <textarea required className='h-[120px] mb-3 p-4 border-2 bg-[#F6F6F6] focus:outline-none placeholder:text-[#626262] placeholder:font-extrabold border-[#CCC]'  placeholder='MESSAGE*'  ></textarea>

          <button type='submit' className='bg-[#242648] py-2 text-[#FFF] text-lg font-medium rounded-md'>Send Message</button>
       
          </form>
    
  )
}

export default ContactForm