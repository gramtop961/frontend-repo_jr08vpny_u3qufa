import { Twitter } from "lucide-react";

export default function SocialCTA() {
  return (
    <section className="mx-auto max-w-3xl rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/70 backdrop-blur p-6 flex items-center justify-between gap-4">
      <div>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Like this demo?</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">Share it on Twitter and tag us!</p>
      </div>
      <a
        href="https://twitter.com/intent/tweet?text=Check%20out%20this%20customizable%20Twitter%20logo%20demo%20built%20with%20Vite%20%2B%20React%20%2B%20Tailwind!"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 transition-colors"
      >
        <Twitter className="h-5 w-5" />
        <span>Tweet</span>
      </a>
    </section>
  );
}
