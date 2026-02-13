import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.webp";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hundeOpen, setHundeOpen] = useState(false);
  const [mobileHundeOpen, setMobileHundeOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setHundeOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const links = [
    { label: "Home", href: "/" },
    { label: "Aussehen/Farben", href: "/#about" },
    { label: "Zucht", href: "/#zucht" },
    { label: "Über uns", href: "/#ueber" },
    { label: "Galerie", href: "/#galerie" },
    { label: "Wissenswertes", href: "/#wissen" },
  ];

  const hundeLinks = [
    { label: "Rüden", href: "/rueden" },
    { label: "Hündinnen", href: "/huendinnen" },
    { label: "Welpen", href: "/welpen" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-secondary text-foreground transition-all duration-300 border-b-2 border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? "h-16" : "h-28"}`}>
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Pomeranianzucht Sachsen-Anhalt Logo"
              className={`w-auto transition-all duration-300 ${scrolled ? "h-12" : "h-24"}`}
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-[18px] font-body hover:opacity-80 transition-opacity">
              Home
            </Link>

            {/* Unsere Hunde Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setHundeOpen(true)}
              onMouseLeave={() => setHundeOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-[18px] font-body hover:opacity-80 transition-opacity"
              >
                Unsere Hunde
                {hundeOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              {hundeOpen && (
                <div className="absolute top-full left-0 mt-0 w-48 bg-secondary border-2 border-primary shadow-lg z-50 py-2 animate-fade-in">
                  {hundeLinks.map((l) => (
                    <Link
                      key={l.href}
                      to={l.href}
                      className="block px-5 py-3 text-[18px] font-body text-foreground hover:bg-primary/10 transition-colors"
                      onClick={() => setHundeOpen(false)}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {links.slice(1).map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className="text-[18px] font-body hover:opacity-80 transition-opacity"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/#kontakt"
              className="bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-[18px] border border-primary hover:opacity-90 transition-opacity"
            >
              Kontakt
            </Link>
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
          <Link
            to="/"
            className="block text-[18px] py-2 hover:opacity-80"
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>

          {/* Mobile Unsere Hunde */}
          <button
            onClick={() => setMobileHundeOpen(!mobileHundeOpen)}
            className="flex items-center gap-1 text-[18px] py-2 hover:opacity-80 w-full"
          >
            Unsere Hunde
            {mobileHundeOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          {mobileHundeOpen && (
            <div className="pl-4 space-y-1 border-l-2 border-primary ml-2">
              {hundeLinks.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  className="block text-[18px] py-2 hover:opacity-80"
                  onClick={() => { setMobileOpen(false); setMobileHundeOpen(false); }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          )}

          {links.slice(1).map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className="block text-[18px] py-2 hover:opacity-80"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/#kontakt"
            className="block bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-[18px] text-center border border-primary"
            onClick={() => setMobileOpen(false)}
          >
            Kontakt
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;