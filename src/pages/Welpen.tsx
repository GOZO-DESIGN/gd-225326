import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImg from "@/assets/welpen/hero_welpen.webp";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

// Import all benji images
const benjiModules = import.meta.glob("@/assets/benji/*.webp", { eager: true, import: "default" }) as Record<string, string>;
const benjiImages = Object.entries(benjiModules)
  .sort(([a], [b]) => {
    const aIsBenji = a.includes("benji_");
    const bIsBenji = b.includes("benji_");
    if (aIsBenji && !bIsBenji) return -1;
    if (!aIsBenji && bIsBenji) return 1;
    return a.localeCompare(b);
  })
  .map(([, src]) => src);

// Import all enzo images
const enzoModules = import.meta.glob("@/assets/enzo/*.jpg", { eager: true, import: "default" }) as Record<string, string>;
const enzoImages = Object.entries(enzoModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src);

// Import all balu images
const baluModules = import.meta.glob("@/assets/balu/*.jpg", { eager: true, import: "default" }) as Record<string, string>;
const baluImages = Object.entries(baluModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src);

// Import all panda images
const pandaModules = import.meta.glob("@/assets/panda/*.jpg", { eager: true, import: "default" }) as Record<string, string>;
const pandaImages = Object.entries(pandaModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src);

// Import all happy hope images and videos
const happyHopeImageModules = import.meta.glob("@/assets/happy-hope/*.jpg", { eager: true, import: "default" }) as Record<string, string>;
const happyHopeVideoModules = import.meta.glob("@/assets/happy-hope/*.mp4", { eager: true, import: "default" }) as Record<string, string>;

type MediaItem = { type: "image" | "video"; src: string };

const happyHopeMedia: MediaItem[] = [
  ...Object.entries(happyHopeImageModules).map(([path, src]) => ({ type: "image" as const, src, path })),
  ...Object.entries(happyHopeVideoModules).map(([path, src]) => ({ type: "video" as const, src, path })),
]
  .sort((a, b) => a.path.localeCompare(b.path))
  .map(({ type, src }) => ({ type, src }));

const happyHopeImages = happyHopeMedia.filter((m) => m.type === "image").map((m) => m.src);

type GalleryTab = "benji" | "enzo" | "balu" | "panda" | "happy-hope";

const galleries: Record<GalleryTab, { label: string; birthday: string; images: string[]; media?: MediaItem[] }> = {
  benji: { label: "Benji", birthday: "25.10.2025", images: benjiImages },
  enzo: { label: "Enzo", birthday: "25.10.2025", images: enzoImages },
  balu: { label: "Balu", birthday: "12.10.2025", images: baluImages },
  panda: { label: "Panda", birthday: "12.10.2025", images: pandaImages },
  "happy-hope": { label: "Happy Hope", birthday: "12.10.2025", images: happyHopeImages, media: happyHopeMedia },
};

const Welpen = () => {
  const [activeTab, setActiveTab] = useState<GalleryTab>("benji");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const currentGallery = galleries[activeTab];
  const currentMedia: MediaItem[] = currentGallery.media ?? currentGallery.images.map((src) => ({ type: "image", src }));

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i !== null ? (i - 1 + currentMedia.length) % currentMedia.length : null));
  const next = () => setLightboxIndex((i) => (i !== null ? (i + 1) % currentMedia.length : null));

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
          <h1 className="text-4xl md:text-5xl font-heading text-foreground mb-8">
            Unsere <span className="text-accent">Welpen</span>
          </h1>

          <Tabs
            value={activeTab}
            onValueChange={(v) => {
              setActiveTab(v as GalleryTab);
              setLightboxIndex(null);
            }}
          >
            <TabsList className="mb-6">
              {Object.entries(galleries).map(([key, { label }]) => (
                <TabsTrigger key={key} value={key} className="text-base px-6">
                  {label}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(galleries).map(([key, { label }]) => {
              const g = galleries[key as GalleryTab];
              const media: MediaItem[] = g.media ?? g.images.map((src) => ({ type: "image", src }));
              return (
                <TabsContent key={key} value={key}>
                  <p className="text-muted-foreground mb-4">Geboren am {g.birthday}</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
                    {media.map((item, i) => (
                      <button
                        key={i}
                        onClick={() => openLightbox(i)}
                        className="group relative aspect-square overflow-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      >
                        {item.type === "video" ? (
                          <video
                            src={item.src}
                            muted
                            playsInline
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        ) : (
                          <img
                            src={item.src}
                            alt={`${label} Foto ${i + 1}`}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        )}
                        {item.type === "video" && (
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="w-12 h-12 rounded-full bg-background/70 flex items-center justify-center">
                              <svg className="w-5 h-5 text-foreground ml-0.5" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21" /></svg>
                            </div>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
                      </button>
                    ))}
                  </div>
                </TabsContent>
              );
            })}
          </Tabs>
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
              {currentMedia[lightboxIndex].type === "video" ? (
                <video
                  src={currentMedia[lightboxIndex].src}
                  controls
                  autoPlay
                  playsInline
                  className="max-w-full max-h-[85vh] rounded-md"
                />
              ) : (
                <img
                  src={currentMedia[lightboxIndex].src}
                  alt={`${galleries[activeTab].label} Foto ${lightboxIndex + 1}`}
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

export default Welpen;
