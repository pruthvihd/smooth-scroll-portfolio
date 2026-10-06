import { motion } from "framer-motion";
import { ArrowDown, Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

export function HeroSection() {
  const { theme, toggleTheme } = useTheme();

  return (
    <section className="snap-section relative flex flex-col justify-center overflow-hidden px-6 md:px-20 bg-background/25">
      <div className="absolute top-8 left-6 md:left-20 font-mono text-xs text-foreground/50 uppercase tracking-[0.3em]">
        Portfolio · Website
      </div>

      <div className="absolute top-8 right-16 md:right-28 flex flex-col items-end gap-2.5 z-30">
        <div className="font-mono text-xs text-foreground/60 flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-lime opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-lime"></span>
          </span>
          <span>Available for work</span>
        </div>

        {/* Theme toggle option below 'Available for work' */}
        <button
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          className="group flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-foreground/15 bg-surface/80 hover:bg-surface hover:border-accent-lime/60 backdrop-blur-md font-mono text-[11px] text-foreground/80 hover:text-foreground transition-all duration-300 shadow-sm cursor-pointer hover:scale-105 active:scale-95"
        >
          {theme === "dark" ? (
            <>
              <Sun className="w-3.5 h-3.5 text-accent-lime group-hover:rotate-45 transition-transform duration-300" />
              <span className="uppercase tracking-wider text-[10px] font-medium">Light mode</span>
            </>
          ) : (
            <>
              <Moon className="w-3.5 h-3.5 text-accent-lime group-hover:-rotate-12 transition-transform duration-300" />
              <span className="uppercase tracking-wider text-[10px] font-medium">Dark mode</span>
            </>
          )}
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl"
      >
        <p className="font-mono text-sm text-accent-lime mb-6">// hello world</p>
        <h1 className="font-display font-light text-[14vw] md:text-[9vw] leading-[0.9] tracking-tight">
          PRUTHVI
          <br />
          <span className="italic font-extralight">H D</span>
          <span className="text-accent-lime">.</span>
        </h1>
        <div className="mt-10 flex flex-col md:flex-row md:items-end gap-6 md:gap-16 max-w-3xl">
          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
            Full-stack web developer crafting fast, accessible, and elegantly engineered digital
            experiences from concept to deployment.
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
