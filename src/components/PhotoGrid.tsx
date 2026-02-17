import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, ChevronRight, X, Search } from "lucide-react";

// Import all galerie images via glob
const webpModules = import.meta.glob("@/assets/galerie/*.webp", { eager: true, import: "default" }) as Record<string, string>;
const avifModules = import.meta.glob("@/assets/galerie/*.avif", { eager: true, import: "default" }) as Record<string, string>;
const jpgModules = import.meta.glob("@/assets/galerie/*.jpg", { eager: true, import: "default" }) as Record<string, string>;

const allModules = { ...webpModules, ...avifModules, ...jpgModules };

// Extract filename from path
const fname = (path: string) => path.split("/").pop() ?? "";

// Filename-to-tab mapping based on original HTML
const ashleyFiles = new Set([
  "WhatsApp-Image-2024-08-08-at-13.56.12_803c27b7.webp",
  "WhatsApp-Image-2024-08-08-at-13.56.13_8f7e4392.webp",
  "WhatsApp-Image-2024-07-22-at-23.29.12_dfd5ed08.webp",
  "WhatsApp-Image-2024-07-22-at-23.29.14_589e29dd.webp",
  "WhatsApp-Image-2024-07-22-at-23.29.17_8539ec27.webp",
  "WhatsApp-Image-2024-07-23-at-01.17.36_28b11f1b.webp",
  "WhatsApp-Image-2024-07-22-at-23.29.15_7b78cf1b.webp",
  "WhatsApp-Image-2024-07-22-at-23.29.17_02d2263b.webp",
]);

const amyFiles = new Set([
  "WhatsApp-Image-2024-07-22-at-18.14.36_4b4eed34.webp",
  "WhatsApp-Image-2024-07-22-at-18.14.37_b44302f9.webp",
  "WhatsApp-Image-2024-07-22-at-18.40.24_88521c42.webp",
  "WhatsApp-Image-2024-07-22-at-18.40.26_6ef81145.webp",
  "WhatsApp-Image-2024-07-22-at-18.14.36_21791eb2.webp",
  "WhatsApp-Image-2024-07-22-at-18.14.37_dfbaa228.webp",
  "WhatsApp-Image-2024-07-22-at-18.14.36_4355998c.webp",
  "WhatsApp-Image-2024-07-22-at-18.40.26_148f9940.webp",
  "WhatsApp-Image-2024-07-22-at-23.29.20_bfcbb4a9.webp",
  "WhatsApp-Image-2024-07-22-at-23.29.19_51c7d742.webp",
  "WhatsApp-Image-2024-07-22-at-18.40.26_0421bbaf.webp",
  "WhatsApp-Image-2024-07-22-at-23.29.18_4cf90d16.webp",
  "WhatsApp-Image-2024-07-22-at-18.40.25_b211779c.webp",
  "WhatsApp-Image-2024-07-22-at-18.14.35_3e842ee3.webp",
  "WhatsApp-Image-2024-07-22-at-18.40.24_25ac64b6.webp",
  "WhatsApp-Image-2024-08-23-at-01.21.31_822f16e0.webp",
  "WhatsApp-Image-2024-08-23-at-01.21.31_0d6e95f9.webp",
]);

const adaFiles = new Set([
  "WhatsApp-Image-2024-07-22-at-23.29.11_ef33465a.webp",
  "WhatsApp-Image-2024-07-11-at-15.47.40.webp",
  "WhatsApp-Image-2024-07-25-at-00.43.43_de0b685d.webp",
  "WhatsApp-Image-2024-07-11-at-17.33.04.webp",
  "WhatsApp-Image-2024-07-11-at-17.33.05.webp",
  "WhatsApp-Image-2024-07-11-at-17.49.57.webp",
]);

