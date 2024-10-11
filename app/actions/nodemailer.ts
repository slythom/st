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
  connectionTimeout: 5000, // 5 secondes
  socketTimeout: 5000, // 5 secondes
});

export async function sendEmail(
  sender_name: string,
  sender_email: string,
  sender_message: string
) {
  console.log("Début de la fonction sendEmail");
  console.log("Vérification des variables d'environnement:");
  console.log("NM_HOST:", process.env.NM_HOST);
  console.log("NM_USER:", process.env.NM_USER ? "Défini" : "Non défini");
  console.log("NM_PASS:", process.env.NM_PASS ? "Défini" : "Non défini");

  try {
    console.log("Vérification de la connexion SMTP...");
    await transporter.verify();
    console.log("Connexion SMTP établie avec succès");

    console.log("Tentative d'envoi d'email...");
    const info = await transporter.sendMail({
      from: '"Dev4All" <contact@sylvainthomas.fr>',
      to: "contact@sylvainthomas.fr",
      subject: "Nouveau message",
      text: `Email de: ${sender_email}\n\nMessage: ${sender_message}\n\nEnvoyé par: ${sender_name}`,
    });

    console.log("Message envoyé avec succès. ID:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log('Une erreur inconnue s\'est produite');
    }
  }
}