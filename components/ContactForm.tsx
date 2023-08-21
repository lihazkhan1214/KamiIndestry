import React from 'react'

function ContactForm() {
  return (
    <div className='flex flex-col'>
       

        <input type="text" className='mb-3 p-4 border-2 bg-[#F6F6F6] focus:outline-none placeholder:text-[#626262] placeholder:font-extrabold border-[#CCC]'  placeholder='NAME*' />
        
        <input type="email" className='mb-3 p-4 border-2 bg-[#F6F6F6] focus:outline-none placeholder:text-[#626262] placeholder:font-extrabold border-[#CCC]'  placeholder='EMAIL*' />

        <input type="number" className='mb-3 p-4 border-2 bg-[#F6F6F6] focus:outline-none placeholder:text-[#626262] placeholder:font-extrabold border-[#CCC]'  placeholder='PHONE*' />

          <textarea className='h-[120px] mb-3 p-4 border-2 bg-[#F6F6F6] focus:outline-none placeholder:text-[#626262] placeholder:font-extrabold border-[#CCC]'  placeholder='MESSAGE*'  ></textarea>

          <button className='bg-[#242648] py-2 text-[#FFF] text-lg font-medium rounded-md'>Send Message</button>
       

    </div>
  )
}

export default ContactForm