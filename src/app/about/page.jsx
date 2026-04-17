"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@relume_io/relume-ui";
import { BiSolidStar, BiLogoLinkedinSquare, BiPhone } from "react-icons/bi";
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

export default function AboutPage() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const a = t.about;
  const c = t.common;

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Header */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden">
        <img src="/images/gen-about-header.jpg" alt="About SL Therapy" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/30" />
        <div className="relative z-10 mx-auto max-w-3xl px-[5%] py-20 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-brand">SL Therapy</p>
          <h1 className="mb-5 text-5xl font-black leading-tight text-white drop-shadow-2xl md:text-7xl lg:text-8xl">
            {a.header.heading}
          </h1>
          <p className="text-base text-neutral-200 md:text-lg">{a.header.sub}</p>
        </div>
      </section>

      {/* Therapist */}
      <section className="bg-white px-[5%] py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 lg:gap-24 items-center">
            <div>
              <Label>{a.team.label}</Label>
              <h2 className="mb-4 text-4xl font-black md:text-5xl lg:text-6xl">{a.team.heading}</h2>
              <p className="text-neutral-600 md:text-lg">{a.team.sub}</p>
            </div>
            <div className="flex items-start gap-6 rounded-2xl border border-neutral-100 bg-neutral-50 p-8 shadow-card">
              <div className="size-24 shrink-0 overflow-hidden rounded-full ring-4 ring-brand/20 shadow-lg">
                <img src="/images/logo-light.jpeg" alt={a.team.member.name} className="size-full object-cover" />
              </div>
              <div>
                <h4 className="mb-0.5 text-xl font-black">{a.team.member.name}</h4>
                <p className="mb-3 text-sm font-semibold text-brand">{a.team.member.role}</p>
                <p className="text-neutral-600 leading-relaxed">{a.team.member.bio}</p>
                <div className="mt-5 flex gap-3">
                  <a href="#" className="text-neutral-400 hover:text-brand transition-colors">
                    <BiLogoLinkedinSquare className="size-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-neutral-950 px-[5%] py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-center">
            <div>
              <Label>{a.philosophy.label}</Label>
              <h2 className="mb-5 text-4xl font-black text-white md:text-5xl lg:text-6xl">{a.philosophy.heading}</h2>
              <p className="mb-8 text-lg text-neutral-300 leading-relaxed">{a.philosophy.body}</p>
              <div className="mb-8 flex flex-wrap items-center gap-6">
                <img src="/images/logo-dark.jpeg" alt="SL Therapy" className="h-10 w-auto object-contain brightness-0 invert opacity-60" />
                <img src="/images/logo-light-2.jpeg" alt="SL Therapy" className="h-10 w-auto object-contain brightness-0 invert opacity-60" />
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/services">
                  <Button variant="primary" className="rounded-full px-7 font-semibold">{a.philosophy.cta}</Button>
                </Link>
                <Button variant="link-alt" size="link" iconRight={<RxChevronRight />} className="text-white hover:text-brand transition-colors">
                  {a.philosophy.learnMore}
                </Button>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/images/agenda-cita-hoy.jpeg"
                alt="SL Therapy clinic"
                className="size-full aspect-[4/3] object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white px-[5%] py-20 md:py-28">
        <div className="container">
          <div className="mb-12 max-w-2xl md:mb-16">
            <h3 className="text-3xl font-black leading-tight md:text-4xl lg:text-5xl">{a.stats.heading}</h3>
          </div>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {a.stats.items.map((stat, i) => (
              <div key={i} className="rounded-2xl border border-neutral-100 bg-neutral-50 p-8 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover">
                <p className="mb-4 text-7xl font-black leading-none text-brand md:text-8xl">{stat.number}</p>
                <h4 className="mb-1 text-base font-bold md:text-lg">{stat.heading}</h4>
                <p className="text-sm text-neutral-500">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-neutral-50 px-[5%] py-20 md:py-28">
        <div className="container">
          <div className="mb-14 text-center">
            <Label>{lang === "es" ? "Testimonios" : "Testimonials"}</Label>
            <h2 className="mb-3 text-4xl font-black md:text-5xl">{a.testimonials.heading}</h2>
            <p className="text-neutral-500">{a.testimonials.sub}</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {t.home.testimonials.items.map((item, i) => (
              <div key={i} className="flex flex-col justify-between rounded-2xl border border-neutral-100 bg-white p-7 shadow-card hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300 md:p-8">
                <div>
                  <div className="mb-4 flex gap-0.5">
                    {[...Array(5)].map((_, s) => <BiSolidStar key={s} className="size-4 text-accent" />)}
                  </div>
                  <blockquote className="mb-6 text-base leading-relaxed text-neutral-700">"{item.quote}"</blockquote>
                </div>
                <div className="flex items-center gap-3">
                  <div className="size-11 shrink-0 overflow-hidden rounded-full bg-neutral-100">
                    <img src="/images/motivacion.jpeg" alt={item.name} className="size-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold">{item.name}</p>
                    <p className="text-sm text-neutral-500">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-neutral-950 px-[5%] py-24">
        <img src="/images/gen-cta-bg.jpg" alt="" className="absolute inset-0 size-full object-cover opacity-15" />
        <div className="relative z-10 container text-center">
          <h2 className="mb-4 text-4xl font-black text-white md:text-5xl">{a.cta.heading}</h2>
          <p className="mb-8 text-neutral-300 md:text-lg">{a.cta.sub}</p>
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
