import { useState, useEffect, useCallback } from "react";

import img1 from "@/assets/home/WhatsApp-Image-2024-07-11-at-17.33.05-1.webp";
import img2 from "@/assets/home/WhatsApp-Image-2024-07-26-at-04.08.51_17788466.webp";
import img3 from "@/assets/home/WhatsApp-Image-2024-07-26-at-04.54.00_c4d82cac.webp";
import img4 from "@/assets/home/WhatsApp-Image-2024-08-07-at-17.38.21_8f1f40b8.webp";
import img5 from "@/assets/home/WhatsApp-Image-2024-08-07-at-20.15.07_9f431fe2.webp";
import img6 from "@/assets/home/WhatsApp-Image-2024-08-07-at-20.15.08_e3a41125.webp";
import img7 from "@/assets/home/WhatsApp-Image-2024-08-13-at-21.23.32_6ff19255.webp";
import img8 from "@/assets/home/WhatsApp-Image-2024-08-23-at-00.58.31_e742076e.webp";
import img9 from "@/assets/home/WhatsApp-Image-2024-08-23-at-00.58.32_6d8ead87.webp";
import img10 from "@/assets/home/WhatsApp-Image-2024-08-23-at-02.29.19_90af7699.webp";
import img11 from "@/assets/home/WhatsApp-Image-2024-08-23-at-19.22.48_ccc1001e.webp";
import img12 from "@/assets/home/Anne_Katrin_Mueller_Oct_31_2025.avif";
import img13 from "@/assets/home/Anne-Katrin-Mu_CC_88ller-225326---2025-10-31-09.38.50.avif";
import img14 from "@/assets/home/Anne-Katrin-Mu_CC_88ller-225326---2025-10-24-11.27.19.avif";
import img15 from "@/assets/home/Anne-Katrin-Mu_CC_88ller-225326---2025-10-31-10.23.58.avif";
import img16 from "@/assets/home/welpen-01-09-24-51.webp";

const sliderA = [img1, img2, img3, img4, img5, img6, img7, img8];
const sliderB = [img9, img10, img11, img12, img13, img14, img15, img16];

const HeroSlider = ({ images, intervalOffset = 0 }: { images: string[]; intervalOffset?: number }) => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const interval = setInterval(next, 4000);
      return () => clearInterval(interval);
    }, intervalOffset);
    return () => clearTimeout(timeout);
  }, [next, intervalOffset]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Pomeranian ${i + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              i === current ? "bg-white scale-110" : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Bild ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Two side-by-side sliders as background */}
      <div className="absolute inset-0 flex">
        <div className="w-1/2 h-full">
          <HeroSlider images={sliderA} />
        </div>
        <div className="w-1/2 h-full">
          <HeroSlider images={sliderB} intervalOffset={2000} />
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-foreground/40" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white leading-tight">
              Pomeranian Zucht
              <br />
              <span className="text-3xl md:text-4xl text-accent">mit Herz und Verstand</span>
            </h1>
            <p className="font-body text-white/90 leading-relaxed text-lg">
              Willkommen bei Pomeranian-Zucht Anne &amp; Georg – im idyllischen
              Marienroda, mitten im Grünen. Mit Leidenschaft, Herz und Fachwissen
              widmen wir uns der Zucht gesunder, charakterstarker und langlebiger
              Zwergspitze in besonderen Farben – fernab von Qualzucht und mit Fokus
              auf artgerechte Haltung, Gesundheit und Liebe zum Detail.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
