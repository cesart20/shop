'use client'

import { Button } from "@/components/ui/button"


export const FiltroPrincipal = () => {
  return (
    <>
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 hidden items-center justify-center md:flex md:px-10 lg:px-24">
            <div className="flex w-full max-w-[1200px] items-center justify-between" style={{"pointerEvents":"none"}}>
                <button className="group flex h-[38px] w-[42px] shrink-0 items-center justify-center border-none bg-gradient-to-r from-background from-60% text-foreground transition-all duration-200 opacity-0" style={{"pointerEvents":"none"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left size-4 text-muted-foreground group-hover:text-foreground">
                        <path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path>
                    </svg>
                </button>
                {/* <button className="group flex h-[38px] w-[42px] shrink-0 items-center justify-center border-none bg-gradient-to-l from-background from-60% text-foreground transition-all duration-200 opacity-100" style={{"pointerEvents": "auto"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right size-4 text-muted-foreground group-hover:text-foreground">
                        <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
                    </svg>
                </button> */}
            </div>
            </div>
        <div className="scroll-container relative flex w-full max-w-[1200px] snap-x snap-mandatory scroll-pl-5 gap-3 overflow-hidden px-5 pt-[10px] md:px-0 lg:px-0">
            <div className="flex size-[38px] w-fit cursor-pointer snap-start items-center justify-center rounded-sm border border-muted px-4 transition-all duration-200 hover:bg-muted/80" typeof="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:R39cv9jtsba:" data-state="closed">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-list-filter size-5">
                    <path d="M3 6h18"></path>
                    <path d="M7 12h10"></path>
                    <path d="M10 18h4"></path>
                </svg>
            </div>
            <Button variant="outline">Todos</Button>
            <Button variant="ghost">Blusas</Button>
            <Button variant="ghost">Pantalones</Button>
            <Button variant="ghost">Vestidos</Button>
            <Button variant="ghost">Bufandas</Button>
            <Button variant="ghost">Sombreros</Button>
            <Button variant="ghost">Shorts</Button>
            <Button variant="ghost">Falda</Button>
            <Button variant="ghost">Chaqueta</Button>
        </div>
    </>
  )
}
