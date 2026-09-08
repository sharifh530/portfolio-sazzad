/* Engineering stack — tools shown in the spiral orbit.
   `src` uses a real logo from /public/images/logos when we have one;
   otherwise a brand-tinted monogram keeps the set visually uniform. */

export type Tool = {
  name: string;
  group: "AI" | "Design" | "Build" | "Creative";
  src?: string;
  mono?: string;
  color?: string;
};

export const TOOLS: Tool[] = [
  /* — AI — */
  { name: "Python", group: "AI", mono: "Py", color: "#3776AB" },
  { name: "TensorFlow", group: "AI", mono: "TF", color: "#FF6F00" },
  { name: "LangChain", group: "AI", mono: "LC", color: "#1C3C3C" },
  { name: "Claude", group: "AI", src: "/images/logos/claude.png" },

  /* — Design (kept as group key; used here for frontend) — */
  { name: "React", group: "Design", mono: "Re", color: "#0E7C99" },
  { name: "Next.js", group: "Design", mono: "N", color: "#141414" },
  { name: "TypeScript", group: "Design", mono: "TS", color: "#3178C6" },
  { name: "Tailwind", group: "Design", mono: "TW", color: "#0891A6" },

  /* — Build — */
  { name: "Node.js", group: "Build", mono: "N", color: "#339933" },
  { name: "Django", group: "Build", mono: "Dj", color: "#092E20" },
  { name: "Laravel", group: "Build", mono: "Lv", color: "#FF2D20" },
  { name: "PostgreSQL", group: "Build", mono: "PG", color: "#336791" },
  { name: "MySQL", group: "Build", mono: "my", color: "#4479A1" },
  { name: "Docker", group: "Build", mono: "Dk", color: "#2496ED" },
  { name: "AWS", group: "Build", mono: "AWS", color: "#FF9900" },
  { name: "GitHub", group: "Build", mono: "GH", color: "#181717" },

  /* — Creative (data & ops) — */
  { name: "SQL", group: "Creative", mono: "SQL", color: "#336791" },
  { name: "Perl", group: "Creative", mono: "Pl", color: "#39457E" },
  { name: "YAML", group: "Creative", mono: "Y", color: "#CB171E" },
  { name: "SQLite", group: "Creative", mono: "Lite", color: "#003B57" },
  { name: "VS Code", group: "Creative", mono: "VS", color: "#0065A9" },
  { name: "Redux", group: "Creative", mono: "Rx", color: "#764ABC" },
];
