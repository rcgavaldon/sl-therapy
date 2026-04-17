"use client";

import React from "react";
import Link from "next/link";
import { Button, Tabs, TabsContent, TabsList, TabsTrigger } from "@relume_io/relume-ui";
import { BiSolidStar, BiLogoLinkedinSquare, BiPhone } from "react-icons/bi";
import { RxChevronRight } from "react-icons/rx";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

/* ─── image map ─── */
const heroImg = "/images/gen-hero.jpg";
const serviceImgs = [
  "/images/gen-evaluation.jpg",
  "/images/gen-rehabilitation.jpg",
  "/images/gen-dry-needling.jpg",
  "/images/gen-performance.jpg",
  "/images/gen-recovery.jpg",
  "/images/dolor-rodilla.jpeg",
];
const phaseImgs = [
  "/images/gen-phase1.jpg",
  "/images/fisioterapia-invasiva.jpeg",
  "/images/compression-1.jpeg",
  "/images/gen-performance.jpg",
  "/images/gen-phase5.jpg",
];
const statImgs = [
  "/images/padel-dolor.jpeg",
  "/images/prevencion-2.jpeg",
  "/images/dolor-hombro.jpeg",
];

/* ─── reusable overlay card ─── */
function ImageCard({ image, children, className = "", tall = false }) {
  return (
    <div className={`group relative flex flex-col overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-card-hover ${tall ? "lg:min-h-[32rem]" : "min-h-[18rem]"} ${className}`}>
      <img src={image} alt="" className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/20 transition-opacity duration-300 group-hover:opacity-90" />
      <div className="relative z-10 flex flex-1 flex-col justify-end p-6 md:p-8">
        {children}
      </div>
    </div>
  );
}

