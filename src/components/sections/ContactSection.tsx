import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const links = [
  { label: "Email", value: "pruthvihd15@gmail.com", href: "mailto:pruthvihd15@gmail.com" },
  { label: "GitHub", value: "@pruthvihd", href: "https://github.com/pruthvihd" },
  {
    label: "LinkedIn",
    value: "in/pruthvi-h-d",
    href: "https://www.linkedin.com/in/pruthvi-h-d-214446293?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  { label: "Instagram", value: "@pruthvi__15", href: "https://www.instagram.com/pruthvi__15" },
];

export function ContactSection() {
  return (
    <section className="snap-section flex flex-col justify-between px-6 md:px-20 py-20 bg-background/25">
      <div className="flex-1 flex flex-col justify-center max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-xs text-accent-lime uppercase tracking-widest mb-6">
            04 · Contact
          </p>
          <h2 className="font-display text-[12vw] md:text-[8vw] font-light leading-[0.95] tracking-tight">
            Let's build
            <br />
            <span className="italic">something</span>
            <br />
            <span className="text-accent-lime">together.</span>
          </h2>

          <a
            href="mailto:pruthvihd15@gmail.com"
            className="inline-flex items-center gap-3 mt-12 px-8 py-4 bg-accent-lime text-accent-lime-foreground font-mono text-sm uppercase tracking-widest rounded-full hover:scale-105 transition-transform"
          >
            Start a project <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-foreground/10 max-w-6xl">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target={l.href.startsWith("http") ? "_blank" : undefined}
            rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="group"
          >
            <div className="font-mono text-[11px] uppercase tracking-widest text-foreground/50">
              {l.label}
            </div>
            <div className="mt-2 text-base font-display group-hover:text-accent-lime transition-colors">
              {l.value}
            </div>
          </a>
        ))}
      </div>

      <div className="mt-12 flex justify-between font-mono text-[11px] uppercase tracking-widest text-foreground/40 max-w-6xl">
        <span>© 2026 Pruthvi H D</span>
        <span>Crafted with care</span>
      </div>
    </section>
  );
}
