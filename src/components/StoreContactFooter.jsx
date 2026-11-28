import { Clock, ExternalLink, MapPin, Phone } from 'lucide-react';
import { STORE_INFO } from '../data/mockData';
import {
  FacebookLogo,
  InstagramLogo,
  RickiestLogo,
  TokopediaLogo,
  WhatsAppLogo,
} from './BrandLogos';

export function StoreContactFooter() {
  const whatsappOrderUrl = `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Halo Rickiest Toys Palembang, saya ingin menanyakan stok dan cara pemesanan produk.'
  )}`;

  const channels = [
    {
      name: 'WhatsApp',
      handle: STORE_INFO.whatsappDisplay,
      href: whatsappOrderUrl,
      Icon: WhatsAppLogo,
      hoverClass: 'hover:border-emerald-400 hover:bg-emerald-50/40',
      mono: true,
    },
    {
      name: 'Tokopedia',
      handle: 'Toko Resmi',
      href: STORE_INFO.tokopediaUrl,
      Icon: TokopediaLogo,
      hoverClass: 'hover:border-emerald-400 hover:bg-emerald-50/40',
      mono: false,
    },
    {
      name: 'Instagram',
      handle: '@rickiesttoys',
      href: STORE_INFO.instagramUrl,
      Icon: InstagramLogo,
      hoverClass: 'hover:border-pink-400 hover:bg-pink-50/40',
      mono: false,
    },
    {
      name: 'Facebook',
      handle: '@TheRickiest',
      href: STORE_INFO.facebookUrl,
      Icon: FacebookLogo,
      hoverClass: 'hover:border-blue-400 hover:bg-blue-50/40',
      mono: false,
    },
  ];

  return (
    <footer
      id="kontak-toko"
      className="mt-12 border-t border-zinc-200 bg-white pb-24 pt-8 md:pb-8"
    >
      <div className="mx-auto max-w-6xl space-y-6 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-start">
          {/* Store Info */}
          <div className="min-w-0 space-y-3 lg:col-span-6">
            <div className="flex items-center gap-3">
              <RickiestLogo className="h-9 w-9" />
              <div className="min-w-0 leading-tight">
                <h2 className="truncate text-base font-extrabold tracking-tight text-zinc-950">
                  Rickiest Toys
                </h2>
                <p className="truncate text-xs font-medium text-zinc-500">Palembang</p>
              </div>
            </div>

            <div className="space-y-2 text-xs text-zinc-600">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-red-600" />
                <span className="leading-relaxed">
                  {STORE_INFO.address}{' '}
                  <a
                    href={STORE_INFO.storeMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-red-700 hover:text-red-800"
                  >
                    <span>Google Maps</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5 shrink-0 text-red-600" />
                  <span>{STORE_INFO.hours}</span>
                </span>
                <span className="inline-flex items-center gap-2 font-mono font-semibold tabular-nums text-zinc-800">
                  <Phone className="h-3.5 w-3.5 shrink-0 text-red-600" />
                  <span>{STORE_INFO.whatsappDisplay}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Official Channels: WhatsApp, Tokopedia, Instagram, Facebook */}
          <div className="min-w-0 space-y-2.5 lg:col-span-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500">
              Kanal Resmi
            </h3>
            <div className="grid grid-cols-2 gap-2.5">
              {channels.map(({ name, handle, href, Icon, hoverClass, mono }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex min-h-[48px] min-w-0 items-center justify-between gap-2 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2.5 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 ${hoverClass}`}
                >
                  <div className="flex min-w-0 items-center gap-2.5">
                    <Icon className="h-7 w-7 shrink-0" />
                    <div className="min-w-0 leading-tight">
                      <p className="truncate text-xs font-bold text-zinc-950 sm:text-sm">
                        {name}
                      </p>
                      <p
                        className={`truncate text-[11px] text-zinc-500 ${
                          mono ? 'font-mono tabular-nums' : ''
                        }`}
                      >
                        {handle}
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="hidden h-3.5 w-3.5 shrink-0 text-zinc-400 sm:block" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-200 pt-4 text-center text-xs text-zinc-500 sm:text-left">
          <p>© 2026 Rickiest Toys Palembang.</p>
        </div>
      </div>
    </footer>
  );
}
