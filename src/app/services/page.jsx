"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@relume_io/relume-ui";
import { BiCheck, BiPhone } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
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

export default function ServicesPage() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const s = t.services;
  const c = t.common;

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Header */}
      <section className="relative flex min-h-[55vh] items-center justify-center overflow-hidden">
        <img src="/images/gen-services-header.jpg" alt="Servicios" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/30" />
        <div className="relative z-10 mx-auto max-w-3xl px-[5%] py-20 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-brand">SL Therapy</p>
          <h1 className="mb-5 text-5xl font-black leading-tight text-white drop-shadow-2xl md:text-7xl">
            {s.header.heading}
          </h1>
          <p className="text-base text-neutral-200 md:text-lg">{s.header.sub}</p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-neutral-50 px-[5%] py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-2 lg:gap-20">
            <div>
              <Label>{s.intro.label}</Label>
              <h2 className="mb-4 text-4xl font-black md:text-5xl lg:text-6xl">{s.intro.heading}</h2>
              <p className="mb-10 text-neutral-600 md:text-lg leading-relaxed">{s.intro.sub}</p>
              <div className="flex items-center gap-10 mb-6">
                <div>
                  <div className="text-5xl font-black text-brand md:text-6xl">{s.intro.consultPrice}</div>
                  <div className="mt-1 text-sm font-semibold text-neutral-500">{s.intro.consultLabel}</div>
                </div>
                <div className="h-14 w-px bg-neutral-300" />
                <div>
                  <div className="text-5xl font-black text-brand md:text-6xl">{s.intro.price}</div>
                  <div className="mt-1 text-sm font-semibold text-neutral-500">{s.intro.priceLabel}</div>
                </div>
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400">{s.intro.note}</p>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-card">
              <img
                src="/images/prevencion-1.jpeg"
                alt="SL Therapy"
                className="size-full aspect-[4/3] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service categories */}
      <section className="bg-white px-[5%] py-20 md:py-28">
        <div className="container">
          <div className="mb-12 text-center md:mb-16">
            <Label>{s.cats.label}</Label>
            <h2 className="mb-3 text-4xl font-black md:text-5xl">{s.cats.heading}</h2>
            <p className="mx-auto max-w-xl text-neutral-500 md:text-lg">{s.cats.sub}</p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {s.cats.items.map((cat, i) => (
              <div key={i} className="rounded-2xl border border-neutral-100 bg-neutral-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                <div className="mb-4 flex items-center gap-2.5 border-b border-neutral-200 pb-4">
                  <span className="h-3 w-3 rounded-full bg-brand" />
                  <h3 className="text-sm font-bold uppercase tracking-wide text-neutral-800">{cat.label}</h3>
                </div>
                <ul className="space-y-2.5">
                  {cat.services.map((item, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm">
                      <BiCheck className="mt-0.5 size-4 shrink-0 text-brand" />
                      <span className="text-neutral-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we treat */}
      <section className="bg-neutral-50 px-[5%] py-20 md:py-28">
        <div className="container mx-auto max-w-3xl text-center">
          <Label>{s.treats.label}</Label>
          <h2 className="mb-3 text-4xl font-black md:text-5xl">{s.treats.heading}</h2>
          <p className="mb-10 text-neutral-500 md:text-lg">{s.treats.sub}</p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {s.treats.items.map((item, i) => (
              <span key={i} className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-neutral-950 px-[5%] py-16 md:py-20">
        <div className="container text-center">
          <h2 className="mb-3 text-3xl font-black text-white md:text-4xl">{t.home.cta.heading}</h2>
          <p className="mb-7 text-neutral-400">{t.home.cta.sub}</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact">
              <Button variant="primary" className="rounded-full px-7 font-semibold">{c.bookCta}</Button>
            </Link>
            <a href="https://wa.me/19152169504" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-2.5 font-semibold text-white hover:bg-[#1fba59] transition-colors">
              <FaWhatsapp className="size-5" /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
