import Layout from "@/components/layout";
import HeroSection from "@/components/home/hero";
import { Inter } from "next/font/google"
import BannerGrid from "@/components/home/banner";
import BrowseCategories from "@/components/home/categories";
import ProductSection from "@/components/home/products";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
  display: "swap",
})

export default function Home() {
  return (
    <div className={`${inter.className} min-w-screen min-h-screen gap-16 font-[var(--font-inter-sans)] overflow-hidden`}>
      <Layout>
        <HeroSection />
        <BannerGrid />
        <BrowseCategories />
        <ProductSection />
      </Layout>
    </div>
  );
}
