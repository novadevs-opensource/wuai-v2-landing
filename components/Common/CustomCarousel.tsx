'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Button } from './Button';
import { Pagination } from 'swiper/modules';

type Cta = {
  text: string;
  link: string;
  variant: 'dark' | 'light';
};

interface Slide {
  title: string,
  description: string
  ctas: Cta[]
}

export interface CustomCarouselProps {
  data: {
    image: string;
    slides: Slide[];
  };
}

const CustomCarousel: React.FC<CustomCarouselProps> = ({ data }) => {
  const pagination = {
    clickable: true,
    injectStyles: [`
    `],
    renderBullet: function (index: number, className: string) {
      return `<span class="${className} transition-all duration-300 index-${index}"></span>`;
    },
  };

  return (
    <div className="w-11/12 md:container mx-auto flex flex-col items-center py-12">
      <div className="flex flex-col md:flex-row w-full justify-center">
        <div className="w-full md:w-1/2 relative h-[50vh] md:h-[70vh] max-h-[500px]">
          <img
            src={data.image}
            alt="Tab Image"
            className="object-cover w-full h-full rounded-t-lg md:rounded-none md:rounded-l-lg"
          />
        </div>

        <div className="w-full md:w-1/2 relative h-[50vh] md:h-[70vh] max-h-[500px]">
          <Swiper
            direction="vertical"
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={pagination}
            modules={[Pagination]}
            className="w-full h-full vertical md:rounded-r-lg md:rounded-none rounded-b-lg"
          >
            {data.slides.map((slide, index) => (
              <SwiperSlide key={index} className="relative">
                <div className="absolute inset-0 bg-gradient-secondary opacity-60"></div>
                <div className="flex flex-col gap-1 h-full justify-center ml-12 p-2 md:p-5 relative text-black z-10">
                  <h2 className="text-2xl md:text-4xl font-bold font-anek-latin">{slide.title}</h2>
                  <p className="md:text-xl text-xl mt-4 mb-8 font-afacad">{slide.description}</p>
                  <div className='flex flex-row gap-2'>
                    {slide.ctas.map((cta: Cta, index: number) => (
                      <Button key={index} variant={cta.variant} href={cta.link}>{cta.text}</Button>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className='md:w-8/12 mx-auto mt-20'>
            <h3 className='text-2xl font-bold font-anek-latin text-center max-w-2xl mx-auto'>
            &ldquo;Empowering creativity, rewarding influence, welcome to the future of digital interaction.&rdquo;
            </h3>
      </div>
    </div>
  );
};

export default CustomCarousel;
