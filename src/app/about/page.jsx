"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@relume_io/relume-ui";
import { BiPhone } from "react-icons/bi";
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

export default function AboutPage() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const a = t.about;
  const c = t.common;

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Header */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden">
        <img src="/images/gen-about-header.jpg" alt="About SL Therapy" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/30" />
        <div className="relative z-10 mx-auto max-w-2xl px-[5%] py-16 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-brand">SL Therapy</p>
          <h1 className="mb-3 text-4xl font-black text-white drop-shadow-2xl md:text-6xl">{a.header.heading}</h1>
          <p className="text-neutral-300">{a.header.sub}</p>
        </div>
      </section>

      {/* About — therapist + philosophy combined */}
      <section className="bg-white px-[5%] py-16 md:py-24">
        <div className="container max-w-3xl">
          <div className="mb-10 flex items-start gap-6">
            <div className="size-20 shrink-0 overflow-hidden rounded-full ring-4 ring-brand/20 shadow-lg">
              <img src="/images/logo-light.jpeg" alt={a.team.member.name} className="size-full object-cover" />
            </div>
            <div>
              <h2 className="mb-0.5 text-2xl font-black">{a.team.member.name}</h2>
              <p className="mb-3 text-sm font-semibold text-brand">{a.team.member.role}</p>
              <p className="text-neutral-600 leading-relaxed">{a.team.member.bio}</p>
            </div>
          </div>
          <div className="rounded-2xl bg-neutral-950 p-8 md:p-10">
            <Label>{a.philosophy.label}</Label>
            <h3 className="mb-4 text-2xl font-black text-white md:text-3xl">{a.philosophy.heading}</h3>
            <p className="text-neutral-300 leading-relaxed">{a.philosophy.body}</p>
          </div>
        </div>
      </section>

      {/* Stats — condensed */}
      <section className="bg-neutral-100 px-[5%] py-14 md:py-20">
        <div className="container max-w-3xl">
          <div className="grid grid-cols-3 gap-6 text-center">
            {a.stats.items.map((stat, i) => (
              <div key={i}>
                <div className="mb-1 text-4xl font-black text-brand md:text-5xl">{stat.number}</div>
                <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">{stat.heading}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-neutral-950 px-[5%] py-16 md:py-20">
        <div className="container text-center">
          <h2 className="mb-3 text-3xl font-black text-white md:text-4xl">{a.cta.heading}</h2>
          <p className="mb-7 text-neutral-400">{a.cta.sub}</p>
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
