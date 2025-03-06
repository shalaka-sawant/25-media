// app/api/contact/route.js
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { firstname, lastname, email, service, message } = await req.json();

    if (!firstname || !lastname || !email || !service || !message) {
      return new Response(
        JSON.stringify({ error: 'All fields are required.' }),
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'shalaka860@gmail.com',
        pass: 'rmtm vvxj udwv nkdc',
      },
    });

    const mailOptions = {
      from: email,
      to: 'shalaka860@gmail.com',
      subject: `Message from ${firstname}`,
      text: `Message: ${message}\n\nFrom: ${firstname} <${email}>`,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: 'Message sent successfully!' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error details:', error); // Log the detailed error object
    return new Response(
      JSON.stringify({ error: `Internal server error: ${error.message}` }),
      { status: 500 }
    );
  }
}