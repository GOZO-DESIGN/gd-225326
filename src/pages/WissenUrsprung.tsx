import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import heroImg from "@/assets/ursprung/uprspung-hero.webp";
import img1 from "@/assets/ursprung/uprspung-1.jpg";
import img2 from "@/assets/ursprung/uprspung-2.avif";
import img3 from "@/assets/ursprung/uprspung-3.avif";
import vid4 from "@/assets/ursprung/uprspung-4.mp4";
import img6 from "@/assets/ursprung/uprspung-6.webp";
import img7 from "@/assets/ursprung/uprspung-7.webp";
import img8 from "@/assets/ursprung/uprspung-8.webp";
import img9 from "@/assets/ursprung/uprspung-9.webp";
import img11 from "@/assets/ursprung/uprspung-11.webp";
import img12 from "@/assets/ursprung/uprspung-12.webp";
import img13 from "@/assets/ursprung/uprspung-13.webp";
import img14 from "@/assets/ursprung/uprspung-14.webp";
import img15 from "@/assets/ursprung/uprspung-15.webp";

const Section = ({ children }: { children: React.ReactNode }) => (
  <div className="space-y-6">{children}</div>
);

const Img = ({ src, alt }: { src: string; alt: string }) => (
  <img
    src={src}
    alt={alt}
    className="w-full max-w-2xl mx-auto rounded-xl shadow-md"
    loading="lazy"
  />
);

