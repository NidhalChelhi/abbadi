import AboutSection from "@/components/AboutSection";
import BannerSection from "@/components/BannerSection";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
import Hero from "@/components/Hero";
import InscriptionSection from "@/components/InscriptionSection";
import Navbar from "@/components/Navbar";
import ProgramSection from "@/components/ProgramSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Navbar />
      <Hero />
      <AboutSection />
      <ProgramSection />
      <InscriptionSection />
      <BannerSection />
      <GallerySection />
      <Footer />
    </main>
  );
}
