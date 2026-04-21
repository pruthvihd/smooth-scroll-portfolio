import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const links = [
  { label: "Email", value: "alex@mercer.dev", href: "mailto:alex@mercer.dev" },
  { label: "GitHub", value: "@alexmercer", href: "#" },
  { label: "LinkedIn", value: "in/alexmercer", href: "#" },
  { label: "Twitter", value: "@alex_codes", href: "#" },
];

export function ContactSection() {
  return (
    <section className="snap-section flex flex-col justify-between px-6 md:px-20 py-20 grid-bg">
      <div className="flex-1 flex flex-col justify-center max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-xs text-accent-lime uppercase tracking-widest mb-6">04 · Contact</p>
          <h2 className="font-display text-[12vw] md:text-[8vw] font-light leading-[0.95] tracking-tight">
            Let's build<br />
            <span className="italic">something</span><br />
            <span className="text-accent-lime">together.</span>
          </h2>

          <a
            href="mailto:alex@mercer.dev"
            className="inline-flex items-center gap-3 mt-12 px-8 py-4 bg-accent-lime text-accent-lime-foreground font-mono text-sm uppercase tracking-widest rounded-full hover:scale-105 transition-transform"
          >
            Start a project <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-foreground/10 max-w-6xl">
        {links.map((l) => (
          <a key={l.label} href={l.href} className="group">
            <div className="font-mono text-[11px] uppercase tracking-widest text-foreground/50">{l.label}</div>
            <div className="mt-2 text-base font-display group-hover:text-accent-lime transition-colors">
              {l.value}
            </div>
          </a>
        ))}
      </div>

      <div className="mt-12 flex justify-between font-mono text-[11px] uppercase tracking-widest text-foreground/40 max-w-6xl">
        <span>© 2026 Alex Mercer</span>
        <span>Crafted with care</span>
      </div>
    </section>
  );
}
