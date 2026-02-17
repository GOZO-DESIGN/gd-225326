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

const rowA = [img1, img2, img3, img4, img5, img6, img7, img8];
const rowB = [img9, img10, img11, img12, img13, img14, img15, img16];

const InfiniteRow = ({
  images,
  duration = "30s",
  reverse = false,
}: {
  images: string[];
  duration?: string;
  reverse?: boolean;
}) => {
  const doubled = [...images, ...images];

  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex gap-3 w-max"
        style={{
          animation: `${reverse ? "scrollRight" : "scrollLeft"} ${duration} linear infinite`,
        }}
      >
        {doubled.map((src, i) => (
          <div
            key={i}
            className="w-[220px] h-[280px] flex-shrink-0 rounded-[10px] overflow-hidden"
          >
            <img
              src={src}
              alt={`Pomeranian ${(i % images.length) + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <>
      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      <section id="home" className="min-h-screen flex flex-col md:flex-row">
        {/* Left: White text section */}
        <div className="w-full md:w-1/2 bg-background flex items-center justify-center px-8 py-20 md:py-0">
          <div className="max-w-lg space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-foreground leading-tight">
              Pomeranian Zucht
              <br />
              <span className="text-3xl md:text-4xl text-accent">
                mit Herz und Verstand
              </span>
            </h1>
            <p className="font-body text-muted-foreground leading-relaxed text-lg">
              Willkommen bei Pomeranian-Zucht Anne &amp; Georg – im idyllischen
              Marienroda, mitten im Grünen. Mit Leidenschaft, Herz und Fachwissen
              widmen wir uns der Zucht gesunder, charakterstarker und langlebiger
              Zwergspitze in besonderen Farben – fernab von Qualzucht und mit
              Fokus auf artgerechte Haltung, Gesundheit und Liebe zum Detail.
            </p>
          </div>
        </div>

        {/* Right: Pink section with two infinite sliders */}
        <div className="w-full md:w-1/2 bg-accent/15 flex flex-col items-center justify-center gap-6 py-16 md:py-0 overflow-hidden">
          <InfiniteRow images={rowA} duration="35s" />
          <InfiniteRow images={rowB} duration="40s" reverse />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
