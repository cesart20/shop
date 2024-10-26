/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

import Image from "next/image"

export function CarouselItems({setCarouselApi}: any) {


  return (
    <Carousel
      setApi={setCarouselApi}
      opts={{
        align: "start",
      }}
      className="w-full max-w-full"
    >
      <CarouselContent className="flex flex-row gap-5 px-5 pb-5 md:px-0">
        {Array.from({ length: 7 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/5">
            <button className="whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-[#222222] absolute right-4 top-4 z-20 flex size-8 items-center justify-center rounded-[8px] border border-input bg-background p-0 font-semibold shadow-sm transition-all duration-200 hover:bg-background lg:bg-background/80">
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
                    className="lucide lucide-plus size-4 text-foreground"
                >
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                </svg>
            </button>
            <a href="fashionhub/871">
                <div className="group relative h-[168px] w-full shrink-0 overflow-hidden rounded-[10px] bg-muted lg:h-[212px] xl:h-[222px]">
                    <Image
                    alt="Blusa con short"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-cover transition-all duration-200 hover:scale-[103%]"
                    style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        color: "transparent",
                    }}
                    src={"/images/carrusel1.jpeg"}
                    width={224}
                    height={222}
                    />
                    <div className="absolute bottom-5 left-0 z-20 rounded-r-[4px] bg-primary px-2 py-1 text-black shadow-sm">
                    <p className="text-sm font-semibold">22% OFF</p>
                    </div>
                </div>
            </a>
            <a className="flex w-full flex-col gap-1" href="fashionhub/871">
                <h2 className="line-clamp-1 text-sm font-semibold">
                    Blusa con short
                </h2>
                <div className="flex flex-col gap-[2px]">
                    <p className="text-xs font-medium text-muted-foreground/70 line-through">
                    Gs. 320.000
                    </p>
                    <p className="whitespace-nowrap text-sm font-semibold text-muted-foreground">
                    Gs. 250.000
                    </p>
                </div>
            </a>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  )
}
