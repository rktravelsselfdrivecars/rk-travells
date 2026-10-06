import { business } from "@/lib/site-data";

export function About() {
  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 flex flex-col lg:flex-row gap-12 items-center">
        <div className="w-full lg:w-1/2 relative">
          <div className="absolute inset-0 bg-primary/10 rounded-[2rem] sm:rounded-[3rem] transform translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4"></div>
          <div className="relative bg-gray-50 rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-10 md:p-14 border border-gray-100">
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col">
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-primary mb-2">
                  100%
                </span>
                <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  Quality Assured
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-primary mb-2">
                  24/7
                </span>
                <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  Customer Support
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-primary mb-2">
                  8+
                </span>
                <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  Vehicle Models
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-primary mb-2">
                  100%
                </span>
                <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  Customer Focus
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-ink mb-6">
            About {business.shortName}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            {business.name} provides reliable and affordable car rental services in Jadcherla and
            surrounding areas.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Choose from our fleet of well-maintained vehicles and enjoy a convenient, flexible, and
            comfortable travel experience. With multiple options ranging from easy-to-drive
            hatchbacks to spacious MUVs, we have the perfect ride for every occasion.
          </p>
          <div className="bg-gray-50 rounded-2xl p-6 mb-8 border border-gray-100">
            <h3 className="font-bold text-ink mb-2">Location</h3>
            <a className="text-sm text-muted-foreground mb-4 block hover:text-primary transition-colors cursor-pointer">
              {business.address}
            </a>
            <h3 className="font-bold text-ink mb-2">Phone</h3>
            <div className="flex flex-col gap-1 text-sm text-muted-foreground">
              <a href={business.phoneHref} className="hover:text-primary transition-colors">
                +91 {business.phone}
              </a>
            </div>
          </div>
          <a
            href={business.phoneHref}
            className="inline-flex h-12 items-center justify-center rounded-full bg-ink px-8 text-base font-semibold text-white shadow-lg hover:bg-ink/80 transition-all"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </section>
  );
}
