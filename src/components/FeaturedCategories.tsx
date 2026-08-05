"use client";

import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CATEGORIES = [
  {
    name: "Electronics",
    count: "2,340+",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&auto=format&fit=crop&q=80",
    href: "/shop?category=electronics",
  },
  {
    name: "Fashion",
    count: "5,100+",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&auto=format&fit=crop&q=80",
    href: "/shop?category=fashion",
  },
  {
    name: "Beauty",
    count: "3,450+",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&auto=format&fit=crop&q=80",
    href: "/shop?category=beauty",
  },
  {
    name: "Home & Living",
    count: "1,890+",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&auto=format&fit=crop&q=80",
    href: "/shop?category=home",
  },
  {
    name: "Food & Grocery",
    count: "1,560+",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&auto=format&fit=crop&q=80",
    href: "/shop?category=food",
  },
  {
    name: "Sports",
    count: "980+",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&auto=format&fit=crop&q=80",
    href: "/shop?category=sports",
  },
];

export default function FeaturedCategories() {
  return (
    <section className="section-padding" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container-custom">
        {/* Header */}
        <Reveal className="flex items-end justify-between mb-12">
          <div>
            <p
              style={{ color: "#999", fontFamily: "Poppins", fontWeight: 500, letterSpacing: "0.1em" }}
              className="text-xs uppercase tracking-widest mb-3"
            >
              Categories
            </p>
            <h2
              style={{ fontFamily: "Poppins", color: "#11141C", fontWeight: 700, letterSpacing: "-0.03em" }}
              className="text-4xl md:text-5xl"
            >
              Shop by category.
            </h2>
          </div>
          <Link
            href="/shop"
            className="hidden md:flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-60"
            style={{ color: "#11141C", fontFamily: "Poppins" }}
          >
            All categories <ArrowRight className="w-4 h-4" />
          </Link>
        </Reveal>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {CATEGORIES.map((cat, i) => (
            <Reveal key={i} delay={i * 50}>
              <Link
                href={cat.href}
                className="group relative block overflow-hidden rounded-2xl"
                style={{ aspectRatio: i === 0 || i === 3 ? "4/3" : "3/4" }}
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay */}
                <div
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{ background: "linear-gradient(to top, rgba(17,20,28,0.65) 0%, transparent 60%)" }}
                />
                {/* Text */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3
                    style={{ fontFamily: "Poppins", color: "#FFFFFF", fontWeight: 600 }}
                    className="text-xl mb-0.5"
                  >
                    {cat.name}
                  </h3>
                  <p
                    style={{ fontFamily: "Poppins", color: "rgba(255,255,255,0.7)" }}
                    className="text-sm"
                  >
                    {cat.count} items
                  </p>
                </div>
                {/* Arrow on hover */}
                <div
                  className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: "#0047AB" }}
                >
                  <ArrowRight className="w-4 h-4" style={{ color: "#FFFFFF" }} />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
