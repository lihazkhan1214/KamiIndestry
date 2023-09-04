import connect from "@/utils/db";
import Product from "@/models/Product";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    await connect();
    const body = await req.json();


    const newProduct = new Product(body);
    console.log(body);

    try {

        await newProduct.save();
        return NextResponse.json("product has been added", { status: 201 });

    } catch (error) {
        return NextResponse.json(`${error}`, { status: 500 });

    }


}

export const GET = async (req: NextRequest) => {
    const { searchParams } = new URL(req.url);
    const featured = searchParams.get("featured");
    const category = searchParams.get("category");
    await connect();

    try {
        if (featured) {
            try {
                const product = await Product.find({ featured: featured });
                return NextResponse.json(product, { status: 200 });
            } catch (err) {
                console.log(err);
                return NextResponse.json("not fuound", { status: 404 });

            }

        }

        if (category) {
            try {
                const product = await Product.find({ category: category });
                return NextResponse.json(product, { status: 200 });
            } catch (err) {
                console.log(err);
                return NextResponse.json("not fuound", { status: 404 });

            }

        }


        const products = await Product.find({});
        return NextResponse.json(products, { status: 200 });
    } catch (err) {
        console.log(err);
        return NextResponse.json("error", { status: 500 });

    }
}




