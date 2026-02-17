import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DogSection from "@/components/DogSection";
import TrainingSection from "@/components/TrainingSection";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

import welpenImg from "@/assets/home/Anne_Katrin_Mueller_Oct_31_2025.avif";
import ruedeImg from "@/assets/home/Anne-Katrin-Mu_CC_88ller-225326---2025-10-31-09.38.50.avif";
import huendinImg from "@/assets/home/fee-pomeranian-huendin.avif";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Pomeranian-Zucht Anne & Georg | Zwergspitz Zucht Sachsen-Anhalt"
        description="Verantwortungsvolle Pomeranian-Zucht in Sachsen-Anhalt. Gesunde, charakterstarke Zwergspitze in besonderen Farben aus liebevoller Familienaufzucht."
        canonical="https://www.pomeranianzucht-sachsen-anhalt.de/"
      />
      <Navbar />
      <HeroSection />
      
      <AboutSection />

      <DogSection
        title="Unsere"
        titleHighlight="Welpen"
        description="Unsere Pomeranian-Welpen wachsen mitten in unserem Familienalltag auf – umsorgt, sicher und mit viel Liebe. Vom ersten Tag an begleiten wir sie rund um die Uhr, sorgen für behutsame Sozialisierung und ein kleines Trainingsprogramm, das sie optimal auf ihr neues Zuhause vorbereitet. Jeder Welpe erhält bei uns die Zeit, Aufmerksamkeit und Fürsorge, die ein guter Start ins Leben braucht."
        buttonText="Entdecken Sie unsere Welpen"
        buttonHref="/welpen"
        imageSrc={welpenImg}
        imageAlt="Pomeranian Welpen aus unserer Zucht in Sachsen-Anhalt"
      />

      <DogSection
        title="Unsere"
        titleHighlight="Rüden"
        description="Unsere Deckrüden sind charakterstarke, gesunde und bestens untersuchte Pomeranians mit besonderer Farbgebung. Sie leben als vollwertige Familienmitglieder in unserem Zuhause, sind ausgeglichen, freundlich und zeigen ein rassetypisches Wesen ohne Qualzuchtmerkmale. Jeder Rüde wird sorgfältig ausgewählt und trägt maßgeblich zu unserer verantwortungsvollen und transparenten Zucht bei."
        buttonText="Entdecken Sie unsere Rüden"
        buttonHref="/rueden"
        imageSrc={ruedeImg}
        imageAlt="Pomeranian Deckrüde Remmy von Arinakrieger"
        imageLabel="Remmy"
        reversed
      />

      <DogSection
        title="Unsere"
        titleHighlight="Hündinnen"
        description="Unsere Hündinnen leben eng bei uns im Haus, genießen Nähe, Zuwendung und ein harmonisches Rudelleben. Sie werden liebevoll betreut, regelmäßig tierärztlich untersucht und nur eingesetzt, wenn sie vollständig gesund und bereit für eine Trächtigkeit sind. Jede Hündin ist verschmust, menschenbezogen und trägt mit ihrem stabilen, freundlichen Wesen einen wichtigen Teil zu unserer Zuchtqualität bei."
        buttonText="Entdecken Sie unsere Hündinnen"
        buttonHref="/huendinnen"
        imageSrc={huendinImg}
        imageAlt="Pomeranian Zuchthündin Fee vom Wällerland"
        imageLabel="Fee"
      />

      <TrainingSection />
      <Footer />
    </div>
  );
};

export default Index;
