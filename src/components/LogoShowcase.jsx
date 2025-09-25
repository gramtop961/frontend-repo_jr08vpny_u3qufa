import { useMemo, useState } from "react";
import TwitterLogo from "./TwitterLogo";

function CodeBlock({ code }) {
  return (
    <pre className="mt-6 overflow-auto rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-4 text-xs text-gray-800 dark:text-gray-100">
      <code>{code}</code>
    </pre>
  );
}

export default function LogoShowcase() {
  const [size, setSize] = useState(128);
  const [color, setColor] = useState("#1DA1F2");

  const exportCode = useMemo(() => `export default function TwitterLogo({ size = ${size}, color = "${color}", title = "Twitter logo", className = "", ...props }) {\n  return (\n    <svg role="img" aria-label={title} width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>\n      <title>{title}</title>\n      <path fill={color} d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.793-1.574 2.163-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.72 0-4.924 2.204-4.924 4.917 0 .39.045.765.127 1.124-4.09-.205-7.72-2.165-10.148-5.144-.424.729-.666 1.577-.666 2.476 0 1.708.87 3.213 2.19 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.376 4.6 3.415-1.68 1.318-3.809 2.105-6.102 2.105-.395 0-.779-.023-1.17-.067 2.189 1.402 4.768 2.221 7.557 2.221 9.054 0 14.004-7.496 14.004-13.986 0-.21 0-.423-.016-.634.962-.695 1.8-1.562 2.46-2.549z" />\n    </svg>\n  );\n}`,
  [size, color]);

  return (
    <section className="grid md:grid-cols-[1fr_1fr] gap-8 items-start">
      <div className="flex flex-col items-center gap-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/70 backdrop-blur p-6">
        <TwitterLogo size={size} color={color} />
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label className="flex flex-col gap-2 text-sm">
            <span className="text-gray-700 dark:text-gray-300">Size: {size}px</span>
            <input
              type="range"
              min="24"
              max="256"
              value={size}
              onChange={(e) => setSize(parseInt(e.target.value))}
              className="accent-sky-500"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm">
            <span className="text-gray-700 dark:text-gray-300">Color</span>
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="h-10 w-full rounded border border-gray-200 dark:border-gray-800 bg-transparent"
            />
          </label>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Copy & paste React component</h3>
        <CodeBlock code={exportCode} />
      </div>
    </section>
  );
}
