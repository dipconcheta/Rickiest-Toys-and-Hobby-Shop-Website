import { useState } from 'react';
import { Calendar, Clock, ExternalLink, Footprints, Images, MapPin, Navigation, X } from 'lucide-react';
import { ACTIVE_EVENT, EXHIBITION_EVENTS, STORE_INFO, WEEKLY_TOURNAMENTS } from '../data/mockData';

const EVENT_FILTERS = [
  { id: 'all', label: 'Semua Jadwal' },
  { id: 'ongoing', label: 'Sedang Berjalan' },
  { id: 'upcoming', label: 'Akan Datang' },
  { id: 'past', label: 'Sebelumnya' },
];

export function EventRadarSection() {
  const [selectedRouteId, setSelectedRouteId] = useState('entrance');
  const [eventFilter, setEventFilter] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);

  const activeRoute =
    ACTIVE_EVENT.routes.find((r) => r.id === selectedRouteId) || ACTIVE_EVENT.routes[0];

  const filteredEvents =
    eventFilter === 'all'
      ? EXHIBITION_EVENTS
      : EXHIBITION_EVENTS.filter((evt) => evt.status === eventFilter);

  return (
    <div className="space-y-12">
      {/* Live Event Banner */}
      <section className="rounded-xl border border-zinc-200 bg-white p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="min-w-0 space-y-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 font-mono text-xs font-semibold text-emerald-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
              {ACTIVE_EVENT.status} · {ACTIVE_EVENT.boothCode}
            </span>
            <h1 className="text-2xl font-extrabold tracking-tight text-zinc-950 sm:text-3xl">
              Denah Pameran @ {ACTIVE_EVENT.mallName}
            </h1>
            <p className="max-w-prose text-sm text-zinc-600">
              Pilih titik masuk Anda pada denah interaktif di bawah untuk melihat simulasi rute
              berjalan langsung menuju <strong>Booth Rickiest Toys ({ACTIVE_EVENT.boothCode})</strong> di Main Atrium.
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

      {/* Complex Architectural SVG Mall Wayfinding Map */}
      <section className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="rounded-xl border border-zinc-200 bg-white p-5 lg:col-span-8">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-sm font-bold text-zinc-950">
                Peta Interaktif Lantai Ground (GF) — Palembang Icon
              </h2>
              <p className="text-xs text-zinc-500">
                Klik titik pintu masuk atau eskalator untuk menyimulasikan jalur pejalan kaki ke Booth B-04
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {ACTIVE_EVENT.routes.map((route) => {
                const isSelected = route.id === selectedRouteId;
                return (
                  <button
                    key={route.id}
                    type="button"
                    onClick={() => setSelectedRouteId(route.id)}
                    className={`min-h-[36px] rounded-lg border px-2.5 text-xs font-semibold transition-colors duration-150 ${
                      isSelected
                        ? 'border-orange-400 bg-orange-50 text-orange-700'
                        : 'border-zinc-200 bg-zinc-50 text-zinc-600 hover:border-zinc-300 hover:text-zinc-900'
                    }`}
                  >
                    {route.shortLabel}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-zinc-200 bg-[#F8FAFC]">
            <svg
              viewBox="0 0 660 380"
              className="h-auto w-full select-none"
              role="img"
              aria-label="Denah arsitektur Lantai Ground Palembang Icon dengan rute animasi menuju Booth Rickiest Toys B-04"
            >
              <defs>
                <pattern id="mallGrid" width="24" height="24" patternUnits="userSpaceOnUse">
                  <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#E4E4E7" strokeWidth="0.7" />
                </pattern>
              </defs>
              <rect width="660" height="380" fill="url(#mallGrid)" />

              <rect
                x="24"
                y="24"
                width="612"
                height="332"
                rx="16"
                fill="#FFFFFF"
                stroke="#CBD5E1"
                strokeWidth="2"
              />

              <rect x="40" y="40" width="135" height="92" rx="8" fill="#F4F4F5" stroke="#E4E4E7" />
              <text x="107" y="84" textAnchor="middle" fill="#71717A" fontSize="10" fontWeight="600">
                ANCHOR TENANT
              </text>
              <text x="107" y="99" textAnchor="middle" fill="#A1A1AA" fontSize="9">
                Sayap Barat GF
              </text>

              <rect x="40" y="148" width="135" height="90" rx="8" fill="#F4F4F5" stroke="#E4E4E7" />
              <text x="107" y="196" textAnchor="middle" fill="#71717A" fontSize="10" fontWeight="600">
                RETAIL FASHION
              </text>

              <rect x="40" y="254" width="135" height="86" rx="8" fill="#F4F4F5" stroke="#E4E4E7" />
              <text x="107" y="300" textAnchor="middle" fill="#71717A" fontSize="10" fontWeight="600">
                CAFÉ &amp; LOUNGE
              </text>

              <rect x="195" y="40" width="180" height="58" rx="8" fill="#F4F4F5" stroke="#E4E4E7" />
              <text x="285" y="73" textAnchor="middle" fill="#71717A" fontSize="10" fontWeight="600">
                KORIDOR UTARA · INFO DESK
              </text>

              <rect x="505" y="40" width="115" height="108" rx="8" fill="#F4F4F5" stroke="#E4E4E7" />
              <text x="562" y="98" textAnchor="middle" fill="#71717A" fontSize="10" fontWeight="600">
                FOOD WALK
              </text>

              <rect x="505" y="222" width="115" height="118" rx="8" fill="#F4F4F5" stroke="#E4E4E7" />
              <text x="562" y="284" textAnchor="middle" fill="#71717A" fontSize="10" fontWeight="600">
                RETAIL TIMUR
              </text>

              <rect
                x="202"
                y="118"
                width="278"
                height="136"
                rx="14"
                fill="#FFFBEB"
                stroke="#FDBA74"
                strokeWidth="1.5"
                strokeDasharray="6 4"
              />
              <text x="216" y="136" fill="#C2410C" fontSize="9.5" fontWeight="700" letterSpacing="1">
                AREA PAMERAN · MAIN ATRIUM (400 m²)
              </text>

              <rect x="218" y="150" width="102" height="86" rx="8" fill="#FFFFFF" stroke="#E4E4E7" />
              <text x="269" y="189" textAnchor="middle" fill="#52525B" fontSize="10" fontWeight="700">
                PANGGUNG
              </text>
              <text x="269" y="204" textAnchor="middle" fill="#71717A" fontSize="9">
                Event Hobi
              </text>

              <rect x="334" y="210" width="52" height="26" rx="5" fill="#F4F4F5" stroke="#D4D4D8" />
              <text x="360" y="227" textAnchor="middle" fill="#71717A" fontSize="8.5" fontWeight="600">
                B-02
              </text>

              <rect x="404" y="210" width="60" height="26" rx="5" fill="#F4F4F5" stroke="#D4D4D8" />
              <text x="434" y="227" textAnchor="middle" fill="#71717A" fontSize="8.5" fontWeight="600">
                B-06
              </text>

              <g>
                <circle
                  cx="395"
                  cy="178"
                  r="18"
                  fill="#EA580C"
                  opacity="0.22"
                  className="animate-beacon-ring"
                />
                <rect
                  x="334"
                  y="150"
                  width="130"
                  height="52"
                  rx="8"
                  fill="#EA580C"
                  stroke="#9A3412"
                  strokeWidth="1.5"
                />
                <text x="399" y="172" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">
                  BOOTH B-04
                </text>
                <text x="399" y="188" textAnchor="middle" fill="#FFEDD5" fontSize="9.5" fontWeight="600">
                  Rickiest Toys &amp; Hobby
                </text>
              </g>

              <path
                key={activeRoute.id}
                d={activeRoute.svgPath}
                fill="none"
                stroke="#EA580C"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-route-flow"
              />

              <circle key={`dot-${activeRoute.id}`} r="5.5" fill="#09090B" stroke="#FFFFFF" strokeWidth="2">
                <animateMotion dur="2.6s" repeatCount="indefinite" path={activeRoute.svgPath} />
              </circle>

              <g
                onClick={() => setSelectedRouteId('escalator')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedRouteId('escalator')}
                className="cursor-pointer"
              >
                <rect
                  x="392"
                  y="40"
                  width="98"
                  height="58"
                  rx="8"
                  fill={selectedRouteId === 'escalator' ? '#FFF7ED' : '#FFFFFF'}
                  stroke={selectedRouteId === 'escalator' ? '#EA580C' : '#94A3B8'}
                  strokeWidth={selectedRouteId === 'escalator' ? '2' : '1.5'}
                />
                <text x="441" y="66" textAnchor="middle" fill="#09090B" fontSize="9.5" fontWeight="700">
                  ESKALATOR
                </text>
                <text x="441" y="80" textAnchor="middle" fill="#52525B" fontSize="8.5">
                  &amp; Lift Tengah
                </text>
              </g>

              <g
                onClick={() => setSelectedRouteId('east-parking')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedRouteId('east-parking')}
                className="cursor-pointer"
              >
                <rect
                  x="530"
                  y="162"
                  width="96"
                  height="46"
                  rx="8"
                  fill={selectedRouteId === 'east-parking' ? '#FFF7ED' : '#FFFFFF'}
                  stroke={selectedRouteId === 'east-parking' ? '#EA580C' : '#94A3B8'}
                  strokeWidth={selectedRouteId === 'east-parking' ? '2' : '1.5'}
                />
                <text x="578" y="182" textAnchor="middle" fill="#09090B" fontSize="9" fontWeight="700">
                  AKSES TIMUR
                </text>
                <text x="578" y="196" textAnchor="middle" fill="#52525B" fontSize="8.5">
                  Parkir Timur
                </text>
              </g>

              <g
                onClick={() => setSelectedRouteId('entrance')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedRouteId('entrance')}
                className="cursor-pointer"
              >
                <rect
                  x="232"
                  y="318"
                  width="196"
                  height="38"
                  rx="8"
                  fill={selectedRouteId === 'entrance' ? '#FFF7ED' : '#FFFFFF'}
                  stroke={selectedRouteId === 'entrance' ? '#EA580C' : '#94A3B8'}
                  strokeWidth={selectedRouteId === 'entrance' ? '2' : '1.5'}
                />
                <text x="330" y="341" textAnchor="middle" fill="#09090B" fontSize="10" fontWeight="700">
                  PINTU UTAMA · LOBBY SELATAN (JL. POM IX)
                </text>
              </g>
            </svg>
          </div>
        </div>

        {/* Route Details & Directions Card */}
        <div className="flex flex-col justify-between gap-6 rounded-xl border border-zinc-200 bg-white p-6 lg:col-span-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono text-xs font-bold text-orange-600">{activeRoute.code}</span>
              <span className="inline-flex items-center gap-1 rounded-full border border-zinc-200 bg-zinc-100 px-2.5 py-0.5 font-mono text-[11px] font-semibold tabular-nums text-zinc-700">
                <Footprints className="h-3 w-3 text-orange-600" />
                {activeRoute.distance} · {activeRoute.walkTime}
              </span>
            </div>

            <div className="space-y-1.5">
              <h3 className="text-base font-bold text-zinc-950">{activeRoute.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-600">{activeRoute.description}</p>
            </div>

            <div className="space-y-2.5 border-t border-zinc-200 pt-4">
              <p className="text-xs font-semibold text-zinc-500">Langkah Menuju Booth B-04:</p>
              <ol className="space-y-2.5 text-sm text-zinc-700">
                {activeRoute.directions.map((step, idx) => (
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
            className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-orange-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-orange-700 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600"
          >
            <Navigation className="h-4 w-4" />
            <span>Buka Rute Palembang Icon</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </section>

      {/* Ongoing, Upcoming & Past Events Section with Past-Event Photo Galleries */}
      <section className="space-y-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-xl font-bold text-zinc-950">Jadwal &amp; Arsip Pameran</h2>
            <p className="text-sm text-zinc-600">
              Pantau pameran yang sedang berjalan, agenda mendatang, dan dokumentasi foto keseruan event sebelumnya.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {EVENT_FILTERS.map((filter) => {
              const isActive = eventFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setEventFilter(filter.id)}
                  className={`min-h-[40px] rounded-lg border px-3 text-xs font-semibold transition-colors duration-150 ${
                    isActive
                      ? 'border-orange-300 bg-orange-50 text-orange-700'
                      : 'border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300 hover:text-zinc-950'
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((evt) => {
            const badgeStyle =
              evt.status === 'ongoing'
                ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                : evt.status === 'upcoming'
                  ? 'border-orange-200 bg-orange-50 text-orange-700'
                  : 'border-zinc-200 bg-zinc-100 text-zinc-600';

            return (
              <article
                key={evt.id}
                className="flex min-w-0 flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white"
              >
                <div className="aspect-[16/9] w-full overflow-hidden border-b border-zinc-200 bg-zinc-100">
                  <img src={evt.image} alt={evt.title} className="h-full w-full object-cover" />
                </div>

                <div className="flex flex-1 flex-col justify-between gap-4 p-5">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`rounded-full border px-2.5 py-0.5 font-mono text-[11px] font-semibold ${badgeStyle}`}
                      >
                        {evt.statusLabel}
                      </span>
                      <span className="font-mono text-xs tabular-nums text-zinc-500">{evt.date}</span>
                    </div>

                    <h3 className="text-base font-bold text-zinc-950">{evt.title}</h3>
                    <p className="text-xs font-medium text-zinc-600">
                      {evt.mall} · <span className="text-zinc-900">{evt.booth}</span>
                    </p>
                    <p className="text-xs leading-relaxed text-zinc-500">{evt.highlight}</p>
                  </div>

                  {/* Past Event Excitement Photo Strip */}
                  {evt.gallery && evt.gallery.length > 0 && (
                    <div className="space-y-2 border-t border-zinc-100 pt-3">
                      <p className="flex items-center gap-1.5 text-[11px] font-semibold text-zinc-500">
                        <Images className="h-3.5 w-3.5 text-orange-600" />
                        <span>Foto Keseruan (klik untuk perbesar)</span>
                      </p>
                      <div className="grid grid-cols-3 gap-2">
                        {evt.gallery.map((photo) => (
                          <button
                            key={photo.src}
                            type="button"
                            onClick={() => setLightboxImage(photo)}
                            className="overflow-hidden rounded-lg border border-zinc-200 bg-zinc-50 transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600"
                          >
                            <img
                              src={photo.src}
                              alt={photo.alt}
                              className="aspect-square w-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="border-t border-zinc-100 pt-3 font-mono text-[11px] tabular-nums text-zinc-500">
                    Jam Operasional: {evt.hours}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Weekly In-Store Tournament Schedule (Real from Facebook) */}
      <section className="rounded-xl border border-zinc-200 bg-white p-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-base font-bold text-zinc-950">Jadwal Turnamen Mingguan di Toko (18 Ilir)</h2>
            <p className="text-xs text-zinc-500">
              CP Pendaftaran Turnamen: <span className="font-mono font-semibold text-zinc-800">{STORE_INFO.eventCpDisplay}</span>
            </p>
          </div>
          <a
            href={`https://wa.me/${STORE_INFO.eventCpNumber}?text=${encodeURIComponent(
              'Halo Kak Aldo, saya ingin daftar turnamen mingguan di Rickiest Toys Palembang.'
            )}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-[40px] items-center justify-center rounded-lg border border-zinc-300 bg-white px-3.5 text-xs font-semibold text-zinc-800 hover:border-orange-400 hover:text-orange-700"
          >
            Daftar via WhatsApp CP
          </a>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {WEEKLY_TOURNAMENTS.map((item) => (
            <div key={item.game} className="rounded-lg border border-zinc-200 bg-zinc-50 p-3.5">
              <div className="flex items-center justify-between font-mono text-xs font-semibold text-orange-600">
                <span>{item.day}</span>
                <span className="tabular-nums">{item.time}</span>
              </div>
              <p className="mt-1 text-sm font-bold text-zinc-900">{item.game}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Photo Lightbox Modal */}
      {lightboxImage && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/80 p-4 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-xl border border-zinc-700 bg-white"
          >
            <button
              type="button"
              onClick={() => setLightboxImage(null)}
              aria-label="Tutup foto"
              className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-950/80 text-white hover:bg-zinc-900"
            >
              <X className="h-5 w-5" />
            </button>
            <img
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              className="max-h-[75vh] w-full bg-zinc-950 object-contain"
            />
            <div className="border-t border-zinc-200 px-4 py-3 text-xs font-medium text-zinc-700">
              {lightboxImage.alt}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
