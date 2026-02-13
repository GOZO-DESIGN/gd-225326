import img1 from "@/assets/home/WhatsApp-Image-2024-08-23-at-00.58.31_e742076e.webp";
import img2 from "@/assets/home/WhatsApp-Image-2024-08-23-at-00.58.32_6d8ead87.webp";
import img3 from "@/assets/home/WhatsApp-Image-2024-08-23-at-02.29.19_90af7699.webp";
import img4 from "@/assets/home/WhatsApp-Image-2024-08-23-at-19.22.48_ccc1001e.webp";

const images = [img1, img2, img3, img4];

const HeroSection = () => {
  return (
    <section id="home" className="bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left text */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-foreground leading-tight">
              Pomeranian Zucht
              <br />
              <span className="text-3xl md:text-4xl">mit Herz und Verstand</span>
            </h1>
            <p className="text-sm md:text-base font-body text-muted-foreground leading-relaxed max-w-lg">
              Willkommen bei Pomeranian-Zucht Anne &amp; Georg – im idyllischen
              Marienroda, mitten im Grünen. Mit Leidenschaft, Herz und Fachwissen
              widmen wir uns der Zucht gesunder, charakterstarker und langlebiger
              Zwergspitze in besonderen Farben – fernab von Qualzucht und mit Fokus
              auf artgerechte Haltung, Gesundheit und Liebe zum Detail.
            </p>
          </div>

          {/* Right image grid */}
          <div className="grid grid-cols-2 gap-3">
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Pomeranian ${i + 1}`}
                className="w-full h-40 md:h-48 object-cover rounded-lg"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
