import { motion } from "framer-motion";

interface Section {
  id: string;
  label: string;
}

interface SideNavProps {
  sections: Section[];
  active: string;
  onNavigate: (id: string) => void;
}

export function SideNav({ sections, active, onNavigate }: SideNavProps) {
  return (
    <nav className="fixed right-6 md:right-10 top-1/2 -translate-y-1/2 z-50 hidden sm:block">
      <ul className="flex flex-col gap-5">
        {sections.map((s) => {
          const isActive = active === s.id;
          return (
            <li key={s.id} className="flex items-center gap-3 justify-end group cursor-pointer" onClick={() => onNavigate(s.id)}>
              <span
                className={`font-mono text-[11px] uppercase tracking-widest transition-all ${
                  isActive ? "text-accent-lime opacity-100" : "text-foreground/50 opacity-0 group-hover:opacity-100"
                }`}
              >
                {s.label}
              </span>
              <motion.span
                animate={{ scale: isActive ? 1 : 0.6, backgroundColor: isActive ? "var(--accent-lime)" : "var(--foreground)" }}
                className="block w-2.5 h-2.5 rounded-full"
                style={{ opacity: isActive ? 1 : 0.4 }}
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
