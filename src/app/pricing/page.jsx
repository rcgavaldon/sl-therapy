"use client";

import React from "react";
import Link from "next/link";
import { Button, Tabs, TabsContent, TabsList, TabsTrigger } from "@relume_io/relume-ui";
import { BiCheck, BiPhone } from "react-icons/bi";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

function Label({ children }) {
  return (
    <div className="mb-3 flex items-center gap-3 md:mb-4">
      <span className="h-px w-8 bg-brand" />
      <p className="text-sm font-bold uppercase tracking-widest text-brand">{children}</p>
    </div>
  );
}

export default function PricingPage() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const p = t.pricing;
  const c = t.common;

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Header */}
      <section className="relative flex min-h-[55vh] items-center justify-center overflow-hidden">
        <img src="/images/gen-pricing-header.jpg" alt="Precios" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/30" />
        <div className="relative z-10 mx-auto max-w-3xl px-[5%] py-20 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-brand">SL Therapy</p>
          <h1 className="mb-5 text-5xl font-black leading-tight text-white drop-shadow-2xl md:text-7xl">
            {p.header.heading}
          </h1>
          <p className="text-base text-neutral-200 md:text-lg">{p.header.sub}</p>
        </div>
      </section>

      {/* Pricing section */}
      <section className="bg-white px-[5%] py-20 md:py-28">
        <div className="container max-w-4xl">
          <div className="mb-12 text-center md:mb-16">
            <Label>{p.section.label}</Label>
            <h2 className="mb-3 text-4xl font-black md:text-5xl">{p.section.heading}</h2>
            <p className="text-neutral-500 md:text-lg">{p.section.sub}</p>
          </div>

          <Tabs defaultValue="eval">
            <div className="mb-12 flex justify-center">
              <TabsList className="rounded-full border border-neutral-200 bg-neutral-50 p-1">
                <TabsTrigger value="eval" className="rounded-full px-8 py-2.5 text-sm font-semibold transition-all data-[state=active]:bg-neutral-900 data-[state=active]:text-white data-[state=active]:shadow-sm">
                  {p.section.tab1}
                </TabsTrigger>
                <TabsTrigger value="rehab" className="rounded-full px-8 py-2.5 text-sm font-semibold transition-all data-[state=active]:bg-neutral-900 data-[state=active]:text-white data-[state=active]:shadow-sm">
                  {p.section.tab2}
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="eval" className="grid grid-cols-1 gap-6 data-[state=active]:animate-tabs md:grid-cols-2">
              {p.section.evalCards.map((card, i) => (
                <div key={i} className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-8 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover">
                  <div className="mb-8 text-center">
                    <h3 className="mb-4 text-base font-bold text-neutral-700">{card.heading}</h3>
                    <div className="text-5xl font-black text-brand md:text-6xl">{card.price}</div>
                    <p className="mt-2 text-sm text-neutral-400">{lang === "es" ? "por sesión" : "per session"}</p>
                  </div>
                  <ul className="mb-8 flex-1 space-y-3">
                    {card.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm">
                        <BiCheck className="mt-0.5 size-5 shrink-0 text-brand" />
                        <span className="text-neutral-600">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button className="w-full rounded-full font-semibold">{card.cta}</Button>
                  </Link>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="rehab" className="grid grid-cols-1 gap-6 data-[state=active]:animate-tabs md:grid-cols-2">
              {p.section.rehabCards.map((card, i) => (
                <div key={i} className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-8 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover">
                  <div className="mb-8 text-center">
                    <h3 className="mb-4 text-base font-bold text-neutral-700">{card.heading}</h3>
                    <div className="text-5xl font-black text-brand md:text-6xl">{card.price}</div>
                    {card.note && <p className="mt-2 text-sm font-medium text-accent">{card.note}</p>}
                  </div>
                  <ul className="mb-8 flex-1 space-y-3">
                    {card.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm">
                        <BiCheck className="mt-0.5 size-5 shrink-0 text-brand" />
                        <span className="text-neutral-600">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button className="w-full rounded-full font-semibold">{card.cta}</Button>
                  </Link>
                </div>
              ))}
            </TabsContent>
          </Tabs>

          {/* No hidden fees callout */}
          <div className="mt-10 rounded-2xl bg-neutral-50 border border-neutral-100 p-6 text-center">
            <p className="text-sm text-neutral-500">
              {lang === "es"
                ? "Sin costos ocultos. Agenda tu consulta gratis y recibe un presupuesto personalizado."
                : "No hidden fees. Book your free consultation and get a personalized quote."}
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-neutral-950 px-[5%] py-24">
        <img src="/images/gen-cta-bg.jpg" alt="" className="absolute inset-0 size-full object-cover opacity-15" />
        <div className="relative z-10 container text-center">
          <h2 className="mb-4 text-4xl font-black text-white md:text-5xl">{p.cta.heading}</h2>
          <p className="mb-8 text-neutral-300 md:text-lg">{p.cta.sub}</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact">
              <Button variant="primary" className="rounded-full px-8 font-semibold">{c.bookCta}</Button>
            </Link>
            <a href={`tel:${c.phone}`} className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-2.5 text-white backdrop-blur hover:bg-white/20 transition-colors">
              <BiPhone className="size-4" /> {c.phone}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
