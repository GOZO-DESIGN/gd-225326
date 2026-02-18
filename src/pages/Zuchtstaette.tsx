import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import SEOHead from "@/components/SEOHead";

import mainImg from "@/assets/zuchtstaette/main.webp";
import gallery01 from "@/assets/zuchtstaette/gallery-01.avif";
import gallery02 from "@/assets/zuchtstaette/gallery-02.avif";
import gallery03 from "@/assets/zuchtstaette/gallery-03.avif";
import gallery04 from "@/assets/zuchtstaette/gallery-04.avif";
import gallery05 from "@/assets/zuchtstaette/gallery-05.avif";
import gallery06 from "@/assets/zuchtstaette/gallery-06.avif";
import gallery07 from "@/assets/zuchtstaette/gallery-07.avif";
import gallery08 from "@/assets/zuchtstaette/gallery-08.avif";
import videoSrc from "@/assets/zuchtstaette/zuchststatte_00010.mp4";
import heroVideo from "@/assets/zuchtstaette/hero.mp4";

type MediaItem = { type: "image" | "video"; src: string };

const gridMedia: MediaItem[] = [
  { type: "image", src: gallery01 },
  { type: "image", src: gallery02 },
  { type: "image", src: gallery03 },
  { type: "image", src: gallery04 },
  { type: "video", src: videoSrc },
  { type: "image", src: gallery05 },
  { type: "image", src: gallery06 },
  { type: "image", src: gallery07 },
  { type: "image", src: gallery08 },
];

