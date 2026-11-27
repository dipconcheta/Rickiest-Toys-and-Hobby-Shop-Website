import { Clock, ExternalLink, MapPin, Phone } from 'lucide-react';
import { STORE_INFO } from '../data/mockData';
import {
  FacebookLogo,
  RickiestLogo,
  ShopeeLogo,
  TokopediaLogo,
  WhatsAppLogo,
} from './BrandLogos';

export function StoreContactFooter() {
  const whatsappOrderUrl = `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Halo Rickiest Toys & Hobby Palembang, saya ingin menanyakan stok dan cara pemesanan produk.'
  )}`;

  return (
    <footer id="kontak-toko" className="mt-16 border-t border-zinc-200 bg-white pb-24 pt-12 md:pb-12">
      <div className="mx-auto max-w-6xl space-y-8 px-4 sm:px-6 lg:px-8">
        {/* Prominent Contact & Order Header */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Store Info */}
          <div className="space-y-4 lg:col-span-5">
            <div className="flex items-center gap-3">
              <RickiestLogo className="h-10 w-10" />
              <div>
                <h2 className="text-base font-extrabold text-zinc-950">{STORE_INFO.name}</h2>
                <p className="text-xs text-zinc-500">Toko Hobi &amp; Mainan Koleksi Palembang</p>
              </div>
            </div>

            <div className="space-y-2.5 text-sm text-zinc-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange-600" />
                <span>{STORE_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 shrink-0 text-orange-600" />
                <span className="font-mono text-xs tabular-nums">{STORE_INFO.hours}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-orange-600" />
                <span className="font-mono text-xs font-semibold tabular-nums text-zinc-900">
                  {STORE_INFO.whatsappDisplay}
                </span>
              </div>
            </div>

            <a
              href={STORE_INFO.storeMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[44px] items-center gap-1.5 text-xs font-semibold text-orange-700 hover:text-orange-800"
            >
              <span>Buka Lokasi Toko di Google Maps</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Direct Purchase & Marketplace Channels */}
          <div className="space-y-4 lg:col-span-7">
            <div>
              <h3 className="text-sm font-bold text-zinc-950">Hubungi &amp; Beli di Kanal Resmi</h3>
              <p className="text-xs text-zinc-500">
                Klik salah satu saluran di bawah untuk langsung chat admin atau belanja online.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <a
                href={whatsappOrderUrl}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-[56px] items-center justify-between gap-3 rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 transition-colors duration-150 hover:border-emerald-400 hover:bg-emerald-50/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <WhatsAppLogo className="h-8 w-8 shrink-0" />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-zinc-950">WhatsApp Admin</p>
                    <p className="truncate font-mono text-xs tabular-nums text-zinc-600">
                      {STORE_INFO.whatsappDisplay}
                    </p>
                  </div>
                </div>
                <ExternalLink className="h-4 w-4 shrink-0 text-zinc-400" />
              </a>

              <a
                href={STORE_INFO.tokopediaUrl}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-[56px] items-center justify-between gap-3 rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 transition-colors duration-150 hover:border-emerald-400 hover:bg-emerald-50/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <TokopediaLogo className="h-8 w-8 shrink-0" />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-zinc-950">Tokopedia</p>
                    <p className="truncate text-xs text-zinc-600">Rickiest Toys Palembang</p>
                  </div>
                </div>
                <ExternalLink className="h-4 w-4 shrink-0 text-zinc-400" />
              </a>

              <a
                href={STORE_INFO.shopeeUrl}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-[56px] items-center justify-between gap-3 rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 transition-colors duration-150 hover:border-orange-400 hover:bg-orange-50/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <ShopeeLogo className="h-8 w-8 shrink-0" />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-zinc-950">Shopee</p>
                    <p className="truncate text-xs text-zinc-600">Cari Rickiest Toys</p>
                  </div>
                </div>
                <ExternalLink className="h-4 w-4 shrink-0 text-zinc-400" />
              </a>

              <a
                href={STORE_INFO.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-[56px] items-center justify-between gap-3 rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 transition-colors duration-150 hover:border-blue-400 hover:bg-blue-50/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <FacebookLogo className="h-8 w-8 shrink-0" />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-zinc-950">Facebook Resmi</p>
                    <p className="truncate text-xs text-zinc-600">@TheRickiest · Update Stok</p>
                  </div>
                </div>
                <ExternalLink className="h-4 w-4 shrink-0 text-zinc-400" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-2 border-t border-zinc-200 pt-6 text-xs text-zinc-500 sm:flex-row">
          <p>© 2026 Rickiest Toys &amp; Hobby Shop Palembang.</p>
          <p>Case Project Multimedia — Sistem Informasi Fasilkom</p>
        </div>
      </div>
    </footer>
  );
}
