import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Hero - reuse trophy image
import trophy1 from "@/assets/weiterbildungen/trophy1.webp";

// Certificates
import honestdog from "@/assets/weiterbildungen/honestdog.webp";
import f01Front from "@/assets/weiterbildungen/01-front.webp";
import f01Back from "@/assets/weiterbildungen/01-back.webp";
import f02Front from "@/assets/weiterbildungen/02-front.webp";
import f02Back from "@/assets/weiterbildungen/02-back.webp";
import f03Front from "@/assets/weiterbildungen/03-front.webp";
import f03Back from "@/assets/weiterbildungen/03-back.webp";
import f04Front from "@/assets/weiterbildungen/04-front.webp";
import f04Back from "@/assets/weiterbildungen/04-back.webp";
import f05Front from "@/assets/weiterbildungen/05-front.webp";
import f06Front from "@/assets/weiterbildungen/06-front.webp";
import f07Front from "@/assets/weiterbildungen/07-front.webp";
import f07Back from "@/assets/weiterbildungen/07-back.webp";
import f09Front from "@/assets/weiterbildungen/09-front.webp";
import f09Back from "@/assets/weiterbildungen/09-back.webp";
import f10Front from "@/assets/weiterbildungen/10-front.webp";
import f10Back from "@/assets/weiterbildungen/10-back.webp";
import f11Front from "@/assets/weiterbildungen/11-front.webp";
import f12Front from "@/assets/weiterbildungen/12-front.webp";
import f12Back from "@/assets/weiterbildungen/12-back.webp";
import f13Front from "@/assets/weiterbildungen/13-front.webp";
import f13Back from "@/assets/weiterbildungen/13-back.webp";
import f012Front from "@/assets/weiterbildungen/012-front.webp";
import f012Back from "@/assets/weiterbildungen/012-back.webp";
import f013Front from "@/assets/weiterbildungen/013-front.webp";
import f013Back from "@/assets/weiterbildungen/013-back.webp";
import f14Front from "@/assets/weiterbildungen/14-front.webp";
import f15Front from "@/assets/weiterbildungen/15-front.webp";
import f15Back from "@/assets/weiterbildungen/15-back.webp";

import trophy2 from "@/assets/weiterbildungen/trophy2.webp";
import trophy3 from "@/assets/weiterbildungen/trophy3.webp";
import trophy4 from "@/assets/weiterbildungen/trophy4.webp";
import trophy5 from "@/assets/weiterbildungen/trophy5.webp";

