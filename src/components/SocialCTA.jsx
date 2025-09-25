import React from 'react';
import { Twitter } from 'lucide-react';

function SocialCTA() {
  return (
    <section className="my-10 p-6 rounded-2xl bg-white/70 backdrop-blur border border-slate-200 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-xl bg-sky-100 text-sky-600">
          <Twitter className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-xl font-semibold">Follow the vibes</h2>
          <p className="text-slate-600">Stay up to date with the latest drops and components.</p>
        </div>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noreferrer"
          className="ml-auto inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-600 text-white hover:bg-sky-700 transition-colors"
        >
          <Twitter className="w-4 h-4" />
          Follow
        </a>
      </div>
    </section>
  );
}

export default SocialCTA;
