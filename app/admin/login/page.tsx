"use client"
import React, { use } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useSession,signIn } from 'next-auth/react';

interface InputItem {
    name: string;
    type: string;
    placeholder: string;
}

const Inputs: InputItem[] = [
   
    {
        name: "Email",
        type: "email",
        placeholder: "Enter your Email"
    },
    {
        name: "Password",
        type: "password",
        placeholder: "Enter your Password"
    }
];

function Page() {
    const session=useSession();
    console.log("loginkhan",session);
    const router=useRouter();
    const [login,setlogin]=useState({
        email:"",
        password:""
    });

    const { status,data} = session;
  
  
    if (status === "loading") {
      return <p>Loading...</p>;
    }
    if ((status === "authenticated")&&(data.user.role==="admin")) {
      router.push("/admin/products")
   

    }
    
   

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        console.log("login state",login)
        const {email,password}=login;
        
      
       
        signIn('credentials',{email,password});
       
      };
    return (
        <>
            <div className="py-10 flex justify-center items-center">
                <div className='w-full md:w-[40%] py-5 px-10 bg-[#FFF]'>
                    <Image className='mt-5' src="/kamilogo.png" alt='not found' width={100} height={100} />
                    <form  onSubmit={handleSubmit} className='mt-5 flex flex-col gap-5' action="">
                        {Inputs.map((item, ind) => (
                            <div key={ind}>
                                <label className='text-[#1C1F30] block font-bold  text-xl' htmlFor={item.name}>{item.name} :</label>
                                <input
                                    className='w-full rounded-lg py-3 px-6 border-2 placeholder:text-[#A3A3A3] border-[#1C1F30]'
                                    type={item.type}
                                    name={item.name}
                                    placeholder={item.placeholder}

                                    onChange={(e) => setlogin((pre)=>({ ...pre, [item.name]: e.target.value }))}
                                    required
                                />
                            </div>
                        ))}
                        <button type='submit' className='py-4 rounded-lg px-6 text-2xl font-meduim bg-[#242648] text-[#FFF]'>Sign  In</button>
                        <div className='flex items-center gap-5 justify-between'>
                            <div className='flex gap-5 items-center'>
                            <input className='w-[20px] h-[20px]' type="checkbox" />
                          <label  className='text-lg font-normal text-[#333]' htmlFor="">Remember me</label> </div>
                          <span className='text-lg font-normal text-[#333]'>Forget Password?</span>  


                        </div>
                    </form>
                    <div className='mt-5 flex gap-5 items-center '>
                        <div className="flex-1 relative h-[10px]">
                            <Image src="/Line 9.png" alt='not fuond' fill />
                        </div>
                        <span>Or</span>
                        <div className="flex-1 relative h-[10px]">
                            <Image src="/Line 10.png" alt='not fuond' fill />
                        </div>

                    </div>


                

       

                </div>
            </div>
        </>
    );
}

export default Page;
