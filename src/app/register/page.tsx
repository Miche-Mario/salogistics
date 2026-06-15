"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Eye, EyeOff } from "lucide-react";
import { useCountry, COUNTRIES, CountryCode } from "@/contexts/CountryContext";

export default function RegisterPage() {
  const [type, setType] = useState<"buyer" | "seller">("buyer");
  const [showPassword, setShowPassword] = useState(false);
  const { setCountryCode } = useCountry();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    country: "ng" as CountryCode,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCountryCode(form.country);
    alert("Account created! Welcome to SA-Errandlogistics.");
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2" style={{ fontFamily: "Poppins" }}>
      {/* Left — form */}
      <div className="flex flex-col justify-center px-8 py-12 md:px-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 mb-12">
          <div
            className="w-9 h-9 rounded-lg overflow-hidden p-1"
            style={{ backgroundColor: "#11141C" }}
          >
            <Image src="/assets/logo.png" alt="SA" width={32} height={32} className="object-contain" />
          </div>
          <span style={{ color: "#11141C", fontWeight: 600 }} className="text-base">
            SA-Errandlogistics
          </span>
        </Link>

        <div className="max-w-md w-full">
          <h1
            style={{ color: "#11141C", fontWeight: 700, letterSpacing: "-0.03em" }}
            className="text-3xl md:text-4xl mb-2"
          >
            Create your account.
          </h1>
          <p style={{ color: "#888" }} className="text-sm mb-8">
            Already have one?{" "}
            <Link href="/login" style={{ color: "#11141C", fontWeight: 600 }}>
              Sign in
            </Link>
          </p>

          {/* Type toggle */}
          <div
            className="flex p-1 rounded-xl mb-8"
            style={{ backgroundColor: "#F7F7F5", border: "1px solid #E8E8E8" }}
          >
            {(["buyer", "seller"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setType(t)}
                className="flex-1 py-2.5 rounded-lg text-sm font-semibold capitalize transition-all"
                style={{
                  backgroundColor: type === t ? "#11141C" : "transparent",
                  color: type === t ? "#FFFFFF" : "#888",
                }}
              >
                {t === "buyer" ? "I want to buy" : "I want to sell"}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-xs font-medium mb-1.5" style={{ color: "#11141C" }}>
                Full Name
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                style={{
                  backgroundColor: "#F7F7F5",
                  border: "1.5px solid #E8E8E8",
                  color: "#11141C",
                  fontFamily: "Poppins",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#3DFF7F")}
                onBlur={(e) => (e.target.style.borderColor = "#E8E8E8")}
                placeholder="e.g. Amara Okafor"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-medium mb-1.5" style={{ color: "#11141C" }}>
                Email Address
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                style={{
                  backgroundColor: "#F7F7F5",
                  border: "1.5px solid #E8E8E8",
                  color: "#11141C",
                  fontFamily: "Poppins",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#3DFF7F")}
                onBlur={(e) => (e.target.style.borderColor = "#E8E8E8")}
                placeholder="you@example.com"
              />
            </div>

            {/* Country */}
            <div>
              <label className="block text-xs font-medium mb-1.5" style={{ color: "#11141C" }}>
                Your Country
              </label>
              <select
                value={form.country}
                onChange={(e) => setForm({ ...form, country: e.target.value as CountryCode })}
                className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                style={{
                  backgroundColor: "#F7F7F5",
                  border: "1.5px solid #E8E8E8",
                  color: "#11141C",
                  fontFamily: "Poppins",
                  appearance: "none",
                }}
              >
                {COUNTRIES.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.flag} {c.name} ({c.currencySymbol})
                  </option>
                ))}
              </select>
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs font-medium mb-1.5" style={{ color: "#11141C" }}>
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  required
                  minLength={8}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none pr-12"
                  style={{
                    backgroundColor: "#F7F7F5",
                    border: "1.5px solid #E8E8E8",
                    color: "#11141C",
                    fontFamily: "Poppins",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#3DFF7F")}
                  onBlur={(e) => (e.target.style.borderColor = "#E8E8E8")}
                  placeholder="8+ characters"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                  style={{ color: "#999" }}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button type="submit" className="btn-primary w-full mt-2">
              Create {type === "buyer" ? "Buyer" : "Seller"} Account
              <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-xs text-center" style={{ color: "#AAA", fontFamily: "Poppins" }}>
              By creating an account, you agree to our{" "}
              <Link href="/terms" style={{ color: "#11141C", fontWeight: 500 }}>Terms</Link>{" "}
              and{" "}
              <Link href="/privacy" style={{ color: "#11141C", fontWeight: 500 }}>Privacy Policy</Link>.
            </p>
          </form>
        </div>
      </div>

      {/* Right — image */}
      <div
        className="hidden lg:block relative"
        style={{ backgroundColor: "#11141C" }}
      >
        <img
          src="https://images.unsplash.com/photo-1556742111-a301076d9d18?w=900&auto=format&fit=crop&q=80"
          alt="Marketplace"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 flex flex-col justify-end p-12">
          <blockquote
            style={{ fontFamily: "Poppins", color: "#FFFFFF", fontWeight: 300 }}
            className="text-2xl leading-relaxed mb-4"
          >
            "I grew my business 3× after joining SA-Errandlogistics."
          </blockquote>
          <p style={{ color: "#3DFF7F", fontFamily: "Poppins", fontSize: "0.85rem", fontWeight: 600 }}>
            Kwame M. — Seller since 2024
          </p>
        </div>
      </div>
    </div>
  );
}
