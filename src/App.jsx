import { useEffect, useRef, useState } from 'react';
import { Gift, Home, MapPin, ShoppingBag } from 'lucide-react';
import { Header } from './components/Header';
import { MobileBottomNav } from './components/MobileBottomNav';
import { IntroSection } from './components/IntroSection';
import { GachaSection } from './components/GachaSection';
import { EventRadarSection } from './components/EventRadarSection';
import { CatalogSection } from './components/CatalogSection';
import { StoreContactFooter } from './components/StoreContactFooter';
import { STORE_INFO } from './data/mockData';

const TABS = [
  { id: 'intro', label: 'Beranda', icon: Home },
  { id: 'gacha', label: 'Blind Box', icon: Gift },
  { id: 'radar', label: 'Pameran', icon: MapPin },
  { id: 'catalog', label: 'Katalog', icon: ShoppingBag },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('intro');
  const [catalogCategory, setCatalogCategory] = useState('all');
  const [toastMessage, setToastMessage] = useState('');
  const toastTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    };
  }, []);

  const handleTabChange = (tabId, categorySlug) => {
    if (categorySlug) {
      setCatalogCategory(categorySlug);
    }
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyVoucher = () => {
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(STORE_INFO.voucherCode).catch(() => {});
    }
    setToastMessage(`Kode voucher ${STORE_INFO.voucherCode} disalin untuk Booth B-04 Palembang Icon.`);
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    toastTimerRef.current = setTimeout(() => setToastMessage(''), 3000);
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#FAFAFA] text-zinc-950">
      <Header tabs={TABS} activeTab={activeTab} onTabChange={handleTabChange} />

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 pt-6 sm:px-6 sm:pt-8 lg:px-8">
        {activeTab === 'intro' && <IntroSection onNavigate={handleTabChange} />}
        {activeTab === 'gacha' && (
          <GachaSection onNavigateCatalog={() => handleTabChange('catalog', 'blind-box')} />
        )}
        {activeTab === 'radar' && <EventRadarSection />}
        {activeTab === 'catalog' && (
          <CatalogSection
            key={catalogCategory}
            initialCategory={catalogCategory}
            onCopyVoucher={handleCopyVoucher}
          />
        )}
      </main>

      <StoreContactFooter />
      <MobileBottomNav tabs={TABS} activeTab={activeTab} onTabChange={handleTabChange} />

      {/* Toast Notification */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-20 left-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 rounded-lg border border-red-300 bg-zinc-950 px-4 py-3 text-center text-xs font-medium text-white md:bottom-6"
        >
          {toastMessage}
        </div>
      )}
    </div>
  );
}
