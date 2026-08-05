"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useCountry } from "@/contexts/CountryContext";
import { FadeIn } from "@/components/ui/Reveal";

export default function Hero() {
  const { country } = useCountry();

  return (
    <section className="section-padding" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn className="space-y-8">
            <div className="flex items-center gap-2">
              <span className="text-lg">{country.flag}</span>
              <span className="text-sm font-medium" style={{ color: "#888888" }}>
                {country.name} · {COUNTRY_LABELS[country.code]}
              </span>
            </div>

            <h1
              style={{ color: "#11141C", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em" }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold"
            >
              Buy & Sell{" "}
              <span style={{ backgroundColor: "#0047AB", color: "#FFFFFF", padding: "0 6px", borderRadius: "4px" }}>
                freely
              </span>{" "}
              in West Africa.
            </h1>

            <p style={{ color: "#666666", maxWidth: "440px" }} className="text-lg leading-relaxed">
              The marketplace built for Nigeria, Ghana, and Benin. Discover products, message sellers, and arrange delivery directly.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link href="/shop" className="btn-primary">
                Start Shopping
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/sell" className="btn-outline">Sell on SA</Link>
            </div>

            <div className="flex items-center gap-6 pt-4" style={{ borderTop: "1px solid #E8E8E8" }}>
              {[
                { value: "10K+", label: "Products" },
                { value: "4K+", label: "Sellers" },
                { value: "3", label: "Countries" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold" style={{ color: "#11141C" }}>{stat.value}</div>
                  <div className="text-xs" style={{ color: "#999999" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={150} className="relative">
            <div className="grid grid-cols-2 gap-3">
              {HERO_IMAGES.map((img, i) => (
                <div
                  key={i}
                  className={`relative overflow-hidden rounded-2xl ${i === 0 ? "col-span-2 h-56" : "h-44"}`}
                  style={{ backgroundColor: "#F7F7F5" }}
                >
                  <img src={img.src} alt={img.label} className="w-full h-full object-cover" loading="lazy" />
                  <div
                    className="absolute bottom-3 left-3 px-3 py-1.5 rounded-lg text-xs font-semibold"
                    style={{ backgroundColor: "rgba(255,255,255,0.92)", color: "#11141C" }}
                  >
                    {img.label}
                  </div>
                </div>
              ))}
            </div>

            <div
              className="absolute -right-4 top-1/3 rounded-xl px-4 py-3 shadow-xl"
              style={{ backgroundColor: "#0047AB" }}
            >
              <div className="text-sm font-bold" style={{ color: "#FFFFFF" }}>Fast Delivery</div>
              <div className="text-xs" style={{ color: "#FFFFFF", opacity: 0.85 }}>2–5 business days</div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

const HERO_IMAGES = [
  { src: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=900&auto=format&fit=crop&q=80", label: "Top Picks Today" },
  { src: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=500&auto=format&fit=crop&q=80", label: "Fashion" },
  { src: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500&auto=format&fit=crop&q=80", label: "Electronics" },
];

const COUNTRY_LABELS: Record<string, string> = {
  ng: "Showing prices in ₦ NGN",
  gh: "Showing prices in GH₵ GHS",
  bj: "Showing prices in CFA XOF",
};
