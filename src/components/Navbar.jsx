"use client";

import { Button, useMediaQuery } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { RxChevronDown } from "react-icons/rx";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function Navbar() {
  const { lang, setLang } = useLanguage();
  const t = translations[lang].nav;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen((p) => !p);
  const openOnMobileDropdown = () => setIsDropdownOpen((p) => !p);
  const openOnDesktopDropdown = () => { if (!isMobile) setIsDropdownOpen(true); };
  const closeOnDesktopDropdown = () => { if (!isMobile) setIsDropdownOpen(false); };

  const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
  const animateSpan = isMobileMenuOpen ? ["open", "rotatePhase"] : "closed";
  const animateDropdown = isDropdownOpen ? "open" : "close";
  const animateDropdownIcon = isDropdownOpen ? "rotated" : "initial";

  const linkClass =
    "block py-3 text-md font-medium transition-colors hover:text-brand first:pt-7 lg:px-4 lg:py-2 lg:text-sm lg:font-semibold lg:tracking-wide first:lg:pt-2";

  return (
    <nav
      className={`sticky top-0 z-50 flex w-full items-center transition-all duration-300 lg:px-[5%] ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-100"
          : "bg-white border-b border-border-primary"
      }`}
    >
      <div className="mx-auto size-full lg:grid lg:grid-cols-[0.375fr_1fr_0.375fr] lg:items-center lg:justify-between lg:gap-4">
        {/* Logo + mobile controls */}
        <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo-dark.jpeg"
              alt="SL Therapy"
              width={140}
              height={44}
              className="h-11 w-auto object-contain"
              priority
            />
          </Link>
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setLang(lang === "es" ? "en" : "es")}
              className="rounded-full border border-neutral-300 bg-neutral-50 px-3 py-1 text-xs font-bold uppercase tracking-wider hover:bg-neutral-100 transition-colors"
            >
              {t.lang}
            </button>
            <button
              className="-mr-2 flex size-12 flex-col items-center justify-center"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <motion.span className="my-[3px] h-0.5 w-6 bg-neutral-900" animate={animateSpan}
                variants={{ open: { translateY: 8, transition: { delay: 0.1 } }, rotatePhase: { rotate: -45, transition: { delay: 0.2 } }, closed: { translateY: 0, rotate: 0, transition: { duration: 0.2 } } }} />
              <motion.span className="my-[3px] h-0.5 w-6 bg-neutral-900" animate={animateMobileMenu}
                variants={{ open: { width: 0, transition: { duration: 0.1 } }, closed: { width: "1.5rem", transition: { delay: 0.3, duration: 0.2 } } }} />
              <motion.span className="my-[3px] h-0.5 w-6 bg-neutral-900" animate={animateSpan}
                variants={{ open: { translateY: -8, transition: { delay: 0.1 } }, rotatePhase: { rotate: 45, transition: { delay: 0.2 } }, closed: { translateY: 0, rotate: 0, transition: { duration: 0.2 } } }} />
            </button>
          </div>
        </div>

        {/* Nav links */}
        <motion.div
          variants={{ open: { height: "var(--height-open, 100dvh)" }, close: { height: "var(--height-closed, 0)" } }}
          animate={animateMobileMenu} initial="close" exit="close" transition={{ duration: 0.4 }}
          className="overflow-hidden px-[5%] text-center lg:flex lg:items-center lg:justify-center lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto]"
        >
          <Link href="/services" className={linkClass}>{t.services}</Link>
          <Link href="/about" className={linkClass}>{t.about}</Link>
          <Link href="/pricing" className={linkClass}>{t.pricing}</Link>

          <div onMouseEnter={openOnDesktopDropdown} onMouseLeave={closeOnDesktopDropdown} className="relative">
            <button
              className="flex w-full items-center justify-center gap-2 py-3 text-center text-md font-medium lg:w-auto lg:flex-none lg:justify-start lg:px-4 lg:py-2 lg:text-sm lg:font-semibold lg:tracking-wide hover:text-brand transition-colors"
              onClick={openOnMobileDropdown}
            >
              <span>{t.more}</span>
              <motion.span variants={{ rotated: { rotate: 180 }, initial: { rotate: 0 } }} animate={animateDropdownIcon} transition={{ duration: 0.3 }}>
                <RxChevronDown className="size-4" />
              </motion.span>
            </button>
            <AnimatePresence>
              <motion.nav
                variants={{ open: { visibility: "visible", opacity: "var(--opacity-open, 100%)", display: "block", y: 0 }, close: { visibility: "hidden", opacity: "var(--opacity-close, 0)", display: "none", y: "var(--y-close, 0%)" } }}
                animate={animateDropdown} initial="close" exit="close" transition={{ duration: 0.2 }}
                className="bg-white lg:absolute lg:z-50 lg:min-w-[160px] lg:rounded-lg lg:border lg:border-neutral-200 lg:shadow-card-hover lg:p-2 lg:[--y-close:12%]"
              >
                <Link href="/services" className="block py-2.5 text-center text-sm font-medium hover:text-brand lg:px-4 lg:py-2 lg:text-left lg:rounded lg:hover:bg-neutral-50 transition-colors">{t.evaluation}</Link>
                <Link href="/services" className="block py-2.5 text-center text-sm font-medium hover:text-brand lg:px-4 lg:py-2 lg:text-left lg:rounded lg:hover:bg-neutral-50 transition-colors">{t.rehabilitation}</Link>
                <Link href="/contact" className="block py-2.5 text-center text-sm font-medium hover:text-brand lg:px-4 lg:py-2 lg:text-left lg:rounded lg:hover:bg-neutral-50 transition-colors">{t.contact}</Link>
              </motion.nav>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Desktop right */}
        <div className="hidden items-center justify-self-end gap-3 lg:flex">
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="rounded-full border border-neutral-200 bg-neutral-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest hover:bg-neutral-100 hover:border-neutral-300 transition-all"
          >
            {t.lang}
          </button>
          <Link href="/contact">
            <Button size="sm" className="px-5 py-2 rounded-full font-semibold shadow-sm hover:shadow-md transition-shadow">
              {t.cta}
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
