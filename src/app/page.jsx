"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@relume_io/relume-ui";
import { BiSolidStar, BiPhone, BiCheck } from "react-icons/bi";
import { RxChevronRight } from "react-icons/rx";
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

export default function HomePage() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const h = t.home;
  const c = t.common;

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero — only full-bleed image on the page */}
      <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden">
        <img src="/images/gen-hero.jpg" alt="SL Therapy" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/90 via-black/60 to-black/25" />
        <div className="relative z-10 mx-auto max-w-4xl px-[5%] py-24 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-brand">
            El Paso, TX — {lang === "es" ? "Fisioterapia Deportiva" : "Sports Physical Therapy"}
          </p>
          <h1 className="mb-6 text-5xl font-black leading-[1.05] text-white drop-shadow-2xl md:text-7xl lg:text-8xl">
            {h.hero.heading}
          </h1>
          <p className="mx-auto mb-10 max-w-xl text-base text-neutral-200 md:text-lg">
            {h.hero.sub}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact">
              <Button variant="primary" className="rounded-full px-8 py-3 text-base font-semibold shadow-lg">
                {c.bookCta}
              </Button>
            </Link>
            <a href={`tel:${c.phone}`} className="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3 text-base font-semibold text-white backdrop-blur hover:bg-white/20 transition-colors">
              <BiPhone className="size-4" /> {c.phone}
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <span className="h-10 w-px animate-bounce bg-white/30" />
        </div>
      </section>

      {/* How it works — 3 steps, no images */}
      <section className="bg-white px-[5%] py-20 md:py-28">
        <div className="container max-w-4xl">
          <div className="mb-12">
            <Label>{h.howItWorks.label}</Label>
            <h2 className="text-4xl font-black md:text-5xl">{h.howItWorks.heading}</h2>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {h.howItWorks.steps.map((step, i) => (
              <div key={i} className="relative">
                {i < 2 && (
                  <RxChevronRight className="absolute -right-5 top-2 hidden size-5 text-neutral-300 md:block" />
                )}
                <span className="mb-4 block text-6xl font-black leading-none text-brand/15 md:text-7xl">
                  {step.number}
                </span>
                <h3 className="mb-2 text-xl font-black">{step.heading}</h3>
                <p className="text-neutral-500 leading-relaxed">{step.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services — clean text cards, no background images */}
      <section className="bg-neutral-100 px-[5%] py-20 md:py-28">
        <div className="container">
          <div className="mb-12 text-center md:mb-14">
            <Label>{h.services.label}</Label>
            <h2 className="mb-3 text-4xl font-black md:text-5xl">{h.services.heading}</h2>
            <p className="mx-auto max-w-md text-neutral-500 md:text-lg">{h.services.sub}</p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {h.serviceGroups.map((group, i) => (
              <div key={i} className="rounded-2xl border border-neutral-200 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                <div className="mb-5 flex items-center gap-3 border-b border-neutral-100 pb-4">
                  <span className="h-3 w-3 rounded-full bg-brand" />
                  <h3 className="text-sm font-bold uppercase tracking-wide text-neutral-800">{group.heading}</h3>
                </div>
                <ul className="space-y-3">
                  {group.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm">
                      <BiCheck className="mt-0.5 size-4 shrink-0 text-brand" />
                      <span className="text-neutral-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/services">
              <Button variant="secondary" className="rounded-full px-8">{c.learnMore}</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats — numbers only, dark background */}
      <section className="bg-neutral-950 px-[5%] py-20 md:py-28">
        <div className="container">
          <div className="mb-12 md:mb-14">
            <Label>{h.stats.label}</Label>
            <h2 className="mb-3 max-w-xl text-4xl font-black text-white md:text-5xl">{h.stats.heading}</h2>
            <p className="max-w-md text-neutral-400 md:text-lg">{h.stats.sub}</p>
          </div>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            {h.stats.items.map((stat, i) => (
              <div key={i} className="border-l-2 border-brand/40 pl-6">
                <div className="mb-1 text-6xl font-black text-brand md:text-7xl">{stat.number}</div>
                <h4 className="mb-1 font-bold text-white md:text-lg">{stat.heading}</h4>
                <p className="text-sm text-neutral-400">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — quote cards, initials only */}
      <section className="bg-white px-[5%] py-20 md:py-28">
        <div className="container">
          <div className="mb-12 text-center md:mb-14">
            <Label>{lang === "es" ? "Testimonios" : "Testimonials"}</Label>
            <h2 className="mb-3 text-4xl font-black md:text-5xl">{h.testimonials.heading}</h2>
            <p className="text-neutral-500 md:text-lg">{h.testimonials.sub}</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {h.testimonials.items.map((item, i) => (
              <div key={i} className="flex flex-col justify-between rounded-2xl border border-neutral-100 bg-neutral-50 p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover md:p-8">
                <div>
                  <div className="mb-4 flex gap-0.5">
                    {[...Array(5)].map((_, s) => <BiSolidStar key={s} className="size-4 text-accent" />)}
                  </div>
                  <blockquote className="mb-6 text-base leading-relaxed text-neutral-700">
                    "{item.quote}"
                  </blockquote>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand/10">
                    <span className="text-sm font-bold text-brand">{item.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-bold text-neutral-900">{item.name}</p>
                    <p className="text-sm text-neutral-500">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-neutral-100 px-[5%] py-20 md:py-28">
        <div className="container mx-auto max-w-2xl">
          <div className="mb-12 text-center">
            <Label>{lang === "es" ? "FAQ" : "FAQ"}</Label>
            <h2 className="mb-3 text-4xl font-black md:text-5xl">{h.faq.heading}</h2>
            <p className="text-neutral-500">{h.faq.sub}</p>
          </div>
          <div className="divide-y divide-neutral-200">
            {h.faq.items.map((item, i) => (
              <div key={i} className="py-6">
                <h3 className="mb-2.5 text-base font-bold md:text-lg">{item.q}</h3>
                <p className="text-neutral-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-2xl bg-white p-8 text-center shadow-card border border-neutral-200">
            <h4 className="mb-2 text-xl font-bold">{h.faq.stillQuestions}</h4>
            <p className="mb-6 text-neutral-500">{h.faq.callUs}</p>
            <Link href="/contact">
              <Button variant="secondary" className="rounded-full px-7">{c.contactUs}</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA — subtle bg image, dark */}
      <section className="relative overflow-hidden bg-neutral-950 px-[5%] py-24 md:py-32">
        <img src="/images/gen-cta-bg.jpg" alt="" className="absolute inset-0 size-full object-cover opacity-15" />
        <div className="relative z-10 container text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-brand">
            {lang === "es" ? "Próximo Paso" : "Next Step"}
          </p>
          <h2 className="mb-5 text-4xl font-black text-white md:text-6xl">{h.cta.heading}</h2>
          <p className="mx-auto mb-10 max-w-md text-neutral-300 md:text-lg">{h.cta.sub}</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact">
              <Button variant="primary" className="rounded-full px-8 py-3 text-base font-semibold shadow-lg">
                {c.bookCta}
              </Button>
            </Link>
            <a href={`tel:${c.phone}`} className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3 text-base text-white backdrop-blur hover:bg-white/20 transition-colors">
              <BiPhone className="size-4" /> {c.phone}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
