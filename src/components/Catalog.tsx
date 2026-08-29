import { useState, useRef, type MouseEvent } from 'react';
import { Sparkles, Star, Heart, Tag, ArrowRight, X, ShieldCheck, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { FEATURED_FRAMES } from '../data/opticaData';
import { FrameCategory } from '../types';

interface CatalogProps {
  onOpenBookingModal: (frameName?: string) => void;
}

export function Catalog({ onOpenBookingModal }: CatalogProps) {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<FrameCategory>('todos');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [selectedColorIndex, setSelectedColorIndex] = useState<{ [key: string]: number }>({});
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Merge static metadata (image, price, colors, ratings) with translated product text
  const mergedProducts = t.catalog.products.map(p => {
    const staticData = FEATURED_FRAMES.find(f => f.id === p.id) || FEATURED_FRAMES[0];
    return {
      ...staticData,
      ...p,
      price: staticData.price,
      originalPrice: staticData.originalPrice,
      rating: staticData.rating,
      reviewCount: staticData.reviewCount,
      image: staticData.image,
      colors: staticData.colors,
    };
  });

  const categories = [
    { id: 'todos' as FrameCategory, name: t.catalog.categories.todos, count: mergedProducts.length },
    { id: 'clasicos' as FrameCategory, name: t.catalog.categories.clasicos, count: mergedProducts.filter(p => p.category === 'clasicos').length },
    { id: 'deportivos' as FrameCategory, name: t.catalog.categories.deportivos, count: mergedProducts.filter(p => p.category === 'deportivos').length },
    { id: 'sol' as FrameCategory, name: t.catalog.categories.sol, count: mergedProducts.filter(p => p.category === 'sol').length },
    { id: 'infantiles' as FrameCategory, name: t.catalog.categories.infantiles, count: mergedProducts.filter(p => p.category === 'infantiles').length },
  ];

  const filteredProducts = activeCategory === 'todos'
    ? mergedProducts
    : mergedProducts.filter(p => p.category === activeCategory);

  const selectedProduct = mergedProducts.find(p => p.id === selectedProductId) || null;

  const toggleFavorite = (id: string, e: MouseEvent) => {
    e.stopPropagation();
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleSelectCategory = (catId: FrameCategory) => {
    setActiveCategory(catId);
    setActiveSlide(0);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  const scrollToSlide = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const card = container.querySelector<HTMLElement>('[data-catalog-card]');
      const cardWidth = card ? card.offsetWidth + 20 : 300;
      container.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth',
      });
      setActiveSlide(index);
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const card = container.querySelector<HTMLElement>('[data-catalog-card]');
      const cardWidth = card ? card.offsetWidth + 20 : 300;
      const scrollIndex = Math.round(container.scrollLeft / cardWidth);
      setActiveSlide(Math.min(Math.max(scrollIndex, 0), filteredProducts.length - 1));
    }
  };

  return (
    <section id="catalogo" className="py-16 sm:py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EBE3D3] text-[#18181B] border border-[#D5C6AC] text-xs font-bold tracking-wide uppercase mb-3">
              <Tag className="w-3.5 h-3.5 text-[#8C5E2D]" />
              {t.catalog.badge}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#18181B] tracking-tight font-outfit">
              {t.catalog.title}
            </h2>
            <p className="mt-3 text-base text-[#5C5349] max-w-2xl">
              {t.catalog.subtitle}
            </p>
          </div>

          {/* Quick Notice Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#F5F0E6] text-[#18181B] border border-[#D8CEBE] text-xs font-bold self-start md:self-auto shrink-0 shadow-2xs">
            <Sparkles className="w-4 h-4 text-[#C5A059]" />
            <span>{t.catalog.includesNotice}</span>
          </div>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-6 sm:mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleSelectCategory(cat.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 flex items-center gap-2 cursor-pointer select-none ${
                activeCategory === cat.id
                  ? 'bg-[#18181B] text-[#FAF8F5] shadow-md shadow-[#18181B]/20 scale-100'
                  : 'bg-[#F5F0E6] text-[#5C5349] hover:bg-[#EBE3D3] hover:text-[#18181B]'
              }`}
            >
              <span>{cat.name}</span>
              <span className={`text-[11px] px-1.5 py-0.5 rounded-full font-semibold ${
                activeCategory === cat.id ? 'bg-[#2D2A26] text-[#E5C378]' : 'bg-[#E3D9C8] text-[#5C5349]'
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Mobile / Tablet Carousel Controls */}
        <div className="flex lg:hidden items-center justify-between mb-4 px-1">
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-bold text-[#8C5E2D] uppercase tracking-wide">
              {filteredProducts.length > 0 ? activeSlide + 1 : 0} / {filteredProducts.length}
            </span>
            <span className="text-xs text-[#8C8375]">• Desliza para explorar</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollToSlide(Math.max(activeSlide - 1, 0))}
              disabled={activeSlide === 0}
              aria-label="Modelo anterior"
              className="w-8 h-8 rounded-full bg-[#FAF8F5] border border-[#E2D8C7] flex items-center justify-center text-[#18181B] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#EBE3D3] transition-colors shadow-2xs cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollToSlide(Math.min(activeSlide + 1, filteredProducts.length - 1))}
              disabled={activeSlide >= filteredProducts.length - 1}
              aria-label="Siguiente modelo"
              className="w-8 h-8 rounded-full bg-[#FAF8F5] border border-[#E2D8C7] flex items-center justify-center text-[#18181B] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#EBE3D3] transition-colors shadow-2xs cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Product Grid / Responsive Carousel with Fixed Standardized Heights */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
        >
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex lg:grid lg:grid-cols-4 gap-5 sm:gap-6 overflow-x-auto lg:overflow-visible snap-x snap-mandatory scroll-smooth pb-4 lg:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0"
          >
            {filteredProducts.map((product) => {
              const isFav = favorites.includes(product.id);
              const colorIdx = selectedColorIndex[product.id] || 0;

              return (
                <div
                  key={product.id}
                  data-catalog-card
                  onClick={() => setSelectedProductId(product.id)}
                  className="w-[82vw] max-w-[310px] sm:w-[320px] lg:w-auto shrink-0 lg:shrink snap-center group bg-white rounded-3xl overflow-hidden border border-[#EBE4D8] hover:border-[#C5A059] shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer h-[470px] sm:h-[490px] lg:h-[500px]"
                >
                  {/* Image Area with Standard Fixed Height */}
                  <div className="relative h-52 sm:h-56 bg-[#FAF8F5] shrink-0 overflow-hidden flex items-center justify-center p-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="w-full h-full object-contain group-hover:scale-108 transition-transform duration-500"
                    />

                    {/* Top Left Badge */}
                    {product.badge && (
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded-full bg-[#18181B] text-[#E5C378] border border-[#C5A059]/40 text-[10px] font-bold tracking-wide shadow-2xs">
                          {product.badge}
                        </span>
                      </div>
                    )}

                    {/* Favorite Button */}
                    <button
                      onClick={(e) => toggleFavorite(product.id, e)}
                      className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                        isFav ? 'bg-rose-50 text-rose-600' : 'bg-white/90 text-[#8C8275] hover:text-rose-600'
                      } shadow-2xs cursor-pointer`}
                      aria-label="Guardar en favoritos"
                    >
                      <Heart className={`w-4 h-4 ${isFav ? 'fill-current' : ''}`} />
                    </button>

                    {/* Lens Included Mini Tag */}
                    <div className="absolute bottom-2.5 left-3 right-3">
                      <span className="inline-block w-full text-center px-2 py-1 rounded-lg bg-white/95 backdrop-blur-xs text-[10px] font-semibold text-[#4E715B] border border-[#EBE4D8] truncate">
                        ✓ {product.lensTypeIncluded}
                      </span>
                    </div>
                  </div>

                  {/* Product Details with Internal Vertical Scroll to Standardize Body Space */}
                  <div className="flex-1 overflow-y-auto p-4 sm:p-5 pt-3 space-y-2">
                    <div className="flex items-center justify-between text-xs text-[#8C8275]">
                      <span className="font-semibold uppercase tracking-wider text-[11px] text-[#8C5E2D]">{product.brand}</span>
                      <div className="flex items-center gap-1 text-[#C5A059]">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span className="font-bold text-[#18181B] text-xs">{product.rating}</span>
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-[#18181B] font-outfit group-hover:text-[#8C5E2D] transition-colors leading-snug line-clamp-1">
                      {product.name}
                    </h3>

                    <p className="text-xs text-[#6B6155] line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Color Options */}
                    <div className="flex items-center gap-1.5 pt-2 border-t border-[#F3EFE6]">
                      <span className="text-[10px] text-[#8C8275] uppercase font-bold mr-1">{t.common.color}:</span>
                      {product.colors.map((color, cIdx) => (
                        <button
                          key={cIdx}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedColorIndex({ ...selectedColorIndex, [product.id]: cIdx });
                          }}
                          className={`w-3.5 h-3.5 rounded-full border transition-all cursor-pointer ${
                            colorIdx === cIdx ? 'ring-2 ring-[#C5A059] ring-offset-1 scale-110' : 'opacity-80 hover:opacity-100'
                          }`}
                          style={{ backgroundColor: color }}
                          aria-label={`Color ${cIdx + 1}`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Card Footer Fixed at Bottom */}
                  <div className="shrink-0 p-4 sm:p-5 pt-2 border-t border-[#F3EFE6] flex items-center justify-between gap-2 bg-[#FAF8F5]">
                    <div>
                      <div className="text-[11px] text-[#8C8275]">{t.common.price}</div>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-base sm:text-lg font-black text-[#18181B] font-outfit">${product.price}</span>
                        {product.originalPrice && (
                          <span className="text-xs text-[#8C8275] line-through">${product.originalPrice}</span>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenBookingModal(product.name);
                      }}
                      className="p-2 sm:p-2.5 rounded-xl bg-white group-hover:bg-[#18181B] text-[#18181B] group-hover:text-[#E5C378] border border-[#EBE4D8] group-hover:border-[#C5A059]/40 transition-all cursor-pointer shadow-2xs"
                      title={t.catalog.modal.reserveFrameBtn}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Mobile Slide Indicator Dots */}
        {filteredProducts.length > 1 && (
          <div className="flex lg:hidden items-center justify-center gap-1.5 mt-3">
            {filteredProducts.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => scrollToSlide(dotIdx)}
                aria-label={`Ir al modelo ${dotIdx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeSlide === dotIdx
                    ? 'w-6 bg-[#C5A059]'
                    : 'w-2 bg-[#D8CEBE] hover:bg-[#BFA88F]'
                }`}
              />
            ))}
          </div>
        )}

        {/* Bottom Guarantee Banner */}
        <div className="mt-10 sm:mt-12 p-5 sm:p-6 rounded-2xl bg-[#F5F0E6] border border-[#D8CEBE] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <ShieldCheck className="w-8 h-8 text-[#8C5E2D] shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-[#18181B]">{t.common.oneYearWarranty}</h4>
              <p className="text-xs text-[#5C5349]">{t.catalog.modal.inStock} • {t.catalog.modal.deliveryHours}</p>
            </div>
          </div>
          <button
            onClick={() => onOpenBookingModal('Asesoría de Imagen y Visagismo')}
            className="px-5 py-2.5 rounded-xl bg-[#18181B] hover:bg-[#2D2A26] text-[#E5C378] font-bold text-xs whitespace-nowrap shadow-xs transition-all cursor-pointer"
          >
            {t.common.bookAppointment}
          </button>
        </div>

      </div>

      {/* Product Details Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2 }}
              className="bg-[#FAF8F5] rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#EBE4D8] max-h-[90vh] flex flex-col"
            >
              {/* Modal Header */}
              <div className="relative h-60 sm:h-72 bg-[#18181B] shrink-0">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-contain p-6"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#18181B]/95 via-[#18181B]/40 to-transparent pointer-events-none"></div>
                
                <button
                  onClick={() => setSelectedProductId(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded-md bg-[#C5A059] text-[#18181B] text-[11px] font-extrabold">
                      {selectedProduct.categoryName}
                    </span>
                    <span className="text-xs text-[#D8CEBE]">Brand: <strong>{selectedProduct.brand}</strong></span>
                  </div>
                  <h3 className="text-2xl font-extrabold font-outfit">{selectedProduct.name}</h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto space-y-5">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-black text-[#18181B] font-outfit">
                      ${selectedProduct.price} <span className="text-sm font-medium text-[#7A6F62]">USD</span>
                    </div>
                    {selectedProduct.originalPrice && (
                      <span className="text-xs text-[#9E9385] line-through">
                        ${selectedProduct.originalPrice} USD
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F5F0E6] border border-[#D8CEBE]">
                    <Star className="w-4 h-4 fill-[#C5A059] text-[#C5A059]" />
                    <span className="text-xs font-bold text-[#18181B]">{selectedProduct.rating} / 5.0</span>
                    <span className="text-xs text-[#7A6F62]">({selectedProduct.reviewCount} {t.common.reviews})</span>
                  </div>
                </div>

                <p className="text-sm text-[#5C5349] leading-relaxed">
                  {selectedProduct.description}
                </p>

                {/* Specs Box */}
                <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-white border border-[#EBE4D8] text-xs">
                  <div>
                    <span className="text-[#8C8375] font-semibold block">{t.common.material}:</span>
                    <span className="font-bold text-[#18181B]">{selectedProduct.material}</span>
                  </div>
                  <div>
                    <span className="text-[#8C8375] font-semibold block">{t.common.shape}:</span>
                    <span className="font-bold text-[#18181B]">{selectedProduct.shape}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-[#8C8375] font-semibold block">{t.common.includedLenses}:</span>
                    <span className="font-bold text-[#4E715B]">{selectedProduct.lensTypeIncluded}</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2">
                  <h5 className="text-xs font-bold uppercase text-[#8C5E2D] tracking-wider">{t.catalog.modal.benefitsTitle}:</h5>
                  {selectedProduct.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-medium text-[#3F3931]">
                      <Check className="w-4 h-4 text-[#4E715B] shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 pt-3 border-t border-[#F3EFE6] bg-[#FAF8F5] flex gap-3 shrink-0">
                <button
                  onClick={() => {
                    const prodName = selectedProduct.name;
                    setSelectedProductId(null);
                    onOpenBookingModal(`Apartar Armazón: ${prodName}`);
                  }}
                  className="flex-1 py-3 px-5 rounded-xl bg-gradient-to-r from-[#B88E3E] via-[#C5A059] to-[#9E7440] hover:from-[#A6763D] hover:to-[#8C5E2D] text-[#18181B] font-bold text-sm shadow-md transition-all cursor-pointer"
                >
                  {t.catalog.modal.reserveFrameBtn}
                </button>
                <button
                  onClick={() => setSelectedProductId(null)}
                  className="py-3 px-5 rounded-xl border border-[#D8CEBE] text-[#3F3931] font-semibold text-sm hover:bg-[#F3EFE6] transition-all cursor-pointer"
                >
                  {t.common.close}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
