import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import SEOHead from "@/components/SEOHead";

const Impressum = () => {
  return (
    <>
      <SEOHead
        title="Impressum"
        description="Impressum der Pomeranian-Zucht Anne & Georg – Kontaktdaten, Aufsichtsbehörde und rechtliche Hinweise."
        canonical="https://www.pomeranianzucht-sachsen-anhalt.de/impressum"
      />
      <Navbar />

      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll variant="fade-up">
            <h1 className="text-3xl md:text-4xl font-heading text-foreground mb-8">Impressum</h1>

            <div className="prose prose-lg max-w-none space-y-8 font-body text-foreground/90">
              <div>
                <p>Anne-Katrin Müller</p>
                <p>Pomeranian Zucht</p>
                <p>Marienroda 4</p>
                <p>06647 Finneland</p>
              </div>

              <div>
                <h2 className="text-2xl font-heading text-foreground">Kontakt</h2>
                <p>Telefon: 034465/690366</p>
                <p>
                  E-Mail:{" "}
                  <a href="mailto:annekatrinmuller@rocketmail.com" className="text-primary underline hover:opacity-80">
                    annekatrinmuller@rocketmail.com
                  </a>
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading text-foreground">Aufsichtsbehörde</h2>
                <p>Burgenlandkreis Naumburg, Veterinär- und Lebensmittelüberwachungsamt</p>
                <p>Am Stadtpark 6</p>
                <p>06667 Weißenfels</p>
                <p>
                  <a href="http://www.burgenlandkreis.de" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:opacity-80">
                    www.burgenlandkreis.de
                  </a>
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading text-foreground">EU-Streitschlichtung</h2>
                <p>
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                  <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:opacity-80">
                    https://ec.europa.eu/consumers/odr/
                  </a>
                </p>
                <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
              </div>

              <div>
                <h2 className="text-2xl font-heading text-foreground">Verbraucher­streit­beilegung / Universal­schlichtungs­stelle</h2>
                <p>
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Impressum;
