export function About() {
  const skills = [
    "TypeScript",
    "Next.js",
    "Nuxt.js",
    "GraphQL",
    "Python",
    "FastAPI",
    "PHP",
    "Laravel",
    "NestJS",
  ];

  const experiences = [
    {
      title: "Fullstack Engineer - coconala Bosyu",
      company: "coconala Inc.",
      period: "2025.09 - Present",
      description: "coconala Bosyu (recruitment service) fullstack development",
      isCurrent: true,
    },
    {
      title: "Fullstack Engineer - coconala AI Studio",
      company: "coconala Inc.",
      period: "2024.10 - 2025.08",
      description: "AI-powered service development and architecture design",
      isCurrent: false,
    },
    {
      title: "Frontend Engineer",
      company: "coconala Inc.",
      period: "2022.11 - 2024.09",
      description: "Frontend development for coconala marketplace platform",
      isCurrent: false,
    },
    {
      title: "SES Engineer",
      company: "Gizumo Inc.",
      period: "2021.06 - 2022.10",
      description: "Web application development as a system engineer",
      isCurrent: false,
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Profile
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              coconala Inc. にて新規事業プロダクトのフルスタック開発・設計を担当しています。
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              フロントエンドからバックエンドまで幅広い技術スタックを活用し、
              プロダクトの本質的な価値を追求した開発を心がけています。
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
            Experience
          </h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`border-l-2 pl-6 ${
                  exp.isCurrent
                    ? "border-blue-500"
                    : "border-gray-300 dark:border-gray-600"
                }`}
              >
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  {exp.title}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  {exp.company} | {exp.period}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
            Education
          </h3>
          <div className="text-center">
            <p className="text-gray-900 dark:text-white font-medium">
              Okayama Shoka University
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Faculty of Law | 2014 - 2018
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
