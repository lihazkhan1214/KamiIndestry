import connect from "@/utils/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    await connect();
    console.log("register")
    const body = await req.json();
    const {username,password,cpassword,email,role}=body;
   

    if(password!==cpassword){
        return NextResponse.json("plz write correct password", { status: 401 });

    }
    
    const hashpassword=await bcrypt.hash(password,10);


    const newuser = new User({username,password:hashpassword,email,role});
    
    try {
       

        await newuser.save();
        return NextResponse.json("user has been signup", { status: 201 });

    } catch (error) {
        return NextResponse.json(`erorr is facing ${error}`, { status: 500 });

    }


}







