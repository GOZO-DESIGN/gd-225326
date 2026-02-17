import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";

import heroImg from "@/assets/gesundheit/gesundheit-hero.webp";
import alopezieImg1 from "@/assets/gesundheit/Alopezie_x-1.webp";
import alopezieImg2 from "@/assets/gesundheit/Alopezie-x-2.webp";
import alopezieImg3 from "@/assets/gesundheit/Alopezie_x-3.webp";

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

const Gesundheit = () => {
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
          alt="Gesundheit des Pomeranians"
          className="relative w-full h-full object-contain"
        />
      </section>

      {/* Title bar */}
      <div className="bg-accent py-4 text-center">
        <h1 className="text-2xl md:text-3xl font-heading text-accent-foreground">
          Gesundheit und rassespezifische Krankheiten des Pomeranians
        </h1>
        <p className="text-sm md:text-base text-accent-foreground/80 mt-1">
          (Hypoglykämie, Patellaluxation, Alopezie X, Trachealkollaps)
        </p>
      </div>

      <main className="bg-primary-foreground py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 font-body text-muted-foreground leading-relaxed">

          {/* ───── HYPOGLYKÄMIE ───── */}
          <Section>
            <h2 className="text-2xl md:text-3xl font-heading text-foreground">
              Hypoglykämie beim Pomeranian (Unterzuckerung)
            </h2>
            <p>
              Hypoglykämie wird allgemein als niedrige Glukose oder niedriger Blutzucker beim Zwergspitz bezeichnet.
            </p>
            <p>
              Es kann in jedem Alter auftreten, kommt jedoch häufiger bei Welpen vor. Es kommt bei der Rasse Pomeranian nicht sehr häufig vor, aber es kommt vor, und es ist wichtig zu wissen, wie man es erkennt, um schnell zu handeln. Gutes und schnelles Handeln wird ihr Leben retten.
            </p>
            <p className="font-semibold text-destructive">
              Eine Hypoglykämie kann zum Tod des Welpen führen.
            </p>
            <p>
              Der beste Weg, dies zu vermeiden, besteht darin, sehr aufmerksam zu sein und sicherzustellen, dass unser Welpe bei jeder Fütterung seine gesamte Portion frisst. Wenn er bei einer Fütterung nicht frisst, können wir auf die nächste warten, aber wenn er bei der nächsten kein Interesse an Futter zeigt, müssen wir ihn dazu bringen, etwas zu essen. Egal ob Nassfutter, oder Babynahrung aus Reis mit Huhn, immer etwas ganz, ganz mildes, damit es dem Magen nicht schadet.
            </p>
          </Section>

          <Section>
            <h3 className="text-xl font-heading text-foreground">
              So erkennen Sie eine Hypoglykämie beim Zwergspitz
            </h3>
            <p>
              Die ersten Tage dienen dazu, Ihren Welpen kennenzulernen und zu erfahren, was seine normale Aktivität ist. Wenn Ihr Welpe sehr apathisch ist, nicht spielen möchte und viel schläft, könnte das ein Zeichen dafür sein, dass er an einer Unterzuckerung leidet. Im Zweifelsfall ist es besser, etwas Honig zu geben, das ist wirksamer und schneller als Zuckerwasser. Da Sie nun einen Welpen haben, wird empfohlen, Honig zu Hause zu haben. Wenn Sie es nicht haben, dann nehmen Sie alles, was Sie haben: gesüßten Joghurt, Zuckerwasser … Aber Honig ist ziemlich schnell und effektiv. Sie können dann feststellen, dass sich der Welpe in ein oder zwei Minuten verändert und fröhlicher, glücklicher und wacher aussieht. Wenn der Zustand des Niedergangs anhält, müssen Sie schnell zum Tierarzt fahren.
            </p>
            <p className="font-semibold text-foreground">
              Tragen Sie immer eine Einzeldosis Honig oder eine Packung Zucker in Ihrer Tasche. Es kann Ihnen außerhalb des Hauses passieren.
            </p>
            <p>
              Nutriplus-Gelpasten eignen sich auch sehr gut für Welpen, da sie neben Glukose auch Vitamine enthalten. Und Sie können es in Ihrer Tasche bei sich tragen.
            </p>
          </Section>

          {/* ───── PATELLALUXATION ───── */}
          <Section>
            <h2 className="text-2xl md:text-3xl font-heading text-foreground">
              Patellaluxation, sehr typisch bei kleinen Rassen
            </h2>

            <h3 className="text-xl font-heading text-foreground">Zuchtvereine</h3>
            <p>
              Kleinere Rassen wie unser Zwergspitz, den wir auch liebevoll Pom nennen, sind häufiger von PL betroffen. Aus diesem Grund werden PL Untersuchungen von den Zuchtverbänden vorgegeben, um eine ZUCHTTAUGLICHKEIT oder ZUCHTERLAUBNIS unserer jeweiligen Hündin/Rüden zu bekommen, teilweise müssen wir zu Ausstellungen fahren, wo ein Zuchtrichter sie bewertet. Zur Zucht werden ausschließlich nur PL freie Hunde und mit Grad 1 zugelassen (symptomfrei).
            </p>
            <p>
              Idealerweise sollte der Züchter seinen Hund mit Grad 1, z.&nbsp;B. auf der rechten Seite, „nur" mit einem Hund, der auf dem selben Hinterlauf den Befund Grad 0 hat, verpaaren. Die PL ist genetisch bedingt und kann vererbt werden.
            </p>
            <p>
              Bei privaten Züchtern bzw. Züchter ohne Vereinszugehörigkeit liegt es in eigener Verantwortung, eine PL Untersuchung machen zu lassen. Sie sollten mit schlechtem Befund nicht züchten!
            </p>
            <p>
              Betroffene Hunde (PL 2 bis 4) geben mit hoher Wahrscheinlichkeit die PL an ihre Nachkommen weiter. Hinzu kommt, dass diese Hündin in der Trächtigkeit zusätzliche Schmerzen durch die Überbelastung hat.
            </p>
            <p>
              PL tritt normalerweise in der Wachstumsphase auf, etwa nach 6 bis 9 Monaten. Ein späteres Auftreten von PL ist nicht ausgeschlossen.
            </p>
            <p>
              Eine Kniescheibenverrenkung kann sehr unterschiedliche Ursachen haben. Es gibt eine angeborene – im Fachjargon als kongenitale bezeichnet – also eine durch den Körperbau begünstigte – und eine durch einen Unfall verursachte, also traumatische Patellaluxation.
            </p>
            <p>
              Während die angeborene Verrenkung hauptsächlich bei jungen Hunden in der Wachstumsphase vorkommt und entweder nur an einem oder an beiden Hinterläufen auftreten kann, geht die traumatische Form meist mit einer weiteren Beschädigung des Kniegelenks einher.
            </p>
          </Section>

          <Section>
            <h3 className="text-xl font-heading text-foreground">
              Häufigste Ursachen von PL im Welpenalter – Haltungsfehler
            </h3>
            <p>
              Man hat nur einmal die Chance, unsere kleinen Lieblinge richtig wachsen zu lassen. Sie haben einen wunderschönen geschmeidigen Gang, aber noch sind ihre Knochen nicht richtig angepasst und fest. Die Knochen berühren sich noch nicht einmal. Ihre Gelenke bestehen aus Knorpel, Muskeln, Sehnen und hautüberzogenen Bändern. Jeder große Sprung, übertriebenes übermütiges Rennen usw. verursachen Einschläge zwischen den Knochen und die Gelenke werden geschädigt. Die Tierärzte nennen es traumatische Ereignisse, wie Unfälle oder Verletzungen:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>Ständiges Springen beim Betteln oder aufs Sofa/Bett springen</li>
              <li>Männchenmachen</li>
              <li>Regelmäßiges Treppen Auf- und Absteigen</li>
              <li>Ausgedehnte, dem Alter nicht angepasste Spaziergänge (zu weit oder/und zu schnell)</li>
              <li>Zu lange und wilde Tobephasen etc.</li>
              <li>Untergründe z.&nbsp;B. glatte Fliesen sollten ebenso gemieden werden</li>
            </ul>
          </Section>

          <Section>
            <h3 className="text-xl font-heading text-foreground">
              Andere Ursachen einer Patellaluxation beim Hund
            </h3>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>Eine genetische Disposition</li>
              <li>Fehlentwicklungen in der Wachstumsphase (zu flache Rollfurche, aus der die Kniescheibe leicht herausrutschen kann; eine zu große oder zu kleine Kniescheibe; Achsenfehlstellung der Hinterbeine)</li>
              <li>Starkes Übergewicht</li>
              <li>Wachstumsstörungen durch Ernährungsmangel im ersten Lebensjahr</li>
              <li>Natürlicher Verschleiß der Gelenke im Alter</li>
              <li>Eine mangelhaft ausgeprägte Muskulatur</li>
              <li>Zu schwaches Bindegewebe</li>
            </ul>
          </Section>

          <Section>
            <h3 className="text-xl font-heading text-foreground">Symptome</h3>
            <p>
              Eine typische Patellaluxation äußert sich in einem charakteristischen, hüpfenden Gang, bei dem der Hund das betroffene Hinterbein zeitweise oder vollständig entlastet. Je nach Grad der Ausrenkung hält er die Pfote ohne ersichtlichen Grund beim Laufen plötzlich angewinkelt hoch. Bei einer leichten Verrenkung dauert die Gang-Anomalie lediglich ein bis zwei Schritte, sonst läuft der Hund lahmheitsfrei weiter. Eine Kniegelenksverletzung höheren Grades kann sich in einer dauerhaften Lahmheit äußern. Bei der schwersten Ausprägung der Verrenkung läuft der Hund immer mit gebeugtem Kniegelenk.
            </p>
            <p>
              Fallen Ihnen die o.&nbsp;g. Symptome auf, sollte ein Tierarzt, spezialisiert auf PL, aufgesucht werden. Durch Abtasten stellt er fest, ob die Kniescheibe fest sitzt oder bestimmt den Grad der PL.
            </p>
          </Section>

          {/* PL-Grade */}
          <Section>
            <h3 className="text-xl font-heading text-foreground">Welche PL-Grade gibt es?</h3>
            <div className="space-y-4">
              <div className="bg-secondary/30 rounded-lg p-4">
                <p className="font-semibold text-foreground">PL frei 00/00</p>
                <p>Die Kniescheibe sitzt fest.</p>
              </div>
              <div className="bg-secondary/30 rounded-lg p-4">
                <p className="font-semibold text-foreground">Grad 1</p>
                <p>Kniescheibe luxiert, gleitet aber durch den Muskelzug zurück in die Normalposition, in die Führungsrinne. Der Hund zeigt kaum Symptome. Es ist kein weiterer Eingriff nötig.</p>
              </div>
              <div className="bg-secondary/30 rounded-lg p-4">
                <p className="font-semibold text-foreground">Grad 2</p>
                <p>Kniescheibe ist des Öfteren nicht in der Rinne und bleibt in Fehlposition stehen, gleitet also nicht selbständig zurück. Der Hund hinkt, hat ggf. starke Schmerzen und entlastet sein Bein. Durch aktiven Druck lässt sich die Patella zurückbewegen.</p>
              </div>
              <div className="bg-secondary/30 rounded-lg p-4">
                <p className="font-semibold text-foreground">Grad 3</p>
                <p>Die Kniescheibe luxiert permanent und kann nur durch starken Druck in die Standardposition zurück verlagert werden. Lässt der Druck nach, gleitet sie wieder in ihre Fehlstellung. Die Mobilität ist stark eingeschränkt.</p>
              </div>
              <div className="bg-destructive/10 rounded-lg p-4 border border-destructive/20">
                <p className="font-semibold text-foreground">Grad 4</p>
                <p>Die Kniescheibe verharrt dauerhaft in der Fehlstellung und lässt sich nicht wieder einrenken. Eine Operation ist in diesem Fall unumgänglich und umfasst meist auch noch eine begradigende Korrektur von Unter- und Oberschenkel, damit die Kniescheibe dauerhaft in der Gleitrinne bleibt.</p>
                <p className="mt-2">Bei der Luxation des 4. Grades haben viele Hunde allerdings gelernt, mit der luxierten Kniescheibe zu leben und gehen oft recht stabil, während erheblicher Gelenkverschleiß und massive Arthrose voranschreiten.</p>
              </div>
            </div>
          </Section>

          <Section>
            <h3 className="text-xl font-heading text-foreground">Therapie</h3>
            <p>
              In milden Fällen und je früher Sie bemerken, dass sich Ihr Zwergspitz zu verrenken beginnt, empfehlen wir Homöopathie. Speziell Graveolens Ruta (wirkt auf Bindegewebe, Sehnen, Gelenke, Knochen, Knochenhaut, Knorpel..)
            </p>
            <p>
              Alternativ können Nahrungsergänzungsmittel wie z.&nbsp;B. Grünlippmuschelpulver helfen. Das Naturprodukt hat sich als effektiver Gelenkschutz etabliert. Für unsere Welpen habe ich das Grünlippmuschel-Extrakt vorbeugend als Ergänzung zum Futter gegeben, um den Aufbau eines stabilen Bewegungsapparates zu unterstützen.
            </p>
            <p>
              In Verbindung mit der richtigen Bewegung und auch Physiotherapie lassen sich vor allem bei jungen Hunden Erfolge erzielen. Bei älteren Hunden wird durch die Zufütterung eine Verbesserung der Beweglichkeit beobachtet.
            </p>
            <p>
              Eine dauerhafte oder wiederkehrende Patellaluxation (Grad 3 + 4) hat oftmals Veränderungen am umliegenden Gewebe oder in der Beinstellung zur Folge. In diesen Fällen ist fast immer eine Operation notwendig um den Hund von den ständigen Schmerzen zu befreien.
            </p>
            <p className="font-semibold text-foreground">
              Wir empfehlen für solchen Notfall eine OP-Versicherung, um die hohen anfallenden Kosten beim Tierarzt/Tierklinik decken zu können.
            </p>
          </Section>

          {/* ───── ALOPEZIE X ───── */}
          <Section>
            <h2 className="text-2xl md:text-3xl font-heading text-foreground">Alopezie X</h2>
            <p>
              Alopecia X beim Pomeranian oder BSD (Pomeranian Black Skin Disease) ist eine Hautkrankheit, die die nordischen Rassen betrifft, unter denen die Rasse Pomeranian am meisten betroffen ist.
            </p>
            <p>
              Sie wird Alopezie X genannt, weil der Ursprung der Krankheit unbekannt ist, daher das X.
            </p>
            <p>
              Sie wird auch als schwarze Hautkrankheit (Black Skin Disease) gekennzeichnet durch Hyperpigmentierung und Elastizitätsverlust der Haut, vollständigem oder teilweisen Haarausfall. Rüden sind davon stärker betroffen als Hündinnen.
            </p>
            <p>
              Am häufigsten beginnt Alopezie bei Pomeranians im Alter von eineinhalb bis zwei Jahren, obwohl sie in jedem Alter auftreten kann. Es gibt Faktoren, die die Krankheit auslösen können, z.&nbsp;B. ein Nachlassen der Abwehrkräfte oder ein schlechter Haarschnitt.
            </p>
          </Section>

          <Img src={alopezieImg1} alt="Alopezie X beim Pomeranian" />

          <Section>
            <h3 className="text-xl font-heading text-foreground">Wie erkennt man Alopezie X?</h3>
            <p>
              Wenn Sie vorbereitet und vorgewarnt sind, ist Vorbeugen besser als Heilen und erspart uns eine Menge Ärger.
            </p>
            <p>Ein sehr deutliches Symptom für diese Krankheit ist, wenn:</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>die Haare des Pomeranians an den Ohren und Pfoten nicht mehr normal wachsen</li>
              <li>nach einem Haarschnitt das Fell nicht normal wächst, die Wolle immer enger und sehr kurz wird und beginnt auszufallen</li>
            </ul>
          </Section>

          <Img src={alopezieImg2} alt="Alopezie X Symptome" />

          <Section>
            <p>
              Ein weiteres Symptom ist, dass das Fell um den Schwanz herum dunkler wird. Sehr charakteristisch vor der Krankheit. Eine extreme Trockenheit des Fells deutet auf Probleme hin, und wir haben es möglicherweise mit einer Alopecia X oder BSD zu tun.
            </p>
            <p>
              Ein weiteres Anzeichen sind kahle Stellen, in der Regel an den Hinterbeinen im Genital- oder Schwanzbereich, aber auch an anderen Stellen können sie auftreten sowie braune oder dunkle (schwarze) Flecken, wie Muttermale auf der Haut.
            </p>
          </Section>

          <Img src={alopezieImg3} alt="Alopezie X Verlauf" />

          <Section>
            <h3 className="text-xl font-heading text-foreground">
              Wichtige Tipps zur Vermeidung von Alopezie X
            </h3>
            <p>
              Wir möchten Ihnen einige Empfehlungen geben, die Ihrem Pomeranian zu einem stärkeren Immunsystem verhelfen können – um die Krankheit zu vermeiden oder zu bekämpfen.
            </p>
            <p>
              Wir empfehlen für Pomeranians eine natürliche Ernährung auf Basis von rohem Fleisch. Im Internet finden Sie zahlreiche Informationen darüber. Es gibt auch viele Seiten, auf denen diese Lebensmittel bereits zubereitet verkauft werden. Sie haben dadurch keine Arbeit mit der Recherche, wie füttere ich ROH RICHTIG und zu welchen Prozentsätzen bzw. Mengenangaben. Dies ist die Option, die wir empfehlen, wenn Sie Anfänger in der natürlichen Ernährung sind.
            </p>
            <p>
              Das normale Hundefutter wird von vielen Herstellern angeboten in unterschiedlicher Qualität. Es ist viel bequemer, enthält aber viele Kohlenhydrate, die schädlich sind, da sie den Pilz, der die Haut des Pomeranians befällt, mit Zucker füttern. Außerdem wird das Immunsystem geschädigt.
            </p>
            <p>
              Vorübergehend können wir unserem Pomeranian mit einem Darmpro- und -präbiotikum helfen, das der Vermehrung von Pilzen und Bakterien entgegenwirkt und stärken damit auch das Immunsystem.
            </p>
            <p>
              Wenn Sie Ihren Pom in Form schneiden lassen möchten, empfehlen wir zu einem professionellen Hundefriseur zu gehen, der auf Pomeranians spezialisiert ist. Ein falscher und zu kurzer Haarschnitt, der die Unterwolle beschädigt, führt zu Haarausfall. Die Haut könnte strapaziert werden und reagiert früher oder später drauf. Die wunderschöne rosa Haut wird trocken, stumpf und schwarz, wie eine schwarze Lederhaut.
            </p>
            <p className="font-semibold text-foreground">
              Bis Ihr Pom wieder seine wunderschöne gesunde rosa Haut mit glänzendem langen flauschigen Fell bekommt ist es ein langer Weg – die Behandlung ist sehr mühselig und langwierig.
            </p>
          </Section>

          {/* ───── TRACHEALKOLLAPS ───── */}
          <Section>
            <h2 className="text-2xl md:text-3xl font-heading text-foreground">
              Trachealkollaps (Einsturz der Luftröhre)
            </h2>
            <p>
              Eine Verengung der Luftröhre kommt bei kleinen Rassen häufig vor, was manchmal in Kombination mit einem „ZU KLEINEN ZWERGSPITZ" zu Atembeschwerden führen kann. 25&nbsp;% der betroffenen Hunde zeigen Symptome in den ersten 6 Lebensmonaten.
            </p>
            <p>
              Die Wände der Luftröhre reiben beim Atmen aneinander. Durch erschwertes Atmen kommt es zu Erstickungsanfällen. Durch die chronische Verengung der Atemwege können auch Veränderungen von Herz und Leber auftreten.
            </p>
          </Section>

          <Section>
            <h3 className="text-xl font-heading text-foreground">
              Was versteht man unter einem Trachealkollaps?
            </h3>
            <p>
              Bei den betroffenen Hunden ist die Luftröhre flach ausgebildet. Die Wände der Trachea reiben beim Atmen aneinander. Das Flimmerepithel wird chronisch gereizt. Schon ein leichter Druck auf die Luftröhre durch Halsbänder oder starke Erregung führt zu Hustenanfällen. Durch die Reizung des Epithels wird verstärkt Schleim gebildet. Der Hund versucht den Schleim auszuhusten. Durch den Husten verstärkt sich die Reizung des Epithels.
            </p>
          </Section>

          <Section>
            <h3 className="text-xl font-heading text-foreground">Auswirkungen im Körper</h3>
            <p>
              Die Knorpelringe der Luftröhre verlieren an Elastizität. Da der Anteil an Glykosaminoglykanen verringert ist, kann der Knorpel nicht mehr genügend Wasser speichern. Der Durchmesser der Luftröhre nimmt immer mehr ab. Bei der Ein- und Ausatmung entstehen Luftwirbel. Die Lunge kann nur schwerer mit Luft gefüllt werden. Im Brustkorb muss ständig ein hoher Unterdruck bei der Einatmung erzeugt werden. Die Lungenbläschen werden immer wieder überdehnt – ein Lungenemphysem entsteht.
            </p>
            <p>
              Da die Wände der Trachea ständig aneinander reiben, wird das Flimmerepithel durch Degeneration zerstört. Die Drüsen bilden verstärkt zähen Schleim. POLYPEN können entstehen.
            </p>
          </Section>

          <Section>
            <h3 className="text-xl font-heading text-foreground">Symptome</h3>
            <p>
              Da der Kollaps der Luftröhre nur langsam voranschreitet, treten für längere Zeit keine Symptome auf. Eventuell bemerken Sie bei Anstrengung oder Druck auf die Luftröhre leichte Hustenanfälle. Am Anfang ist der Husten noch trocken. Erst mit der Poliferation der Schleimdrüsen wird verstärkt Sekret ausgehustet. Die Atemfrequenz ist erhöht. Die Leistungsfähigkeit Ihres Hundes ist verringert. Durch Sauerstoffmangel sind die Schleimhäute und Zunge blau gefärbt.
            </p>
            <p>In welcher Phase der Atmung können Symptome auftreten?</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>Bei der Einatmung: der Halsabschnitt der Luftröhre ist betroffen</li>
              <li>Bei der Ausatmung: der Brustbereich der Trachea kollabiert</li>
            </ul>
          </Section>

          <Section>
            <h3 className="text-xl font-heading text-foreground">Diagnose</h3>
            <p>
              Liegt die Veränderung der Trachea im Halsbereich, können die weichen Ringe der Luftröhre durch Tasten diagnostiziert werden. Beim Abtasten wird Husten ausgelöst. Mit einem Röntgenbild kann nicht immer eine zuverlässige Diagnose gestellt werden, da die Luftröhre nicht dauerhaft zusammengefallen ist.
            </p>
            <p>
              Die Diagnose muss daher mit einer Computertomographie (inspiratorischen und exspiratorischen CT) abgesichert werden. Zusätzlich sollte eine Endoskopie durchgeführt werden, um den Schweregrad des Kollaps besser einschätzen zu können. Grundsätzlich wird anhand der Tracheobronchoskopie die Erkrankung in vier Grade eingeteilt, wobei Grad 1 klinisch belanglos ist.
            </p>
          </Section>

          <Section>
            <h3 className="text-xl font-heading text-foreground">Therapie</h3>
            <p>
              Konsultieren Sie Ihren Tierarzt, es gibt konservative Maßnahmen und Operationen, die in manchen Fällen eines Luftröhrenkollaps beim Zwergspitz sehr hilfreich sein können.
            </p>
            <p className="font-semibold text-foreground">
              UNSERE EMPFEHLUNG in diesem Zusammenhang ist, Ihren Zwergspitz immer im optimalen Gewicht zu halten, insbesondere wenn er an einer Atemwegserkrankung leidet. Poms, die ihr Gewicht halten, atmen viel besser.
            </p>
          </Section>

        </div>
      </main>

      <Footer />
    </>
  );
};

export default Gesundheit;
