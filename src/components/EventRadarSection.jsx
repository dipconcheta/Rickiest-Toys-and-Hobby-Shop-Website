import { useState } from 'react';
import { ArrowRight, Calendar, Check, Clock, MapPin } from 'lucide-react';
import { ACTIVE_EVENT, STORE_INFO } from '../data/mockData';
import { sfx } from '../utils/sfx';

export function EventRadarSection({ onNavigateGacha }) {
  const [selectedCode, setSelectedCode] = useState('A');
  const activeZone =
    ACTIVE_EVENT.zones.find((z) => z.code === selectedCode) || ACTIVE_EVENT.zones[0];

  const handleSelectZone = (code) => {
    sfx.playClick();
    setSelectedCode(code);
  };

  return (
    <div className="space-y-8">
      {/* Event Announcement Header */}
      <section className="rounded-xl border border-slate-800 bg-slate-900 p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="min-w-0 space-y-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-xs font-semibold text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {ACTIVE_EVENT.status}
            </span>
            <h1 className="text-2xl font-extrabold tracking-tight text-slate-50 sm:text-3xl">
              Pop-Up Booth @ {ACTIVE_EVENT.mallName}
            </h1>
            <p className="max-w-prose text-sm text-slate-400">
              Kunjungi stan pameran Rickiest Toys di pusat kota Palembang. Jelajahi dinding Blind Box,
              display diorama mecha, dan meja demo Pokémon TCG.
            </p>
          </div>

          <div className="grid shrink-0 grid-cols-1 gap-2 text-xs text-slate-300 sm:grid-cols-3 md:grid-cols-1">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-amber-400" />
              <span className="font-mono tabular-nums">{ACTIVE_EVENT.dateRange}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-amber-400" />
              <span>{ACTIVE_EVENT.venueAtrium}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-amber-400" />
              <span className="font-mono tabular-nums">{ACTIVE_EVENT.openingHours}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive 2D Booth Floor Plan + Zone Inspector */}
      <section className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-5 lg:col-span-7">
          <div className="mb-4 flex items-center justify-between gap-2">
            <h2 className="text-sm font-semibold text-slate-100">Denah Stan Interaktif</h2>
            <span className="text-xs text-slate-400">Klik zona untuk melihat fasilitas</span>
          </div>

          {/* Clean Architectural Booth Grid */}
          <div className="relative rounded-xl border border-slate-800 bg-[#020617] p-4 sm:p-6">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {ACTIVE_EVENT.zones.slice(0, 2).map((zone) => {
                const isSelected = selectedCode === zone.code;
                return (
                  <button
                    key={zone.code}
                    type="button"
                    onClick={() => handleSelectZone(zone.code)}
                    className={`flex min-h-[104px] flex-col items-start justify-between rounded-lg border p-4 text-left transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                      isSelected
                        ? 'border-amber-500 bg-amber-500/10 text-slate-50'
                        : 'border-slate-800 bg-slate-900/70 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
                    }`}
                  >
                    <span
                      className={`font-mono text-xs font-semibold ${
                        isSelected ? 'text-amber-400' : 'text-slate-400'
                      }`}
                    >
                      ZONA {zone.code}
                    </span>
                    <span className="text-sm font-semibold">{zone.shortLabel}</span>
                  </button>
                );
              })}

              {/* Zone C spans full width near atrium entrance */}
              {(() => {
                const zoneC = ACTIVE_EVENT.zones[2];
                const isSelected = selectedCode === zoneC.code;
                return (
                  <button
                    type="button"
                    onClick={() => handleSelectZone(zoneC.code)}
                    className={`flex min-h-[88px] flex-col items-start justify-between rounded-lg border p-4 text-left transition-colors duration-150 sm:col-span-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                      isSelected
                        ? 'border-amber-500 bg-amber-500/10 text-slate-50'
                        : 'border-slate-800 bg-slate-900/70 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
                    }`}
                  >
                    <span
                      className={`font-mono text-xs font-semibold ${
                        isSelected ? 'text-amber-400' : 'text-slate-400'
                      }`}
                    >
                      ZONA {zoneC.code}
                    </span>
                    <span className="text-sm font-semibold">{zoneC.shortLabel}</span>
                  </button>
                );
              })()}
            </div>

            <div className="mt-4 border-t border-dashed border-slate-800 pt-3 text-center font-mono text-[11px] uppercase tracking-wider text-slate-500">
              Pintu Masuk Main Atrium Palembang Icon
            </div>
          </div>
        </div>

        {/* Selected Zone Detail Panel */}
        <div className="flex flex-col justify-between gap-6 rounded-xl border border-slate-800 bg-slate-900 p-6 lg:col-span-5">
          <div className="space-y-4">
            <div className="space-y-1">
              <span className="font-mono text-xs font-semibold text-amber-400">
                ZONA {activeZone.code}
              </span>
              <h3 className="text-lg font-bold text-slate-50">{activeZone.title}</h3>
            </div>

            <p className="text-sm leading-relaxed text-slate-400">{activeZone.description}</p>

            <div className="space-y-2 border-t border-slate-800 pt-4">
              <p className="text-xs font-medium text-slate-400">Fasilitas di zona ini:</p>
              <ul className="space-y-2">
                {activeZone.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2.5 text-sm text-slate-200">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <button
            type="button"
            onClick={onNavigateGacha}
            className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-amber-500 px-4 py-2.5 text-sm font-semibold text-slate-950 transition-colors duration-150 hover:bg-amber-400 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            <span>Coba Blind Box Digital</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      {/* Flagship Store Reference */}
      <section className="flex flex-col justify-between gap-4 rounded-xl border border-slate-800 bg-slate-900 p-5 sm:flex-row sm:items-center">
        <div className="min-w-0 space-y-1">
          <h2 className="text-sm font-semibold text-slate-100">Toko Fisik Utama (18 Ilir)</h2>
          <p className="text-xs leading-relaxed text-slate-400">{STORE_INFO.address}</p>
        </div>
        <span className="shrink-0 font-mono text-xs tabular-nums text-amber-400">
          {STORE_INFO.hours}
        </span>
      </section>
    </div>
  );
}
