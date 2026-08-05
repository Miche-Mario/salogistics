"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ComingSoonModal from "@/components/ComingSoonModal";
import { Upload, Package, DollarSign, TrendingUp } from "lucide-react";

export default function SellPage() {
  const [comingSoon, setComingSoon] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />

      <section className="bg-gradient-to-br from-brand-blue to-primary-700 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-6">Start Selling Today</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Reach millions of buyers across West Africa. List your products,
            manage orders, and grow your business.
          </p>
          <Link
            href="/register?redirect=/sell"
            className="inline-block bg-white text-brand-blue hover:bg-gray-100 font-bold px-8 py-4 rounded-xl text-lg"
          >
            Create Seller Account
          </Link>
        </div>
      </section>

      <section className="container-custom py-16">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Sell with Us?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Package,
              title: "Easy Listing",
              description: "List products in minutes with our simple interface",
            },
            {
              icon: TrendingUp,
              title: "Reach Millions",
              description: "Access buyers across 3 countries",
            },
            {
              icon: DollarSign,
              title: "Low Fees",
              description: "Competitive commission rates",
            },
            {
              icon: Upload,
              title: "Quick Setup",
              description: "Start selling within 24 hours",
            },
          ].map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border-2 border-gray-100 text-center"
            >
              <div className="w-16 h-16 bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-brand-blue" />
              </div>
              <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-custom py-16">
        <div className="bg-white rounded-3xl p-8 shadow-xl relative">
          <span
            className="absolute top-6 right-6 px-3 py-1 rounded-lg text-xs font-semibold"
            style={{ backgroundColor: "#E0E9F5", color: "#0047AB" }}
          >
            Coming Soon
          </span>
          <h2 className="text-3xl font-bold mb-8 text-center">
            Powerful Seller Dashboard
          </h2>
          <button
            type="button"
            onClick={() => setComingSoon(true)}
            className="aspect-video w-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex flex-col items-center justify-center hover:opacity-90 transition-opacity"
          >
            <p className="text-gray-500 mb-2">Seller Dashboard Preview</p>
            <span className="text-sm font-semibold" style={{ color: "#0047AB" }}>
              Click to learn more
            </span>
          </button>
        </div>
      </section>

      <Footer />

      <ComingSoonModal
        open={comingSoon}
        feature="Seller Dashboard"
        onClose={() => setComingSoon(false)}
      />
    </div>
  );
}
