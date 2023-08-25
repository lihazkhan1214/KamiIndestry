import connect from "@/utils/db";
import Product from "@/models/Product";
import { NextRequest, NextResponse } from "next/server";
export const GET = async (
    req: NextRequest,
    { params }: { params: { id: string } }
) => {
    const { id } = params;
    await connect();


    try {
       
        const product = await Product.findById(id)

        return  NextResponse.json(product, { status: 200 });
    } catch (err) {
        console.log(err);
        return  NextResponse.json(err, { status: 500 });
    }
};

export const DELETE = async (
    req: NextRequest,
    { params }: { params: { id: string } }
) => {
    const { id } = params;
    await connect();

    try {
        const product = await Product.findByIdAndDelete(id)

        return  NextResponse.json("product has been deleted", { status: 200 });
    } catch (err) {
        console.log(err);
        return  NextResponse.json(err, { status: 500 });
    }
};
export const PUT = async (
    req: NextRequest,
    { params }: { params: { id: string } }
) => {
    const { id } = params;
    const body=await req.json();
    await connect();

    try {
        const product = await Product.findByIdAndUpdate(id,body,{new:true})

        return  NextResponse.json("product has been updated", { status: 200 });
    } catch (err) {
        console.log(err);
        return  NextResponse.json(err, { status: 500 });
    }
};