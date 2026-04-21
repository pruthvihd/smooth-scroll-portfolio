import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    no: "01",
    title: "Lumen Analytics",
    tags: ["React", "D3", "Node"],
    description: "Real-time analytics dashboard for SaaS teams with custom visualizations.",
    year: "2025",
  },
  {
    no: "02",
    title: "Foldspace Studio",
    tags: ["Next.js", "Three.js"],
    description: "Interactive 3D portfolio site for an architecture firm in Copenhagen.",
    year: "2025",
  },
  {
    no: "03",
    title: "Marrow Commerce",
    tags: ["Remix", "Stripe", "Postgres"],
    description: "Headless commerce platform powering a niche apparel brand.",
    year: "2024",
  },
  {
    no: "04",
    title: "Echo CMS",
    tags: ["TypeScript", "tRPC"],
    description: "Open-source content platform for independent writers and journalists.",
    year: "2024",
  },
];

export function ProjectsSection() {
  return (
    <section className="snap-section flex flex-col justify-center px-6 md:px-20 py-20 bg-surface">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-end justify-between mb-12 max-w-6xl"
      >
        <div>
          <p className="font-mono text-xs text-accent-lime uppercase tracking-widest mb-4">03 · Selected work</p>
          <h2 className="font-display text-5xl md:text-6xl font-light leading-tight">
            Recent<span className="italic"> projects.</span>
          </h2>
        </div>
      </motion.div>

      <div className="max-w-6xl border-t border-foreground/10">
        {projects.map((p, i) => (
          <motion.a
            key={p.no}
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="group grid grid-cols-12 gap-4 items-center py-6 border-b border-foreground/10 hover:bg-background/40 transition-colors px-2 -mx-2"
          >
            <span className="col-span-1 font-mono text-xs text-foreground/40">{p.no}</span>
            <h3 className="col-span-4 font-display text-2xl md:text-3xl group-hover:text-accent-lime transition-colors">
              {p.title}
            </h3>
            <p className="hidden md:block col-span-4 text-sm text-foreground/60">{p.description}</p>
            <div className="col-span-2 hidden md:flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 border border-foreground/20 rounded-full text-foreground/60">
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
