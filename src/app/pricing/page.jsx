"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@relume_io/relume-ui";
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

      {/* Pricing */}
      <section className="bg-neutral-50 px-[5%] py-20 md:py-28">
        <div className="container max-w-3xl">
          <div className="mb-12 text-center md:mb-16">
            <Label>{p.simple.label}</Label>
            <h2 className="mb-3 text-4xl font-black md:text-5xl">{p.simple.heading}</h2>
            <p className="text-neutral-500 md:text-lg">{p.simple.sub}</p>
          </div>

          {/* Two price tiles */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 mb-8">
            <div className="rounded-2xl border border-neutral-200 bg-white p-8 text-center shadow-card">
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-neutral-400">{p.simple.consultLabel}</p>
              <div className="mb-3 text-6xl font-black text-brand md:text-7xl">{p.simple.consultPrice}</div>
              <p className="text-sm text-neutral-500 leading-relaxed">{p.simple.consultSub}</p>
            </div>
            <div className="rounded-2xl border-2 border-brand/25 bg-brand/5 p-8 text-center shadow-card">
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-neutral-400">{p.simple.sessionLabel}</p>
              <div className="mb-3 text-6xl font-black text-brand md:text-7xl">{p.simple.sessionPrice}</div>
              <p className="text-sm text-neutral-500 leading-relaxed">{p.simple.sessionSub}</p>
            </div>
          </div>

          {/* Includes list */}
          <div className="rounded-2xl border border-neutral-100 bg-white p-8 shadow-card md:p-10">
            <h3 className="mb-6 text-base font-bold text-neutral-800">{p.simple.includes.heading}</h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {p.simple.includes.items.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm">
                  <BiCheck className="mt-0.5 size-5 shrink-0 text-brand" />
                  <span className="text-neutral-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-6 text-center text-xs font-semibold uppercase tracking-widest text-neutral-400">
            {p.simple.note}
          </p>

          <div className="mt-8 flex justify-center">
            <Link href="/contact">
              <Button className="rounded-full px-10 py-3 text-base font-semibold shadow-sm hover:shadow-md transition-shadow">
                {p.simple.cta}
              </Button>
            </Link>
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
