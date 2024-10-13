"use client";

import { useEffect, useState } from "react";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";

interface ReCaptchaProps {
  onVerify: (token: string) => void;
}

function ReCaptchaComponent({ onVerify }: ReCaptchaProps) {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [isTokenGenerated, setIsTokenGenerated] = useState(false);

  useEffect(() => {
    const handleReCaptchaVerify = async () => {
      if (!executeRecaptcha || isTokenGenerated) return;

      try {
        const token = await executeRecaptcha("submit");
        onVerify(token);
        setIsTokenGenerated(true);
      } catch (error) {
        console.error("reCAPTCHA error:", error);
      }
    };

    handleReCaptchaVerify();
  }, [executeRecaptcha, onVerify, isTokenGenerated]);

  return null;
}

export default function ReCaptcha(props: ReCaptchaProps) {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
    >
      <ReCaptchaComponent {...props} />
    </GoogleReCaptchaProvider>
  );
}
