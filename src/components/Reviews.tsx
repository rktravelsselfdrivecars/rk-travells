import { MessageSquarePlus } from "lucide-react";
import { business } from "@/lib/site-data";

export function Reviews() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-4xl px-5 text-center">
        <h2 className="text-2xl font-bold font-display sm:text-3xl md:text-4xl text-ink">
          Customer Experiences
        </h2>
        <p className="mt-4 text-lg text-muted-foreground mb-12">
          We value your feedback. Had a great trip with RK Travels? Let us know!
        </p>

        <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col items-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
            <MessageSquarePlus className="size-8" />
          </div>
          <h3 className="text-2xl font-bold text-ink mb-4">Share Your Experience</h3>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Your reviews help us improve our services and help other customers make the right
            choice. Share your journey with us via WhatsApp.
          </p>
          <a
            href={business.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 items-center justify-center rounded-xl bg-[#25D366] px-8 text-base font-bold text-white shadow-lg hover:bg-[#20b958] transition-all hover:-translate-y-0.5"
          >
            Leave a Review on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
