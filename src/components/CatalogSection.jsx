import { useMemo, useState } from 'react';
import { ExternalLink, MessageCircle, Search, Tag } from 'lucide-react';
import { PRODUCTS, STORE_INFO } from '../data/mockData';
import { sfx } from '../utils/sfx';

const CATEGORIES = [
  { id: 'all', label: 'Semua' },
  { id: 'blind-box', label: 'Blind Box' },
  { id: 'model-kits', label: 'Model Kits' },
  { id: 'tcg', label: 'Official TCG' },
];

export function CatalogSection({ initialCategory = 'all', onCopyVoucher }) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchCat = selectedCategory === 'all' || product.category === selectedCategory;
      const q = searchQuery.trim().toLowerCase();
      const matchQuery =
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.description.toLowerCase().includes(q);
      return matchCat && matchQuery;
    });
  }, [selectedCategory, searchQuery]);

  const buildWhatsappUrl = (productName) => {
    const message = `Halo Rickiest Toys Palembang, saya ingin menanyakan stok untuk ${productName} (Kode promo: ${STORE_INFO.voucherCode}).`;
    return `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="space-y-8">
      {/* Header & Direct Store Action */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl font-extrabold tracking-tight text-slate-50 sm:text-3xl">
            Katalog Pilihan
          </h1>
          <p className="text-sm text-slate-400">
            Tersedia di booth Palembang Icon dan toko fisik 18 Ilir. Pemesanan langsung via WhatsApp resmi.
          </p>
        </div>

        <button
          type="button"
          onClick={onCopyVoucher}
          className="inline-flex min-h-[44px] shrink-0 items-center justify-center gap-2 rounded-lg bg-amber-500 px-4 py-2.5 text-sm font-semibold text-slate-950 transition-colors duration-150 hover:bg-amber-400 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
        >
          <Tag className="h-4 w-4" />
          <span>Salin Voucher Pameran</span>
        </button>
      </div>

      {/* Filter Toolbar */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  sfx.playClick();
                  setSelectedCategory(cat.id);
                }}
                className={`min-h-[44px] rounded-lg border px-3.5 text-xs font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                  isActive
                    ? 'border-amber-500/50 bg-amber-500/10 text-amber-400'
                    : 'border-slate-800 bg-slate-900 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        <div className="relative w-full sm:max-w-xs">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari produk..."
            aria-label="Cari produk katalog"
            className="min-h-[44px] w-full rounded-lg border border-slate-800 bg-slate-900 pl-9 pr-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/30"
          />
        </div>
      </div>

      {/* Product Grid or Empty State */}
      {filteredProducts.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-slate-800 bg-slate-900 px-6 py-14 text-center">
          <p className="text-sm font-medium text-slate-200">
            Produk dengan kata kunci tersebut tidak ditemukan.
          </p>
          <p className="text-xs text-slate-400">
            Coba ubah kategori atau hapus kata kunci pencarian untuk melihat seluruh koleksi.
          </p>
          <button
            type="button"
            onClick={() => {
              sfx.playClick();
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="mt-1 inline-flex min-h-[44px] items-center rounded-lg border border-slate-700 bg-[#020617] px-4 text-xs font-semibold text-slate-200 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            Reset Filter
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="flex min-w-0 flex-col justify-between overflow-hidden rounded-xl border border-slate-800 bg-slate-900"
            >
              <div>
                <div className="aspect-square w-full overflow-hidden border-b border-slate-800 bg-[#020617]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-200 hover:scale-[1.03]"
                  />
                </div>

                <div className="space-y-2 p-5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded border border-slate-700 bg-[#020617] px-2 py-0.5 font-mono text-[11px] font-medium text-slate-300">
                      {product.badge}
                    </span>
                    <span className="font-mono text-sm font-semibold tabular-nums text-amber-400">
                      {product.priceFormatted}
                    </span>
                  </div>

                  <h2 className="text-base font-semibold text-slate-50">{product.name}</h2>
                  <p className="line-clamp-2 text-xs leading-relaxed text-slate-400">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-800 p-4">
                <a
                  href={buildWhatsappUrl(product.name)}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => sfx.playClick()}
                  className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg border border-slate-700 bg-[#020617] px-4 text-xs font-semibold text-slate-200 transition-colors duration-150 hover:border-amber-500/50 hover:text-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Pesan via WhatsApp</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Official Store Links Footer */}
      <div className="flex flex-col justify-between gap-4 rounded-xl border border-slate-800 bg-slate-900 p-5 sm:flex-row sm:items-center">
        <div className="min-w-0 space-y-1">
          <p className="text-sm font-semibold text-slate-100">Kanal Resmi Rickiest Toys</p>
          <p className="text-xs text-slate-400">
            WhatsApp: <span className="font-mono text-slate-300">{STORE_INFO.whatsappDisplay}</span> ·{' '}
            {STORE_INFO.address}
          </p>
        </div>

        <div className="flex shrink-0 flex-wrap gap-2">
          <a
            href={STORE_INFO.facebookUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => sfx.playClick()}
            className="inline-flex min-h-[44px] items-center gap-1.5 rounded-lg border border-slate-700 bg-[#020617] px-3.5 text-xs font-medium text-slate-200 hover:bg-slate-800"
          >
            <span>Facebook</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <a
            href={STORE_INFO.tokopediaUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => sfx.playClick()}
            className="inline-flex min-h-[44px] items-center gap-1.5 rounded-lg border border-slate-700 bg-[#020617] px-3.5 text-xs font-medium text-slate-200 hover:bg-slate-800"
          >
            <span>Tokopedia</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
