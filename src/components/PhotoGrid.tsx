import img1 from "@/assets/home/WhatsApp-Image-2024-07-11-at-17.33.05-1.webp";
import img2 from "@/assets/home/WhatsApp-Image-2024-07-26-at-04.08.51_17788466.webp";
import img3 from "@/assets/home/WhatsApp-Image-2024-07-26-at-04.54.00_c4d82cac.webp";
import img4 from "@/assets/home/WhatsApp-Image-2024-08-07-at-17.38.21_8f1f40b8.webp";
import img5 from "@/assets/home/WhatsApp-Image-2024-08-07-at-20.15.07_9f431fe2.webp";
import img6 from "@/assets/home/WhatsApp-Image-2024-08-07-at-20.15.08_e3a41125.webp";
import img7 from "@/assets/home/WhatsApp-Image-2024-08-13-at-21.23.32_6ff19255.webp";
import img8 from "@/assets/home/WhatsApp-Image-2024-08-23-at-00.58.31_e742076e.webp";
import img9 from "@/assets/home/WhatsApp-Image-2024-08-23-at-00.58.32_6d8ead87.webp";
import img10 from "@/assets/home/WhatsApp-Image-2024-08-23-at-02.29.19_90af7699.webp";
import img11 from "@/assets/home/WhatsApp-Image-2024-08-23-at-19.22.48_ccc1001e.webp";
import img12 from "@/assets/home/welpen-01-09-24-51.webp";

const allImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

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
