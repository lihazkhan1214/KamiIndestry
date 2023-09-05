import connect from "@/utils/db";
import Product from "@/models/Product";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    try {
        await connect();
        const body = await req.json();
        const { id, name, email, comment, rating } = body;
        const findProduct = await Product.findById(id);
      

        if (findProduct) {
            findProduct.reviews.push({
                name: name,
                email: email,
                comment: comment,
                rating: rating,
            });

            const post =await findProduct.save(); // Save the updated product
console.log(post)
            return NextResponse.json("Product review has been added", { status: 201 });
        } else {
            return NextResponse.json("Product not found", { status: 404 });
        }
    } catch (error) {
        console.error(error);
        return NextResponse.json("Internal server error", { status: 500 });
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




