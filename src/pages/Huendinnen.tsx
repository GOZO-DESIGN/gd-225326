import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Huendinnen = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-primary-foreground py-16 md:py-20">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-heading text-foreground mb-6">
            Unsere <span className="text-accent">Hündinnen</span>
          </h1>
          <p className="font-body text-muted-foreground">Inhalt folgt...</p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Huendinnen;