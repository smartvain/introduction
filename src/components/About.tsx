export function About() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
  ];

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900"
    >
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
              Hello! I&apos;m a web developer passionate about creating
              user-friendly and visually appealing websites. I enjoy turning
              complex problems into simple, beautiful solutions.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              With experience in modern web technologies, I strive to build
              applications that are both performant and accessible.
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
            <div className="border-l-2 border-blue-500 pl-6">
              <h4 className="font-semibold text-gray-900 dark:text-white">
                Web Developer
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                Company Name | 2023 - Present
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Developing and maintaining web applications using modern
                technologies.
              </p>
            </div>
            <div className="border-l-2 border-gray-300 dark:border-gray-600 pl-6">
              <h4 className="font-semibold text-gray-900 dark:text-white">
                Junior Developer
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                Previous Company | 2021 - 2023
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Started my career building responsive websites and learning best
                practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
