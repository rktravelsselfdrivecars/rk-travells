import { Phone, MessageCircle, MapPin, Mail } from "lucide-react";
import { business } from "@/lib/site-data";

export function ContactCTA() {
  return (
    <section id="contact" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#151B23]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(249,115,22,0.08)_0%,transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

      <div className="relative z-10 mx-auto max-w-5xl px-5 text-center">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-display text-white mb-4 sm:mb-6">
          Ready to Hit the Road?
        </h2>
        <p className="text-base sm:text-xl text-[#D1D5DB] mb-8 sm:mb-12 max-w-2xl mx-auto">
          Book your car today and travel on your terms. Our team is available{" "}
          <span className="text-primary font-semibold">24/7</span> to assist you.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href={business.phoneHref}
            className="w-full sm:w-auto inline-flex h-12 sm:h-14 items-center justify-center gap-2 sm:gap-3 rounded-full bg-white px-6 sm:px-8 text-base sm:text-lg font-bold text-ink shadow-xl transition-opacity duration-200 hover:opacity-90 active:opacity-80"
          >
            <Phone className="size-5" /> Call {business.phone}
          </a>
          <a
            href={business.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex h-12 sm:h-14 items-center justify-center gap-2 sm:gap-3 rounded-full bg-[#25D366] px-6 sm:px-8 text-base sm:text-lg font-bold text-white shadow-xl transition-opacity duration-200 hover:opacity-90 active:opacity-80"
          >
            <MessageCircle className="size-5" /> WhatsApp
          </a>
          <a
            href={business.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex h-12 sm:h-14 items-center justify-center gap-2 sm:gap-3 rounded-full bg-[#080D12] px-6 sm:px-8 text-base sm:text-lg font-bold text-white shadow-xl border border-[#2A323D] transition-opacity duration-200 hover:opacity-90 active:opacity-80"
          >
            <MapPin className="size-5" /> Get Directions
          </a>
          <a
            href={`mailto:${business.email}`}
            className="w-full sm:w-auto inline-flex h-12 sm:h-14 items-center justify-center gap-2 sm:gap-3 rounded-full bg-white/5 px-6 sm:px-8 text-base sm:text-lg font-bold text-white shadow-xl border border-[#2A323D] transition-opacity duration-200 hover:opacity-90 active:opacity-80 backdrop-blur-sm"
          >
            <Mail className="size-5" /> Email Us
          </a>
        </div>

        <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-[#E5E7EB] bg-[#080D12]/60 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-[#2A323D] text-center sm:text-left">
          <div className="flex items-center gap-2">
            <Phone className="size-5 text-primary shrink-0" />
            <span className="font-semibold">{business.phone}</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-[#2A323D]"></div>
          <a
            href={business.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 max-w-sm cursor-pointer group p-2 -m-2 rounded-xl hover:bg-white/5 transition-colors"
          >
            <MapPin className="size-5 text-primary shrink-0" />
            <span className="font-semibold text-sm leading-tight group-hover:text-primary transition-colors">
              {business.address}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
