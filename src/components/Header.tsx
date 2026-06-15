"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Menu, X, ChevronDown, Search } from "lucide-react";
import { useCountry, COUNTRIES, CountryCode } from "@/contexts/CountryContext";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [countryOpen, setCountryOpen] = useState(false);
  const { country, setCountryCode } = useCountry();

  return (
    <header
      style={{ borderBottom: "1px solid #E8E8E8", backgroundColor: "#FFFFFF" }}
      className="sticky top-0 z-50"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div
              style={{ backgroundColor: "#11141C" }}
              className="w-9 h-9 rounded-lg flex items-center justify-center overflow-hidden p-1"
            >
              <Image
                src="/assets/logo.png"
                alt="SA-Errandlogistics"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <span
              style={{ fontFamily: "'Poppins', sans-serif", color: "#11141C", letterSpacing: "-0.02em" }}
              className="font-700 text-lg hidden sm:block font-bold"
            >
              SA-Errandlogistics
            </span>
          </Link>

          {/* Nav — Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            {[
              { label: "Shop", href: "/shop" },
              { label: "How It Works", href: "/how-it-works" },
              { label: "Sell", href: "/sell" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{ color: "#11141C", fontFamily: "'Poppins', sans-serif" }}
                className="text-sm font-medium hover:opacity-60 transition-opacity"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Search - Desktop */}
            <Link
              href="/shop"
              className="hidden md:flex items-center gap-2 px-3 py-2 rounded-lg transition-colors"
              style={{ backgroundColor: "#F7F7F5", color: "#666" }}
            >
              <Search className="w-4 h-4" />
              <span className="text-sm text-gray-400 hidden lg:block" style={{ fontFamily: "Poppins" }}>
                Search...
              </span>
            </Link>

            {/* Country selector */}
            <div className="relative">
              <button
                onClick={() => setCountryOpen(!countryOpen)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                style={{ backgroundColor: "#F7F7F5", color: "#11141C", fontFamily: "Poppins" }}
              >
                <span className="text-base">{country.flag}</span>
                <span className="hidden sm:block text-sm">{country.name}</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {countryOpen && (
                <div
                  className="absolute right-0 top-full mt-2 rounded-xl overflow-hidden z-50"
                  style={{ backgroundColor: "#FFFFFF", border: "1px solid #E8E8E8", boxShadow: "0 8px 24px rgba(0,0,0,0.08)", minWidth: "160px" }}
                >
                  {COUNTRIES.map((c) => (
                    <button
                      key={c.code}
                      onClick={() => {
                        setCountryCode(c.code as CountryCode);
                        setCountryOpen(false);
                      }}
                      className="flex items-center gap-3 px-4 py-3 w-full text-left text-sm hover:bg-gray-50 transition-colors"
                      style={{
                        color: "#11141C",
                        fontFamily: "Poppins",
                        backgroundColor: country.code === c.code ? "#F7F7F5" : undefined,
                        fontWeight: country.code === c.code ? 600 : 400,
                      }}
                    >
                      <span>{c.flag}</span>
                      <span>{c.name}</span>
                      <span className="ml-auto text-xs text-gray-400">{c.currencySymbol}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Cart */}
            <Link
              href="/cart"
              className="relative p-2 rounded-lg transition-colors hover:bg-gray-50"
              style={{ color: "#11141C" }}
            >
              <ShoppingCart className="w-5 h-5" />
            </Link>

            {/* Login */}
            <Link
              href="/login"
              className="hidden md:block text-sm font-medium transition-opacity hover:opacity-60"
              style={{ color: "#11141C", fontFamily: "Poppins" }}
            >
              Sign In
            </Link>

            {/* Register CTA */}
            <Link href="/register" className="btn-primary hidden sm:flex text-sm py-2.5 px-5">
              Get Started
            </Link>

            {/* Mobile menu */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-lg"
              style={{ color: "#11141C" }}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{ borderTop: "1px solid #E8E8E8", backgroundColor: "#FFFFFF" }}
          className="lg:hidden"
        >
          <nav className="container-custom py-6 flex flex-col gap-5">
            {[
              { label: "Shop", href: "/shop" },
              { label: "How It Works", href: "/how-it-works" },
              { label: "Sell", href: "/sell" },
              { label: "Sign In", href: "/login" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium"
                style={{ color: "#11141C", fontFamily: "Poppins" }}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/register" className="btn-primary mt-2">
              Get Started Free
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
