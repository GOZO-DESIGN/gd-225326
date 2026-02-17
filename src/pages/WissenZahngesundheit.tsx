import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";

import heroImg from "@/assets/zahnpflege/zahnpflege-hero.webp";
import img1 from "@/assets/zahnpflege/zahnpflege-1.webp";
import img2 from "@/assets/zahnpflege/zahnpflege-2.webp";
import img3 from "@/assets/zahnpflege/zahnpflege-3.webp";
import img4 from "@/assets/zahnpflege/zahnpflege-4.webp";
import img5 from "@/assets/zahnpflege/zahnpflege-5.webp";
import img6 from "@/assets/zahnpflege/zahnpflege-6.webp";
import img7 from "@/assets/zahnpflege/zahnpflege-7.avif";
import img8 from "@/assets/zahnpflege/zahnpflege-8.avif";

const Section = ({ children }: { children: React.ReactNode }) => (
  <AnimateOnScroll variant="fade-up">
    <div className="space-y-6">{children}</div>
  </AnimateOnScroll>
);

const Img = ({ src, alt }: { src: string; alt: string }) => (
  <AnimateOnScroll variant="scale">
    <img
      src={src}
      alt={alt}
      className="w-full max-w-2xl mx-auto rounded-xl shadow-md"
      loading="lazy"
    />
  </AnimateOnScroll>
);

