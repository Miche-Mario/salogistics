"use client";

import { Reveal } from "@/components/ui/Reveal";

const STEPS = [
  {
    number: "01",
    title: "Browse",
    description:
      "Search thousands of products across Nigeria, Ghana, and Benin. Filter by location, price, and category.",
    image:
      "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=600&auto=format&fit=crop&q=80",
  },
  {
    number: "02",
    title: "Connect",
    description:
      "Message sellers directly. Ask questions, negotiate prices, build trust before you buy.",
    image:
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&auto=format&fit=crop&q=80",
  },
  {
    number: "03",
    title: "Choose delivery",
    description:
      "Pick seller delivery or SA-Errandlogistics fast shipping. Track your order end-to-end.",
    image:
      "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=600&auto=format&fit=crop&q=80",
  },
  {
    number: "04",
    title: "Agree & receive",
    description:
      "Finalize price and delivery with the seller, arrange payment directly, and track your order until it arrives.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&auto=format&fit=crop&q=80",
  },
];

export default function HowItWorks() {
  return (
    <section className="section-padding" style={{ backgroundColor: "#F7F7F5" }}>
      <div className="container-custom">
        {/* Header */}
        <Reveal className="mb-16">
          <p
            style={{ color: "#0047AB", fontFamily: "Poppins", fontWeight: 600, letterSpacing: "0.1em" }}
            className="text-xs uppercase tracking-widest mb-4"
          >
            The Process
          </p>
          <h2
            style={{ fontFamily: "Poppins", color: "#11141C", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.1 }}
            className="text-4xl md:text-5xl max-w-xl"
          >
            Trading made simple.
          </h2>
        </Reveal>

        {/* Steps */}
        <div className="space-y-4">
          {STEPS.map((step, i) => (
            <Reveal
              key={i}
              delay={i * 70}
              className="group grid md:grid-cols-12 gap-6 md:gap-8 items-center rounded-2xl p-6 md:p-8 transition-all duration-300"
              style={{
                backgroundColor: "#FFFFFF",
                border: "1.5px solid transparent",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#0047AB";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "transparent";
              }}
            >
              {/* Number */}
              <div className="md:col-span-1">
                <span
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 800,
                    color: "#E8E8E8",
                    fontSize: "2.5rem",
                    lineHeight: 1,
                    letterSpacing: "-0.04em",
                    transition: "color 0.2s",
                  }}
                  className="group-hover:text-primary-300"
                >
                  {step.number}
                </span>
              </div>

              {/* Image */}
              <div className="md:col-span-3 rounded-xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="md:col-span-7 space-y-2">
                <h3
                  style={{ fontFamily: "Poppins", color: "#11141C", fontWeight: 600 }}
                  className="text-2xl"
                >
                  {step.title}
                </h3>
                <p
                  style={{ color: "#666666", fontFamily: "Poppins" }}
                  className="text-base leading-relaxed max-w-lg"
                >
                  {step.description}
                </p>
              </div>

              {/* Arrow */}
              <div className="md:col-span-1 hidden md:flex justify-end">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: "#F7F7F5" }}
                >
                  <span style={{ color: "#11141C", fontSize: "1.1rem" }}>→</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
