import { useEffect, useRef } from "react";
import img1 from "@/assets/home/WhatsApp-Image-2024-08-23-at-00.58.31_e742076e.webp";
import img2 from "@/assets/home/WhatsApp-Image-2024-08-23-at-00.58.32_6d8ead87.webp";
import img3 from "@/assets/home/WhatsApp-Image-2024-08-23-at-02.29.19_90af7699.webp";
import img4 from "@/assets/home/WhatsApp-Image-2024-08-23-at-19.22.48_ccc1001e.webp";
import img5 from "@/assets/home/WhatsApp-Image-2024-07-26-at-04.08.51_17788466.webp";
import img6 from "@/assets/home/WhatsApp-Image-2024-07-26-at-04.54.00_c4d82cac.webp";
import img7 from "@/assets/home/WhatsApp-Image-2024-08-07-at-17.38.21_8f1f40b8.webp";
import img8 from "@/assets/home/WhatsApp-Image-2024-08-07-at-20.15.07_9f431fe2.webp";

const topImages = [img1, img2, img3, img4];
const bottomImages = [img5, img6, img7, img8];

interface MarqueeRowProps {
  images: string[];
  speed?: number;
  reverse?: boolean;
}

const MarqueeRow = ({ images, speed = 30, reverse = false }: MarqueeRowProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationId: number;
    let pos = 0;
    const singleSetWidth = (el.scrollWidth / 3);

    const step = () => {
      pos += speed / 60;
      if (pos >= singleSetWidth) pos = 0;
      el.style.transform = reverse
        ? `translateX(${pos}px)`
        : `translateX(${-pos}px)`;
      animationId = requestAnimationFrame(step);
    };

    animationId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationId);
  }, [speed, reverse]);

  // Triple images for seamless infinite loop
  const tripled = [...images, ...images, ...images];

  return (
    <div className="relative w-full h-48 md:h-56 overflow-hidden rounded-lg">
      {/* Blurred background layer */}
      <div className="absolute inset-0 bg-secondary" />
      {/* Scrolling strip */}
      <div ref={scrollRef} className="flex gap-3 h-full w-max will-change-transform">
        {tripled.map((src, i) => (
          <div key={i} className="relative h-full w-64 md:w-72 flex-shrink-0 rounded-lg overflow-hidden">
            {/* Blur bg */}
            <img
              src={src}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover scale-110 blur-xl opacity-50"
            />
            {/* Foreground */}
            <img
              src={src}
              alt={`Pomeranian ${(i % images.length) + 1}`}
              className="relative w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section id="home" className="relative">
      <div className="grid md:grid-cols-2">
        {/* Left half - white */}
        <div className="bg-white flex items-center">
          <div className="space-y-6 px-6 sm:px-10 lg:px-16 py-12 md:py-20 max-w-xl ml-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-foreground leading-tight">
              Pomeranian Zucht
              <br />
              <span className="text-3xl md:text-4xl">mit Herz und Verstand</span>
            </h1>
            <p className="text-sm md:text-base font-body text-muted-foreground leading-relaxed">
              Willkommen bei Pomeranian-Zucht Anne &amp; Georg – im idyllischen
              Marienroda, mitten im Grünen. Mit Leidenschaft, Herz und Fachwissen
              widmen wir uns der Zucht gesunder, charakterstarker und langlebiger
              Zwergspitze in besonderen Farben – fernab von Qualzucht und mit Fokus
              auf artgerechte Haltung, Gesundheit und Liebe zum Detail.
            </p>
          </div>
        </div>

        {/* Right half - pink */}
        <div className="bg-secondary flex flex-col gap-3 justify-center py-12 md:py-20 overflow-hidden">
          <MarqueeRow images={topImages} speed={30} />
          <MarqueeRow images={bottomImages} speed={25} reverse />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
