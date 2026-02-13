import pomHero1 from "@/assets/pom-hero-1.jpg";
import pomHero2 from "@/assets/pom-hero-2.jpg";
import pomHero3 from "@/assets/pom-hero-3.jpg";
import pomHero4 from "@/assets/pom-hero-4.jpg";

const images = [pomHero1, pomHero2, pomHero3, pomHero4];

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
