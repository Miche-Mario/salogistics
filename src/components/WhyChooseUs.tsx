"use client";

import { Reveal } from "@/components/ui/Reveal";

const FEATURES = [
  {
    title: "Direct Messaging",
    description:
      "Chat with sellers before you buy. Ask questions, negotiate price, and confirm delivery details.",
  },
  {
    title: "Flexible Delivery",
    description:
      "Choose between seller delivery or our SA-Errandlogistics cross-border shipping network.",
  },
  {
    title: "Deal on Your Terms",
    description:
      "Payment is arranged directly between buyer and seller — bank transfer, mobile money, or cash on delivery.",
  },
  {
    title: "Cross-Border Commerce",
    description:
      "Sell in Nigeria, Ghana, and Benin with one account. We handle discovery and logistics coordination.",
  },
  {
    title: "Verified Sellers",
    description:
      "All sellers go through identity verification. Check ratings and transaction history instantly.",
  },
  {
    title: "Local Currency Display",
    description:
      "Browse prices in Naira, Cedi, or CFA depending on your country — no mental math required.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding" style={{ backgroundColor: "#11141C" }}>
      <div className="container-custom">
        {/* Header */}
        <Reveal className="mb-16">
          <p
            style={{ color: "#0047AB", fontFamily: "Poppins", fontWeight: 600, letterSpacing: "0.1em" }}
            className="text-xs uppercase tracking-widest mb-4"
          >
            Why SA-Errandlogistics
          </p>
          <h2
            style={{ fontFamily: "Poppins", color: "#FFFFFF", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.1 }}
            className="text-4xl md:text-5xl max-w-xl"
          >
            Built for trust. Built for West Africa.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: "#2A2D35" }}>
          {FEATURES.map((feature, i) => (
            <Reveal
              key={i}
              delay={i * 60}
              className="p-8 group transition-colors duration-300 hover:bg-[#1A1D25]"
              style={{ backgroundColor: "#11141C" }}
            >
              <div style={{ color: "#0047AB", fontWeight: 700 }} className="text-sm mb-6">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 style={{ color: "#FFFFFF", fontWeight: 600 }} className="text-lg mb-3">
                {feature.title}
              </h3>
              <p style={{ color: "#888888" }} className="text-sm leading-relaxed">
                {feature.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
