import React from "react";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <div id="about" className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-16 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-blue-100 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width="200"
              height="200"
              x="50%"
              y="-1"
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none"></path>
            </pattern>
          </defs>
          <svg x="50%" y="-1" className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth="0"
            ></path>
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth="0"
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          ></rect>
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">
                Qui suis-je ?
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Sylvain Thomas
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                J&apos;adore le basket et le rose est ma couleur préférée. Mais
                je doute que ce soit pertinent.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <Image
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="/developpeur_web.jpg"
            alt="Développeur web"
            width={1000}
            height={1000}
          />
          <p className="text-xs">Photo de <a href="https://unsplash.com/fr/@afgprogrammer?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Mohammad Rahmani</a> sur <a href="https://unsplash.com/fr/photos/ecran-plat-noir-ecran-dordinateur-8qEB0fTe9Vw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
          </p>
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p className="text-justify">
                Je suis passionné par ce qui tourne autour de la
                &quot;tech&quot; en général, et surtout de développement web
                (full-stack).
                <br /> Je dispose également d&apos;une expertise approfondie en
                Wordpress, ainsi que d&apos;un solide bagage en communication
                digitale/marketing.
                <br /> Je suis donc capable de proposer une vaste de gamme de
                services &quot;à la carte&quot;:
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <svg
                    className="mt-1 h-4 w-4 flex-none text-indigo-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M11 20H6.5q-2.275 0-3.887-1.575T1 14.575q0-1.95 1.175-3.475T5.25 9.15q.625-2.3 2.5-3.725T12 4q2.925 0 4.963 2.038T19 11q1.725.2 2.863 1.488T23 15.5q0 1.875-1.312 3.188T18.5 20H13v-7.15l1.6 1.55L16 13l-4-4l-4 4l1.4 1.4l1.6-1.55z" />
                  </svg>
                  <span className="">
                    <strong className="font-semibold text-gray-900">
                      Déploiement.
                    </strong>{" "}
                    Conseil en hébergement, installation et configuration
                    serveur (VPS ou dédié)...
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <svg
                    className="mt-1 h-4 w-4 flex-none text-indigo-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M6 22q-.825 0-1.412-.587T4 20V10q0-.825.588-1.412T6 8h1V6q0-2.075 1.463-3.537T12 1t3.538 1.463T17 6v2h1q.825 0 1.413.588T20 10v10q0 .825-.587 1.413T18 22zm6-5q.825 0 1.413-.587T14 15t-.587-1.412T12 13t-1.412.588T10 15t.588 1.413T12 17M9 8h6V6q0-1.25-.875-2.125T12 3t-2.125.875T9 6z" />
                  </svg>
                  <span className="">
                    <strong className="font-semibold text-gray-900">
                      Sécurisation.
                    </strong>{" "}
                    Installation, configuration, et déploiement de mesures de
                    sécurité.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <svg
                    className="mt-1 h-4 w-4 flex-none text-indigo-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 22q-.825 0-1.412-.587T10 20h4q0 .825-.587 1.413T12 22m-4-3v-2h8v2zm.25-3q-1.725-1.025-2.738-2.75T4.5 9.5q0-3.125 2.188-5.312T12 2t5.313 2.188T19.5 9.5q0 2.025-1.012 3.75T15.75 16z" />
                  </svg>
                  <span className="">
                    <strong className="font-semibold text-gray-900">
                      Conseil.
                    </strong>{" "}
                    Accompagnement sur la stratégie de développement web la plus
                    adaptée à vos besoins.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <svg
                    className="mt-1 h-4 w-4 flex-none text-indigo-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="m9.6 15.6l1.4-1.425L8.825 12L11 9.825L9.6 8.4L6 12zm4.8 0L18 12l-3.6-3.6L13 9.825L15.175 12L13 14.175zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21z" />
                  </svg>
                  <span className="">
                    <strong className="font-semibold text-gray-900">
                      Conception.
                    </strong>{" "}
                    Wordpress, technologies full-stack (React).
                  </span>
                </li>
              </ul>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                Et vous ?
              </h2>
              <p className="mt-6">
                Après cette avalanche de &quot;Je&quot;, à vous de m&apos;en
                dire plus ! N&apos;hésitez pas à me contacter pour communiquer
                VOS besoins en développement web : j&apos;espère
                qu&apos;ensemble nous accomplirons vos projets, en toute
                confiance, et en toute transparence !
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
