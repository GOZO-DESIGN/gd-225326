import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PhotoGrid from "@/components/PhotoGrid";
import SEOHead from "@/components/SEOHead";

const Galerie = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead title="Galerie – Pomeranian Bilder & Impressionen" description="Bilder und Impressionen aus unserer Pomeranian-Zucht. Entdecken Sie unsere Zwergspitze, Welpen und den Zuchtalltag in Sachsen-Anhalt." canonical="https://www.pomeranianzucht-sachsen-anhalt.de/galerie" />
      <Navbar />
      <PhotoGrid />
      <Footer />
    </div>
  );
};

export default Galerie;
