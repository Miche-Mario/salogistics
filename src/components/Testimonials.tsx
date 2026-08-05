"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "As a seller in Accra, I now reach buyers in Lagos and Cotonou. SA-Errand handles everything else.",
    name: "Kwame Mensah",
    title: "Fashion Seller · Accra, Ghana",
    avatar: "https://i.pravatar.cc/80?img=12",
    rating: 5,
  },
  {
    quote:
      "I bought electronics from Nigeria and they arrived in perfect condition in 4 days. The chat feature is great.",
    name: "Marie Adjovi",
    title: "Buyer · Cotonou, Benin",
    avatar: "https://i.pravatar.cc/80?img=5",
    rating: 5,
  },
  {
    quote:
      "Messaging sellers before buying made all the difference. I agreed on price and delivery in minutes.",
    name: "Amara Okafor",
    title: "Frequent Buyer · Lagos, Nigeria",
    avatar: "https://i.pravatar.cc/80?img=1",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container-custom">
        {/* Header */}
        <Reveal className="mb-14">
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#999", fontWeight: 500 }}>
            Reviews
          </p>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ color: "#11141C", letterSpacing: "-0.03em" }}>
            What people say.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <Reveal
              key={i}
              delay={i * 100}
              className="p-7 rounded-2xl"
              style={{ backgroundColor: "#F7F7F5", border: "1.5px solid #E8E8E8" }}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {[...Array(t.rating)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-current"
                    style={{ color: "#0047AB" }}
                  />
                ))}
              </div>

              {/* Quote */}
              <p
                style={{ fontFamily: "Poppins", color: "#11141C", lineHeight: 1.7 }}
                className="text-base mb-6"
              >
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover"
                />
                <div>
                  <div
                    style={{ fontFamily: "Poppins", color: "#11141C", fontWeight: 600 }}
                    className="text-sm"
                  >
                    {t.name}
                  </div>
                  <div
                    style={{ fontFamily: "Poppins", color: "#999" }}
                    className="text-xs"
                  >
                    {t.title}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
