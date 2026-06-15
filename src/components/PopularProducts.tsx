"use client";

import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";
import { Heart, Star, ArrowRight } from "lucide-react";
import { useCountry } from "@/contexts/CountryContext";

// Base prices in NGN
const PRODUCTS = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    priceNGN: 45000,
    rating: 4.8,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=80",
    seller: "TechHub Lagos",
    badge: "Trending",
  },
  {
    id: 2,
    name: "Ankara Print Dress",
    priceNGN: 18500,
    rating: 4.9,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&auto=format&fit=crop&q=80",
    seller: "AfroStyle Accra",
    badge: "Top Rated",
  },
  {
    id: 3,
    name: "Smart Watch Series 7",
    priceNGN: 78500,
    rating: 4.7,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=80",
    seller: "Gadget Store",
    badge: null,
  },
  {
    id: 4,
    name: "Organic Shea Butter Set",
    priceNGN: 12000,
    rating: 5.0,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500&auto=format&fit=crop&q=80",
    seller: "Natural Beauty Cotonou",
    badge: "Best Seller",
  },
];

export default function PopularProducts() {
  const { formatPrice } = useCountry();

  return (
    <section className="section-padding" style={{ backgroundColor: "#F7F7F5" }}>
      <div className="container-custom">
        {/* Header */}
        <Reveal className="flex items-end justify-between mb-12">
          <div>
            <p
              style={{ color: "#999", fontFamily: "Poppins", fontWeight: 500, letterSpacing: "0.1em" }}
              className="text-xs uppercase tracking-widest mb-3"
            >
              Popular Now
            </p>
            <h2
              style={{ fontFamily: "Poppins", color: "#11141C", fontWeight: 700, letterSpacing: "-0.03em" }}
              className="text-4xl md:text-5xl"
            >
              Top picks.
            </h2>
          </div>
          <Link
            href="/shop"
            className="hidden md:flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-60"
            style={{ color: "#11141C", fontFamily: "Poppins" }}
          >
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </Reveal>

        {/* Products grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PRODUCTS.map((product, i) => (
            <Reveal key={product.id} delay={i * 70} className="group">
              <Link href={`/product/${product.id}`} className="block">
                {/* Image container */}
                <div
                  className="relative overflow-hidden rounded-xl mb-4"
                  style={{ aspectRatio: "4/5", backgroundColor: "#EFEFEF" }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Badge */}
                  {product.badge && (
                    <div
                      className="absolute top-3 left-3 px-2.5 py-1 rounded-lg text-xs font-semibold"
                      style={{ backgroundColor: "#3DFF7F", color: "#11141C", fontFamily: "Poppins" }}
                    >
                      {product.badge}
                    </div>
                  )}

                  {/* Wishlist */}
                  <button
                    className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                    style={{ backgroundColor: "#FFFFFF", color: "#11141C" }}
                    onClick={(e) => e.preventDefault()}
                  >
                    <Heart className="w-4 h-4" />
                  </button>

                  {/* Quick add */}
                  <div
                    className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                  >
                    <button
                      className="w-full py-2.5 rounded-lg text-sm font-semibold"
                      style={{ backgroundColor: "#11141C", color: "#FFFFFF", fontFamily: "Poppins" }}
                      onClick={(e) => e.preventDefault()}
                    >
                      Quick Add
                    </button>
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-1.5">
                  <p
                    style={{ color: "#999", fontFamily: "Poppins" }}
                    className="text-xs"
                  >
                    {product.seller}
                  </p>
                  <h3
                    style={{ fontFamily: "Poppins", color: "#11141C", fontWeight: 500, lineHeight: 1.3 }}
                    className="text-sm"
                  >
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span
                      style={{ fontFamily: "Poppins", color: "#11141C", fontWeight: 600 }}
                      className="text-base"
                    >
                      {formatPrice(product.priceNGN)}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-current" style={{ color: "#3DFF7F" }} />
                      <span
                        style={{ color: "#666", fontFamily: "Poppins" }}
                        className="text-xs"
                      >
                        {product.rating}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
