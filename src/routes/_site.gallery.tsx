import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Award } from "lucide-react";

export const Route = createFileRoute("/_site/gallery")({
  component: Gallery,
  head: () => ({
    meta: [
      { title: "Events & Gallery · Big Country Event Center" },
      { name: "description", content: "A look inside Big Country Event Center — the hall, the lighting, the moments. Weddings, quinceañeras, military balls, and corporate galas in Abilene, TX." },
    ],
  }),
});

const items = [
  { id: 1, title: "The Grand Hall", description: "Spacious floor plans for medium to large gatherings.", category: "Venue", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7HMkdlRe9DjBmzhPZIOAL6lqlzeSMup3xJQwxAu5RMFrJfuzDjNjqWXIa1IMeE6rL5ti-jyMgn0y-QUXMDLiF6QOCsoRBhjyT4onH6WKg5-1SvHkQj8vAJ9CeyW5LIq1AGOG0pnzdDZCQEB-mXD-CbOHySTe5OSqV83qvf5R0Wd7a8GW5StcO-h-1fIB5pYdUqVEihFsjLdnUZpJ-Dw7wO-kOMDNX64TFT3WgbvPI_z9CEI9058qeYVId6E4YgDAagVFU3zkYQ7TW" },
  { id: 2, title: "Atmospheric Lighting", description: "Programmable LED accents and crystal fixtures.", category: "Decor", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAFWWacAfpvc3CF8-6kZj2k0gLoVy6XbY3pWbOB-eL7htq51cI8zncx9cmKdhJ8cBt34wkvcyIwqPels4NOk7vZr70EXC7lhMHSIyIX1bWcT89MIM5fiya2H48CqpDGaYOmMddKwzucHLYGXU8x4UFM4MHqkmzvh_qjS59eTpoDq8CaYDeRQNKevayFBWo6hHFA0xaUruBu5Z3tyMKmpg4gpSnvy6y8jGPATIw19qGzBjG4GjrFrdo6Ol6nQf-8OdLjJ1M24TsiCb5o" },
  { id: 3, title: "Exquisite Fixtures", description: "Intricate lighting details that catch the eye.", category: "Detail", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYKhSZmQmpkctUMUuhN7kwtbZ4Ki79qFHHhGoSRUOFNVjCZLbQJvIuO4XKjWf21iGQYUjrKF35Z0t47xn2f_cXEPwWWXMBWTZFa94qiEdlAWVX99aKLpNraHqZev3IQNltBjyUOW90XBFq-qE_mBC7PTLYSCHu_O3GBdVV-t0Nt9k1NZBEwxLutpYTuUuRhnU7rzLqBdHX_6XiQ_zFkHrPwYWJA81WaCEQ3gk_h7La7iz-DusBx-xO2VLu1qGo2XXmt3f5TDP5g05C" },
  { id: 4, title: "Table Settings", description: "Signature styling for celebratory warmth.", category: "Detail", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcjrZBRYQLnBbMX865hgekNnYwpScHDWxG7yKfAb1TtDTE0vIroNIxe2_I5mwTAomZLMvbGvpBmjwvOUpSIDdEIryMOaXC0QD5vSNG4_v9LLl5del9HXsK-Wt8G9NdsWqQ3vXdEi20hMyp1RZC2PVnab30WafCnMYFwnFgeH8R7LSQ2ksxYJo3rC4BesCieb11roztnfJ4xomKHoQWPc3drHA4ljv_ITqkK9ZVwzGDO7F0iqmqAwkC2_cBSL77UXq6dBC0Fae02KEu" },
  { id: 5, title: "Quinceañera", description: "A sophisticated celebration in a modern industrial hall.", category: "Events", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvi8Jj8yfw2Lu5S8Z6s0QLRPXcC1jn-Jyy6pOLOPEeACNv6B7hBglW3ybKvGNKSVGjnKJFG9ZGUCv0JIY32Vg5ilFA4UNijVazZ26XujmemaIyuqPl4Iyi9eP3jA6vWBKm6MPPuLWW4lwSa-Gp8Or7KLLPU41guiqdMSpTk_f1dP4LGqiWeerzSDfoX9O2vZxDK07rE-grFUX3CWcHyEd_jKB2zQ79blU0iUvZhGWxK5uJH3ycC83Iru2Ikt49xsGVEcFrXolgpaVi" },
];

function Gallery() {
  const [sel, setSel] = useState<number | null>(null);
  const item = items.find((i) => i.id === sel);
  const nav = (d: number) => {
    if (sel === null) return;
    const idx = items.findIndex((i) => i.id === sel);
    setSel(items[(idx + d + items.length) % items.length].id);
  };

  return (
    <div className="bg-ivory pt-32">
      {/* Header */}
      <section className="relative px-6 md:px-12 pb-20">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8 space-y-6">
            <span className="eyebrow">Gallery — Vol. 02</span>
            <h1 className="display text-6xl md:text-[9rem] text-ink leading-[0.9]">
              Versatile <span className="italic brass-text">elegance</span>
              <br />
              for every milestone.
            </h1>
          </div>
          <div className="md:col-span-4 space-y-4">
            <div className="rule" />
            <p className="text-muted-foreground leading-relaxed">
              From intimate baby showers to grand quinceañeras — our modernized hall in Abilene is the canvas. The story belongs to you.
            </p>
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-brass-deep">
              {items.length} Featured · 2024 — 2025
            </div>
          </div>
        </div>
      </section>

      {/* Mosaic */}
      <section className="px-6 md:px-12 pb-32">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-12 auto-rows-auto gap-3 md:gap-4">
          {items.map((it, idx) => {
            const layouts = [
              "md:col-span-7 aspect-[16/11]",
              "md:col-span-5 aspect-[4/5]",
              "md:col-span-4 aspect-[4/5]",
              "md:col-span-4 aspect-[4/5]",
              "md:col-span-4 aspect-[4/5]",
            ];
            return (
              <motion.button
                key={it.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                onClick={() => setSel(it.id)}
                className={`group relative overflow-hidden text-left ${layouts[idx]}`}
              >
                <img src={it.image} alt={it.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-70 group-hover:opacity-100 transition" />
                <div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-[0.22em] text-brass">
                  / {String(idx + 1).padStart(2, "0")} · {it.category}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-ivory">
                  <h3 className="display text-2xl md:text-3xl">{it.title}</h3>
                  <p className="text-ivory/70 text-sm mt-2">{it.description}</p>
                </div>
              </motion.button>
            );
          })}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-12 bg-ink text-ivory p-12 md:p-16 flex flex-col md:flex-row gap-10 md:items-center md:justify-between"
          >
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-brass border border-brass/40 px-3 py-1.5">
                <Award size={12} /> Veteran Owned
              </div>
              <h3 className="display text-4xl md:text-5xl">Our promise to every guest.</h3>
              <p className="text-ivory/70 leading-relaxed">
                Professionalism and precision in every detail. We go above and beyond — that's the standard, not the upgrade.
              </p>
            </div>
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ivory/50 md:text-right space-y-1">
              <div>Mission Brief</div>
              <div className="text-brass">/ 2025-001</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {sel !== null && item && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-ink/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12"
            onClick={() => setSel(null)}
          >
            <button onClick={() => setSel(null)} className="absolute top-6 right-6 text-ivory hover:text-brass transition">
              <X size={32} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); nav(-1); }} className="absolute left-4 md:left-8 text-ivory hover:text-brass transition">
              <ChevronLeft size={48} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); nav(1); }} className="absolute right-4 md:right-8 text-ivory hover:text-brass transition">
              <ChevronRight size={48} />
            </button>
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={item.image} alt={item.title} className="w-full max-h-[75vh] object-contain" />
              <div className="text-center mt-6 text-ivory">
                <span className="eyebrow text-brass">{item.category}</span>
                <h3 className="display text-3xl mt-2">{item.title}</h3>
                <p className="text-ivory/70 mt-2">{item.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
