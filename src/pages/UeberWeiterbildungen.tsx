import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Hero
import heroImg from "@/assets/weiterbildungen/weiterbildungen-hero.webp";

// Zertifikate section
import honestdog from "@/assets/weiterbildungen/honestdog.webp";
import urkundeZwinger from "@/assets/weiterbildungen/urkunde-zwinger.webp";
import cert01Front from "@/assets/weiterbildungen/01-front.webp";
import cert01Back from "@/assets/weiterbildungen/01-back.webp";
import cert02Front from "@/assets/weiterbildungen/02-front.webp";
import cert02Back from "@/assets/weiterbildungen/02-back.webp";

// Urkunden Ada von Blauen Saphir
import ada01Front from "@/assets/weiterbildungen/ada-01-front.webp";
import ada01Back from "@/assets/weiterbildungen/ada-01-back.webp";
import ada02Front from "@/assets/weiterbildungen/ada-02-front.webp";
import ada02Back from "@/assets/weiterbildungen/ada-02-back.webp";
import ada03Front from "@/assets/weiterbildungen/ada-03-front.webp";
import ada04Front from "@/assets/weiterbildungen/ada-04-front.webp";
import ada05Front from "@/assets/weiterbildungen/ada-05-front.webp";
import ada05Back from "@/assets/weiterbildungen/ada-05-back.webp";
import ada06Front from "@/assets/weiterbildungen/ada-06-front.webp";
import ada06Back from "@/assets/weiterbildungen/ada-06-back.webp";
import ada07Front from "@/assets/weiterbildungen/ada-07-front.webp";
import ada07Back from "@/assets/weiterbildungen/ada-07-back.webp";
import ada08Front from "@/assets/weiterbildungen/ada-08-front.webp";
import ada09Front from "@/assets/weiterbildungen/ada-09-front.webp";
import ada09Back from "@/assets/weiterbildungen/ada-09-back.webp";
import ada10Front from "@/assets/weiterbildungen/ada-10-front.webp";
import ada10Back from "@/assets/weiterbildungen/ada-10-back.webp";

// Urkunden Ashley vom Wällerland
import ashley01Front from "@/assets/weiterbildungen/ashley-01-front.webp";
import ashley02Front from "@/assets/weiterbildungen/ashley-02-front.webp";
import ashley02Back from "@/assets/weiterbildungen/ashley-02-back.webp";
import ashley03Front from "@/assets/weiterbildungen/ashley-03-front.webp";
import ashley03Back from "@/assets/weiterbildungen/ashley-03-back.webp";
import ashley04Front from "@/assets/weiterbildungen/ashley-04-front.webp";
import ashley04Back from "@/assets/weiterbildungen/ashley-04-back.webp";

// Trophäen
import trophy1 from "@/assets/weiterbildungen/trophy1.webp";
import trophy2 from "@/assets/weiterbildungen/trophy2.webp";
import trophy3 from "@/assets/weiterbildungen/trophy3.webp";
import trophy4 from "@/assets/weiterbildungen/trophy4.webp";

