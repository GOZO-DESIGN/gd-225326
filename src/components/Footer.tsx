import { Facebook, Instagram, Youtube } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const Footer = () => {
  return (
    <footer id="kontakt" className="bg-secondary text-foreground py-12 border-t-2 border-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll variant="fade-up">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Address */}
            <div>
              <h3 className="font-heading text-2xl mb-4">Anschrift</h3>
              <p className="font-body text-[18px] leading-relaxed opacity-90">
                Marienroda 4
                <br />
                06647 Finneland
              </p>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-heading text-2xl mb-4">Kontakt</h3>
              <div className="font-body text-[18px] leading-relaxed space-y-1 opacity-90">
                <p>WhatsApp: +49 (0) 152 028 221 93</p>
                <p>Festnetz: +49 (0) 34465690366</p>
                <p>
                  E-Mail:{" "}
                  <a
                    href="mailto:info@pomeranianzucht-sachsen-anhalt.de"
                    className="underline hover:opacity-80"
                  >
                    info@pomeranianzucht-sachsen-anhalt.de
                  </a>
                </p>
              </div>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-heading text-2xl mb-4">Sonstiges</h3>
              <div className="font-body text-[18px] space-y-1 opacity-90">
                <a href="#" className="block hover:opacity-80">
                  Impressum
                </a>
                <a href="#" className="block hover:opacity-80">
                  Datenschutz
                </a>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Social Icons */}
        <AnimateOnScroll variant="fade-up" delay={200}>
          <div className="flex justify-end gap-3 mt-8">
            <a href="#" className="bg-accent rounded-full p-2 hover:opacity-80 transition-opacity">
              <Facebook size={18} />
            </a>
            <a href="#" className="bg-accent rounded-full p-2 hover:opacity-80 transition-opacity">
              <Instagram size={18} />
            </a>
            <a href="#" className="bg-accent rounded-full p-2 hover:opacity-80 transition-opacity">
              <Youtube size={18} />
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </footer>
  );
};

export default Footer;
