import { Volume2, VolumeX } from 'lucide-react';
import { RickiestLogo } from './BrandLogos';

export function Header({ tabs, activeTab, onTabChange, sfxEnabled, onToggleSfx }) {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand Identity */}
        <button
          type="button"
          onClick={() => onTabChange('intro')}
          className="flex min-h-[44px] min-w-0 items-center gap-3 rounded-lg text-left transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600"
        >
          <RickiestLogo className="h-9 w-9" />
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="truncate text-sm font-extrabold tracking-tight text-zinc-950 sm:text-base">
                Rickiest Toys
              </span>
              <span className="hidden rounded border border-zinc-200 bg-zinc-100 px-1.5 py-0.5 font-mono text-[11px] font-semibold text-zinc-600 sm:inline-block">
                PALEMBANG
              </span>
            </div>
            <p className="truncate text-xs text-zinc-500">Hobby Shop &amp; Mall Exhibition</p>
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
                onClick={() => onTabChange(tab.id)}
                className={`min-h-[44px] rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 ${
                  isActive
                    ? 'bg-orange-50 text-orange-700 ring-1 ring-inset ring-orange-200'
                    : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </nav>

        {/* Audio SFX Toggle */}
        <button
          type="button"
          onClick={onToggleSfx}
          aria-pressed={sfxEnabled}
          aria-label={sfxEnabled ? 'Matikan efek suara' : 'Aktifkan efek suara'}
          className={`flex min-h-[44px] shrink-0 items-center gap-2 rounded-lg border px-3 text-xs font-semibold transition-colors duration-150 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 ${
            sfxEnabled
              ? 'border-orange-300 bg-orange-50 text-orange-700 hover:bg-orange-100'
              : 'border-zinc-200 bg-zinc-50 text-zinc-500 hover:border-zinc-300 hover:text-zinc-800'
          }`}
        >
          {sfxEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
          <span className="font-mono">{sfxEnabled ? 'SFX ON' : 'SFX OFF'}</span>
        </button>
      </div>
    </header>
  );
}
