"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ComingSoonModal from "@/components/ComingSoonModal";
import { PRODUCTS } from "@/lib/products";

export default function ShopPage() {
  const [comingSoon, setComingSoon] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "Poppins" }}>
      <Header />
      <main className="container-custom py-12">
        <h1 className="text-4xl font-bold mb-8" style={{ color: "#11141C" }}>
          Shop
        </h1>
        <div className="grid md:grid-cols-4 gap-8">
          <aside className="md:col-span-1">
            <div className="bg-white border-2 border-gray-100 rounded-xl p-6 relative">
              <span
                className="absolute top-4 right-4 px-2 py-0.5 rounded text-xs font-semibold"
                style={{ backgroundColor: "#E0E9F5", color: "#0047AB" }}
              >
                Coming Soon
              </span>
              <h2 className="font-bold text-lg mb-4">Filters</h2>

              <div className="mb-6 opacity-50 pointer-events-none">
                <h3 className="font-semibold mb-2">Categories</h3>
                <div className="space-y-2">
                  {["Electronics", "Fashion", "Home", "Beauty"].map((cat) => (
                    <label key={cat} className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" disabled />
                      <span className="text-sm">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-6 opacity-50 pointer-events-none">
                <h3 className="font-semibold mb-2">Price Range</h3>
                <input type="range" className="w-full" disabled />
              </div>

              <div className="opacity-50 pointer-events-none">
                <h3 className="font-semibold mb-2">Location</h3>
                <select className="w-full border rounded-lg px-3 py-2" disabled>
                  <option>All Countries</option>
                </select>
              </div>

              <button
                type="button"
                onClick={() => setComingSoon("Advanced Filters & Search")}
                className="btn-outline w-full mt-6 text-sm"
              >
                Notify me when available
              </button>
            </div>
          </aside>

          <div className="md:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <p style={{ color: "#666" }}>
                Showing {PRODUCTS.length} products
              </p>
              <select
                className="border rounded-lg px-4 py-2 text-sm opacity-50"
                disabled
                title="Coming soon"
              >
                <option>Most Popular</option>
              </select>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {PRODUCTS.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onWishlist={() => setComingSoon("Wishlist")}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />

      <ComingSoonModal
        open={comingSoon !== null}
        feature={comingSoon ?? ""}
        onClose={() => setComingSoon(null)}
      />
    </div>
  );
}
