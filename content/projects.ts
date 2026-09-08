/* Featured projects — from Sazzad Hossain's resume. Order = showcase order. */

export type Study = {
  role: string;
  timeline: string;
  context: string;
  problem: string;
  process: { title: string; body: string }[];
  decisions: { title: string; why: string }[];
  outcomes: string[];
  reflection: string;
  note?: string;
};

export type StudyFr = Partial<Study>;

export type Cover = {
  bg: string;
  ink: "light" | "dark";
  src?: string;
  aspect?: number;
  variant?: "brand" | "photo";
  focus?: string;
  mark?: string;
};

export type Project = {
  slug: string;
  title: string;
  tags: string[];
  year: string;
  oneLiner: string;
  contribution: string;
  coverLabel: string;
  cover?: Cover;
  site?: { url: string; label: string };
  repo?: string;
  award?: string;
  study: Study;
  fr?: {
    title?: string;
    oneLiner?: string;
    contribution?: string;
    tags?: string[];
    study?: StudyFr;
  };
};

export const PROJECTS: Project[] = [
  {
    slug: "pincheck-dashboard",
    title: "PinCheck Dashboard",
    tags: ["Python", "Perl", "SQLite", "QA"],
    year: "2026",
    oneLiner:
      "A Python QA scoreboard that replaced manual pin-interface validation tracking — parsers, reruns, waivers, and exportable reports.",
    contribution:
      "End-to-end QA dashboard — YAML parsers, Perl reruns, SQLite snapshots.",
    coverLabel: "PINCHECK DASHBOARD",
    cover: { bg: "#1A1033", ink: "light", mark: "PIN" },
    fr: {
      title: "PinCheck Dashboard",
      oneLiner:
        "Un tableau de bord QA en Python qui a remplacé le suivi manuel de la validation des broches — parsers, relances, waivers et rapports exportables.",
      contribution:
        "Tableau de bord QA de bout en bout — parsers YAML, relances Perl, snapshots SQLite.",
      tags: ["Python", "Perl", "SQLite", "QA"],
      study: {
        role: "Software Engineer — Contractor (Synopsys via Teton)",
        timeline: "Août 2025 – mars 2026",
        context:
          "Les équipes d’ingénierie suivaient la validation des interfaces de broches dans des tableurs et des rapports manuels. PinCheck devait devenir le scoreboard unique : parser, filtrer, annoter, relancer, exporter.",
        problem:
          "La revue PinCheck était lente, dispersée, et sans historique d’audit. Chaque cycle de release recopiait le même travail.",
        process: [
          {
            title: "Parser ce qui existait déjà",
            body: "YAML et logs de validation ingérés en structures filtrables — tri multi-colonnes, critères, inspection des collatéraux.",
          },
          {
            title: "Relier le script Perl",
            body: "alphaPinCheck.pl intégré avec contrôles de relance, logs d’exécution, et liens directs vers les artefacts.",
          },
          {
            title: "Snapshots et waivers",
            body: "SQLite pour les snapshots de résultats ; matching regex, dates d’expiration, journal d’audit pour waivers permanents et temporaires.",
          },
        ],
        decisions: [
          {
            title: "Un scoreboard, pas un nouveau workflow",
            why: "Les ingénieurs gardaient Perl et YAML. L’outil s’est branché dessus au lieu de les remplacer.",
          },
          {
            title: "L’historique est la source de vérité",
            why: "Sans snapshots et audit, les waivers se perdaient entre les cycles. SQLite les a rendus inspectables.",
          },
        ],
        outcomes: [
          "Objectif : +50 % de qualité de revue et d’analyse",
          "~96 heures d’ingénierie économisées par cycle de release, sur 12 projets",
        ],
        reflection:
          "Le meilleur outil interne est celui qui s’accroche au pipeline existant — pas celui qui demande aux gens de changer de métier.",
      },
    },
    study: {
      role: "Software Engineer — Contractor (Synopsys via Teton)",
      timeline: "Aug 2025 – Mar 2026",
      context:
        "Engineering teams tracked pin-interface validation in spreadsheets and hand-built reports. PinCheck had to become the single scoreboard: parse, filter, annotate, rerun, export.",
      problem:
        "PinCheck review was slow, scattered, and had no audit trail. Every release cycle recopied the same work.",
      process: [
        {
          title: "Parse what already existed",
          body: "YAML and validation logs ingested into filterable structures — multi-column sort, criteria, collateral inspection.",
        },
        {
          title: "Wire the Perl script",
          body: "alphaPinCheck.pl integrated with rerun controls, execution logs, and direct links to artifacts.",
        },
        {
          title: "Snapshots and waivers",
          body: "SQLite for result snapshots; regex matching, expiry dates, and auditable logging for permanent and temporary waivers.",
        },
      ],
      decisions: [
        {
          title: "A scoreboard, not a new workflow",
          why: "Engineers already ran Perl and YAML. The tool attached to that pipeline instead of replacing it.",
        },
        {
          title: "History is the source of truth",
          why: "Without snapshots and audit, waivers vanished between cycles. SQLite made them inspectable.",
        },
      ],
      outcomes: [
        "Targeted 50% improvement in review and analysis quality",
        "~96 engineering hours saved per release cycle across 12 projects",
      ],
      reflection:
        "The best internal tool is the one that hooks the existing pipeline — not the one that asks people to change jobs.",
    },
  },

  {
    slug: "sales-detect-agent",
    title: "Sales Detect Agent",
    tags: ["LangChain", "LLM", "Agentic AI"],
    year: "2025",
    oneLiner:
      "An autonomous multi-agent system that watches e-commerce deals, estimates competitive prices, and fires real-time alerts.",
    contribution:
      "Discovery, price-analysis, and notification agents — coordinated by LangChain.",
    coverLabel: "SALES DETECT AGENT",
    cover: { bg: "#092E20", ink: "light", mark: "SDA" },
    fr: {
      title: "Sales Detect Agent",
      oneLiner:
        "Un système multi-agents autonome qui surveille les deals e-commerce, estime les prix compétitifs et envoie des alertes en temps réel.",
      contribution:
        "Agents de découverte, d’analyse de prix et de notification — coordonnés par LangChain.",
      tags: ["LangChain", "LLM", "IA agentique"],
      study: {
        role: "Software Engineer",
        timeline: "2025",
        context:
          "Les deals e-commerce bougent plus vite qu’un humain ne peut les relire. Il fallait un système qui découvre, compare, et alerte — sans spammer.",
        problem:
          "Surveiller les prix à la main crée du bruit et des retards. Un agent unique mélange découverte, analyse et notification — et se trompe sur les trois.",
        process: [
          {
            title: "Séparer les métiers",
            body: "Agents spécialisés : découverte produit, analyse de prix, orchestration des notifications — chacun avec un LLM et un contrat clair.",
          },
          {
            title: "État et fraîcheur",
            body: "Scheduling intelligent et state management pour suivre la fraîcheur des deals et éviter la fatigue d’alerte.",
          },
        ],
        decisions: [
          {
            title: "Plusieurs agents, un coordinateur",
            why: "Un seul prompt géant hallucine les prix. Des agents étroits se corrigent mutuellement.",
          },
          {
            title: "Le silence est une feature",
            why: "Sans suivi de fraîcheur, chaque deal re-déclenche. L’état évite le spam.",
          },
        ],
        outcomes: [
          "Alertes autonomes en temps réel sur les deals e-commerce",
          "Moins de bruit — la fraîcheur du deal est suivie avant notification",
        ],
        reflection:
          "Un agent n’est utile que s’il sait se taire. L’orchestration, c’est autant de filtrage que d’action.",
      },
    },
    study: {
      role: "Software Engineer",
      timeline: "2025",
      context:
        "E-commerce deals move faster than a human can re-read them. The system had to discover, compare, and alert — without spamming.",
      problem:
        "Manual price watching is late and noisy. A single agent mixing discovery, analysis, and notification gets all three wrong.",
      process: [
        {
          title: "Split the jobs",
          body: "Specialized agents for product discovery, price analysis, and notification orchestration — each with an LLM and a clear contract.",
        },
        {
          title: "State and freshness",
          body: "Intelligent scheduling and state management to track deal freshness and prevent alert fatigue.",
        },
      ],
      decisions: [
        {
          title: "Many agents, one coordinator",
          why: "One giant prompt hallucinates prices. Narrow agents correct each other.",
        },
        {
          title: "Silence is a feature",
          why: "Without freshness tracking, every deal re-fires. State stops the spam.",
        },
      ],
      outcomes: [
        "Autonomous real-time alerts on e-commerce deals",
        "Less noise — deal freshness is checked before notify",
      ],
      reflection:
        "An agent is only useful if it knows when to stay quiet. Orchestration is as much filtering as action.",
    },
  },

  {
    slug: "demand-forecasting",
    title: "AI-Powered Demand Forecasting",
    tags: ["TensorFlow", "Django", "React"],
    year: "2024",
    oneLiner:
      "TensorFlow models forecast product demand from sales and inventory history — served through Django REST and a React dashboard.",
    contribution:
      "Data prep, model inference services, and the dashboard that shows the forecast.",
    coverLabel: "DEMAND FORECASTING",
    cover: { bg: "#FF6F00", ink: "dark", mark: "TF" },
    fr: {
      title: "Prévision de demande par IA",
      oneLiner:
        "Des modèles TensorFlow prévoient la demande produit à partir de l’historique ventes et stocks — servis via Django REST et un dashboard React.",
      contribution:
        "Préparation des données, services d’inférence, et le dashboard qui affiche la prévision.",
      tags: ["TensorFlow", "Django", "React"],
      study: {
        role: "Software Engineer II",
        timeline: "Teton Private Ltd.",
        context:
          "Les équipes opérations avaient l’historique ventes et stocks, pas une prévision. Il fallait un modèle, une API, et un écran.",
        problem:
          "Sans prévision, le réassort est une intuition. L’intuition ne scale pas sur un catalogue.",
        process: [
          {
            title: "Préparer les séries",
            body: "Pipelines Python de préparation des données à partir des ventes et de l’inventaire historiques.",
          },
          {
            title: "Inférer derrière REST",
            body: "Services d’inférence TensorFlow exposés via Django REST pour les applications en aval.",
          },
          {
            title: "Rendre la prévision lisible",
            body: "Dashboard React : tendances de demande, sorties du modèle, insights par produit.",
          },
        ],
        decisions: [
          {
            title: "Le modèle n’est pas le produit",
            why: "Sans API et dashboard, un notebook reste un notebook. L’inférence devait vivre dans Django.",
          },
          {
            title: "Le grain, c’est le produit",
            why: "Une prévision globale n’aide pas l’acheteur. Chaque SKU a sa courbe.",
          },
        ],
        outcomes: [
          "Prévisions de demande servies en production via Django REST",
          "Dashboard React pour les tendances et les insights produit",
        ],
        reflection:
          "Un modèle en production n’est pas un fichier .h5 — c’est une API que quelqu’un ouvre le lundi matin.",
      },
    },
    study: {
      role: "Software Engineer II",
      timeline: "Teton Private Ltd.",
      context:
        "Ops had sales and inventory history, not a forecast. They needed a model, an API, and a screen.",
      problem:
        "Without a forecast, restocking is a gut call. Gut calls don't scale across a catalogue.",
      process: [
        {
          title: "Prepare the series",
          body: "Python data-preparation pipelines from historical sales and inventory.",
        },
        {
          title: "Infer behind REST",
          body: "TensorFlow inference services exposed through Django REST for downstream apps.",
        },
        {
          title: "Make the forecast readable",
          body: "React dashboard for demand trends, model outputs, and product-level insights.",
        },
      ],
      decisions: [
        {
          title: "The model is not the product",
          why: "Without an API and a dashboard, a notebook stays a notebook. Inference had to live in Django.",
        },
        {
          title: "The grain is the product",
          why: "A global forecast doesn't help the buyer. Each SKU gets its own curve.",
        },
      ],
      outcomes: [
        "Demand forecasts served in production via Django REST",
        "React dashboard for trends and product-level insights",
      ],
      reflection:
        "A model in production is not an .h5 file — it's an API someone opens on Monday morning.",
    },
  },

  {
    slug: "icloud-idsa",
    title: "iCLOUD & iDSA",
    tags: ["Python", "React", "SQL", "Data Viz"],
    year: "2021",
    oneLiner:
      "Python pipelines and React dashboards for semiconductor design data — sub-second queries across multi-million-record sets.",
    contribution:
      "Ingest, transform, chart, drill-down, export — built for GlobalFoundries engineering teams.",
    coverLabel: "iCLOUD & iDSA",
    cover: { bg: "#0072E3", ink: "light", mark: "GF" },
    fr: {
      title: "iCLOUD & iDSA",
      oneLiner:
        "Pipelines Python et dashboards React pour les données de design semi-conducteur — requêtes sub-seconde sur des millions d’enregistrements.",
      contribution:
        "Ingestion, transformation, graphiques, drill-down, export — pour les équipes d’ingénierie GlobalFoundries.",
      tags: ["Python", "React", "SQL", "Data viz"],
      study: {
        role: "Software Engineer — Contractor (GlobalFoundries via Teton)",
        timeline: "Sep 2020 – fév. 2022",
        context:
          "Des jeux de données de design hétérogènes, trop gros pour un tableur, trop lents pour une requête naïve. Les équipes avaient besoin d’erreurs en temps réel, de tendances, et de comparaisons inter-projets.",
        problem:
          "L’analyse de cycle prenait trop longtemps. Les exports PDF/CSV étaient manuels. Les requêtes ne tenaient pas le million de lignes.",
        process: [
          {
            title: "Normaliser les sources",
            body: "Pipelines Python pour ingérer, transformer et normaliser des datasets de design depuis des sources hétérogènes.",
          },
          {
            title: "Rendre ça interactif",
            body: "Dashboards React : graphiques, filtres, drill-down pour l’analyse d’erreurs, les tendances, les comparaisons.",
          },
          {
            title: "Accélérer le SQL",
            body: "Requêtes et indexation optimisées pour des temps de réponse sub-seconde sur des datasets multi-millions.",
          },
        ],
        decisions: [
          {
            title: "Le drill-down avant le résumé",
            why: "Un KPI sans chemin vers la ligne d’erreur n’aide pas l’ingénieur. Chaque graphique devait s’ouvrir.",
          },
          {
            title: "L’export est un livrable",
            why: "PDF et CSV automatisés — le cycle d’analyse ne s’arrête pas à l’écran.",
          },
        ],
        outcomes: [
          "Requêtes sub-seconde sur des datasets multi-millions d’enregistrements",
          "Rapports PDF/CSV automatisés — cycle d’analyse plus court",
        ],
        reflection:
          "Un dashboard n’est pas un graphique. C’est le chemin le plus court entre une anomalie et la ligne qui l’explique.",
      },
    },
    study: {
      role: "Software Engineer — Contractor (GlobalFoundries via Teton)",
      timeline: "Sep 2020 – Feb 2022",
      context:
        "Heterogeneous semiconductor design datasets — too big for a spreadsheet, too slow for a naive query. Teams needed live error analysis, trends, and cross-project comparisons.",
      problem:
        "Analysis cycles took too long. PDF/CSV exports were manual. Queries didn't hold at a million rows.",
      process: [
        {
          title: "Normalize the sources",
          body: "Python pipelines to ingest, transform, and normalize design datasets from heterogeneous sources.",
        },
        {
          title: "Make it interactive",
          body: "React dashboards with charting, filtering, and drill-down for error analysis, trends, and comparisons.",
        },
        {
          title: "Make SQL keep up",
          body: "Query and indexing work for sub-second response across multi-million-record datasets.",
        },
      ],
      decisions: [
        {
          title: "Drill-down before the summary",
          why: "A KPI with no path to the error row doesn't help an engineer. Every chart had to open.",
        },
        {
          title: "Export is a deliverable",
          why: "Automated PDF and CSV — the analysis cycle doesn't stop at the screen.",
        },
      ],
      outcomes: [
        "Sub-second queries across multi-million-record datasets",
        "Automated PDF/CSV reports — shorter analysis cycles",
      ],
      reflection:
        "A dashboard is not a chart. It's the shortest path from an anomaly to the row that explains it.",
    },
  },

  {
    slug: "teton-ecommerce",
    title: "Teton eCommerce",
    tags: ["React", "Node.js", "Django", "PostgreSQL"],
    year: "2023",
    oneLiner:
      "Full-stack work on the Teton Shop — storefront, catalog, cart, checkout, and order fulfillment over secure REST.",
    contribution:
      "Customer storefront and backend services for catalog through fulfillment.",
    coverLabel: "TETON ECOMMERCE",
    cover: { bg: "#FF2E0F", ink: "light", mark: "SHOP" },
    fr: {
      title: "Teton eCommerce",
      oneLiner:
        "Travail full-stack sur le Teton Shop — vitrine, catalogue, panier, checkout et fulfillment via REST sécurisé.",
      contribution:
        "Vitrine client et services backend, du catalogue jusqu’à la livraison.",
      tags: ["React", "Node.js", "Django", "PostgreSQL"],
      study: {
        role: "Software Engineer II",
        timeline: "Teton Private Ltd. · 2023 – présent",
        context:
          "Une boutique en ligne de bout en bout : catalogue, panier, checkout, commandes. React côté client, Node.js / Django / Laravel côté services, PostgreSQL pour les transactions.",
        problem:
          "Un checkout qui perd une commande n’est pas un bug d’UI. La persistance transactionnelle devait tenir.",
        process: [
          {
            title: "Vitrine responsive",
            body: "Interfaces client pour le catalogue, le panier, le checkout et le suivi de commande.",
          },
          {
            title: "APIs et persistance",
            body: "REST sécurisé branché sur une persistance transactionnelle pour un traitement de commande fiable.",
          },
        ],
        decisions: [
          {
            title: "La commande est une transaction",
            why: "Catalogue et panier peuvent être éventuellement cohérents. Le checkout, non.",
          },
        ],
        outcomes: [
          "Plateforme eCommerce de bout en bout pour Teton Shop",
          "Traitement de commande à haute fiabilité via REST et PostgreSQL",
        ],
        reflection:
          "L’e-commerce pardonne un style. Il ne pardonne pas une commande fantôme.",
      },
    },
    study: {
      role: "Software Engineer II",
      timeline: "Teton Private Ltd. · 2023 – present",
      context:
        "An end-to-end shop: catalog, cart, checkout, orders. React on the storefront, Node.js / Django / Laravel on services, PostgreSQL for transactions.",
      problem:
        "A checkout that drops an order is not a UI bug. Transactional persistence had to hold.",
      process: [
        {
          title: "Responsive storefront",
          body: "Customer interfaces for catalog, cart, checkout, and order tracking.",
        },
        {
          title: "APIs and persistence",
          body: "Secure REST wired to transactional persistence for reliable order processing.",
        },
      ],
      decisions: [
        {
          title: "The order is a transaction",
          why: "Catalog and cart can be eventually consistent. Checkout cannot.",
        },
      ],
      outcomes: [
        "End-to-end eCommerce platform for Teton Shop",
        "High-reliability order processing via REST and PostgreSQL",
      ],
      reflection:
        "Commerce forgives a style. It does not forgive a ghost order.",
    },
  },
];
