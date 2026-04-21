import { motion } from "framer-motion";
import portrait from "@/assets/portrait.jpg";

export function AboutSection() {
  const stats = [
    { value: "6+", label: "Years experience" },
    { value: "40+", label: "Projects shipped" },
    { value: "12", label: "Happy clients" },
  ];

  return (
    <section className="snap-section flex flex-col justify-center px-6 md:px-20 py-20 bg-surface">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-12 gap-10 md:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-4"
        >
          <p className="font-mono text-xs text-accent-lime uppercase tracking-widest mb-4">01 · About</p>
          <h2 className="font-display text-5xl md:text-6xl font-light leading-tight">
            Building<br />
            <span className="italic">the web,</span><br />
            piece by piece.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:col-span-3 relative max-w-[240px] md:max-w-none mx-auto w-full"
        >
          <div className="absolute -inset-1 border border-accent-lime/40 rounded-sm translate-x-2 translate-y-2 md:translate-x-3 md:translate-y-3 pointer-events-none" />
          <img
            src={portrait}
            alt="Portrait of Alex Mercer"
            width={896}
            height={1216}
            loading="lazy"
            className="relative w-full aspect-[3/4] object-cover object-center rounded-sm grayscale hover:grayscale-0 transition-all duration-700"
          />
          <div className="relative mt-3 font-mono text-[10px] uppercase tracking-widest text-foreground/40 flex justify-between">
            <span>Alex M.</span>
            <span>Berlin · DE</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-5 space-y-5 text-base md:text-lg text-foreground/75 leading-relaxed"
        >
          <p>
            I'm a developer based in Berlin, focused on the intersection of design systems,
            performance, and meaningful interaction.
          </p>
          <p>
            My toolkit centers on TypeScript, React, and modern build tooling — but the craft
            matters more than the stack.
          </p>

          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-foreground/10">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl md:text-4xl text-accent-lime font-light">{s.value}</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/50 mt-2">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
