"use server";
import { sendEmail } from "@/app/actions/nodemailer";

export async function contactFormAction(formData: FormData): Promise<{ success: boolean; message: string }> {
  const sender_name = formData.get("sender_name") as string;
  const sender_email = formData.get("sender_email") as string;
  const sender_message = formData.get("sender_message") as string;

  try {
    await sendEmail(sender_name, sender_email, sender_message);
    return { success: true, message: "Votre message a été envoyé avec succès !" };
  } catch (error) {
    console.error("Erreur lors de l'envoi du message:", error);
    return { success: false, message: "Une erreur est survenue lors de l'envoi du message." };
  }
}
