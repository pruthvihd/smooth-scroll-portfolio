import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="snap-section relative flex flex-col justify-center px-6 md:px-20 grid-bg overflow-hidden">
      <div className="absolute top-8 left-6 md:left-20 font-mono text-xs text-foreground/50 uppercase tracking-[0.3em]">
        Portfolio · 2026
      </div>

      <div className="absolute top-8 right-20 md:right-32 font-mono text-xs text-foreground/50">
        <span className="text-accent-lime">●</span> Available for work
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl"
      >
        <p className="font-mono text-sm text-accent-lime mb-6">// hello world</p>
        <h1 className="font-display font-light text-[14vw] md:text-[9vw] leading-[0.9] tracking-tight">
          Alex<br />
          <span className="italic font-extralight">Mercer</span>
          <span className="text-accent-lime">.</span>
        </h1>
        <div className="mt-10 flex flex-col md:flex-row md:items-end gap-6 md:gap-16 max-w-3xl">
          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
            Full-stack web developer crafting fast, accessible, and elegantly engineered
            digital experiences from concept to deployment.
          </p>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/50"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest">Scroll</span>
        <ArrowDown className="w-4 h-4" />
      </motion.div>
    </section>
  );
}
