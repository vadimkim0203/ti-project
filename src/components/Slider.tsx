'use client';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { slides } from '@/constants/slides';
import Link from 'next/link';

const Slider = () => {
  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden relative">
      <Carousel
        className="w-max h-full flex transition-all ease-in-out duration-1000"
        opts={{
          // align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent className="h-full w-screen">
          {slides.map((slide) => (
            <CarouselItem className="h-full" key={slide.id}>
              <div
                className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
                key={slide.id}
              >
                <div className="h-1/2 xl:w-1/2 xl:h-full flex items-center justify-center gap-8 2xl:gap-12 text-center">
                  <h2 className="text-xl lg:text-3xl 2xl:text-5xl">
                    {slide.description}
                  </h2>
                  <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">
                    {slide.title}
                  </h1>
                  <Link href={slide.url}></Link>
                </div>

                <div className="h-1/2 xl:w-1/2 xl:h-full relative">
                  <Image
                    src={slide.img}
                    alt=""
                    fill
                    sizes="100%"
                    className="object-cover"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-[100] cursor-pointer" />
        <CarouselNext className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-[100] cursor-pointer" />
      </Carousel>
    </div>
  );
};

export default Slider;
