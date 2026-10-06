import { useState } from "react";
import rkBannerImg from "@/assets/home_page_bg_photo.png";
import logoImg from "@/assets/logo.png";
import { business } from "@/lib/site-data";
import { AttachCarModal } from "@/components/AttachCarModal";
import { Clock, ShieldCheck, Award, User, Phone, Car, ArrowRight } from "lucide-react";

export function Hero() {
  const [isAttachCarOpen, setIsAttachCarOpen] = useState(false);

  return (
    <>
      <section
        id="top"
        className="relative mt-[64px] md:mt-[74px] h-[calc(100vh-64px)] md:h-[calc(100vh-74px)] min-h-[600px] overflow-hidden flex items-center"
      >
        {/* Background Image (Source of Truth 1) */}
        <div className="absolute inset-0 z-0">
          <img
            src={rkBannerImg}
            alt="Fleet of self-drive cars available at RK Travels in Jadcherla, Telangana"
            className="w-full h-full object-cover object-[75%_center] md:object-[38%_center]"
          />
        </div>

        {/* Soft Frosted Mist Overlays */}
        {/* Subtle linear mist from left to center */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.7)_55%,rgba(255,255,255,0)_100%)] md:bg-[linear-gradient(90deg,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.5)_35%,rgba(255,255,255,0)_65%)] pointer-events-none" />
        {/* Radial mist glow for text readability without washing out the background */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_25%_45%,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0)_65%)] md:bg-[radial-gradient(ellipse_at_25%_45%,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0)_55%)] pointer-events-none" />

        {/* RK Brand Watermark */}
        <div
          className="absolute z-0 pointer-events-none select-none opacity-[0.35] sm:opacity-[0.45] md:opacity-[0.50] lg:opacity-[0.55] right-[16%] sm:right-[17%] md:right-[15%] lg:right-[14%] top-[3%] sm:top-[5%] md:top-[7%] lg:top-[7%] w-[120px] sm:w-[200px] md:w-[260px] lg:w-[320px] max-w-[40vw] sm:max-w-[30vw]"
          aria-hidden="true"
        >
          <img src={logoImg} alt="" className="w-full h-auto object-contain" />
        </div>

        {/* Main Content (Source of Truth 2) */}
        <div className="relative z-10 flex flex-col justify-center px-4 sm:px-10 lg:px-20 max-w-7xl w-full mx-auto">
          <div className="max-w-2xl xl:max-w-3xl w-full">
            {/* Top labels */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-6 mb-4 sm:mb-5 text-[9px] sm:text-[10px] md:text-xs font-bold text-[#F97316] uppercase tracking-wide">
              <span className="flex items-center gap-1 sm:gap-1.5">
                <ShieldCheck className="size-3 sm:size-3.5 md:size-4" /> Claimed & Verified
              </span>
              <span className="flex items-center gap-1 sm:gap-1.5">
                <Award className="size-3 sm:size-3.5 md:size-4" /> Best in Jadcherla
              </span>
              <span className="flex items-center gap-1 sm:gap-1.5">
                <Clock className="size-3 sm:size-3.5 md:size-4" /> Open 24/7
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-[2rem] min-[360px]:text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] leading-[1.1] md:leading-[1.05] font-extrabold font-display text-ink mb-5 sm:mb-6 break-words">
              RK Travels &<br />
              <span className="text-[#F97316] inline-block">Self-Drive Cars</span>
            </h1>

            {/* Subheading: Your Journey, Our Commitment */}
            <div className="flex items-center justify-start gap-2 min-[360px]:gap-3 sm:gap-5 mb-6 sm:mb-8 w-full overflow-hidden">
              <div className="w-[30px] min-[360px]:w-[40px] sm:w-[70px] lg:w-[90px] h-[2px] bg-[#F97316] shrink-0"></div>
              <span className="text-[#1F2937] font-bold text-[10px] min-[360px]:text-[11px] sm:text-sm md:text-[18px] lg:text-[20px] tracking-widest sm:tracking-[0.18em] uppercase text-center shrink">
                Your Journey, Our Commitment
              </span>
              <div className="w-[30px] min-[360px]:w-[40px] sm:w-[70px] lg:w-[90px] h-[2px] bg-[#F97316] shrink-0"></div>
            </div>

            {/* Driver Also Available */}
            <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4 text-lg min-[360px]:text-xl sm:text-2xl md:text-3xl font-bold text-ink">
              <User className="size-5 min-[360px]:size-6 sm:size-8 text-[#F97316]" />
              <span>Driver Also Available</span>
            </div>

            {/* Description */}
            <p className="text-sm min-[360px]:text-base sm:text-lg md:text-xl font-normal text-[#4B5563] mt-2 mb-8 sm:mb-10 max-w-[95%] sm:max-w-[85%] lg:max-w-[65%] leading-relaxed">
              Reliable and affordable self-drive car rentals in Jadcherla with easy booking and
              multiple vehicle options.
            </p>

            {/* Buttons */}
            <div className="flex flex-col gap-3 sm:gap-4 w-full">
              {/* Row 1 (Primary & Secondary) */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
                <a
                  href="#cars"
                  className="inline-flex h-12 sm:h-14 items-center justify-center gap-2 rounded-xl bg-[#F97316] px-4 sm:px-8 text-sm sm:text-base font-bold text-white shadow-lg transition-all duration-300 hover:bg-[#EA580C] hover:scale-[1.02] active:scale-95 w-full sm:w-auto"
                >
                  View Cars & Pricing
                  <ArrowRight className="size-4 sm:size-5" />
                </a>
                <a
                  href={business.phoneHref}
                  className="inline-flex h-12 sm:h-14 items-center justify-center gap-2.5 rounded-xl bg-white px-4 sm:px-8 text-sm sm:text-base font-bold text-ink shadow-lg border-2 border-ink transition-all duration-300 hover:bg-[#FFF7ED] hover:scale-[1.02] active:scale-95 w-full sm:w-auto"
                >
                  <Phone className="size-4 sm:size-5 text-[#F97316]" />
                  Book by Phone
                </a>
              </div>
              {/* Row 2 (Tertiary) */}
              <div className="flex flex-col sm:flex-row w-full">
                <button
                  onClick={() => setIsAttachCarOpen(true)}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-ink px-4 sm:px-6 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-ink/80 hover:scale-[1.02] active:scale-95 w-full sm:w-auto"
                >
                  <Car className="size-4 text-[#F97316]" />
                  Attach Your Car
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AttachCarModal isOpen={isAttachCarOpen} onClose={() => setIsAttachCarOpen(false)} />
    </>
  );
}
