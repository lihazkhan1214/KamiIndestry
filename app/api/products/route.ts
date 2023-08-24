import connect from "@/utils/db";
import Product from "@/models/Product";
import {NextRequest, NextResponse } from "next/server";

export const  POST=async(req:NextRequest)=>  {
    await connect();
    const body=await req.json();
 
    const newProduct=new Product(body); 

    try {
         
          await newProduct.save();
          return NextResponse.json("product has been added",{status:201});
        
    } catch (error) {
        return NextResponse.json("Internal error from db connecton or someting",{status:500});
        
    }
  

}