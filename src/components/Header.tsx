"use client";

import { useEffect, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1e293b]/90 backdrop-blur-md border-b border-blue-500/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        <a
          href="#"
          className="text-lg font-bold text-white hover:opacity-80 transition-opacity tracking-wide"
        >
          Ryuichi Amejima
        </a>
        <nav className="flex items-center gap-8">
          <a
            href="#about"
            className="text-sm text-white/70 hover:text-white transition-colors tracking-wide"
          >
            About
          </a>
          <a
            href="#experience"
            className="text-sm text-white/70 hover:text-white transition-colors tracking-wide"
          >
            Experience
          </a>
          <a
            href="#contact"
            className="text-sm text-white/70 hover:text-white transition-colors tracking-wide"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
