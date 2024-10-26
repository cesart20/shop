"use client";

import { CarouselItems } from "./CarouselItems";
import { useState } from "react";
import type { UseEmblaCarouselType } from 'embla-carousel-react';


export const CarruselDestacado = () => {

    const [carouselApi, setCarouselApi] = useState<UseEmblaCarouselType[1] | undefined>(undefined);

  // Función para mover al siguiente slide
  const handleNext = () => {
    if (carouselApi) {
      carouselApi.scrollNext();
    }
  };

  // Función para mover al anterior slide
  const handlePrev = () => {
    if (carouselApi) {
      carouselApi.scrollPrev();
    }
  };

  return (
    <section className="mt-2 bg-muted px-0 pt-4 md:px-10 lg:px-24">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-4">

        <div className="flex w-full justify-between px-5 md:px-0">
          <div className="flex items-center gap-2 text-base font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-star size-4 text-muted-foreground/80"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            Destacados
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <button 
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background hover:text-accent-foreground size-8 shrink-0 border-muted text-muted-foreground hover:bg-background hover:shadow-sm"
              onClick={handlePrev}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-left size-4"
              >
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path>
              </svg>
            </button>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background hover:text-accent-foreground size-8 shrink-0 border-muted text-muted-foreground hover:bg-background hover:shadow-sm"
              onClick={handleNext}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right size-4"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
        <CarouselItems setCarouselApi={setCarouselApi} />
        
        </div>
    </section>
  );
};
