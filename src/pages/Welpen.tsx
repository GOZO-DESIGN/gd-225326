import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImg from "@/assets/welpen/hero_welpen.webp";

const Welpen = () => {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[650px] overflow-hidden">
        {/* Blurred background */}
        <img
          src={heroImg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover scale-110 blur-xl opacity-60"
        />
        {/* Foreground image */}
        <img
          src={heroImg}
          alt="Pomeranian Welpe – Hündin 2 Monate"
          className="relative w-full h-full object-contain"
        />
      </section>

      <main className="min-h-screen bg-primary-foreground py-16 md:py-20">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-heading text-foreground mb-6">
            Unsere <span className="text-accent">Welpen</span>
          </h1>
          <p className="font-body text-muted-foreground">Inhalt folgt...</p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Welpen;