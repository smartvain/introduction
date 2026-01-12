import Image from "next/image";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Spline 3D Background */}
      <iframe
        // src="https://my.spline.design/stackableglass-u6r2TcSFhASK82rBjRJjfa1D-s6K/"
        // src="https://my.spline.design/shadowvectorscopycopy-Q1O5B8liGaakufjanO3wBZNi-xHM/"
        src="https://my.spline.design/orbitalbluestar-wkHzq8eifOo3S5eIDDlR27nL/"
        frameBorder="0"
        className="absolute inset-0 w-full h-full"
      />

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <div className="mb-8 animate-fade-in">
          <Image
            src="/icon.PNG"
            alt="Ryuichi Amejima"
            width={128}
            height={128}
            className="mx-auto mb-6 rounded-full shadow-lg object-cover"
            priority
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in-up drop-shadow-sm">
          Ryuichi Amejima
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in-up animation-delay-200">
          Fullstack Engineer
        </p>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
          プロダクトの本質価値を見据えた開発
        </p>
        <div className="mt-10 animate-fade-in-up animation-delay-600">
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-medium hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors"
          >
            Learn More
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
