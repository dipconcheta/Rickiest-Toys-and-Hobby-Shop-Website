import { Volume2, VolumeX } from 'lucide-react';

export function Header({ tabs, activeTab, onTabChange, sfxEnabled, onToggleSfx }) {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800 bg-[#020617]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand Identity */}
        <button
          type="button"
          onClick={() => onTabChange('intro')}
          className="flex min-h-[44px] min-w-0 items-center gap-3 rounded-lg text-left transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-500 text-sm font-extrabold tracking-tight text-slate-950">
            RT
          </span>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="truncate text-sm font-bold tracking-tight text-slate-50 sm:text-base">
                Rickiest Toys
              </span>
              <span className="hidden rounded border border-slate-700 bg-slate-900 px-1.5 py-0.5 font-mono text-[11px] font-medium text-slate-400 sm:inline-block">
                PALEMBANG
              </span>
            </div>
            <p className="truncate text-xs text-slate-400">Hobby Shop & Exhibition Hub</p>
          </div>
        </button>

        {/* Desktop Primary Navigation (4 items) */}
        <nav aria-label="Navigasi utama" className="hidden items-center gap-1 md:flex">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => onTabChange(tab.id)}
                className={`min-h-[44px] rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                  isActive
                    ? 'bg-slate-900 text-amber-400 ring-1 ring-inset ring-slate-700'
                    : 'text-slate-400 hover:bg-slate-900/60 hover:text-slate-100'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </nav>

        {/* Audio SFX Toggle (No BGM) */}
        <button
          type="button"
          onClick={onToggleSfx}
          aria-pressed={sfxEnabled}
          aria-label={sfxEnabled ? 'Matikan efek suara' : 'Aktifkan efek suara'}
          className={`flex min-h-[44px] shrink-0 items-center gap-2 rounded-lg border px-3 text-xs font-semibold transition-colors duration-150 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
            sfxEnabled
              ? 'border-amber-500/40 bg-amber-500/10 text-amber-400 hover:bg-amber-500/15'
              : 'border-slate-800 bg-slate-900 text-slate-400 hover:border-slate-700 hover:text-slate-200'
          }`}
        >
          {sfxEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
          <span className="font-mono">{sfxEnabled ? 'SFX ON' : 'SFX OFF'}</span>
        </button>
      </div>
    </header>
  );
}
