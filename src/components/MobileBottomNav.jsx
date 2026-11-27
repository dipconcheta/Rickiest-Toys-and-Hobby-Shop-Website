export function MobileBottomNav({ tabs, activeTab, onTabChange }) {
  return (
    <nav
      aria-label="Navigasi seluler"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-800 bg-[#020617]/95 backdrop-blur-md md:hidden"
    >
      <div className="grid grid-cols-4 gap-1 px-2 py-1.5">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onTabChange(tab.id)}
              className={`flex min-h-[48px] flex-col items-center justify-center gap-1 rounded-lg px-1 py-1.5 text-[11px] font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                isActive ? 'bg-slate-900 text-amber-400' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Icon className="h-4 w-4" />
              <span className="truncate">{tab.shortLabel}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
