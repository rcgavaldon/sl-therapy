"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import { BiPhone } from "react-icons/bi";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

function Label({ children, light = false }) {
  return (
    <div className="mb-3 flex items-center gap-3 md:mb-4">
      <span className="h-px w-8 bg-brand" />
      <p className={`text-sm font-bold uppercase tracking-widest text-brand`}>{children}</p>
    </div>
  );
}

function ServiceCard({ heading, sub, image, tag, href = "/contact" }) {
  return (
    <div className="group relative min-h-[22rem] overflow-hidden rounded-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-card-hover">
      <img
        src={`/images/${image || "physical-therapy.jpeg"}`}
        alt={heading}
        className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/15" />
      <div className="relative z-10 flex h-full flex-col justify-end p-6 md:p-7">
        {tag && (
          <span className="mb-2 self-start rounded-full bg-brand/90 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-white">
            {tag}
          </span>
        )}
        <h3 className="mb-1.5 text-xl font-black text-white leading-snug">{heading}</h3>
        <p className="mb-4 text-sm text-neutral-300 leading-relaxed">{sub}</p>
        <Link href={href} className="flex items-center gap-1.5 text-sm font-semibold text-white/70 hover:text-white transition-colors">
          {translations["es"].common.learnMore} <RxChevronRight className="size-3.5" />
        </Link>
      </div>
    </div>
  );
}

function ServiceSection({ label, heading, sub, cards, dark = false }) {
  const cols = cards.length >= 4 ? "sm:grid-cols-2 lg:grid-cols-4" : cards.length === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2";
  return (
    <section className={`px-[5%] py-20 md:py-28 ${dark ? "bg-neutral-950" : "bg-white"}`}>
      <div className="container">
        <div className="mb-12 md:mb-16">
          <Label>{label}</Label>
          <h2 className={`mb-3 text-4xl font-black md:text-5xl lg:text-6xl ${dark ? "text-white" : ""}`}>{heading}</h2>
          <p className={`max-w-md md:text-lg ${dark ? "text-neutral-400" : "text-neutral-500"}`}>{sub}</p>
        </div>
        <div className={`grid grid-cols-1 gap-5 ${cols}`}>
          {cards.map((card, i) => <ServiceCard key={i} {...card} />)}
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const s = t.services;
  const c = t.common;

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Page Header */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden">
        <img src="/images/gen-services-header.jpg" alt="Servicios" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/30" />
        <div className="relative z-10 mx-auto max-w-3xl px-[5%] py-20 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-brand">SL Therapy</p>
          <h1 className="mb-5 text-5xl font-black leading-tight text-white drop-shadow-2xl md:text-7xl lg:text-8xl">
            {s.header.heading}
          </h1>
          <p className="text-base text-neutral-200 md:text-lg">{s.header.sub}</p>
        </div>
      </section>

      <ServiceSection label={s.evaluation.label} heading={s.evaluation.heading} sub={s.evaluation.sub}
        cards={s.evaluation.cards.map((c) => ({ ...c, image: "gen-evaluation.jpg" }))} />

      <ServiceSection label={s.rehabilitation.label} heading={s.rehabilitation.heading} sub={s.rehabilitation.sub}
        cards={s.rehabilitation.cards} dark />

      <ServiceSection label={s.specialized.label} heading={s.specialized.heading} sub={s.specialized.sub}
        cards={s.specialized.cards} />

      <ServiceSection label={s.performance.label} heading={s.performance.heading} sub={s.performance.sub}
        cards={s.performance.cards} dark />

      <ServiceSection label={s.recovery.label} heading={s.recovery.heading} sub={s.recovery.sub}
        cards={s.recovery.cards} />

      {/* CTA */}
      <section className="relative overflow-hidden bg-neutral-950 px-[5%] py-24">
        <img src="/images/gen-cta-bg.jpg" alt="" className="absolute inset-0 size-full object-cover opacity-15" />
        <div className="relative z-10 container text-center">
          <h2 className="mb-4 text-4xl font-black text-white md:text-5xl">{t.home.cta.heading}</h2>
          <p className="mb-8 text-neutral-300 md:text-lg">{t.home.cta.sub}</p>
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
