import { useRef, useState } from 'react';
import { ChevronDown, ChevronUp, RotateCcw, Sparkles } from 'lucide-react';
import { MYSTERY_POOL } from '../data/mockData';
import { sfx } from '../utils/sfx';

function drawWeightedItem() {
  const total = MYSTERY_POOL.reduce((sum, item) => sum + item.weight, 0);
  let rand = Math.random() * total;
  for (const item of MYSTERY_POOL) {
    rand -= item.weight;
    if (rand <= 0) return item;
  }
  return MYSTERY_POOL[0];
}

export function GachaSection({ onNavigateCatalog }) {
  const [phase, setPhase] = useState('idle'); // idle | shaking | revealed
  const [pulledItem, setPulledItem] = useState(null);
  const [pullCount, setPullCount] = useState(0);
  const [showOdds, setShowOdds] = useState(false);
  const timersRef = useRef([]);

  const clearTimers = () => {
    timersRef.current.forEach((id) => clearTimeout(id));
    timersRef.current = [];
  };

  const handleOpenBox = () => {
    if (phase === 'shaking') return;
    clearTimers();
    sfx.playClick();
    setPhase('shaking');

    // Tactile shake ticks during anticipation
    [180, 420, 660, 900].forEach((ms) => {
      timersRef.current.push(setTimeout(() => sfx.playShakeTick(), ms));
    });

    timersRef.current.push(
      setTimeout(() => {
        const result = drawWeightedItem();
        setPulledItem(result);
        setPullCount((c) => c + 1);
        setPhase('revealed');
        if (result.rarity === 'SECRET_CHASE') {
          sfx.playRevealSecret();
        } else {
          sfx.playRevealStandard();
        }
      }, 1150)
    );
  };

  const handleReset = () => {
    clearTimers();
    sfx.playClick();
    setPhase('idle');
    setPulledItem(null);
  };

  return (
    <div className="mx-auto max-w-3xl space-y-8">
      {/* Header */}
      <div className="space-y-2 text-center">
        <span className="font-mono text-xs font-semibold uppercase tracking-wider text-amber-400">
          Virtual Blind Box Simulator
        </span>
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-50 sm:text-3xl">
          Uji Keberuntungan Mystery Box
        </h1>
        <p className="mx-auto max-w-prose text-sm text-slate-400">
          Rasakan simulasi membuka kotak segel Blokees lengkap dengan efek suara kemenangan dan peluang
          mendapatkan varian Secret Chase.
        </p>
      </div>

      {/* Main Interactive Stage */}
      <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 sm:p-10">
        {phase !== 'revealed' ? (
          <div className="flex flex-col items-center gap-6 text-center">
            <button
              type="button"
              onClick={handleOpenBox}
              disabled={phase === 'shaking'}
              aria-label="Klik kotak misteri untuk membuka"
              className={`group relative overflow-hidden rounded-xl border border-slate-700 bg-[#020617] p-3 transition-colors duration-150 hover:border-amber-500/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 disabled:cursor-wait ${
                phase === 'shaking' ? 'animate-box-rumble border-amber-500' : ''
              }`}
            >
              <img
                src="/images/mystery-box.svg"
                alt="Kotak Mystery Blind Box Rickiest Toys"
                className="h-52 w-52 rounded-lg object-cover sm:h-60 sm:w-60"
              />
            </button>

            <div className="space-y-3">
              <button
                type="button"
                onClick={handleOpenBox}
                disabled={phase === 'shaking'}
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-amber-500 px-6 py-2.5 text-sm font-semibold text-slate-950 transition-colors duration-150 hover:bg-amber-400 active:scale-[0.98] disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                <Sparkles className="h-4 w-4" />
                <span>{phase === 'shaking' ? 'Membuka Segel...' : 'Buka Kotak Misteri'}</span>
              </button>

              <p className="font-mono text-xs tabular-nums text-slate-400">
                Total percobaan sesi ini: {pullCount}
              </p>
            </div>
          </div>
        ) : (
          <div className="animate-reveal-enter grid grid-cols-1 items-center gap-6 sm:grid-cols-12">
            <div className="sm:col-span-5">
              <div
                className={`overflow-hidden rounded-xl border bg-[#020617] ${
                  pulledItem.rarity === 'SECRET_CHASE' ? 'border-amber-500' : 'border-slate-700'
                }`}
              >
                <img
                  src={pulledItem.image}
                  alt={pulledItem.characterName}
                  className="aspect-square w-full object-cover"
                />
              </div>
            </div>

            <div className="min-w-0 space-y-4 sm:col-span-7">
              <div className="space-y-1.5">
                <span
                  className={`inline-block rounded-full border px-2.5 py-0.5 font-mono text-xs font-semibold ${
                    pulledItem.rarity === 'SECRET_CHASE'
                      ? 'border-amber-500/40 bg-amber-500/15 text-amber-400'
                      : 'border-slate-700 bg-slate-800 text-slate-300'
                  }`}
                >
                  {pulledItem.rarityLabel}
                </span>
                <h2 className="text-xl font-bold text-slate-50">{pulledItem.characterName}</h2>
                <p className="text-xs font-medium text-slate-400">{pulledItem.series}</p>
              </div>

              <p className="text-sm leading-relaxed text-slate-300">{pulledItem.description}</p>

              {/* Tabular Stats */}
              <div className="grid grid-cols-2 gap-3 border-y border-slate-800 py-3">
                <div>
                  <span className="block text-xs text-slate-400">Power Rating</span>
                  <span className="font-mono text-base font-semibold tabular-nums text-slate-50">
                    {pulledItem.powerStat} / 100
                  </span>
                </div>
                <div>
                  <span className="block text-xs text-slate-400">Artikulasi Sendi</span>
                  <span className="font-mono text-base font-semibold tabular-nums text-slate-50">
                    {pulledItem.articulationJoints} Titik
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-2.5 sm:flex-row">
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-colors duration-150 hover:bg-amber-400 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                >
                  <RotateCcw className="h-4 w-4" />
                  <span>Buka Box Lainnya</span>
                </button>
                <button
                  type="button"
                  onClick={onNavigateCatalog}
                  className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-slate-700 bg-[#020617] px-4 py-2.5 text-sm font-medium text-slate-200 transition-colors duration-150 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                >
                  Cek Stok Asli
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Progressive Disclosure: Odds & Drop List */}
      <div className="rounded-xl border border-slate-800 bg-slate-900">
        <button
          type="button"
          onClick={() => {
            sfx.playClick();
            setShowOdds((prev) => !prev);
          }}
          aria-expanded={showOdds}
          className="flex min-h-[48px] w-full items-center justify-between px-5 py-3 text-left text-sm font-medium text-slate-200 transition-colors duration-150 hover:text-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
        >
          <span>Daftar Karakter &amp; Peluang Kemunculan</span>
          {showOdds ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>

        {showOdds && (
          <div className="divide-y divide-slate-800 border-t border-slate-800 px-5">
            {MYSTERY_POOL.map((item) => (
              <div key={item.id} className="flex items-center justify-between gap-4 py-3 text-sm">
                <div className="min-w-0">
                  <p className="truncate font-medium text-slate-100">{item.characterName}</p>
                  <p className="truncate text-xs text-slate-400">{item.series}</p>
                </div>
                <span className="shrink-0 font-mono text-xs tabular-nums text-amber-400">
                  {item.rarityLabel}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
