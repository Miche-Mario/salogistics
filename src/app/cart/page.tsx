"use client";

import Link from "next/link";
import Image from "next/image";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AccountRequiredModal from "@/components/AccountRequiredModal";
import ComingSoonModal from "@/components/ComingSoonModal";
import { useCart } from "@/contexts/CartContext";
import { useCountry } from "@/contexts/CountryContext";
import { isLoggedIn } from "@/lib/auth";
import { useState } from "react";

export default function CartPage() {
  const { items, itemCount, subtotalNGN, updateQuantity, removeItem } = useCart();
  const { formatPrice } = useCountry();
  const [accountModal, setAccountModal] = useState(false);
  const [checkoutModal, setCheckoutModal] = useState(false);

  const handleCheckout = () => {
    if (!isLoggedIn()) {
      setAccountModal(true);
      return;
    }
    setCheckoutModal(true);
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "Poppins" }}>
      <Header />

      <main className="container-custom py-12">
        <h1 className="text-3xl font-bold mb-2" style={{ color: "#11141C" }}>
          Your Cart
        </h1>
        <p className="text-sm mb-10" style={{ color: "#666" }}>
          {itemCount} {itemCount === 1 ? "item" : "items"}
        </p>

        {items.length === 0 ? (
          <div className="text-center py-20">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: "#F7F7F5" }}
            >
              <ShoppingBag className="w-8 h-8" style={{ color: "#999" }} />
            </div>
            <p className="font-semibold mb-2" style={{ color: "#11141C" }}>
              Your cart is empty
            </p>
            <p className="text-sm mb-6" style={{ color: "#666" }}>
              Browse products and add items to get started.
            </p>
            <Link href="/shop" className="btn-primary">
              Browse Shop
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-4 rounded-2xl"
                  style={{ border: "1.5px solid #E8E8E8" }}
                >
                  <div
                    className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0"
                    style={{ backgroundColor: "#F7F7F5" }}
                  >
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/product/${item.id}`}
                      className="font-semibold text-sm hover:opacity-70 transition-opacity block truncate"
                      style={{ color: "#11141C" }}
                    >
                      {item.name}
                    </Link>
                    <p className="text-xs mt-1" style={{ color: "#888" }}>
                      {item.seller}
                    </p>
                    <p className="font-bold mt-2" style={{ color: "#11141C" }}>
                      {formatPrice(item.priceNGN)}
                    </p>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          className="w-8 h-8 rounded-lg flex items-center justify-center disabled:opacity-40"
                          style={{ border: "1px solid #E8E8E8" }}
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-lg flex items-center justify-center"
                          style={{ border: "1px solid #E8E8E8" }}
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="p-2 rounded-lg hover:bg-red-50 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" style={{ color: "#EF4444" }} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <div
                className="p-6 rounded-2xl sticky top-24"
                style={{ backgroundColor: "#F7F7F5", border: "1px solid #E8E8E8" }}
              >
                <h2 className="font-semibold mb-4" style={{ color: "#11141C" }}>
                  Order Summary
                </h2>
                <div className="flex justify-between text-sm mb-2" style={{ color: "#666" }}>
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotalNGN)}</span>
                </div>
                <div className="flex justify-between text-sm mb-4" style={{ color: "#666" }}>
                  <span>Delivery</span>
                  <span>Arranged with seller</span>
                </div>
                <div
                  className="flex justify-between font-bold text-lg pt-4 mb-6"
                  style={{ borderTop: "1px solid #E8E8E8", color: "#11141C" }}
                >
                  <span>Total</span>
                  <span>{formatPrice(subtotalNGN)}</span>
                </div>
                <button type="button" onClick={handleCheckout} className="btn-primary w-full mb-3">
                  Proceed to Purchase
                </button>
                <Link href="/shop" className="btn-outline w-full">
                  Continue Shopping
                </Link>
                <p className="text-xs mt-4 leading-relaxed" style={{ color: "#888" }}>
                  Payment is arranged directly with the seller. An account is required to complete a purchase.
                </p>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />

      <AccountRequiredModal
        open={accountModal}
        redirectTo="/cart"
        onClose={() => setAccountModal(false)}
      />
      <ComingSoonModal
        open={checkoutModal}
        feature="Checkout & Payment"
        onClose={() => setCheckoutModal(false)}
      />
    </div>
  );
}
