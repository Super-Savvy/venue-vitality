import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowUpRight, Heart, Briefcase, PartyPopper, Star, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/_site/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Big Country Event Center · Abilene's Modern Industrial Venue" },
      { name: "description", content: "A 7,500 sq ft veteran-owned event venue in Abilene, TX. Modern industrial gala aesthetic for weddings, quinceañeras, military balls and corporate events." },
    ],
  }),
});

const HERO_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuCZskfhPKerMD74E8r0ZkYosAAmkXBr7ZAj8Ppu8GhOpcGb86gltyCwUnskcO7UpM9Er5c_1GIaFKPVlidY3izoAoHQkIcMHnW3LxpqlNWGxXSHjmM7wzcBAfcNN1sdWaFsnaa_vZ22XG9QnknCaQezaGjsjRRLrgsCKQCAkOg29OndYzgw1x-B_K_qTk_TqpMLPkz7ITlaMQJrXsIc8VorsPYfjw5aASjUqKUJtbrtBpJ5ubGeaWkw7p1xAx5ysCzQlwjP2GJzIoua";
const INTERIOR_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuAMtkBgIYpokMJW_5ibj3zSJ9IRhiHyU82IopINKHQCgtzgIwoAoktyFZKV6hiS6rTjTeoZzXPoG04RrKBTnDp5fA7flwPXCX69U_kpNS6iMSYe55XV_nST2L904dgAZylub_TAkz-xNQkllDfmjLT02HwVhAolWPqi3LvdTeHW8sfYkfo72bsOI4_-scLui7dWWUgYdZ-y_vQGm7uGQw072BpwT5c8S3DwBbL5MS0Q7xfxHpQfniXxNCRu8WBvG5GDhshZYSk65bhU";
const SPACE_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuDISetFAaKifcTl_LFW_QsgazV52R3o57nliDHBj_Y_tQ4XM1e89UdCyMjLm9wHhQAgypi3msA_y5Le1G_1LTOq1s66OFqNHBsRBJgCuB3_qiGs4IdLVHBHu6i0iDW4Heeoey4gLsYUH_wioGay6buXPF-KACA2oAxP0Hn0sH_JfstmEeCC_KEzZByImiy5ODkrKs2V2QDG_V6BkjhXQWE0eg-RTCcli6wfz9p8qEYes36S92oqJfXMxkE8r5EXaT6bM9opaKOA2E77";
const DETAIL_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuBZmKqu5rmeW9QHC8a_eowDm-z69erNth3x5HrIffb31YgC1DBxHX-A26vjXcSBmZs8fKJUTOnygU4fW3d2elJs7BmF1NRytKME6K3OiHnlWb8u5jkuWFXeNz9KZ1fq8wNn7FDLJIH9hD3QA0w3ZvUZmj9w9Irq6hH8w7iZ2CyUXbyfYe093iDxwRxHJ8gv74BJilYbWwhVgu1KZI4wPh-nABr0uMC_e1DM5jGmh7Nsy2yOj602hZarMoytbjc1IbgNnCLjkoBP4ary";

const marqueeWords = [
  "Weddings", "Quinceañeras", "Military Balls", "Corporate Galas",
  "Anniversaries", "Receptions", "Fundraisers", "Birthdays",
];