const andereFiles = new Set([
  "WhatsApp-Image-2024-07-22-at-18.40.30_9bcc18fd.webp",
  "WhatsApp-Image-2024-07-22-at-18.40.27_4afe9ee1.webp",
  "WhatsApp-Image-2024-07-22-at-18.40.30_501a26ba.webp",
  "WhatsApp-Image-2024-07-22-at-18.40.30_109cb800.webp",
  "WhatsApp-Image-2024-07-22-at-18.40.27_d0b2b285.webp",
  "WhatsApp-Image-2024-07-22-at-23.29.15_4354a2d7.webp",
  "WhatsApp-Image-2024-07-22-at-23.29.12_a8e7138b.webp",
  "WhatsApp-Image-2024-07-22-at-23.29.13_d5a59f0e.webp",
  "WhatsApp-Image-2024-07-22-at-23.29.16_252a3579.webp",
  "WhatsApp-Image-2024-07-22-at-23.29.19_e4fd9003.webp",
  "WhatsApp-Image-2024-07-22-at-23.29.13_5065ce78.webp",
  "WhatsApp-Image-2024-07-22-at-23.29.16_4d9a0f6c.webp",
  "WhatsApp-Image-2024-07-22-at-23.29.18_1e27eb38.webp",
  "WhatsApp-Image-2024-07-22-at-23.29.10_44bace25.webp",
  "WhatsApp-Image-2024-07-22-at-18.40.31_738b6201.webp",
  "WhatsApp-Image-2024-07-22-at-18.40.31_95f29f2a.webp",
  "WhatsApp-Image-2024-07-22-at-18.40.31_cfbb6de4.webp",
  "WhatsApp-Image-2024-07-22-at-18.41.34_aea01a61.webp",
  "WhatsApp-Image-2024-07-22-at-18.40.30_9123164b.webp",
  "WhatsApp-Image-2024-07-22-at-18.40.29_d041764a.webp",
  "WhatsApp-Image-2024-07-22-at-18.40.29_d4ad5616.webp",
  "WhatsApp-Image-2024-07-22-at-18.40.29_e11a002e.webp",
  "WhatsApp-Image-2024-07-22-at-18.40.28_6c86ba64.webp",
  "WhatsApp-Image-2024-07-22-at-18.40.28_a07fe144.webp",
  "WhatsApp-Image-2024-07-22-at-18.40.28_cd40c726.webp",
  "WhatsApp-Image-2024-07-22-at-18.40.27_3826d430.webp",
  "WhatsApp-Image-2024-07-22-at-18.40.27_3c54c52a.webp",
  "WhatsApp-Image-2024-07-22-at-18.40.27_8d5f854b.webp",
  "WhatsApp-Image-2024-07-22-at-18.40.27_9d0ebebc.webp",
  "WhatsApp-Image-2024-07-22-at-18.40.26_7227633e.webp",
  "WhatsApp-Image-2024-07-22-at-18.40.26_d86f31c2.webp",
  "WhatsApp-Image-2024-07-22-at-18.40.25_23ce2c24.webp",
  "WhatsApp-Image-2024-07-22-at-18.40.25_9b03d7bf.webp",
  "WhatsApp-Image-2024-07-22-at-18.40.25_bc2c89f0.webp",
  "WhatsApp-Image-2024-07-22-at-18.40.25_ea055576.webp",
  "WhatsApp-Image-2024-07-22-at-18.40.25_f59988bf.webp",
  "WhatsApp-Image-2024-07-22-at-18.40.24_729f9620.webp",
  "WhatsApp-Image-2024-07-22-at-18.14.35_03713602.webp",
  "WhatsApp-Image-2024-07-22-at-18.14.35_21136d81.webp",
  "WhatsApp-Image-2024-07-22-at-18.14.35_e4a8d7f8.webp",
  "WhatsApp-Image-2024-07-23-at-01.17.37_04de9b6b.webp",
  "WhatsApp-Image-2024-07-26-at-01.04.31_61adc7a8.webp",
  "WhatsApp-Image-2024-07-26-at-01.04.32_25917070.webp",
  "WhatsApp-Image-2024-07-26-at-01.10.37_8748d48a.webp",
  "WhatsApp-Image-2024-07-26-at-01.45.49_a7bdb522.webp",
  "WhatsApp-Image-2024-08-23-at-01.21.31_535f0031.webp",
  "WhatsApp-Image-2024-07-23-at-01.17.36_efc91a03.webp",
]);

