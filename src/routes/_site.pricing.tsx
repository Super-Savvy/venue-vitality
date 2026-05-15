import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Check, ChevronDown, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/_site/pricing")({
  component: Pricing,
  head: () => ({
    meta: [
      { title: "Investment & Packages · Big Country Event Center" },
      { name: "description", content: "Transparent pricing for weddings, galas and celebrations at Abilene's premier modern industrial venue. Weekday, weekend and Saturday packages." },
    ],
  }),
});

const packages = [
  {
    name: "Weekday Intimate",
    price: "2,500",
    period: "Mon — Thu",
    features: ["10-hour venue access", "Round tables & black bistro chairs", "Catering prep kitchen access", "Standard lighting suite"],
  },
  {
    name: "Weekend Signature",
    price: "4,800",
    period: "Fri or Sun",
    featured: true,
    features: ["14-hour venue access", "Full bridal suite & groom's lounge", "On-site venue manager", "Customizable LED accent lighting"],
  },
  {
    name: "Premier Saturday",
    price: "5,500",
    period: "Sat & Holidays",
    features: ["All Signature features included", "Rehearsal hour (when available)", "Champagne toast setup", "Flexible vendor load-in"],
  },
];

const faqs = [
  { q: "What is the maximum capacity?", a: "Up to 250 guests for a seated dinner with dance floor, or 400 for a cocktail reception." },
  { q: "Do you offer military discounts?", a: "Yes. As a veteran-owned business, active duty and retired military receive 10% off all weekend rental packages." },
  { q: "Can we bring our own catering?", a: "Outside catering from licensed and insured vendors is welcome. We provide a fully equipped catering prep kitchen." },
  { q: "Is a deposit required?", a: "A refundable security deposit secures your date and is returned within 7 days post-event, pending no damages." },
];

function Pricing() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="bg-ivory">
      {/* Header */}
      <section className="relative pt-40 pb-24 px-6 md:px-12 bg-ink text-ivory overflow-hidden noise">
        <div className="absolute inset-0 grid-paper opacity-30" />
        <div className="relative max-w-[1400px] mx-auto grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-9 space-y-6">
            <span className="eyebrow text-brass">Investment — Vol. 03</span>
            <h1 className="display text-6xl md:text-[9rem] leading-[0.9]">
              Transparent
              <br />
              <span className="italic brass-text">to the dollar.</span>
            </h1>
          </div>
          <div className="md:col-span-3 space-y-3">
            <div className="rule" />
            <p className="text-ivory/70 leading-relaxed text-sm">
              No upsells, no surprise fees. Three deliberate packages, designed around how Abilene actually celebrates.
            </p>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-3 gap-px bg-border">
          {packages.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-10 md:p-12 flex flex-col ${
                p.featured ? "bg-ink text-ivory" : "bg-ivory text-ink"
              }`}
            >
              {p.featured && (
                <div className="absolute -top-px right-0 bg-brass text-ink font-mono text-[10px] uppercase tracking-[0.22em] px-4 py-2">
                  Most Booked
                </div>
              )}
              <div className="flex items-center justify-between mb-10">
                <span className={`font-mono text-[10px] uppercase tracking-[0.22em] ${p.featured ? "text-brass" : "text-brass-deep"}`}>
                  / 0{i + 1} · {p.period}
                </span>
              </div>
              <h3 className="display text-3xl mb-2">{p.name}</h3>
              <div className="flex items-baseline gap-2 mt-6 mb-2">
                <span className={`font-mono text-sm ${p.featured ? "text-ivory/60" : "text-muted-foreground"}`}>$</span>
                <span className="display text-7xl">{p.price}</span>
              </div>
              <div className={`text-xs font-mono uppercase tracking-[0.22em] ${p.featured ? "text-ivory/60" : "text-muted-foreground"}`}>
                Starting investment
              </div>

              <div className={`my-10 h-px ${p.featured ? "bg-white/15" : "bg-border"}`} />

              <ul className="space-y-4 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check size={16} className={p.featured ? "text-brass mt-1" : "text-brass-deep mt-1"} strokeWidth={2} />
                    <span className={`text-sm leading-relaxed ${p.featured ? "text-ivory/85" : "text-muted-foreground"}`}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`mt-10 ${p.featured ? "btn-brass" : "btn-ink"}`}
              >
                {p.featured ? "Secure date" : "Check availability"} <ArrowUpRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 md:px-12 bg-bone">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4 space-y-4">
            <span className="eyebrow">§ FAQ</span>
            <h2 className="display text-5xl md:text-6xl text-ink">
              Asked &amp; <span className="italic brass-text">answered.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Still curious? Send a note — we'll usually reply within an afternoon.
            </p>
          </div>
          <div className="md:col-span-8 divide-y divide-border border-y border-border">
            {faqs.map((f, i) => {
              const open = openIdx === i;
              return (
                <div key={i}>
                  <button
                    onClick={() => setOpenIdx(open ? null : i)}
                    className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                  >
                    <span className="display text-2xl text-ink group-hover:text-brass-deep transition">
                      {f.q}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`text-brass-deep shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 text-muted-foreground leading-relaxed max-w-2xl">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-ivory py-24 px-6 md:px-12">
        <div className="max-w-[1100px] mx-auto text-center space-y-8">
          <h2 className="display text-5xl md:text-7xl">
            Hold your <span className="italic brass-text">date.</span>
          </h2>
          <p className="text-ivory/70 max-w-xl mx-auto">
            Saturdays in spring and fall book months in advance. We'd love to walk you through the room.
          </p>
          <Link to="/contact" className="btn-brass">Begin a conversation</Link>
        </div>
      </section>
    </div>
  );
}
