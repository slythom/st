import React from "react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
  image: string;
  tech: string;
  icon: JSX.Element[];
}

interface Icons {
  conceptionIcon: JSX.Element;
  deploymentIcon: JSX.Element;
  securityIcon: JSX.Element;
  consultingIcon: JSX.Element;

  // Ajoutez d'autres icônes si nécessaire
}

const icons: Icons = {
  conceptionIcon: (
    <svg
      className="mt-1 h-4 w-4 flex-none text-indigo-600"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="m9.6 15.6l1.4-1.425L8.825 12L11 9.825L9.6 8.4L6 12zm4.8 0L18 12l-3.6-3.6L13 9.825L15.175 12L13 14.175zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21z" />
    </svg>
  ),
  deploymentIcon: (
    <svg
      className="mt-1 h-4 w-4 flex-none text-indigo-600"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M11 20H6.5q-2.275 0-3.887-1.575T1 14.575q0-1.95 1.175-3.475T5.25 9.15q.625-2.3 2.5-3.725T12 4q2.925 0 4.963 2.038T19 11q1.725.2 2.863 1.488T23 15.5q0 1.875-1.312 3.188T18.5 20H13v-7.15l1.6 1.55L16 13l-4-4l-4 4l1.4 1.4l1.6-1.55z" />
    </svg>
  ),
  securityIcon: (
    <svg
      className="mt-1 h-4 w-4 flex-none text-indigo-600"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M6 22q-.825 0-1.412-.587T4 20V10q0-.825.588-1.412T6 8h1V6q0-2.075 1.463-3.537T12 1t3.538 1.463T17 6v2h1q.825 0 1.413.588T20 10v10q0 .825-.587 1.413T18 22zm6-5q.825 0 1.413-.587T14 15t-.587-1.412T12 13t-1.412.588T10 15t.588 1.413T12 17M9 8h6V6q0-1.25-.875-2.125T12 3t-2.125.875T9 6z" />
    </svg>
  ),
  consultingIcon: (
    <svg
      className="mt-1 h-4 w-4 flex-none text-indigo-600"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 22q-.825 0-1.412-.587T10 20h4q0 .825-.587 1.413T12 22m-4-3v-2h8v2zm.25-3q-1.725-1.025-2.738-2.75T4.5 9.5q0-3.125 2.188-5.312T12 2t5.313 2.188T19.5 9.5q0 2.025-1.012 3.75T15.75 16z" />
    </svg>
  ),
};

const projects: Project[] = [
  {
    id: 1,
    title: "Sensible.Paris",
    description:
      "Un projet complet, incluant un site vitrine et une boutique en ligne.",
    link: "https://sensible.paris",
    image: "/sensible-paris.webp",
    tech: "Wordpress",
    icon: [
      icons.consultingIcon,
      icons.conceptionIcon,
      icons.deploymentIcon,
      icons.securityIcon,
    ],
  },
  {
    id: 2,
    title: "Boui-Boui",
    description:
      "Correction de bugs, amélioration SEO, mise en place d'une newsletter.",
    link: "https://boui-boui.com/",
    image: "/boui-boui.webp",
    tech: "Wordpress",
    icon: [icons.consultingIcon, icons.conceptionIcon],
  },
  {
    id: 3,
    title: "Aero+",
    description:
      "Vitrine d'une gamme de produits de pointe pour l'aérospatiale.",
    link: "https://aero-plus.eclipseglobalconnectivity.com/",
    image: "/aero-plus.webp",
    tech: "Wordpress",
    icon: [
      icons.consultingIcon,
      icons.conceptionIcon,
      icons.deploymentIcon,
      icons.securityIcon,
    ],
  },
  {
    id: 4,
    title: "MTG Man",
    description:
      "Un projet personnel : SaaS pour la gestion de cartes Magic: The Gathering. J'envisage une migration en React.",
    link: "https://www.sylvainthomas.fr/",
    image: "/bientot.webp",
    tech: "HTML/CSS/PHP",
    icon: [
      icons.consultingIcon,
      icons.conceptionIcon,
      icons.deploymentIcon,
      icons.securityIcon,
    ],
  },
  {
    id: 5,
    title: "TrustyHost (v1)",
    description:
      "Un SaaS pour de la recherche de concierges de locations saisonnières.",
    link: "https://trustyhost.fr/",
    image: "/trustyhost.webp",
    tech: "Wordpress",
    icon: [
      icons.consultingIcon,
      icons.conceptionIcon,
      icons.deploymentIcon,
      icons.securityIcon,
    ],
  },
  {
    id: 6,
    title: "TrustyHost (v2)",
    description:
      "Refonte complète de TrustyHost pour un SaaS autonome et évolutif.",
    link: "https://trustyhost.fr/",
    image: "/bientot.webp",
    tech: "React/Firebase",
    icon: [
      icons.consultingIcon,
      icons.conceptionIcon,
      icons.deploymentIcon,
      icons.securityIcon,
    ],
  },
  {
    id: 7,
    title: "Estelle Chevallier Architecte",
    description: "Correction de bugs, amélioration SEO pour ce site vitrine.",
    link: "https://www.estellechevallier.fr/",
    image: "/estelle-chevallier-architecte.webp",
    tech: "Wordpress",
    icon: [icons.consultingIcon, icons.conceptionIcon],
  },
  {
    id: 8,
    title: "Sylvain Thomas",
    description:
      "Et oui, ce site ! J'utilise mon framework favori en React : NextJS (avec Typescript)",
    link: "https://www.sylvainthomas.fr/",
    image: "/sylvain-thomas-developpeur-web.webp",
    tech: "React",
    icon: [
      icons.consultingIcon,
      icons.conceptionIcon,
      icons.deploymentIcon,
      icons.securityIcon,
    ],
  },
];

const getBadgeColor = (tech: string): string => {
  switch (tech) {
    case "Wordpress":
      return "bg-gray-300 ring-gray-500/10";
    case "React/Firebase":
      return "bg-blue-300 ring-blue-500/10";
    case "HTML/CSS/PHP":
      return "bg-red-300 ring-red-500/10";
    case "React":
      return "bg-green-300 ring-green-500/10";
    default:
      return "bg-gray-300 ring-gray-500/10";
  }
};

const Works: React.FC = () => {
  return (
    <div className="mx-auto w-11/12 mb-10">
      <h1 className="p-6 md:p-16 text-3xl text-gray-800 font-extrabold text-center">
        Mes réalisations
      </h1>

      <div className="grid md:grid-cols-4 gap-8 sm:grid-cols-1">
        {projects.map((project) => (
          <div
            key={project.id}
            className="p-8 bg-gray-100 rounded-tl-lg rounded-br-lg shadow-xl hover:shadow-2xl"
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Image
                alt={project.title}
                src={project.image}
                width={450}
                height={450}
                className="h-1/2 w-full object-cover mb-2 rounded-lg"
              />
              <div className="flex items-center mb-2">
                <span
                  className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ${getBadgeColor(
                    project.tech
                  )}`}
                >
                  {project.tech}
                </span>
              </div>
              <h3 className="mt-2 text-lg font-bold text-gray-900 sm:text-xl">
                {project.title}
              </h3>
              <p className="mt-2 max-w-sm text-gray-600 text-sm font-semibold leading-loose">
                {project.description}
              </p>
              <p className="mt-2 max-w-sm text-gray-600 text-sm font-semibold leading-loose">
                Prestations :
              </p>
              <span className="space-x-14">
                <span className="inline-flex">
                  {project.icon.map((Icon, index) => (
                    <span key={`${project.id}-icon-${index}`}>{Icon}</span>
                  ))}
                </span>
              </span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
