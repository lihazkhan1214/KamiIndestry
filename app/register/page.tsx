"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface InputItem {
    name: string;
    type: string;
    label:string;
    placeholder: string;
}

const Inputs: InputItem[] = [
    {
        label:"Username",
        name: "username",
        type: "text",
        placeholder: "Enter your Username"
    },
    {
        label:"Email",
        name: "email",
        type: "email",
        placeholder: "Enter your Email"
    },
    {  label:"Mobile",
        name: "mobile",
        type: "number",
        placeholder: "Enter your Number"
    },
    {  label:"Password",
        name: "password",
        type: "password",
        placeholder: "Enter your Password"
    },
    {  label:"Confirm Password",
        name: "cpassword",
        type: "password",
        placeholder: "Enter your Confirm Password"
    }
];

 function Page() {
    const [signup, setsignup] = useState({
        username: "",
        email: "",
        mobile: "",
        password: "",
        cpassword: ""

    });

    const [error, setError] = useState(false);
    const router = useRouter();



    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        
        const { username, email, password, cpassword } = signup;

        // const PostData = async () => {

            try {
                const res = await fetch(`/api/auth/register`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        username,
                        email,
                        password,
                        cpassword
                    }),
                });
                console.log(res)
                res.status === 201 && router.push("/login");
            } catch (error) {
                setError(true);

            }
        // }
        // PostData();
    };


    return (
        <>
            <div className="py-10 flex justify-center items-center">
                <div className='w-full md:w-[40%] py-5 px-10 bg-[#FFF]'>
                    <Image className='mt-5' src="/kamilogo.png" alt='not found' width={100} height={100} />
                    <form onSubmit={(e) =>{
                        handleSubmit(e)
                    }} className='mt-5 flex flex-col gap-5' action="">
                        {Inputs.map((item, ind) => (
                            <div key={ind}>
                                <label className='text-[#1C1F30] block font-bold  text-xl' htmlFor={item.name}>{item.label} :</label>
                                <input
                                    className='w-full rounded-lg py-3 px-6 border-2 placeholder:text-[#A3A3A3] border-[#1C1F30]'
                                    type={item.type}
                                    name={item.name}
                                    placeholder={item.placeholder}
                                    onChange={(e) => setsignup((pre) => ({ ...pre, [item.name]: e.target.value }))}
                                    required
                                />

                            </div>
                        ))}

                        {
                            error && <h6 className='text-center mt-2 text-[red]'>wrong credentials</h6>
                        }

                        <button className='py-4 rounded-lg px-6 text-2xl font-meduim bg-[#242648] text-[#FFF]'>Sign  Up</button>
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


                    <div className="mt-5 flex flex-wrap md:flex-nowrap gap-5 items-center justify-between ">
                        <Image src="/google.png" alt='not found' width={60} height={60} />
                        <Image src="/apple.png" alt='not found' width={60} height={60} />
                        <Image src="/facebook.png" alt='not found' width={60} height={60} />


                    </div>

                    <h5 className='cursor-pointer mt-5 text-center text-lg font-normal  text-[#333]' onClick={() => router.push('/login')}>Already have an account? <span className='text-[#097DEB]'>Sign in</span></h5>

                </div>
            </div>
        </>
    );
}

export default Page;
