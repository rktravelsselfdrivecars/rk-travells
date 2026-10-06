import { MapPin, Phone, MessageCircle } from "lucide-react";
import { business } from "@/lib/site-data";

export function FloatingCTAs() {
  return (
    <div className="fixed bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 z-[90] flex flex-col gap-2.5 sm:gap-3 md:gap-4">
      <a
        href={business.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-11 h-11 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-105 hover:opacity-90 active:scale-95"
        style={{ backgroundColor: "#F97316" }}
        aria-label="Location"
      >
        <MapPin className="size-5 md:size-6" />
      </a>

      <a
        href={business.phoneHref}
        className="w-11 h-11 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-105 hover:opacity-90 active:scale-95"
        style={{ backgroundColor: "#0B0F14" }}
        aria-label="Call"
      >
        <Phone className="size-5 md:size-6" />
      </a>

      <a
        href={business.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="w-11 h-11 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-105 hover:opacity-90 active:scale-95"
        style={{ backgroundColor: "#25D366" }}
        aria-label="WhatsApp"
      >
        <MessageCircle className="size-5 md:size-6" />
      </a>
    </div>
  );
}
