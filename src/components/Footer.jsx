"use client";

import { Button, Input } from "@relume_io/relume-ui";
import React, { useState } from "react";
import { BiLogoFacebookCircle, BiLogoInstagram } from "react-icons/bi";
import { BiPhone, BiMap } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang].footer;
  const nav = translations[lang].nav;
  const common = translations[lang].common;
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-neutral-950 text-white">
      <div className="px-[5%] py-16 md:py-20 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-x-[8vw] gap-y-12 pb-12 md:gap-y-16 md:pb-16 lg:grid-cols-[0.8fr_1fr] lg:gap-y-4 lg:pb-20">
            {/* Brand + newsletter */}
            <div className="flex flex-col">
              <Link href="/" className="mb-6">
                <Image
                  src="/images/logo-light.jpeg"
                  alt="SL Therapy"
                  width={140}
                  height={44}
                  className="h-11 w-auto object-contain brightness-0 invert"
                />
              </Link>

              {/* Contact quick links */}
              <div className="mb-6 space-y-2">
                <a href={`tel:${common.phone}`} className="flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition-colors">
                  <BiPhone className="size-4 shrink-0" />{common.phone}
                </a>
                <div className="flex items-center gap-2 text-sm text-neutral-300">
                  <BiMap className="size-4 shrink-0" />El Paso, Texas
                </div>
              </div>

              <p className="mb-4 text-sm text-neutral-400">{t.newsletter}</p>
              <div className="w-full max-w-sm">
                <form
                  className="mb-3 grid grid-cols-[1fr_auto] gap-2"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <Input
                    id="footer-email"
                    type="email"
                    placeholder={t.emailPlaceholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500 focus:border-brand"
                  />
                  <Button title={t.subscribe} variant="secondary" size="sm" className="shrink-0">
                    {t.subscribe}
                  </Button>
                </form>
                <p className="text-xs text-neutral-500">{t.privacy}</p>
              </div>
            </div>

            {/* Links */}
            <div className="grid grid-cols-2 items-start gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:gap-x-8">
              <div>
                <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-neutral-400">{t.serviceLabel}</h3>
                <ul className="space-y-2">
                  {t.serviceItems.map((item, i) => (
                    <li key={i}>
                      <Link href="/services" className="text-sm text-neutral-300 hover:text-white transition-colors">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-neutral-400">{t.aboutLabel}</h3>
                <ul className="space-y-2">
                  <li><Link href="/about" className="text-sm text-neutral-300 hover:text-white transition-colors">{nav.about}</Link></li>
                  <li><Link href="/pricing" className="text-sm text-neutral-300 hover:text-white transition-colors">{nav.pricing}</Link></li>
                  <li><Link href="/contact" className="text-sm text-neutral-300 hover:text-white transition-colors">{nav.contact}</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-neutral-400">Social</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition-colors">
                      <BiLogoFacebookCircle className="size-5" />Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition-colors">
                      <BiLogoInstagram className="size-5" />Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-neutral-800" />
          <div className="flex flex-col-reverse items-start justify-between pb-2 pt-8 text-xs text-neutral-500 md:flex-row md:items-center">
            <p className="mt-4 md:mt-0">{t.copyright}</p>
            <ul className="flex gap-6">
              <li><a href="#" className="hover:text-neutral-300 transition-colors">{t.privacyLink}</a></li>
              <li><a href="#" className="hover:text-neutral-300 transition-colors">{t.terms}</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