/* ─── section label ─── */
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

      {/* ── Hero ── */}
      <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden">
        <img src={heroImg} alt="SL Therapy" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/90 via-black/60 to-black/25" />

        <div className="relative z-10 mx-auto max-w-5xl px-[5%] py-24 text-center">
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
              <Button variant="primary" className="rounded-full px-8 py-3 text-base font-semibold shadow-lg hover:shadow-xl transition-shadow">
                {c.bookCta}
              </Button>
            </Link>
            <Button variant="secondary-alt" className="rounded-full border-white/30 bg-white/10 px-8 py-3 text-base font-semibold text-white backdrop-blur hover:bg-white/20">
              {c.noReferral}
            </Button>
          </div>
        </div>

        {/* scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
          <span className="h-10 w-px animate-bounce bg-white/30" />
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="bg-white px-[5%] py-20 md:py-28 lg:py-32">
        <div className="container">
          <div className="mb-14 text-center md:mb-18">
            <Label>{h.services.label}</Label>
            <h2 className="mb-4 text-4xl font-black md:text-6xl lg:text-7xl">{h.services.heading}</h2>
            <p className="mx-auto max-w-md text-neutral-500 md:text-lg">{h.services.sub}</p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:gap-5 lg:grid-cols-3">
            {/* Col 1 */}
            <div className="flex flex-col gap-4 md:gap-5">
              <ImageCard image={serviceImgs[0]} tall>
                {h.services.cards[0].tag && (
                  <span className="mb-2 inline-block rounded-full bg-brand/90 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-white">
                    {h.services.cards[0].tag}
                  </span>
                )}
                <h3 className="mb-1.5 text-2xl font-black text-white md:text-3xl">{h.services.cards[0].heading}</h3>
                <p className="mb-4 text-sm text-neutral-200">{h.services.cards[0].sub}</p>
                <Link href="/services" className="flex items-center gap-1.5 text-sm font-semibold text-white/80 hover:text-white transition-colors">
                  {h.services.cards[0].cta} <RxChevronRight />
                </Link>
              </ImageCard>
              <ImageCard image={serviceImgs[1]}>
                <h3 className="mb-1.5 text-xl font-black text-white">{h.services.cards[1].heading}</h3>
                <p className="mb-3 text-sm text-neutral-200">{h.services.cards[1].sub}</p>
                <Link href="/services" className="flex items-center gap-1.5 text-sm font-semibold text-white/80 hover:text-white transition-colors">
                  {h.services.cards[1].cta} <RxChevronRight />
                </Link>
              </ImageCard>
            </div>
            {/* Col 2 */}
            <div className="flex flex-col gap-4 md:gap-5">
              <ImageCard image={serviceImgs[2]}>
                <h3 className="mb-1.5 text-xl font-black text-white">{h.services.cards[2].heading}</h3>
                <p className="mb-3 text-sm text-neutral-200">{h.services.cards[2].sub}</p>
                <Link href="/services" className="flex items-center gap-1.5 text-sm font-semibold text-white/80 hover:text-white transition-colors">
                  {h.services.cards[2].cta} <RxChevronRight />
                </Link>
              </ImageCard>
              <ImageCard image={serviceImgs[3]} tall>
                {h.services.cards[3].tag && (
                  <span className="mb-2 inline-block rounded-full bg-accent/90 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-white">
                    {h.services.cards[3].tag}
                  </span>
                )}
                <h3 className="mb-1.5 text-2xl font-black text-white md:text-3xl">{h.services.cards[3].heading}</h3>
                <p className="mb-4 text-sm text-neutral-200">{h.services.cards[3].sub}</p>
                <Link href="/services" className="flex items-center gap-1.5 text-sm font-semibold text-white/80 hover:text-white transition-colors">
                  {h.services.cards[3].cta} <RxChevronRight />
                </Link>
              </ImageCard>
            </div>
            {/* Col 3 */}
            <div className="flex flex-col gap-4 md:gap-5">
              <ImageCard image={serviceImgs[4]} tall>
                {h.services.cards[4].tag && (
                  <span className="mb-2 inline-block rounded-full bg-white/20 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                    {h.services.cards[4].tag}
                  </span>
                )}
                <h3 className="mb-1.5 text-2xl font-black text-white md:text-3xl">{h.services.cards[4].heading}</h3>
                <p className="mb-4 text-sm text-neutral-200">{h.services.cards[4].sub}</p>
                <Link href="/services" className="flex items-center gap-1.5 text-sm font-semibold text-white/80 hover:text-white transition-colors">
                  {h.services.cards[4].cta} <RxChevronRight />
                </Link>
              </ImageCard>
              <ImageCard image={serviceImgs[5]}>
                <h3 className="mb-1.5 text-xl font-black text-white">{h.services.cards[5].heading}</h3>
                <p className="mb-3 text-sm text-neutral-200">{h.services.cards[5].sub}</p>
                <Link href="/services" className="flex items-center gap-1.5 text-sm font-semibold text-white/80 hover:text-white transition-colors">
                  {h.services.cards[5].cta} <RxChevronRight />
                </Link>
              </ImageCard>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5 Phases ── */}
      <section className="bg-neutral-950 px-[5%] py-20 md:py-28 lg:py-32">
        <div className="container">
          <div className="mb-14 text-center md:mb-18">
            <Label>{h.phases.label}</Label>
            <h2 className="mb-4 text-4xl font-black text-white md:text-6xl lg:text-7xl">{h.phases.heading}</h2>
            <p className="mx-auto max-w-md text-neutral-400 md:text-lg">{h.phases.sub}</p>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="flex flex-col gap-4">
              {/* Phase 1 - large */}
              <div className="group relative overflow-hidden lg:min-h-[34rem]">
                <img src={phaseImgs[0]} alt="" className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
                <div className="relative z-10 flex h-full flex-col justify-end p-8 lg:p-12">
                  <span className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-brand">{h.phases.items[0].label}</span>
                  <h3 className="mb-3 text-3xl font-black leading-tight text-white lg:text-4xl">{h.phases.items[0].heading}</h3>
                  <p className="mb-5 text-neutral-300">{h.phases.items[0].sub}</p>
                  <div className="flex items-center gap-4">
                    <Link href="/contact">
                      <Button variant="secondary-alt" size="sm" className="rounded-full border-white/30 bg-white/15 text-white backdrop-blur hover:bg-white/25">
                        {h.phases.items[0].cta}
                      </Button>
                    </Link>
                    <span className="flex items-center gap-1.5 text-sm text-white/60">
                      <RxChevronRight /> {h.phases.items[0].next}
                    </span>
                  </div>
                </div>
              </div>
              {/* Phases 2+3 */}
              <div className="grid grid-cols-2 gap-4">
                {[1, 2].map((i) => (
                  <div key={i} className="group relative min-h-[16rem] overflow-hidden">
                    <img src={phaseImgs[i]} alt="" className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
                    <div className="relative z-10 flex h-full flex-col justify-end p-5">
                      <h4 className="mb-1.5 text-base font-black text-white leading-snug">{h.phases.items[i].heading}</h4>
                      <span className="flex items-center gap-1 text-xs text-white/60">
                        <RxChevronRight className="size-3" /> {h.phases.items[i].next}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {/* Phase 4 */}
              <div className="group relative min-h-[22rem] overflow-hidden">
                <img src={phaseImgs[3]} alt="" className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
                <div className="relative z-10 flex h-full flex-col justify-end p-8">
                  <h3 className="mb-3 text-3xl font-black leading-tight text-white">{h.phases.items[3].heading}</h3>
                  <p className="mb-5 text-sm text-neutral-300">{h.phases.items[3].sub}</p>
                  <div className="flex items-center gap-4">
                    <Link href="/contact">
                      <Button variant="secondary-alt" size="sm" className="rounded-full border-white/30 bg-white/15 text-white backdrop-blur hover:bg-white/25">
                        {h.phases.items[3].cta}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Phase 5 - large */}
              <div className="group relative overflow-hidden lg:min-h-[28rem]">
                <img src={phaseImgs[4]} alt="" className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
                <div className="relative z-10 flex h-full flex-col justify-end p-8 lg:p-12">
                  <span className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-accent">{h.phases.items[4].label}</span>
                  <h3 className="mb-3 text-3xl font-black leading-tight text-white lg:text-4xl">{h.phases.items[4].heading}</h3>
                  <p className="mb-5 text-neutral-300">{h.phases.items[4].sub}</p>
                  <div className="flex items-center gap-4">
                    <Link href="/contact">
                      <Button variant="primary" size="sm" className="rounded-full px-6 font-semibold">
                        {h.phases.items[4].cta}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-white px-[5%] py-20 md:py-28 lg:py-32">
        <div className="container">
          <div className="mb-14 text-center md:mb-18">
            <Label>{lang === "es" ? "Testimonios" : "Testimonials"}</Label>
            <h2 className="mb-4 text-4xl font-black md:text-6xl lg:text-7xl">{h.testimonials.heading}</h2>
            <p className="text-neutral-500 md:text-lg">{h.testimonials.sub}</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {h.testimonials.items.map((item, i) => (
              <div key={i} className="flex flex-col justify-between rounded-2xl border border-neutral-100 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover md:p-8">
                <div>
                  <div className="mb-4 flex gap-0.5">
                    {[...Array(5)].map((_, s) => <BiSolidStar key={s} className="size-4 text-accent" />)}
                  </div>
                  <blockquote className="mb-6 text-base leading-relaxed text-neutral-700 md:text-lg">
                    "{item.quote}"
                  </blockquote>
                </div>
                <div className="flex items-center gap-3">
                  <div className="size-11 shrink-0 overflow-hidden rounded-full bg-neutral-100">
                    <img src="/images/motivacion.jpeg" alt={item.name} className="size-full object-cover" />
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

      {/* ── Stats ── */}
      <section className="bg-neutral-950 px-[5%] py-20 md:py-28 lg:py-32">
        <div className="container">
          <div className="mb-14 md:mb-18">
            <Label>{h.stats.label}</Label>
            <h2 className="mb-4 max-w-xl text-4xl font-black text-white md:text-5xl lg:text-6xl">{h.stats.heading}</h2>
            <p className="max-w-md text-neutral-400 md:text-lg">{h.stats.sub}</p>
          </div>
          <Tabs defaultValue="tab-1" className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-16 lg:gap-x-24">
            <TabsList className="grid grid-cols-1 gap-8">
              {h.stats.items.map((stat, i) => (
                <TabsTrigger
                  key={i}
                  value={`tab-${i + 1}`}
                  className="flex-col items-start justify-start whitespace-normal border-0 border-l-2 border-transparent py-0 pl-6 pr-0 text-left transition-all data-[state=active]:border-brand data-[state=active]:bg-transparent data-[state=active]:text-white"
                >
                  <h3 className="mb-1.5 text-6xl font-black text-white md:text-8xl">{stat.number}</h3>
                  <h4 className="mb-1 text-base font-bold text-white md:text-lg">{stat.heading}</h4>
                  <p className="text-sm text-neutral-400">{stat.sub}</p>
                </TabsTrigger>
              ))}
            </TabsList>
            <div className="overflow-hidden rounded-2xl">
              {h.stats.items.map((_, i) => (
                <TabsContent key={i} value={`tab-${i + 1}`} className="data-[state=active]:animate-tabs">
                  <img src={statImgs[i]} alt="" className="size-full aspect-[4/3] object-cover rounded-2xl" />
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white px-[5%] py-20 md:py-28 lg:py-32">
        <div className="container">
          <div className="mx-auto max-w-2xl">
            <div className="mb-14 text-center">
              <Label>{lang === "es" ? "FAQ" : "FAQ"}</Label>
              <h2 className="mb-4 text-4xl font-black md:text-6xl">{h.faq.heading}</h2>
              <p className="text-neutral-500">{h.faq.sub}</p>
            </div>
            <div className="divide-y divide-neutral-100">
              {h.faq.items.map((item, i) => (
                <div key={i} className="py-6">
                  <h3 className="mb-2.5 text-base font-bold md:text-lg">{item.q}</h3>
                  <p className="text-neutral-600 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
            <div className="mt-14 rounded-2xl bg-neutral-50 p-8 text-center">
              <h4 className="mb-2 text-xl font-bold">{h.faq.stillQuestions}</h4>
              <p className="mb-6 text-neutral-500">{h.faq.callUs}</p>
              <Link href="/contact">
                <Button variant="secondary" className="rounded-full px-7">{c.contactUs}</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="bg-neutral-50 px-[5%] py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 lg:gap-24 items-center">
            <div>
              <Label>{h.team.label}</Label>
              <h2 className="mb-4 text-4xl font-black md:text-5xl lg:text-6xl">{h.team.heading}</h2>
              <p className="text-neutral-600 md:text-lg">{h.team.sub}</p>
            </div>
            <div className="flex items-start gap-6">
              <div className="size-24 shrink-0 overflow-hidden rounded-full ring-4 ring-neutral-200 shadow-card">
                <img src="/images/logo-light.jpeg" alt={h.team.member.name} className="size-full object-cover" />
              </div>
              <div>
                <h4 className="mb-0.5 text-lg font-black">{h.team.member.name}</h4>
                <p className="mb-3 text-sm font-semibold text-brand">{h.team.member.role}</p>
                <p className="text-neutral-600 leading-relaxed">{h.team.member.bio}</p>
                <div className="mt-4 flex gap-3">
                  <a href="#" className="text-neutral-400 hover:text-neutral-700 transition-colors">
                    <BiLogoLinkedinSquare className="size-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden bg-neutral-950 px-[5%] py-24 md:py-32">
        <img src="/images/gen-cta-bg.jpg" alt="" className="absolute inset-0 size-full object-cover opacity-20" />
        <div className="relative z-10 container text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-brand">{lang === "es" ? "Próximo Paso" : "Next Step"}</p>
          <h2 className="mb-5 text-4xl font-black text-white md:text-6xl lg:text-7xl">{h.cta.heading}</h2>
          <p className="mx-auto mb-10 max-w-md text-neutral-300 md:text-lg">{h.cta.sub}</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact">
              <Button variant="primary" className="rounded-full px-8 py-3 text-base font-semibold shadow-lg">
                {c.bookCta}
              </Button>
            </Link>
            <a href={`tel:${c.phone}`} className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3 text-base text-white backdrop-blur hover:bg-white/20 transition-colors">
              <BiPhone className="size-4" />{c.phone}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
