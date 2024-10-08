"use client";
import React from "react";
import { contactFormAction } from "../actions/contactFormAction";
import { Turnstile } from "@marsidev/react-turnstile";

const ContactForm: React.FC = () => {
  return (
    <div className="p-6 md:p-10 mb-20 md:mb-0 mx-auto max-w-4xl bg-white font-[sans-serif]">
      <h1 className="text-3xl text-gray-800 font-extrabold text-center">
        Me contacter
      </h1>
      <form className="mt-12 space-y-6" action={contactFormAction}>
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
        <div>
          <Turnstile
            siteKey={
              (process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY as string) || ""
            }
          />
          <input type="hidden" name="cf-turnstile-response" />
        </div>

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
