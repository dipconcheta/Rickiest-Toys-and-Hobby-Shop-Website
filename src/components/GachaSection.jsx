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
  const [phase, setPhase] = useState('idle');
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
    setPhase('idle');
    setPulledItem(null);
  };

  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <div className="space-y-2 text-center">
        <span className="font-mono text-xs font-semibold uppercase tracking-wider text-red-600">
          Virtual Blind Box Simulator
        </span>
        <h1 className="text-2xl font-extrabold tracking-tight text-zinc-950 sm:text-3xl">
          Uji Keberuntungan Mystery Box
        </h1>
        <p className="mx-auto max-w-prose text-sm text-zinc-600">
          Rasakan simulasi membuka kotak segel Blokees lengkap dengan efek suara kemenangan dan peluang
          mendapatkan varian Secret Chase.
        </p>
      </div>

      {/* Main Interactive Stage */}
      <div className="rounded-xl border border-zinc-200 bg-white p-6 sm:p-10">
        {phase !== 'revealed' ? (
          <div className="flex flex-col items-center gap-6 text-center">
            <button
              type="button"
              onClick={handleOpenBox}
              disabled={phase === 'shaking'}
              aria-label="Klik kotak misteri untuk membuka"
              className={`group relative overflow-hidden rounded-xl border bg-zinc-50 p-3 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 disabled:cursor-wait ${
                phase === 'shaking'
                  ? 'animate-box-rumble border-red-500'
                  : 'border-zinc-200 hover:border-red-400'
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
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-red-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-red-700 active:scale-[0.98] disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
              >
                <Sparkles className="h-4 w-4" />
                <span>{phase === 'shaking' ? 'Membuka Segel...' : 'Buka Kotak Misteri'}</span>
              </button>

              <p className="font-mono text-xs tabular-nums text-zinc-500">
                Total percobaan sesi ini: {pullCount}
              </p>
            </div>
          </div>
        ) : (
          <div className="animate-reveal-enter grid grid-cols-1 items-center gap-6 sm:grid-cols-12">
            <div className="sm:col-span-5">
              <div
                className={`overflow-hidden rounded-xl border bg-zinc-50 ${
                  pulledItem.rarity === 'SECRET_CHASE' ? 'border-red-500' : 'border-zinc-200'
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
                      ? 'border-red-300 bg-red-50 text-red-700'
                      : 'border-zinc-200 bg-zinc-100 text-zinc-700'
                  }`}
                >
                  {pulledItem.rarityLabel}
                </span>
                <h2 className="text-xl font-bold text-zinc-950">{pulledItem.characterName}</h2>
                <p className="text-xs font-medium text-zinc-500">{pulledItem.series}</p>
              </div>

              <p className="text-sm leading-relaxed text-zinc-600">{pulledItem.description}</p>

              <div className="grid grid-cols-2 gap-3 border-y border-zinc-200 py-3">
                <div>
                  <span className="block text-xs text-zinc-500">Power Rating</span>
                  <span className="font-mono text-base font-bold tabular-nums text-zinc-950">
                    {pulledItem.powerStat} / 100
                  </span>
                </div>
                <div>
                  <span className="block text-xs text-zinc-500">Artikulasi Sendi</span>
                  <span className="font-mono text-base font-bold tabular-nums text-zinc-950">
                    {pulledItem.articulationJoints} Titik
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-2.5 sm:flex-row">
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-red-700 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
                >
                  <RotateCcw className="h-4 w-4" />
                  <span>Buka Box Lainnya</span>
                </button>
                <button
                  type="button"
                  onClick={onNavigateCatalog}
                  className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-800 transition-colors duration-150 hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
                >
                  Cek Stok Asli
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Progressive Disclosure: Odds & Drop List */}
      <div className="rounded-xl border border-zinc-200 bg-white">
        <button
          type="button"
          onClick={() => {
            setShowOdds((prev) => !prev);
          }}
          aria-expanded={showOdds}
          className="flex min-h-[48px] w-full items-center justify-between px-5 py-3 text-left text-sm font-semibold text-zinc-800 transition-colors duration-150 hover:text-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
        >
          <span>Daftar Karakter &amp; Peluang Kemunculan</span>
          {showOdds ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>

        {showOdds && (
          <div className="divide-y divide-zinc-200 border-t border-zinc-200 px-5">
            {MYSTERY_POOL.map((item) => (
              <div key={item.id} className="flex items-center justify-between gap-4 py-3 text-sm">
                <div className="min-w-0">
                  <p className="truncate font-semibold text-zinc-900">{item.characterName}</p>
                  <p className="truncate text-xs text-zinc-500">{item.series}</p>
                </div>
                <span className="shrink-0 font-mono text-xs font-semibold tabular-nums text-red-600">
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