/** Flip card component – hover/click to reveal back */
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
          src={heroImg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover scale-110 blur-xl opacity-50"
        />
        <img
          src={heroImg}
          alt="Trophäen und Auszeichnungen"
          className="relative w-full h-full object-contain"
        />
      </section>

      {/* Title bar */}
      <div className="bg-accent py-4 text-center">
        <h1 className="text-2xl md:text-3xl font-heading text-accent-foreground">
          Weiterbildungen, Auszeichnungen, Zertifikate
        </h1>
      </div>

      {/* Content */}
      <main className="bg-primary-foreground py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 font-body text-muted-foreground leading-relaxed">

          {/* Certifications list */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-heading text-foreground">
              Weiterbildungen, Auszeichnungen, Zertifikate
            </h2>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>01/2022 Registrierung von „Zwinger vom Wällerland" WRV e.V. Lindlar</li>
              <li>12/2022 WRV e.V.: Zuchtstättenabnahme im Westerwald</li>
              <li>01/2024 WRV e.V.: Zuchtstättenabnahme in Sachsen-Anhalt</li>
              <li>02/2024 Burgenlandkreis, Veterinäramt Naumburg: Abnahme der Zuchtstätte</li>
              <li>03/2024 Burgenlandkreis, Veterinäramt Naumburg: Zuchterlaubnis nach Paragraph 11 TierSchG</li>
            </ul>
          </section>

          {/* HonestDog + Zertifikate */}
          <section className="space-y-6">
            <p className="text-foreground font-semibold">
              2024 HonestDog – Wir sind geprüfte Züchter auf verschiedene Verkaufsplattformen, mitunter Honest Dog Prüfsiegel
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <img src={honestdog} alt="HonestDog Prüfsiegel" className="w-full rounded-lg shadow-md" loading="lazy" />
              <img src={urkundeZwinger} alt="Urkunde Zwinger vom Wällerland" className="w-full rounded-lg shadow-md" loading="lazy" />
              <FlipCard front={cert01Front} back={cert01Back} alt="WRV Zertifikat" />
              <FlipCard front={cert02Front} back={cert02Back} alt="WRV Zertifikat" />
            </div>
          </section>

          {/* Urkunden und Pokale von Ausstellungserfolgen */}
          <section id="urkunden" className="bg-secondary/30 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12 space-y-10">
            <h2 className="text-xl md:text-2xl font-heading text-foreground italic">
              Urkunden und Pokale von Ausstellungserfolgen
            </h2>

            {/* Ada von Blauen Saphir */}
            <div className="space-y-6">
              <h3 className="text-lg font-heading text-foreground">Urkunde – Ada von Blauen Saphir</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FlipCard front={ada01Front} back={ada01Back} alt="Urkunde Ada" />
                <FlipCard front={ada02Front} back={ada02Back} alt="Urkunde Ada" />
                <FlipCard front={ada03Front} alt="Urkunde Ada" />
                <FlipCard front={ada04Front} back={ada09Back} alt="Urkunde Ada" />
                <FlipCard front={ada05Front} back={ada05Back} alt="Urkunde Ada" />
                <FlipCard front={ada06Front} back={ada06Back} alt="Urkunde Ada" />
                <FlipCard front={ada07Front} back={ada07Back} alt="Urkunde Ada" />
                <FlipCard front={ada08Front} alt="Urkunde Ada" />
                <FlipCard front={ada09Front} back={ada09Back} alt="Urkunde Ada" />
                <FlipCard front={ada10Front} back={ada10Back} alt="Urkunde Ada" />
              </div>
            </div>

            {/* Ashley vom Wällerland */}
            <div className="space-y-6">
              <h3 className="text-lg font-heading text-foreground">Urkunde – Ashley vom Wällerland</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FlipCard front={ashley01Front} alt="Urkunde Ashley" />
                <FlipCard front={ashley02Front} back={ashley02Back} alt="Urkunde Ashley" />
                <FlipCard front={ashley03Front} back={ashley03Back} alt="Urkunde Ashley" />
                <FlipCard front={ashley04Front} back={ashley04Back} alt="Urkunde Ashley" />
              </div>
            </div>
          </section>

          {/* Trophäen */}
          <section className="space-y-6">
            <h2 className="text-xl md:text-2xl font-heading text-foreground">Trophäen und Auszeichnungen</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <img src={trophy1} alt="Trophäen" className="w-full rounded-lg shadow-md" loading="lazy" />
              <img src={trophy2} alt="Trophäen" className="w-full rounded-lg shadow-md" loading="lazy" />
              <img src={trophy3} alt="Trophäen" className="w-full rounded-lg shadow-md" loading="lazy" />
            </div>
            <img src={trophy4} alt="Trophäen" className="w-full max-w-2xl mx-auto rounded-lg shadow-md" loading="lazy" />
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
};

export default UeberWeiterbildungen;
