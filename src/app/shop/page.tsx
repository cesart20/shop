import {
  CarruselDestacado,
  MenuPrincipal,
  PortadaPrincipal,
} from "@/components";
import Image from "next/image";
import Link from "next/link";

export default function ShopPage() {
  return (
    <>
      <div className="flex min-h-[100dvh] flex-col">
        <PortadaPrincipal />
        <MenuPrincipal />
        <CarruselDestacado />

        <div className="flex w-full flex-1 flex-col items-center gap-10 px-5 pb-12 md:gap-14 md:px-10 lg:px-24">
          <div className="relative w-full max-w-[1200px] pt-5  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col gap-3">
              <div className="group relative w-full null">
                <button className="whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-[#222222] absolute z-20 flex items-center justify-center border border-input bg-background p-0 font-semibold shadow-sm transition-all duration-200 hover:bg-background lg:bg-background/80 rounded-[10px] size-9 right-2 top-2">
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
                <div className="absolute left-0 z-20 rounded-r-[4px] bg-primary px-2 py-1 text-black shadow-sm bottom-8 text-base">
                  <p className="font-semibold">22% OFF</p>
                </div>
                <div
                  className="relative"
                  role="region"
                  aria-roledescription="carousel"
                >
                  <a href="/fashionhub/871">
                    <div className="overflow-hidden">
                      <div
                        className="flex -ml-4"
                        style={{ transform: "translate3d(0px, 0px, 0px)" }}
                      >
                        <div
                          role="group"
                          aria-roledescription="slide"
                          className="min-w-0 shrink-0 grow-0 basis-full pl-4"
                          style={{ transform: "translate3d(0px, 0px, 0px)" }}
                        >
                          <div className="group relative overflow-hidden bg-muted  md:h-[260px] h-[380px] rounded-[16px] w-full">
                            <Image
                              alt="Blusa con short"
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              className="object-cover"
                              height={379}
                              width={260}
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%;",
                                left: "0;",
                                top: "0;",
                                right: "0;",
                                bottom: "0;",
                                color: "transparent",
                              }}
                              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                              src="/images/grid.webp"
                            />
                          </div>
                        </div>
                        <div
                          role="group"
                          aria-roledescription="slide"
                          className="min-w-0 shrink-0 grow-0 basis-full pl-4"
                        >
                          <div className="group relative overflow-hidden bg-muted  md:h-[260px] h-[380px] rounded-[16px] w-full">
                            <Image
                              alt="Blusa con short"
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              className="object-cover"
                              height={379}
                              width={260}
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%;",
                                left: "0;",
                                top: "0;",
                                right: "0;",
                                bottom: "0;",
                                color: "transparent",
                              }}
                              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                              src="/images/grid.webp"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <button className="items-center justify-center whitespace-nowrap text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-primary-foreground bg-background hover:bg-accent hover:text-accent-foreground absolute h-8 w-8 rounded-full top-1/2 -translate-y-1/2 left-3 hidden border-none shadow-sm md:group-hover:flex">
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
                      className="lucide lucide-arrow-left h-4 w-4"
                    >
                      <path d="m12 19-7-7 7-7"></path>
                      <path d="M19 12H5"></path>
                    </svg>
                    <span className="sr-only">Previous slide</span>
                  </button>
                  <button className="items-center justify-center whitespace-nowrap text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-primary-foreground bg-background hover:bg-accent hover:text-accent-foreground absolute h-8 w-8 rounded-full top-1/2 -translate-y-1/2 right-3 hidden border-none shadow-sm md:group-hover:flex">
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
                      className="lucide lucide-arrow-right h-4 w-4"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                    <span className="sr-only">Next slide</span>
                  </button>
                </div>
                <div className="absolute bottom-[10px] left-1/2 z-20 flex -translate-x-1/2 gap-[4px] md:bottom-[10px]">
                  <div className="h-[6px] w-[6px] rounded-full bg-primary"></div>
                  <div className="h-[6px] w-[6px] rounded-full bg-muted-foreground"></div>
                </div>
              </div>
              <a className="hidden" href="/fashionhub/871">
                <div className="group relative h-24 w-20 shrink-0 overflow-hidden rounded-[10px] bg-muted">
                  <Image
                    alt="Blusa con short"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    height={379}
                    width={260}
                    className="object-cover transition-all duration-200 group-hover:scale-[103%]"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      left: "0",
                      top: "0",
                      right: "0",
                      bottom: "0",
                      color: "transparent",
                    }}
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw "
                    src="/images/grid.webp"
                  />
                  <div className="absolute bottom-[14px] left-0 z-20 rounded-r-[2px] bg-primary px-1 py-[2px] text-black shadow-sm">
                    <p className="text-xs font-semibold">22% OFF</p>
                  </div>
                </div>
              </a>
              <a
                className="flex justify-between gap-1 w-full flex-col"
                href="/fashionhub/871"
              >
                <div className="flex w-full flex-col gap-1">
                  <h2 className="text-sm font-semibold">Blusa con short</h2>
                  <p className="line-clamp-2 text-xs font-medium leading-[18px] text-muted-foreground hidden">
                    Blusa lisa con short. Tela de la mejor calidad
                  </p>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex flex-row items-center gap-2">
                    <p className="font-medium text-muted-foreground/70 line-through text-sm">
                      Gs. 320.000
                    </p>
                    <p className="whitespace-nowrap font-semibold text-sm text-muted-foreground">
                      Gs. 250.000
                    </p>
                  </div>
                  <button className="whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-[#222222] z-20 size-7 w-7 items-center justify-center rounded-[8px] border border-input bg-background p-0 font-semibold shadow-sm transition-all duration-200 hover:border-muted-foreground/40 hover:bg-background lg:bg-background/80 hidden">
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
                      className="lucide lucide-plus size-4 shrink-0 text-foreground"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                  </button>
                </div>
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <div className="group relative w-full null">
                <button className="whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-[#222222] absolute z-20 flex items-center justify-center border border-input bg-background p-0 font-semibold shadow-sm transition-all duration-200 hover:bg-background lg:bg-background/80 rounded-[10px] size-9 right-2 top-2">
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
                <div
                  className="relative"
                  role="region"
                  aria-roledescription="carousel"
                >
                  <a href="/fashionhub/873">
                    <div className="overflow-hidden">
                      <div
                        className="flex -ml-4"
                        style={{ transform: "translate3d(0px, 0px, 0px)" }}
                      >
                        <div
                          role="group"
                          aria-roledescription="slide"
                          className="min-w-0 shrink-0 grow-0 basis-full pl-4"
                        >
                          <div className="group relative overflow-hidden bg-muted  md:h-[260px] h-[380px] rounded-[16px] w-full">
                            <Image
                              alt="Blusa blanca lisa"
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              className="object-cover"
                              height={379}
                              width={260}
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                left: "0",
                                top: "0",
                                right: "0",
                                bottom: "0",
                                color: "transparent",
                              }}
                              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                              src="/images/grid.webp"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <button
                    className="items-center justify-center whitespace-nowrap text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-primary-foreground bg-background hover:bg-accent hover:text-accent-foreground absolute h-8 w-8 rounded-full top-1/2 -translate-y-1/2 left-3 hidden border-none shadow-sm"
                    disabled
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
                      className="lucide lucide-arrow-left h-4 w-4"
                    >
                      <path d="m12 19-7-7 7-7"></path>
                      <path d="M19 12H5"></path>
                    </svg>
                    <span className="sr-only">Previous slide</span>
                  </button>
                  <button
                    className="items-center justify-center whitespace-nowrap text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-primary-foreground bg-background hover:bg-accent hover:text-accent-foreground absolute h-8 w-8 rounded-full top-1/2 -translate-y-1/2 right-3 hidden border-none shadow-sm"
                    disabled
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
                      className="lucide lucide-arrow-right h-4 w-4"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                    <span className="sr-only">Next slide</span>
                  </button>
                </div>
                <div className="absolute bottom-[10px] left-1/2 z-20 flex -translate-x-1/2 gap-[4px] md:bottom-[10px]"></div>
              </div>
              <a className="hidden" href="/fashionhub/873">
                <div className="group relative h-24 w-20 shrink-0 overflow-hidden rounded-[10px] bg-muted">
                  <Image
                    alt="Blusa blanca lisa"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    height={379}
                    width={260}
                    className="object-cover transition-all duration-200 group-hover:scale-[103%]"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      left: "0",
                      top: "0",
                      right: "0",
                      bottom: "0",
                      color: "transparent",
                    }}
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw "
                    src="/images/grid.webp"
                  />
                </div>
              </a>
              <a
                className="flex justify-between gap-1 w-full flex-col"
                href="/fashionhub/873"
              >
                <div className="flex w-full flex-col gap-1">
                  <h2 className="text-sm font-semibold">Blusa blanca lisa</h2>
                  <p className="line-clamp-2 text-xs font-medium leading-[18px] text-muted-foreground hidden">
                    Polyester de la mejor calidad.
                  </p>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex flex-row items-center gap-2">
                    <p className="whitespace-nowrap font-semibold text-sm text-muted-foreground">
                      Gs. 195.000
                    </p>
                  </div>
                  <button className="whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-[#222222] z-20 size-7 w-7 items-center justify-center rounded-[8px] border border-input bg-background p-0 font-semibold shadow-sm transition-all duration-200 hover:border-muted-foreground/40 hover:bg-background lg:bg-background/80 hidden">
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
                      className="lucide lucide-plus size-4 shrink-0 text-foreground"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                  </button>
                </div>
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <div className="group relative w-full null">
                <button className="whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-[#222222] absolute z-20 flex items-center justify-center border border-input bg-background p-0 font-semibold shadow-sm transition-all duration-200 hover:bg-background lg:bg-background/80 rounded-[10px] size-9 right-2 top-2">
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
                <div
                  className="relative"
                  role="region"
                  aria-roledescription="carousel"
                >
                  <a href="/fashionhub/4009">
                    <div className="overflow-hidden">
                      <div
                        className="flex -ml-4"
                        style={{ transform: "translate3d(0px, 0px, 0px)" }}
                      >
                        <div
                          role="group"
                          aria-roledescription="slide"
                          className="min-w-0 shrink-0 grow-0 basis-full pl-4"
                        >
                          <div className="group relative overflow-hidden bg-muted  md:h-[260px] h-[380px] rounded-[16px] w-full">
                            <Image
                              alt="Blusa “Luna de Verano”"
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              className="object-cover"
                              height={379}
                              width={260}
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                left: "0",
                                top: "0",
                                right: "0",
                                bottom: "0",
                                color: "transparent",
                              }}
                              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                              src="/images/grid.webp"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <button
                    className="items-center justify-center whitespace-nowrap text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-primary-foreground bg-background hover:bg-accent hover:text-accent-foreground absolute h-8 w-8 rounded-full top-1/2 -translate-y-1/2 left-3 hidden border-none shadow-sm"
                    disabled
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
                      className="lucide lucide-arrow-left h-4 w-4"
                    >
                      <path d="m12 19-7-7 7-7"></path>
                      <path d="M19 12H5"></path>
                    </svg>
                    <span className="sr-only">Previous slide</span>
                  </button>
                  <button
                    className="items-center justify-center whitespace-nowrap text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-primary-foreground bg-background hover:bg-accent hover:text-accent-foreground absolute h-8 w-8 rounded-full top-1/2 -translate-y-1/2 right-3 hidden border-none shadow-sm"
                    disabled
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
                      className="lucide lucide-arrow-right h-4 w-4"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                    <span className="sr-only">Next slide</span>
                  </button>
                </div>
                <div className="absolute bottom-[10px] left-1/2 z-20 flex -translate-x-1/2 gap-[4px] md:bottom-[10px]"></div>
              </div>
              <a className="hidden" href="/fashionhub/4009">
                <div className="group relative h-24 w-20 shrink-0 overflow-hidden rounded-[10px] bg-muted">
                  <Image
                    alt="Blusa “Luna de Verano”"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    height={379}
                    width={260}
                    className="object-cover transition-all duration-200 group-hover:scale-[103%]"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      left: "0",
                      top: "0",
                      right: "0",
                      bottom: "0",
                      color: "transparent",
                    }}
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw "
                    src="/images/grid.webp"
                  />
                </div>
              </a>
              <a
                className="flex justify-between gap-1 w-full flex-col"
                href="/fashionhub/4009"
              >
                <div className="flex w-full flex-col gap-1">
                  <h2 className="text-sm font-semibold">
                    Blusa “Luna de Verano”
                  </h2>
                  <p className="line-clamp-2 text-xs font-medium leading-[18px] text-muted-foreground hidden">
                    La blusa “Luna de Verano” es la prenda perfecta para días
                    cálidos. Confeccionada en algodón suave y transpirable,
                    presenta un diseño de manga corta abullonada y un escote
                    cuadrado que añade un toque romántico. Los delicados
                    detalles bordados en el pecho evocan un estilo boho chic,
                    ideal para combinar con jeans o faldas. Disponible en
                    colores pasteles, esta blusa ofrece una opción versátil para
                    un look casual pero elegante.
                  </p>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex flex-row items-center gap-2">
                    <p className="whitespace-nowrap font-semibold text-sm text-muted-foreground">
                      Gs. 190.000
                    </p>
                  </div>
                  <button className="whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-[#222222] z-20 size-7 w-7 items-center justify-center rounded-[8px] border border-input bg-background p-0 font-semibold shadow-sm transition-all duration-200 hover:border-muted-foreground/40 hover:bg-background lg:bg-background/80 hidden">
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
                      className="lucide lucide-plus size-4 shrink-0 text-foreground"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                  </button>
                </div>
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <div className="group relative w-full null">
                <div className="absolute left-0 z-20 rounded-r-[4px] bg-input px-2 py-1 text-foreground/60 shadow-sm bottom-8 text-base">
                  <p className="font-semibold">AGOTADO</p>
                </div>
                <div
                  className="relative"
                  role="region"
                  aria-roledescription="carousel"
                >
                  <a href="/fashionhub/878">
                    <div className="overflow-hidden">
                      <div
                        className="flex -ml-4"
                        style={{ transform: "translate3d(0px, 0px, 0px)" }}
                      >
                        <div
                          role="group"
                          aria-roledescription="slide"
                          className="min-w-0 shrink-0 grow-0 basis-full pl-4"
                        >
                          <div className="group relative overflow-hidden bg-muted  md:h-[260px] h-[380px] rounded-[16px] w-full">
                            <Image
                              alt="Pantalón elegante color crema"
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              height={379}
                              width={260}
                              className="object-cover"
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                left: "0",
                                top: "0",
                                right: "0",
                                bottom: "0",
                                color: "transparent",
                              }}
                              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                              src="/images/grid.webp"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <button
                    className="items-center justify-center whitespace-nowrap text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-primary-foreground bg-background hover:bg-accent hover:text-accent-foreground absolute h-8 w-8 rounded-full top-1/2 -translate-y-1/2 left-3 hidden border-none shadow-sm"
                    disabled
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
                      className="lucide lucide-arrow-left h-4 w-4"
                    >
                      <path d="m12 19-7-7 7-7"></path>
                      <path d="M19 12H5"></path>
                    </svg>
                    <span className="sr-only">Previous slide</span>
                  </button>
                  <button
                    className="items-center justify-center whitespace-nowrap text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-primary-foreground bg-background hover:bg-accent hover:text-accent-foreground absolute h-8 w-8 rounded-full top-1/2 -translate-y-1/2 right-3 hidden border-none shadow-sm"
                    disabled
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
                      className="lucide lucide-arrow-right h-4 w-4"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                    <span className="sr-only">Next slide</span>
                  </button>
                </div>
                <div className="absolute bottom-[10px] left-1/2 z-20 flex -translate-x-1/2 gap-[4px] md:bottom-[10px]"></div>
              </div>
              <a className="hidden" href="/fashionhub/878">
                <div className="group relative h-24 w-20 shrink-0 overflow-hidden rounded-[10px] bg-muted">
                  <Image
                    alt="Pantalón elegante color crema"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    height={379}
                    width={260}
                    className="object-cover transition-all duration-200 group-hover:scale-[103%]"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      left: "0",
                      top: "0",
                      right: "0",
                      bottom: "0",
                      color: "transparent",
                    }}
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw "
                    src="/images/grid.webp"
                  />
                  <div className="absolute bottom-[14px] left-0 z-20 rounded-r-[2px] bg-input px-1 py-[2px] text-foreground/60 shadow-sm">
                    <p className="text-xs font-semibold">AGOTADO</p>
                  </div>
                </div>
              </a>
              <a
                className="flex justify-between gap-1 w-full flex-col"
                href="/fashionhub/878"
              >
                <div className="flex w-full flex-col gap-1">
                  <h2 className="text-sm font-semibold">
                    Pantalón elegante color crema
                  </h2>
                  <p className="line-clamp-2 text-xs font-medium leading-[18px] text-muted-foreground hidden">
                    Cintura con elástico para mayor confort.Seda suaveApto para
                    lavarropasElegante
                  </p>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex flex-row items-center gap-2">
                    <p className="whitespace-nowrap font-semibold text-sm text-muted-foreground">
                      Gs. 220.000
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <div className="group relative w-full null">
                <button className="whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-[#222222] absolute z-20 flex items-center justify-center border border-input bg-background p-0 font-semibold shadow-sm transition-all duration-200 hover:bg-background lg:bg-background/80 rounded-[10px] size-9 right-2 top-2">
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
                <div className="absolute left-0 z-20 rounded-r-[4px] bg-primary px-2 py-1 text-black shadow-sm bottom-8 text-base">
                  <p className="font-semibold">15% OFF</p>
                </div>
                <div
                  className="relative"
                  role="region"
                  aria-roledescription="carousel"
                >
                  <a href="/fashionhub/879">
                    <div className="overflow-hidden">
                      <div
                        className="flex -ml-4"
                        style={{ transform: "translate3d(0px, 0px, 0px)" }}
                      >
                        <div
                          role="group"
                          aria-roledescription="slide"
                          className="min-w-0 shrink-0 grow-0 basis-full pl-4"
                          style={{ transform: "translate3d(0px, 0px, 0px)" }}
                        >
                          <div className="group relative overflow-hidden bg-muted  md:h-[260px] h-[380px] rounded-[16px] w-full">
                            <Image
                              alt="Pantalon elegante verde"
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              className="object-cover"
                              height={379}
                              width={260}
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                left: "0",
                                top: "0",
                                right: "0",
                                bottom: "0",
                                color: "transparent",
                              }}
                              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                              src="/images/grid.webp"
                            />
                          </div>
                        </div>
                        <div
                          role="group"
                          aria-roledescription="slide"
                          className="min-w-0 shrink-0 grow-0 basis-full pl-4"
                        >
                          <div className="group relative overflow-hidden bg-muted  md:h-[260px] h-[380px] rounded-[16px] w-full">
                            <Image
                              alt="Pantalon elegante verde"
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              className="object-cover"
                              height={379}
                              width={260}
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                left: "0",
                                top: "0",
                                right: "0",
                                bottom: "0",
                                color: "transparent",
                              }}
                              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                              src="/images/grid.webp"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <button className="items-center justify-center whitespace-nowrap text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-primary-foreground bg-background hover:bg-accent hover:text-accent-foreground absolute h-8 w-8 rounded-full top-1/2 -translate-y-1/2 left-3 hidden border-none shadow-sm md:group-hover:flex">
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
                      className="lucide lucide-arrow-left h-4 w-4"
                    >
                      <path d="m12 19-7-7 7-7"></path>
                      <path d="M19 12H5"></path>
                    </svg>
                    <span className="sr-only">Previous slide</span>
                  </button>
                  <button className="items-center justify-center whitespace-nowrap text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-primary-foreground bg-background hover:bg-accent hover:text-accent-foreground absolute h-8 w-8 rounded-full top-1/2 -translate-y-1/2 right-3 hidden border-none shadow-sm md:group-hover:flex">
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
                      className="lucide lucide-arrow-right h-4 w-4"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                    <span className="sr-only">Next slide</span>
                  </button>
                </div>
                <div className="absolute bottom-[10px] left-1/2 z-20 flex -translate-x-1/2 gap-[4px] md:bottom-[10px]">
                  <div className="h-[6px] w-[6px] rounded-full bg-primary"></div>
                  <div className="h-[6px] w-[6px] rounded-full bg-muted-foreground"></div>
                </div>
              </div>
              <a className="hidden" href="/fashionhub/879">
                <div className="group relative h-24 w-20 shrink-0 overflow-hidden rounded-[10px] bg-muted">
                  <Image
                    alt="Pantalon elegante verde"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-cover transition-all duration-200 group-hover:scale-[103%]"
                    height={379}
                    width={260}
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      left: "0",
                      top: "0",
                      right: "0",
                      bottom: "0",
                      color: "transparent",
                    }}
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw "
                    src="/images/grid.webp"
                  />
                  <div className="absolute bottom-[14px] left-0 z-20 rounded-r-[2px] bg-primary px-1 py-[2px] text-black shadow-sm">
                    <p className="text-xs font-semibold">15% OFF</p>
                  </div>
                </div>
              </a>
              <a
                className="flex justify-between gap-1 w-full flex-col"
                href="/fashionhub/879"
              >
                <div className="flex w-full flex-col gap-1">
                  <h2 className="text-sm font-semibold">
                    Pantalon elegante verde
                  </h2>
                  <p className="line-clamp-2 text-xs font-medium leading-[18px] text-muted-foreground hidden">
                    Tela de la mejor calidad
                  </p>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex flex-row items-center gap-2">
                    <p className="font-medium text-muted-foreground/70 line-through text-sm">
                      Gs. 270.000
                    </p>
                    <p className="whitespace-nowrap font-semibold text-sm text-muted-foreground">
                      Gs. 230.000
                    </p>
                  </div>
                  <button className="whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-[#222222] z-20 size-7 w-7 items-center justify-center rounded-[8px] border border-input bg-background p-0 font-semibold shadow-sm transition-all duration-200 hover:border-muted-foreground/40 hover:bg-background lg:bg-background/80 hidden">
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
                      className="lucide lucide-plus size-4 shrink-0 text-foreground"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                  </button>
                </div>
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <div className="group relative w-full null">
                <button className="whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-[#222222] absolute z-20 flex items-center justify-center border border-input bg-background p-0 font-semibold shadow-sm transition-all duration-200 hover:bg-background lg:bg-background/80 rounded-[10px] size-9 right-2 top-2">
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
                <div className="absolute left-0 z-20 rounded-r-[4px] bg-primary px-2 py-1 text-black shadow-sm bottom-8 text-base">
                  <p className="font-semibold">27% OFF</p>
                </div>
                <div
                  className="relative"
                  role="region"
                  aria-roledescription="carousel"
                >
                  <a href="/fashionhub/4014">
                    <div className="overflow-hidden">
                      <div
                        className="flex -ml-4"
                        style={{ transform: "translate3d(0px, 0px, 0px)" }}
                      >
                        <div
                          role="group"
                          aria-roledescription="slide"
                          className="min-w-0 shrink-0 grow-0 basis-full pl-4"
                          style={{ transform: "translate3d(0px, 0px, 0px)" }}
                        >
                          <div className="group relative overflow-hidden bg-muted  md:h-[260px] h-[380px] rounded-[16px] w-full">
                            <Image
                              alt="Pantalón Cargo"
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              className="object-cover"
                              height={379}
                              width={260}
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                left: "0",
                                top: "0",
                                right: "0",
                                bottom: "0",
                                color: "transparent",
                              }}
                              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                              src="/images/grid.webp"
                            />
                          </div>
                        </div>
                        <div
                          role="group"
                          aria-roledescription="slide"
                          className="min-w-0 shrink-0 grow-0 basis-full pl-4"
                        >
                          <div className="group relative overflow-hidden bg-muted  md:h-[260px] h-[380px] rounded-[16px] w-full">
                            <Image
                              alt="Pantalón Cargo"
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              className="object-cover"
                              height={379}
                              width={260}
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                left: "0",
                                top: "0",
                                right: "0",
                                bottom: "0",
                                color: "transparent",
                              }}
                              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                              src="/images/grid.webp"
                            />
                          </div>
                        </div>
                        <div
                          role="group"
                          aria-roledescription="slide"
                          className="min-w-0 shrink-0 grow-0 basis-full pl-4"
                        >
                          <div className="group relative overflow-hidden bg-muted  md:h-[260px] h-[380px] rounded-[16px] w-full">
                            <Image
                              alt="Pantalón Cargo"
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              className="object-cover"
                              height={379}
                              width={260}
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                left: "0",
                                top: "0",
                                right: "0",
                                bottom: "0",
                                color: "transparent",
                              }}
                              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                              src="/images/grid.webp"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <button className="items-center justify-center whitespace-nowrap text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-primary-foreground bg-background hover:bg-accent hover:text-accent-foreground absolute h-8 w-8 rounded-full top-1/2 -translate-y-1/2 left-3 hidden border-none shadow-sm md:group-hover:flex">
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
                      className="lucide lucide-arrow-left h-4 w-4"
                    >
                      <path d="m12 19-7-7 7-7"></path>
                      <path d="M19 12H5"></path>
                    </svg>
                    <span className="sr-only">Previous slide</span>
                  </button>
                  <button className="items-center justify-center whitespace-nowrap text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-primary-foreground bg-background hover:bg-accent hover:text-accent-foreground absolute h-8 w-8 rounded-full top-1/2 -translate-y-1/2 right-3 hidden border-none shadow-sm md:group-hover:flex">
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
                      className="lucide lucide-arrow-right h-4 w-4"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                    <span className="sr-only">Next slide</span>
                  </button>
                </div>
                <div className="absolute bottom-[10px] left-1/2 z-20 flex -translate-x-1/2 gap-[4px] md:bottom-[10px]">
                  <div className="h-[6px] w-[6px] rounded-full bg-primary"></div>
                  <div className="h-[6px] w-[6px] rounded-full bg-muted-foreground"></div>
                  <div className="h-[6px] w-[6px] rounded-full bg-muted-foreground"></div>
                </div>
              </div>
              <a className="hidden" href="/fashionhub/4014">
                <div className="group relative h-24 w-20 shrink-0 overflow-hidden rounded-[10px] bg-muted">
                  <Image
                    alt="Pantalón Cargo"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-cover transition-all duration-200 group-hover:scale-[103%]"
                    height={379}
                    width={260}
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      left: "0",
                      top: "0",
                      right: "0",
                      bottom: "0",
                      color: "transparent",
                    }}
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw "
                    src="/images/grid.webp"
                  />
                  <div className="absolute bottom-[14px] left-0 z-20 rounded-r-[2px] bg-primary px-1 py-[2px] text-black shadow-sm">
                    <p className="text-xs font-semibold">27% OFF</p>
                  </div>
                </div>
              </a>
              <a
                className="flex justify-between gap-1 w-full flex-col"
                href="/fashionhub/4014"
              >
                <div className="flex w-full flex-col gap-1">
                  <h2 className="text-sm font-semibold">Pantalón Cargo</h2>
                  <p className="line-clamp-2 text-xs font-medium leading-[18px] text-muted-foreground hidden">
                    El pantalón cargo es la combinación perfecta de comodidad y
                    estilo. Confeccionado en lino ligero y fresco, presenta un
                    diseño de pierna ancha y talle alto que favorece todo tipo
                    de cuerpos. Sus bolsillos laterales profundos y la cintura
                    ajustable con cordón hacen que sea una prenda práctica sin
                    perder el toque chic. Ideal para looks casuales en días de
                    verano o combinados con una blusa elegante para ocasiones
                    más formales. Disponible en tonos neutros y terrosos.
                  </p>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex flex-row items-center gap-2">
                    <p className="font-medium text-muted-foreground/70 line-through text-sm">
                      Gs. 260.000
                    </p>
                    <p className="whitespace-nowrap font-semibold text-sm text-muted-foreground">
                      Gs. 190.000
                    </p>
                  </div>
                  <button className="whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-[#222222] z-20 size-7 w-7 items-center justify-center rounded-[8px] border border-input bg-background p-0 font-semibold shadow-sm transition-all duration-200 hover:border-muted-foreground/40 hover:bg-background lg:bg-background/80 hidden">
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
                      className="lucide lucide-plus size-4 shrink-0 text-foreground"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                  </button>
                </div>
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <div className="group relative w-full null">
                <button className="whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-[#222222] absolute z-20 flex items-center justify-center border border-input bg-background p-0 font-semibold shadow-sm transition-all duration-200 hover:bg-background lg:bg-background/80 rounded-[10px] size-9 right-2 top-2">
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
                <div
                  className="relative"
                  role="region"
                  aria-roledescription="carousel"
                >
                  <a href="/fashionhub/883">
                    <div className="overflow-hidden">
                      <div
                        className="flex -ml-4"
                        style={{ transform: "translate3d(0px, 0px, 0px)" }}
                      >
                        <div
                          role="group"
                          aria-roledescription="slide"
                          className="min-w-0 shrink-0 grow-0 basis-full pl-4"
                        >
                          <div className="group relative overflow-hidden bg-muted  md:h-[260px] h-[380px] rounded-[16px] w-full">
                            <Image
                              alt="Vestido Casual Azul"
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              className="object-cover"
                              height={379}
                              width={260}
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                left: "0",
                                top: "0",
                                right: "0",
                                bottom: "0",
                                color: "transparent",
                              }}
                              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                              src="/images/grid.webp"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <button
                    className="items-center justify-center whitespace-nowrap text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-primary-foreground bg-background hover:bg-accent hover:text-accent-foreground absolute h-8 w-8 rounded-full top-1/2 -translate-y-1/2 left-3 hidden border-none shadow-sm"
                    disabled
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
                      className="lucide lucide-arrow-left h-4 w-4"
                    >
                      <path d="m12 19-7-7 7-7"></path>
                      <path d="M19 12H5"></path>
                    </svg>
                    <span className="sr-only">Previous slide</span>
                  </button>
                  <button
                    className="items-center justify-center whitespace-nowrap text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-primary-foreground bg-background hover:bg-accent hover:text-accent-foreground absolute h-8 w-8 rounded-full top-1/2 -translate-y-1/2 right-3 hidden border-none shadow-sm"
                    disabled
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
                      className="lucide lucide-arrow-right h-4 w-4"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                    <span className="sr-only">Next slide</span>
                  </button>
                </div>
                <div className="absolute bottom-[10px] left-1/2 z-20 flex -translate-x-1/2 gap-[4px] md:bottom-[10px]"></div>
              </div>
              <a className="hidden" href="/fashionhub/883">
                <div className="group relative h-24 w-20 shrink-0 overflow-hidden rounded-[10px] bg-muted">
                  <Image
                    alt="Vestido Casual Azul"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-cover transition-all duration-200 group-hover:scale-[103%]"
                    height={379}
                    width={260}
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      left: "0",
                      top: "0",
                      right: "0",
                      bottom: "0",
                      color: "transparent",
                    }}
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw "
                    src="/images/grid.webp"
                  />
                </div>
              </a>
              <a
                className="flex justify-between gap-1 w-full flex-col"
                href="/fashionhub/883"
              >
                <div className="flex w-full flex-col gap-1">
                  <h2 className="text-sm font-semibold">Vestido Casual Azul</h2>
                  <p className="line-clamp-2 text-xs font-medium leading-[18px] text-muted-foreground hidden"></p>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex flex-row items-center gap-2">
                    <p className="whitespace-nowrap font-semibold text-sm text-muted-foreground">
                      Gs. 290.000
                    </p>
                  </div>
                  <button className="whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-[#222222] z-20 size-7 w-7 items-center justify-center rounded-[8px] border border-input bg-background p-0 font-semibold shadow-sm transition-all duration-200 hover:border-muted-foreground/40 hover:bg-background lg:bg-background/80 hidden">
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
                      className="lucide lucide-plus size-4 shrink-0 text-foreground"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                  </button>
                </div>
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <div className="group relative w-full null">
                <div className="absolute left-0 z-20 rounded-r-[4px] bg-input px-2 py-1 text-foreground/60 shadow-sm bottom-8 text-base">
                  <p className="font-semibold">AGOTADO</p>
                </div>
                <div
                  className="relative"
                  role="region"
                  aria-roledescription="carousel"
                >
                  <a href="/fashionhub/893">
                    <div className="overflow-hidden">
                      <div
                        className="flex -ml-4"
                        style={{ transform: "translate3d(0px, 0px, 0px)" }}
                      >
                        <div
                          role="group"
                          aria-roledescription="slide"
                          className="min-w-0 shrink-0 grow-0 basis-full pl-4"
                          style={{ transform: "translate3d(0px, 0px, 0px)" }}
                        >
                          <div className="group relative overflow-hidden bg-muted  md:h-[260px] h-[380px] rounded-[16px] w-full">
                            <Image
                              alt="Vestido Elegante Color Apricot"
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              className="object-cover"
                              height={379}
                              width={260}
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                left: "0",
                                top: "0",
                                right: "0",
                                bottom: "0",
                                color: "transparent",
                              }}
                              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                              src="/images/grid.webp"
                            />
                          </div>
                        </div>
                        <div
                          role="group"
                          aria-roledescription="slide"
                          className="min-w-0 shrink-0 grow-0 basis-full pl-4"
                        >
                          <div className="group relative overflow-hidden bg-muted  md:h-[260px] h-[380px] rounded-[16px] w-full">
                            <Image
                              alt="Vestido Elegante Color Apricot"
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              className="object-cover"
                              height={379}
                              width={260}
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                left: "0",
                                top: "0",
                                right: "0",
                                bottom: "0",
                                color: "transparent",
                              }}
                              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                              src="/images/grid.webp"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <button className="items-center justify-center whitespace-nowrap text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-primary-foreground bg-background hover:bg-accent hover:text-accent-foreground absolute h-8 w-8 rounded-full top-1/2 -translate-y-1/2 left-3 hidden border-none shadow-sm md:group-hover:flex">
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
                      className="lucide lucide-arrow-left h-4 w-4"
                    >
                      <path d="m12 19-7-7 7-7"></path>
                      <path d="M19 12H5"></path>
                    </svg>
                    <span className="sr-only">Previous slide</span>
                  </button>
                  <button className="items-center justify-center whitespace-nowrap text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-primary-foreground bg-background hover:bg-accent hover:text-accent-foreground absolute h-8 w-8 rounded-full top-1/2 -translate-y-1/2 right-3 hidden border-none shadow-sm md:group-hover:flex">
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
                      className="lucide lucide-arrow-right h-4 w-4"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                    <span className="sr-only">Next slide</span>
                  </button>
                </div>
                <div className="absolute bottom-[10px] left-1/2 z-20 flex -translate-x-1/2 gap-[4px] md:bottom-[10px]">
                  <div className="h-[6px] w-[6px] rounded-full bg-primary"></div>
                  <div className="h-[6px] w-[6px] rounded-full bg-muted-foreground"></div>
                </div>
              </div>
              <a className="hidden" href="/fashionhub/893">
                <div className="group relative h-24 w-20 shrink-0 overflow-hidden rounded-[10px] bg-muted">
                  <Image
                    alt="Vestido Elegante Color Apricot"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-cover transition-all duration-200 group-hover:scale-[103%]"
                    height={379}
                    width={260}
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      left: "0",
                      top: "0",
                      right: "0",
                      bottom: "0",
                      color: "transparent",
                    }}
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw "
                    src="/images/grid.webp"
                  />
                  <div className="absolute bottom-[14px] left-0 z-20 rounded-r-[2px] bg-input px-1 py-[2px] text-foreground/60 shadow-sm">
                    <p className="text-xs font-semibold">AGOTADO</p>
                  </div>
                </div>
              </a>
              <a
                className="flex justify-between gap-1 w-full flex-col"
                href="/fashionhub/893"
              >
                <div className="flex w-full flex-col gap-1">
                  <h2 className="text-sm font-semibold">
                    Vestido Elegante Color Apricot
                  </h2>
                  <p className="line-clamp-2 text-xs font-medium leading-[18px] text-muted-foreground hidden">
                    Elegante y de la mejor calidad. Color: Apricot
                  </p>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex flex-row items-center gap-2">
                    <p className="whitespace-nowrap font-semibold text-sm text-muted-foreground">
                      Gs. 380.000
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <div className="group relative w-full null">
                <button className="whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-[#222222] absolute z-20 flex items-center justify-center border border-input bg-background p-0 font-semibold shadow-sm transition-all duration-200 hover:bg-background lg:bg-background/80 rounded-[10px] size-9 right-2 top-2">
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
                <div className="absolute left-0 z-20 rounded-r-[4px] bg-primary px-2 py-1 text-black shadow-sm bottom-8 text-base">
                  <p className="font-semibold">12% OFF</p>
                </div>
                <div
                  className="relative"
                  role="region"
                  aria-roledescription="carousel"
                >
                  <a href="/fashionhub/894">
                    <div className="overflow-hidden">
                      <div
                        className="flex -ml-4"
                        style={{ transform: "translate3d(0px, 0px, 0px)" }}
                      >
                        <div
                          role="group"
                          aria-roledescription="slide"
                          className="min-w-0 shrink-0 grow-0 basis-full pl-4"
                        >
                          <div className="group relative overflow-hidden bg-muted  md:h-[260px] h-[380px] rounded-[16px] w-full">
                            <Image
                              alt="Vestido con escote"
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              className="object-cover"
                              height={379}
                              width={260}
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                left: "0",
                                top: "0",
                                right: "0",
                                bottom: "0",
                                color: "transparent",
                              }}
                              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                              src="/images/grid.webp"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <button
                    className="items-center justify-center whitespace-nowrap text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-primary-foreground bg-background hover:bg-accent hover:text-accent-foreground absolute h-8 w-8 rounded-full top-1/2 -translate-y-1/2 left-3 hidden border-none shadow-sm"
                    disabled
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
                      className="lucide lucide-arrow-left h-4 w-4"
                    >
                      <path d="m12 19-7-7 7-7"></path>
                      <path d="M19 12H5"></path>
                    </svg>
                    <span className="sr-only">Previous slide</span>
                  </button>
                  <button
                    className="items-center justify-center whitespace-nowrap text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-primary-foreground bg-background hover:bg-accent hover:text-accent-foreground absolute h-8 w-8 rounded-full top-1/2 -translate-y-1/2 right-3 hidden border-none shadow-sm"
                    disabled
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
                      className="lucide lucide-arrow-right h-4 w-4"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                    <span className="sr-only">Next slide</span>
                  </button>
                </div>
                <div className="absolute bottom-[10px] left-1/2 z-20 flex -translate-x-1/2 gap-[4px] md:bottom-[10px]"></div>
              </div>
              <a className="hidden" href="/fashionhub/894">
                <div className="group relative h-24 w-20 shrink-0 overflow-hidden rounded-[10px] bg-muted">
                  <Image
                    alt="Vestido con escote"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-cover transition-all duration-200 group-hover:scale-[103%]"
                    height={379}
                    width={260}
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      left: "0",
                      top: "0",
                      right: "0",
                      bottom: "0",
                      color: "transparent",
                    }}
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw "
                    src="/images/grid.webp"
                  />
                  <div className="absolute bottom-[14px] left-0 z-20 rounded-r-[2px] bg-primary px-1 py-[2px] text-black shadow-sm">
                    <p className="text-xs font-semibold">12% OFF</p>
                  </div>
                </div>
              </a>
              <a
                className="flex justify-between gap-1 w-full flex-col"
                href="/fashionhub/894"
              >
                <div className="flex w-full flex-col gap-1">
                  <h2 className="text-sm font-semibold">Vestido con escote</h2>
                  <p className="line-clamp-2 text-xs font-medium leading-[18px] text-muted-foreground hidden">
                    Vestido ideal para verano.Escote plisado super fresco.Tela
                    de la mejor calidad
                  </p>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex flex-row items-center gap-2">
                    <p className="font-medium text-muted-foreground/70 line-through text-sm">
                      Gs. 285.000
                    </p>
                    <p className="whitespace-nowrap font-semibold text-sm text-muted-foreground">
                      Gs. 250.000
                    </p>
                  </div>
                  <button className="whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-[#222222] z-20 size-7 w-7 items-center justify-center rounded-[8px] border border-input bg-background p-0 font-semibold shadow-sm transition-all duration-200 hover:border-muted-foreground/40 hover:bg-background lg:bg-background/80 hidden">
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
                      className="lucide lucide-plus size-4 shrink-0 text-foreground"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                  </button>
                </div>
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <div className="group relative w-full null">
                <button className="whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-[#222222] absolute z-20 flex items-center justify-center border border-input bg-background p-0 font-semibold shadow-sm transition-all duration-200 hover:bg-background lg:bg-background/80 rounded-[10px] size-9 right-2 top-2">
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
                <div className="absolute left-0 z-20 rounded-r-[4px] bg-primary px-2 py-1 text-black shadow-sm bottom-8 text-base">
                  <p className="font-semibold">10% OFF</p>
                </div>
                <div
                  className="relative"
                  role="region"
                  aria-roledescription="carousel"
                >
                  <a href="/fashionhub/4010">
                    <div className="overflow-hidden">
                      <div
                        className="flex -ml-4"
                        style={{ transform: "translate3d(0px, 0px, 0px)" }}
                      >
                        <div
                          role="group"
                          aria-roledescription="slide"
                          className="min-w-0 shrink-0 grow-0 basis-full pl-4"
                        >
                          <div className="group relative overflow-hidden bg-muted  md:h-[260px] h-[380px] rounded-[16px] w-full">
                            <Image
                              alt="Vestido “Esencia Floral”"
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              className="object-cover"
                              height={379}
                              width={260}
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                left: "0",
                                top: "0",
                                right: "0",
                                bottom: "0",
                                color: "transparent",
                              }}
                              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                              src="/images/grid.webp"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <button
                    className="items-center justify-center whitespace-nowrap text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-primary-foreground bg-background hover:bg-accent hover:text-accent-foreground absolute h-8 w-8 rounded-full top-1/2 -translate-y-1/2 left-3 hidden border-none shadow-sm"
                    disabled
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
                      className="lucide lucide-arrow-left h-4 w-4"
                    >
                      <path d="m12 19-7-7 7-7"></path>
                      <path d="M19 12H5"></path>
                    </svg>
                    <span className="sr-only">Previous slide</span>
                  </button>
                  <button
                    className="items-center justify-center whitespace-nowrap text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-primary-foreground bg-background hover:bg-accent hover:text-accent-foreground absolute h-8 w-8 rounded-full top-1/2 -translate-y-1/2 right-3 hidden border-none shadow-sm"
                    disabled
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
                      className="lucide lucide-arrow-right h-4 w-4"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                    <span className="sr-only">Next slide</span>
                  </button>
                </div>
                <div className="absolute bottom-[10px] left-1/2 z-20 flex -translate-x-1/2 gap-[4px] md:bottom-[10px]"></div>
              </div>
              <a className="hidden" href="/fashionhub/4010">
                <div className="group relative h-24 w-20 shrink-0 overflow-hidden rounded-[10px] bg-muted">
                  <Image
                    alt="Vestido “Esencia Floral”"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    height={379}
                    width={260}
                    className="object-cover transition-all duration-200 group-hover:scale-[103%]"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      left: "0",
                      top: "0",
                      right: "0",
                      bottom: "0",
                      color: "transparent",
                    }}
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw "
                    src="/images/grid.webp"
                  />
                  <div className="absolute bottom-[14px] left-0 z-20 rounded-r-[2px] bg-primary px-1 py-[2px] text-black shadow-sm">
                    <p className="text-xs font-semibold">10% OFF</p>
                  </div>
                </div>
              </a>
              <a
                className="flex justify-between gap-1 w-full flex-col"
                href="/fashionhub/4010"
              >
                <div className="flex w-full flex-col gap-1">
                  <h2 className="text-sm font-semibold">
                    Vestido “Esencia Floral”
                  </h2>
                  <p className="line-clamp-2 text-xs font-medium leading-[18px] text-muted-foreground hidden">
                    El vestido “Esencia Floral” es un maxi vestido fluido y
                    femenino con estampado floral. Hecho de gasa ligera y
                    vaporosa, cuenta con tirantes ajustables y un corte en la
                    cintura que estiliza la figura. Su caída suave crea
                    movimiento con cada paso, ideal para eventos al aire libre o
                    citas especiales. Su diseño envolvente asegura comodidad,
                    mientras que los tonos vibrantes dan un toque fresco y
                    primaveral a cualquier guardarropa.
                  </p>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex flex-row items-center gap-2">
                    <p className="font-medium text-muted-foreground/70 line-through text-sm">
                      Gs. 320.000
                    </p>
                    <p className="whitespace-nowrap font-semibold text-sm text-muted-foreground">
                      Gs. 288.000
                    </p>
                  </div>
                  <button className="whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-[#222222] z-20 size-7 w-7 items-center justify-center rounded-[8px] border border-input bg-background p-0 font-semibold shadow-sm transition-all duration-200 hover:border-muted-foreground/40 hover:bg-background lg:bg-background/80 hidden">
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
                      className="lucide lucide-plus size-4 shrink-0 text-foreground"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                  </button>
                </div>
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <div className="group relative w-full null">
                <button className="whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-[#222222] absolute z-20 flex items-center justify-center border border-input bg-background p-0 font-semibold shadow-sm transition-all duration-200 hover:bg-background lg:bg-background/80 rounded-[10px] size-9 right-2 top-2">
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
                <div
                  className="relative"
                  role="region"
                  aria-roledescription="carousel"
                >
                  <a href="/fashionhub/919">
                    <div className="overflow-hidden">
                      <div
                        className="flex -ml-4"
                        style={{ transform: "translate3d(0px, 0px, 0px)" }}
                      >
                        <div
                          role="group"
                          aria-roledescription="slide"
                          className="min-w-0 shrink-0 grow-0 basis-full pl-4"
                          style={{ transform: "translate3d(0px, 0px, 0px)" }}
                        >
                          <div className="group relative overflow-hidden bg-muted  md:h-[260px] h-[380px] rounded-[16px] w-full">
                            <Image
                              alt="Bufanda Multicolor"
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              className="object-cover"
                              height={379}
                              width={260}
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                left: "0",
                                top: "0",
                                right: "0",
                                bottom: "0",
                                color: "transparent",
                              }}
                              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                              src="/images/grid.webp"
                            />
                          </div>
                        </div>
                        <div
                          role="group"
                          aria-roledescription="slide"
                          className="min-w-0 shrink-0 grow-0 basis-full pl-4"
                        >
                          <div className="group relative overflow-hidden bg-muted  md:h-[260px] h-[380px] rounded-[16px] w-full">
                            <Image
                              alt="Bufanda Multicolor"
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              className="object-cover"
                              height={379}
                              width={260}
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                left: "0",
                                top: "0",
                                right: "0",
                                bottom: "0",
                                color: "transparent",
                              }}
                              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                              src="/images/grid.webp"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <button className="items-center justify-center whitespace-nowrap text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-primary-foreground bg-background hover:bg-accent hover:text-accent-foreground absolute h-8 w-8 rounded-full top-1/2 -translate-y-1/2 left-3 hidden border-none shadow-sm md:group-hover:flex">
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
                      className="lucide lucide-arrow-left h-4 w-4"
                    >
                      <path d="m12 19-7-7 7-7"></path>
                      <path d="M19 12H5"></path>
                    </svg>
                    <span className="sr-only">Previous slide</span>
                  </button>
                  <button className="items-center justify-center whitespace-nowrap text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-primary-foreground bg-background hover:bg-accent hover:text-accent-foreground absolute h-8 w-8 rounded-full top-1/2 -translate-y-1/2 right-3 hidden border-none shadow-sm md:group-hover:flex">
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
                      className="lucide lucide-arrow-right h-4 w-4"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                    <span className="sr-only">Next slide</span>
                  </button>
                </div>
                <div className="absolute bottom-[10px] left-1/2 z-20 flex -translate-x-1/2 gap-[4px] md:bottom-[10px]">
                  <div className="h-[6px] w-[6px] rounded-full bg-primary"></div>
                  <div className="h-[6px] w-[6px] rounded-full bg-muted-foreground"></div>
                </div>
              </div>
              <a className="hidden" href="/fashionhub/919">
                <div className="group relative h-24 w-20 shrink-0 overflow-hidden rounded-[10px] bg-muted">
                  <Image
                    alt="Bufanda Multicolor"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-cover transition-all duration-200 group-hover:scale-[103%]"
                    height={379}
                    width={260}
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      left: "0",
                      top: "0",
                      right: "0",
                      bottom: "0",
                      color: "transparent",
                    }}
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw "
                    src="/images/grid.webp"
                  />
                </div>
              </a>
              <a
                className="flex justify-between gap-1 w-full flex-col"
                href="/fashionhub/919"
              >
                <div className="flex w-full flex-col gap-1">
                  <h2 className="text-sm font-semibold">Bufanda Multicolor</h2>
                  <p className="line-clamp-2 text-xs font-medium leading-[18px] text-muted-foreground hidden">
                    Bufanda multicolor para otoño/invierno.Varios colores
                    disponibles:Rojo / Naranja / MarrónVerde / Amarillo /
                    GrisLila / Amarillo / RosaApto para lavarropasFácil de
                    guardar
                  </p>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex flex-row items-center gap-2">
                    <p className="whitespace-nowrap font-semibold text-sm text-muted-foreground">
                      Gs. 220.000
                    </p>
                  </div>
                  <button className="whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-[#222222] z-20 size-7 w-7 items-center justify-center rounded-[8px] border border-input bg-background p-0 font-semibold shadow-sm transition-all duration-200 hover:border-muted-foreground/40 hover:bg-background lg:bg-background/80 hidden">
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
                      className="lucide lucide-plus size-4 shrink-0 text-foreground"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                  </button>
                </div>
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <div className="group relative w-full null">
                <button className="whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-[#222222] absolute z-20 flex items-center justify-center border border-input bg-background p-0 font-semibold shadow-sm transition-all duration-200 hover:bg-background lg:bg-background/80 rounded-[10px] size-9 right-2 top-2">
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
                <div
                  className="relative"
                  role="region"
                  aria-roledescription="carousel"
                >
                  <a href="/fashionhub/882">
                    <div className="overflow-hidden">
                      <div
                        className="flex -ml-4"
                        style={{ transform: "translate3d(0px, 0px, 0px)" }}
                      >
                        <div
                          role="group"
                          aria-roledescription="slide"
                          className="min-w-0 shrink-0 grow-0 basis-full pl-4"
                        >
                          <div className="group relative overflow-hidden bg-muted  md:h-[260px] h-[380px] rounded-[16px] w-full">
                            <Image
                              alt="Sombrero Verano "
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              className="object-cover"
                              height={379}
                              width={260}
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                left: "0",
                                top: "0",
                                right: "0",
                                bottom: "0",
                                color: "transparent",
                              }}
                              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                              src="/images/grid.webp"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <button
                    className="items-center justify-center whitespace-nowrap text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-primary-foreground bg-background hover:bg-accent hover:text-accent-foreground absolute h-8 w-8 rounded-full top-1/2 -translate-y-1/2 left-3 hidden border-none shadow-sm"
                    disabled
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
                      className="lucide lucide-arrow-left h-4 w-4"
                    >
                      <path d="m12 19-7-7 7-7"></path>
                      <path d="M19 12H5"></path>
                    </svg>
                    <span className="sr-only">Previous slide</span>
                  </button>
                  <button
                    className="items-center justify-center whitespace-nowrap text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-primary-foreground bg-background hover:bg-accent hover:text-accent-foreground absolute h-8 w-8 rounded-full top-1/2 -translate-y-1/2 right-3 hidden border-none shadow-sm"
                    disabled
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
                      className="lucide lucide-arrow-right h-4 w-4"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                    <span className="sr-only">Next slide</span>
                  </button>
                </div>
                <div className="absolute bottom-[10px] left-1/2 z-20 flex -translate-x-1/2 gap-[4px] md:bottom-[10px]"></div>
              </div>
              <a className="hidden" href="/fashionhub/882">
                <div className="group relative h-24 w-20 shrink-0 overflow-hidden rounded-[10px] bg-muted">
                  <Image
                    alt="Sombrero Verano "
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-cover transition-all duration-200 group-hover:scale-[103%]"
                    height={379}
                    width={260}
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      left: "0",
                      top: "0",
                      right: "0",
                      bottom: "0",
                      color: "transparent",
                    }}
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw "
                    src="/images/grid.webp"
                  />
                </div>
              </a>
              <a
                className="flex justify-between gap-1 w-full flex-col"
                href="/fashionhub/882"
              >
                <div className="flex w-full flex-col gap-1">
                  <h2 className="text-sm font-semibold">Sombrero Verano </h2>
                  <p className="line-clamp-2 text-xs font-medium leading-[18px] text-muted-foreground hidden">
                    Sombrero para playa
                  </p>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex flex-row items-center gap-2">
                    <p className="whitespace-nowrap font-semibold text-sm text-muted-foreground">
                      Gs. 150.000
                    </p>
                  </div>
                  <button className="whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-[#222222] z-20 size-7 w-7 items-center justify-center rounded-[8px] border border-input bg-background p-0 font-semibold shadow-sm transition-all duration-200 hover:border-muted-foreground/40 hover:bg-background lg:bg-background/80 hidden">
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
                      className="lucide lucide-plus size-4 shrink-0 text-foreground"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                  </button>
                </div>
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <div className="group relative w-full null">
                <div className="absolute left-0 z-20 rounded-r-[4px] bg-input px-2 py-1 text-foreground/60 shadow-sm bottom-8 text-base">
                  <p className="font-semibold">AGOTADO</p>
                </div>
                <div
                  className="relative"
                  role="region"
                  aria-roledescription="carousel"
                >
                  <a href="/fashionhub/892">
                    <div className="overflow-hidden">
                      <div
                        className="flex -ml-4"
                        style={{ transform: "translate3d(0px, 0px, 0px)" }}
                      >
                        <div
                          role="group"
                          aria-roledescription="slide"
                          className="min-w-0 shrink-0 grow-0 basis-full pl-4"
                          style={{ transform: "translate3d(0px, 0px, 0px)" }}
                        >
                          <div className="group relative overflow-hidden bg-muted  md:h-[260px] h-[380px] rounded-[16px] w-full">
                            <Image
                              alt="Shorts de verano"
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              className="object-cover"
                              height={379}
                              width={260}
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                left: "0",
                                top: "0",
                                right: "0",
                                bottom: "0",
                                color: "transparent",
                              }}
                              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                              src="/images/grid.webp"
                            />
                          </div>
                        </div>
                        <div
                          role="group"
                          aria-roledescription="slide"
                          className="min-w-0 shrink-0 grow-0 basis-full pl-4"
                        >
                          <div className="group relative overflow-hidden bg-muted  md:h-[260px] h-[380px] rounded-[16px] w-full">
                            <Image
                              alt="Shorts de verano"
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              className="object-cover"
                              height={379}
                              width={260}
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                left: "0",
                                top: "0",
                                right: "0",
                                bottom: "0",
                                color: "transparent",
                              }}
                              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                              src="/images/grid.webp"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <button className="items-center justify-center whitespace-nowrap text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-primary-foreground bg-background hover:bg-accent hover:text-accent-foreground absolute h-8 w-8 rounded-full top-1/2 -translate-y-1/2 left-3 hidden border-none shadow-sm md:group-hover:flex">
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
                      className="lucide lucide-arrow-left h-4 w-4"
                    >
                      <path d="m12 19-7-7 7-7"></path>
                      <path d="M19 12H5"></path>
                    </svg>
                    <span className="sr-only">Previous slide</span>
                  </button>
                  <button className="items-center justify-center whitespace-nowrap text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-primary-foreground bg-background hover:bg-accent hover:text-accent-foreground absolute h-8 w-8 rounded-full top-1/2 -translate-y-1/2 right-3 hidden border-none shadow-sm md:group-hover:flex">
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
                      className="lucide lucide-arrow-right h-4 w-4"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                    <span className="sr-only">Next slide</span>
                  </button>
                </div>
                <div className="absolute bottom-[10px] left-1/2 z-20 flex -translate-x-1/2 gap-[4px] md:bottom-[10px]">
                  <div className="h-[6px] w-[6px] rounded-full bg-primary"></div>
                  <div className="h-[6px] w-[6px] rounded-full bg-muted-foreground"></div>
                </div>
              </div>
              <a className="hidden" href="/fashionhub/892">
                <div className="group relative h-24 w-20 shrink-0 overflow-hidden rounded-[10px] bg-muted">
                  <Image
                    alt="Shorts de verano"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-cover transition-all duration-200 group-hover:scale-[103%]"
                    height={379}
                    width={260}
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      left: "0",
                      top: "0",
                      right: "0",
                      bottom: "0",
                      color: "transparent",
                    }}
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw "
                    src="/images/grid.webp"
                  />
                  <div className="absolute bottom-[14px] left-0 z-20 rounded-r-[2px] bg-input px-1 py-[2px] text-foreground/60 shadow-sm">
                    <p className="text-xs font-semibold">AGOTADO</p>
                  </div>
                </div>
              </a>
              <a
                className="flex justify-between gap-1 w-full flex-col"
                href="/fashionhub/892"
              >
                <div className="flex w-full flex-col gap-1">
                  <h2 className="text-sm font-semibold">Shorts de verano</h2>
                  <p className="line-clamp-2 text-xs font-medium leading-[18px] text-muted-foreground hidden">
                    Super frescos y de la mejor calidad
                  </p>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex flex-row items-center gap-2">
                    <p className="whitespace-nowrap font-semibold text-sm text-muted-foreground">
                      Gs. 145.000
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <div className="group relative w-full null">
                <button className="whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-[#222222] absolute z-20 flex items-center justify-center border border-input bg-background p-0 font-semibold shadow-sm transition-all duration-200 hover:bg-background lg:bg-background/80 rounded-[10px] size-9 right-2 top-2">
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
                <div className="absolute left-0 z-20 rounded-r-[4px] bg-primary px-2 py-1 text-black shadow-sm bottom-8 text-base">
                  <p className="font-semibold">30% OFF</p>
                </div>
                <div
                  className="relative"
                  role="region"
                  aria-roledescription="carousel"
                >
                  <a href="/fashionhub/4011">
                    <div className="overflow-hidden">
                      <div
                        className="flex -ml-4"
                        style={{ transform: "translate3d(0px, 0px, 0px)" }}
                      >
                        <div
                          role="group"
                          aria-roledescription="slide"
                          className="min-w-0 shrink-0 grow-0 basis-full pl-4"
                        >
                          <div className="group relative overflow-hidden bg-muted  md:h-[260px] h-[380px] rounded-[16px] w-full">
                            <Image
                              alt="Falda “Olas del Mar”"
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              className="object-cover"
                              height={379}
                              width={260}
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                left: "0",
                                top: "0",
                                right: "0",
                                bottom: "0",
                                color: "transparent",
                              }}
                              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                              src="/images/grid.webp"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <button
                    className="items-center justify-center whitespace-nowrap text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-primary-foreground bg-background hover:bg-accent hover:text-accent-foreground absolute h-8 w-8 rounded-full top-1/2 -translate-y-1/2 left-3 hidden border-none shadow-sm"
                    disabled
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
                      className="lucide lucide-arrow-left h-4 w-4"
                    >
                      <path d="m12 19-7-7 7-7"></path>
                      <path d="M19 12H5"></path>
                    </svg>
                    <span className="sr-only">Previous slide</span>
                  </button>
                  <button
                    className="items-center justify-center whitespace-nowrap text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-primary-foreground bg-background hover:bg-accent hover:text-accent-foreground absolute h-8 w-8 rounded-full top-1/2 -translate-y-1/2 right-3 hidden border-none shadow-sm"
                    disabled
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
                      className="lucide lucide-arrow-right h-4 w-4"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                    <span className="sr-only">Next slide</span>
                  </button>
                </div>
                <div className="absolute bottom-[10px] left-1/2 z-20 flex -translate-x-1/2 gap-[4px] md:bottom-[10px]"></div>
              </div>
              <a className="hidden" href="/fashionhub/4011">
                <div className="group relative h-24 w-20 shrink-0 overflow-hidden rounded-[10px] bg-muted">
                  <Image
                    alt="Falda “Olas del Mar”"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-cover transition-all duration-200 group-hover:scale-[103%]"
                    height={379}
                    width={260}
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      left: "0",
                      top: "0",
                      right: "0",
                      bottom: "0",
                      color: "transparent",
                    }}
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw "
                    src="/images/grid.webp"
                  />
                  <div className="absolute bottom-[14px] left-0 z-20 rounded-r-[2px] bg-primary px-1 py-[2px] text-black shadow-sm">
                    <p className="text-xs font-semibold">30% OFF</p>
                  </div>
                </div>
              </a>
              <a
                className="flex justify-between gap-1 w-full flex-col"
                href="/fashionhub/4011"
              >
                <div className="flex w-full flex-col gap-1">
                  <h2 className="text-sm font-semibold">
                    Falda “Olas del Mar”
                  </h2>
                  <p className="line-clamp-2 text-xs font-medium leading-[18px] text-muted-foreground hidden">
                    La falda “Olas del Mar” es una pieza midi asimétrica que
                    destaca por su movimiento y fluidez. Fabricada en satén, su
                    acabado brillante capta la luz con cada paso, recordando el
                    reflejo del sol sobre el mar. Con una cintura alta elástica,
                    ofrece comodidad y estiliza la figura, mientras que su
                    diseño envolvente añade un toque sofisticado. Perfecta para
                    combinar con sandalias y un top básico, es ideal tanto para
                    el día como para la noche.
                  </p>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex flex-row items-center gap-2">
                    <p className="font-medium text-muted-foreground/70 line-through text-sm">
                      Gs. 330.000
                    </p>
                    <p className="whitespace-nowrap font-semibold text-sm text-muted-foreground">
                      Gs. 230.000
                    </p>
                  </div>
                  <button className="whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-[#222222] z-20 size-7 w-7 items-center justify-center rounded-[8px] border border-input bg-background p-0 font-semibold shadow-sm transition-all duration-200 hover:border-muted-foreground/40 hover:bg-background lg:bg-background/80 hidden">
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
                      className="lucide lucide-plus size-4 shrink-0 text-foreground"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                  </button>
                </div>
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <div className="group relative w-full null">
                <button className="whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-[#222222] absolute z-20 flex items-center justify-center border border-input bg-background p-0 font-semibold shadow-sm transition-all duration-200 hover:bg-background lg:bg-background/80 rounded-[10px] size-9 right-2 top-2">
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
                <div
                  className="relative"
                  role="region"
                  aria-roledescription="carousel"
                >
                  <a href="/fashionhub/4015">
                    <div className="overflow-hidden">
                      <div
                        className="flex -ml-4"
                        style={{ transform: "translate3d(0px, 0px, 0px)" }}
                      >
                        <div
                          role="group"
                          aria-roledescription="slide"
                          className="min-w-0 shrink-0 grow-0 basis-full pl-4"
                          style={{ transform: "translate3d(0px, 0px, 0px)" }}
                        >
                          <div className="group relative overflow-hidden bg-muted  md:h-[260px] h-[380px] rounded-[16px] w-full">
                            <Image
                              alt='Chaqueta "Urbana"'
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              className="object-cover"
                              height={379}
                              width={260}
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                left: "0",
                                top: "0",
                                right: "0",
                                bottom: "0",
                                color: "transparent",
                              }}
                              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                              src="/images/grid.webp"
                            />
                          </div>
                        </div>
                        <div
                          role="group"
                          aria-roledescription="slide"
                          className="min-w-0 shrink-0 grow-0 basis-full pl-4"
                        >
                          <div className="group relative overflow-hidden bg-muted  md:h-[260px] h-[380px] rounded-[16px] w-full">
                            <Image
                              alt='Chaqueta "Urbana"'
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              className="object-cover"
                              height={379}
                              width={260}
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                left: "0",
                                top: "0",
                                right: "0",
                                bottom: "0",
                                color: "transparent",
                              }}
                              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                              src="/images/grid.webp"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <button className="items-center justify-center whitespace-nowrap text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-primary-foreground bg-background hover:bg-accent hover:text-accent-foreground absolute h-8 w-8 rounded-full top-1/2 -translate-y-1/2 left-3 hidden border-none shadow-sm md:group-hover:flex">
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
                      className="lucide lucide-arrow-left h-4 w-4"
                    >
                      <path d="m12 19-7-7 7-7"></path>
                      <path d="M19 12H5"></path>
                    </svg>
                    <span className="sr-only">Previous slide</span>
                  </button>
                  <button className="items-center justify-center whitespace-nowrap text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-primary-foreground bg-background hover:bg-accent hover:text-accent-foreground absolute h-8 w-8 rounded-full top-1/2 -translate-y-1/2 right-3 hidden border-none shadow-sm md:group-hover:flex">
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
                      className="lucide lucide-arrow-right h-4 w-4"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                    <span className="sr-only">Next slide</span>
                  </button>
                </div>
                <div className="absolute bottom-[10px] left-1/2 z-20 flex -translate-x-1/2 gap-[4px] md:bottom-[10px]">
                  <div className="h-[6px] w-[6px] rounded-full bg-primary"></div>
                  <div className="h-[6px] w-[6px] rounded-full bg-muted-foreground"></div>
                </div>
              </div>
              <a className="hidden" href="/fashionhub/4015">
                <div className="group relative h-24 w-20 shrink-0 overflow-hidden rounded-[10px] bg-muted">
                  <Image
                    alt='Chaqueta "Urbana"'
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-cover transition-all duration-200 group-hover:scale-[103%]"
                    height={379}
                    width={260}
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      left: "0",
                      top: "0",
                      right: "0",
                      bottom: "0",
                      color: "transparent",
                    }}
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw "
                    src="/images/grid.webp"
                  />
                </div>
              </a>
              <a
                className="flex justify-between gap-1 w-full flex-col"
                href="/fashionhub/4015"
              >
                <div className="flex w-full flex-col gap-1">
                  <h2 className="text-sm font-semibold">Chaqueta Urbana</h2>
                  <p className="line-clamp-2 text-xs font-medium leading-[18px] text-muted-foreground hidden">
                    La chaqueta “Niebla Urbana” es la elección perfecta para las
                    amantes del estilo urbano. Con un corte oversize, está
                    confeccionada en mezclilla de alta calidad, lo que la hace
                    resistente pero suave al tacto. Su diseño incluye detalles
                    deshilachados y costuras visibles, dándole un aire moderno y
                    desenfadado. Los bolsillos frontales y los puños ajustables
                    la convierten en una prenda funcional y estilosa. Perfecta
                    para combinar con leggings o vestidos cortos, ideal para
                    crear capas en looks casuales de entretiempo.
                  </p>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex flex-row items-center gap-2">
                    <p className="whitespace-nowrap font-semibold text-sm text-muted-foreground">
                      Gs. 410.000
                    </p>
                  </div>
                  <button className="whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-[#222222] z-20 size-7 w-7 items-center justify-center rounded-[8px] border border-input bg-background p-0 font-semibold shadow-sm transition-all duration-200 hover:border-muted-foreground/40 hover:bg-background lg:bg-background/80 hidden">
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
                      className="lucide lucide-plus size-4 shrink-0 text-foreground"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                  </button>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className="z-50 flex w-full flex-col items-center border-t border-t-muted-foreground/20 bg-[#0c0a09]">
        <div className="flex w-full flex-col items-center justify-center gap-4 p-6 text-white shadow-sm lg:p-8">
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="group relative h-28 w-28 cursor-pointer overflow-hidden rounded-[14px] bg-muted-foreground">
              <Image
                alt="logo"
                width={112}
                height={112}
                loading="lazy"
                className="object-cover transition-transform duration-300 group-hover:scale-[103%]"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: "0",
                  top: "0",
                  right: "0",
                  bottom: "0",
                  color: "transparent",
                }}
                src="/images/logo.jpeg"
              />
            </div>
            <h2 className="text-center text-2xl font-semibold">Fashion Hub</h2>
            <p className="text-center text-sm font-medium leading-[22px] text-white/70">
              Avda. Mcal. Lopez c/ España
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/fashionhub"
              className="flex size-[50px] cursor-pointer items-center justify-center rounded-full bg-[#FD056F]/[6%] transition-all duration-200 hover:scale-105"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.75 2.5H20.25C24.25 2.5 27.5 5.75 27.5 9.75V20.25C27.5 22.1728 26.7362 24.0169 25.3765 25.3765C24.0169 26.7362 22.1728 27.5 20.25 27.5H9.75C5.75 27.5 2.5 24.25 2.5 20.25V9.75C2.5 7.82718 3.26384 5.98311 4.62348 4.62348C5.98311 3.26384 7.82718 2.5 9.75 2.5ZM9.5 5C8.30653 5 7.16193 5.47411 6.31802 6.31802C5.47411 7.16193 5 8.30653 5 9.5V20.5C5 22.9875 7.0125 25 9.5 25H20.5C21.6935 25 22.8381 24.5259 23.682 23.682C24.5259 22.8381 25 21.6935 25 20.5V9.5C25 7.0125 22.9875 5 20.5 5H9.5ZM21.5625 6.875C21.9769 6.875 22.3743 7.03962 22.6674 7.33265C22.9604 7.62567 23.125 8.0231 23.125 8.4375C23.125 8.8519 22.9604 9.24933 22.6674 9.54235C22.3743 9.83538 21.9769 10 21.5625 10C21.1481 10 20.7507 9.83538 20.4576 9.54235C20.1646 9.24933 20 8.8519 20 8.4375C20 8.0231 20.1646 7.62567 20.4576 7.33265C20.7507 7.03962 21.1481 6.875 21.5625 6.875ZM15 8.75C16.6576 8.75 18.2473 9.40848 19.4194 10.5806C20.5915 11.7527 21.25 13.3424 21.25 15C21.25 16.6576 20.5915 18.2473 19.4194 19.4194C18.2473 20.5915 16.6576 21.25 15 21.25C13.3424 21.25 11.7527 20.5915 10.5806 19.4194C9.40848 18.2473 8.75 16.6576 8.75 15C8.75 13.3424 9.40848 11.7527 10.5806 10.5806C11.7527 9.40848 13.3424 8.75 15 8.75ZM15 11.25C14.0054 11.25 13.0516 11.6451 12.3483 12.3483C11.6451 13.0516 11.25 14.0054 11.25 15C11.25 15.9946 11.6451 16.9484 12.3483 17.6517C13.0516 18.3549 14.0054 18.75 15 18.75C15.9946 18.75 16.9484 18.3549 17.6517 17.6517C18.3549 16.9484 18.75 15.9946 18.75 15C18.75 14.0054 18.3549 13.0516 17.6517 12.3483C16.9484 11.6451 15.9946 11.25 15 11.25Z"
                  fill="#FD056F"
                ></path>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/fashionhub"
              className="flex size-[50px] cursor-pointer items-center justify-center rounded-full bg-[#0865FF]/[7%] transition-all duration-200 hover:scale-105"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.5 15C27.5 8.1 21.9 2.5 15 2.5C8.1 2.5 2.5 8.1 2.5 15C2.5 21.05 6.8 26.0875 12.5 27.25V18.75H10V15H12.5V11.875C12.5 9.4625 14.4625 7.5 16.875 7.5H20V11.25H17.5C16.8125 11.25 16.25 11.8125 16.25 12.5V15H20V18.75H16.25V27.4375C22.5625 26.8125 27.5 21.4875 27.5 15Z"
                  fill="#0865FF"
                ></path>
              </svg>
            </a>
            <a
              className="flex size-[50px] cursor-pointer items-center justify-center rounded-full transition-all duration-200 hover:scale-105 bg-[#60D669]/[5%]"
              href="https://wa.me/+595992448521?text=Hola!%20Te%20escribo%20desde%20tu%20tienda%20Shoperly..."
              target="_blank"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-[#60D669]"
              >
                <path d="M23.8125 6.13745C22.6665 4.97986 21.3015 4.06204 19.797 3.43752C18.2926 2.813 16.6789 2.49428 15.05 2.49995C8.225 2.49995 2.6625 8.06245 2.6625 14.8875C2.6625 17.075 3.2375 19.2 4.3125 21.075L2.5625 27.5L9.125 25.775C10.9375 26.7625 12.975 27.2875 15.05 27.2875C21.875 27.2875 27.4375 21.725 27.4375 14.9C27.4375 11.5875 26.15 8.47495 23.8125 6.13745ZM15.05 25.1875C13.2 25.1875 11.3875 24.6875 9.8 23.75L9.425 23.525L5.525 24.55L6.5625 20.75L6.3125 20.3625C5.28468 18.7212 4.73893 16.824 4.7375 14.8875C4.7375 9.21245 9.3625 4.58745 15.0375 4.58745C17.7875 4.58745 20.375 5.66245 22.3125 7.61245C23.2719 8.56741 24.0321 9.70328 24.5492 10.9542C25.0664 12.2052 25.33 13.5463 25.325 14.9C25.35 20.575 20.725 25.1875 15.05 25.1875ZM20.7 17.4875C20.3875 17.3375 18.8625 16.5875 18.5875 16.475C18.3 16.375 18.1 16.325 17.8875 16.625C17.675 16.9375 17.0875 17.6375 16.9125 17.8375C16.7375 18.05 16.55 18.075 16.2375 17.9125C15.925 17.7625 14.925 17.425 13.75 16.375C12.825 15.55 12.2125 14.5375 12.025 14.225C11.85 13.9125 12 13.75 12.1625 13.5875C12.3 13.45 12.475 13.225 12.625 13.05C12.775 12.875 12.8375 12.7375 12.9375 12.5375C13.0375 12.325 12.9875 12.15 12.9125 12C12.8375 11.85 12.2125 10.325 11.9625 9.69995C11.7125 9.09995 11.45 9.17495 11.2625 9.16245H10.6625C10.45 9.16245 10.125 9.23745 9.8375 9.54995C9.5625 9.86245 8.7625 10.6125 8.7625 12.1375C8.7625 13.6625 9.875 15.1375 10.025 15.3375C10.175 15.55 12.2125 18.675 15.3125 20.0125C16.05 20.3375 16.625 20.525 17.075 20.6625C17.8125 20.9 18.4875 20.8625 19.025 20.7875C19.625 20.7 20.8625 20.0375 21.1125 19.3125C21.375 18.5875 21.375 17.975 21.2875 17.8375C21.2 17.7 21.0125 17.6375 20.7 17.4875Z"></path>
              </svg>
            </a>
            <a
              className="flex size-[50px] cursor-pointer items-center justify-center rounded-full transition-all duration-200 hover:scale-105 bg-white/[2%] text-white"
              href="https://www.tiktok.com/@fashionhub"
              target="_blank"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                className="size-[22px]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="flex min-w-full items-center justify-center border-t border-t-background/10 py-5 md:pb-5">
          <Link
            className="group flex gap-2 text-xs font-semibold text-white transition-all duration-200 hover:gap-3 hover:text-white/80"
            href="/"
          >
            Creado en tu cora
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
              className="lucide lucide-move-right size-4"
            >
              <path d="M18 8L22 12L18 16"></path>
              <path d="M2 12H22"></path>
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
