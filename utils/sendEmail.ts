import nodemailer from "nodemailer";

// Create a transporter
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'your_email@gmail.com',
    pass: 'your_app_password', // App Password generated in Gmail
  },
});

// Define a function to send an email
export async function sendEmail(to: string, subject: string, html: string) {
  const mailOptions = {
    from: 'your_email@gmail.com',
    to,
    subject,
    html,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}
