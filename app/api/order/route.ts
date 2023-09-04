import connect from "@/utils/db";
import Order from "@/models/Order";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    await connect();
    const body = await req.json();


    const newProduct = new Order(body);
  

    try {

       const  newd= await newProduct.save();
       console.log("new",newd);
        return NextResponse.json("product has been added", { status: 201 });

    } catch (error) {
        return NextResponse.json(`${error}`, { status: 500 });

    }


}

export const GET = async (req: NextRequest) => {

    await connect();

    try {
        const products = await Order.find({});
        return NextResponse.json(products, { status: 200 });
    } catch (err) {
        console.log(err);
        return NextResponse.json("error", { status: 500 });

    }
}




