"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Button, Checkbox, Input, Label, RadioGroup, RadioGroupItem,
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Textarea,
} from "@relume_io/relume-ui";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { RxChevronRight, RxChevronDown } from "react-icons/rx";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

function AccordionItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-neutral-200 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-4 text-left"
      >
        <span className="pr-4 font-semibold text-neutral-800">{q}</span>
        <RxChevronDown className={`size-4 shrink-0 text-neutral-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="pb-4 text-sm text-neutral-600 leading-relaxed">{a}</p>}
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

      {/* Compact header */}
      <section className="relative flex min-h-[40vh] items-center justify-center overflow-hidden">
        <img src="/images/gen-contact-header.jpg" alt="Contacto" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/30" />
        <div className="relative z-10 mx-auto max-w-2xl px-[5%] py-16 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-brand">SL Therapy · El Paso, TX</p>
          <h1 className="mb-3 text-4xl font-black text-white drop-shadow-2xl md:text-5xl">{ct.header.heading}</h1>
          <p className="text-neutral-300">{ct.header.sub}</p>
        </div>
      </section>

      {/* Form — front and center */}
      <section className="bg-white px-[5%] py-14 md:py-20">
        <div className="container max-w-2xl">
          {/* Quick contact strip */}
          <div className="mb-8 flex flex-wrap items-center justify-center gap-4">
            <a href={`tel:${c.phone}`} className="flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm font-semibold text-neutral-700 hover:border-brand hover:text-brand transition-colors">
              <BiPhone className="size-4" /> {c.phone}
            </a>
            <a href="https://wa.me/19152169504" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white hover:bg-[#1fba59] transition-colors">
              <FaWhatsapp className="size-4" /> WhatsApp
            </a>
            <span className="flex items-center gap-2 text-sm text-neutral-500">
              <BiMap className="size-4 text-brand" /> El Paso, Texas
            </span>
          </div>

          <form className="rounded-2xl border border-neutral-100 bg-neutral-50 p-8 shadow-card space-y-5">
            <div className="grid grid-cols-2 gap-5">
              <div>
                <Label htmlFor="firstName" className="mb-1.5 text-sm font-semibold">{ct.form.firstName}</Label>
                <Input type="text" id="firstName" className="rounded-xl" />
              </div>
              <div>
                <Label htmlFor="lastName" className="mb-1.5 text-sm font-semibold">{ct.form.lastName}</Label>
                <Input type="text" id="lastName" className="rounded-xl" />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <Label htmlFor="email" className="mb-1.5 text-sm font-semibold">{ct.form.email}</Label>
                <Input type="email" id="email" className="rounded-xl" />
              </div>
              <div>
                <Label htmlFor="phone" className="mb-1.5 text-sm font-semibold">{ct.form.phone}</Label>
                <Input type="text" id="phone" className="rounded-xl" />
              </div>
            </div>
            <div>
              <Label className="mb-1.5 text-sm font-semibold">{ct.form.injuryType}</Label>
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
              <Label htmlFor="message" className="mb-1.5 text-sm font-semibold">{ct.form.message}</Label>
              <Textarea id="message" placeholder={ct.form.messagePlaceholder} className="min-h-[110px] rounded-xl" />
            </div>
            <div className="flex items-center gap-2.5 text-sm">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="cursor-pointer text-sm font-normal text-neutral-600">{ct.form.terms}</Label>
            </div>
            <Button className="w-full rounded-full py-3 font-semibold text-base">{ct.form.submit}</Button>
          </form>
        </div>
      </section>

      {/* FAQ — accordion */}
      <section className="bg-neutral-100 px-[5%] py-14 md:py-20">
        <div className="container max-w-2xl">
          <h2 className="mb-6 text-2xl font-black md:text-3xl">{ct.faq.heading}</h2>
          <div className="rounded-2xl border border-neutral-200 bg-white px-6 py-2 shadow-sm">
            {t.home.faq.items.map((item, i) => (
              <AccordionItem key={i} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-neutral-950 px-[5%] py-16 md:py-20">
        <div className="container text-center">
          <h2 className="mb-3 text-3xl font-black text-white md:text-4xl">{ct.cta.heading}</h2>
          <p className="mb-7 text-neutral-400">{ct.cta.sub}</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href={`tel:${c.phone}`}>
              <Button variant="primary" className="rounded-full px-7 font-semibold">{c.phone}</Button>
            </a>
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
