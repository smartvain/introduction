"use client";

import { useCallback, useRef, useState } from "react";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      setRotate({ x: y * -15, y: x * 15 });
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    setRotate({ x: 0, y: 0 });
  }, []);

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1a3cc0 0%, #0a1f6b 50%, #061452 100%)",
      }}
    >
      {/* 3D Geometric Shape */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ perspective: "1200px" }}
      >
        <div
          className="relative"
          style={{
            width: "min(500px, 70vw)",
            height: "min(500px, 70vw)",
            transformStyle: "preserve-3d",
            transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
            transition: "transform 0.15s ease-out",
          }}
        >
          {/* Front */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(135deg, rgba(106, 140, 255, 0.35), rgba(74, 108, 247, 0.2))",
              backdropFilter: "blur(2px)",
              transform: "translateZ(120px)",
              clipPath: "polygon(15% 0%, 100% 10%, 85% 100%, 0% 90%)",
            }}
          />
          {/* Back */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(135deg, rgba(74, 108, 247, 0.25), rgba(26, 60, 192, 0.15))",
              transform: "translateZ(-120px) rotateY(180deg)",
              clipPath: "polygon(15% 0%, 100% 10%, 85% 100%, 0% 90%)",
            }}
          />
          {/* Left */}
          <div
            className="absolute"
            style={{
              width: "240px",
              height: "100%",
              background: "linear-gradient(180deg, rgba(74, 108, 247, 0.3), rgba(26, 60, 192, 0.1))",
              transform: "translateX(-40px) rotateY(-90deg)",
              transformOrigin: "left center",
            }}
          />
          {/* Right */}
          <div
            className="absolute right-0"
            style={{
              width: "240px",
              height: "100%",
              background: "linear-gradient(180deg, rgba(106, 140, 255, 0.3), rgba(74, 108, 247, 0.1))",
              transform: "translateX(40px) rotateY(90deg)",
              transformOrigin: "right center",
            }}
          />
          {/* Top */}
          <div
            className="absolute"
            style={{
              width: "100%",
              height: "240px",
              background: "linear-gradient(90deg, rgba(106, 140, 255, 0.4), rgba(74, 108, 247, 0.15))",
              transform: "translateY(-40px) rotateX(90deg)",
              transformOrigin: "center top",
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-tight animate-fade-in-up">
          Ryuichi
          <br />
          Amejima
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-blue-100 font-medium animate-fade-in-up animation-delay-200">
          Fullstack Engineer
        </p>
        <p className="mt-4 text-lg text-blue-200/80 animate-fade-in-up animation-delay-400">
          プロダクトの本質価値を見据えた開発
        </p>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 right-8 md:bottom-12 md:right-12 flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors animate-fade-in animation-delay-800"
      >
        <div className="w-20 h-20 rounded-full border border-white/30 flex flex-col items-center justify-center gap-1 hover:border-white/60 transition-colors">
          <svg
            className="w-5 h-5 animate-scroll-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
          <span className="text-xs font-medium tracking-widest">Scroll</span>
        </div>
      </a>
    </section>
  );
}
