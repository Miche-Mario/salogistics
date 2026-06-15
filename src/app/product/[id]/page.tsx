"use client";

import { use } from "react";
import Link from "next/link";
import { Heart, Share2, Star, Truck, ShieldCheck, MessageCircle, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCountry } from "@/contexts/CountryContext";

// Mock data — replace with real API fetch
const PRODUCTS: Record<string, {
  name: string;
  priceNGN: number;
  rating: number;
  reviews: number;
  images: string[];
  description: string;
  seller: string;
  sellerRating: number;
  location: string;
  badge?: string;
}> = {
  "1": {
    name: "Premium Wireless Headphones",
    priceNGN: 45000,
    rating: 4.8,
    reviews: 124,
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=700&auto=format&fit=crop&q=80",
    ],
    description:
      "High-quality wireless headphones with active noise cancellation, 30-hour battery life, and premium sound quality. Perfect for music lovers and professionals.",
    seller: "TechHub Lagos",
    sellerRating: 4.9,
    location: "Lagos, Nigeria",
    badge: "Trending",
  },
};

const DEFAULT_PRODUCT = {
  name: "Product",
  priceNGN: 25000,
  rating: 4.7,
  reviews: 56,
  images: ["https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700&auto=format&fit=crop&q=80"],
  description: "Quality product from a verified seller. Fast delivery available.",
  seller: "SA Seller",
  sellerRating: 4.8,
  location: "Nigeria",
};

export default function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const product = PRODUCTS[id] ?? { ...DEFAULT_PRODUCT, name: `Product #${id}` };
  const { formatPrice } = useCountry();
  const [activeImg, setActiveImg] = (typeof window !== "undefined"
    ? [0, () => {}]
    : [0, () => {}]) as [number, (n: number) => void];

  return (
    <div style={{ fontFamily: "Poppins" }}>
      <Header />
      <main className="container-custom py-10">
        {/* Breadcrumb */}
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 text-sm mb-8 hover:opacity-60 transition-opacity"
          style={{ color: "#888" }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Shop
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Images */}
          <div className="space-y-3">
            <div
              className="rounded-2xl overflow-hidden"
              style={{ aspectRatio: "1/1", backgroundColor: "#F7F7F5" }}
            >
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <div
                    key={i}
                    className="w-20 h-20 rounded-xl overflow-hidden cursor-pointer"
                    style={{ border: "2px solid #E8E8E8" }}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="space-y-6">
            {product.badge && (
              <span
                className="inline-block px-3 py-1 rounded-lg text-xs font-semibold"
                style={{ backgroundColor: "#3DFF7F", color: "#11141C" }}
              >
                {product.badge}
              </span>
            )}

            <h1
              style={{ color: "#11141C", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.2 }}
              className="text-3xl"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-current"
                    style={{ color: i < Math.floor(product.rating) ? "#3DFF7F" : "#E8E8E8" }}
                  />
                ))}
              </div>
              <span style={{ color: "#888", fontSize: "0.85rem" }}>
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div
              style={{ color: "#11141C", fontWeight: 700, letterSpacing: "-0.02em" }}
              className="text-4xl"
            >
              {formatPrice(product.priceNGN)}
            </div>

            <p style={{ color: "#666", lineHeight: 1.8 }} className="text-sm">
              {product.description}
            </p>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                className="btn-primary flex-1"
              >
                Add to Cart
              </button>
              <button
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors"
                style={{ border: "1.5px solid #E8E8E8", color: "#11141C" }}
              >
                <Heart className="w-5 h-5" />
              </button>
              <button
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors"
                style={{ border: "1.5px solid #E8E8E8", color: "#11141C" }}
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>

            {/* Delivery info */}
            <div className="space-y-3 py-5" style={{ borderTop: "1px solid #E8E8E8" }}>
              {[
                {
                  icon: Truck,
                  text: "Delivered in 2–5 business days via SA-Errandlogistics",
                },
                {
                  icon: MessageCircle,
                  text: "Message the seller to agree on price and delivery",
                },
                {
                  icon: ShieldCheck,
                  text: "Payment arranged directly with the seller",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <item.icon className="w-4 h-4 flex-shrink-0" style={{ color: "#3DFF7F" }} />
                  <span style={{ color: "#666", fontSize: "0.85rem", fontFamily: "Poppins" }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Seller */}
            <div
              className="flex items-center justify-between p-4 rounded-xl"
              style={{ backgroundColor: "#F7F7F5", border: "1px solid #E8E8E8" }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{ backgroundColor: "#3DFF7F", color: "#11141C" }}
                >
                  {product.seller[0]}
                </div>
                <div>
                  <div style={{ color: "#11141C", fontWeight: 600 }} className="text-sm">
                    {product.seller}
                  </div>
                  <div style={{ color: "#888" }} className="text-xs">
                    📍 {product.location} · ⭐ {product.sellerRating}
                  </div>
                </div>
              </div>
              <button
                className="text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
                style={{ border: "1.5px solid #11141C", color: "#11141C" }}
              >
                Message
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
