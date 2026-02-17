import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const Kontakt = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Bitte füllen Sie alle Pflichtfelder aus.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate submission for now
    setTimeout(() => {
      toast({
        title: "Nachricht gesendet!",
        description: "Vielen Dank für Ihre Nachricht. Wir melden uns schnellstmöglich bei Ihnen.",
      });
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
              Kontakt
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Haben Sie Fragen zu unserer Zucht oder möchten Sie einen Welpen reservieren?
              Wir freuen uns auf Ihre Nachricht!
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-10">
            {/* Contact Info */}
            <div className="md:col-span-2 space-y-6">
              <div className="bg-secondary rounded-2xl p-6 border border-primary/20">
                <h2 className="font-heading text-2xl mb-6 text-foreground">Kontaktdaten</h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <div className="font-body text-foreground/90">
                      <p>Marienroda 4</p>
                      <p>06647 Finneland</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MessageCircle className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <div className="font-body text-foreground/90">
                      <p>WhatsApp</p>
                      <a
                        href="https://wa.me/4915202822193"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:opacity-80"
                      >
                        +49 (0) 152 028 221 93
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <div className="font-body text-foreground/90">
                      <p>Festnetz</p>
                      <a href="tel:+4934465690366" className="underline hover:opacity-80">
                        +49 (0) 34465690366
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <div className="font-body text-foreground/90">
                      <p>E-Mail</p>
                      <a
                        href="mailto:info@pomeranianzucht-sachsen-anhalt.de"
                        className="underline hover:opacity-80 break-all"
                      >
                        info@pomeranianzucht-sachsen-anhalt.de
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-3">
              <form onSubmit={handleSubmit} className="bg-secondary rounded-2xl p-6 border border-primary/20 space-y-5">
                <h2 className="font-heading text-2xl mb-2 text-foreground">Schreiben Sie uns</h2>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-sm text-foreground/80 mb-1 block">Name *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ihr Name"
                      maxLength={100}
                      required
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm text-foreground/80 mb-1 block">E-Mail *</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Ihre E-Mail-Adresse"
                      maxLength={255}
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-sm text-foreground/80 mb-1 block">Telefon</label>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Ihre Telefonnummer"
                      maxLength={30}
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm text-foreground/80 mb-1 block">Betreff</label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Betreff Ihrer Nachricht"
                      maxLength={150}
                    />
                  </div>
                </div>

                <div>
                  <label className="font-body text-sm text-foreground/80 mb-1 block">Nachricht *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Ihre Nachricht an uns..."
                    rows={6}
                    maxLength={2000}
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent text-accent-foreground font-body text-lg px-6 py-3 rounded-full border border-primary hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Kontakt;
