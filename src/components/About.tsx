"use client";

import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

export function About() {
  const skills = [
    { name: "TypeScript", category: "Language" },
    { name: "Next.js", category: "Frontend" },
    { name: "Nuxt.js", category: "Frontend" },
    { name: "React", category: "Frontend" },
    { name: "GraphQL", category: "API" },
    { name: "Python", category: "Language" },
    { name: "FastAPI", category: "Backend" },
    { name: "PHP", category: "Language" },
    { name: "Laravel", category: "Backend" },
    { name: "NestJS", category: "Backend" },
  ];

  const experiences = [
    {
      title: "Fullstack Engineer",
      project: "coconala Bosyu",
      company: "coconala Inc.",
      period: "2025.09 - Present",
      description:
        "採用サービス「coconala Bosyu」のフルスタック開発。フロントエンドからバックエンドまで一貫した設計・実装を担当。",
      isCurrent: true,
    },
    {
      title: "Fullstack Engineer",
      project: "coconala AI Studio",
      company: "coconala Inc.",
      period: "2024.10 - 2025.08",
      description:
        "AIを活用した新規サービスの開発・アーキテクチャ設計。プロダクトの立ち上げから運用まで主導。",
      isCurrent: false,
    },
    {
      title: "Frontend Engineer",
      project: "coconala Marketplace",
      company: "coconala Inc.",
      period: "2022.11 - 2024.09",
      description:
        "スキルマーケットプラットフォーム「coconala」のフロントエンド開発。UI/UXの改善とパフォーマンス最適化。",
      isCurrent: false,
    },
    {
      title: "SES Engineer",
      project: "Various Projects",
      company: "Gizumo Inc.",
      period: "2021.06 - 2022.10",
      description:
        "受託案件を中心としたWebアプリケーション開発。多様な技術スタックでの実装経験を積む。",
      isCurrent: false,
    },
    {
      title: "Freelance",
      project: "Video Production",
      company: "Freelance",
      period: "2020.06 - 2021.05",
      description:
        "動画編集・サムネイル制作・YouTube運用支援を受託。複数案件の進行管理とクライアント折衝を経験。",
      isCurrent: false,
    },
    {
      title: "Insurance Sales",
      project: "Corporate & Individual",
      company: "Manulife Life Insurance",
      period: "2019.06 - 2020.05",
      description:
        "生命保険の法人・個人営業に従事。提案・プレゼン、見積／契約対応を通じて課題ヒアリングと合意形成の基礎を習得。",
      isCurrent: false,
    },
    {
      title: "Real Estate Sales",
      project: "Property Brokerage",
      company: "Plus Nice Inc.",
      period: "2018.04 - 2019.05",
      description:
        "不動産売買仲介営業に従事。顧客対応、資料作成、契約業務を経験。",
      isCurrent: false,
    },
  ];

  const aboutSection = useInView();
  const skillsSection = useInView();
  const experienceSection = useInView();

  return (
    <>
      {/* About */}
      <section id="about" className="py-24 bg-[#1e293b]">
        <div
          ref={aboutSection.ref}
          className={`max-w-4xl mx-auto px-6 transition-all duration-700 ${
            aboutSection.visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-sm font-medium tracking-[0.3em] text-blue-400 uppercase mb-4">
            About
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
            プロダクトの本質的な価値を
            <br />
            追求するエンジニア
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <p className="text-gray-400 leading-relaxed">
              coconala Inc.
              にて新規事業プロダクトのフルスタック開発・設計を担当。フロントエンドからバックエンドまで幅広い技術スタックを活用し、ユーザーに届く価値を最大化する開発を実践しています。
            </p>
            <p className="text-gray-400 leading-relaxed">
              技術選定からアーキテクチャ設計、実装、運用まで一貫して携わることで、プロダクトの成長に直接貢献することを目指しています。
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-24 bg-[#1a2438]">
        <div
          ref={skillsSection.ref}
          className={`max-w-4xl mx-auto px-6 transition-all duration-700 ${
            skillsSection.visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-sm font-medium tracking-[0.3em] text-blue-400 uppercase mb-12">
            Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="group px-4 py-4 bg-white/5 border border-white/10 rounded-lg hover:bg-blue-500/10 hover:border-blue-400/40 hover:shadow-[0_0_20px_rgba(80,130,255,0.12)] transition-all text-center"
              >
                <p className="text-white font-medium text-sm">{skill.name}</p>
                <p className="text-gray-500 text-xs mt-1">{skill.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24 bg-[#1e293b]">
        <div
          ref={experienceSection.ref}
          className={`max-w-4xl mx-auto px-6 transition-all duration-700 ${
            experienceSection.visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-sm font-medium tracking-[0.3em] text-blue-400 uppercase mb-12">
            Experience
          </h2>
          <div className="space-y-0">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group grid md:grid-cols-[200px_1fr] gap-4 md:gap-8 py-8 border-t border-white/10 first:border-t-0 hover:bg-white/[0.02] transition-colors rounded-lg px-4 -mx-4"
              >
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500 font-mono">
                    {exp.period}
                  </span>
                  {exp.isCurrent && (
                    <span className="mt-2 inline-flex items-center w-fit px-2 py-0.5 text-xs font-medium bg-blue-500/20 text-blue-400 rounded">
                      Current
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-blue-400/80 mt-1">
                    {exp.company} — {exp.project}
                  </p>
                  <p className="text-gray-400 mt-3 leading-relaxed text-sm">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <h2 className="text-sm font-medium tracking-[0.3em] text-blue-400 uppercase mb-8">
              Education
            </h2>
            <div className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-8">
              <span className="text-sm text-gray-500 font-mono">
                2014 - 2018
              </span>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  岡山商科大学
                </h3>
                <p className="text-sm text-gray-400 mt-1">法学部</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
