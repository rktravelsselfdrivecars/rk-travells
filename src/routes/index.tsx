import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Fleet } from "@/components/Fleet";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Services } from "@/components/Services";
import { Reviews } from "@/components/Reviews";
import { About } from "@/components/About";
import { RulesAndRegulations } from "@/components/RulesAndRegulations";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";

import { FloatingCTAs } from "@/components/FloatingCTAs";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RK Travels & Self-Drive Cars | Car Rentals in Jadcherla" },
      {
        name: "description",
        content:
          "Book self-drive cars and reliable car rental services in Jadcherla, Telangana with RK Travels. Explore cars, flexible rental options and outstation travel services.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.rktravels.in/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans scroll-smooth relative overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />
        <Fleet />
        <WhyChooseUs />
        <Services />
        <Reviews />
        <About />
        <RulesAndRegulations />
        <ContactCTA />
      </main>

      <Footer />
      <FloatingCTAs />
    </div>
  );
}
