"use client";

/*
 * Centralised EN/FR store for every user-facing string on the site.
 *
 * Switching is pure React state: scroll position, the active section and all
 * pinned ScrollTriggers survive, with no reload. The choice persists in
 * localStorage and is mirrored onto <html lang> for assistive tech.
 *
 * Proper nouns (companies, products, tools, place names) are deliberately
 * NOT translated. French runs longer than English, so copy here is written
 * to fit the same layout rather than translated literally.
 */

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "fr";

type Entry = { en: string; fr: string };

export const DICT: Record<string, Entry> = {
  /* ---------------- nav ---------------- */
  "nav.home": { en: "Home", fr: "Accueil" },
  "nav.about": { en: "About", fr: "À propos" },
  "nav.work": { en: "Work", fr: "Projets" },
  "nav.contact": { en: "Contact", fr: "Contact" },
  "nav.menu": { en: "Open menu", fr: "Ouvrir le menu" },
  "nav.close": { en: "Close menu", fr: "Fermer le menu" },

  /* ---------------- intro ---------------- */
  "intro.scroll": { en: "Scroll to enter", fr: "Faites défiler pour entrer" },

  /* ---------------- hero ---------------- */
  "hero.kicker": {
    en: "Software Engineer · Full-Stack, ML & Agentic AI",
    fr: "Ingénieur logiciel · Full-stack, ML & IA agentique",
  },
  "hero.h1a": { en: "Systems that", fr: "Des systèmes qui" },
  "hero.h1aEm": { en: "ship.", fr: "livrent." },
  "hero.h1b": { en: "Models that", fr: "Des modèles qui" },
  "hero.h1bEm": { en: "run.", fr: "tournent." },
  "hero.sub": {
    en: "I build full-stack web apps, data dashboards, and ML systems — TensorFlow in production, LangChain agents that act, APIs that stay up.",
    fr: "Je construis des apps web full-stack, des dashboards data et des systèmes ML — TensorFlow en production, des agents LangChain qui agissent, des APIs qui tiennent.",
  },
  "hero.cta1": { en: "View My Work", fr: "Voir mes projets" },
  "hero.cta2": { en: "See How I Work", fr: "Ma façon de travailler" },
  "hero.scroll": { en: "Scroll to Explore", fr: "Faites défiler" },
  "stat.projects": { en: "Selected Projects", fr: "Projets sélectionnés" },
  "stat.years": { en: "Years of Experience", fr: "Ans d’expérience" },
  "stat.countries": { en: "Client Engagements", fr: "Missions clients" },
  "stat.satisfaction": { en: "Hours Saved / Release", fr: "Heures gagnées / cycle" },

  /* ---------------- about ---------------- */
  "about.eyebrow": { en: "About", fr: "À propos" },
  "about.h2a": { en: "Code is how I think —", fr: "Le code, c’est ma façon de penser —" },
  "about.h2b": { en: "production is how I", fr: "la production, ma façon de la" },
  "about.h2Em": { en: "prove", fr: "prouver" },
  "about.h2c": { en: "it.", fr: "." },
  "about.m1": {
    en: "PinCheck — ~96 engineering hours saved per release",
    fr: "PinCheck — ~96 heures d’ingénierie économisées par cycle",
  },
  "about.m2": {
    en: "Years shipping full-stack, ML, and agentic systems",
    fr: "Années à livrer du full-stack, du ML et des systèmes agentiques",
  },
  "about.m3": {
    en: "Targeted review-quality gain on PinCheck",
    fr: "Gain visé de qualité de revue sur PinCheck",
  },
  "about.m4": {
    en: "Client engagements — Synopsys, GlobalFoundries, Teton Shop",
    fr: "Missions clients — Synopsys, GlobalFoundries, Teton Shop",
  },
  "about.edu": {
    en: "B.Sc. Computer Science and Engineering · North South University · 2015–2019 · Dhaka, Bangladesh",
    fr: "B.Sc. Informatique et génie logiciel · North South University · 2015–2019 · Dhaka, Bangladesh",
  },
  "about.cta": { en: "Explore My Work", fr: "Découvrir mes projets" },

  /* ---------------- journey ----------------
     Chapter copy lives in content/journey.ts; only the chrome is here. */
  "journey.eyebrow": { en: "My Journey", fr: "Mon parcours" },
  "journey.enter": { en: "Scroll to travel", fr: "Faites défiler pour avancer" },
  "journey.chapter": { en: "Chapter", fr: "Chapitre" },
  "journey.lede": {
    en: "From a CS degree in Dhaka to ML in production and agents that ship — the chapters in between.",
    fr: "D’un diplôme d’informatique à Dhaka au ML en production et aux agents qui livrent — les chapitres entre les deux.",
  },

  /* ---------------- design stack ---------------- */
  "stack.eyebrow": { en: "Toolkit", fr: "Outils" },
  "stack.h2": { en: "My Engineering", fr: "Ma" },
  "stack.h2Em": { en: "Stack.", fr: "stack." },
  "stack.lede": {
    en: "The tools I use to build, train, deploy and operate — from a React screen to a TensorFlow model behind Django REST.",
    fr: "Les outils avec lesquels je construis, entraîne, déploie et opère — d’un écran React à un modèle TensorFlow derrière Django REST.",
  },
  "stack.count": { en: "tools", fr: "outils" },
  "stack.disciplines": { en: "disciplines", fr: "disciplines" },

  /* ---------------- work ---------------- */
  "work.eyebrow": { en: "Featured Work", fr: "Projets sélectionnés" },
  "work.h2a": { en: "Selected projects,", fr: "Des projets choisis," },
  "work.h2b": { en: "built to", fr: "faits pour" },
  "work.h2Em": { en: "ship.", fr: "livrer." },
  "work.lede": {
    en: "QA dashboards, e-commerce, demand forecasting, agentic systems, semiconductor analytics — each a different stack, one practice.",
    fr: "Dashboards QA, e-commerce, prévision de demande, systèmes agentiques, analytique semi-conducteur — chaque stack différente, une seule pratique.",
  },
  "work.open": { en: "Open case study", fr: "Voir l’étude de cas" },
  "work.hint": { en: "SCROLL TO BROWSE", fr: "FAITES DÉFILER" },

  /* ---------------- experience ---------------- */
  "exp.eyebrow": { en: "Experience", fr: "Expérience" },
  "exp.h2": { en: "Where I shipped the", fr: "Là où j’ai livré le" },
  "exp.h2Em": { en: "work.", fr: "travail." },
  "exp.worked": { en: "What I worked on", fr: "Ce sur quoi j’ai travaillé" },
  "exp.impact": { en: "Impact", fr: "Impact" },
  "exp.tools": { en: "Tools & skills", fr: "Outils & compétences" },
  "exp.hint": { en: "SCROLL · CLICK TO JUMP", fr: "DÉFILER · CLIQUER POUR NAVIGUER" },
  "type.Internship": { en: "Internship", fr: "Stage" },
  "type.Full-time": { en: "Full-time", fr: "Temps plein" },
  "type.Hackathon": { en: "Hackathon", fr: "Hackathon" },
  "type.Freelance": { en: "Freelance", fr: "Freelance" },

  /* ---------------- credentials ---------------- */
  "cert.introLabel": { en: "Introduction", fr: "Introduction" },
  "cert.introTitle1": { en: "EDUCATION", fr: "FORMATION" },
  "cert.introTitle2": { en: "& PRACTICE", fr: "& PRATIQUE" },
  "cert.introBody": {
    en: "A CS degree, then seven years of applied full-stack, ML, and agentic work — the base underneath the shipping.",
    fr: "Un diplôme d’informatique, puis sept ans de full-stack, de ML et d’IA agentique appliqués — la base sous ce qui se livre.",
  },
  "cert.introNote": {
    en: "B.Sc. CSE · North South University · production ML, agents, QA engineering.",
    fr: "B.Sc. CSE · North South University · ML en production, agents, ingénierie QA.",
  },
  "cert.eyebrow": { en: "Education", fr: "Formation" },
  "cert.h2": { en: "Education", fr: "Formation" },
  "cert.lede": {
    en: "Degree, production ML, agentic systems, and the full-stack practice underneath the work.",
    fr: "Diplôme, ML en production, systèmes agentiques, et la pratique full-stack sous le travail.",
  },
  "cert.certified": { en: "Record", fr: "Fiche" },
  "cert.brandRole": { en: "Software Engineer", fr: "Ingénieur logiciel" },
  "cert.issuerTBC": { en: "Issuer — to confirm", fr: "Organisme — à confirmer" },
  "cert.certification": { en: "Certification", fr: "Certification" },
  "cert.verified": { en: "✓ Verified", fr: "✓ Vérifié" },
  "cert.onRequest": { en: "Credential on request", fr: "Justificatif sur demande" },
  "cert.issuedBy": { en: "Issued by", fr: "Délivré par" },
  "cert.year": { en: "Year", fr: "Année" },
  "cert.id": { en: "Credential ID", fr: "N° de justificatif" },
  "cert.tbc": { en: "To confirm", fr: "À confirmer" },
  "cert.skills": { en: "Skills", fr: "Compétences" },
  "cert.verify": { en: "Verify credential ↗", fr: "Vérifier le justificatif ↗" },
  "cert.foot": { en: "Education", fr: "Formation" },

  /* ---------------- gallery — the people behind the work ---------------- */
  "gallery.eyebrow": { en: "The Archive", fr: "L’archive" },
  "gallery.h2a": { en: "The people behind", fr: "Celles et ceux derrière" },
  "gallery.h2Em": { en: "the work", fr: "le travail" },
  "gallery.lede": {
    en: "The people, moments and experiences that shaped the work behind the screen.",
    fr: "Les personnes, les moments et les expériences qui ont façonné le travail derrière l’écran.",
  },
  "gallery.alt": {
    en: "A moment with the people behind the work",
    fr: "Un moment avec celles et ceux derrière le travail",
  },
  "gallery.frames": { en: "Frames", fr: "Images" },
  "gallery.hint": { en: "Scroll to travel the archive", fr: "Faites défiler pour parcourir l’archive" },

  /* ---------------- connect ---------------- */
  "connect.eyebrow": { en: "Let’s Connect", fr: "Restons en contact" },
  "connect.h2a": { en: "Let’s create what’s", fr: "Créons ce qui" },
  "connect.h2Em": { en: "next.", fr: "vient." },
  "connect.lede": {
    en: "I’m open to software engineering roles, collaborations and good conversations — full-stack, ML, agentic systems. If you’re building something that has to run, I’d like to hear about it.",
    fr: "Je suis ouvert aux postes d’ingénieur logiciel, aux collaborations et aux bonnes conversations — full-stack, ML, systèmes agentiques. Si vous construisez quelque chose qui doit tourner, parlons-en.",
  },
  "connect.cta": { en: "Start a Conversation", fr: "Démarrer la conversation" },
  "connect.credit": { en: "Designed & Developed by", fr: "Conçu & développé par" },
  "connect.top": { en: "Back to top ↑", fr: "Haut de page ↑" },

  /* ---------------- case study (/work/[slug]) ---------------- */
  "case.back": { en: "← Back to work", fr: "← Retour aux projets" },
  "case.kicker": { en: "Case Study", fr: "Étude de cas" },
  "case.role": { en: "Role", fr: "Rôle" },
  "case.timeline": { en: "Timeline", fr: "Période" },
  "case.focus": { en: "Focus", fr: "Focus" },
  "case.site": { en: "Live product", fr: "Produit en ligne" },
  "case.repo": { en: "Source", fr: "Code source" },
  "case.cover": { en: "COVER", fr: "VISUEL" },
  "case.context": { en: "Context", fr: "Contexte" },
  "case.problem": { en: "The Problem", fr: "Le problème" },
  "case.process": { en: "Process", fr: "Démarche" },
  "case.decisions": { en: "Decisions", fr: "Décisions" },
  "case.outcome": { en: "Outcome", fr: "Résultats" },
  "case.reflection": { en: "Reflection", fr: "Ce que j’en retire" },
  "case.all": { en: "← All projects", fr: "← Tous les projets" },
  "case.next": { en: "Next project", fr: "Projet suivant" },

  /* ---------------- lab (/tunnel) ---------------- */
  "lab.back": { en: "← PORTFOLIO", fr: "← PORTFOLIO" },
  "lab.hint": {
    en: "LAB · TUNNEL TYPE — SCROLL TO TRAVEL · MOVE THE MOUSE",
    fr: "LAB · TUNNEL TYPE — FAITES DÉFILER POUR AVANCER · BOUGEZ LA SOURIS",
  },

  /* ---------------- 404 ---------------- */
  "nf.label": { en: "404 — NOT FOUND", fr: "404 — PAGE INTROUVABLE" },
  "nf.h1": { en: "This page went", fr: "Cette page a quitté" },
  "nf.h1Em": { en: "off the grid.", fr: "les radars." },
  "nf.cta": { en: "Back to the portfolio →", fr: "Retour au portfolio →" },
};

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: string) => string };

const LanguageContext = createContext<Ctx>({
  lang: "en",
  setLang: () => {},
  t: (k) => DICT[k]?.en ?? k,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("lang") as Lang | null;
    if (saved === "en" || saved === "fr") {
      setLangState(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem("lang", l);
    } catch {
      /* private mode — the choice simply won't persist */
    }
    document.documentElement.lang = l;
  };

  const t = (k: string) => DICT[k]?.[lang] ?? DICT[k]?.en ?? k;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);

/** Pick a translated field off a content record: `L(lang, item, "summary")`
 *  returns `item.fr.summary` when available, else the English original. */
export function L<T extends { fr?: Record<string, unknown> }>(
  lang: Lang,
  item: T,
  field: keyof T & string
): string {
  if (lang === "fr" && item.fr && typeof item.fr[field] === "string") {
    return item.fr[field] as string;
  }
  return item[field] as unknown as string;
}
