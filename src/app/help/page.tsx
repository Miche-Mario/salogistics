"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { InfoPageHero, InfoLink } from "@/components/InfoPage";
import { ChevronDown } from "lucide-react";

const FAQ = [
  {
    q: "How do I buy on SA-Errandlogistics?",
    a: "Browse products, message the seller to ask questions or negotiate, agree on price and delivery, then arrange payment directly with the seller. We don't process payments on the platform.",
  },
  {
    q: "How do I list a product as a seller?",
    a: "Create a seller account, upload your product with photos and description, set your delivery preference, and respond to buyer messages. You'll handle payment arrangements directly with buyers.",
  },
  {
    q: "Does SA-Errandlogistics handle payments?",
    a: "No. Payment is arranged directly between buyer and seller — via bank transfer, mobile money, cash on delivery, or any method you both agree on. We focus on discovery, messaging, and delivery.",
  },
  {
    q: "What delivery options are available?",
    a: "Sellers can deliver themselves, or you can choose SA-Errandlogistics cross-border shipping. See our Shipping Info page for details and timelines.",
  },
  {
    q: "How do I change my country or currency display?",
    a: "Use the country selector in the header (🇳🇬 Nigeria, 🇬🇭 Ghana, 🇧🇯 Benin). Product prices will display in the local currency for your selected country.",
  },
  {
    q: "I have a problem with a seller or buyer — what do I do?",
    a: "Contact the other party via messaging first. If you need platform support, reach out through our Contact page with your order details and we'll assist where we can.",
  },
];

export default function HelpPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <InfoPageHero
        label="Help Center"
        title="Answers to common questions."
        description="Everything you need to know about buying, selling, and using SA-Errandlogistics across West Africa."
      />

      <section className="container-custom max-w-3xl pb-20">
        <div className="space-y-3">
          {FAQ.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden"
              style={{ border: "1.5px solid #E8E8E8" }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
                style={{ backgroundColor: open === i ? "#F7F7F5" : "#FFFFFF" }}
              >
                <span className="font-semibold text-sm pr-4" style={{ color: "#11141C" }}>
                  {item.q}
                </span>
                <ChevronDown
                  className="w-4 h-4 flex-shrink-0 transition-transform"
                  style={{
                    color: "#11141C",
                    transform: open === i ? "rotate(180deg)" : "none",
                  }}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-sm leading-relaxed" style={{ color: "#666" }}>
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div
          className="mt-12 p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          style={{ backgroundColor: "#3DFF7F" }}
        >
          <div>
            <p className="font-semibold" style={{ color: "#11141C" }}>Still need help?</p>
            <p className="text-sm mt-1" style={{ color: "#11141C", opacity: 0.7 }}>
              Our support team is available Mon–Fri, 8am–6pm WAT.
            </p>
          </div>
          <InfoLink href="/contact">Contact us →</InfoLink>
        </div>
      </section>

      <Footer />
    </div>
  );
}
