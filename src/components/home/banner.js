import Image from "next/image"

const BannerGrid = () => {
    return (
        <section className="w-screen h-fit grid grid-rows-2 grid-cols-4">
            <article className="flex items-center justify-start pr-15 row-span-1 col-span-2">
                <Image src={'/assets/images/play-station.png'} alt="ps-5" width={360} height={343} />
                <div>
                    <h2 className="text-6xl mb-3">Playstation 5</h2>
                    <p className="text-md text-[#909090]">Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</p>
                </div>
            </article>
            <article className="flex items-center justify-start gap-10 bg-[#ededed]">
                <Image src={'/assets/images/airpod-max-hero.png'} alt="airpod max" width={104} height={272} />
                <div>
                    <h2 className="text-4xl pr-25 mb-2 font-light">Apple Airpods <span className="font-semibold">Max</span></h2>
                    <p className="text-[#909090] text-sm pr-25">Computational audio. Listen, it &apos;s powerful</p>
                </div>
            </article>
            <article className="flex items-center justify-start gap-10 bg-[#353535]">
                <Image src={'/assets/images/vision-pro.png'} alt="ps-5" width={136} height={190} />
                <div>
                    <h2 className="text-4xl pr-10 mb-2 font-light text-[#ffffff]">Apple Vision <span className="font-semibold">Pro</span></h2>
                    <p className="text-[#909090] text-sm pr-15">An immersive way to experience entertainment</p>
                </div>
            </article>
            <article className="pl-12 flex items-center flex-row-reverse justify-start gap-2 col-span-2 bg-[#ededed] col-start-3 row-start-1 row-span-2">
                <Image src={'/assets/images/macbook-pro.png'} className="border-2" alt="ps-5" width={400} height={400} />
                <div>
                    <h2 className="text-8xl font-thin">Macbook <span className="font-semibold">Air</span></h2>
                    <p className="text-[#909090]">The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>
                </div>
            </article>
        </section>
    )
}

export default BannerGrid