import { useState } from 'react';
import { Calendar, Clock, Compass, ExternalLink, MapPin, Navigation } from 'lucide-react';
import { ACTIVE_EVENT, STORE_INFO } from '../data/mockData';
import { sfx } from '../utils/sfx';

export function EventRadarSection() {
  const [selectedId, setSelectedId] = useState('booth');
  const activePoint =
    ACTIVE_EVENT.landmarks.find((item) => item.id === selectedId) || ACTIVE_EVENT.landmarks[0];

  const handleSelect = (id) => {
    sfx.playClick();
    setSelectedId(id);
  };

  return (
    <div className="space-y-8">
      {/* Event Header */}
      <section className="rounded-xl border border-zinc-200 bg-white p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="min-w-0 space-y-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 font-mono text-xs font-semibold text-emerald-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
              {ACTIVE_EVENT.status} · {ACTIVE_EVENT.boothCode}
            </span>
            <h1 className="text-2xl font-extrabold tracking-tight text-zinc-950 sm:text-3xl">
              Lokasi Pameran @ {ACTIVE_EVENT.mallName}
            </h1>
            <p className="max-w-prose text-sm text-zinc-600">
              Temukan titik area pameran Main Atrium dan posisi Booth Rickiest Toys ({ACTIVE_EVENT.boothCode}) di{' '}
              {ACTIVE_EVENT.floor} Palembang Icon Mall.
            </p>
          </div>

          <div className="grid shrink-0 grid-cols-1 gap-2 text-xs text-zinc-700 sm:grid-cols-3 md:grid-cols-1">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-orange-600" />
              <span className="font-mono font-medium tabular-nums">{ACTIVE_EVENT.dateRange}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-orange-600" />
              <span>{ACTIVE_EVENT.floor} · Main Atrium</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-orange-600" />
              <span className="font-mono font-medium tabular-nums">{ACTIVE_EVENT.openingHours}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Mall Floor Plan + Direction Panel */}
      <section className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Mall Floor Plan Diagram */}
        <div className="rounded-xl border border-zinc-200 bg-white p-5 lg:col-span-7">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
            <div>
              <h2 className="text-sm font-bold text-zinc-950">
                Denah Lantai Ground — Palembang Icon Mall
              </h2>
              <p className="text-xs text-zinc-500">Klik titik peta untuk melihat rute menuju booth kami</p>
            </div>
            <span className="rounded border border-zinc-200 bg-zinc-100 px-2 py-0.5 font-mono text-[11px] font-semibold text-zinc-600">
              LANTAI GF
            </span>
          </div>

          {/* Architectural Mall Schematic */}
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 sm:p-5">
            <div className="grid grid-cols-12 gap-3">
              {/* Top Row: Tenant Wing + Escalator */}
              <div className="col-span-5 flex min-h-[56px] items-center justify-center rounded-lg border border-zinc-200 bg-white px-2 text-center text-[11px] font-medium text-zinc-400">
                Koridor Retail Barat
              </div>
              <button
                type="button"
                onClick={() => handleSelect('escalator')}
                className={`col-span-7 flex min-h-[56px] items-center justify-center gap-2 rounded-lg border px-3 text-xs font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 ${
                  selectedId === 'escalator'
                    ? 'border-orange-500 bg-orange-50 text-orange-700'
                    : 'border-zinc-300 bg-white text-zinc-700 hover:border-zinc-400'
                }`}
              >
                <Compass className="h-3.5 w-3.5 shrink-0" />
                <span>Eskalator Tengah &amp; Lift</span>
              </button>

              {/* Center Row: Main Atrium Exhibition Area with Rickiest Booth Pin */}
              <div className="col-span-12 rounded-xl border-2 border-dashed border-zinc-300 bg-white p-4">
                <div className="mb-3 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => handleSelect('atrium')}
                    className={`rounded-md px-2 py-1 text-left font-mono text-[11px] font-bold uppercase tracking-wider transition-colors ${
                      selectedId === 'atrium'
                        ? 'bg-orange-50 text-orange-700'
                        : 'text-zinc-500 hover:text-zinc-900'
                    }`}
                  >
                    Area Pameran · Main Atrium
                  </button>
                  <span className="font-mono text-[11px] text-zinc-400">400 m²</span>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-12">
                  {/* Panggung / Exhibition Area */}
                  <button
                    type="button"
                    onClick={() => handleSelect('atrium')}
                    className={`flex min-h-[88px] flex-col items-center justify-center rounded-lg border p-3 text-center transition-colors duration-150 sm:col-span-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 ${
                      selectedId === 'atrium'
                        ? 'border-orange-500 bg-orange-50 text-orange-800'
                        : 'border-zinc-200 bg-zinc-50 text-zinc-600 hover:border-zinc-300'
                    }`}
                  >
                    <span className="text-xs font-bold">Panggung &amp; Area Pameran</span>
                    <span className="mt-1 text-[11px] text-zinc-500">Event Hobi &amp; Komunitas</span>
                  </button>

                  {/* Rickiest Toys Booth Highlight Pin */}
                  <button
                    type="button"
                    onClick={() => handleSelect('booth')}
                    className={`flex min-h-[88px] flex-col items-start justify-between rounded-lg border-2 p-3.5 text-left transition-colors duration-150 sm:col-span-7 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 ${
                      selectedId === 'booth'
                        ? 'border-orange-600 bg-orange-600 text-white'
                        : 'border-orange-400 bg-orange-50 text-orange-950 hover:bg-orange-100'
                    }`}
                  >
                    <div className="flex w-full items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold">
                        <MapPin className="h-3.5 w-3.5" />
                        BOOTH B-04
                      </span>
                      <span
                        className={`rounded px-1.5 py-0.5 text-[10px] font-bold ${
                          selectedId === 'booth'
                            ? 'bg-white/20 text-white'
                            : 'bg-orange-200 text-orange-800'
                        }`}
                      >
                        LOKASI KAMI
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-extrabold">Rickiest Toys &amp; Hobby</p>
                      <p
                        className={`text-[11px] ${
                          selectedId === 'booth' ? 'text-orange-100' : 'text-orange-700'
                        }`}
                      >
                        Sisi Kanan Main Atrium
                      </p>
                    </div>
                  </button>
                </div>
              </div>

              {/* Bottom Row: Main Entrance */}
              <button
                type="button"
                onClick={() => handleSelect('entrance')}
                className={`col-span-12 flex min-h-[52px] items-center justify-center gap-2 rounded-lg border px-4 text-xs font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 ${
                  selectedId === 'entrance'
                    ? 'border-orange-500 bg-orange-50 text-orange-700'
                    : 'border-zinc-300 bg-white text-zinc-700 hover:border-zinc-400'
                }`}
              >
                <Navigation className="h-3.5 w-3.5" />
                <span>Pintu Masuk Utama · Lobby Selatan (Jl. POM IX)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Selected Landmark Detail & Directions */}
        <div className="flex flex-col justify-between gap-6 rounded-xl border border-zinc-200 bg-white p-6 lg:col-span-5">
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono text-xs font-bold text-orange-600">{activePoint.code}</span>
              <span className="rounded-full border border-zinc-200 bg-zinc-100 px-2.5 py-0.5 font-mono text-[11px] font-medium text-zinc-700">
                {activePoint.distance}
              </span>
            </div>

            <div className="space-y-1.5">
              <h3 className="text-lg font-bold text-zinc-950">{activePoint.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-600">{activePoint.description}</p>
            </div>

            <div className="space-y-2 border-t border-zinc-200 pt-4">
              <p className="text-xs font-semibold text-zinc-500">Panduan Arah ke Booth:</p>
              <ol className="space-y-2 text-sm text-zinc-700">
                {activePoint.directions.map((step, idx) => (
                  <li key={step} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-50 font-mono text-[11px] font-bold text-orange-700">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <a
            href={STORE_INFO.mallMapsUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => sfx.playClick()}
            className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-orange-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-orange-700 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600"
          >
            <span>Buka Rute Palembang Icon</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
