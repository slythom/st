"use client";
import React, { useState } from "react";
import { contactFormAction } from "../actions/contactFormAction";
import ReCaptcha from "./ReCaptcha";

const ContactForm: React.FC = () => {
  const [reCaptchaToken, setReCaptchaToken] = useState<string>("");
  const [notification, setNotification] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const handleRecaptchaVerify = (token: string) => {
    console.log("reCAPTCHA Token:", token);
    setReCaptchaToken(token);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append("recaptchaToken", reCaptchaToken);

    try {
      const result = await contactFormAction(formData);
      if (result.success) {
        setNotification({ type: 'success', message: result.message });
        // Réinitialiser le formulaire ici si nécessaire
        event.currentTarget.reset();
      } else {
        setNotification({ type: 'error', message: result.message });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setNotification({ type: 'error', message: "Une erreur inattendue s'est produite." });
    }
  };

  return (
    <div className="p-6 md:p-10 mb-20 md:mb-0 mx-auto max-w-4xl bg-white font-[sans-serif]">
      <h1 className="text-3xl text-gray-800 font-extrabold text-center">
        Me contacter
      </h1>
      {notification && (
        <div className={`mt-4 p-4 rounded ${notification.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {notification.message}
        </div>
      )}
      <form className="mt-12 space-y-6" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="sender_name"
            className="text-gray-800 text-sm block mb-2"
          >
            Votre nom
          </label>
          <input
            required
            name="sender_name"
            id="sender_name"
            type="text"
            placeholder="Dark Vador"
            className="w-full rounded-md py-2.5 px-4 border text-sm outline-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="sender_email"
            className="text-gray-800 text-sm block mb-2"
          >
            Votre e-mail
          </label>
          <input
            required
            name="sender_email"
            id="sender_email"
            type="email"
            placeholder="dark-vador@impots.gouv.fr"
            className="w-full rounded-md py-2.5 px-4 border text-sm outline-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="sender_message"
            className="text-gray-800 text-sm block mb-2"
          >
            Votre message
          </label>
          <textarea
            required
            name="sender_message"
            id="sender_message"
            placeholder="Un besoin, un compliment (j'adore ça), la recette du hachis parmentier de canard (j'adore ça aussi)... Ce que vous voulez !"
            rows={6}
            className="w-full rounded-md px-4 border text-sm pt-2.5 outline-blue-500"
          ></textarea>
        </div>

        <ReCaptcha onVerify={handleRecaptchaVerify} />

        <button
          type="submit"
          className="w-full rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