// Classify each image
function classifyFile(filename: string): string {
  if (filename.startsWith("charly-")) return "charly";
  if (filename.startsWith("Anne-Katrin") && filename.includes("2025-10-24")) return "fee";
  if (filename.startsWith("Anne-Katrin") && filename.includes("2025-10-31")) return "remmy";
  if (ashleyFiles.has(filename)) return "ashley";
  if (amyFiles.has(filename)) return "amy";
  if (adaFiles.has(filename)) return "ada";
  if (andereFiles.has(filename)) return "andere";
  return "";
}

type GalleryTab = "ashley" | "amy" | "fee" | "ada" | "charly" | "remmy" | "andere";

const tabConfig: { key: GalleryTab; label: string }[] = [
  { key: "ashley", label: "Ashley" },
  { key: "amy", label: "Amy" },
  { key: "fee", label: "Fee" },
  { key: "ada", label: "Ada" },
  { key: "charly", label: "Charly" },
  { key: "remmy", label: "Remmy" },
  { key: "andere", label: "Andere" },
];

// Build per-tab image arrays
const tabImages: Record<GalleryTab, string[]> = {
  ashley: [], amy: [], fee: [], ada: [], charly: [], remmy: [], andere: [],
};

for (const [path, src] of Object.entries(allModules)) {
  const filename = fname(path);
  const tab = classifyFile(filename);
  if (tab && tab in tabImages) {
    tabImages[tab as GalleryTab].push(src);
  }
}

// Sort charly numerically
tabImages.charly.sort((a, b) => {
  const numA = parseInt(fname(a).match(/charly-(\d+)/)?.[1] ?? "0");
  const numB = parseInt(fname(b).match(/charly-(\d+)/)?.[1] ?? "0");
  return numA - numB;
});

const PhotoGrid = () => {
  const [activeTab, setActiveTab] = useState<GalleryTab>("ashley");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const currentImages = tabImages[activeTab];

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i !== null ? (i - 1 + currentImages.length) % currentImages.length : null));
  const next = () => setLightboxIndex((i) => (i !== null ? (i + 1) % currentImages.length : null));

  return (
    <>
      <section id="galerie" className="bg-primary-foreground py-16 md:py-20">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-heading text-foreground">
              <span className="text-accent">Unsere</span> Galerie
            </h1>
          </div>

          <Tabs
            value={activeTab}
            onValueChange={(v) => {
              setActiveTab(v as GalleryTab);
              setLightboxIndex(null);
            }}
          >
            <TabsList className="mb-6 flex-wrap justify-center">
              {tabConfig.map(({ key, label }) => (
                <TabsTrigger key={key} value={key} className="text-base px-6">
                  {label}
                </TabsTrigger>
              ))}
            </TabsList>

            {tabConfig.map(({ key, label }) => (
              <TabsContent key={key} value={key}>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
                  {tabImages[key].map((src, i) => (
                    <button
                      key={i}
                      onClick={() => openLightbox(i)}
                      className="group relative aspect-square overflow-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                      <img
                        src={src}
                        alt={`${label} Foto ${i + 1}`}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300 flex items-center justify-center">
                        <Search className="w-6 h-6 text-background opacity-0 group-hover:opacity-80 transition-opacity duration-300" />
                      </div>
                    </button>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

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
                src={currentImages[lightboxIndex]}
                alt={`${tabConfig.find(t => t.key === activeTab)?.label} Foto ${lightboxIndex + 1}`}
                className="max-w-full max-h-[85vh] object-contain rounded-md"
              />
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PhotoGrid;
