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

                        <iframe className='sm:h-[400px] sm:w-[400px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106390.447202714!2d71.3851300595396!3d33.561131752862295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d8ef13ac5af415%3A0x864572b0758eb834!2sKohat%2C%20Khyber%20Pakhtunkhwa%2C%20Pakistan!5e0!3m2!1sen!2s!4v1692363329470!5m2!1sen!2s"  allowfullscreen="" loading="lazy" referrerpolicy="no - referrer - when - downgrade" ></iframe>
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