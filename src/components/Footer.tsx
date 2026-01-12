export function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/smartvain",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Wantedly",
      href: "https://www.wantedly.com/id/ryuuichi_amejima",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.453 14.555c-.171-.111-.372-.087-.569.073l-2.093 1.704a.426.426 0 01-.535 0l-2.093-1.704c-.197-.16-.398-.184-.569-.073-.171.111-.243.321-.195.573l.505 2.62a.423.423 0 01-.165.446l-2.093 1.516c-.197.143-.272.347-.197.54.075.193.262.311.495.311h2.506c.175 0 .333.099.398.253l.776 1.834c.087.206.262.329.465.329s.378-.123.465-.329l.776-1.834a.426.426 0 01.398-.253h2.506c.233 0 .42-.118.495-.311.075-.193 0-.397-.197-.54l-2.093-1.516a.423.423 0 01-.165-.446l.505-2.62c.048-.252-.024-.462-.195-.573zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="py-12 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="flex justify-center gap-6 mb-8">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Ryuichi Amejima. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
