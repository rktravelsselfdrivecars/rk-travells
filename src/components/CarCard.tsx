import { Users, Fuel, Settings2, Sparkles } from "lucide-react";
import { Vehicle } from "@/lib/site-data";

interface CarCardProps {
  vehicle: Vehicle;
  onViewDetails: (vehicle: Vehicle) => void;
  onBookNow: (vehicle: Vehicle) => void;
}

export function CarCard({ vehicle, onViewDetails, onBookNow }: CarCardProps) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-shadow duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.07)] flex flex-col h-full group">
      {/* Image container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-50 p-4 sm:p-6 flex items-center justify-center">
        <img
          src={vehicle.image}
          alt={`${vehicle.name} self-drive car available from RK Travels in Jadcherla`}
          loading="lazy"
          className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-[1.02]"
        />
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 border border-primary/20 text-ink px-3 py-1.5 text-xs font-semibold backdrop-blur-md">
            <Sparkles className="size-3 text-primary" />
            {vehicle.badge}
          </span>
        </div>
      </div>

      <div className="p-4 sm:p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold font-display text-ink">{vehicle.name}</h3>

        {/* Specs pills */}
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 border border-orange-100 px-2.5 py-1 text-[11px] font-semibold text-orange-700">
            <Users className="size-3" /> {vehicle.seats}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 border border-primary/20 px-2.5 py-1 text-[11px] font-semibold text-primary">
            <Settings2 className="size-3" /> {vehicle.transmission}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 border border-gray-200 px-2.5 py-1 text-[11px] font-semibold text-ink">
            <Fuel className="size-3" /> {vehicle.fuel}
          </span>
        </div>

        <div className="mt-6 mb-6 h-px w-full bg-gray-100" />

        {/* Pricing */}
        <div className="flex flex-col gap-2 mt-auto">
          <div className="flex justify-between items-end">
            <div className="flex flex-col">
              <span className="text-sm font-bold text-ink">12h - {vehicle.price12h150km}</span>
              <span className="text-[10px] text-muted-foreground font-medium uppercase">
                Limit 150 KM
              </span>
            </div>
            <div className="flex flex-col text-center">
              <span className="text-sm font-bold text-ink">{vehicle.price12h300km}</span>
              <span className="text-[10px] text-muted-foreground font-medium uppercase">
                Limit 300 KM
              </span>
            </div>
            <div className="flex flex-col text-right">
              <span className="text-sm font-bold text-ink">24h - {vehicle.price24h300km}</span>
              <span className="text-[10px] text-muted-foreground font-medium uppercase">
                Limit 300 KM
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex gap-3">
          <button
            onClick={() => onViewDetails(vehicle)}
            className="flex-1 h-12 sm:h-11 inline-flex items-center justify-center rounded-xl border-2 border-ink bg-white px-4 text-sm font-semibold text-ink transition-all duration-300 hover:bg-accent active:scale-95"
          >
            Details
          </button>
          <button
            onClick={() => onBookNow(vehicle)}
            className="flex-1 h-12 sm:h-11 inline-flex items-center justify-center rounded-xl bg-primary px-4 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:bg-[#EA580C] active:scale-95"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