const Zuchtstaette = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i !== null ? (i - 1 + gridMedia.length) % gridMedia.length : null));
  const next = () => setLightboxIndex((i) => (i !== null ? (i + 1) % gridMedia.length : null));

  return (
    <>
      <SEOHead title="Unsere Zuchtstätte – Pomeranian Zucht" description="Unsere Zuchtstätte in Marienroda, Sachsen-Anhalt. Vom Veterinäramt abgenommen und nach §11 TierSchG genehmigt." canonical="https://www.pomeranianzucht-sachsen-anhalt.de/zuchtstaette" />
      <Navbar />

      {/* Hero */}
      <section className="relative h-[400px] md:h-[650px] overflow-hidden">
        <video src={heroVideo} autoPlay muted loop playsInline aria-hidden="true" className="absolute inset-0 w-full h-full object-cover scale-110 blur-xl opacity-60" />
        <video src={heroVideo} autoPlay muted loop playsInline aria-label="Unsere Zuchtstätte" className="relative w-full h-full object-contain" />
      </section>

      {/* Title bar */}
      <div className="bg-accent py-4 text-center">
        <h1 className="text-3xl md:text-4xl font-heading text-accent-foreground">
          Unser Zuhause/<span>Zuchtstätte</span>
        </h1>
      </div>

      <main className="bg-primary-foreground py-16 md:py-20">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Main section: image left, text right */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            <AnimateOnScroll variant="fade-right" className="w-full md:w-5/12">
              <img src={mainImg} alt="Unsere Zuchtstätte" className="w-full h-auto max-h-[600px] object-cover rounded-xl shadow-lg" loading="lazy" />
            </AnimateOnScroll>
            <AnimateOnScroll variant="fade-left" delay={150} className="w-full md:w-7/12 space-y-5 font-body text-muted-foreground leading-relaxed">
              <p>
                Mit Leidenschaft und Hingabe zum wunderschönen Pomeranian begannen wir mit einer kleinen
                Hobby- und Familienzucht. Eine befreundete Züchterin (Zuchtwart) stand uns von Anfang an
                beratend bei Seite, half uns auch bei den ersten Geburten.
              </p>
              <p>
                05/2023 wurde unsere kleine Hobbyzucht vom Veterinäramt Westerwald ohne Beanstandungen
                abgenommen und ich erkundigte mich über unsere zukünftig geplanten gewerbsmäßigen Zucht,
                im Zusammenhang mit unserem Umzug nach Sachsen-Anhalt.
              </p>
              <p>
                Anfang September 2023 sind wir nach Sachsen-Anhalt gezogen. Unsere Hunde leben und
                schlafen mit uns im Haus. Sie toben im Garten auf knapp 740 qm und erkunden mit uns
                angrenzende Wald- und Wiesenwege bei Spaziergängen.
              </p>
              <p>
                Unser Vorhaben einer gewerbsmäßigen Zucht mussten wir etwas zurückstellen, da noch
                einiges im Haus gemacht werden musste. Hinzu kam mein Unfall und die damit verbundene OP.
              </p>
              <p>
                Ab März 2024 konnten wir unseren Traum einer gewerbsmäßigen Zucht umsetzen. Unsere
                Zuchtstätte wurde vom zuständigen Veterinäramt des Burgenlandkreises abgenommen und
                genehmigt, meldeten unser Gewerbe an und die Website{" "}
                <a href="https://www.pomeranianzucht-sachsen-anhalt.de" className="text-accent underline hover:opacity-80" target="_blank" rel="noopener noreferrer">
                  www.pomeranianzucht-sachsen-anhalt.de
                </a>{" "}
                ging 11/25 online.
              </p>
              <p>
                Die Genetik ist einer der wichtigsten Faktoren in der Hundezucht, jeder Züchter ist
                verantwortlich gesund zu verpaaren. Da wir nicht als Züchter geboren werden, ist es
                wichtig sich zu informieren, belesen und weiterzubilden. Neben Weiterbildungen in der
                Farbgenetik z.&nbsp;B. bei Feragen gibt es hervorragende Literatur:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>„Die Genetik der Fellfarben" von Dr. Anna Laukner</li>
                <li>„Sachkunde für Hundehalter mit D.O.Q.Test 2.0"</li>
                <li>„Das andere Ende der Leine" von Patricia B. Mc Connell</li>
                <li>„Kochbuch für Hunde inkl. Hintergrundwissen" von Meike Kühn etc.</li>
              </ul>
              <p>
                Unser Ziel ist es, unser Wissen mit Weiterbildungen zu erweitern und Neues hinzu lernen,
                zu den Themen „Ernährung/Gesundheit", „Farb-Genetik und Zucht", um die wunderschöne Rasse
                in besonderen Farben/Sonderfarben und ohne Qualzuchtmerkmale zu erhalten.
              </p>
            </AnimateOnScroll>
          </div>

          {/* Media grid with lightbox */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {gridMedia.map((item, i) => (
              <button
                key={i}
                onClick={() => setLightboxIndex(i)}
                className="group relative overflow-hidden rounded-lg h-[250px] md:h-[300px] focus:outline-none focus:ring-2 focus:ring-accent"
              >
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    muted
                    loop
                    playsInline
                    autoPlay
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={`Zuchtstätte Impression ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                )}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
              </button>
            ))}
          </div>
        </div>
      </main>

      {/* Lightbox */}
      <Dialog open={lightboxIndex !== null} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 border-none bg-background/95 backdrop-blur-md flex items-center justify-center">
          {lightboxIndex !== null && (
            <>
              <button onClick={closeLightbox} className="absolute top-3 right-3 z-50 text-foreground/70 hover:text-foreground">
                <X className="w-6 h-6" />
              </button>
              <button onClick={prev} className="absolute left-3 z-50 text-foreground/70 hover:text-foreground">
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button onClick={next} className="absolute right-3 z-50 text-foreground/70 hover:text-foreground">
                <ChevronRight className="w-8 h-8" />
              </button>
              {gridMedia[lightboxIndex].type === "video" ? (
                <video
                  src={gridMedia[lightboxIndex].src}
                  controls
                  autoPlay
                  className="max-w-full max-h-[85vh] rounded-md"
                />
              ) : (
                <img
                  src={gridMedia[lightboxIndex].src}
                  alt={`Zuchtstätte Foto ${lightboxIndex + 1}`}
                  className="max-w-full max-h-[85vh] object-contain rounded-md"
                />
              )}
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </>
  );
};

export default Zuchtstaette;
