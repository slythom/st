"use server";

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.NM_HOST,
  port: 465,
  secure: true,
  auth: {
    user: process.env.NM_USER,
    pass: process.env.NM_PASS,
  },
  connectionTimeout: 5000,
  socketTimeout: 5000,
});

export async function sendEmail(
  sender_name: string,
  sender_email: string,
  sender_message: string
) {
  try {
    await transporter.verify();

    const info = await transporter.sendMail({
      from: '"Dev4All" <contact@sylvainthomas.fr>',
      to: "contact@sylvainthomas.fr",
      subject: "Nouveau message",
      text: `Email de: ${sender_email}\n\nMessage: ${sender_message}\n\nEnvoyé par: ${sender_name}`,
    });

    return { success: true, messageId: info.messageId };
  } catch (error) {
    if (error instanceof Error) {
    } else {
    }
  }
}
