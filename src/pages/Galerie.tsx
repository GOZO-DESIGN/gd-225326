import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PhotoGrid from "@/components/PhotoGrid";

const Galerie = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PhotoGrid />
      <Footer />
    </div>
  );
};

export default Galerie;
