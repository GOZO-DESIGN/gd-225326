import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PhotoGrid from "@/components/PhotoGrid";
import AboutSection from "@/components/AboutSection";
import DogSection from "@/components/DogSection";
import TrainingSection from "@/components/TrainingSection";
import Footer from "@/components/Footer";

import welpenImg from "@/assets/home/Anne_Katrin_Mueller_Oct_31_2025.avif";
import ruedeImg from "@/assets/home/Anne-Katrin-Mu_CC_88ller-225326---2025-10-31-09.38.50.avif";
import huendinImg from "@/assets/home/Anne-Katrin-Mu_CC_88ller-225326---2025-10-24-11.27.19.avif";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PhotoGrid />
      <AboutSection />

      <DogSection
        title="Unsere"
        titleHighlight="Welpen"
        description="Unsere Pomeranian-Welpen wachsen mitten in unserem Familienalltag auf – umsorgt, sicher und mit viel Liebe. Vom ersten Tag an begleiten wir sie rund um die Uhr, sorgen für behutsame Sozialisierung und ein kleines Trainingsprogramm, das sie optimal auf ihr neues Zuhause vorbereitet. Jeder Welpe erhält bei uns die Zeit, Aufmerksamkeit und Fürsorge, die ein guter Start ins Leben braucht."
        buttonText="Entdecken Sie unsere Welpen"
        imageSrc={welpenImg}
        imageAlt="Pomeranian Welpen"
      />

      <DogSection
        title="Unsere"
        titleHighlight="Rüden"
        description="Unsere Deckrüden sind charakterstarke, gesunde und bestens untersuchte Pomeranians mit besonderer Farbgebung. Sie leben als vollwertige Familienmitglieder in unserem Zuhause, sind ausgeglichen, freundlich und zeigen ein rassetypisches Wesen ohne Qualzuchtmerkmale. Jeder Rüde wird sorgfältig ausgewählt und trägt maßgeblich zu unserer verantwortungsvollen und transparenten Zucht bei."
        buttonText="Entdecken Sie unsere Rüden"
        imageSrc={ruedeImg}
        imageAlt="Pomeranian Rüde Remmy"
        imageLabel="Remmy"
        reversed
      />

      <DogSection
        title="Unsere"
        titleHighlight="Hündinnen"
        description="Unsere Hündinnen leben eng bei uns im Haus, genießen Nähe, Zuwendung und ein harmonisches Rudelleben. Sie werden liebevoll betreut, regelmäßig tierärztlich untersucht und nur eingesetzt, wenn sie vollständig gesund und bereit für eine Trächtigkeit sind. Jede Hündin ist verschmust, menschenbezogen und trägt mit ihrem stabilen, freundlichen Wesen einen wichtigen Teil zu unserer Zuchtqualität bei."
        buttonText="Entdecken Sie unsere Hündinnen"
        imageSrc={huendinImg}
        imageAlt="Pomeranian Hündin Fee"
        imageLabel="Fee"
      />

      <TrainingSection />
      <Footer />
    </div>
  );
};

export default Index;
