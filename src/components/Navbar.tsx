import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.webp";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hundeOpen, setHundeOpen] = useState(false);
  const [mobileHundeOpen, setMobileHundeOpen] = useState(false);
  const [zuchtOpen, setZuchtOpen] = useState(false);
  const [mobileZuchtOpen, setMobileZuchtOpen] = useState(false);
  const [wissenOpen, setWissenOpen] = useState(false);
  const [mobileWissenOpen, setMobileWissenOpen] = useState(false);
  const [ueberOpen, setUeberOpen] = useState(false);
  const [mobileUeberOpen, setMobileUeberOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const zuchtDropdownRef = useRef<HTMLDivElement>(null);
  const wissenDropdownRef = useRef<HTMLDivElement>(null);
  const ueberDropdownRef = useRef<HTMLDivElement>(null);

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
      if (zuchtDropdownRef.current && !zuchtDropdownRef.current.contains(e.target as Node)) {
        setZuchtOpen(false);
      }
      if (wissenDropdownRef.current && !wissenDropdownRef.current.contains(e.target as Node)) {
        setWissenOpen(false);
      }
      if (ueberDropdownRef.current && !ueberDropdownRef.current.contains(e.target as Node)) {
        setUeberOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const otherLinks = [
    { label: "Galerie", href: "/galerie" },
  ];

  const ueberLinks = [
    { label: "Weiterbildungen, Zertifikate, Auszeichnungen", href: "/ueber/weiterbildungen" },
    { label: "Urkunden und Pokale", href: "/ueber/weiterbildungen#urkunden" },
  ];

  const zuchtLinks = [
    { label: "Wurfplanung und Aufzucht", href: "/wurfplanung" },
    { label: "Unsere Zuchtstätte", href: "/zuchtstaette" },
  ];

  const hundeLinks = [
    { label: "Rüden", href: "/rueden" },
    { label: "Hündinnen", href: "/huendinnen" },
    { label: "Welpen", href: "/welpen" },
  ];

  const wissenLinks = [
    { label: "Ursprung", href: "/wissen/ursprung" },
    { label: "Zahngesundheit & Pflege", href: "/wissen/zahngesundheit" },
    { label: "Gesundheit und rassespezifische Krankheiten", href: "/wissen/gesundheit" },
    { label: "Fellpflege, Fellwechsel", href: "/wissen/fellpflege" },
    { label: "Stubenreinheit", href: "/wissen/stubenreinheit" },
    { label: "Hundeerziehung & Hundeschule", href: "/wissen/hundeerziehung" },
    { label: "Geschlechtsreife", href: "/wissen/geschlechtsreife" },
    { label: "Kastration", href: "/wissen/kastration" },
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
              <button className="flex items-center gap-1 text-[18px] font-body hover:opacity-80 transition-opacity">
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

            {/* Zucht Dropdown */}
            <div
              ref={zuchtDropdownRef}
              className="relative"
              onMouseEnter={() => setZuchtOpen(true)}
              onMouseLeave={() => setZuchtOpen(false)}
            >
              <button className="flex items-center gap-1 text-[18px] font-body hover:opacity-80 transition-opacity">
                Zucht
                {zuchtOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              {zuchtOpen && (
                <div className="absolute top-full left-0 mt-0 w-64 bg-secondary border-2 border-primary shadow-lg z-50 py-2 animate-fade-in">
                  {zuchtLinks.map((l) => (
                    <Link
                      key={l.href}
                      to={l.href}
                      className="block px-5 py-3 text-[18px] font-body text-foreground hover:bg-primary/10 transition-colors"
                      onClick={() => setZuchtOpen(false)}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/ueber/weiterbildungen" className="text-[18px] font-body hover:opacity-80 transition-opacity">
              Auszeichnungen
            </Link>

            {otherLinks.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className="text-[18px] font-body hover:opacity-80 transition-opacity"
              >
                {l.label}
              </Link>
            ))}

            {/* Wissenswertes Dropdown */}
            <div
              ref={wissenDropdownRef}
              className="relative"
              onMouseEnter={() => setWissenOpen(true)}
              onMouseLeave={() => setWissenOpen(false)}
            >
              <button className="flex items-center gap-1 text-[18px] font-body hover:opacity-80 transition-opacity">
                Wissenswertes
                {wissenOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              {wissenOpen && (
                <div className="absolute top-full left-0 mt-0 w-80 bg-secondary border-2 border-primary shadow-lg z-50 py-2 animate-fade-in">
                  {wissenLinks.map((l) => (
                    <Link
                      key={l.href}
                      to={l.href}
                      className="block px-5 py-3 text-[18px] font-body text-foreground hover:bg-primary/10 transition-colors"
                      onClick={() => setWissenOpen(false)}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/kontakt"
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
          <Link to="/" className="block text-[18px] py-2 hover:opacity-80" onClick={() => setMobileOpen(false)}>
            Home
          </Link>

          {/* Mobile Unsere Hunde */}
          <button onClick={() => setMobileHundeOpen(!mobileHundeOpen)} className="flex items-center gap-1 text-[18px] py-2 hover:opacity-80 w-full">
            Unsere Hunde
            {mobileHundeOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          {mobileHundeOpen && (
            <div className="pl-4 space-y-1 border-l-2 border-primary ml-2">
              {hundeLinks.map((l) => (
                <Link key={l.href} to={l.href} className="block text-[18px] py-2 hover:opacity-80" onClick={() => { setMobileOpen(false); setMobileHundeOpen(false); }}>
                  {l.label}
                </Link>
              ))}
            </div>
          )}

          {/* Mobile Zucht */}
          <button onClick={() => setMobileZuchtOpen(!mobileZuchtOpen)} className="flex items-center gap-1 text-[18px] py-2 hover:opacity-80 w-full">
            Zucht
            {mobileZuchtOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          {mobileZuchtOpen && (
            <div className="pl-4 space-y-1 border-l-2 border-primary ml-2">
              {zuchtLinks.map((l) => (
                <Link key={l.href} to={l.href} className="block text-[18px] py-2 hover:opacity-80" onClick={() => { setMobileOpen(false); setMobileZuchtOpen(false); }}>
                  {l.label}
                </Link>
              ))}
            </div>
          )}

          <Link to="/ueber/weiterbildungen" className="block text-[18px] py-2 hover:opacity-80" onClick={() => setMobileOpen(false)}>
            Auszeichnungen
          </Link>

          {otherLinks.map((l) => (
            <Link key={l.href} to={l.href} className="block text-[18px] py-2 hover:opacity-80" onClick={() => setMobileOpen(false)}>
              {l.label}
            </Link>
          ))}

          {/* Mobile Wissenswertes */}
          <button onClick={() => setMobileWissenOpen(!mobileWissenOpen)} className="flex items-center gap-1 text-[18px] py-2 hover:opacity-80 w-full">
            Wissenswertes
            {mobileWissenOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          {mobileWissenOpen && (
            <div className="pl-4 space-y-1 border-l-2 border-primary ml-2">
              {wissenLinks.map((l) => (
                <Link key={l.href} to={l.href} className="block text-[18px] py-2 hover:opacity-80" onClick={() => { setMobileOpen(false); setMobileWissenOpen(false); }}>
                  {l.label}
                </Link>
              ))}
            </div>
          )}

          <Link
            to="/kontakt"
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
