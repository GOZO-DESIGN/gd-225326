import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImg from "@/assets/welpen/hero_welpen.webp";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

// Import all benji images
const benjiModules = import.meta.glob("@/assets/benji/*.webp", { eager: true, import: "default" }) as Record<string, string>;
const benjiImages = Object.values(benjiModules);

const Welpen = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i !== null ? (i - 1 + benjiImages.length) % benjiImages.length : null));
  const next = () => setLightboxIndex((i) => (i !== null ? (i + 1) % benjiImages.length : null));

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
          alt="Pomeranian Welpe – Hündin 2 Monate"
          className="relative w-full h-full object-contain"
        />
      </section>

      <main className="min-h-screen bg-primary-foreground py-16 md:py-20">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-heading text-foreground mb-6">
            Unsere <span className="text-accent">Welpen</span>
          </h1>

          {/* Benji Section */}
          <h2 className="text-2xl md:text-3xl font-heading text-foreground mb-4 mt-10">
            Benji
          </h2>

          {/* Photo Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
            {benjiImages.map((src, i) => (
              <button
                key={i}
                onClick={() => openLightbox(i)}
                className="group relative aspect-square overflow-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <img
                  src={src}
                  alt={`Benji Foto ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
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
              <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 z-50 text-foreground/70 hover:text-foreground">
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 z-50 text-foreground/70 hover:text-foreground">
                <ChevronRight className="w-8 h-8" />
              </button>
              <img
                src={benjiImages[lightboxIndex]}
                alt={`Benji Foto ${lightboxIndex + 1}`}
                className="max-w-full max-h-[85vh] object-contain rounded-md"
              />
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </>
  );
};

export default Welpen;
