import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend",
    items: ["React.js", "Material UI", "Bootstrap", "Tailwind CSS", "Framer Motion", "JavaScript"],
  },
  {
    title: "Backend",
    items: ["Node.js", "PostgreSQL", "MongoDB", "Spring Boot", "MySQL", "Firebase", "Express.js"],
  },
  {
    title: "Tooling",
    items: ["Vite", "REST APIs", "AWS", "Vercel", "GitHub", "Git", "vs code"],
  },
];

export function SkillsSection() {
  return (
    <section className="snap-section flex flex-col justify-center px-6 md:px-20 py-20 bg-background/20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="font-mono text-xs text-accent-lime uppercase tracking-widest mb-4">
          02 · Stack
        </p>
        <h2 className="font-display text-5xl md:text-6xl font-light max-w-3xl leading-tight">
          Tools I reach for<span className="italic"> daily.</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10 max-w-6xl rounded-lg overflow-hidden shadow-xs">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: gi * 0.15 }}
            className="bg-card/85 dark:bg-background/70 p-8 md:p-10 backdrop-blur-md"
          >
            <div className="flex items-baseline justify-between mb-8">
              <h3 className="font-display text-2xl">{group.title}</h3>
              <span className="font-mono text-xs text-foreground/40">0{gi + 1}</span>
            </div>
            <ul className="space-y-3">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 font-mono text-sm text-foreground/80 group"
                >
                  <span className="text-accent-lime group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
