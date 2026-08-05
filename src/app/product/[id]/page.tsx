"use client";

import { use, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Heart, Share2, Star, Truck, ShieldCheck, MessageCircle, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AccountRequiredModal from "@/components/AccountRequiredModal";
import ComingSoonModal from "@/components/ComingSoonModal";
import { useCountry } from "@/contexts/CountryContext";
import { useCart } from "@/contexts/CartContext";
import { getProduct } from "@/lib/products";
import { isLoggedIn } from "@/lib/auth";

export default function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();
  const product = getProduct(id);
  const { formatPrice } = useCountry();
  const { addItem } = useCart();
  const [accountModal, setAccountModal] = useState(false);
  const [comingSoon, setComingSoon] = useState<string | null>(null);

  if (!product) {
    return (
      <div style={{ fontFamily: "Poppins" }}>
        <Header />
        <main className="container-custom py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Link href="/shop" className="btn-primary">Back to Shop</Link>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product);
  };

  const handleBuyNow = () => {
    if (!isLoggedIn()) {
      setAccountModal(true);
      return;
    }
    addItem(product);
    router.push("/cart");
  };

  return (
    <div style={{ fontFamily: "Poppins" }}>
      <Header />
      <main className="container-custom py-10">
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 text-sm mb-8 hover:opacity-60 transition-opacity"
          style={{ color: "#888" }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Shop
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
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

          <div className="space-y-6">
            {product.badge && (
              <span
                className="inline-block px-3 py-1 rounded-lg text-xs font-semibold"
                style={{ backgroundColor: "#0047AB", color: "#FFFFFF" }}
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

            <div className="flex items-center gap-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-current"
                    style={{ color: i < Math.floor(product.rating) ? "#0047AB" : "#E8E8E8" }}
                  />
                ))}
              </div>
              <span style={{ color: "#888", fontSize: "0.85rem" }}>
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <div
              style={{ color: "#11141C", fontWeight: 700, letterSpacing: "-0.02em" }}
              className="text-4xl"
            >
              {formatPrice(product.priceNGN)}
            </div>

            <p style={{ color: "#666", lineHeight: 1.8 }} className="text-sm">
              {product.description}
            </p>

            <div className="flex gap-3">
              <button type="button" onClick={handleAddToCart} className="btn-primary flex-1">
                Add to Cart
              </button>
              <button type="button" onClick={handleBuyNow} className="btn-outline flex-1">
                Buy Now
              </button>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setComingSoon("Wishlist")}
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors"
                style={{ border: "1.5px solid #E8E8E8", color: "#11141C" }}
              >
                <Heart className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => setComingSoon("Share Product")}
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors"
                style={{ border: "1.5px solid #E8E8E8", color: "#11141C" }}
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>

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
                  <item.icon className="w-4 h-4 flex-shrink-0" style={{ color: "#0047AB" }} />
                  <span style={{ color: "#666", fontSize: "0.85rem", fontFamily: "Poppins" }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            <div
              className="flex items-center justify-between p-4 rounded-xl"
              style={{ backgroundColor: "#F7F7F5", border: "1px solid #E8E8E8" }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{ backgroundColor: "#0047AB", color: "#FFFFFF" }}
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
                type="button"
                onClick={() => setComingSoon("Direct Messaging")}
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

      <AccountRequiredModal
        open={accountModal}
        redirectTo={`/product/${id}`}
        onClose={() => setAccountModal(false)}
      />
      <ComingSoonModal
        open={comingSoon !== null}
        feature={comingSoon ?? ""}
        onClose={() => setComingSoon(null)}
      />
    </div>
  );
}
