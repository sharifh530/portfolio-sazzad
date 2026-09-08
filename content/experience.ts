/* Professional experience — from Sazzad Hossain's resume. Reverse chronological. */

export type Role = {
  company: string;
  role: string;
  type: "Internship" | "Full-time" | "Hackathon" | "Freelance";
  location: string;
  period: string;
  summary: string;
  achievements: string[];
  outcome: string;
  skills: string[];
  color: string;
  fg: "light" | "dark";
  logo?: {
    src: string;
    variant: "tile" | "plate";
    aspect: number;
    placement?: "right" | "below";
  };
  fr?: { role?: string; summary?: string; outcome?: string; achievements?: string[] };
};

export const ROLES: Role[] = [
  {
    company: "Teton Private Ltd.",
    role: "Software Engineer II",
    type: "Full-time",
    location: "Dhaka, Bangladesh",
    period: "Jan 2023 – Present",
    summary:
      "Architect and deliver scalable, data-driven web applications across React, Node.js, Django, Laravel, and Python — including TensorFlow models in production.",
    achievements: [
      "Architect and deliver scalable, data-driven web applications across React, Node.js, Django, Laravel, and Python",
      "Design and train TensorFlow models for predictive analytics and anomaly detection; integrate inference into Django REST services",
      "Deliver high-performance React UIs and backend APIs that let teams explore operational data and extract actionable insights",
    ],
    outcome: "Production ML inference in Django REST, powering data dashboards for operations teams",
    skills: ["React", "Node.js", "Django", "Laravel", "Python", "TensorFlow"],
    color: "#0072E3",
    fg: "light",
    fr: {
      role: "Ingénieur logiciel II",
      summary:
        "Architecture et livraison d’applications web data-driven à l’échelle — React, Node.js, Django, Laravel et Python, y compris des modèles TensorFlow en production.",
      outcome: "Inférence ML en production via Django REST, au service des tableaux de bord opérationnels",
      achievements: [
        "Architecture et livraison d’applications web data-driven à l’échelle — React, Node.js, Django, Laravel et Python",
        "Conception et entraînement de modèles TensorFlow pour l’analytique prédictive et la détection d’anomalies ; intégration de l’inférence dans des services Django REST",
        "Interfaces React haute performance et APIs backend pour explorer les données opérationnelles et en extraire des insights",
      ],
    },
  },
  {
    company: "Synopsys (via Teton)",
    role: "Software Engineer — Contractor",
    type: "Full-time",
    location: "Remote · Client engagement",
    period: "Aug 2025 – Mar 2026",
    summary:
      "Built the PinCheck Dashboard, a Python QA scoreboard that replaced manual pin-interface validation tracking for semiconductor engineering teams.",
    achievements: [
      "Developed YAML and validation-log parsing, interactive filtering, sorting, collateral inspection, annotations, and exportable reports",
      "Integrated the Perl alphaPinCheck.pl validation script with rerun controls and SQLite-backed result snapshots",
      "Implemented waiver matching, expiry tracking, and audit history for permanent and temporary waivers",
    ],
    outcome: "Targeted 50% review-quality gain · ~96 engineering hours saved per release across 12 projects",
    skills: ["Python", "Perl", "YAML", "SQLite", "Tk GUI"],
    color: "#6D3BF5",
    fg: "light",
    fr: {
      role: "Ingénieur logiciel — Prestataire",
      summary:
        "Conception du PinCheck Dashboard, un tableau de bord QA en Python qui a remplacé le suivi manuel de la validation des interfaces de broches.",
      outcome: "Objectif : +50 % de qualité de revue · ~96 heures d’ingénierie économisées par cycle, sur 12 projets",
      achievements: [
        "Parsing YAML et logs de validation, filtrage interactif, tri, inspection des collatéraux, annotations et exports",
        "Intégration du script Perl alphaPinCheck.pl avec contrôles de relance et snapshots SQLite",
        "Matching des waivers, suivi d’expiration et historique d’audit",
      ],
    },
  },
  {
    company: "GlobalFoundries (via Teton)",
    role: "Software Engineer — Contractor",
    type: "Full-time",
    location: "Remote · Client engagement",
    period: "Sep 2020 – Feb 2022",
    summary:
      "Developed, configured, and maintained internal web applications and data analytics tools for semiconductor manufacturing.",
    achievements: [
      "Developed and maintained internal web applications and data analytics tools tailored to semiconductor manufacturing",
      "Supported multi-environment software deployments across staging and production using Perforce and Git",
    ],
    outcome: "Internal analytics tools in production across staging and live environments",
    skills: ["Python", "React", "SQL", "Perforce", "Git"],
    color: "#171429",
    fg: "light",
    fr: {
      role: "Ingénieur logiciel — Prestataire",
      summary:
        "Développement, configuration et maintenance d’applications web internes et d’outils d’analytique pour la fabrication de semi-conducteurs.",
      outcome: "Outils d’analytique internes en production, en staging et en live",
      achievements: [
        "Développement et maintenance d’applications web internes et d’outils d’analytique adaptés à la fabrication de semi-conducteurs",
        "Déploiements multi-environnements (staging et production) via Perforce et Git",
      ],
    },
  },
  {
    company: "Codemen Solution Inc.",
    role: "Software Engineer I",
    type: "Full-time",
    location: "Dhaka, Bangladesh",
    period: "Oct 2019 – Aug 2020",
    summary:
      "Developed cloud-based enterprise web applications — employee attendance tracking and housing management portals — using React, Node.js, and Express.",
    achievements: [
      "Built employee attendance tracking and housing management portals with React, Node.js, and Express",
      "Constructed secure REST APIs and optimized relational database queries, improving retrieval efficiency and platform reliability",
    ],
    outcome: "Faster data retrieval and more reliable enterprise portals",
    skills: ["React", "Node.js", "Express", "REST APIs", "SQL"],
    color: "#FF6A00",
    fg: "light",
    fr: {
      role: "Ingénieur logiciel I",
      summary:
        "Développement d’applications web d’entreprise dans le cloud — suivi de présence et portails de gestion locative — en React, Node.js et Express.",
      outcome: "Récupération de données plus rapide et portails d’entreprise plus fiables",
      achievements: [
        "Portails de suivi de présence et de gestion locative en React, Node.js et Express",
        "APIs REST sécurisées et requêtes relationnelles optimisées, pour plus d’efficacité et de fiabilité",
      ],
    },
  },
  {
    company: "Py Labs",
    role: "Software Engineering Intern",
    type: "Internship",
    location: "Dhaka, Bangladesh",
    period: "Sep 2018 – Apr 2019",
    summary:
      "Built a frontend for bulk SMS delivery and configured a Raspberry Pi with a GSM module for automated cellular message broadcasting.",
    achievements: [
      "Built a frontend application for bulk SMS delivery",
      "Configured a Raspberry Pi with a GSM module for automated cellular message broadcasting",
    ],
    outcome: "Working hardware-software pipeline for automated SMS broadcasting",
    skills: ["JavaScript", "Raspberry Pi", "GSM", "Hardware"],
    color: "#FFB200",
    fg: "dark",
    fr: {
      role: "Stagiaire ingénieur logiciel",
      summary:
        "Frontend pour l’envoi de SMS en masse et configuration d’un Raspberry Pi avec module GSM pour la diffusion cellulaire automatisée.",
      outcome: "Pipeline matériel-logiciel opérationnel pour la diffusion SMS automatisée",
      achievements: [
        "Application frontend pour l’envoi de SMS en masse",
        "Configuration d’un Raspberry Pi avec module GSM pour la diffusion cellulaire automatisée",
      ],
    },
  },
];
