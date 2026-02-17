import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import heroImg from "@/assets/wissen/erziehung-hero.avif";

const Section = ({ children }: { children: React.ReactNode }) => (
  <AnimateOnScroll variant="fade-up">
    <div className="space-y-6">{children}</div>
  </AnimateOnScroll>
);

const WissenHundeerziehung = () => {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative h-[400px] md:h-[650px] overflow-hidden">
        <img src={heroImg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover scale-110 blur-xl opacity-60" />
        <img src={heroImg} alt="Hundeerziehung & Hundeschule" className="relative w-full h-full object-contain" />
      </section>

      {/* Title bar */}
      <div className="bg-accent py-8 md:py-12 text-center">
        <h1 className="text-2xl md:text-4xl font-heading text-accent-foreground max-w-3xl mx-auto px-4">
          Hundeerziehung &amp; Hundeschule
        </h1>
      </div>

      <main className="bg-primary-foreground py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 font-body text-muted-foreground leading-relaxed">

          {/* Moderne Erziehungsmethoden */}
          <Section>
            <h2 className="text-2xl md:text-3xl font-heading text-foreground">
              Moderne Erziehungsmethoden
            </h2>
            <p>
              Moderne Erziehungskonzepte basieren auf die Erkenntnis, dass Hunde leichter und nachhaltiger lernen, wenn sie nicht „untergeordnet", sondern für das gewünschte Verhalten belohnt werden. Eine Erziehung mit positiven Verstärkern, wie z.&nbsp;B. ausgiebiges Lob, Futter oder Spielzeug als Belohnung, funktioniert am nachhaltigsten. Der Hund lernt mit guten Emotionen, ist motiviert bei der Sache und die Bindung zwischen Hund und Mensch festigt sich. Hilfreich ist dabei auch ein Clicker als neutrales Belohnungssignal: Hierbei werden Hunde darauf konditioniert, dass unmittelbar nach jedem Klick eine Belohnung folgt.
            </p>
            <p>
              Unerwünschtes Verhalten ignoriert der Halter/die Halterin weitgehend, was selbstverständlich nicht heißt, dass es nicht sinnvoll ist, das unerwünschte Verhalten zu unterbrechen, damit der Hund es sich nicht weiter einprägt. Möglich ist das, indem der Halter/die Halterin die Emotion des Hundes ins POSITIVE wendet und ein vorher gut trainiertes Abbruchsignal bzw. eine Alternativhandlung anwendet.
            </p>
            <p>
              Wenn z.&nbsp;B. der Hund an der Leine tobt, sobald ein Artgenosse in Sichtweite ist, haben Halter/innen 3 Möglichkeiten:
            </p>
            <ul className="list-decimal list-inside space-y-2 pl-4">
              <li>Geben Sie Ihrem Hund etwas besonders Attraktives, wenn ein anderer Hund auftaucht, damit aus der schlechten Emotion eine positive wird.</li>
              <li>Setzen Sie ein vorher eingeübtes Abbruchsignal wie z.&nbsp;B. AUS oder NEIN ein.</li>
              <li>Geben Sie ein Kommando für eine gut eingeübte Alternativhandlung wie „Sitz" oder „Platz".</li>
            </ul>
            <p className="font-semibold text-foreground">
              WICHTIG: Ihr Hund wird direkt belohnt, wenn er keine negativen Reaktionen mehr zeigt (möglichst in den nächsten 1–2 Sekunden).
            </p>
            <p>
              Klare Regeln, auch das Trainieren von einfachen Übungen wie z.&nbsp;B. Hinsetzen, Hinlegen und Herankommen auf Zuruf, erleichtern das Zusammenleben von Hund und Mensch erheblich.
            </p>
            <p>
              Die Kunst hierbei ist es, den richtigen Zeitpunkt für Lob und Korrektur zu finden. Damit der Vierbeiner Lob und Tadel mit seinem eigenen Verhalten verbindet, muss er die Ansprache unmittelbar nach seiner Aktion hören. Hunde lernen nämlich, indem sie zwei nahe aufeinanderfolgende Ereignisse miteinander verknüpfen.
            </p>
            <p className="italic">
              Einen Hund für etwas belohnen oder zu bestrafen, was einige Minuten oder länger zurückliegt, ist daher sinnlos und führt nur zu Verwirrungen.
            </p>
          </Section>

          {/* Sachkundige Erziehung */}
          <Section>
            <h2 className="text-2xl md:text-3xl font-heading text-foreground">
              Worauf kommt es bei der sachkundigen Erziehung eines Hundes an?
            </h2>
            <p>
              Wer seinen Hund erfolgreich erziehen will, sollte am besten gewisse Kenntnisse und Empathie mitbringen und dafür sorgen, dass der Vierbeiner tiergerecht aufgezogen und gehalten wird. Dazu gehört auch, dass er lernt, sich in einem sozialen Umfeld zu integrieren.
            </p>
            <p>
              Das Wohlbefinden des Hundes spielt dabei eine wichtige Rolle. Wird er unter Druck gesetzt, kann die Erziehung nicht erfolgreich verlaufen. Damit Halter/innen richtig einschätzen können, wie es dem Hund geht, müssen sie das arttypische Verhalten, also die Sprache des Hundes kennen und richtig deuten können.
            </p>
            <p className="font-semibold text-foreground">
              Nur wenn der Hund sich sicher und wohl fühlt, kann er auch gut erzogen werden.
            </p>
          </Section>

          {/* Beschäftigung */}
          <Section>
            <h2 className="text-2xl md:text-3xl font-heading text-foreground">
              Beschäftigung: Ein Mix aus Spiel und Bewegung
            </h2>
            <p>
              Die aktive Fellnase ist für jeden Spaß zu haben: Der Pom hat viel Energie und möchte diese beim Spielen oder bei regelmäßigen Spaziergängen loswerden. Die Freude ist groß, wenn Ihr Pom Sie bei all Ihren Abenteuern begleiten darf. Dank seiner Größe und seines Gewichts ist dies problemlos möglich. Für einen ausgeglichenen Hund können Sie neben genügend Auslauf auch mit anderen Beschäftigungsmöglichkeiten wie Agilität, Dogdancing oder Obedience sorgen. Sogar kleine Kunststücke kann Ihr kleiner Begleiter erlernen.
            </p>
            <p>
              Ihr Pom wird bei diesen Konzentrations- und spielerischen Sportübungen mit Begeisterung mitmachen, denn Frauchen/Herrchen beschäftigt sich intensiv mit ihm. Ihre geliebte kleine Fellnase wird ausgeglichener werden und die Bindung zwischen Ihnen beiden wird weiter wachsen und sich noch mehr festigen.
            </p>
          </Section>

          {/* Hundeschule */}
          <Section>
            <h2 className="text-2xl md:text-3xl font-heading text-foreground">
              Hundeschule
            </h2>
            <p>
              Folgsame, gut sozialisierte Hunde, die gelernt haben sich in unserem Alltag zurechtzufinden, bereichern nicht nur das Leben der Hundeeltern, sondern verbessern in hohem Maße die Akzeptanz der Hundehaltung in unserer Gesellschaft. Aber lernen muss Spaß machen, wenn es effektiv sein soll. Das geht nur in angenehmer freundlicher Umgebung mit freudigen Hunden und entspannten Besitzern.
            </p>
            <p>
              Das Angebot an Welpen- und Hundeschulen ist riesengroß, die Qualität der Ausbildung und die Qualifikation der Trainer/innen sind jedoch recht unterschiedlich!
            </p>
            <p className="font-semibold text-foreground">
              Wir wollen Ihnen helfen, für Ihren Hund und für sich die richtige Wahl zu treffen.
            </p>
          </Section>

          {/* Darauf achten */}
          <Section>
            <h3 className="text-xl font-heading text-foreground">Darauf sollten Sie achten</h3>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Zu Beginn erfolgt eine theoretische Einführung. In den Folgestunden wird viel erklärt und Ihre Fragen werden beantwortet.</li>
              <li>Die Welpen sollten möglichst zwischen 8 und 16 Wochen alt sein.</li>
              <li>Nur gesunde, entwurmte und geimpfte Hunde sollten an der Stunde teilnehmen.</li>
              <li>Ein Trainer betreut max. 5 bis 6 Welpen, die er sowohl nach Größe und Alter, wie auch nach innerer Reife und Temperament gruppiert.</li>
              <li>Wünschenswert ist die Anwesenheit eines erfahrenen älteren Hundes, der die kleinen Draufgänger wenn nötig in ihre Schranken weist.</li>
              <li>Eine Welpenstunde (optimal 2-mal pro Woche) sollte 60 Minuten nicht überschreiten und mit einem für den Hund positiven Erlebnis enden.</li>
              <li>Wichtig ist ein Wechsel zwischen Spielphasen, kleinen zwanglosen Gehorsamsübungen und Verschnaufpausen, denn müde und überdrehte Welpen können nicht lernen!</li>
              <li>Die Welpen müssen Gelegenheit bekommen, unterschiedliche Dinge und Situationen aus dem alltäglichen Leben kennenzulernen (z.&nbsp;B. verschiedene Untergründe, Hindernisse, Wasser, Flatterbänder, Planen, Geräusche, Fahrzeuge, Hunde anderer Rassen, andere Tiere, Umgang mit Kindern usw.).</li>
              <li>Die Trainer/innen scheuen sich nicht, Grenzen im Training aufzuzeigen und versprechen nicht von vornherein, jegliche Problemfälle vollständig zu resozialisieren.</li>
              <li>Bevor Sie mit Ihrem Hund eine Welpengruppe besuchen, lassen Sie ihm bis zu 3 Wochen Zeit, sich an sein neues Zuhause zu gewöhnen.</li>
            </ul>
          </Section>

          {/* Wichtige Kriterien */}
          <Section>
            <h3 className="text-xl font-heading text-foreground">
              WICHTIGE KRITERIEN einer gut geführten Hundeschule
            </h3>
            <p>
              Die Schulen bieten auch extra Schnupperstunden an, damit die Hundehalter/innen einen Eindruck von der Arbeit gewinnen können.
            </p>

            <div className="bg-destructive/10 rounded-lg p-5 border border-destructive/20 space-y-3">
              <p className="font-semibold text-foreground">GUTE TRAINER/INNEN …</p>
              <p>
                … arbeiten auf Basis verhaltensbiologischer Grundlagen und verzichten auf veraltete Erziehungskonzepte. Sie arbeiten nach modernen Erziehungsmethoden über positive Stärkung. Sie wenden niemals negative tierschutzwidrige Maßnahmen an wie Zwang, Druck und Gewalt und setzen keine tierschutzwidrigen Hilfsmittel wie Zug- und Kettenhalsbänder, Würgehalsbänder, kein Einsatz von Reizstromgeräten für die Alltagserziehung usw. – Methoden, die dem Tier Schmerzen, psychische oder physische Leiden zufügen können. <span className="font-semibold">Das ist ein TABU.</span>
              </p>
              <p>
                Sie verwenden KEINE Begriffe wie „Alphatier, Rudel, vererbte bzw. angeborene Rudelstellung, Unterordnung oder Welpenschutz".
              </p>
            </div>

            <ul className="list-disc list-inside space-y-3 pl-4">
              <li>Die Hundeschule und ihre Trainer/innen können Qualifikationen in THEORIE UND PRAXIS nachweisen. Um eine Hundeschule zu betreiben, ist gemäß dem Tierschutzgesetz ein Sachkundenachweis erforderlich, den die zuständige Veterinärbehörde ausstellt.</li>
              <li>Die Trainer/innen erkundigen sich nach dem Gesundheitszustand und die Vorgeschichte des Hundes. Dementsprechend können sie auf ihn individuell eingehen.</li>
              <li>Die Trainer/innen arbeiten gemeinsam mit Hund und Mensch. Sie binden die Halter/innen aktiv mit ein, erklären das Verhalten, das sie beobachten, gehen auch sachlich und verständlich auf ihre jeweilige Vorgehensweise ein. Außerdem vermeiden sie vorschnelle Interpretationen, wonach der Hund z.&nbsp;B. traurig, besorgt oder nachtragend sei.</li>
              <li>In der Erziehung arbeiten die Trainer/innen vor allem mit positiven Verstärkern und belohnen die Hunde mit Futter, Lob oder Zuwendung, wenn sie sich wie gewünscht verhalten. Reagiert der Hund hingegen anders als gewollt, ignorieren die Trainer/innen sein Verhalten und bringen dem Vierbeiner als Antwort auf den negativen Reiz eine alternative Verhaltensweise bei.</li>
              <li>Die Trainer/innen begrenzen ihre Lerngruppe auf 6 bis 8 Hunde und stellen ihre Gruppe nach Alter und Können zusammen.</li>
              <li>Geübt wird nicht nur auf dem Trainingsplatz, sondern in unterschiedlicher Umgebung.</li>
              <li>Begleitend zur Praxis erfolgt die theoretische Wissensvermittlung über Hundeverhalten, Lerntheorie, Auftritt des Hunde-Halter-Gespanns in der Öffentlichkeit, Besprechen der Lernziele und wie sie erreicht werden können.</li>
            </ul>

            <p>
              Natürlich können Sie auf der Suche nach guten Hundeerzieher/innen (Hundeschulen) auch örtliche Tierschutzvereine und Ihren Tierarzt des Vertrauens zurate ziehen. Diese können Ihnen oft gute geeignete Hundeschulen oder Verhaltenstherapeuten in der Umgebung empfehlen. Wenn Sie sich gut informieren und prüfen, ob die Hundeschule die genannten Kriterien erfüllt, werden Sie und Ihr Hund mit Sicherheit ein gutes Team.
            </p>
          </Section>

          <p className="text-sm italic text-muted-foreground">
            Quelle: smile.tierliebe.de · Deutscher Tierschutz e.V.
          </p>

        </div>
      </main>

      <Footer />
    </>
  );
};

export default WissenHundeerziehung;
