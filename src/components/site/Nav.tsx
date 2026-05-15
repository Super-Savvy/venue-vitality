import { Link, useLocation } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Venue", to: "/" as const },
  { name: "Events", to: "/gallery" as const },
  { name: "Investment", to: "/pricing" as const },
  { name: "Contact", to: "/contact" as const },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ivory/85 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-brass-deep border border-brass-deep/40 px-2 py-1">
            EST · ABL
          </span>
          <span className="display text-xl md:text-2xl text-ink">
            Big Country
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => {
            const active = location.pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className="relative px-4 py-2 font-mono text-[11px] uppercase tracking-[0.22em] text-ink/70 hover:text-ink transition"
              >
                {l.name}
                {active && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute left-3 right-3 -bottom-0.5 h-px bg-brass"
                  />
                )}
              </Link>
            );
          })}
          <Link to="/contact" className="btn-ink ml-4">
            Book a Tour
          </Link>
        </div>

        <button
          className="md:hidden p-2 text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label="menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-ivory border-b border-border"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="font-mono text-xs uppercase tracking-[0.22em] text-ink/80"
                >
                  {l.name}
                </Link>
              ))}
              <Link to="/contact" className="btn-ink mt-2">
                Book a Tour
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