/** Flip card component – hover to reveal back */
const FlipCard = ({ front, back, alt }: { front: string; back?: string; alt: string }) => {
  const [flipped, setFlipped] = useState(false);

  if (!back) {
    return (
      <img src={front} alt={alt} className="w-full rounded-lg shadow-md" loading="lazy" />
    );
  }

  return (
    <div
      className="relative w-full cursor-pointer"
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className="relative w-full transition-transform duration-700"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front */}
        <div style={{ backfaceVisibility: "hidden" }}>
          <img src={front} alt={alt} className="w-full rounded-lg shadow-md" loading="lazy" />
        </div>
        {/* Back */}
        <div
          className="absolute inset-0"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <img src={back} alt={`${alt} Rückseite`} className="w-full rounded-lg shadow-md" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

const UeberWeiterbildungen = () => {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative h-[350px] md:h-[550px] overflow-hidden bg-black">
        <img
          src={trophy1}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover scale-110 blur-xl opacity-50"
        />
        <img
          src={trophy1}
          alt="Trophäen und Auszeichnungen"
          className="relative w-full h-full object-contain"
        />
      </section>

      {/* Title bar */}
      <div className="bg-accent py-4 text-center">
        <h1 className="text-2xl md:text-3xl font-heading text-accent-foreground">
          <span className="line-through opacity-60 mr-2">Weiterbildungen</span>
          Auszeichnungen, Zertifikate
        </h1>
      </div>

      {/* Content */}
      <main className="bg-primary-foreground py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 font-body text-muted-foreground leading-relaxed">

          {/* Certifications list */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-heading text-foreground">
              <span className="line-through opacity-60 mr-2">Weiterbildung,</span> Auszeichnungen, Zertifikate
            </h2>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>01/2022 Registrierung von „Zwinger vom Wällerland" WRV e.V. Lindlar</li>
              <li>12/2022 WRV e.V.: Zuchtstättenabnahme im Westerwald</li>
              <li>01/2024 WRV e.V.: Zuchtstättenabnahme in Sachsen-Anhalt</li>
              <li>02/2024 Burgenlandkreis, Veterinäramt Naumburg: Abnahme der Zuchtstätte</li>
              <li>03/2024 Burgenlandkreis, Veterinäramt Naumburg: Zuchterlaubnis nach Paragraph 11 TierSchG</li>
            </ul>
          </section>

          {/* HonestDog + top certificates */}
          <section className="space-y-6">
            <p className="text-foreground font-semibold">
              2024 HonestDog – Wir sind geprüfte Züchter auf verschiedene Verkaufsplattformen, mitunter Honest Dog Prüfsiegel
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <img src={honestdog} alt="HonestDog Prüfsiegel" className="w-full rounded-lg shadow-md" loading="lazy" />
              <FlipCard front={f01Front} back={f01Back} alt="Urkunde" />
              <FlipCard front={f02Front} back={f02Back} alt="WRV Zertifikat" />
            </div>
          </section>

          {/* Urkunde Zwinger vom Wällerland */}
          <section className="space-y-6">
            <h2 className="text-xl md:text-2xl font-heading text-foreground">
              Urkunde – Zwinger vom Wällerland
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FlipCard front={f03Front} back={f03Back} alt="Zertifikat" />
              <FlipCard front={f04Front} back={f04Back} alt="Zertifikat" />
            </div>
          </section>

          {/* Urkunden und Pokale von Ausstellungserfolgen */}
          <section className="bg-secondary/30 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12 space-y-10">
            <h2 className="text-xl md:text-2xl font-heading text-foreground italic">
              Urkunden und Pokale von Ausstellungserfolgen
            </h2>

            {/* Ada von Blauen Saphir - Set 1 */}
            <div className="space-y-6">
              <h3 className="text-lg font-heading text-foreground">Urkunde – Ada von Blauen Saphir</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <FlipCard front={f05Front} alt="Urkunde Ada" />
                <FlipCard front={f06Front} alt="Urkunde Ada" />
                <FlipCard front={f07Front} back={f07Back} alt="Urkunde Ada" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <FlipCard front={f09Front} back={f09Back} alt="Urkunde Ada" />
                <FlipCard front={f10Front} back={f10Back} alt="Urkunde Ada" />
                <FlipCard front={f11Front} alt="Urkunde Ada" />
              </div>
            </div>

            {/* Ada von Blauen Saphir - Set 2 */}
            <div className="space-y-6">
              <h3 className="text-lg font-heading text-foreground">Urkunde – Ada von Blauen Saphir</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FlipCard front={f12Front} back={f12Back} alt="Urkunde Ada" />
                <FlipCard front={f13Front} back={f13Back} alt="Urkunde Ada" />
              </div>
            </div>

            {/* Ashley vom Wällerland */}
            <div className="space-y-6">
              <h3 className="text-lg font-heading text-foreground">Urkunde – Ashley vom Wällerland</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <FlipCard front={f012Front} back={f012Back} alt="Urkunde Ashley" />
                <FlipCard front={f013Front} back={f013Back} alt="Urkunde Ashley" />
                <FlipCard front={f14Front} alt="Urkunde Ashley" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <FlipCard front={f15Front} back={f15Back} alt="Urkunde Ashley" />
              </div>
            </div>
          </section>

          {/* Trophäen */}
          <section className="space-y-6">
            <h2 className="text-xl md:text-2xl font-heading text-foreground">Trophäen und Auszeichnungen</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <img src={trophy2} alt="Trophäen" className="w-full rounded-lg shadow-md" loading="lazy" />
              <img src={trophy3} alt="Trophäen" className="w-full rounded-lg shadow-md" loading="lazy" />
              <img src={trophy4} alt="Trophäen" className="w-full rounded-lg shadow-md" loading="lazy" />
            </div>
            <img src={trophy5} alt="Trophäen" className="w-full max-w-2xl mx-auto rounded-lg shadow-md" loading="lazy" />
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
};

export default UeberWeiterbildungen;
