import { useEffect, useState } from 'react';
import { ArrowRight, MapPin, Pause, Play, RotateCcw } from 'lucide-react';
import { HOBBY_PILLARS, STORE_INFO } from '../data/mockData';

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
    caption: 'Ratusan pilihan kotak misteri segel pabrik dengan peluang varian Secret Chase.',
    image: '/images/prod-blokees.jpg',
  },
  {
    time: 30,
    label: '00:30',
    title: 'Pop-Up Exhibition Palembang Icon',
    caption: 'Suasana pameran mall di Main Atrium, display diorama, dan komunitas TCG Palembang.',
    image: '/images/prod-gunpla.jpg',
  },
];

export function IntroSection({ onNavigate }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(0);

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
    if (elapsed >= 45) {
      setElapsed(0);
      setIsPlaying(true);
      return;
    }
    setIsPlaying((prev) => !prev);
  };

  const handleRestart = () => {
    setElapsed(0);
    setIsPlaying(true);
  };

  const formatTime = (sec) => `00:${String(sec).padStart(2, '0')}`;

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
        <div className="min-w-0 space-y-5 lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700">
            <MapPin className="h-3.5 w-3.5" />
            <span>18 Ilir, Palembang · Booth B-04 Palembang Icon</span>
          </div>

          <h1 className="text-2xl font-extrabold tracking-tight text-zinc-950 sm:text-4xl lg:text-[42px] lg:leading-[1.12]">
            Pusat Hobi, Blind Box &amp; Pop Culture Terlengkap di Palembang.
          </h1>

          <p className="max-w-prose text-sm leading-relaxed text-zinc-600 sm:text-base">
            Jelajahi koleksi resmi <strong className="font-semibold text-zinc-900">{STORE_INFO.name}</strong>—mulai
            dari Blokees, Bandai Gunpla, Art Toys Blind Box, hingga turnamen Trading Card Game. Coba simulasi unboxing
            atau cek lokasi booth pameran mall kami.
          </p>

          <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => onNavigate('gacha')}
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-orange-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-orange-700 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-offset-2"
            >
              <span>Coba Blind Box</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate('radar')}
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-800 transition-colors duration-150 hover:border-zinc-400 hover:bg-zinc-50 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600"
            >
              <span>Lokasi Pameran Mall</span>
            </button>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="min-w-0 lg:col-span-5">
          <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white">
            <img
              src="/images/hero-showcase.jpg"
              alt="Koleksi figur Blokees, Gunpla, dan blind box di Rickiest Toys Palembang"
              className="aspect-[16/10] w-full object-cover"
            />
            <div className="flex items-center justify-between border-t border-zinc-200 px-4 py-3 text-xs">
              <span className="font-semibold text-zinc-800">Produk Original &amp; Segel Pabrik</span>
              <span className="font-mono font-semibold text-orange-600">EST. PALEMBANG</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Pillars Grid */}
      <section className="space-y-4">
        <div>
          <h2 className="text-lg font-bold text-zinc-950 sm:text-xl">Tiga Pilar Koleksi</h2>
          <p className="text-sm text-zinc-600">Lini produk unggulan di toko 18 Ilir dan booth pameran mall.</p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {HOBBY_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="flex min-w-0 flex-col justify-between gap-4 rounded-xl border border-zinc-200 bg-white p-5"
            >
              <div className="space-y-2">
                <span className="inline-block font-mono text-xs font-semibold text-orange-600">
                  {pillar.metric}
                </span>
                <h3 className="text-base font-bold text-zinc-950">{pillar.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-600">{pillar.description}</p>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('catalog', pillar.slug)}
                className="inline-flex min-h-[44px] items-center gap-1.5 self-start text-xs font-semibold text-zinc-800 transition-colors duration-150 hover:text-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600"
              >
                <span>Lihat Katalog</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Video Showcase Reel */}
      <section className="overflow-hidden rounded-xl border border-zinc-200 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="relative aspect-video bg-zinc-900 lg:col-span-7">
            <img
              src={activeChapter.image}
              alt={activeChapter.title}
              className={`h-full w-full object-cover transition-opacity duration-200 ${
                isPlaying ? 'opacity-95' : 'opacity-80'
              }`}
            />
            <div className="absolute inset-x-0 bottom-0 border-t border-zinc-800 bg-zinc-950/90 px-4 py-3 text-white">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleTogglePlay}
                    aria-label={isPlaying ? 'Jeda video teaser' : 'Putar video teaser'}
                    className="flex h-11 w-11 items-center justify-center rounded-lg bg-orange-600 text-white transition-colors duration-150 hover:bg-orange-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                  >
                    {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  </button>
                  <button
                    type="button"
                    onClick={handleRestart}
                    aria-label="Ulangi dari awal"
                    className="flex h-11 w-11 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-900 text-zinc-200 transition-colors duration-150 hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                  >
                    <RotateCcw className="h-4 w-4" />
                  </button>
                </div>

                <div className="min-w-0 flex-1">
                  <div className="mb-1.5 flex items-center justify-between text-xs">
                    <span className="truncate font-medium text-zinc-100">{activeChapter.title}</span>
                    <span className="shrink-0 font-mono tabular-nums text-zinc-400">
                      {formatTime(elapsed)} / 00:45
                    </span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-800">
                    <div
                      className="h-full bg-orange-500 transition-all duration-300"
                      style={{ width: `${(elapsed / 45) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-6 p-6 lg:col-span-5">
            <div className="space-y-3">
              <span className="inline-block font-mono text-xs font-semibold uppercase tracking-wider text-orange-600">
                Video Showcase · 45 Detik
              </span>
              <h2 className="text-xl font-bold text-zinc-950">
                Suasana Toko 18 Ilir &amp; Pameran Mall
              </h2>
              <p className="text-sm leading-relaxed text-zinc-600">{activeChapter.caption}</p>
            </div>

            <div className="space-y-2 border-t border-zinc-200 pt-4">
              <p className="text-xs font-semibold text-zinc-500">Pilih segmen cuplikan:</p>
              <div className="flex flex-wrap gap-2">
                {VIDEO_CHAPTERS.map((chap) => {
                  const isCurrent = activeChapter.time === chap.time;
                  return (
                    <button
                      key={chap.time}
                      type="button"
                      onClick={() => {
                        setElapsed(chap.time);
                        setIsPlaying(true);
                      }}
                      className={`min-h-[44px] rounded-lg border px-3 text-xs font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 ${
                        isCurrent
                          ? 'border-orange-300 bg-orange-50 text-orange-700'
                          : 'border-zinc-200 bg-zinc-50 text-zinc-600 hover:border-zinc-300 hover:text-zinc-950'
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
