import connect from "@/utils/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse, userAgentFromString } from "next/server";

export const PUT = async (req: NextRequest) => {
    await connect();
    const body = await req.json();
    const { password, email } = body;

    const hashpassword = await bcrypt.hash(password, 10);

    try {
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            const newUser = await User.findOneAndUpdate({ email }, { password: hashpassword }, { new: true });
            return NextResponse.json("User has been updated", { status: 201 });
        } else {
            return NextResponse.json("Email is incorrect", { status: 404 });
        }
    } catch (error) {
        return NextResponse.json(`Error is facing ${error}`, { status: 500 });
    }
}