const WissenZahngesundheit = () => {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative h-[400px] md:h-[650px] overflow-hidden">
        <img
          src={heroImg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover scale-110 blur-xl opacity-60"
        />
        <img
          src={heroImg}
          alt="Zahngesundheit & Pflege des Pomeranians"
          className="relative w-full h-full object-contain"
        />
      </section>

      {/* Title bar */}
      <div className="bg-accent py-4 text-center">
        <h1 className="text-2xl md:text-3xl font-heading text-accent-foreground">
          Zahngesundheit &amp; Pflege des Pomeranians
        </h1>
      </div>

      <main className="bg-primary-foreground py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 font-body text-muted-foreground leading-relaxed">

          {/* ───── Zahnwechsel ───── */}
          <Section>
            <h2 className="text-2xl md:text-3xl font-heading text-foreground">Zahnwechsel</h2>
            <h3 className="text-xl font-heading text-foreground">
              Der Hund hat zwei Zahngenerationen
            </h3>
            <p>
              Die verbleibenden Zähne stoßen in der Regel gerade unterhalb der Milchzähne, wobei sie deren Wurzel auflösen und am Schluss nur noch die Krone der Milchzähne ausfallen muss. Schneidezähne (Incisivi), Eckzähne (Canini) und vordere Backenzähne (Prämolaren) wechseln regulär. Die hinteren Backenzähne (Molaren) und der erste Prämolar (P1) haben nur eine Generation und stoßen als bleibende Zähne. Der Wechsel der Milch- zu den bleibenden Zähnen erfolgt zwischen dem 3. und 7. Lebensmonat.
            </p>
          </Section>

          <Img src={img1} alt="Zahnwechsel beim Pomeranian" />

          {/* ───── Aufbau des Hundegebisses ───── */}
          <Section>
            <h2 className="text-2xl md:text-3xl font-heading text-foreground">
              Aufbau des Hundegebisses
            </h2>
            <p>
              Hunde sind Fleischfresser (Karnivoren) und haben dementsprechend ein typisches Raubtiergebiss, auch Scherengebiss genannt. Es ist perfekt daran angepasst, Beute zu fangen, festzuhalten, zu zerreißen und zu zerschneiden.
            </p>
            <p>
              Das vollständige Gebiss eines erwachsenen Hundes besteht aus 42 Zähnen, die sich auf Ober- und Unterkiefer verteilen:
            </p>
            <div className="space-y-3">
              <div className="bg-secondary/30 rounded-lg p-4">
                <p className="font-semibold text-foreground">12 Schneidezähne (Incisivi)</p>
                <p>Je 6 im Ober- und Unterkiefer. Sie dienen zum Abbeißen und Festhalten der Beute.</p>
              </div>
              <div className="bg-secondary/30 rounded-lg p-4">
                <p className="font-semibold text-foreground">4 Eckzähne (Canini) oder Fangzähne</p>
                <p>Je einer links und rechts im Ober- und Unterkiefer. Sie sind besonders lang und spitz und dienen ebenfalls dem Festhalten und Töten der Beute.</p>
              </div>
              <div className="bg-secondary/30 rounded-lg p-4">
                <p className="font-semibold text-foreground">16 Vorbackenzähne (Prämolaren)</p>
                <p>Je 4 auf jeder Seite in Ober- und Unterkiefer. Sie zerkleinern und zerschneiden die Nahrung.</p>
              </div>
              <div className="bg-secondary/30 rounded-lg p-4">
                <p className="font-semibold text-foreground">10 Backenzähne (Molaren)</p>
                <p>Je 2 oben und 3 unten auf jeder Seite. Sie dienen dem Zermahlen der Nahrung.</p>
              </div>
            </div>
            <p>
              Insgesamt befinden sich also 20 Zähne im Oberkiefer und 22 im Unterkiefer.
            </p>
            <p>
              Besonders auffällig sind die Reißzähne (Prämolar 4 im Oberkiefer und Molar 1 im Unterkiefer). Sie bilden eine Schere, mit der Hunde Fleisch und Sehnen durchtrennen können.
            </p>
          </Section>

          <Img src={img2} alt="Skizze Hundegebiss" />

          {/* ───── Zahnfehlstellungen ───── */}
          <Section>
            <h2 className="text-2xl md:text-3xl font-heading text-foreground">Zahnfehlstellungen</h2>
            <p>
              Manche Hunderassen neigen durch Zuchtmerkmale wie verkürzte Kiefer zu Zahnfehlstellungen. Zähne können eng stehen, rotieren oder aus dem Kiefer herauswachsen. Auch Ober- und Unterkiefer können unterschiedlich lang sein, sodass die Zähne nicht richtig aufeinandertreffen (Vor- oder Rückbiss).
            </p>
            <p>
              Zahnfehlstellungen begünstigen Zahnstein und Parodontitis, da die Zähne schwerer zu reinigen sind. In schweren Fällen stören sie sogar die Nahrungsaufnahme und müssen kieferorthopädisch korrigiert werden.
            </p>
            <p className="text-sm italic">
              Quelle: Daniel Koch, Dr. Med. Vet. ECVS, Überweisungspraxis für Kleintierchirurgie Diessenhofen/Ch · Sachkundenachweis-Hunde.de
            </p>
          </Section>

          <Img src={img3} alt="Zahnfehlstellungen beim Hund" />

          {/* ───── Zahnreinigung / Pflege ───── */}
          <Section>
            <h2 className="text-2xl md:text-3xl font-heading text-foreground">
              Zahnreinigung / Pflege des Pomeranians
            </h2>
            <p>
              Die Zahnpflege des Zwergspitzes ist sehr wichtig – auch Pomeranians können Karies und Zahnstein bekommen.
            </p>
            <p>
              Die Zahnreinigung kann und sollte bereits in jungen Jahren erfolgen. Gewöhnen Sie Ihren Pomeranian bereits im Welpenalter daran.
            </p>
            <p>
              Kaufen Sie eine handelsübliche Kinderzahnbürste oder spezielle Hunde- bzw. Pomeranian-Zahnbürste. Es gibt viele Zahnbürstenmodelle. Suchen Sie nach einer kleinen, für die Größe Ihres Poms geeigneten Zahnbürste – noch einfacher geht's mit einer Fingerzahnbürste.
            </p>
            <p>
              Auch bei der Zahnpasta sollten Sie auf eine hochwertige Qualität achten, zum Beispiel das Orozym Zahngel, das auch von manchen Tierärzten empfohlen wird.
            </p>
            <p className="font-semibold text-foreground">
              Wichtig ist, dass Sie regelmäßig das Zähneputzen mit Ihrem Pom trainieren. Pomeranians bilden viel Zahnstein. Wenn die Zähne nicht richtig gereinigt werden, müssen Sie es beim Tierarzt machen lassen und benötigen ein Beruhigungsmittel – im schlimmsten Fall müssen Zähne gezogen werden.
            </p>
            <p>
              Alternativ gibt es das Zahnspray von Tierliebhaber, welches ich bei meinen Pomeranians auch anwende. Ich sprühe es direkt auf die Zähne und Zahnfleisch. Sie können es auch zweimal täglich auf das gewohnte Futter sprühen.
            </p>
            <p>
              Auch spezielle Zahnpflegesnacks, tierische harte Kauartikel (Rinderkopfhaut etc.) und Kauspielzeug können helfen, Zahnbelag mechanisch zu entfernen. Zusätze wie Algen oder Enzyme hemmen die Plaquebildung.
            </p>
          </Section>

          <Img src={img4} alt="Zahnpflege beim Pomeranian" />

          {/* ───── Zähne putzen ───── */}
          <Section>
            <h3 className="text-xl font-heading text-foreground">Zähne putzen</h3>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>Routine aufbauen</li>
              <li>Im Welpenalter beginnen</li>
              <li>Mit dem Finger üben</li>
              <li>Hunde-Zahnpasta verwenden</li>
              <li>Danach Backen-, Fang- und Schneidezähne</li>
              <li>Unterkiefer bei geübten Hunden</li>
              <li>Zahninnenseiten nur bei toleranten Hunden</li>
            </ul>
          </Section>

          <Img src={img5} alt="Zähne putzen beim Pomeranian" />

          {/* ───── Zahnstein und Parodontitis ───── */}
          <Section>
            <h2 className="text-2xl md:text-3xl font-heading text-foreground">
              Zahnstein und Parodontitis
            </h2>
            <p>
              Zahnbelag, der nicht entfernt wird, verkalkt mit der Zeit zu Zahnstein. Dieser bietet Bakterien einen idealen Nährboden. Die Folge sind Zahnfleischentzündungen (Gingivitis) und Entzündungen des Zahnhalteapparats (Parodontitis). Unbehandelt führt dies zu Zahnlockerung und Zahnverlust.
            </p>
            <h3 className="text-xl font-heading text-foreground">
              Anzeichen für Zahnstein und Parodontitis
            </h3>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>Sichtbarer Zahnstein</li>
              <li>Rötung und Schwellung des Zahnfleischs</li>
              <li>Mundgeruch</li>
              <li>Schmerzen beim Kauen</li>
              <li>Vermehrter Speichelfluss</li>
              <li>Appetitlosigkeit und Gewichtsverlust</li>
            </ul>
            <p>
              Der nicht entfernte Zahnstein kann zu schmerzhaften bösen Entzündungen führen und muss vom Tierarzt unter Betäubung entfernt werden.
            </p>
            <p>
              Nicht zu vergessen ist das Narkoserisiko bei jeder Operation, wenn die nicht mehr zu rettenden Zähne entfernt werden müssen.
            </p>
            <p>
              Zahnprobleme des Pomeranians, wie Zahnstein, sind erblich bedingt (Veranlagung). Andere Poms kennen keine Zahnbürste und Kauartikel &amp; Co. und haben die schönsten Zähne.
            </p>
          </Section>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Img src={img6} alt="Zahnstein beim Pomeranian" />
            <Img src={img7} alt="Parodontitis beim Hund" />
          </div>

          {/* ───── Zusammenfassung ───── */}
          <div className="bg-secondary/30 rounded-xl p-6 md:p-8 space-y-4">
            <h3 className="text-xl font-heading text-foreground">Zusammenfassung</h3>
            <p>
              Zahnpflege gehört auch beim Pomeranian zur täglichen Hygiene. Sie neigen zu Zahnstein.
            </p>
            <p>
              Gesunde Zähne sind für Hunde von großer Bedeutung – nicht nur zum Fressen, sondern auch zum Spielen, Erkunden und Verteidigen. Ausgewachsene Hunde haben normalerweise 42 Zähne im bleibenden Gebiss. Durch Zuchtmerkmale kann es bei einigen Rassen leichte Abweichungen geben.
            </p>
            <p>
              Regelmäßige Zahnpflege durch Herrchen und Tierarzt ist für alle Vierbeiner lebenswichtig, um schmerzhafte Zahnprobleme zu vermeiden. Denn gesunde Zähne sind die Basis für ein langes und beschwerdefreies Hundeleben.
            </p>
            <p className="font-semibold text-foreground">
              Mit der richtigen Pflege kann jeder Hundehalter dazu beitragen, dass das Gebiss seines Lieblings ein Leben lang gesund und stark bleibt.
            </p>
          </div>

          <Img src={img8} alt="Gesunde Zähne beim Pomeranian" />

        </div>
      </main>

      <Footer />
    </>
  );
};

export default WissenZahngesundheit;