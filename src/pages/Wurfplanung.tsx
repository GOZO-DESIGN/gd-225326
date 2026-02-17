import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import pomWelpen from "@/assets/pom-welpen.jpg";
import pomTraining from "@/assets/pom-training.jpg";

/* Use available welpen images as placeholders */
const welpenModules = import.meta.glob(
  "@/assets/welpen/*.{jpg,jpeg,webp,avif,png}",
  { eager: true, import: "default" }
) as Record<string, string>;
const welpenImages = Object.entries(welpenModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, s]) => s);

const heroImg = pomWelpen;

const Wurfplanung = () => {
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
          alt="Wurfplanung und Aufzucht"
          className="relative w-full h-full object-contain"
        />
      </section>

      {/* Title bar */}
      <div className="bg-accent py-4 text-center">
        <h1 className="text-3xl md:text-4xl font-heading text-accent-foreground">
          Unsere <span>Wurfplanung und Aufzucht</span>
        </h1>
      </div>

      <main className="bg-primary-foreground">
        {/* ── Zucht News ── */}
        <section className="py-16 md:py-20">
          <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
              {/* Text */}
              <div className="w-full md:w-1/2 space-y-4">
                <h2 className="text-2xl md:text-3xl font-heading text-foreground">
                  Zucht <span className="text-accent">News</span>
                </h2>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Ashley hat ihren Nachwuchs am 12.10.25 gesund auf die Welt gebracht.
                </p>
                <ul className="font-body text-muted-foreground list-disc list-inside space-y-1">
                  <li>1 Hündin orange Sable &amp; tan mit Weißanteil</li>
                  <li>1 Rüde in weiss-schwarz Parti</li>
                  <li>1 Rüde in creme Sable &amp; tan</li>
                </ul>
              </div>
              {/* Image */}
              <div className="w-full md:w-1/2">
                <img
                  src={welpenImages[0] || pomWelpen}
                  alt="Welpen Neugeboren"
                  className="w-full h-[350px] md:h-[450px] object-cover rounded-xl shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Image grid – Ashley's litter */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10">
              {welpenImages.slice(0, 8).map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Ashley Welpen ${i + 1}`}
                  className="w-full h-[140px] md:h-[180px] object-cover rounded-lg"
                  loading="lazy"
                />
              ))}
            </div>

            {/* Amy section */}
            <div className="mt-14 space-y-4">
              <p className="font-body text-muted-foreground leading-relaxed max-w-4xl">
                Auch unsere schoko Tricolor Merle Hündin Amy hat am 25.10.25 zwei wunderschöne Welpen
                gesund auf die Welt gebracht. Unsere zuckersüßen Wonneproppen sind Rüden und haben die
                exotische und seltene Farbe schoko Tri Merle.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed max-w-4xl">
                Sie möchten auch ein Glückspilz sein und eines unserer Babys an Ihrer Seite haben? Gerne
                können Sie sich für eines unserer flauschigen Nesthäkchen bei uns bewerben… via WhatsApp oder
                auf unserem Fragebogen. Wir rufen Sie auch gerne zurück.
              </p>
            </div>
          </div>
        </section>

        {/* ── Wurfplanung 2026 ── */}
        <section className="py-16 md:py-20 border-t border-border">
          <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-heading text-foreground mb-6">
              Wurf<span className="text-accent">planung</span>
            </h2>
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
              <div className="w-full md:w-1/2">
                <img
                  src={welpenImages[1] || pomWelpen}
                  alt="Wurfplanung"
                  className="w-full h-[350px] md:h-[450px] object-cover rounded-xl shadow-lg"
                  loading="lazy"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-xl font-heading text-accent">Wurfplanung für 2026</h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Wir planen für 2026 unsere nächsten Zwergspitz Würfe. Ausgewachsen zwischen 20 und 25 cm
                  in den Farben weiss-creme, creme/red Sable, black/schoko Merle, weiss-schwarz (evtl. mit
                  Tanpoints, Parti und Tri)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Aufzucht Title bar ── */}
        <div className="bg-accent py-4 text-center">
          <h2 className="text-2xl md:text-3xl font-heading text-accent-foreground">
            Unsere Wurfplanung und Aufzucht
          </h2>
        </div>

        {/* ── Aufzucht – Geburt ── */}
        <section className="py-16 md:py-20">
          <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            {/* Block 1: Geburt */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
              <div className="w-full md:w-1/2 space-y-4">
                <p className="font-body text-muted-foreground leading-relaxed">
                  Wir nehmen uns genügend Zeit, um uns auf das bevorstehende schöne Ereignis vorzubereiten.
                </p>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Unsere Welpen werden im Wohnzimmer geboren. Sofern die Mutter es nicht übernimmt, hole ich
                  den Welpen behutsam aus der Fruchtblase, nabele ihn ab, rubbele ihn sanft trocken usw. und
                  lege ihn sofort ans Gesäuge an. Das am ersten Lebenstag zur Verfügung stehende, wertvollste
                  Colostrum unterscheidet sich erheblich von der späteren, so genannten reifen Muttermilch. Es
                  ist in den ersten 24 h wichtig für das Überleben und die Entwicklung der Welpen. Das
                  Colostrum stärkt das Immunsystem und liefert Energie und Nährstoffe für den Welpen. Während
                  der ersten drei bis fünf Tage verändert sich die Zusammensetzung von Colostrum langsam bis
                  zur reifen Milch.
                </p>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Nachdem ich ein paar Tage die Welpen beobachtet, ans Gesäuge angelegt und mehrfach am Tag
                  das Gewicht kontrolliert habe, ziehen die Welpen mit ihrer Mama ins Welpenzimmer um. Das
                  Welpenzimmer hat eine angemessene Temperatur, die wichtig für das Wohlbefinden der Welpen und
                  der Mutterhündin ist. Die Wurfkiste ist zusätzlich mit einer Wärmematte ausgelegt. Um das
                  Wundwerden des Gesäuges zu verhindern, kürze ich ganz vorsichtig die Krallen der Welpen.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <img
                  src={welpenImages[2] || pomTraining}
                  alt="Welpenaufzucht"
                  className="w-full h-[350px] md:h-[500px] object-cover rounded-xl shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Block 2: 2 Wochen */}
            <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-12 items-start">
              <div className="w-full md:w-1/2 space-y-4">
                <p className="font-body text-muted-foreground leading-relaxed">
                  Mit etwa 2 Wochen öffnen die Welpen langsam ihre Äuglein. Die Welpenzufütterung hängt von
                  der Milchleistung der Mutterhündin ab. Ab der 3. Woche bieten wir unseren Welpen
                  hochwertiges Welpenfutter zum Start und Zufüttern an.
                </p>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Ab der 4. Lebenswoche beginnen wir unsere Welpen zu entwurmen, damit sie nicht in ihrer
                  Entwicklung geschädigt werden. In 2-wöchigen Abständen wird die Wurmkur bis zur Abgabe
                  unserer Welpen wiederholt.
                </p>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Wir beobachten unsere Welpen ständig, wie sie sich entwickeln und ob der Kot fest ist.
                </p>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Ab der 4. Lebenswoche können sich unsere Welpen nicht nur im Welpenzimmer, sondern auch im
                  Garten austoben und neues erkunden.
                </p>
              </div>
              <div className="w-full md:w-1/2 grid grid-cols-2 gap-3">
                {welpenImages.slice(3, 7).map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Welpen Entwicklung ${i + 1}`}
                    className="w-full h-[180px] md:h-[220px] object-cover rounded-lg"
                    loading="lazy"
                  />
                ))}
              </div>
            </div>

            {/* Block 3: Prägephase */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
              <div className="w-full md:w-1/2">
                <img
                  src={welpenImages[4] || pomTraining}
                  alt="Welpen Prägephase"
                  className="w-full h-[350px] md:h-[500px] object-cover rounded-xl shadow-lg"
                  loading="lazy"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <p className="font-body text-muted-foreground leading-relaxed">
                  Wir erziehen unsere Welpen zu einem selbstbewussten, umgänglichen und liebevollen Zwergspitz.
                  Wir nehmen uns für die Welpen sehr viel Zeit, die Prägephase der Kleinen beginnt ab der 3.
                  Lebenswoche, damit Ihr zukünftiger Zwergspitz ein wesensstarker Hund wird.
                </p>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Vom ersten Tag an nehmen wir die Welpen mehrfach in die Hand und streicheln sie zärtlich.
                  Das sind ihre ersten positiven Erfahrungen. Während der gesamten Aufzucht nutzen wir jede
                  Gelegenheit zum Streicheln und lieb haben. Natürlich achten wir auch drauf, dass sie während
                  der Prägungsphase viele Geräusche aus Alltag und Natur kennenlernen, damit sie nicht
                  ängstlich oder schreckhaft werden.
                </p>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Mit viel Einfühlungsvermögen gewöhnen wir unsere Welpen an das Pflegeprogramm, an Wasser/
                  Duschen/ Abtrocknen/ Föhnen, Bürsten und Krallen schneiden.
                </p>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Durch Tierarztbesuche usw. lernen unsere Welpen auch das Autofahren kennen. 1x die Woche
                  besuchen wir auch die Senioren-Residenz in Bad Bibra.
                </p>
              </div>
            </div>

            {/* Block 4: Zuchtauflagen & Abgabe */}
            <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-12 items-start">
              <div className="w-full md:w-1/2 space-y-4">
                <p className="font-body text-muted-foreground leading-relaxed">
                  Unsere Welpen werden unter strengen Zuchtauflagen aufgezogen. Die Eltern stammen aus einer
                  gesunden und robusten Zucht, haben an Ausstellungen teilgenommen und die
                  Zuchttauglichkeitsprüfung bestanden.
                </p>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Bei der Welpenabgabe beraten wir Sie gerne in einem persönlichen Gespräch über die Fütterung,
                  Haltung und Erziehung Ihres Welpen. Wir haben für Sie auch eine Welpenmappe vorbereitet, die
                  alle Informationen beinhaltet. Wir sind gerne Ihr ständiger Ansprechpartner für Ihren
                  Zwergspitz und stehen Ihnen beratend zur Seite.
                </p>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Bei Abgabe erhalten die neuen Hundeeltern von uns das Gesundheitszeugnis des Welpen, Nachweis
                  über die tierärztliche Untersuchung. Außerdem erhalten Sie einen EU-Heimtierausweis mit der
                  durchgeführten Impfung (Grundimmunisierung), die Ahnentafel des Welpen und eine
                  Erstausstattung, die Ihnen den Einzug Ihres Welpen erleichtern soll.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <img
                  src={welpenImages[5] || pomTraining}
                  alt="Welpen Abgabe"
                  className="w-full h-[350px] md:h-[500px] object-cover rounded-xl shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Block 5: Kennenlernen & Reservierung */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
              <div className="w-full md:w-1/2">
                <img
                  src={welpenImages[6] || pomWelpen}
                  alt="Welpen kennenlernen"
                  className="w-full h-[350px] md:h-[500px] object-cover rounded-xl shadow-lg"
                  loading="lazy"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <p className="font-body text-muted-foreground leading-relaxed">
                  Eine Woche nachdem unsere Welpen geboren sind, stellen wir unsere Welpen auf unsere Webseite,
                  Instagram, TikTok, Facebook, Honestdog usw. mit Farbe und Geschlecht vor. Bei Interesse an
                  einem Welpen aus unserer Zucht setzen Sie sich bitte mit uns rechtzeitig in Verbindung. Bevor
                  wir unsere Welpen jemanden anvertrauen, möchten wir Sie gerne kennenlernen und ein
                  persönliches Gespräch führen. Gerne vorab über ein Telefonat. Selbstverständlich haben Sie
                  die Möglichkeit, uns ab der 4. Lebenswoche zu besuchen und Ihren Welpen bei uns zu Hause
                  auszusuchen.
                </p>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Wir möchten, dass unsere Welpen liebevolle Hundeeltern bekommen, die unseren Zwergspitz als
                  vollwertiges Familienmitglied aufnehmen und ihm ein lebenslanges Zuhause bieten. Entscheiden
                  Sie sich beim persönlichen Kennenlernen für einen Zwergspitz aus unserer Zucht, gehen wir
                  gemeinsam den Kaufvertrag durch und unterzeichnen diesen. Mit Zahlung der
                  Reservierungsgebühr ist der Welpe für Sie fest reserviert. Sie bekommen nun ein wöchentliches
                  Update in Form von Bildern, Videos, Entwicklung des Welpen etc.
                </p>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Für Welpeneltern, die sehr weit entfernt wohnen, machen wir gerne eine Ausnahme und stellen
                  den Welpen mit Fotos und Videos vor. Haben Sie sich für Ihren Wunschwelpen entschieden,
                  versenden wir den Kaufvertrag per WhatsApp oder Email. Nach Unterzeichnung und Erhalt der
                  Reservierungsgebühr ist dieser Vertrag für beide Parteien bindend. Bei Abholung Ihres Welpen
                  empfehlen wir zu zweit anzureisen und mit einer Übernachtung. Alternativ können wir auch
                  einen Kurier beauftragen, der separat bei Lieferung zu bezahlen ist. Bezüglich Termin und
                  Route müssen wir uns nach dem Kurier richten.
                </p>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Ab der 10. bis 12. Lebenswoche, je nach Entwicklungsstand und wie es bei Ihnen zeitlich
                  passt, darf der Welpe bei Ihnen einziehen.
                </p>
              </div>
            </div>

            {/* Erstausstattung */}
            <div className="text-center space-y-6">
              <h3 className="text-xl md:text-2xl font-heading text-accent">
                Unsere Erstausstattung
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
                {welpenImages.slice(7, 9).map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Erstausstattung ${i + 1}`}
                    className="w-full h-[250px] md:h-[350px] object-cover rounded-xl shadow-lg"
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Wurfplanung;
