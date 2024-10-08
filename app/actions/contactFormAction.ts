"use server";
import { sendEmail } from "@/app/actions/nodemailer";

export async function contactFormAction(formData: FormData): Promise<void> {
  const sender_name = formData.get("sender_name") as string;
  const sender_email = formData.get("sender_email") as string;
  const sender_message = formData.get("sender_message") as string;
  const turnstileToken = formData.get("cf-turnstile-response") as string;

  try {
    // Vérification du token Turnstile
    const turnstileResponse = await verifyTurnstileToken(turnstileToken);
    if (!turnstileResponse.success) {
      throw new Error("Échec de la vérification Turnstile");
    }

    await sendEmail(sender_name, sender_email, sender_message);
  } catch (error) {
    console.error("Erreur lors de l'envoi du message:", error);
    throw new Error("Erreur lors de l'envoi du message");
  }
}

async function verifyTurnstileToken(token: string) {
  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        secret: process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY,
        response: token,
      }),
    }
  );

  return response.json();
}
