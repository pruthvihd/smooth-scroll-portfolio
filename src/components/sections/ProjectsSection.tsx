import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    no: "01",
    title: "Nextpath-AI",
    tags: ["React", "Node.js", "Gemini AI", "MongoDB"],
    description: "AI-driven career advisor with resume analysis, job matching, and intelligent guidance.",
    year: "2025",
    link: "https://github.com/pruthvihd/Nextpath-AI",
  },
  {
    no: "02",
    title: "Campus-Connect-Hub",
    tags: ["React", "Node.js", "Express", "PostgreSQL"],
    description: "Campus collaboration and event discovery platform connecting students and resources.",
    year: "2026",
    link: "https://github.com/pruthvihd/Campus-Connect-Hub",
  },
  {
    no: "03",
    title: "Fresh Market",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    description: "Direct farmer-to-consumer marketplace with real-time freshness scoring and transparent pricing.",
    year: "2026",
    link: "https://github.com/pruthvihd/fresh-market",
  },
  {
    no: "04",
    title: "Handify",
    tags: ["React", "Node.js", "Express", "JWT"],
    description: "Full-stack authentication system with secure session management and OTP-based password recovery.",
    year: "2026",
    link: "https://github.com/pruthvihd/Handify",
  },
];

export function ProjectsSection() {
  return (
    <section className="snap-section flex flex-col justify-center px-6 md:px-20 py-20 bg-background/20 backdrop-blur-[1px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-end justify-between mb-12 max-w-6xl"
      >
        <div>
          <p className="font-mono text-xs text-accent-lime uppercase tracking-widest mb-4">
            03 · Selected work
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-light leading-tight">
            Recent<span className="italic"> projects.</span>
          </h2>
        </div>
      </motion.div>

      <div className="max-w-6xl border-t border-foreground/10">
        {projects.map((p, i) => (
          <motion.a
            key={p.no}
            href={p.link}
            target={p.link && p.link !== "#" ? "_blank" : undefined}
            rel={p.link && p.link !== "#" ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="group grid grid-cols-12 gap-4 items-center py-6 border-b border-foreground/10 hover:bg-foreground/[0.04] transition-colors px-3 rounded-lg"
          >
            <span className="col-span-1 font-mono text-xs text-foreground/40">{p.no}</span>
            <h3 className="col-span-4 font-display text-2xl md:text-3xl group-hover:text-accent-lime transition-colors">
              {p.title}
            </h3>
            <p className="hidden md:block col-span-4 text-sm text-foreground/60">{p.description}</p>
            <div className="col-span-2 hidden md:flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 border border-foreground/20 rounded-full text-foreground/60"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="col-span-7 md:col-span-1 flex items-center justify-end gap-3 font-mono text-xs text-foreground/50">
              {p.year}
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent-lime transition-all" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
