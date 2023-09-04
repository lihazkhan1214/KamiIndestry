// import { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse,NextRequest } from 'next/server';
import { sendEmail } from '@/utils/sendEmail';

export default async function handler(
  req: NextRequest,
  res: NexResponse
) {
  if (req.method === 'POST') {
    const { to, subject, html } = req.body;

    const sent = await sendEmail(to, subject, html);

    if (sent) {
      res.status(200).json({ message: 'Email sent successfully' });
    } else {
      res.status(500).json({ message: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
