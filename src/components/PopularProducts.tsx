"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import ComingSoonModal from "@/components/ComingSoonModal";
import { PRODUCTS } from "@/lib/products";

export default function PopularProducts() {
  const [comingSoon, setComingSoon] = useState<string | null>(null);

  return (
    <section className="section-padding" style={{ backgroundColor: "#F7F7F5" }}>
      <div className="container-custom">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PRODUCTS.map((product, i) => (
            <Reveal key={product.id} delay={i * 70}>
              <ProductCard
                product={product}
                onWishlist={() => setComingSoon("Wishlist")}
              />
            </Reveal>
          ))}
        </div>
      </div>

      <ComingSoonModal
        open={comingSoon !== null}
        feature={comingSoon ?? ""}
        onClose={() => setComingSoon(null)}
      />
    </section>
  );
}
