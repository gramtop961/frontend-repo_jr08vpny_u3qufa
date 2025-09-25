import React, { useState } from 'react';
import TwitterLogo from './TwitterLogo';

function LogoShowcase() {
  const [color, setColor] = useState('#1DA1F2');
  const [size, setSize] = useState(140);

  return (
    <section className="my-12 grid md:grid-cols-2 gap-8 items-start">
      <div className="p-6 rounded-2xl bg-white/70 backdrop-blur border border-slate-200 shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Customize</h3>
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1">Color</label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="h-10 w-16 rounded cursor-pointer"
                aria-label="Pick color"
              />
              <input
                type="text"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="flex-1 px-3 py-2 border rounded-lg bg-white"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1">Size (px)</label>
            <input
              type="range"
              min="64"
              max="220"
              step="4"
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              className="w-full"
            />
            <div className="text-sm text-slate-600 mt-1">{size}px</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-6 p-8 rounded-2xl bg-gradient-to-br from-sky-50 to-white border border-slate-200 shadow-sm">
        <TwitterLogo size={size} color={color} />
        <pre className="w-full overflow-auto text-xs bg-slate-900 text-slate-100 p-4 rounded-lg">
{`import TwitterLogo from './components/TwitterLogo';

<TwitterLogo size={${size}} color="${color}" />`}
        </pre>
      </div>
    </section>
  );
}

export default LogoShowcase;
