import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Button } from './Button';
import { HiXMark } from 'react-icons/hi2';
import 'swiper/css';
import 'swiper/css/pagination';

interface BulletPoint {
  bold: string;
  text: string;
}

export interface PromoSlide {
  tag: string;
  title: string;
  bullets: BulletPoint[];
  buttonText: string;
  buttonHref: string;
  panelBg: string;
  panelContent: React.ReactNode;
}

interface PromoModalProps {
  slides: PromoSlide[];
}

const GridPattern = ({ dark }: { dark?: boolean }) => (
  <div
    className="absolute inset-0 opacity-[0.12] animate-pattern-slide-horizontal"
    style={{
      backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2.5px, ${dark ? 'black' : 'white'} 2.5px, ${dark ? 'black' : 'white'} 5px),
                         repeating-linear-gradient(90deg, transparent, transparent 2.5px, ${dark ? 'black' : 'white'} 2.5px, ${dark ? 'black' : 'white'} 5px)`,
      backgroundSize: '10px 10px',
      backfaceVisibility: 'hidden',
      transform: 'translateZ(0)',
    }}
  />
);

export { GridPattern };

const PromoModal: React.FC<PromoModalProps> = ({ slides }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem('promo-modal-dismissed');
    if (!dismissed) {
      const timer = setTimeout(() => setIsOpen(true), 600);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('promo-modal-dismissed', 'true');
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-10"
      onClick={handleClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-4xl h-[95vh] md:h-auto md:max-h-[90vh] overflow-hidden shadow-2xl animate-modal-in border border-gray-400 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 z-50 w-8 h-8 flex items-center justify-center text-white md:text-black-light hover:text-white/70 md:hover:text-black transition-colors"
          aria-label="Close"
        >
          <HiXMark className="w-5 h-5" />
        </button>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{
            clickable: true,
            el: '.promo-pagination',
          }}
          autoplay={{
            delay: 6000,
            disableOnInteraction: true,
          }}
          loop={true}
          className="w-full flex-1"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="!h-auto">
              <div className="flex flex-col md:flex-row h-full">
                {/* Top/Left: branded panel — per-slide color & content */}
                <div className={`flex h-48 md:h-auto md:w-5/12 flex-col items-center justify-center relative overflow-hidden shrink-0 ${slide.panelBg}`}>
                  <GridPattern dark={slide.panelBg.includes('secondary')} />
                  {slide.panelContent}
                </div>

                {/* Bottom/Right: Content — white, scrollable on mobile */}
                <div className="flex-1 bg-white overflow-y-auto min-h-0">
                  <div className="relative z-10 flex flex-col justify-center px-6 sm:px-10 py-8 sm:py-12">
                    {/* Tag */}
                    <span className="inline-block self-start px-3 py-1 border border-primary-500 text-primary-500 text-xs font-semibold uppercase tracking-widest mb-5 font-anon">
                      {slide.tag}
                    </span>

                    {/* Title */}
                    <h2 className="text-2xl sm:text-3xl font-bold font-space uppercase tracking-wide leading-tight mb-8 text-black pr-6">
                      {slide.title}
                    </h2>

                    {/* Bullet points */}
                    <ul className="space-y-5 mb-10">
                      {slide.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-primary-500 text-xs mt-1.5 shrink-0">&#9679;</span>
                          <p className="font-anek-latin text-sm sm:text-base text-black/60 leading-relaxed">
                            <strong className="text-black font-space text-sm sm:text-base">{bullet.bold}</strong>{' '}
                            {bullet.text}
                          </p>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div className="flex justify-end">
                      <Button variant="dark" href={slide.buttonHref} target="_blank">
                        {slide.buttonText}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination */}
        <div className="promo-pagination flex justify-center gap-2 py-4 bg-white border-t border-gray-400" />
      </div>

      <style>{`
        @keyframes modal-in {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-modal-in {
          animation: modal-in 0.35s ease-out forwards;
        }
        .animate-modal-in .swiper {
          display: flex;
          flex-direction: column;
        }
        .animate-modal-in .swiper-wrapper {
          flex: 1;
        }
        .animate-modal-in .swiper-slide {
          height: auto !important;
        }
        @media (max-width: 767px) {
          .animate-modal-in .swiper-slide {
            height: 100% !important;
          }
          .animate-modal-in .swiper-wrapper {
            height: 100%;
          }
        }
        .promo-pagination .swiper-pagination-bullet {
          width: 10px !important;
          height: 10px !important;
          border-radius: 9999px !important;
          background: #d4d4d8 !important;
          opacity: 1 !important;
          transition: all 0.3s ease;
        }
        .promo-pagination .swiper-pagination-bullet-active {
          width: 32px !important;
          background: #5335FC !important;
        }
      `}</style>
    </div>
  );
};

export default PromoModal;
