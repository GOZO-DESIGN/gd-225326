import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import SEOHead from "@/components/SEOHead";
import huendinnenHero from "@/assets/huendinnen/hero.webp";

/* ── Direct ES6 imports for Fee ── */
import fee0 from "@/assets/huendinnen/fee.avif";
import fee1 from "@/assets/huendinnen/fee_1.avif";
import fee3 from "@/assets/huendinnen/fee_3.avif";
import fee4 from "@/assets/huendinnen/fee_4.avif";
import fee5 from "@/assets/huendinnen/fee_5.avif";
import fee6 from "@/assets/huendinnen/fee_6.avif";
import fee7 from "@/assets/huendinnen/fee_7.avif";
import fee8 from "@/assets/huendinnen/fee_8.avif";
import fee9 from "@/assets/huendinnen/fee_9.avif";
import fee10 from "@/assets/huendinnen/fee_10.avif";

/* ── Direct ES6 imports for Amy ── */
import amy1 from "@/assets/huendinnen/amy_1.webp";
import amy2 from "@/assets/huendinnen/amy_2.avif";
import amy3 from "@/assets/huendinnen/amy_3.avif";

/* ── Direct ES6 imports for Ashley ── */
import ashley1 from "@/assets/huendinnen/ashley-1.webp";
import ashley2 from "@/assets/huendinnen/ashley-2.webp";
import ashley3 from "@/assets/huendinnen/ashley-3.webp";
import ashley4 from "@/assets/huendinnen/ashley-4.webp";
import ashley5 from "@/assets/huendinnen/ashley-5.webp";

/* ── Direct ES6 imports for Malinka ── */
import malinka0 from "@/assets/huendinnen/malinka.webp";
import malinka2 from "@/assets/huendinnen/malinka-2.webp";
import malinka3 from "@/assets/huendinnen/malinka-3.webp";
import malinka4 from "@/assets/huendinnen/malinka-4.webp";

/* ── Direct ES6 imports for Charly (Sharlotte) ── */
import charly1 from "@/assets/huendinnen/sharlotte-1.jpg";
import charly2 from "@/assets/huendinnen/sharlotte-2.jpg";
import charly3 from "@/assets/huendinnen/sharlotte-3.jpg";
import charly4 from "@/assets/huendinnen/sharlotte-4.jpg";
import charly5 from "@/assets/huendinnen/sharlotte-5.jpg";
import charly6 from "@/assets/huendinnen/sharlotte_1.avif";
import charly7 from "@/assets/huendinnen/sharolotte_2.avif";

/* ── image arrays ── */
const feeImages = [fee0, fee1, fee3, fee4, fee5, fee6, fee7, fee8, fee9, fee10];
const amyImages = [amy1, amy2, amy3];
const ashleyImages = [ashley1, ashley2, ashley3, ashley4, ashley5];
const charlyImages = [charly1, charly2, charly3, charly4, charly5, charly6, charly7];
const malinkaImages = [malinka0, malinka2, malinka3, malinka4];

/* ── dog data ── */
interface Dog {
  name: string;
  nickname?: string;
  retired?: boolean;
  birthday: string;
  details: { label: string; value: string }[];
  images: string[];
  linkText?: string;
  linkHref?: string;
}

const dogs: Dog[] = [
  {
    name: "Fee vom Wällerland",
    birthday: "12.10.2020",
    details: [
      { label: "Farbe", value: "weiss-lilac & tan Particolor" },
      { label: "PL", value: "frei" },
      { label: "DNA", value: "hinterlegt" },
    ],
    images: feeImages,
  },
  {
    name: "Ciara-Amy vom Wällerland",
    nickname: "Amy",
    birthday: "27.04.24",
    details: [
      { label: "Farbe", value: "Schoko Tri Merle" },
      { label: "Gewicht", value: "5,3 kg" },
      { label: "PL", value: "01/00" },
      { label: "ZTP", value: "bestanden" },
      { label: "DNA", value: "hinterlegt" },
    ],
    images: amyImages,
    linkText: "Zu Ihren Welpen",
    linkHref: "/welpen",
  },
  {
    name: "Ashley vom Wällerland",
    birthday: "25.03.2021",
    details: [
      { label: "Gewicht", value: "3.3 kg" },
      { label: "Farbe", value: "weiß-creme" },
      { label: "PL", value: "01/01" },
      { label: "ZTP", value: "bestanden" },
      { label: "DNA", value: "hinterlegt" },
    ],
    images: ashleyImages,
    linkText: "Zu Ihren Welpen",
    linkHref: "/welpen",
  },
  {
    name: "Sharlotte Import Russland",
    nickname: "Charly",
    birthday: "15.08.2024",
    details: [
      { label: "Farbe", value: "schoko & tan Merle" },
      { label: "Gewicht", value: "3.6 kg" },
      { label: "PL", value: "01/01" },
      { label: "ZTP", value: "bestanden" },
      { label: "DNA", value: "hinterlegt" },
    ],
    images: charlyImages,
  },
  {
    name: "Fantaziya Vesny S Berendeevoi Slobodi",
    nickname: "Malinka",
    retired: true,
    birthday: "01.02.2017",
    details: [
      { label: "Farbe", value: "weiss-orange Parti" },
      { label: "Gewicht", value: "4.7 kg" },
      { label: "PL", value: "frei" },
      { label: "DNA", value: "hinterlegt" },
    ],
    images: malinkaImages,
  },
];

