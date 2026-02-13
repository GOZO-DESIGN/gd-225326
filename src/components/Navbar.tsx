import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.webp";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Home", href: "#home" },
    { label: "Aussehen/Farben", href: "#about" },
    { label: "Zucht", href: "#zucht" },
    { label: "Über uns", href: "#ueber" },
    { label: "Galerie", href: "#galerie" },
    { label: "Wissenswertes", href: "#wissen" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-secondary text-foreground transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? "h-16" : "h-28"}`}>
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Pomeranianzucht Sachsen-Anhalt Logo"
              className={`w-auto transition-all duration-300 ${scrolled ? "h-12" : "h-24"}`}
            />
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[18px] font-body hover:opacity-80 transition-opacity"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#kontakt"
              className="bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-[18px] border border-primary hover:opacity-90 transition-opacity"
            >
              Kontakt
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-secondary pb-4 px-4 space-y-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block text-[18px] py-2 hover:opacity-80"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className="block bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-[18px] text-center border border-primary"
            onClick={() => setMobileOpen(false)}
          >
            Kontakt
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;