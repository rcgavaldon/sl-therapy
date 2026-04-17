"use client";

import React from "react";
import { BiLogoFacebookCircle, BiLogoInstagram, BiPhone, BiMap } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang].footer;
  const nav = translations[lang].nav;
  const common = translations[lang].common;

  return (
    <footer className="bg-neutral-950 text-white">
      <div className="px-[5%] py-14 md:py-18">
        <div className="container">
          <div className="grid grid-cols-1 gap-10 pb-10 md:grid-cols-[auto_1fr] md:gap-16">
            {/* Brand + contact */}
            <div className="flex flex-col gap-4">
              <Link href="/">
                <Image
                  src="/images/logo-light.jpeg"
                  alt="SL Therapy"
                  width={120}
                  height={40}
                  className="h-10 w-auto object-contain brightness-0 invert"
                />
              </Link>
              <a href={`tel:${common.phone}`} className="flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition-colors">
                <BiPhone className="size-4 shrink-0" />{common.phone}
              </a>
              <a href="https://wa.me/19152169504" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#25D366] hover:text-[#1fba59] transition-colors">
                <FaWhatsapp className="size-4 shrink-0" />WhatsApp
              </a>
              <span className="flex items-center gap-2 text-sm text-neutral-400">
                <BiMap className="size-4 shrink-0" />El Paso, Texas
              </span>
            </div>

            {/* Links */}
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <div>
                <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-neutral-400">{t.serviceLabel}</h3>
                <ul className="space-y-2">
                  <li><Link href="/services" className="text-sm text-neutral-300 hover:text-white transition-colors">{nav.services}</Link></li>
                  <li><Link href="/pricing" className="text-sm text-neutral-300 hover:text-white transition-colors">{nav.pricing}</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-neutral-400">{t.aboutLabel}</h3>
                <ul className="space-y-2">
                  <li><Link href="/about" className="text-sm text-neutral-300 hover:text-white transition-colors">{nav.about}</Link></li>
                  <li><Link href="/contact" className="text-sm text-neutral-300 hover:text-white transition-colors">{nav.contact}</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-neutral-400">Social</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition-colors">
                      <BiLogoFacebookCircle className="size-4" />Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition-colors">
                      <BiLogoInstagram className="size-4" />Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-neutral-800" />
          <div className="flex flex-col-reverse items-start justify-between pt-6 text-xs text-neutral-500 md:flex-row md:items-center">
            <p>{t.copyright}</p>
            <ul className="mb-3 flex gap-6 md:mb-0">
              <li><a href="#" className="hover:text-neutral-300 transition-colors">{t.privacyLink}</a></li>
              <li><a href="#" className="hover:text-neutral-300 transition-colors">{t.terms}</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
