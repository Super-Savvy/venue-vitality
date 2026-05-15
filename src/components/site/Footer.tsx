import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-ink text-ivory overflow-hidden">
      <div className="absolute inset-0 grid-paper opacity-40" />
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 py-20">
        <div className="grid md:grid-cols-12 gap-12 border-b border-white/10 pb-16">
          <div className="md:col-span-5 space-y-6">
            <div className="display text-5xl md:text-6xl leading-[0.9]">
              Where precision
              <br />
              meets <span className="brass-text italic">celebration.</span>
            </div>
            <p className="text-ivory/60 max-w-md leading-relaxed">
              A veteran-owned, modern industrial gala venue tucked inside the
              Knights of Columbus building in Abilene, Texas.
            </p>
            <Link to="/contact" className="btn-brass">
              Schedule a private tour
            </Link>
          </div>

          <div className="md:col-span-3 space-y-4">
            <div className="eyebrow text-brass">Contact</div>
            <a href="tel:+13253079499" className="flex items-start gap-3 text-ivory/80 hover:text-brass transition">
              <Phone size={16} className="mt-1 text-brass" />
              <span className="font-mono text-sm">+1 325-307-9499</span>
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=1102+S+32nd+St,+Abilene,+TX+79602"
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-3 text-ivory/80 hover:text-brass transition"
            >
              <MapPin size={16} className="mt-1 text-brass" />
              <span className="text-sm leading-relaxed">
                1102 S 32nd St
                <br />
                Abilene, TX 79602
              </span>
            </a>
            <div className="flex items-start gap-3 text-ivory/80">
              <Clock size={16} className="mt-1 text-brass" />
              <span className="text-sm">Open until 10pm daily</span>
            </div>
          </div>

          <div className="md:col-span-4 space-y-4">
            <div className="eyebrow text-brass">Sitemap</div>
            <div className="grid grid-cols-2 gap-2">
              {[
                ["Venue", "/"],
                ["Events", "/gallery"],
                ["Investment", "/pricing"],
                ["Contact", "/contact"],
              ].map(([n, to]) => (
                <Link
                  key={to}
                  to={to as "/"}
                  className="display text-2xl text-ivory hover:text-brass transition"
                >
                  {n}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.22em] text-ivory/50">
          <span>© {new Date().getFullYear()} Big Country Event Center</span>
          <span>Veteran Owned · Operated with precision</span>
          <span>Abilene · Texas · 79602</span>
        </div>
      </div>
    </footer>
  );
}
