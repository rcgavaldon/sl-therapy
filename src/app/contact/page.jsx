"use client";

import React from "react";
import Link from "next/link";
import {
  Button, Checkbox, Input, Label, RadioGroup, RadioGroupItem,
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Textarea,
} from "@relume_io/relume-ui";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { RxChevronRight } from "react-icons/rx";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

function SectionLabel({ children }) {
  return (
    <div className="mb-3 flex items-center gap-3 md:mb-4">
      <span className="h-px w-8 bg-brand" />
      <p className="text-sm font-bold uppercase tracking-widest text-brand">{children}</p>
    </div>
  );
}

function InfoCard({ icon: Icon, heading, sub, value, href }) {
  return (
    <div className="flex gap-4 rounded-2xl border border-neutral-100 bg-white p-6 shadow-card">
      <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand/10">
        <Icon className="size-6 text-brand" />
      </div>
      <div>
        <h3 className="mb-0.5 font-bold">{heading}</h3>
        <p className="mb-1 text-sm text-neutral-500">{sub}</p>
        {href ? (
          <a href={href} className="text-sm font-semibold text-brand hover:underline">{value}</a>
        ) : (
          <p className="text-sm font-semibold">{value}</p>
        )}
      </div>
    </div>
  );
}

export default function ContactPage() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const ct = t.contact;
  const c = t.common;

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Header */}
      <section className="relative flex min-h-[55vh] items-center justify-center overflow-hidden">
        <img src="/images/gen-contact-header.jpg" alt="Contacto" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/30" />
        <div className="relative z-10 mx-auto max-w-3xl px-[5%] py-20 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-brand">SL Therapy · El Paso, TX</p>
          <h1 className="mb-5 text-5xl font-black leading-tight text-white drop-shadow-2xl md:text-7xl">
            {ct.header.heading}
          </h1>
          <p className="text-base text-neutral-200 md:text-lg">{ct.header.sub}</p>
        </div>
      </section>

      {/* Contact info + image */}
      <section className="bg-white px-[5%] py-20 md:py-28">
        <div className="container">
          <div className="mb-12 md:mb-16">
            <SectionLabel>{ct.info.label}</SectionLabel>
            <h2 className="mb-3 text-4xl font-black md:text-5xl">{ct.info.heading}</h2>
            <p className="text-neutral-500 md:text-lg">{ct.info.sub}</p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
            <div className="flex flex-col gap-4">
              <InfoCard icon={BiPhone} heading={ct.info.phone.heading} sub={ct.info.phone.sub}
                value={c.phone} href={`tel:${c.phone}`} />
              <InfoCard icon={BiMap} heading={ct.info.address.heading} sub={ct.info.address.sub}
                value={ct.info.address.value} />
              <div className="flex gap-4 rounded-2xl border border-neutral-100 bg-white p-6 shadow-card">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand/10">
                  <BiEnvelope className="size-6 text-brand" />
                </div>
                <div>
                  <h3 className="mb-0.5 font-bold">{ct.info.hours.heading}</h3>
                  <p className="mb-3 text-sm text-neutral-500 leading-relaxed">{ct.info.hours.sub}</p>
                  <Link href="#form">
                    <Button variant="link" size="link" iconRight={<RxChevronRight />} className="text-brand">
                      {ct.info.hours.cta}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-card">
              <img src="/images/ciatalgia-1.jpeg" alt="SL Therapy" className="size-full aspect-[4/3] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="form" className="bg-neutral-50 px-[5%] py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionLabel>{ct.form.label}</SectionLabel>
              <h2 className="mb-3 text-4xl font-black md:text-5xl">{ct.form.heading}</h2>
              <p className="mb-8 text-neutral-500 md:text-lg">{ct.form.sub}</p>
              <div className="space-y-3">
                <a href={`tel:${c.phone}`} className="flex items-center gap-3 text-sm text-neutral-600 hover:text-brand transition-colors">
                  <BiPhone className="size-5 text-brand" />{c.phone}
                </a>
                <div className="flex items-center gap-3 text-sm text-neutral-600">
                  <BiMap className="size-5 text-brand" />El Paso, Texas
                </div>
              </div>
              {/* Trust badges */}
              <div className="mt-10 grid grid-cols-2 gap-4">
                {[
                  { icon: "⚡", text: lang === "es" ? "Sin referido médico" : "No referral needed" },
                  { icon: "🏆", text: lang === "es" ? "Primera consulta gratis" : "Free first consultation" },
                  { icon: "📍", text: lang === "es" ? "El Paso, TX" : "El Paso, TX" },
                  { icon: "🤝", text: lang === "es" ? "Atención personalizada" : "Personalized care" },
                ].map((b, i) => (
                  <div key={i} className="flex items-center gap-2 rounded-xl bg-white p-3 shadow-sm border border-neutral-100 text-sm font-medium">
                    <span>{b.icon}</span> {b.text}
                  </div>
                ))}
              </div>
            </div>

            <form className="rounded-2xl bg-white p-8 shadow-card space-y-5 md:p-10">
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="firstName" className="mb-2 text-sm font-semibold">{ct.form.firstName}</Label>
                  <Input type="text" id="firstName" className="rounded-xl" />
                </div>
                <div>
                  <Label htmlFor="lastName" className="mb-2 text-sm font-semibold">{ct.form.lastName}</Label>
                  <Input type="text" id="lastName" className="rounded-xl" />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <Label htmlFor="email" className="mb-2 text-sm font-semibold">{ct.form.email}</Label>
                  <Input type="email" id="email" className="rounded-xl" />
                </div>
                <div>
                  <Label htmlFor="phone" className="mb-2 text-sm font-semibold">{ct.form.phone}</Label>
                  <Input type="text" id="phone" className="rounded-xl" />
                </div>
              </div>
              <div>
                <Label className="mb-2 text-sm font-semibold">{ct.form.injuryType}</Label>
                <Select>
                  <SelectTrigger className="rounded-xl">
                    <SelectValue placeholder={ct.form.selectPlaceholder} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="acl">ACL / Rodilla</SelectItem>
                    <SelectItem value="shoulder">Hombro</SelectItem>
                    <SelectItem value="ankle">Tobillo</SelectItem>
                    <SelectItem value="back">Dolor lumbar</SelectItem>
                    <SelectItem value="other">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="mb-3 text-sm font-semibold">{ct.form.situation}</Label>
                <RadioGroup className="grid grid-cols-2 gap-2.5">
                  {ct.form.situations.map((s, i) => (
                    <div key={i} className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm">
                      <RadioGroupItem value={s} id={`sit-${i}`} />
                      <Label htmlFor={`sit-${i}`} className="cursor-pointer text-sm font-normal">{s}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
              <div>
                <Label htmlFor="message" className="mb-2 text-sm font-semibold">{ct.form.message}</Label>
                <Textarea id="message" placeholder={ct.form.messagePlaceholder} className="min-h-[140px] rounded-xl" />
              </div>
              <div className="flex items-center gap-2.5 text-sm">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="cursor-pointer text-sm font-normal text-neutral-600">{ct.form.terms}</Label>
              </div>
              <Button className="w-full rounded-full py-3 font-semibold text-base shadow-sm hover:shadow-md transition-shadow">
                {ct.form.submit}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-[5%] py-20 md:py-28">
        <div className="container mx-auto max-w-2xl">
          <div className="mb-12 text-center">
            <SectionLabel>{lang === "es" ? "FAQ" : "FAQ"}</SectionLabel>
            <h2 className="mb-3 text-4xl font-black md:text-5xl">{ct.faq.heading}</h2>
            <p className="text-neutral-500">{ct.faq.sub}</p>
          </div>
          <div className="divide-y divide-neutral-100">
            {t.home.faq.items.map((item, i) => (
              <div key={i} className="py-6">
                <h3 className="mb-2.5 text-base font-bold md:text-lg">{item.q}</h3>
                <p className="text-neutral-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-neutral-950 px-[5%] py-24">
        <img src="/images/gen-cta-bg.jpg" alt="" className="absolute inset-0 size-full object-cover opacity-15" />
        <div className="relative z-10 container text-center">
          <h2 className="mb-4 text-4xl font-black text-white md:text-5xl">{ct.cta.heading}</h2>
          <p className="mb-8 text-neutral-300 md:text-lg">{ct.cta.sub}</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href={`tel:${c.phone}`}>
              <Button variant="primary" className="rounded-full px-8 font-semibold">{c.phone}</Button>
            </a>
            <Link href="#form">
              <Button variant="secondary-alt" className="rounded-full border-white/20 bg-white/10 px-7 text-white backdrop-blur hover:bg-white/20">
                {c.bookCta}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
