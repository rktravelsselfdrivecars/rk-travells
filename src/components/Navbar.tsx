import { useState, useEffect } from "react";
import { Phone, Menu, X, MessageCircle } from "lucide-react";
import { business } from "@/lib/site-data";
import logoImg from "@/assets/logo.png";
import { AttachCarModal } from "@/components/AttachCarModal";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAttachCarOpen, setIsAttachCarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#top" },
    { name: "Cars", href: "#cars" },
    { name: "Why Us", href: "#why-us" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
    { name: "Policies", href: "#rules-regulations" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] h-[64px] md:h-[74px] flex items-center transition-all duration-300 ${
          isScrolled
            ? "bg-white/85 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] border-b border-white/60"
            : "bg-white/70 backdrop-blur-lg shadow-[0_4px_20px_rgba(0,0,0,0.04)] border-b border-white/50"
        }`}
      >
        {/* White gloss sheen */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white/40 to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent"
        />

        <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#top" className="flex items-center gap-2 font-semibold shrink-0">
            <img
              src={logoImg}
              alt="RK Travels Logo"
              className="h-12 md:h-[52px] w-auto max-w-[150px] md:max-w-[180px] object-contain"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-ink/80 px-3 py-1.5 rounded-full border border-transparent transition-colors duration-200 hover:text-primary"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2 lg:gap-2.5">
            <a
              href={business.phoneHref}
              className="text-sm font-semibold text-ink flex items-center gap-2 border border-gray-200/80 rounded-full px-4 py-2 bg-white/80 transition-opacity duration-200 hover:opacity-80"
            >
              <Phone className="size-4 text-ink/70" />
              {business.phone}
            </a>
            <a
              href={business.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 text-sm font-bold text-white shadow-sm transition-opacity duration-200 hover:opacity-90"
            >
              <MessageCircle className="size-4" />
              WhatsApp
            </a>
            <button
              onClick={() => setIsAttachCarOpen(true)}
              className="inline-flex h-10 items-center justify-center rounded-full bg-ink px-4 lg:px-5 text-sm font-bold text-white shadow-sm transition-opacity duration-200 hover:opacity-90"
            >
              Attach Your Car
            </button>
            <a
              href="#cars"
              className="inline-flex h-10 items-center justify-center rounded-full bg-primary px-4 lg:px-5 text-sm font-bold text-white shadow-sm transition-opacity duration-200 hover:opacity-90"
            >
              Book Now
            </a>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <a
              href="#cars"
              className="inline-flex h-9 items-center justify-center rounded-full bg-primary px-4 text-xs font-bold text-white shadow-sm transition-opacity duration-200 hover:opacity-90"
            >
              Book Now
            </a>
            <button
              className="p-2 text-ink transition-opacity duration-200 hover:opacity-70"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 border-b border-gray-100 bg-white/95 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.08)] p-5 flex flex-col gap-3 animate-in slide-in-from-top-4">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white to-transparent"
            />
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-base font-medium text-ink py-3 border-b border-gray-50 transition-colors duration-200 hover:text-primary active:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="relative flex flex-col gap-3 mt-3">
              <div className="flex flex-col gap-2 mb-1 px-1 text-base font-semibold text-ink">
                <a
                  href={business.phoneHref}
                  className="flex items-center gap-3 py-1 hover:text-primary transition-colors"
                >
                  <Phone className="size-4 text-ink/70" /> {business.phone}
                </a>
              </div>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsAttachCarOpen(true);
                }}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-4 py-3 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-90 active:opacity-80"
              >
                Attach Your Car
              </button>
              <a
                href={business.phoneHref}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-ink transition-colors duration-200 hover:text-primary hover:border-gray-300 active:bg-gray-50"
              >
                Call
              </a>
              <a
                href={business.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-90 active:opacity-80"
              >
                WhatsApp
              </a>
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-4 py-3 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-90 active:opacity-80"
              >
                Get Directions
              </a>
            </div>
          </div>
        )}
      </header>

      <AttachCarModal isOpen={isAttachCarOpen} onClose={() => setIsAttachCarOpen(false)} />
    </>
  );
}
