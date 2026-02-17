import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Section = ({ children }: { children: React.ReactNode }) => (
  <div className="space-y-6">{children}</div>
);

const WissenKastration = () => {
  return (
    <>
      <Navbar />

      <div className="bg-accent py-8 md:py-12 text-center">
        <h1 className="text-2xl md:text-4xl font-heading text-accent-foreground max-w-3xl mx-auto px-4">
          Kastration
        </h1>
      </div>

      <main className="bg-primary-foreground py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 font-body text-muted-foreground leading-relaxed">

          {/* Was bedeutet Kastration? */}
          <Section>
            <h2 className="text-2xl md:text-3xl font-heading text-foreground">Was bedeutet Kastration?</h2>
            <p>
              Das Thema Kastration ist ein umstrittenes Thema, wo ich gerne ausführlich darauf eingehen möchte (insbesondere Gesetz / Tierschutzgesetz).
            </p>
            <p>
              Bei einer Kastration – auch Gonadektomie genannt – werden mittels Operation die Keimdrüsen (Gonaden) des Tieres entfernt, die hauptsächlich für die Hormonproduktion zuständig sind. Bei Hündinnen sind damit die Eierstöcke, bei den Rüden die Hoden gemeint. Bei Hündinnen wird manchmal zusätzlich die Gebärmutter entnommen. Nach der Kastration sind die Hunde nicht mehr fortpflanzungsfähig.
            </p>
            <p>
              Auch durch eine Sterilisation werden Hunde unfruchtbar. Hier werden allerdings nur Eileiter bzw. Samenstrang unterbrochen, während die Keimdrüsen nicht beeinträchtigt werden, also weiter Hormone produzieren.
            </p>
            <p>
              Die Tierärzte praktizieren in Deutschland fast ausschließlich die Kastration, weniger verbreitet ist die Sterilisation.
            </p>
          </Section>

          {/* Gesetz */}
          <Section>
            <h2 className="text-2xl md:text-3xl font-heading text-foreground">
              Kastration beim Hund – was sagt das Gesetz dazu, ist sie erlaubt?
            </h2>
            <p className="font-semibold text-foreground">
              Nein, lt. dem deutschen Tierschutzgesetz ist es grundsätzlich verboten, Tieren Schmerzen, Leiden oder Schäden zuzufügen, zumindest ohne vernünftigen medizinischen Grund. Daher wäre eine Kastration erst einmal verboten. Aber wenn ein „vernünftiger Grund" vorhanden ist, liegt eine Ausnahme vor. Damit wäre eine Kastration rechtens.
            </p>
            <blockquote className="border-l-4 border-primary pl-4 italic">
              „Das Tierschutzgesetz Paragraph 6 Abs. 1 Satz 1 verbietet das vollständige oder teilweise Amputieren von Körperteilen oder das vollständige oder teilweise Entfernen oder Zerstören von Organen oder Geweben eines Wirbeltieres und damit grundsätzlich auch die Kastration oder Sterilisation."
            </blockquote>
            <p>
              Die Erlaubnis zur operativen Unfruchtbarmachung ist nach deutschem Recht auf wenige Ausnahmen beschränkt, die im Paragraph 6 Abs. 1 Satz 2 Tierschutzgesetz abschließend aufgezählt sind. Für Haustiere ist die Unfruchtbarmachung teilweise erlaubt, wenn sie nach einer Indikation eines Tierarztes geboten ist oder eine unkontrollierte Fortpflanzung verhindert werden soll. Diese ist in Deutschland lediglich nur bei freilaufenden Katzen vertretbar. Bei Hunden kann die Fortpflanzung z.&nbsp;B. durch eine räumliche Trennung geschlechtsreifer Hunde eines Haushaltes während der Läufigkeit unterbunden werden.
            </p>
          </Section>

          {/* Medizinisch notwendig */}
          <Section>
            <h2 className="text-2xl md:text-3xl font-heading text-foreground">
              Wann ist eine Kastration medizinisch notwendig?
            </h2>
            <p>
              Wenn der Tierarzt den Eingriff veranlasst, um eine Krankheit zu behandeln. Jedoch muss auch bei der Entscheidung durch den Tierarzt die Verhältnismäßigkeit gegeben sein. Lässt sich die Erkrankung mit einer weniger invasiven Therapie behandeln, sollte diese der Kastration vorgezogen werden.
            </p>
            <p>Eine medizinische Indikation tritt auf bei Erkrankungen der Geschlechtsorgane wie z.&nbsp;B.:</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>Tumore an Hoden oder Eierstöcken</li>
              <li>Gebärmutterentzündung oder -vereiterung</li>
              <li>Eierstockzysten</li>
              <li>Mehrfache Scheinschwangerschaft der Hündin</li>
              <li>Prostatavergrößerung oder Perianaltumoren bei Rüden</li>
              <li>Hodenhochstand/Kryptorchismus (ein oder beide Hoden des Rüden liegen noch im Bauch- oder Leistenraum)</li>
            </ul>
            <p>
              In vielen Fällen ist allerdings die Kastration nicht die richtige Lösung, auch wenn sie einfacher erscheint. Oftmals ist eine längere Verhaltenstherapie sinnvoller, die viel Geduld benötigt, aber letztendlich zielführend ist.
            </p>
          </Section>

          {/* Kastrationschip */}
          <Section>
            <h2 className="text-2xl md:text-3xl font-heading text-foreground">
              Kastration mittels Kastrationschip
            </h2>
            <p>
              Es gibt nicht nur die klassische chirurgische Kastration beim Rüden. Ich persönlich empfehle vor einem chirurgischen Eingriff eine „Kastration auf Probe", d.&nbsp;h. ohne operativen Eingriff eine vorübergehende Kastration mittels Suprelorin-Implantat, auch Kastrationschip genannt. Der Tierarzt setzt diesen Hormonchip – ähnlich wie den Microchip – unter die Haut des Hundes, wo er den Wirkstoff Deslorelin abgibt, der die Produktion der Sexualhormone hemmt. Für den Hund ist die Prozedur nicht übermäßig schmerzhaft, er wird keine Narkose benötigen.
            </p>
            <p>
              Ab dann stößt das Implantat fortwährend kleinere Mengen des Wirkstoffes Deslorelin aus. Solange der Wirkstoff ausgestoßen wird, ist der Rüde zeugungsunfähig – je nach Setzen des Chips dauert es jedoch etwa 6 Wochen, bis die volle Wirkung eintritt.
            </p>
            <p>
              Die Wirkungsweise ist – je nach Implantat – auf ca. 6 bzw. 12 Monate begrenzt.
            </p>
            <p>
              Nachdem der Kastrationschip seine Wirkung verloren hat, muss er nicht wieder entfernt werden. Das Implantat baut sich im Körper des Hundes selbständig ab.
            </p>
            <div className="bg-secondary/30 rounded-lg p-5 space-y-2">
              <p className="font-semibold text-foreground">Gut zu wissen:</p>
              <p>Nach etwa der doppelten Zeit der Wirkungsdauer sollte sich der Chip vollständig aufgelöst haben.</p>
              <p>Wer also prüfen möchte, wie sein Hund auf die hormonelle Veränderung einer Kastration anspricht, kann dies zunächst mittels Implantat testen und muss nicht gleich eine irreversible Maßnahme vornehmen lassen.</p>
            </div>
          </Section>

          {/* Kosten */}
          <Section>
            <h3 className="text-xl font-heading text-foreground">Kosten</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-secondary/30 rounded-lg p-4 text-center">
                <p className="font-semibold text-foreground text-lg">6 Monate</p>
                <p className="text-2xl font-heading text-foreground">ca. 135 €</p>
              </div>
              <div className="bg-secondary/30 rounded-lg p-4 text-center">
                <p className="font-semibold text-foreground text-lg">1 Jahr</p>
                <p className="text-2xl font-heading text-foreground">ca. 270 €</p>
              </div>
            </div>
            <p className="text-sm italic">
              Der Preis kann abhängig von der Tierarztpraxis bzw. dem Aufwand und der jeweiligen Gebührenordnung der Tierärzte variieren (GOT 1- bis 3-facher Satz, individuelle Beratung und Untersuchung etc.)
            </p>
          </Section>

          {/* Vorteile / Nachteile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-secondary/30 rounded-lg p-5 space-y-3">
              <h3 className="text-lg font-heading text-foreground">Vorteile</h3>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>Vorübergehende Maßnahme</li>
                <li>Kein schwerer Eingriff</li>
                <li>Keine Narkose notwendig</li>
                <li>Neben Unfruchtbarkeit meist auch verringertes unerwünschtes Sexualverhalten</li>
              </ul>
            </div>
            <div className="bg-destructive/10 rounded-lg p-5 border border-destructive/20 space-y-3">
              <h3 className="text-lg font-heading text-foreground">Nachteile</h3>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>Hormonelle Veränderungen können länger bestehen bleiben</li>
                <li>Fellveränderungen können eintreten</li>
                <li>Unerwünschte Nebenwirkungen möglich (Verminderung des Bewegungsdranges, Ängstlichkeit, Steigerung der Fresslust, Aggression etc.)</li>
                <li>Wirkungsdauer kann nicht exakt bestimmt werden (wirkt z.&nbsp;B. erst nach etwa 6 Wochen)</li>
                <li>Auf lange Sicht kostspieliger als chirurgische Kastration</li>
              </ul>
            </div>
          </div>

          {/* Hinweise */}
          <Section>
            <div className="bg-destructive/10 rounded-lg p-5 border border-destructive/20">
              <p className="font-semibold text-foreground">Wichtig:</p>
              <p>Bitte ausführliche Informationen im Vorfeld über Risiken und Bedenken und Kosten beim Tierarzt einholen und sich beraten lassen. Welchen Chip mit welcher Wirkungsdauer Sie wählen, besprechen Sie am besten auch mit Ihrem Tierarzt.</p>
            </div>
            <p>
              Bedenke: Ein Hund, der vorher schon sehr dominant oder unfolgsam war, wird durch eine Kastration möglicherweise etwas ruhiger. Für die meisten verhaltensassoziierten Auffälligkeiten ist jedoch die richtige Erziehung und verhaltenstherapeutische Arbeit sowie die angemessene Förderung Ihres Hundes viel entscheidender.
            </p>
            <p className="text-sm italic">
              Quelle: tractive.com, tierärztlich bestätigt von Dr. Lena Naderer (13.04.23)
            </p>
          </Section>

          {/* Persönliche Empfehlung */}
          <div className="bg-secondary/30 rounded-xl p-6 md:p-8 space-y-4">
            <p>
              Ich kann nur Empfehlungen aussprechen, Sie über Vor- und Nachteile informieren. Besprechen Sie sich bitte mit Ihrem Tierarzt, ob Sie für Ihren Rüden eine chirurgische oder eine chemische Kastration (Kastrationschip) in Betracht ziehen möchten.
            </p>
            <p className="font-semibold text-foreground">
              Ich persönlich möchte ohne medizinische Notwendigkeit (Erkrankung) keinen operativen Eingriff an unsere kleinen Pomeranians vornehmen lassen. Verbunden mit einer Narkose ist eine OP immer mit Risiken verbunden, bei den Menschen sowohl auch bei Tieren.
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
};

export default WissenKastration;
