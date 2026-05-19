export type ProjectKind = "Web" | "Client Website" | "RL / Python" | "Mobile (Android)" | "Game (Java)";

export type CaseStudy = {
  challenge: { en: string; is: string };
  solution: { en: string; is: string };
  highlights: { en: string; is: string }[];
  screenshots?: string[];
};

export type Project = {
  title: string;
  slug: string;
  description: string;
  descriptionIs?: string;
  stack: string[];
  kind: ProjectKind;
  image?: string; // NOTE: public/ is served from "/"
  live?: string;
  github?: string;
  caseStudy?: CaseStudy;
};

export const projects: Project[] = [
  {
    title: "BioBú",
    slug: "biobu",
    description:
      "A full-stack marketing website for an Icelandic organic dairy company. Built with Next.js and DatoCMS, featuring a product catalog, news & editorial pages, an interactive farm map, and ISR-powered content delivery.",
    descriptionIs:
      "Fullbúin markaðsvefsíða fyrir íslenskt lífrænt mjólkurfyrirtæki. Byggð með Next.js og DatoCMS með vörulista, fréttasíður, gagnvirku korti af staðsetningu kúabúa og ISR-drifna efnismiðlun.",
    stack: ["Next.js", "TypeScript", "SCSS Modules", "DatoCMS", "Vercel"],
    kind: "Client Website",
    image: "/www.biobu.is_.png",
    live: "https://biobu.is",
    caseStudy: {
      challenge: {
        en: "An Icelandic organic dairy brand needed a modern marketing website their team could manage without developer involvement. Content — products, news articles, farm information — needed to be updated frequently by non-technical staff.",
        is: "Íslenskt lífrænt mjólkurfyrirtæki þurfti nútímalega markaðsvefsíðu sem teymið gæti stjórnað án þátttöku forritara. Efni — vörur, fréttagreinar, búaupplýsingar — þurfti að uppfæra reglulega af starfsmönnum án tæknilegrar þekkingar.",
      },
      solution: {
        en: "Built with Next.js and DatoCMS as a headless CMS, giving editors full control over all content through a visual interface. Used Incremental Static Regeneration (ISR) so pages load fast while content updates propagate quickly. Structured content types cover products, news, team members, and farm pages. Deployed to Vercel.",
        is: "Byggt með Next.js og DatoCMS sem headless CMS, sem gefur ritstjórum fulla stjórn á öllu efni í gegnum sjónrænt viðmót. Notaði ISR þannig að síður hlaðast hraðar á meðan efnisuppfærslur berast fljótt. Skipulögð efnistög ná yfir vörur, fréttir, starfsmenn og búasíður. Sett á Vercel.",
      },
      highlights: [
        { en: "CMS-driven — editors publish and update content without touching code", is: "CMS-knúið — ritstjórar birta og uppfæra efni án þess að snerta kóða" },
        { en: "ISR for fast page loads with always-fresh content", is: "ISR fyrir hraðar síðuhleðslur með alltaf nýtt efni" },
        { en: "Product catalog with structured content types", is: "Vörulisti með skipulögðum efnistagmótum" },
        { en: "Interactive farm map", is: "Gagnvirkt búakort" },
        { en: "News & editorial pages with rich text support", is: "Fréttasíður og ritstjórnargreinar með stuðning fyrir ríkan texta" },
      ],
    },
  },
  {
    title: "Learning Platform",
    slug: "learning-platform",
    description:
      "Full-stack platform where teachers create courses/assignments and students get instant feedback.",
    descriptionIs:
      "Full-stack síða þar sem kennarar búa til námskeið/verkefni og nemendur fá tafarlausar endurgjafar.",
    stack: [
      "Next.js", "React", "Node.js", "Express", "Prisma", "PostgreSQL",
      "Zod", "Jest", "Supertest", "Swagger", "Zustand", "Sass",
      "React Hook Form", "Chart.js",
    ],
    kind: "Web",
    image: "/learning-platform.png",
    live: "https://learning-platform-theta-rose.vercel.app/",
    github: "https://github.com/aph8/LearningPlatform",
    caseStudy: {
      challenge: {
        en: "Design and build a full-stack learning platform where teachers can create courses and assignments, and students receive instant automated feedback. The system needed role-based access, a full REST API, and enough test coverage to be trustworthy.",
        is: "Hanna og smíða full-stack námsvettvang þar sem kennarar geta búið til námskeið og verkefni og nemendur fá tafarlausar sjálfvirkar endurgjafar. Kerfið þurfti hlutverkabundinn aðgang, fullt REST API og næga prófunaþekju til að vera traust.",
      },
      solution: {
        en: "Built a Next.js frontend backed by a Node.js/Express REST API with Prisma ORM and PostgreSQL. Implemented JWT-based authentication with separate teacher and student roles. Added Swagger API documentation, a full Jest/Supertest test suite, Chart.js dashboards for course analytics, and Zustand for client-side state management.",
        is: "Smíðaði Next.js framenda með Node.js/Express REST API, Prisma ORM og PostgreSQL. Innleiddi JWT-auðkenningu með aðskildum kennara- og nemendahlutverkum. Bætti við Swagger API skjölum, fullum Jest/Supertest prófunasetti, Chart.js mæliborðum fyrir námskeið-greiningar og Zustand fyrir client-stöðustjórnun.",
      },
      highlights: [
        { en: "Role-based auth: separate teacher and student flows", is: "Hlutverkabundin auðkenning: aðskildir kennara- og nemendaflæðar" },
        { en: "Instant automated feedback on student submissions", is: "Tafarlausar sjálfvirkar endurgjafar á innsendingar nemenda" },
        { en: "Chart.js dashboards for course analytics", is: "Chart.js mæliborð fyrir námskeið-greiningar" },
        { en: "Full REST API with Swagger documentation", is: "Fullt REST API með Swagger skjölum" },
        { en: "Test suite with Jest and Supertest", is: "Prófunasett með Jest og Supertest" },
        { en: "React Hook Form + Zod for validated forms", is: "React Hook Form + Zod fyrir staðfestar eyðublöð" },
      ],
    },
  },
  {
    title: "Grímur Kokkur",
    slug: "grimur-kokkur",
    description:
      "Rebuilding a business site with a headless CMS and modern Next.js architecture.",
    descriptionIs:
      "Endurbygging heimasíðu Gríms Kokks með headless CMS og nútíma Next.js uppbyggingu.",
    stack: ["Next.js", "TypeScript", "DatoCMS", "GraphQL", "SCSS/Sass", "Zod", "Nodemailer", "Vercel"],
    kind: "Web",
    image: "/grimur-kokkur.png",
    live: "https://grimur-kokkur.vercel.app/",
    github: "https://github.com/aph8/GrimurKokkur",
  },
  {
    title: "Laxveiðiár Íslands",
    slug: "laxveidiar",
    description:
      "Website displaying salmon rivers in Iceland with a region filter and individual pages for each river showing fishing season, permitted bait, and catch statistics (2024).",
    descriptionIs:
      "Vefur sem sýnir laxveiðiár á Íslandi með landshluta-síu og sérsíður fyrir hverja á með veiðitímabili, leyfilegu agni og veiðitölum (2024).",
    stack: ["Next.js", "TypeScript", "SCSS", "Vercel"],
    kind: "Web",
    image: "/laxveidiar.png",
    live: "https://vef2-verk5-c66r.vercel.app/",
    github: "https://github.com/aph8/vef2-verk5",
  },
  {
    title: "RL_agents_for_Backgammon",
    slug: "rl-agents-backgammon",
    description:
      "Reinforcement learning agents for Backgammon (code-only) — runnable and reproducible locally.",
    descriptionIs:
      "Reinforcement learning agentar fyrir Backgammon (code-only) — keyranlegt og endurtakanlegt locally.",
    stack: ["Python", "Reinforcement Learning"],
    kind: "RL / Python",
    github: "https://github.com/aph8/RL_agents_for_Backgammon",
  },
  {
    title: "LearningSquare (Android)",
    slug: "learning-square-android",
    description: "Android application for the Learning Square platform (code-only / repo).",
    descriptionIs: "Android forrit fyrir Learning Square vettvanginn (code-only / repo).",
    stack: ["Kotlin", "Android"],
    kind: "Mobile (Android)",
    github: "https://github.com/Mkaldalons/LearningSquare",
  },
  {
    title: "SapukuluBaratta",
    slug: "sapukulu-baratta",
    description: "Game / application written in Java (code-only / repo).",
    descriptionIs: "Leikur / forrit skrifað í Java (code-only / repo).",
    stack: ["Java"],
    kind: "Game (Java)",
    github: "https://github.com/dannith/SapukuluBaratta",
  },
];
