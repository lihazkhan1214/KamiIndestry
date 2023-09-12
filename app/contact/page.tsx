import React from 'react';
import ContactForm from '@/components/ContactForm';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import PinDropIcon from '@mui/icons-material/PinDrop';
const info = [

    {
        title: "Address",
        Icon: <PinDropIcon className='text-5xl bg-[#F6F6F6] p-1 rounded-full cursor-pointer' />,
        desc: "Industrial Area, Shahab Pura, Sialkot,Pakistan"
    },
    {
        title: "Phone",
        Icon: <PhoneIcon className='text-5xl bg-[#F6F6F6] p-1 rounded-full cursor-pointer' />,
        desc: "+923032345555​"
    },
    {
        title: "Email",
        Icon: <EmailIcon className='text-5xl bg-[#F6F6F6] p-1 rounded-full cursor-pointer' />,
        desc: "kamiindustriesofficial@gmail.com​"
    }
];

function Contact() {
  
    return (
        <>
            {/* this si contact us background image */}
           
            <div className="relative">
        <div className=" bg-[url('/contactbg.jpg')] bg-cover bg-no-repeat bg-center h-[calc(100vh-80px)]">

          <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className='title text-[#FFF] text-center'>Contact Us</h1>
          </div>
        </div>
      </div>



            <div className="padding-x py-10 flex  flex-col md:flex-row gap-5">
                <div className='flex-1'>
                    <h1 className='globalHeading text-[#363636] mb-3'>Contact Info</h1>

                    <div className='flex flex-col gap-5'>
                        {
                            info.map((item, ind) => (
                                <div className='flex items-center  gap-5' key={ind}>
                                    <div className='rounded-full w-15 h-15 p-2 border-2 flex items-center justify-center border-[#D0D0D0]'>
                                        {item.Icon}

                                    </div>
                                    <div>
                                        <h3 className='cardheading text-[#363636]'>{item.title}</h3>
                                        <p className='text-sm  text-[#41425F]'>{item.desc}</p>

                                    </div>
                                </div>

                            ))
                        }





                    </div>

                </div>
                <div className='flex-1'>
                    <h1 className='globalHeading mb-3'>Get in <span className='text-[#2697D3]'>Touch Us</span></h1>
                    <ContactForm />

                </div>



            </div>
            {/* this is locatin */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7256.633179754255!2d74.50539519135782!3d32.486753300369244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391eea111073b44f%3A0xc799219f749d664c!2sS.I.E%2C%20Shahab%20Pura%2C%20Sialkot!5e0!3m2!1sen!2s!4v1693814175341!5m2!1sen!2s" className='w-full mb-10 h-[400px]' ></iframe>






        </>
    )
}

export default Contact