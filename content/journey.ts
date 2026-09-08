/* THE JOURNEY — chapters the light tunnel travels through.
 * Sourced from Sazzad Hossain's resume. Proper nouns stay untranslated. */

export type Chapter = {
  id: string;
  year: string;
  title: string;
  place: string;
  story: string;
  bridge: string;
  fr?: { title?: string; place?: string; story?: string; bridge?: string };
};

export const CHAPTERS: Chapter[] = [
  {
    id: "roots",
    year: "2015",
    title: "Foundations",
    place: "North South University · Dhaka, Bangladesh",
    story:
      "A B.Sc. in Computer Science and Engineering. Four years of algorithms, systems, and the first real code that had to run — not just compile.",
    bridge: "The degree closed. The first internship opened a hardware door.",
    fr: {
      title: "Fondations",
      place: "North South University · Dhaka, Bangladesh",
      story:
        "Un B.Sc. en informatique et génie logiciel. Quatre ans d’algorithmes, de systèmes, et le premier code qui devait vraiment tourner — pas seulement compiler.",
      bridge: "Le diplôme s’est refermé. Le premier stage a ouvert une porte matérielle.",
    },
  },
  {
    id: "hardware",
    year: "2018",
    title: "Hardware meets software",
    place: "Py Labs · Dhaka",
    story:
      "A frontend for bulk SMS, and a Raspberry Pi with a GSM module that actually sent the messages. The first time software had to talk to a radio.",
    bridge: "From a Pi on a desk to enterprise portals in the cloud.",
    fr: {
      title: "Quand le matériel parle au logiciel",
      place: "Py Labs · Dhaka",
      story:
        "Un frontend pour les SMS en masse, et un Raspberry Pi avec module GSM qui envoyait vraiment les messages. La première fois que le logiciel devait parler à une radio.",
      bridge: "D’un Pi sur un bureau aux portails d’entreprise dans le cloud.",
    },
  },
  {
    id: "enterprise",
    year: "2019",
    title: "Enterprise, in production",
    place: "Codemen Solution Inc. · Dhaka",
    story:
      "Attendance tracking and housing management portals — React, Node.js, Express. Secure REST APIs and SQL that had to stay fast under real users.",
    bridge: "Cloud apps taught me reliability. Semiconductors taught me scale.",
    fr: {
      title: "L’entreprise, en production",
      place: "Codemen Solution Inc. · Dhaka",
      story:
        "Portails de présence et de gestion locative — React, Node.js, Express. Des APIs REST sécurisées et du SQL qui devait rester rapide sous de vrais utilisateurs.",
      bridge: "Le cloud m’a appris la fiabilité. Les semi-conducteurs m’ont appris l’échelle.",
    },
  },
  {
    id: "silicon",
    year: "2020",
    title: "Inside the fab",
    place: "GlobalFoundries · Contractor",
    story:
      "Internal web apps and analytics for semiconductor manufacturing. Staging and production, Perforce and Git, datasets measured in millions of records.",
    bridge: "Two years of manufacturing data. Then the stack got wider.",
    fr: {
      title: "Dans la fab",
      place: "GlobalFoundries · Prestataire",
      story:
        "Applications web internes et analytique pour la fabrication de semi-conducteurs. Staging et production, Perforce et Git, des jeux de données à plusieurs millions d’enregistrements.",
      bridge: "Deux ans de données de fabrication. Puis la stack s’est élargie.",
    },
  },
  {
    id: "fullstack",
    year: "2023",
    title: "Full-stack, then models",
    place: "Teton Private Ltd. · Dhaka",
    story:
      "Software Engineer II. React, Node.js, Django, Laravel, Python — and TensorFlow models for predictive analytics, wired into Django REST so the dashboard could show what the model saw.",
    bridge: "Models in production. Next: agents that act on their own.",
    fr: {
      title: "Full-stack, puis les modèles",
      place: "Teton Private Ltd. · Dhaka",
      story:
        "Ingénieur logiciel II. React, Node.js, Django, Laravel, Python — et des modèles TensorFlow d’analytique prédictive, branchés sur Django REST pour que le tableau de bord affiche ce que le modèle voit.",
      bridge: "Des modèles en production. Ensuite : des agents qui agissent seuls.",
    },
  },
  {
    id: "agents",
    year: "2025",
    title: "Agents, and a scoreboard",
    place: "Synopsys · Contractor · via Teton",
    story:
      "PinCheck Dashboard: a Python QA scoreboard that replaced spreadsheets for pin-interface validation — YAML parsers, Perl reruns, SQLite snapshots, ~96 hours saved per release. In parallel, LangChain agents that watch e-commerce deals and fire alerts on their own.",
    bridge: "Seven years in: full-stack, ML in production, and agents that ship.",
    fr: {
      title: "Des agents, et un tableau de bord",
      place: "Synopsys · Prestataire · via Teton",
      story:
        "PinCheck Dashboard : un tableau de bord QA en Python qui a remplacé les tableurs pour la validation des broches — parsers YAML, relances Perl, snapshots SQLite, ~96 heures économisées par cycle. En parallèle, des agents LangChain qui surveillent les deals e-commerce et envoient des alertes seuls.",
      bridge: "Sept ans plus tard : full-stack, ML en production, et des agents qui livrent.",
    },
  },
];
