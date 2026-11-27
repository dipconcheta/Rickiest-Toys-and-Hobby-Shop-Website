import { useEffect, useState } from 'react';
import { ArrowRight, MapPin, Pause, Play, RotateCcw } from 'lucide-react';
import { HOBBY_PILLARS, STORE_INFO } from '../data/mockData';
import { sfx } from '../utils/sfx';

const VIDEO_CHAPTERS = [
  {
    time: 0,
    label: '00:00',
    title: 'Flagship Store 18 Ilir',
    caption: 'Etalase koleksi Gunpla, Blokees, dan ruang komunitas di Jl. AKBP H.M. Amin.',
    image: '/images/hero-showcase.jpg',
  },
  {
    time: 15,
    label: '00:15',
    title: 'Blind Box & Model Kit Wall',
    caption: 'Ratusan pilihan kotak misteri segel pabrik dengan varian Secret Chase.',
    image: '/images/prod-blokees.jpg',
  },
  {
    time: 30,
    label: '00:30',
    title: 'Pop-Up Exhibition Palembang Icon',
    caption: 'Suasana pameran mall, display diorama kaca, dan meja TCG komunitas Palembang.',
    image: '/images/prod-gunpla.jpg',
  },
];

export function IntroSection({ onNavigate }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [imageError, setImageError] = useState({});

  useEffect(() => {
    if (!isPlaying) return undefined;
    const timer = setInterval(() => {
      setElapsed((prev) => {
        if (prev >= 45) {
          setIsPlaying(false);
          return 45;
        }
        return prev + 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const activeChapter =
    elapsed >= 30 ? VIDEO_CHAPTERS[2] : elapsed >= 15 ? VIDEO_CHAPTERS[1] : VIDEO_CHAPTERS[0];

  const handleTogglePlay = () => {
    sfx.playClick();
    if (elapsed >= 45) {
      setElapsed(0);
      setIsPlaying(true);
      return;
    }
    setIsPlaying((prev) => !prev);
  };

  const handleRestart = () => {
    sfx.playClick();
    setElapsed(0);
    setIsPlaying(true);
  };

  const formatTime = (sec) => `00:${String(sec).padStart(2, '0')}`;

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
        <div className="min-w-0 space-y-6 lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-xs font-medium text-slate-300">
            <MapPin className="h-3.5 w-3.5 text-amber-400" />
            <span>18 Ilir, Palembang · Pop-Up Palembang Icon</span>
          </div>

          <h1 className="text-2xl font-extrabold tracking-tight text-slate-50 sm:text-4xl lg:text-[42px] lg:leading-[1.12]">
            Pusat Hobi, Blind Box &amp; Pop Culture Terlengkap di Palembang.
          </h1>

          <p className="max-w-prose text-sm leading-relaxed text-slate-400 sm:text-base">
            Selamat datang di portal interaktif <strong className="font-semibold text-slate-200">{STORE_INFO.name}</strong>.
            Coba sensasi unboxing Blind Box virtual, temukan denah pameran mall kami, dan jelajahi koleksi resmi
            Gunpla, Blokees, serta Trading Card Game.
          </p>

          <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => onNavigate('gacha')}
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-colors duration-150 hover:bg-amber-400 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#020617]"
            >
              <span>Coba Blind Box</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate('radar')}
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-5 py-2.5 text-sm font-medium text-slate-200 transition-colors duration-150 hover:border-slate-600 hover:bg-slate-800 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              <span>Jadwal Pameran Mall</span>
            </button>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="min-w-0 lg:col-span-5">
          <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
            {!imageError.hero ? (
              <img
                src="/images/hero-showcase.jpg"
                alt="Koleksi figur Blokees, Gunpla, dan blind box di Rickiest Toys Palembang"
                onError={() => setImageError((prev) => ({ ...prev, hero: true }))}
                className="aspect-[16/10] w-full object-cover"
              />
            ) : (
              <div className="flex aspect-[16/10] items-center justify-center bg-slate-900 p-6 text-center text-xs text-slate-400">
                Visual Etalase Rickiest Toys &amp; Hobby
              </div>
            )}
            <div className="flex items-center justify-between border-t border-slate-800 px-4 py-3 text-xs">
              <span className="font-medium text-slate-300">Koleksi Resmi &amp; Segel Pabrik</span>
              <span className="font-mono tabular-nums text-amber-400">EST. PALEMBANG</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Pillars Grid (Max 3 data points per card, flat border) */}
      <section className="space-y-4">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-50 sm:text-xl">Tiga Pilar Koleksi</h2>
            <p className="text-sm text-slate-400">Fokus lini hobi utama di toko fisik 18 Ilir dan stan pameran.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {HOBBY_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="flex min-w-0 flex-col justify-between gap-4 rounded-xl border border-slate-800 bg-slate-900 p-5"
            >
              <div className="space-y-2">
                <span className="inline-block font-mono text-xs font-medium text-amber-400">
                  {pillar.metric}
                </span>
                <h3 className="text-base font-semibold text-slate-50">{pillar.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{pillar.description}</p>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('catalog', pillar.slug)}
                className="inline-flex min-h-[44px] items-center gap-1.5 self-start text-xs font-semibold text-slate-300 transition-colors duration-150 hover:text-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                <span>Lihat Katalog</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Video Showcase Reel (45s Multimedia Requirement) */}
      <section className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="relative aspect-video bg-[#09090B] lg:col-span-7">
            <img
              src={activeChapter.image}
              alt={activeChapter.title}
              className={`h-full w-full object-cover transition-opacity duration-200 ${
                isPlaying ? 'opacity-90' : 'opacity-70'
              }`}
            />
            <div className="absolute inset-x-0 bottom-0 border-t border-slate-800/80 bg-[#020617]/90 px-4 py-3">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleTogglePlay}
                    aria-label={isPlaying ? 'Jeda video teaser' : 'Putar video teaser'}
                    className="flex h-11 w-11 items-center justify-center rounded-lg bg-amber-500 text-slate-950 transition-colors duration-150 hover:bg-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                  >
                    {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  </button>
                  <button
                    type="button"
                    onClick={handleRestart}
                    aria-label="Ulangi dari awal"
                    className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-700 bg-slate-900 text-slate-300 transition-colors duration-150 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                  >
                    <RotateCcw className="h-4 w-4" />
                  </button>
                </div>

                <div className="min-w-0 flex-1">
                  <div className="mb-1.5 flex items-center justify-between text-xs">
                    <span className="truncate font-medium text-slate-200">{activeChapter.title}</span>
                    <span className="shrink-0 font-mono tabular-nums text-slate-400">
                      {formatTime(elapsed)} / 00:45
                    </span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
                    <div
                      className="h-full bg-amber-500 transition-all duration-300"
                      style={{ width: `${(elapsed / 45) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-6 p-6 lg:col-span-5">
            <div className="space-y-3">
              <span className="inline-block font-mono text-xs font-semibold uppercase tracking-wider text-amber-400">
                Video Showcase · 45 Detik
              </span>
              <h2 className="text-xl font-bold text-slate-50">
                Suasana Toko 18 Ilir &amp; Pop-Up Mall
              </h2>
              <p className="text-sm leading-relaxed text-slate-400">
                {activeChapter.caption}
              </p>
            </div>

            <div className="space-y-2 border-t border-slate-800 pt-4">
              <p className="text-xs font-medium text-slate-400">Pilih segmen cuplikan:</p>
              <div className="flex flex-wrap gap-2">
                {VIDEO_CHAPTERS.map((chap) => {
                  const isCurrent = activeChapter.time === chap.time;
                  return (
                    <button
                      key={chap.time}
                      type="button"
                      onClick={() => {
                        sfx.playClick();
                        setElapsed(chap.time);
                        setIsPlaying(true);
                      }}
                      className={`min-h-[44px] rounded-lg border px-3 text-xs font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                        isCurrent
                          ? 'border-amber-500/50 bg-amber-500/10 text-amber-400'
                          : 'border-slate-800 bg-[#020617] text-slate-400 hover:border-slate-700 hover:text-slate-200'
                      }`}
                    >
                      <span className="font-mono">{chap.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
