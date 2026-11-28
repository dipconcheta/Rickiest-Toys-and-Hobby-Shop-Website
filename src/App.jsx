import { useState } from 'react';
import { Gift, Home, MapPin, ShoppingBag } from 'lucide-react';
import { Header } from './components/Header';
import { MobileBottomNav } from './components/MobileBottomNav';
import { IntroSection } from './components/IntroSection';
import { GachaSection } from './components/GachaSection';
import { EventRadarSection } from './components/EventRadarSection';
import { CatalogSection } from './components/CatalogSection';
import { StoreContactFooter } from './components/StoreContactFooter';

const TABS = [
  { id: 'intro', label: 'Beranda', icon: Home },
  { id: 'gacha', label: 'Blind Box', icon: Gift },
  { id: 'radar', label: 'Pameran', icon: MapPin },
  { id: 'catalog', label: 'Katalog', icon: ShoppingBag },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('intro');
  const [catalogCategory, setCatalogCategory] = useState('all');

  const handleTabChange = (tabId, categorySlug) => {
    if (categorySlug) {
      setCatalogCategory(categorySlug);
    }
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
          />
        )}
      </main>

      <StoreContactFooter />
      <MobileBottomNav tabs={TABS} activeTab={activeTab} onTabChange={handleTabChange} />
    </div>
  );
}
