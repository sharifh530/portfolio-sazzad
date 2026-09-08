/* Education — Sazzad's resume lists a B.Sc., not a cert stack.
   The deck still needs panels, so this section becomes Education & skills. */

export type Cert = {
  no: string;
  issuer: string | null;
  logo?: { src: string; aspect: number };
  title: string;
  year: string | null;
  credentialId: string | null;
  credentialUrl?: string;
  verified: boolean;
  skills: string[];
  metric?: { value: string; label: string };
  fr?: { title?: string; skills?: string[]; metricLabel?: string };
};

export const CERTS: Cert[] = [
  {
    no: "2.1",
    issuer: "North South University",
    title: "B.Sc. in Computer Science and Engineering",
    year: "2019",
    credentialId: null,
    verified: false,
    skills: [
      "Algorithms & data structures",
      "Software engineering",
      "Database systems",
    ],
    metric: { value: "2015–19", label: "Dhaka, Bangladesh" },
    fr: {
      title: "B.Sc. en informatique et génie logiciel",
      skills: [
        "Algorithmes & structures de données",
        "Génie logiciel",
        "Systèmes de bases de données",
      ],
      metricLabel: "Dhaka, Bangladesh",
    },
  },
  {
    no: "2.2",
    issuer: "Teton · production",
    title: "Machine Learning in Production",
    year: "2023",
    credentialId: null,
    verified: false,
    skills: [
      "TensorFlow predictive models",
      "Anomaly detection",
      "Django REST inference",
    ],
    metric: { value: "TF", label: "Models in production" },
    fr: {
      title: "Machine learning en production",
      skills: [
        "Modèles prédictifs TensorFlow",
        "Détection d’anomalies",
        "Inférence Django REST",
      ],
      metricLabel: "Modèles en production",
    },
  },
  {
    no: "2.3",
    issuer: "LangChain · LLM APIs",
    title: "Agentic AI Systems",
    year: "2025",
    credentialId: null,
    verified: false,
    skills: [
      "Multi-agent orchestration",
      "LangChain workflows",
      "Autonomous alerting",
    ],
    metric: { value: "LLM", label: "Agents that ship" },
    fr: {
      title: "Systèmes d’IA agentique",
      skills: [
        "Orchestration multi-agents",
        "Workflows LangChain",
        "Alertes autonomes",
      ],
      metricLabel: "Des agents qui livrent",
    },
  },
  {
    no: "2.4",
    issuer: "Synopsys engagement",
    title: "PinCheck Dashboard — QA Engineering",
    year: "2026",
    credentialId: null,
    verified: false,
    skills: [
      "YAML & log parsing",
      "SQLite snapshot storage",
      "Waiver & audit workflows",
    ],
    metric: { value: "96h", label: "Saved per release cycle" },
    fr: {
      title: "PinCheck Dashboard — ingénierie QA",
      skills: [
        "Parsing YAML & logs",
        "Stockage de snapshots SQLite",
        "Workflows de waivers et d’audit",
      ],
      metricLabel: "Économisées par cycle de release",
    },
  },
  {
    no: "2.5",
    issuer: "Full-stack practice",
    title: "Full-Stack Web Engineering",
    year: null,
    credentialId: null,
    verified: false,
    skills: [
      "React, Next.js, TypeScript",
      "Node.js, Django, Laravel",
      "PostgreSQL, Docker, AWS",
    ],
    metric: { value: "7+", label: "Years shipping product" },
    fr: {
      title: "Ingénierie web full-stack",
      skills: [
        "React, Next.js, TypeScript",
        "Node.js, Django, Laravel",
        "PostgreSQL, Docker, AWS",
      ],
      metricLabel: "Années à livrer du produit",
    },
  },
];