const WissenUrsprung = () => {
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
          alt="Ursprung des Pomeranians"
          className="relative w-full h-full object-contain"
        />
      </section>

      {/* Title bar */}
      <div className="bg-accent py-4 text-center">
        <h1 className="text-3xl md:text-4xl font-heading text-accent-foreground">
          Wissenswertes rund um den Pomeranian/Zwergspitz
        </h1>
      </div>

      <main className="bg-primary-foreground py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 font-body text-muted-foreground leading-relaxed">

          {/* Intro */}
          <Section>
            <h2 className="text-2xl md:text-3xl font-heading text-foreground">Der Ursprung des Pomeranian</h2>
            <p>
              Die Geschichte des Zwergspitzes ist wirklich interessant. Ursprünglich stammt der Zwergspitz vom Deutschen Spitz ab, den es in vielen Größen und Farben gibt.
            </p>
            <p>Der Deutsche Spitz umfasst fünf Varietäten, die sich vor allem in Größe und Fellfarbe unterscheiden:</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>Wolfsspitz 49 +/- 6 cm</li>
              <li>Großspitz 45 +/- 5 cm</li>
              <li>Mittelspitz 35 +/- 5 cm</li>
              <li>Kleinspitz 27 +/- 3 cm</li>
              <li>Zwergspitz 21 +/- 3 cm</li>
            </ul>
            <p>
              Mit einer Widerristhöhe von nur 18 - 24 cm ist der Zwergspitz, auch als Pomeranian bekannt, ein zierlicher Hund von geringer Körpergröße.
            </p>
            <p>
              Der Zwergspitz ist eine aus Deutschland stammende Hunderasse und ist nach einer Region zwischen Deutschland und Polen namens Pommern benannt worden. Sie wird außerdem der Rasse der Deutschen Spitze untergeordnet.
            </p>
          </Section>

          <Img src={img1} alt="Zwergspitz historisch" />

          <Section>
            <p>
              Schon in alten Zeiten, wie auf mykenischen Terrakotta und griechischen Vasen dargestellt, gab es Hunde, die als eine Art „Urspitz" gesehen werden können.
            </p>
          </Section>

          <Img src={img2} alt="Antike Darstellung Spitz" />

          <Section>
            <p>
              In der Antike war der Spitz viel größer und wurde Gerüchten nach als Schlitten- und Hütehund für Rinderherden verwendet.
            </p>
          </Section>

          <Img src={img3} alt="Spitz in der Antike" />

          <Section>
            <p>
              Die Pomeranians erreichten ihren hohen Beliebtheitsgrad erst unter Charlottes Enkelin Königin Victoria von England. Sie kaufte in Florenz mehrere Pomeranians, darunter Gina (Video).
            </p>
          </Section>

          {/* Video */}
          <div className="w-full max-w-2xl mx-auto rounded-xl overflow-hidden shadow-md">
            <video controls className="w-full" preload="metadata">
              <source src={vid4} type="video/mp4" />
              Ihr Browser unterstützt das Video-Tag nicht.
            </video>
          </div>

          <Section>
            <p>
              Im 18. Jahrhundert heiratete die deutsche Prinzessin Charlotte von Mecklenburg-Strelitz den späteren englischen König Georg der III und ließ sich weiße Spitze von Pommern an den englischen Adelshof liefern. Durch gezielte Zucht in den folgenden Jahrzehnten, Reduzierung der Größe dieser Hunde, erhielten sie später den Namen Pomeranian, benannt nach seiner Herkunftsregion (Pommern). Unter Georg und seiner deutschen Gemahlin wurde die Rasse der Liebling der Adelshäuser und wurde auch liebevoll Pom genannt.
            </p>
          </Section>

          <Img src={img6} alt="Historisches Gemälde mit Pomeranian" />

          <Section>
            <p>
              Das Bild von Mary Hill entstand um 1820 in England und zeigt, dass unser Spitz schon vor über 200 Jahren der Liebling adliger Kreise war.
            </p>
            <p>
              Die Pomeranians waren nun nicht mehr ausschließlich in Adelskreisen anzutreffen, sondern erfreuten sich auch in anderen Gesellschaftsschichten besonderer Beliebtheit. Sie wurden auch in den USA gezüchtet.
            </p>
            <p>
              Mit der Zeit wurden die Pomeranians unter den englischen Züchtern immer kleiner, die Größe halbierte sich und sie wurden puppen-/bärchenhafter.
            </p>
            <p className="text-sm italic">
              (Fotos/Text, Quelle: Preußenspitz, die Geschichte des Spitzes bis 19. Jahrhundert)
            </p>
            <p>
              1871 wurde der Pomeranian erstmals in Kennel-Club-Ausstellungen in England gezeigt. Die Rasse war bereits damals beim Kennel Club angemeldet und registriert. Bereits im Jahre 1905 wurden auf einer Ausstellung 125 Pomeranians gemeldet. In den Siebziger Jahren kam der Pomeranian zurück nach Deutschland.
            </p>
            <p>
              Im späten 19. und frühen 20. Jahrhundert wurde der Zwergspitz von großen Zuchtverbänden anerkannt, z.&nbsp;B. bereits im Jahr 1957 offiziell durch die FCI (Fédération Cynologique Internationale). Diese Rasse wird der FCI Gruppe 5, der Gruppe der Spitze und der Hunde vom Urtyp, sowie der Sektion 4, der Sektion der Europäischen Spitze, zugeordnet.
            </p>
            <p className="font-semibold text-foreground">
              Pomeranian/Pomerania heißt im Deutschen „Zwergspitz", der kleinste aller Spitze.
            </p>
          </Section>

          <Img src={img7} alt="Pomeranian Zwergspitz" />

          {/* Charakter */}
          <Section>
            <h2 className="text-2xl md:text-3xl font-heading text-foreground">Charakter</h2>
            <p>
              Die geringe Größe des Zwergspitzes beeinflusst in keinster Weise sein Selbstbewusstsein. Da der Zwergspitz sehr menschenbezogen ist, möchte er viel Zeit mit Frauchen und Herrchen verbringen und am liebsten überall hin mitgenommen werden. Dieses Vertrauen schenkt der Pom aber nur seinen Bezugspersonen. Diese kleinen Hunde sind bekannt für ihre Intelligenz, Loyalität und Anpassungsfähigkeit. Trotz ihrer geringen Größe zeigen sie eine erstaunliche Wachsamkeit und können sich als ausgezeichnete Wächter ihres Zuhauses beweisen. Fremden Menschen begegnet der wachsame Begleithund mit einer guten Portion Misstrauen.
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>freundlich und aufgeschlossen</li>
              <li>außergewöhnlich anhänglich und verschmust</li>
              <li>intelligent</li>
              <li>loyal</li>
              <li>anpassungsfähig</li>
              <li>aufmerksam/wachsam</li>
              <li>lebhaft</li>
              <li>spielfreudig</li>
            </ul>
            <p>
              Laut FCI-Standard sollen sie stets aufmerksam, lernfreudig, freundlich und offen sein – weder ängstlich noch aggressiv – also der ideale Familien- und Begleithund. Geeignet auch als Therapiehund.
            </p>
          </Section>

          <Img src={img8} alt="Pomeranian Charakter" />

          <Section>
            <h3 className="text-xl font-heading text-foreground">Lebenserwartung 12 - 16 Jahre</h3>
          </Section>

          <Img src={img9} alt="Pomeranian Lebenserwartung" />

          <Section>
            <h3 className="text-xl font-heading text-foreground">Widerristhöhe 18 - 24 cm, lt. FCI Standard 21 +/- 3 cm</h3>
            <p>
              Der AKC sagt: die durchschnittliche Größe des Pomeranians liegt zwischen 3 und 7 Pfund, wobei das Idealgewicht für Ausstellungen bei 4 bis 6 Pfund liegt. Jeder Hund, der die Grenzwerte über- oder unterschreitet, ist zu beanstanden. Die Gesamtqualität ist jedoch der Größe vorzuziehen.
            </p>
          </Section>

          <Img src={img11} alt="Pomeranian Größe" />

          <Section>
            <h3 className="text-xl font-heading text-foreground">Gewicht</h3>
            <p>1,9 - 3 kg, lt. FCI ein seiner Größe entsprechendes Gewicht</p>
          </Section>

          <Img src={img12} alt="Pomeranian Gewicht" />

          <Section>
            <h3 className="text-xl font-heading text-foreground">Allgemeines Erscheinungsbild – FCI:</h3>
            <p>
              Spitze bestechen durch ein schönes Haarkleid, das reichliche Unterwolle abstehend macht. Besonders auffällig sind der sich um den Hals legende, starke, mähnenartige Kragen und die buschig behaarte Rute, die kühn über dem Rücken getragen wird. Der fuchsähnliche Kopf mit den flinken Augen und die spitzen eng stehenden kleinen Ohren verleihen dem Spitz das ihm eigene charakteristische kecke Aussehen.
            </p>
          </Section>

          <Img src={img13} alt="Pomeranian Erscheinungsbild" />

          {/* Zusammenfassung */}
          <Section>
            <h2 className="text-2xl md:text-3xl font-heading text-foreground">Zusammenfassung</h2>
            <p>
              Warum sehen die Pomeranians so unterschiedlich aus, manche ähneln einem Fuchsgesicht, andere eher einem Bärchengesicht? Oder mit pummeligen Beinen und andere mit längeren Beinen? Oder mit mehr oder weniger Haaren...?
            </p>
            <p>
              Das hängt von der Blutlinie und von der Genetik des Zwergspitzes ab. Die Züchter haben die Rasse weiterentwickelt. Deshalb gibt es Pomeranians, die ein einfacheres (primitiveres) Aussehen haben (wie die Rasse in der Antike) und andere die mit üppigerem Fell, kürzerer Schnauze, einem kleinen runderen Gesicht und Ohren, kleinere pummelige Beine mit mehr Haaren, die insgesamt ein runderes Aussehen verleihen (Bärchen- oder Püppchen Aussehen / Pom Boo).
            </p>
            <p>
              Wir finden, dass die wunderschöne kleine Rasse mittlerweile überzüchtet wurde. Aus eigener Erfahrung wissen wir, dass die Nachfrage des sogenannten Pomeranian Boo immer größer wurde. Anfragen, hauptsächlich von jungen Leuten, die auf TikTok präsent sind etc., fragten nach sehr „KLEINE, KURZE POMERANIANS UND AM LIEBSTEN SOLLTEN SIE EIN PÜPPCHEN-BÄRCHENGESICHT HABEN."
            </p>
          </Section>

          <Img src={img14} alt="Pomeranian Vergleich" />

          <Section>
            <h3 className="text-xl font-heading text-foreground">Herkunft: Deutschland – FCI</h3>
            <p>
              Deutsche Spitze sind Nachkommen des steinzeitlichen Torfhundes „Canis familiaris palustris Rütimeyer" und späteren Pfahlbauspitzes, älteste Hunderasse Mitteleuropas. Zahlreiche andere Rassen sind aus ihnen hervorgegangen. Im nicht deutschsprachigen Ausland werden die Zwergspitze auch Pomeranian genannt.
            </p>
          </Section>

          <Img src={img15} alt="Pomeranian Herkunft FCI" />

          {/* Zuchtziel */}
          <Section>
            <h2 className="text-2xl md:text-3xl font-heading text-foreground">Unser Zuchtziel</h2>
            <p>
              Wir möchten diese NEUE MODEERSCHEINUNG NICHT unterstützen und uns von anderen Züchtern/Vermehrern im In- und Ausland, DER KLEINEN SÜSSEN BÄRCHENZUCHT, ABHEBEN. DIE BÄRCHEN sind in unseren Augen ein RESULTAT VON ÜBERZÜCHTUNG, sie sind anfälliger für RASSESPEZIFISCHE KRANKHEITEN (CM/SM). Sie haben meist durch Kurzköpfigkeit, Gedrungenheit vom Fang und Schädel LUFTPROBLEME etc. Vorbeugend sollte die Zucht der Pomeranians mit gedrungenen Körperbau und geringer Körpergröße, winzigem Köpfchen und kurzer Schnauze vermieden werden.
            </p>
            <p>
              Wir haben uns als ZIEL gesetzt, gesunde, robuste, bewegungsfähige und vor allem langlebige Pomeranians mit lebenswerter Größe in 24 +/- 2 cm zu züchten (lt. AKC ist die Gesamtqualität der Größe vorzuziehen).
            </p>
          </Section>

        </div>
      </main>

      <Footer />
    </>
  );
};

export default WissenUrsprung;
