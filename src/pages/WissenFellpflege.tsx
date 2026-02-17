import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import SEOHead from "@/components/SEOHead";
import heroImg from "@/assets/wissen/fellpflege-hero.webp";

const Section = ({ children }: { children: React.ReactNode }) => (
  <AnimateOnScroll variant="fade-up">
    <div className="space-y-6">{children}</div>
  </AnimateOnScroll>
);

const WissenFellpflege = () => {
  return (
    <>
      <SEOHead title="Fellpflege beim Pomeranian – Fellwechsel & Pflege" description="Alles zur Fellpflege und Fellwechsel beim Pomeranian. Die Äffchenphase, richtige Pflege und Tipps für ein gesundes Fell." canonical="https://www.pomeranianzucht-sachsen-anhalt.de/wissen/fellpflege" />
      <Navbar />

      {/* Hero */}
      <section className="relative h-[400px] md:h-[650px] overflow-hidden">
        <img src={heroImg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover scale-110 blur-xl opacity-60" />
        <img src={heroImg} alt="Fellpflege beim Pomeranian" className="relative w-full h-full object-contain" />
      </section>

      {/* Title bar */}
      <div className="bg-accent py-8 md:py-12 text-center">
        <h1 className="text-2xl md:text-4xl font-heading text-accent-foreground max-w-3xl mx-auto px-4">
          Fellpflege, Fellwechsel
        </h1>
        <p className="text-sm md:text-base text-accent-foreground/80 mt-2">
          Fellwechsel / Äffchenphase &amp; die richtige Pflege
        </p>
      </div>

      <main className="bg-primary-foreground py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 font-body text-muted-foreground leading-relaxed">

          {/* ───── Fellwechsel / Äffchenphase ───── */}
          <Section>
            <h2 className="text-2xl md:text-3xl font-heading text-foreground">
              Fellwechsel / Äffchenphase
            </h2>
            <h3 className="text-xl font-heading text-foreground">
              In welchem Alter verliert der Zwergspitz sein Fell?
            </h3>
            <p>
              Im Alter zwischen 4 und 6 Monaten beginnt der Fellwechsel (Haarausfall), je nach Exemplar früher oder später, auch die Farbe kann sich verändern.
            </p>
            <p>
              Wenn sich in dieser Zeit das Fell zu verändern beginnt, verliert er seine Haare und er bekommt ein Äffchengesicht, wie wir normalerweise sagen. Durch den Haarausfall wirken die Beine optisch länger. Sie werfen die Wolle weg, um Platz für stärkeres Haar zu machen.
            </p>
            <p>
              Es ist eine natürliche Phase, die jeder durchlaufen muss, aber seien Sie nicht beunruhigt! Nach ein paar Monaten erscheinen die erwachsenen Haare und sie erhalten ihr rundes volleres Aussehen zurück.
            </p>
          </Section>

          {/* Wie helfen? */}
          <Section>
            <h3 className="text-xl font-heading text-foreground">
              Wie kann man dem Zwergspitz beim Fellwechsel helfen?
            </h3>
            <p>
              Die Verwendung eines Pflegesprays und tägliches Bürsten gegen den Strich ist wichtig, um das Baby-/Welpenfell zu entfernen und begünstigen einen schnelleren Haarausfall/Fellwechsel. Das Haarwachstum wird dadurch ebenso unterstützt und gefördert.
            </p>
            <p>
              Es ist auch ratsam, sie während dem Fellwechsel alle 2 bis 3 Wochen mit feuchtigkeitsspendenden Produkten zu baden, um ihnen dabei zu helfen, die Welpenhaare abzuwerfen und den erwachsenen Haaren das Austreten zu ermöglichen.
            </p>
            <div className="bg-destructive/10 rounded-lg p-5 border border-destructive/20">
              <p className="font-semibold text-foreground">ABER:</p>
              <p>
                Wird die Fellpflege nicht korrekt durchgeführt, kann der Fellwechsel länger andauern. Der Pomeranian wird länger gerupft und wie ein Äffchen aussehen.
              </p>
              <p className="mt-2">
                Da zum Beispiel das lose Fell nicht regelmäßig oder korrekt ausgebürstet wird, sondern nur nach und nach von selber ausfällt, wird er in Ihren Augen unaufhörlich haaren. Es kann zu trockener, juckender und schuppiger Haut kommen.
              </p>
            </div>
          </Section>

          {/* Wie lange? */}
          <Section>
            <h3 className="text-xl font-heading text-foreground">
              Wie lange dauert der Fellwechsel?
            </h3>
            <p>
              Der Fellwechsel dauert normalerweise etwa 3–4 Monate. Ab dem 8. bis 10. Lebensmonat ist der Fellwechsel normalerweise abgeschlossen und das Fell ist bereits ausgewachsen.
            </p>
            <p className="font-semibold text-foreground">
              ABER: Bis zum Alter von 3 Jahren werden die Haare weiter ausgefüllt und noch voller. Auch der Körper wird noch etwas kräftiger/kompakter. Der Zwergspitz hat sich nun vollständig entwickelt und wir können sagen, dass er bereits sein gesamtes erwachsenes Haar hat.
            </p>
            <p>In diesem Alter sind sie einfach spektakulär.</p>
          </Section>

          {/* ───── Farbveränderung ───── */}
          <Section>
            <h2 className="text-2xl md:text-3xl font-heading text-foreground">
              Farbveränderung im Fellwechsel
            </h2>
            <p>
              Viele Pomeranians verändern ihre Haarfarbe vom Welpen zum erwachsenen Hund. Weiße, schwarze, schokoladenfarbene und schwarzbraune Pomeranians ändern ihre Farbe vom Welpen zum erwachsenen Hund nicht.
            </p>
            <p>
              Wenn das neue Haar erscheint, ist es bei orangefarbenen und roten Pomeranians normalerweise eine viel intensivere Farbe.
            </p>
            <p>
              Viele Welpen sind gräulich mit einigen orangefarbenen Anteilen. Diese Farbe ändert sich, bis sie zu einem mehr oder weniger intensiven Orange oder Rot wird. Diese Änderung wird normalerweise bei der ersten Fellwechsel des Pomeranians vorgenommen.
            </p>
            <p>
              Es gibt Welpen, die cremefarben geboren werden und als Erwachsene auch Orange sind. Damit ein cremefarbener Pomeranian-Welpe als Erwachsener auch die Farbe Creme hat, muss er als Welpe fast weiß-cremefarben sein.
            </p>
          </Section>

          {/* Die Veränderung ab dem ersten Jahr */}
          <Section>
            <h3 className="text-xl font-heading text-foreground">
              Die Veränderung ab dem ersten Jahr
            </h3>
            <p>
              Im Alter von etwa einem Jahr haaren fast alle Zwergspitzhunde erneut, manche genauso stark oder mehr als der Welpe. Sie verlieren ihre Wolle wieder und haben dünneres, glatteres Haar.
            </p>
            <p>
              Es ist normal, dass das Fell am Kopf und an den Ohren am längsten zum Füllen braucht.
            </p>
            <p>
              Wenn das neue Haar kommt, ist es stärker und härter und kommt zunächst, da es keine Wolle hat, abgeflacht heraus. Es ist normal, dass die Wolle mit zunehmendem Wachstum an Fülle und Volumen gewinnt.
            </p>
            <p>
              Es ist völlig normal und natürlich, dass ein einjähriger Zwergspitz nicht wie ein Ball aussieht. Man muss ihm Zeit geben, seine Haare wieder herzustellen, um wieder wie ein echter Pomeranian auszusehen!
            </p>
          </Section>

          {/* Pommersche Farben */}
          <Section>
            <h2 className="text-2xl md:text-3xl font-heading text-foreground">
              Pommersche Farben
            </h2>
            <p>
              Einer der Gründe, die die Pomeranian-Rasse so besonders machen, sind seine Farben. So spektakulär das Haar ist, so macht ihn auch die Vielfalt seiner Farben zu einer der begehrtesten Rassen.
            </p>
            <p className="font-semibold text-foreground">
              Der Pomeranian ist in all seinen Farben wunderschön.
            </p>
            <p>Die Farben des Pomeranians werden unterteilt in:</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>Orange, Rot, Weiß (Reinweiß), Schwarz, Braun (Schokolade), graugewolkt und andersfarbig</li>
            </ul>
            <p>Die klassische Farbe für den Zwergspitz ist übrigens Orange.</p>
            <p>
              Andersfarbige Spitze: creme, creme-sable, orange-sable, black &amp; tan, merle und Schecken (Particolor).
            </p>
          </Section>

          {/* ───── Die richtige Fellpflege ───── */}
          <Section>
            <h2 className="text-2xl md:text-3xl font-heading text-foreground">
              Die richtige Fellpflege beim Pomeranian
            </h2>
            <p>
              Für neue Pomeranian-Eltern ist die „richtige" Fellpflege und vor allem mit den richtigen Pflegeprodukten ein wichtiges Thema.
            </p>
            <p>
              Das Fell des Pomeranian besteht aus zwei Lagen, der dichten flauschigen Unterwolle und dem festen, glänzenden Oberhaar. Das doppelte Fell schützte sie gut vor Kälte und Hitze, aber auch vor Verletzungen durch dornige Büsche und Zweige.
            </p>
            <p>
              In Bezug auf Pomeranians ist es ein Mythos, dass häufiges Baden das Fell oder die Haut reizt und beschädigt.
            </p>
            <p>
              Regelmäßiges Waschen mit den richtigen Pflegeprodukten stimuliert das Haarwachstum und hält die Haut und das Fell gesund. Schuppige und trockene Haut ist zumeist das Ergebnis von falscher Ernährung oder qualitativ schlechten Shampoos.
            </p>
            <p>Regelmäßiges Baden, vor allem mit den richtigen feuchtigkeitsspendenden Produkten, kann dazu beitragen:</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>Hautprobleme (Juckreiz, Schuppen und Entzündungen) zu vermeiden oder zu lindern</li>
              <li>Durchblutung der Haut des Hundes anzuregen</li>
              <li>Parasiten wie Flöhe, Zecken und Milben zu erkennen, entfernen oder abzutöten</li>
              <li>Immunsystem des Hundes zu stärken, sodass er sich insgesamt wohler fühlt</li>
            </ul>
            <p>
              Nach einem Wellnessprogramm „Baden/Duschen, Abtrocknen, Föhnen und Bürsten/Kämmen" fühlt sich Ihr Hund wohler. Es wurden Schmutz, Öle und mögliche allergische Auslöser entfernt. Parasiten wurden beim Baden/Föhnen besser erkannt und entfernt.
            </p>
          </Section>

          {/* Baden/Duschen */}
          <Section>
            <h3 className="text-xl font-heading text-foreground">
              Baden/Duschen Ihres Welpen
            </h3>
            <p>
              Sobald ein Pomeranian-Welpe anfängt das Unterfell zu verlieren (ab einem Alter von etwa 3 bis 4 Monaten), empfehlen wir, ihn einmal alle zwei Wochen zu baden. Das Baden hilft, das Welpenfell zu entfernen, damit das „Erwachsenenfell" wachsen kann.
            </p>
            <p>
              Das Baden soll eine ruhige und positive Erfahrung für Ihren Pom sein. Am besten eignet sich dafür eine Badewanne, damit er nicht weglaufen oder runterfallen/-springen kann. Legen Sie bitte eine rutschfeste Matte auf den Boden der Badewanne, damit er nicht wegrutscht.
            </p>
          </Section>

          {/* Empfehlung zum Baden */}
          <Section>
            <h3 className="text-xl font-heading text-foreground">
              Unsere Empfehlung zum Baden/Duschen Ihres Poms/Welpen im Fellwechsel
            </h3>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Bürsten Sie Ihren Pom vor dem Baden gründlich (bis zur Haut), da sich sonst das Fell beim Baden verknoten/verfilzen könnte.</li>
              <li>Machen Sie Ihren Pom/Welpen beim ersten Bad langsam mit dem Wasser vertraut, es sei denn, er wurde bereits beim Züchter geduscht oder gebadet.</li>
              <li>Befeuchten Sie ihn zuerst langsam mit Ihrer Hand und dann erst mit dem Duschkopf. Er könnte sich durch das spritzende Wasser aus dem Duschkopf erschrecken. Beachten Sie auch bitte, dass kein Wasser in Ohren, Augen oder Mund gelangt.</li>
              <li>Seifen Sie ihn mit einem geeigneten feuchtigkeitsspendenden Shampoo für Welpen ein und waschen Sie es gründlich aus.</li>
              <li>Nach dem gründlichen Auspülen des Shampoos sollten Sie eine Pflegespülung oder Maske anwenden, da die Haut Ihres Poms noch sehr empfindlich ist und viel Feuchtigkeit und Schutz benötigt.</li>
              <li>Nachdem Sie mit dem ausführlichen Bad fertig sind, trocknen Sie Ihren Pom mit einem Handtuch gut ab. Föhnen Sie sein Haar vollständig trocken. Während des Föhnens ist es auch zu empfehlen, ihn zu bürsten, damit sein Fell schneller trocknet.</li>
            </ul>
          </Section>

          {/* Richtig bürsten */}
          <Section>
            <h2 className="text-2xl md:text-3xl font-heading text-foreground">
              Wie bürste ich „richtig" einen Pomeranian?
            </h2>
            <h3 className="text-xl font-heading text-foreground">
              Allgemeines, das sollten Sie wissen
            </h3>
            <p>
              Pomeranians sind bekannt für ihr dichtes und schönes Fell. Um es in seiner Schönheit und Pracht zu erhalten, ist es neben dem regelmäßigen Baden wichtig, den Pom „richtig" zu bürsten und zu kämmen. Es muss vor allem die Unterwolle gebürstet werden, um zu verhindern, dass sie verfilzt.
            </p>
            <p>
              Kontrollieren und bürsten Sie täglich das Fell hinter den Ohren nach Filz und Knoten, ebenso an den Vorder- und Hinterläufen und am Po. An diesen Stellen fettet die Haut, entsteht Reibung und verfilzt/verknotet schneller.
            </p>
            <p>
              Bei erwachsenen Poms reicht ein mehrmaliges komplettes Bürsten in der Woche aus.
            </p>
            <p>
              Die tägliche Fellpflege ist zudem auch das beste natürliche Antiparasitikum, denn während dem Bürsten können Sie überprüfen, ob Ihr Pom Flöhe oder Zecken hat.
            </p>
          </Section>

          <Section>
            <h3 className="text-xl font-heading text-foreground">So bürsten Sie richtig</h3>
            <p>
              Sprühen Sie vor dem Bürsten unbedingt ein gutes Pflegespray ins Fell Ihres Poms, damit das Fell mit Feuchtigkeit versorgt wird und um zu verhindern, dass das Fell beim Bürsten beschädigt wird oder bricht.
            </p>
            <p>
              Im nächsten Schritt bürsten Sie das Haar mit einer hochwertigen Pflegebürste gut durch. Bürsten Sie Ihren Pom vom Schwanz in Richtung Kopf. Wichtig ist, dass Sie Stück für Stück gegen den Strich und bis auf die Haut bürsten.
            </p>
            <p>
              Mit einer Slicker Bürste wird Haarschicht für Haarschicht die Haut und das Fell von der abgestorbenen Unterwolle entfernt.
            </p>
            <p>
              Die Hautmassage während des Bürstens verbessert die Blutzirkulation, stärkt die Haarfollikel, verteilt das Körperfett und trägt zum Wechsel des sogenannten „Babyhaars" bei.
            </p>
            <p>
              Nachdem Sie das Haar durchgebürstet haben, verwenden Sie anschließend den Kamm und überprüfen, dass es keine übrigen Knoten bzw. Verfilzungen gibt.
            </p>
          </Section>

          {/* Zusammenfassung */}
          <div className="bg-secondary/30 rounded-xl p-6 md:p-8 space-y-4">
            <h3 className="text-xl font-heading text-foreground">Zusammenfassung</h3>
            <p>
              Durch regelmäßiges Bürsten, Baden und die Verwendung von speziellen Pflegemitteln für Pomeranians können Sie dafür sorgen, dass das Fell Ihres Lieblings glänzend und in Topform bleibt und vor allem gesund und glücklich. Vergessen Sie nicht, dass die Fellpflege auch eine gute Gelegenheit ist, um Bonding mit Ihrem Hund zu betreiben und ihm etwas Gutes zu tun.
            </p>
          </div>

          {/* Wichtig */}
          <div className="bg-destructive/10 rounded-lg p-5 border border-destructive/20 space-y-3">
            <p className="font-semibold text-foreground">Wichtig</p>
            <p>
              Eine gute Fellpflege beginnt schon mit dem Futter. Achten Sie darauf, dass Ihr Pomeranian ein hochwertiges Futter „reich an Fett und Fettsäuren, hochwertigem tierischen Protein, Vitamin und Mineralstoffen" erhält. Natürlich ist auch genügend frisches Wasser wichtig. Das richtige Futter und ein ausreichender Wasserhaushalt pflegen Haut und Fell von innen heraus, helfen Verfilzungen und Schuppenbildung zu vermeiden.
            </p>
          </div>

          <Section>
            <p className="font-semibold text-foreground">
              Achten Sie auf die richtige Fellpflege. Mangelnde Fellpflege führt zu Verfilzungen unter dem Deckhaar. Je länger und stärker der Pom verfilzt, umso näher rückt der Filz an seine Haut und umso schmerzhafter wird es für ihn. Falls Sie das Fell Ihres Poms schneiden lassen möchten, um es in Form zu halten, fahren Sie unbedingt zu einem professionellen Hundefriseur. Hundefriseure, welche nicht mit der Rasse vertraut sind, können das Fell durch einen falschen und zu kurzen Haarschnitt schädigen, sodass es nicht mehr nachwächst oder im schlimmsten Fall ausfällt.
            </p>
          </Section>

        </div>
      </main>

      <Footer />
    </>
  );
};

export default WissenFellpflege;