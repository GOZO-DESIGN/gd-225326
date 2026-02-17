import { useState, useEffect, useCallback } from "react";
import { Cookie, Settings, Shield } from "lucide-react";
import { Link } from "react-router-dom";

interface CookiePreferences {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
}

const STORAGE_KEY = "cookie-consent";
const CONSENT_VERSION = "1"; // bump when policy changes

const DEFAULT_PREFERENCES: CookiePreferences = {
  necessary: true,
  functional: false,
  analytics: false,
  marketing: false,
};

type StoredConsent = {
  version: string;
  timestamp: string;
  preferences: CookiePreferences;
};

const getStoredConsent = (): StoredConsent | null => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed: StoredConsent = JSON.parse(raw);
    if (parsed.version !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
};

const saveConsent = (preferences: CookiePreferences) => {
  const consent: StoredConsent = {
    version: CONSENT_VERSION,
    timestamp: new Date().toISOString(),
    preferences,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));

  // Remove non-consented cookies
  if (!preferences.analytics && !preferences.marketing) {
    // Clear third-party cookies by removing known ones
    const cookiesToClear = ["_ga", "_gid", "_gat", "_fbp", "_fbc"];
    cookiesToClear.forEach((name) => {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${window.location.hostname};`;
    });
  }
};

export const getCookieConsent = (): CookiePreferences => {
  const stored = getStoredConsent();
  return stored?.preferences ?? DEFAULT_PREFERENCES;
};

const CATEGORIES = [
  {
    key: "necessary" as const,
    label: "Notwendig",
    description:
      "Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.",
    locked: true,
  },
  {
    key: "functional" as const,
    label: "Funktional",
    description:
      "Diese Cookies ermöglichen erweiterte Funktionen und Personalisierung, z. B. das Speichern Ihrer Einstellungen.",
    locked: false,
  },
  {
    key: "analytics" as const,
    label: "Statistik",
    description:
      "Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren, um sie zu verbessern.",
    locked: false,
  },
  {
    key: "marketing" as const,
    label: "Marketing",
    description:
      "Diese Cookies werden verwendet, um Ihnen relevante Werbung und Inhalte anzuzeigen.",
    locked: false,
  },
];

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    ...DEFAULT_PREFERENCES,
  });

  useEffect(() => {
    const stored = getStoredConsent();
    if (!stored) {
      // Small delay so the page loads first
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = useCallback(() => {
    const all: CookiePreferences = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
    };
    saveConsent(all);
    setVisible(false);
  }, []);

  const handleRejectAll = useCallback(() => {
    const minimal: CookiePreferences = {
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
    };
    saveConsent(minimal);
    setVisible(false);
  }, []);

  const handleSavePreferences = useCallback(() => {
    saveConsent(preferences);
    setVisible(false);
  }, [preferences]);

  const toggleCategory = (key: keyof CookiePreferences) => {
    if (key === "necessary") return;
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  if (!visible) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/40 z-[9998] backdrop-blur-sm" />

      {/* Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-[9999] p-4 sm:p-6 animate-in slide-in-from-bottom duration-500">
        <div className="max-w-3xl mx-auto bg-card border border-border rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="p-5 sm:p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="bg-primary/10 rounded-full p-2.5 shrink-0 mt-0.5">
                <Cookie className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-xl text-foreground mb-1">
                  Cookie-Einstellungen
                </h3>
                <p className="font-body text-sm text-foreground/70 leading-relaxed">
                  Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf
                  unserer Website zu bieten. Einige sind notwendig, andere helfen
                  uns, die Website zu verbessern. Weitere Informationen finden Sie
                  in unserer{" "}
                  <Link
                    to="/datenschutz"
                    className="text-primary underline hover:opacity-80"
                  >
                    Datenschutzerklärung
                  </Link>
                  .
                </p>
              </div>
            </div>

            {/* Details / Category toggles */}
            {showDetails && (
              <div className="mt-4 space-y-3 border-t border-border pt-4">
                {CATEGORIES.map((cat) => (
                  <div
                    key={cat.key}
                    className="flex items-start gap-3 p-3 rounded-xl bg-background/60"
                  >
                    <button
                      onClick={() => toggleCategory(cat.key)}
                      disabled={cat.locked}
                      className={`mt-0.5 shrink-0 w-10 h-6 rounded-full transition-colors relative ${
                        preferences[cat.key]
                          ? "bg-primary"
                          : "bg-muted-foreground/30"
                      } ${cat.locked ? "opacity-70 cursor-not-allowed" : "cursor-pointer"}`}
                      aria-label={`${cat.label} ${preferences[cat.key] ? "deaktivieren" : "aktivieren"}`}
                    >
                      <span
                        className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${
                          preferences[cat.key] ? "translate-x-4" : "translate-x-0"
                        }`}
                      />
                    </button>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-body font-bold text-sm text-foreground">
                          {cat.label}
                        </span>
                        {cat.locked && (
                          <span className="text-[10px] font-body bg-primary/15 text-primary px-1.5 py-0.5 rounded-full">
                            Immer aktiv
                          </span>
                        )}
                      </div>
                      <p className="font-body text-xs text-foreground/60 mt-0.5 leading-relaxed">
                        {cat.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-2 mt-5">
              <button
                onClick={handleAcceptAll}
                className="flex-1 bg-primary text-primary-foreground font-body font-bold text-sm py-2.5 px-4 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <Shield className="w-4 h-4" />
                Alle akzeptieren
              </button>
              <button
                onClick={handleRejectAll}
                className="flex-1 bg-muted text-foreground font-body font-bold text-sm py-2.5 px-4 rounded-xl hover:opacity-80 transition-opacity"
              >
                Nur notwendige
              </button>
              {!showDetails ? (
                <button
                  onClick={() => setShowDetails(true)}
                  className="flex-1 border border-border text-foreground font-body text-sm py-2.5 px-4 rounded-xl hover:bg-muted/50 transition-colors flex items-center justify-center gap-2"
                >
                  <Settings className="w-4 h-4" />
                  Einstellungen
                </button>
              ) : (
                <button
                  onClick={handleSavePreferences}
                  className="flex-1 border border-primary text-primary font-body font-bold text-sm py-2.5 px-4 rounded-xl hover:bg-primary/5 transition-colors"
                >
                  Auswahl speichern
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookieConsent;
