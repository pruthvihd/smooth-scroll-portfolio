import { motion } from "framer-motion";

export function AboutSection() {
  const stats = [
    { value: "6+", label: "Years experience" },
    { value: "40+", label: "Projects shipped" },
    { value: "12", label: "Happy clients" },
  ];

  return (
    <section className="snap-section flex flex-col justify-center px-6 md:px-20 py-20 bg-surface">
      <div className="max-w-6xl grid md:grid-cols-12 gap-12 items-start">
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-7 md:col-start-6 space-y-6 text-lg text-foreground/75 leading-relaxed"
        >
          <p>
            I'm a developer based in Berlin, focused on the intersection of design systems,
            performance, and meaningful interaction. I work with founders and design teams to
            translate ambitious ideas into production-ready interfaces.
          </p>
          <p>
            My toolkit centers on TypeScript, React, and modern build tooling — but the craft
            matters more than the stack. I care about typography, motion, and the small
            details that make products feel alive.
          </p>

          <div className="grid grid-cols-3 gap-6 pt-10 border-t border-foreground/10">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-4xl md:text-5xl text-accent-lime font-light">{s.value}</div>
                <div className="font-mono text-[11px] uppercase tracking-widest text-foreground/50 mt-2">
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
