"use client";

import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="section-padding-sm" style={{ backgroundColor: "#0047AB" }}>
      <div className="container-custom">
        <Reveal className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2
              style={{
                fontFamily: "Poppins",
                color: "#FFFFFF",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
              }}
              className="text-4xl md:text-5xl mb-3"
            >
              Start trading today.
            </h2>
            <p
              style={{ fontFamily: "Poppins", color: "#FFFFFF", opacity: 0.85 }}
              className="text-base max-w-md"
            >
              Join thousands of buyers and sellers across West Africa. Free to sign up.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/register"
              className="flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm transition-all duration-200"
              style={{
                backgroundColor: "#FFFFFF",
                color: "#0047AB",
                fontFamily: "Poppins",
              }}
            >
              Create Account
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/shop"
              className="flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm transition-all duration-200"
              style={{
                backgroundColor: "transparent",
                color: "#FFFFFF",
                border: "1.5px solid #FFFFFF",
                fontFamily: "Poppins",
              }}
            >
              Browse Products
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
