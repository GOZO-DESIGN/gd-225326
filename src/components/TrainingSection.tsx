import trainingImg from "@/assets/home/Anne-Katrin-Mu_CC_88ller-225326---2025-10-31-10.23.58.avif";

const TrainingSection = () => {
  return (
    <section className="bg-primary-foreground py-16 md:py-20">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          {/* Text */}
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-3xl md:text-4xl font-heading text-foreground">
              Bei uns{" "}
              <span className="text-accent">bestens vorbereitet</span>{" "}
              auf die große Welt
            </h2>
            <div className="font-body text-muted-foreground leading-relaxed space-y-3">
              <p>
                Unsere Welpen wachsen mitten in unserem Familienalltag auf und erhalten
                von Anfang an ein liebevolles, fundiertes Training. Damit der Start in
                ihr neues Zuhause so leicht wie möglich fällt, üben wir Schritt für
                Schritt all die kleinen Dinge, die später wichtig sind.
              </p>
              <p>
                Wir vermitteln grundlegende Kommandos wie Rückruf und Sitz, gewöhnen die
                Kleinen an das Hochnehmen, ruhiges Warten und daran, sich überall
                anfassen zu lassen. Auch Baden, Abtrocknen, Föhnen sowie regelmäßiges
                Bürsten, Kämmen und Krallenschneiden sind Teil unseres Alltags.
              </p>
              <p>
                Durch kurze Autofahrten und viele Eindrücke aus Haus, Garten und Natur
                lernen die Welpen Geräusche wie Autos, Motorräder, Vögel oder Hühner
                entspannt kennen.
              </p>
            </div>
            <a
              href="/kontakt"
              className="inline-block bg-accent text-accent-foreground px-6 py-2 rounded-full text-sm font-body border border-primary hover:opacity-90 transition-opacity"
            >
              Kontaktieren Sie uns
            </a>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 relative">
            <img
              src={trainingImg}
              alt="Pomeranian Welpe Training"
              className="w-full h-[400px] md:h-[650px] object-cover rounded-[10px]"
              loading="lazy"
            />
            <span className="absolute bottom-3 right-3 bg-accent/80 text-accent-foreground px-3 py-1 rounded-full text-sm font-heading">
              Amy - 2 Monate
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
