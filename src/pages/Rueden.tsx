import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import heroImg from "@/assets/rueden/ruden_hero.webp";
import remmyImg from "@/assets/rueden/remmy.avif";

const Rueden = () => {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[650px] overflow-hidden">
        <img
          src={heroImg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover scale-110 blur-xl opacity-60"
        />
        <img
          src={heroImg}
          alt="Unsere Rüden – Pomeranian Zucht"
          className="relative w-full h-full object-contain"
        />
      </section>

      <main className="min-h-screen bg-primary-foreground py-16 md:py-20">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll variant="fade-up">
            <h1 className="text-4xl md:text-5xl font-heading text-foreground mb-12">
              Unsere <span className="text-accent">Rüden</span>
            </h1>
          </AnimateOnScroll>

          {/* Remmy */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <AnimateOnScroll variant="fade-right">
              <div className="overflow-hidden rounded-xl shadow-lg">
                <img
                  src={remmyImg}
                  alt="Remmy von Arinakrieger"
                  className="w-full h-auto object-cover"
                />
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fade-left" delay={150}>
              <div className="space-y-3">
                <h2 className="text-2xl md:text-3xl font-heading text-accent">
                  Remmy von Arinakrieger
                </h2>
                <p className="text-muted-foreground">geb. 14.11.2021</p>
                <p className="text-muted-foreground">
                  <span className="text-foreground font-medium">Farbe:</span> Creme Sable{" "}
                  <span className="text-sm italic">(Er trägt black, orange &amp; red, Sable und Tanpoints.)</span>
                </p>
                <p className="text-muted-foreground">
                  <span className="text-foreground font-medium">PL:</span> 01/01
                </p>
                <p className="text-muted-foreground">
                  <span className="text-foreground font-medium">DNA:</span> hinterlegt
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Rueden;