const stats = [
  { k: "7,500", l: "Sq Ft of Hall" },
  { k: "250", l: "Seated Guests" },
  { k: "400", l: "Cocktail Capacity" },
  { k: "4.6★", l: "Locally Rated" },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-end overflow-hidden bg-ink text-ivory noise">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <img src={HERO_IMG} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-transparent" />
        </motion.div>

        {/* corner brackets */}
        <div className="absolute top-24 left-6 md:left-12 right-6 md:right-12 flex justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-brass z-10">
          <span>N · 32°26′</span>
          <span>Est. Abilene</span>
          <span className="hidden md:inline">W · 99°43′</span>
        </div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 pb-20 md:pb-28">
          <div className="grid md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-9 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-4"
              >
                <span className="h-px w-16 bg-brass" />
                <span className="eyebrow text-brass">Vol. 01 — The Modern Industrial Gala</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="display text-[clamp(3.5rem,11vw,11rem)] text-ivory"
              >
                Hold court
                <br />
                <span className="italic brass-text font-light">in steel &amp; light.</span>
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="md:col-span-3 space-y-6"
            >
              <p className="text-ivory/70 text-base leading-relaxed">
                Abilene's premier event hall — 7,500 square feet of charcoal architecture, crystal fixtures, and military-grade hospitality.
              </p>
              <div className="flex flex-col gap-3">
                <Link to="/contact" className="btn-brass w-full">
                  Reserve a date <ArrowUpRight size={14} />
                </Link>
                <Link to="/gallery" className="btn-ghost text-ivory border-ivory/40 w-full">
                  Tour the venue
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="bg-ink text-ivory border-y border-white/10 py-6 overflow-hidden">
        <div className="flex gap-12 animate-[marquee_40s_linear_infinite] whitespace-nowrap">
          {[...marqueeWords, ...marqueeWords, ...marqueeWords].map((w, i) => (
            <span key={i} className="display text-3xl md:text-4xl text-ivory/40 flex items-center gap-12">
              {w}
              <span className="text-brass">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="bg-ivory">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
          {stats.map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-ivory p-8 md:p-10 flex flex-col gap-2"
            >
              <span className="display text-5xl md:text-6xl text-ink">{s.k}</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{s.l}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WELCOME / EDITORIAL */}
      <section className="relative py-32 px-6 md:px-12 bg-bone">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5 order-2 md:order-1 frame">
            <img src={DETAIL_IMG} alt="Venue interior detail" className="w-full aspect-[4/5] object-cover" />
          </div>
          <div className="md:col-span-7 order-1 md:order-2 md:pl-16 space-y-8">
            <span className="eyebrow">§ 01 — The Venue</span>
            <h2 className="display text-5xl md:text-7xl text-ink">
              A room with the <span className="italic brass-text">posture</span> of a gala
              and the <span className="italic">warmth</span> of West Texas.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Inside the Knights of Columbus building, deep charcoal beams meet crystal chandeliers, programmable LEDs, and a polished floor built for first dances and grand entrances alike.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4 border-t border-border">
              <div className="space-y-1 pt-6">
                <div className="display text-3xl text-ink">4.6 ★</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Top rated locally</div>
              </div>
              <div className="space-y-1 pt-6">
                <div className="display text-3xl text-ink">Veteran Owned</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Operated with precision</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MOSAIC */}
      <section className="bg-ivory py-32 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-end justify-between mb-12 gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="eyebrow">§ 02 — Inside the hall</span>
              <h2 className="display text-5xl md:text-6xl text-ink">A space that earns the photograph.</h2>
            </div>
            <Link to="/gallery" className="hidden md:inline-flex btn-ghost text-ink">
              Full Gallery <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="grid md:grid-cols-12 gap-3 md:gap-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-8 group relative overflow-hidden aspect-[16/10]"
            >
              <img src={INTERIOR_IMG} alt="" className="w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 text-ivory">
                <span className="eyebrow text-brass">Interior</span>
                <h3 className="display text-3xl md:text-4xl mt-2">Modern Industrial Elegance</h3>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-4 bg-ink text-ivory p-10 flex flex-col justify-between aspect-[16/10] md:aspect-auto"
            >
              <Star className="text-brass" />
              <div className="space-y-3">
                <span className="eyebrow text-brass">Military Appreciation</span>
                <h3 className="display text-3xl">10% off for those who serve.</h3>
                <p className="text-ivory/60 text-sm leading-relaxed">
                  Active and retired military receive a discount on every weekend rental. Family is family.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="md:col-span-4 bg-bone p-10 flex flex-col justify-between aspect-[4/5] md:aspect-auto"
            >
              <ShieldCheck className="text-brass-deep" />
              <div className="space-y-3">
                <span className="eyebrow">Our commitment</span>
                <h3 className="display text-3xl text-ink">Veteran-owned precision.</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Your event isn't a date on a calendar — it's a mission we execute with discipline.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-8 group relative overflow-hidden aspect-[21/10]"
            >
              <img src={SPACE_IMG} alt="" className="w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-r from-ink/70 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 text-ivory">
                <span className="eyebrow text-brass">The Space</span>
                <h3 className="display text-3xl md:text-4xl mt-2">7,500 sq ft of possibility.</h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-bone py-32 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20 space-y-4">
            <span className="eyebrow">§ 03 — Built for</span>
            <h2 className="display text-5xl md:text-7xl text-ink">Life's grandest moments.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-border">
            {[
              { icon: Heart, title: "Weddings", num: "01", body: "From intimate ceremonies to grand receptions — a sophisticated backdrop for your love story." },
              { icon: Briefcase, title: "Corporate", num: "02", body: "Galas, summits and holiday parties with industrial character and uncompromising professionalism.", dark: true },
              { icon: PartyPopper, title: "Celebrations", num: "03", body: "Quinceañeras, military balls, milestone birthdays — curated with absolute attention to detail." },
            ].map((s) => (
              <div
                key={s.title}
                className={`group relative p-12 transition-all duration-500 ${
                  s.dark ? "bg-ink text-ivory" : "bg-ivory text-ink"
                }`}
              >
                <div className="flex items-start justify-between mb-12">
                  <s.icon className={s.dark ? "text-brass" : "text-brass-deep"} size={40} strokeWidth={1.2} />
                  <span className={`font-mono text-[10px] uppercase tracking-[0.22em] ${s.dark ? "text-ivory/50" : "text-muted-foreground"}`}>
                    Service / {s.num}
                  </span>
                </div>
                <h3 className="display text-4xl mb-4">{s.title}</h3>
                <p className={`leading-relaxed mb-10 ${s.dark ? "text-ivory/70" : "text-muted-foreground"}`}>
                  {s.body}
                </p>
                <Link
                  to="/gallery"
                  className={`inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] ${
                    s.dark ? "text-brass" : "text-brass-deep"
                  } group-hover:gap-4 transition-all`}
                >
                  Explore {s.title} <ArrowUpRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative bg-ink text-ivory py-32 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 grid-paper opacity-30" />
        <div className="absolute -left-20 top-0 bottom-0 w-px bg-brass/30" />
        <div className="absolute -right-20 top-0 bottom-0 w-px bg-brass/30" />

        <div className="relative max-w-[1100px] mx-auto text-center space-y-10">
          <span className="eyebrow text-brass">§ 04 — The next chapter</span>
          <h2 className="display text-5xl md:text-8xl">
            Your masterpiece
            <br />
            <span className="italic brass-text">deserves a stage.</span>
          </h2>
          <p className="text-ivory/70 text-lg max-w-xl mx-auto">
            Calendars fill quickly through gala season. Lock in your date and let our team begin the choreography.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-brass">Check availability</Link>
            <Link to="/pricing" className="btn-ghost text-ivory">View packages</Link>
          </div>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 pt-8 font-mono text-[10px] uppercase tracking-[0.22em] text-ivory/50">
            <span>Bridal suites</span>
            <span className="text-brass">·</span>
            <span>Vendor flexibility</span>
            <span className="text-brass">·</span>
            <span>Full AV support</span>
          </div>
        </div>
      </section>
    </>
  );
}
