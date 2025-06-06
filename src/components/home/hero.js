import Image from "next/image"
import Button from "../utils/button"

const HeroSection =()=>{
    return(
        <section className="w-screen flex items-center text-white px-50 justify-between bg-[#211c24]">
            <article>
                <h1 className="text-2xl font-semibold opacity-[60%] text-[#ffffff]">Pro.Beyond.</h1>
                <p className="text-8xl font-thin uppercase mt-2">Iphone 14 <span className="font-extrabold">Pro</span></p>
                <p className="mt-2 text-lg opacity-[60%] mb-3">Created to change everything for the better. For everyone.</p>
                <Button variant="outline">Shop Now</Button>
            </article>
            <Image src={'/assets/images/iphone-image.png'} width={400} height={630} alt="iphone-14" />
        </section>
    )
}

export default HeroSection