import balenoCngImg from "@/assets/cars/maruti_suzuki_baleno_cng_petrol.jpeg";
import balenoImg from "@/assets/cars/maruti_suzuki_baleno.jpeg";
import ertigaZdiImg from "@/assets/cars/maruti_suzuki_ertiga_dci.jpeg";
import ertigaPetrolImg from "@/assets/cars/maruti_suzuki_ertigaa.jpeg";
import fronxImg from "@/assets/cars/maruti_suzuki_fronx.jpeg";
import magniteImg from "@/assets/cars/nissan_magnet.jpeg";
import etiosImg from "@/assets/cars/toyota_etios.jpeg";
import etiosAltImg from "@/assets/cars/toyota_etios_alt.jpeg";
import venueImg from "@/assets/cars/hyundai_venue.jpeg";

export const business = {
  name: "RK Travels & Self-Drive Cars",
  shortName: "RK Travels",
  phone: "9177340016",
  phoneHref: "tel:+919177340016",
  email: "rktravelsselfdrivecars@gmail.com",
  whatsapp: "https://wa.me/919177340016",
  area: "Jadcherla, Telangana",
  address: "Road No. 03, Vijay Nagar Colony, Jadcherla, Telangana, India",
  mapsUrl:
    "https://www.google.com/maps/place/RK+TRAVELS+%26+SELF+DRIVE+CARS/@16.7755409,78.1285551,17z/data=!4m6!3m5!1s0x3bca31006604a377:0x65551727590e9ccc!8m2!3d16.7755406!4d78.1285523!16s%2Fg%2F11yg405mxb?hl=en&entry=ttu&g_ep=EgoyMDI2MDgyNC4wIKXMDSoASAFQAw%3D%3D",
  dealsIn: [
    "Self-Drive Cars",
    "Car Rentals",
    "SUV Rentals",
    "Sedan Rentals",
    "Hatchback Rentals",
    "Outstation Travel",
    "Family Travel",
    "Pickup & Drop",
  ],
  tags: ["Self-Drive", "Outstation", "Local Transport"],
  languages: "English, Telugu, Hindi",
};

export type Vehicle = {
  id: string;
  name: string;
  category: string;
  image: string;
  badge: string;
  seats: string;
  transmission: string;
  fuel: string;
  price12h150km: string;
  price12h300km: string;
  price24h300km: string;
  gallery?: string[];
};

/** Fleet cards — names & images match files in /cars. Prices are placeholders. */
export const vehicles: Vehicle[] = [
  {
    id: "baleno-cng",
    name: "Maruti Suzuki Baleno",
    category: "Hatchback",
    image: balenoCngImg,
    badge: "Easy City Drive",
    seats: "5 Seats",
    transmission: "To Be Confirmed",
    fuel: "Petrol",
    price12h150km: "₹1,400",
    price12h300km: "₹2,000",
    price24h300km: "₹2,400",
    gallery: [balenoCngImg, balenoImg],
  },
  {
    id: "baleno",
    name: "Maruti Suzuki Baleno",
    category: "Hatchback",
    image: balenoImg,
    badge: "Premium Hatchback",
    seats: "5 Seats",
    transmission: "To Be Confirmed",
    fuel: "CNG / Petrol",
    price12h150km: "₹1,400",
    price12h300km: "₹2,000",
    price24h300km: "₹2,400",
    gallery: [balenoImg, balenoCngImg],
  },
  {
    id: "etios-1",
    name: "Toyota Etios",
    category: "Sedan",
    image: etiosImg,
    badge: "Comfort Ride",
    seats: "5 Seats",
    transmission: "To Be Confirmed",
    fuel: "Diesel",
    price12h150km: "₹1,200",
    price12h300km: "₹1,800",
    price24h300km: "₹2,200",
    gallery: [etiosImg, etiosAltImg],
  },
  {
    id: "etios-2",
    name: "Toyota Etios",
    category: "Sedan",
    image: etiosAltImg,
    badge: "Comfort Ride",
    seats: "5 Seats",
    transmission: "To Be Confirmed",
    fuel: "Diesel",
    price12h150km: "₹1,200",
    price12h300km: "₹1,800",
    price24h300km: "₹2,200",
    gallery: [etiosAltImg, etiosImg],
  },
  {
    id: "magnite",
    name: "Nissan Magnite",
    category: "Compact SUV",
    image: magniteImg,
    badge: "Stylish SUV",
    seats: "5 Seats",
    transmission: "To Be Confirmed",
    fuel: "Petrol",
    price12h150km: "₹1,500",
    price12h300km: "₹2,100",
    price24h300km: "₹2,500",
  },
  {
    id: "fronx",
    name: "Maruti Suzuki Fronx",
    category: "Compact SUV",
    image: fronxImg,
    badge: "City SUV",
    seats: "5 Seats",
    transmission: "To Be Confirmed",
    fuel: "Petrol",
    price12h150km: "₹1,600",
    price12h300km: "₹2,400",
    price24h300km: "₹2,800",
  },
  {
    id: "ertiga-zdi",
    name: "Maruti Suzuki Ertiga",
    category: "MUV",
    image: ertigaZdiImg,
    badge: "Family Choice",
    seats: "7 Seats",
    transmission: "To Be Confirmed",
    fuel: "Diesel",
    price12h150km: "₹2,000",
    price12h300km: "₹3,000",
    price24h300km: "₹3,500",
    gallery: [ertigaZdiImg, ertigaPetrolImg],
  },
  {
    id: "ertiga-petrol",
    name: "Maruti Suzuki Ertiga",
    category: "MUV",
    image: ertigaPetrolImg,
    badge: "Family Choice",
    seats: "7 Seats",
    transmission: "To Be Confirmed",
    fuel: "Petrol",
    price12h150km: "₹2,000",
    price12h300km: "₹3,000",
    price24h300km: "₹3,500",
    gallery: [ertigaPetrolImg, ertigaZdiImg],
  },
  {
    id: "venue",
    name: "Hyundai Venue",
    category: "Compact SUV",
    image: venueImg,
    badge: "Comfortable SUV",
    seats: "5 Seats",
    transmission: "To Be Confirmed",
    fuel: "Petrol",
    price12h150km: "₹1,800",
    price12h300km: "₹2,500",
    price24h300km: "₹3,000",
  },
];
