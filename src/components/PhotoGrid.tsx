import pomHero1 from "@/assets/pom-hero-1.jpg";
import pomHero2 from "@/assets/pom-hero-2.jpg";
import pomHero3 from "@/assets/pom-hero-3.jpg";
import pomHero4 from "@/assets/pom-hero-4.jpg";
import pomWelpen from "@/assets/pom-welpen.jpg";
import pomRuede from "@/assets/pom-ruede.jpg";
import pomHuendin from "@/assets/pom-huendin.jpg";
import pomTraining from "@/assets/pom-training.jpg";

const allImages = [
  pomHero1, pomHero2, pomHero3, pomHero4,
  pomWelpen, pomRuede, pomHuendin, pomTraining,
  pomHero1, pomHero2, pomHero3, pomHero4,
];

const PhotoGrid = () => {
  return (
    <section className="bg-primary py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
        {allImages.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Pomeranian Galerie ${i + 1}`}
            className="w-full h-24 md:h-32 object-cover rounded"
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
};

export default PhotoGrid;
