import { useState } from 'react';
import { ArrowRight, ExternalLink, MapPin, Play } from 'lucide-react';
import { FACEBOOK_VIDEOS, HOBBY_PILLARS, STORE_INFO } from '../data/mockData';

export function IntroSection({ onNavigate }) {
  const [selectedVideoId, setSelectedVideoId] = useState(FACEBOOK_VIDEOS[0].id);
  const [showEmbed, setShowEmbed] = useState(false);

  const activeVideo =
    FACEBOOK_VIDEOS.find((v) => v.id === selectedVideoId) || FACEBOOK_VIDEOS[0];

  const handleSelectVideo = (videoId) => {
    setSelectedVideoId(videoId);
    setShowEmbed(false);
  };

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
        <div className="min-w-0 space-y-5 lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-semibold text-red-700">
            <MapPin className="h-3.5 w-3.5" />
            <span>18 Ilir Palembang · 100% Direkomendasikan</span>
          </div>

          <h1 className="text-2xl font-extrabold tracking-tight text-zinc-950 sm:text-4xl lg:text-[42px] lg:leading-[1.12]">
            Pusat Hobi, Model Kit, Blind Box &amp; Card Game di Palembang.
          </h1>

          <p className="max-w-prose text-sm leading-relaxed text-zinc-600 sm:text-base">
            Selamat datang di <strong className="font-semibold text-zinc-900">{STORE_INFO.name}</strong>.
            Temukan koleksi resmi Blokees, Bandai Gunpla, Blind Box, dan komunitas turnamen mingguan
            Pokémon, One Piece, Ultraman, serta Yu-Gi-Oh! di Palembang.
          </p>

          <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => onNavigate('gacha')}
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-red-700 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2"
            >
              <span>Coba Blind Box</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate('radar')}
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-800 transition-colors duration-150 hover:border-zinc-400 hover:bg-zinc-50 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
            >
              <span>Denah &amp; Jadwal Pameran</span>
            </button>
          </div>
        </div>

        {/* Hero Visual (Real Store Cover + Studio Showcase) */}
        <div className="min-w-0 lg:col-span-5">
          <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white">
            <img
              src="/images/fb/fb-cover.jpg"
              alt="Rickiest Toys and Hobby Shop Palembang Cover"
              className="aspect-[16/10] w-full object-cover"
            />
            <div className="flex items-center justify-between border-t border-zinc-200 px-4 py-3 text-xs">
              <span className="truncate font-semibold text-zinc-800">
                Card Game · Board Game · Model Kit
              </span>
              <span className="shrink-0 font-mono font-semibold text-red-600">PALEMBANG</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Pillars Grid */}
      <section className="space-y-4">
        <div>
          <h2 className="text-lg font-bold text-zinc-950 sm:text-xl">Tiga Pilar Koleksi</h2>
          <p className="text-sm text-zinc-600">
            Lini produk unggulan di toko 18 Ilir dan booth pameran mall Palembang.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {HOBBY_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="flex min-w-0 flex-col justify-between gap-4 rounded-xl border border-zinc-200 bg-white p-5"
            >
              <div className="space-y-2">
                <span className="inline-block font-mono text-xs font-semibold text-red-600">
                  {pillar.metric}
                </span>
                <h3 className="text-base font-bold text-zinc-950">{pillar.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-600">{pillar.description}</p>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('catalog', pillar.slug)}
                className="inline-flex min-h-[44px] items-center gap-1.5 self-start text-xs font-semibold text-zinc-800 transition-colors duration-150 hover:text-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
              >
                <span>Lihat Katalog</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Real Facebook Videos & Reels Showcase */}
      <section className="overflow-hidden rounded-xl border border-zinc-200 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="relative aspect-video bg-zinc-950 lg:col-span-7">
            {showEmbed ? (
              <iframe
                title={activeVideo.title}
                src={activeVideo.embedUrl}
                className="h-full w-full border-0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <div className="relative h-full w-full">
                <img
                  src={activeVideo.thumbnail}
                  alt={activeVideo.title}
                  className="h-full w-full object-cover opacity-85"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-zinc-950/35">
                  <button
                    type="button"
                    onClick={() => setShowEmbed(true)}
                    aria-label={`Putar video ${activeVideo.title}`}
                    className="inline-flex min-h-[52px] items-center gap-2.5 rounded-full bg-red-600 px-6 py-3 text-sm font-bold text-white transition-colors duration-150 hover:bg-red-500 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <Play className="h-4 w-4 fill-current" />
                    <span>Putar Video Facebook</span>
                  </button>
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-zinc-950/85 px-4 py-2.5 text-xs text-zinc-200">
                  <div className="flex items-center justify-between gap-2">
                    <span className="truncate font-semibold">{activeVideo.title}</span>
                    <span className="shrink-0 font-mono text-[11px] text-zinc-400">
                      {activeVideo.duration}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col justify-between gap-6 p-6 lg:col-span-5">
            <div className="space-y-3">
              <span className="inline-block font-mono text-xs font-semibold uppercase tracking-wider text-red-600">
                Video Asli Facebook · @TheRickiest
              </span>
              <h2 className="text-xl font-bold text-zinc-950">{activeVideo.title}</h2>
              <p className="text-sm leading-relaxed text-zinc-600">{activeVideo.caption}</p>
              <a
                href={activeVideo.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[40px] items-center gap-1.5 text-xs font-semibold text-red-700 hover:text-red-800"
              >
                <span>Buka langsung di Facebook</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>

            <div className="space-y-2 border-t border-zinc-200 pt-4">
              <p className="text-xs font-semibold text-zinc-500">Pilih video dokumentasi:</p>
              <div className="flex flex-col gap-2">
                {FACEBOOK_VIDEOS.map((vid) => {
                  const isCurrent = vid.id === activeVideo.id;
                  return (
                    <button
                      key={vid.id}
                      type="button"
                      onClick={() => handleSelectVideo(vid.id)}
                      className={`flex min-h-[44px] items-center justify-between gap-2 rounded-lg border px-3 py-2 text-left text-xs font-semibold transition-colors duration-150 ${
                        isCurrent
                          ? 'border-red-300 bg-red-50 text-red-700'
                          : 'border-zinc-200 bg-zinc-50 text-zinc-700 hover:border-zinc-300 hover:text-zinc-950'
                      }`}
                    >
                      <span className="truncate">{vid.title}</span>
                      <span className="shrink-0 font-mono text-[10px] text-zinc-500">
                        {vid.duration.split('·')[0]}
                      </span>
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
