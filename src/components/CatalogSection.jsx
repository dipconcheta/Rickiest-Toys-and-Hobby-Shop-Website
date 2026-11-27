import { useMemo, useState } from 'react';
import { Search, Tag } from 'lucide-react';
import { PRODUCTS, STORE_INFO } from '../data/mockData';
import { WhatsAppLogo } from './BrandLogos';

const CATEGORIES = [
  { id: 'all', label: 'Semua (12)' },
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
    const message = `Halo Rickiest Toys Palembang, saya ingin membeli ${productName} (Kode promo: ${STORE_INFO.voucherCode}). Apakah stok tersedia?`;
    return `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="space-y-8">
      {/* Header & Single Primary CTA */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl font-extrabold tracking-tight text-zinc-950 sm:text-3xl">
            Katalog Produk ({PRODUCTS.length} Item)
          </h1>
          <p className="text-sm text-zinc-600">
            Tersedia di Booth B-04 Palembang Icon dan toko fisik 18 Ilir. Klik pesan untuk langsung terhubung ke WhatsApp toko.
          </p>
        </div>

        <button
          type="button"
          onClick={onCopyVoucher}
          className="inline-flex min-h-[44px] shrink-0 items-center justify-center gap-2 rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-red-700 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
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
                  setSelectedCategory(cat.id);
                }}
                className={`min-h-[44px] rounded-lg border px-3.5 text-xs font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 ${
                  isActive
                    ? 'border-red-300 bg-red-50 text-red-700'
                    : 'border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300 hover:text-zinc-950'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        <div className="relative w-full sm:max-w-xs">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari Blokees, Gundam, Pokémon..."
            aria-label="Cari produk katalog"
            className="min-h-[44px] w-full rounded-lg border border-zinc-200 bg-white pl-9 pr-3 text-sm text-zinc-950 placeholder:text-zinc-400 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
          />
        </div>
      </div>

      {/* Product Grid or Empty State */}
      {filteredProducts.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-zinc-200 bg-white px-6 py-14 text-center">
          <p className="text-sm font-semibold text-zinc-900">
            Produk dengan kata kunci tersebut tidak ditemukan.
          </p>
          <p className="text-xs text-zinc-500">
            Coba ubah kategori atau hapus kata kunci pencarian untuk melihat seluruh koleksi.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="mt-1 inline-flex min-h-[44px] items-center rounded-lg border border-zinc-300 bg-white px-4 text-xs font-semibold text-zinc-800 hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
          >
            Reset Filter
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="flex min-w-0 flex-col justify-between overflow-hidden rounded-xl border border-zinc-200 bg-white"
            >
              <div>
                <div className="aspect-square w-full overflow-hidden border-b border-zinc-200 bg-zinc-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-200 hover:scale-[1.03]"
                  />
                </div>

                <div className="space-y-2 p-5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded border border-zinc-200 bg-zinc-100 px-2 py-0.5 font-mono text-[11px] font-semibold text-zinc-700">
                      {product.badge}
                    </span>
                    <span className="font-mono text-sm font-bold tabular-nums text-red-600">
                      {product.priceFormatted}
                    </span>
                  </div>

                  <h2 className="text-base font-bold text-zinc-950">{product.name}</h2>
                  <p className="line-clamp-2 text-xs leading-relaxed text-zinc-600">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="border-t border-zinc-200 p-4">
                <a
                  href={buildWhatsappUrl(product.name)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 text-xs font-semibold text-zinc-800 transition-colors duration-150 hover:border-emerald-500 hover:bg-emerald-50/50 hover:text-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
                >
                  <WhatsAppLogo className="h-4 w-4" />
                  <span>Beli via WhatsApp</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
