'use client'
import Image from "next/image"


export const PortadaPrincipal = () => {
  return (
    <div className="-space-y-10 lg:-space-y-[80px]">
        <div className="relative h-[72px] w-full overflow-hidden bg-muted lg:h-[160px]">
            <Image
                src={"/images/banner.jpeg"}
                alt="banner"
                fill
                className="object-cover"
            />
        </div>
        <div className="w-full px-5 md:px-10 lg:px-24 pt-0">
            <section className="mx-auto w-full max-w-[1200px]">
                <div className="relative overflow-hidden rounded-[14px] bg-muted size-[84px] border-[3px] border-background lg:size-[148px] lg:rounded-[20px] lg:border-4">
                    <Image
                        src={"/images/logo.jpeg"}
                        alt="logo"
                        fill
                        className="object-cover"
                    />
                </div>
            </section>
        </div>
    </div>
  )
}
