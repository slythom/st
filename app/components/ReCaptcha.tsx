'use client';

import { useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';

interface ReCaptchaProps {
  onVerify: (token: string) => void;
}

function ReCaptchaComponent({ onVerify }: ReCaptchaProps) {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const { pending } = useFormStatus();

  useEffect(() => {
    const handleReCaptchaVerify = async () => {
      if (!executeRecaptcha) {
        console.log('Execute recaptcha not yet available');
        return;
      }

      const token = await executeRecaptcha('submit');
      onVerify(token);
    };

    if (!pending) {
      handleReCaptchaVerify();
    }
  }, [executeRecaptcha, onVerify, pending]);

  return null;
}

export default function ReCaptcha(props: ReCaptchaProps) {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}>
      <ReCaptchaComponent {...props} />
    </GoogleReCaptchaProvider>
  );
}
