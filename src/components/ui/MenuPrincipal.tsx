'use client'

import { FiltroPrincipal } from "./FiltroPrincipal"

export const MenuPrincipal = () => {
  return (
    <div className="flex flex-1">
        <main className="flex w-full flex-1 flex-col items-center justify-center">
            <div className="w-full flex-1">
                <div className="sticky top-0 z-50 flex w-full flex-col gap-0 bg-background pb-3">
                    <nav className="flex h-fit min-h-[60px] w-full items-center justify-center overflow-hidden bg-background px-5 pt-2 md:h-[72px] md:px-10 lg:px-24">
                        <section className="flex w-full max-w-[1200px] justify-between gap-3">
                            <div className="flex items-center gap-2">
                                <a href="#" className="w-auto max-w-[160px] cursor-pointer text-2xl font-semibold sm:max-w-[300px] md:max-w-[400px]">
                                    <h2 className="leading-[36px]">Fashion Hub</h2>
                                </a>
                                {/* <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-background hover:bg-accent hover:text-accent-foreground size-[42px] shrink-0 rounded-sm border border-muted">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-info size-5"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                                </button> */}
                            </div>

                            <div className="flex items-center gap-3 md:gap-4">
                                <div className="flex w-fit cursor-pointer items-center gap-2 rounded-sm border border-muted p-[10px] text-primary-foreground transition-all duration-200 hover:bg-muted/60">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search size-5 text-foreground md:size-4"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
                                    <p className="hidden text-sm font-semibold text-primary-foreground md:block">Buscar</p>
                                </div>

                                <div className="group relative flex cursor-pointer items-center gap-2 rounded-sm border p-[10px] text-primary-foreground transition-all duration-200 md:px-5 border-muted hover:bg-muted/60">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart size-5 md:size-4"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
                                    <p className="hidden text-sm font-semibold text-primary-foreground md:block">Carrito</p>
                                </div>
                            </div>
                        </section>
                    </nav>

                    <section className="relative flex w-full justify-center bg-background md:px-10 lg:px-24">
                        <FiltroPrincipal />
                    </section>
                </div>
            </div>
        </main>
    </div>
  )
}
