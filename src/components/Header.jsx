import { RickiestLogo } from './BrandLogos';

export function Header({ tabs, activeTab, onTabChange }) {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6 lg:px-8">
        {/* Brand Identity */}
        <button
          type="button"
          onClick={() => onTabChange('intro')}
          className="flex min-h-[44px] min-w-0 cursor-pointer items-center gap-3 rounded-lg text-left transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
        >
          <RickiestLogo className="h-9 w-9" />
          <div className="min-w-0 leading-tight">
            <span className="block truncate text-sm font-extrabold tracking-tight text-zinc-950 sm:text-base">
              Rickiest Toys
            </span>
            <span className="block truncate text-xs font-medium text-zinc-500">
              Palembang
            </span>
          </div>
        </button>

        {/* Desktop Primary Navigation */}
        <nav aria-label="Navigasi utama" className="hidden items-center gap-1 md:flex">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                aria-current={isActive ? 'page' : undefined}
                onClick={() => onTabChange(tab.id)}
                className={`min-h-[44px] cursor-pointer rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 ${
                  isActive
                    ? 'bg-red-50 text-red-700 ring-1 ring-inset ring-red-200'
                    : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </nav>

        {/* Quick Contact CTA */}
        <a
          href="#kontak-toko"
          className="inline-flex min-h-[44px] shrink-0 cursor-pointer items-center rounded-lg border border-zinc-300 bg-white px-3.5 text-xs font-semibold text-zinc-800 transition-colors duration-150 hover:border-red-400 hover:text-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
        >
          Hubungi Toko
        </a>
      </div>
    </header>
  );
}
