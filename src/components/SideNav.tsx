import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

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
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed right-6 md:right-10 top-1/2 -translate-y-1/2 z-50 hidden sm:block">
      <ul className="flex flex-col gap-5 items-end">
        {sections.map((s) => {
          const isActive = active === s.id;
          return (
            <li
              key={s.id}
              className="flex items-center gap-3 justify-end group cursor-pointer"
              onClick={() => onNavigate(s.id)}
            >
              <span
                className={`font-mono text-[11px] uppercase tracking-widest transition-all ${
                  isActive
                    ? "text-accent-lime opacity-100"
                    : "text-foreground/50 opacity-0 group-hover:opacity-100"
                }`}
              >
                {s.label}
              </span>
              <motion.span
                animate={{
                  scale: isActive ? 1 : 0.6,
                  backgroundColor: isActive ? "var(--accent-lime)" : "var(--foreground)",
                }}
                className="block w-2.5 h-2.5 rounded-full"
                style={{ opacity: isActive ? 1 : 0.4 }}
              />
            </li>
          );
        })}
        <li className="pt-2">
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="flex items-center justify-center w-7 h-7 rounded-full border border-foreground/15 bg-surface/80 hover:bg-surface hover:border-accent-lime/60 backdrop-blur-md text-foreground/70 hover:text-accent-lime transition-all duration-300 cursor-pointer hover:scale-110 active:scale-95 shadow-sm"
          >
            {theme === "dark" ? <Sun className="w-3.5 h-3.5 text-accent-lime" /> : <Moon className="w-3.5 h-3.5 text-accent-lime" />}
          </button>
        </li>
      </ul>
    </nav>
  );
}
