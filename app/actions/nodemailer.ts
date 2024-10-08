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
});

export async function sendEmail(
  // sender_name: string,
  // sender_email: string,
  // sender_message: string
) {
  try {
    const info = await transporter.sendMail({
      from: '"Dev4All" <contact@sylvainthomas.fr>',
      to: "contact@sylvainthomas.fr",
      subject: "Nouveau message",
      text: "`Email de: ${sender_email}\n\nMessage: ${sender_message}\n\nEnvoyé par: ${sender_name}`",
      //   html: "<b>Hello world?</b>",
    });

    console.log("Message sent: %s", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: "Fail" };
  }
}
