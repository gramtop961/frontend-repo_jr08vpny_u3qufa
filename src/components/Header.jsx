import React from 'react';

function Header() {
  return (
    <header className="flex flex-col items-center gap-4 text-center py-10">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Crisp Twitter Logo Component</h1>
      <p className="text-slate-600 max-w-2xl">
        A reusable, accessible Twitter logo (old bird) React component with color and size controls. Styled with Tailwind.
      </p>
    </header>
  );
}

export default Header;
