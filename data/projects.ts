export type ProjectKind = "Web" | "RL / Python" | "Mobile (Android)" | "Game (Java)";

export type Project = {
  title: string;
  description: string;
  stack: string[];
  kind: ProjectKind;
  image?: string; // NOTE: public/ is served from "/"
  live?: string;
  github: string;
};

export const projects: Project[] = [
  {
    title: "Learning Platform",
    description:
      "Full-stack platform where teachers create courses/assignments and students get instant feedback.",
    stack: [
      "Next.js",
      "React",
      "Node.js",
      "Express",
      "Prisma",
      "Zod",
      "Jest",
      "Supertest",
      "Swagger",
      "Zustand",
      "Sass",
      "React Hook Form",
      "Chart.js",
    ],
    kind: "Web",
    image: "/learning-platform.png",
    live: "https://learning-platform-theta-rose.vercel.app/",
    github: "https://github.com/aph8/LearningPlatform",
  },
  {
    title: "Grímur Kokkur (Draft)",
    description:
      "Rebuilding a business site with a headless CMS and modern Next.js architecture.",
    stack: [
      "Next.js",
      "TypeScript",
      "DatoCMS",
      "GraphQL",
      "SCSS/Sass",
      "Zod",
      "Nodemailer",
      "Vercel",
    ],
    kind: "Web",
    image: "/grimur-kokkur.png",
    live: "https://grimur-kokkur.vercel.app/",
    github: "https://github.com/aph8/GrimurKokkur",
  },
  {
    title: "Laxveiðiár Íslands",
    description:
      "Vefur sem sýnir laxveiðiár á Íslandi með landshluta-síu og sérsíður fyrir hverja á með veiðitímabili, leyfilegu agni og veiðitölum (2024).",
    stack: ["Next.js", "TypeScript", "SCSS", "Vercel"],
    kind: "Web",
    image: "/laxveidiar.png",
    live: "https://vef2-verk5-c66r.vercel.app/",
    github: "https://github.com/aph8/vef2-verk5",
  },
  {
    title: "RL_agents_for_Backgammon",
    description:
      "Reinforcement learning agentar fyrir Backgammon (code-only) — keyranlegt og endurtakanlegt locally.",
    stack: ["Python", "Reinforcement Learning"],
    kind: "RL / Python",
    github: "https://github.com/aph8/RL_agents_for_Backgammon",
  },
  {
    title: "LearningSquare (Android)",
    description: "Android application fyrir Learning Square platform (code-only / repo).",
    stack: ["Kotlin", "Android"],
    kind: "Mobile (Android)",
    github: "https://github.com/Mkaldalons/LearningSquare",
  },
  {
    title: "SapukuluBaratta",
    description: "Leikur / application skrifað í Java (code-only / repo).",
    stack: ["Java"],
    kind: "Game (Java)",
    github: "https://github.com/dannith/SapukuluBaratta",
  },
];
