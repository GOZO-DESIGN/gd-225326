import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import heroImg from "@/assets/wissen/geschlechtsreife-hero.webp";

const Section = ({ children }: { children: React.ReactNode }) => (
  <AnimateOnScroll variant="fade-up">
    <div className="space-y-6">{children}</div>
  </AnimateOnScroll>
);

const WissenGeschlechtsreife = () => {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative h-[400px] md:h-[650px] overflow-hidden">
        <img src={heroImg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover scale-110 blur-xl opacity-60" />
        <img src={heroImg} alt="Geschlechtsreife beim Pomeranian" className="relative w-full h-full object-contain" />
      </section>

      {/* Title bar */}
      <div className="bg-accent py-8 md:py-12 text-center">
        <h1 className="text-2xl md:text-4xl font-heading text-accent-foreground max-w-3xl mx-auto px-4">
          Geschlechtsreife
        </h1>
      </div>

      <main className="bg-primary-foreground py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 font-body text-muted-foreground leading-relaxed">

          {/* ───── HÜNDIN ───── */}
          <Section>
            <h2 className="text-2xl md:text-3xl font-heading text-foreground">
              Pomeranian Hündin
            </h2>

            <h3 className="text-xl font-heading text-foreground">Läufigkeit der Hündin</h3>
            <p>
              Die Läufigkeit ist die Zeit im Leben einer Hündin, in der sie fruchtbar und bereit für die Fortpflanzung ist. Es ist die Phase im Fortpflanzungszyklus einer Hündin, in der sie ihren Eisprung hat und daher offen für potentielle Partner ist.
            </p>
            <p>
              Hündinnen haben ihren ersten Läufigkeitszyklus, wenn sie die Pubertät erreichen – der Zeitpunkt, ab dem sie geschlechtsreif und fortpflanzungsfähig werden.
            </p>
            <p>
              Kleine Hunde sind dafür bekannt, dass ihr Brunstzyklus früher (ab 6. Lebensmonat) beginnt, während größere Rassen ihre erste Läufigkeit erst ab einem Alter von 18 Monaten und später bekommen.
            </p>
            <p>
              Das kann beim Pomeranian ab einem Alter von 6. bis 12. Lebensmonat geschehen. Meine Hündinnen sind meist ab dem 8./9. Lebensmonat läufig geworden.
            </p>
          </Section>

          <Section>
            <h3 className="text-xl font-heading text-foreground">Wie lange sind Hündinnen läufig?</h3>
            <p>
              Eine läufige Hündin ist nicht sofort deckfähig. Hündinnen sind bis zu 21 Tage läufig und davon bis zu 6 Tage lang deckfähig.
            </p>
            <p>
              Die Vulva schwillt in der Zeit langsam an und die Hündin bekommt „ihre Tage/Blutungen". Meist sind ein paar Blutstropfen auf dem Boden oder in ihrem Bettchen sichtbar. Da die Hündinnen recht sauber sind, putzen sie sich jetzt öfters am Geschlecht und lecken das Blut ab. Sie zeigen sich auch meist aufgeregter und verschmuster.
            </p>
            <p>
              Anfangs ist das Blut meist dunkelrot, danach folgt helleres Blut und die Vulva schwillt ab und wird schrumpelig. Das helle Blut und die etwas kleinere verschrumpelte Vulva ist ein Anzeichen für die Stehtage, was bedeutet, dass sie deckfähig bzw. aufnahmebereit ist. Meist am 10. bis 13. Tag der Blutung, wobei es auch Hündinnen gibt, die bereits ab dem 9. Tag oder nach dem 13. Tag aufnahmebereit sind.
            </p>
            <p>
              Durch einen Progesterontest beim Tierarzt lassen sich die Decktage genauer bestimmen. Den Deckzeitpunkt kann man auch selber z.&nbsp;B. mit „Ovulationsteststreifen" bestimmen.
            </p>
            <p>
              Durchschnittlich wird eine Hündin bis zu ihrem Lebensende alle 6 bis 7 Monate läufig, wobei der Zyklus bei jeder Hündin individuell abläuft.
            </p>
          </Section>

          <div className="bg-destructive/10 rounded-lg p-5 border border-destructive/20 space-y-3">
            <p className="font-semibold text-foreground">Wichtig:</p>
            <p>
              Eine Hündin sollte nie mit der ersten Läufigkeit gedeckt werden, frühestens ab der 2. oder 3. Läufigkeit. Schützen Sie Ihre Hündin vor einer ungewollten Trächtigkeit. Halten Sie Ihre Hündin auf Spaziergängen von Rüden fern. Haben Sie selber einen Rüden bei sich Zuhause, schützen Sie Ihre Hündin mit einem Läufigkeitshöschen oder halten Sie Ihren Rüden für die Zeit der Läufigkeit in einem anderen Zimmer – selbst ein Absperrgitter hilft meist nicht – oder verwenden Sie eine Rüdenbinde.
            </p>
          </div>

          {/* ───── RÜDE ───── */}
          <Section>
            <h2 className="text-2xl md:text-3xl font-heading text-foreground">
              Pomeranian Rüde
            </h2>
            <p>
              Während Rüden keinen Läufigkeitszyklus haben, können sie sich das ganze Jahr über paaren, nachdem sie im Alter von etwa 6/7 Monaten in die Pubertät gekommen sind. Ihre Spermien sind zu diesem Zeitpunkt noch nicht in Höchstform, können aber dennoch bereits zeugen.
            </p>
            <p>
              Wenn Sie einen unkastrierten Hund über 6 Monate haben, kennen Sie wahrscheinlich die Herausforderungen, die mit seiner Geschlechtsreife einhergehen. Ein unkastrierter Rüde, der immer bereit ist sich zu paaren, kann bei jeder sich bietenden Gelegenheit ausbüchsen, begierig darauf, die läufige Hündin in der Nachbarschaft zu decken. Ggf. beginnt er sein Revier zu markieren und hebt sein Bein, eventuell auch in den eigenen vier Wänden. Um Pfützen zu vermeiden, können Sie dann mit Rüdenbinden arbeiten und versuchen, es ihm abzugewöhnen. Auch hier ist das Thema Erziehung wichtig.
            </p>
          </Section>

        </div>
      </main>

      <Footer />
    </>
  );
};

export default WissenGeschlechtsreife;
