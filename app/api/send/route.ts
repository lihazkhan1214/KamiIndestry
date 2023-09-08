// import { EmailTemplate } from '@/components/EmailTemplate';
import { NextResponse,NextRequest } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    const body=await req.json();
  try {
    const {email,name,message}=body;
    console.log(body)
    const data = await resend.emails.send({
      from:'<kamiindustries.com>',
      to:email,
      subject: "Shopping",
      text:message, // Plain text version of the email
      // HTML version of the email
    });

    return NextResponse.json(data, { status: 201 });
  } catch (error) {
     return NextResponse.json("Internal server error", { status: 404 });
  }
}