/* ── Slider component ── */
const ImageSlider = ({ images, alt }: { images: string[]; alt: string }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [current, setCurrent] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setCurrent(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  if (!images.length) return null;

  return (
    <div className="relative rounded-xl overflow-hidden shadow-lg group">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {images.map((src, i) => (
            <div key={i} className="flex-[0_0_100%] min-w-0">
              <img
                src={src}
                alt={`${alt} – Bild ${i + 1}`}
                className="w-full h-[350px] md:h-[500px] object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={scrollPrev}
            aria-label="Vorheriges Bild"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/70 hover:bg-background/90 rounded-full p-1.5 text-foreground transition-opacity opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            aria-label="Nächstes Bild"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/70 hover:bg-background/90 rounded-full p-1.5 text-foreground transition-opacity opacity-0 group-hover:opacity-100"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <span className="absolute bottom-2 right-3 text-xs bg-background/70 text-foreground px-2 py-0.5 rounded-full">
            {current + 1} / {images.length}
          </span>
        </>
      )}
    </div>
  );
};

/* ── Page ── */
const Huendinnen = () => {
  return (
    <>
      <SEOHead title="Unsere Hündinnen – Pomeranian Zuchthündinnen" description="Lernen Sie unsere Pomeranian Zuchthündinnen kennen. Liebevoll betreut, regelmäßig untersucht und mit stabilem, freundlichem Wesen." canonical="https://www.pomeranianzucht-sachsen-anhalt.de/huendinnen" />
      <Navbar />

      {/* Hero */}
      <section className="relative h-[400px] md:h-[650px] overflow-hidden">
        <img
          src={huendinnenHero}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover scale-110 blur-xl opacity-60"
        />
        <img
          src={huendinnenHero}
          alt="Unsere Hündinnen – Pomeranian Zucht"
          className="relative w-full h-full object-contain"
        />
      </section>

      {/* Title bar */}
      <div className="bg-accent py-4 text-center">
        <h1 className="text-3xl md:text-4xl font-heading text-accent-foreground">
          Unsere <span className="font-heading">Hündinnen</span>
        </h1>
      </div>

      <main className="bg-primary-foreground py-12 md:py-16">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {dogs.map((dog, idx) => {
            const reversed = idx % 2 === 0;
            return (
              <AnimateOnScroll
                key={dog.name}
                variant={reversed ? "fade-left" : "fade-right"}
                className={`flex flex-col ${reversed ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-12 items-center`}
              >
                {/* Text */}
                <div className="w-full md:w-1/2 space-y-3">
                  <h2 className="text-2xl md:text-3xl font-heading text-accent">
                    {dog.name}
                    {dog.nickname && (
                      <span className="text-base font-body text-muted-foreground ml-2">
                        (Rufname: {dog.nickname})
                      </span>
                    )}
                  </h2>

                  {dog.retired && (
                    <span className="inline-block text-sm italic text-muted-foreground">
                      in Ruhestand
                    </span>
                  )}

                  <p className="text-muted-foreground">geb. {dog.birthday}</p>

                  {dog.details.map((d) => (
                    <p key={d.label} className="text-muted-foreground">
                      <span className="text-foreground font-medium">{d.label}:</span> {d.value}
                    </p>
                  ))}

                  {dog.linkText && (
                    <a
                      href={dog.linkHref}
                      className="inline-block mt-2 bg-accent text-accent-foreground px-5 py-2 rounded-full text-sm font-body border border-primary hover:opacity-90 transition-opacity"
                    >
                      {dog.linkText}
                    </a>
                  )}
                </div>

                {/* Slider */}
                <div className="w-full md:w-1/2">
                  <ImageSlider images={dog.images} alt={dog.name} />
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Huendinnen;
