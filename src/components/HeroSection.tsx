import heroVideo from "@/assets/home/hero.mp4";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

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
