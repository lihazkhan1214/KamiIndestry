import React from 'react';
import Image from 'next/image';
import ContactForm from './ContactForm';

function Contact() {
    return (
        <>
            <div className="contact padding-x mt-10">

                <div className="flex justify-center items-center mb-3">
                    <Image src='/Contact.png' alt='' width={120} height={60} />


                </div>

                <h1 className='globalHeading text-[#181F36] text-center mb-3'>Contact Us</h1>

                <div className='mb-3 lg:flex justfiy-between'>
                    <div className='flex-1'>

                        <iframe className='sm:h-[400px] sm:w-[400px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7256.633179754255!2d74.50539519135782!3d32.486753300369244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391eea111073b44f%3A0xc799219f749d664c!2sS.I.E%2C%20Shahab%20Pura%2C%20Sialkot!5e0!3m2!1sen!2s!4v1693814175341!5m2!1sen!2s"  ></iframe>
                 </div>
                    <div className='flex-1 mt-10 lg:mt-0 mb-3'>

                        <ContactForm />
                    </div>

                </div>
            </div>



      

        </>
    )
}

export default Contact