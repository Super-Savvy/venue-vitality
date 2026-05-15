import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import React, { useState } from "react";
import { Phone, MapPin, Clock, Send, CheckCircle2, ArrowUpRight, Navigation } from "lucide-react";

export const Route = createFileRoute("/_site/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact & Tour · Big Country Event Center" },
      { name: "description", content: "Plan your event at Big Country Event Center in Abilene, TX. Schedule a private tour, ask about availability, or start a quote." },
    ],
  }),
});

const eventTypes = ["Quinceañera", "Military Event", "Wedding / Anniversary", "Corporate Gala", "Birthday Party", "Other"];

function Contact() {
  const [state, setState] = useState<"idle" | "sending" | "success">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = data.get("email") as string;
    if (!email || !email.includes("@")) {
      setErrors({ email: "Please enter a valid email address." });
      return;
    }
    setErrors({});
    setState("sending");
    setTimeout(() => setState("success"), 1400);
  };

  return (
    <div className="bg-ivory">
      {/* Header */}
      <section className="relative pt-40 pb-20 px-6 md:px-12 overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-9 space-y-6">
            <span className="eyebrow">Plan your milestone — Vol. 04</span>
            <h1 className="display text-6xl md:text-[9rem] leading-[0.9] text-ink">
              Begin a
              <br />
              <span className="italic brass-text">conversation.</span>
            </h1>
          </div>
          <div className="md:col-span-3 space-y-2">
            <div className="rule" />
            <p className="text-muted-foreground leading-relaxed">
              Tell us about your event. We typically respond within 24 hours — often same day.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12 items-start">
          {/* Form */}
          <div className="lg:col-span-7 bg-ink text-ivory p-8 md:p-14 relative noise">
            {state === "success" ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-16 space-y-6"
              >
                <CheckCircle2 size={56} className="text-brass mx-auto" strokeWidth={1.2} />
                <h2 className="display text-4xl md:text-5xl">Message received.</h2>
                <p className="text-ivory/70 max-w-md mx-auto leading-relaxed">
                  Thank you. Our team will review your details and contact you within 24 hours to begin planning.
                </p>
                <button onClick={() => setState("idle")} className="btn-ghost text-ivory">
                  Send another note
                </button>
              </motion.div>
            ) : (
              <form onSubmit={submit} className="space-y-10">
                <div className="flex items-baseline justify-between border-b border-white/15 pb-4">
                  <h2 className="display text-3xl">Inquiry / 01</h2>
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-brass">Required</span>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <Field label="Full Name" name="name" required placeholder="Jane Doe" />
                  <Field label="Email" name="email" required type="email" placeholder="jane@example.com" error={errors.email} />
                  <Field label="Phone" name="phone" required type="tel" placeholder="+1 (325) 000-0000" />
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[10px] uppercase tracking-[0.22em] text-brass">Event Type</label>
                    <select
                      name="type"
                      className="bg-transparent border-0 border-b border-white/30 py-3 text-ivory text-lg focus:outline-none focus:border-brass appearance-none"
                    >
                      {eventTypes.map((t) => (
                        <option key={t} value={t} className="bg-ink text-ivory">{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[10px] uppercase tracking-[0.22em] text-brass">Your Vision</label>
                  <textarea
                    name="vision"
                    rows={4}
                    placeholder="Tell us about the date, the headcount, the feeling…"
                    className="bg-transparent border-0 border-b border-white/30 py-3 text-ivory text-lg focus:outline-none focus:border-brass resize-none placeholder:text-ivory/30"
                  />
                </div>

                <button
                  type="submit"
                  disabled={state === "sending"}
                  className="btn-brass w-full md:w-auto disabled:opacity-50"
                >
                  {state === "sending" ? (
                    <>Transmitting<motion.span animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}><Send size={14} /></motion.span></>
                  ) : (
                    <>Send inquiry <Send size={14} /></>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="frame">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZmKqu5rmeW9QHC8a_eowDm-z69erNth3x5HrIffb31YgC1DBxHX-A26vjXcSBmZs8fKJUTOnygU4fW3d2elJs7BmF1NRytKME6K3OiHnlWb8u5jkuWFXeNz9KZ1fq8wNn7FDLJIH9hD3QA0w3ZvUZmj9w9Irq6hH8w7iZ2CyUXbyfYe093iDxwRxHJ8gv74BJilYbWwhVgu1KZI4wPh-nABr0uMC_e1DM5jGmh7Nsy2yOj602hZarMoytbjc1IbgNnCLjkoBP4ary"
                alt="Venue interior"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>

            {[
              { icon: Phone, label: "Direct Line", value: "+1 325-307-9499", href: "tel:+13253079499" },
              { icon: MapPin, label: "Address", value: "1102 S 32nd St, Abilene, TX 79602", href: "https://www.google.com/maps/search/?api=1&query=1102+S+32nd+St,+Abilene,+TX+79602" },
              { icon: Clock, label: "Hours", value: "Open until 10pm daily" },
            ].map((c) => {
              const Tag: any = c.href ? "a" : "div";
              return (
                <Tag
                  key={c.label}
                  {...(c.href ? { href: c.href, target: c.href.startsWith("http") ? "_blank" : undefined, rel: "noreferrer" } : {})}
                  className="block bg-bone p-6 group hover:bg-ink hover:text-ivory transition-colors duration-300"
                >
                  <div className="flex items-start gap-4">
                    <c.icon size={20} className="text-brass-deep group-hover:text-brass mt-1" />
                    <div className="flex-1">
                      <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground group-hover:text-ivory/60">
                        {c.label}
                      </div>
                      <div className="display text-2xl mt-1">{c.value}</div>
                    </div>
                    {c.href && <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition" />}
                  </div>
                </Tag>
              );
            })}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="px-6 md:px-12 pb-32">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-4 space-y-6">
            <span className="eyebrow">§ Location</span>
            <h2 className="display text-5xl md:text-6xl text-ink">
              Inside the <span className="italic brass-text">Knights of Columbus</span>.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              A landmark Abilene building, beautifully redone — easy to find, easy to love.
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=1102+S+32nd+St,+Abilene,+TX+79602"
              target="_blank"
              rel="noreferrer"
              className="btn-ink inline-flex"
            >
              Get directions <ArrowUpRight size={14} />
            </a>
          </div>
          <div className="lg:col-span-8 relative h-[460px] overflow-hidden group frame">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCZLHem6nXgUitM0-gaxQPyqzOAr2Y4Bay2hwVb8TydrSPCHdHP5wRDG6v8HgCWecM5zlkE9TTG8iFc3y4fQn3mGw6kw5rw2Ud-cSrDhaoLXTcV90wYJm9MyU770y8qcpqsVmiUBk0ad0cyGcD1RmeYlDmqF0tXKwwmVd895g0JxXk8iZQ0Eb7hkIKdDf2Ik8SrYqKRHWCRlu54rWuSvMtEXps0jkiI5yicsHxFU3i0fTIYPsWgzFvXtMD8ELNHqXG6yV1uJda1SyF"
              alt="Map"
              className="w-full h-full object-cover transition-transform duration-[8s] group-hover:scale-110"
            />
            <div className="absolute top-6 left-6 bg-ink text-ivory px-5 py-3 font-mono text-[10px] uppercase tracking-[0.22em] flex items-center gap-3">
              <Navigation size={12} className="text-brass" fill="currentColor" />
              The Knights of Columbus Building
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({
  label, name, required, type = "text", placeholder, error,
}: { label: string; name: string; required?: boolean; type?: string; placeholder?: string; error?: string }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-mono text-[10px] uppercase tracking-[0.22em] text-brass">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className={`bg-transparent border-0 border-b py-3 text-ivory text-lg focus:outline-none placeholder:text-ivory/30 ${
          error ? "border-destructive" : "border-white/30 focus:border-brass"
        }`}
      />
      {error && <span className="text-destructive text-xs font-mono">{error}</span>}
    </div>
  );
}
