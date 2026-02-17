import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import SEOHead from "@/components/SEOHead";
import heroImg from "@/assets/wissen/stubenreinheit-hero.webp";

const Section = ({ children }: { children: React.ReactNode }) => (
  <AnimateOnScroll variant="fade-up">
    <div className="space-y-6">{children}</div>
  </AnimateOnScroll>
);

const WissenStubenreinheit = () => {
  return (
    <>
      <SEOHead title="Stubenreinheit beim Welpen – Tipps & Tricks" description="Wie werden Welpen stubenrein? Nützliche Tipps und Tricks für den Alltag mit Ihrem Pomeranian Welpen." canonical="https://www.pomeranianzucht-sachsen-anhalt.de/wissen/stubenreinheit" />
      <Navbar />

      {/* Hero */}
      <section className="relative h-[400px] md:h-[650px] overflow-hidden">
        <img src={heroImg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover scale-110 blur-xl opacity-60" />
        <img src={heroImg} alt="Stubenreinheit beim Welpen" className="relative w-full h-full object-contain" />
      </section>

      {/* Title bar */}
      <div className="bg-accent py-8 md:py-12 text-center">
        <h1 className="text-2xl md:text-4xl font-heading text-accent-foreground max-w-3xl mx-auto px-4">
          Aller Anfang ist schwer – wie werden Welpen stubenrein?
        </h1>
        <p className="text-sm md:text-base text-accent-foreground/80 mt-2">
          Nützliche Tipps und Tricks
        </p>
      </div>

      <main className="bg-primary-foreground py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 font-body text-muted-foreground leading-relaxed">

          <Section>
            <p>
              Beim Training zur Stubenreinheit geht es weniger darum, dem Welpen beizubringen, nicht ins Haus zu machen, sondern vielmehr darum, wie wir dem Welpen beibringen, seine Bedürfnisse draußen zu verrichten. Dieses Erziehungsprojekt erfordert Geduld, Zeit, Energie und nicht zuletzt jede Menge Belohnungen.
            </p>
          </Section>

          {/* Wann stubenrein? */}
          <Section>
            <h2 className="text-2xl md:text-3xl font-heading text-foreground">
              Wann ist ein Welpe stubenrein?
            </h2>
            <p>
              Es lässt sich pauschal nicht sagen, manche Welpen sind nach 12 Wochen stubenrein, andere mit 5 Monaten oder erst mit 1 Jahr. Es hängt auch davon ab, ob der Züchter vielleicht schon mit dem Training begonnen hat, bevor der Welpe auszieht. Es könnte hilfreich sein, wenn Sie sich beim Züchter informieren, welche Trainingsuntergrund im Haus verwendet wurde (Trainings- bzw. Pipimatte, Trainingstoilette mit Kunstrasen oder einfach nur eine Zeitung).
            </p>
            <p>
              Erzwingen lässt es sich nicht, denn die körperlichen Voraussetzungen sind erst mit ca. 14 Wochen gegeben. Davor lassen die Blase und der Darmschließmuskel keine sichere Kontrolle zu. Wenn ein Welpe muss, kann 1 Minute bis zur rettenden Wiese bereits zu lang sein. Absichtlich macht er auf keinen Fall in die eigenen 4 Wände. Denn grundsätzlich ist den Hunden angeboren, ihr „Nest" nicht zu beschmutzen. Doch das hilft alles nichts, wenn der Löseplatz gerade unerreichbar ist. Deshalb ist Nachsicht angebracht.
            </p>
          </Section>

          {/* Wie oft? */}
          <Section>
            <h2 className="text-2xl md:text-3xl font-heading text-foreground">
              Wie oft muss der Welpe am Tag sein Geschäft erledigen?
            </h2>
            <p className="font-semibold text-foreground text-lg">
              Es gibt darauf nur eine Antwort und die heißt: OFT!
            </p>
            <p>
              Grundsätzlich muss der Welpe sofort nach dem Aufwachen Urin und Kot absetzen. Auch nach dem Fressen (früh, mittags und abends) und Trinken und mehrmals bei oder nach Spiel und Bewegung, da dies Darm und Blase stimuliert. Rechnen Sie damit, dass ein junger Welpe 6–8 Mal am Tag Stuhlgang produziert. Das wird mit dem Alter weniger, wenn der Hund lernt, Blase und Darm zu kontrollieren. Es ist aber nicht ungewöhnlich, dass der Hund bei jedem Spaziergang seine Geschäfte erledigt, das heißt mindestens viermal am Tag.
            </p>
          </Section>

          {/* Nachts */}
          <Section>
            <h2 className="text-2xl md:text-3xl font-heading text-foreground">
              Wie wird ein Welpe nachts stubenrein?
            </h2>
            <p>
              Auch wenn die letzte Gassirunde abends um 23 Uhr stattfindet, bis morgens um 7 Uhr halten die wenigsten Welpen anfangs durch. Welpen wachen nachts auf, um Urin und mitunter auch Kot abzusetzen. Es stellt sich also die Frage, wie man die Situation nachts gestalten sollte.
            </p>
            <p>
              Wenn ein Welpe weit entfernt von Ihnen schläft, wird er sich einsam und allein fühlen und vielleicht Angst haben. Er war bisher gewohnt, eng aneinander gekuschelt mit seinen Geschwistern einzuschlafen.
            </p>
            <p>
              Viele frischgebackene Hundeeltern nehmen ihren Welpen zumindest in der Anfangszeit mit ins Schlafzimmer oder schlagen ihr Nachtlager vorübergehend beim Hund im Wohnzimmer auf. Dies muss keine Dauerlösung sein. Falls gewünscht, kann der Junghund später schrittweise an das „Alleine-Schlafen" gewöhnt werden. Für den Beginn macht es vieles leichter. Der Welpe fühlt sich wohler und Sie haben die Möglichkeit, nachts schnell zu reagieren, wenn er unruhig wird. Dann heißt es schnell sein, weshalb ggf. Schuhe, Taschenlampe oder andere Utensilien bereits bereitliegen sollten.
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>Es ergibt Sinn, mit ihm spätabends und frühmorgens herauszugehen.</li>
              <li>Seien Sie in der Nacht darauf vorbereitet, dass er, sobald er aufwacht und auf den Beinen ist, Urin absetzt.</li>
              <li>Es ist von Vorteil, ihn schnell auf den Arm zu nehmen, da sie dort selten Urin absetzen.</li>
              <li>Stellen Sie sich möglichst einen Wecker, anfangs alle 2 Std., später alle 3 Std. usw., bevor der Welpe von selbst aufwacht – das gibt Ihnen ein paar zusätzliche Minuten.</li>
            </ul>
          </Section>

          {/* Training */}
          <Section>
            <h2 className="text-2xl md:text-3xl font-heading text-foreground">
              Das Training
            </h2>
            <p>
              Der junge Hund gibt Ihnen oft kleine Signale, wenn er hinaus muss, um sich zu lösen. Oft sucht er sich eine Stelle abseits des Schlafplatzes und geht während dieser Platzsuche mit den Hinterbeinen vielleicht etwas breitbeinig.
            </p>
            <p>
              Es liegt in der Verantwortung des Halters, diese Signale zu erkennen und mit dem Hund rechtzeitig nach draußen zu gehen, bevor er sein Geschäft macht. Es ist von Vorteil, das Urinieren und Kotabsetzen mit einem Kommando zu verknüpfen, dann lernt der Hund nach und nach, dass es an der Zeit ist, seine Geschäfte zu machen, wenn Sie ihn dazu auffordern.
            </p>
            <p className="font-semibold text-foreground">
              Wenn der Welpe seine Geschäfte draußen macht, geben Sie ihm jede Menge Belohnungen in Form von Streicheln, freundlichen Worten und Leckerlis. Er wird schnell von selbst zur Tür gehen, wenn er hinaus möchte.
            </p>
            <p>
              Je aufmerksamer Sie auf die Signale achten und je mehr Zeit Sie für dieses Training aufwenden, desto schneller geht es.
            </p>
          </Section>

          {/* Missgeschicke */}
          <Section>
            <h2 className="text-2xl md:text-3xl font-heading text-foreground">
              Missgeschicke zu Hause
            </h2>
            <p>
              Es ist niemals die Schuld des Welpen, wenn zu Hause ein Missgeschick passiert. Eine kleine Pfütze oder ein Häufchen sind beinahe unvermeidlich, wenn ein Welpe bei Ihnen eingezogen ist. Es stellt sich daher die Frage, wie man am besten darauf reagieren sollte. Eins ist klar: wildes Schimpfen, laute Worte oder gar ein Klaps auf den Po sind völlig unangebracht. Der Welpe macht das nicht mit Absicht, sondern ist bis zu einem gewissen Alter gar nicht in der Lage, seine Blase bzw. den Darm zuverlässig zu kontrollieren. Besser ist immer, sich zu fragen, wie man solche Situationen künftig verhindern kann. Vielleicht war eine Gassirunde überfällig oder es wurden typische Anzeichen bzw. Signale übersehen.
            </p>
            <div className="bg-destructive/10 rounded-lg p-5 border border-destructive/20">
              <p className="font-semibold text-foreground">
                ABSOLUTES TABU:
              </p>
              <p>
                Niemals beschimpfen, einen Klaps auf den Po geben oder ihn mit der Nase durch seine Hinterlassenschaft ziehen. Er würde nicht verstehen, was Sie damit zum Ausdruck bringen wollen. Er könnte Angst vor Ihnen bekommen, weil er Ihr Verhalten nicht deuten kann.
              </p>
            </div>
            <p className="font-semibold text-foreground">
              Mit der nötigen Konsequenz und Beharrlichkeit wird jeder Hund stubenrein.
            </p>
          </Section>

          {/* Wo Gassi? */}
          <Section>
            <h2 className="text-2xl md:text-3xl font-heading text-foreground">
              Wo sollte der Welpe Gassi gehen?
            </h2>
            <p>
              Wer einen eigenen Garten besitzt, hat es leicht. Am besten sucht man sich eine Ecke mit Naturboden oder Gras aus, die wenig genutzt wird und als Lösungsplatz für den Welpen in Frage kommt. Dorthin trägt oder lockt man ihn, wenn die nächste Gassirunde ansteht. Hunde verstehen recht schnell, dass dies von nun an ihr spezieller Platz ist, vor allem wenn sie dort dann kräftig gelobt werden. Das sollten Sie sich für den Anfang angewöhnen, damit Ihr Welpe unmissverständlich weiß, dass er dort alles richtig macht.
            </p>
            <p>
              Entfernen Sie seine Hinterlassenschaft sowohl bei Spaziergängen als auch im eigenen Garten, denn niemand möchte in Hundekot steigen.
            </p>
            <p>
              Bedenken Sie außerdem, dass sich andere Hunde über den Kot mit einer Krankheit anstecken können bzw. hinterlassener Kot im eigenen Garten eine Infektionsquelle für Ihren Welpen darstellen kann.
            </p>
          </Section>

          {/* Fazit */}
          <div className="bg-secondary/30 rounded-xl p-6 md:p-8 space-y-4">
            <p className="text-foreground font-semibold text-lg">
              Um die Stubenreinheit Ihres Welpen erzielen zu können, ist Zeit, Geduld und ein konsequentes Training notwendig – vor allem, wenn Ihr Welpe seine Hinterlassenschaft richtig entrichtet hat:
            </p>
            <p className="text-foreground font-heading text-xl md:text-2xl text-center">
              „EIN FREUNDLICHES, ÜBERSCHWÄNGLICHES LOB, STREICHELEINHEITEN ODER/UND EIN LECKERLI."
            </p>
          </div>

          <p className="text-sm italic text-muted-foreground">
            Quelle: Auszug von Belcando
          </p>

        </div>
      </main>

      <Footer />
    </>
  );
};

export default WissenStubenreinheit;
