"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { InfoPageHero } from "@/components/InfoPage";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent. We'll get back to you within 1–2 business days.");
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors focus:border-[#3DFF7F]";
  const inputStyle = { backgroundColor: "#F7F7F5", border: "1.5px solid #E8E8E8", color: "#11141C" };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <InfoPageHero
        label="Contact"
        title="We're here to help."
        description="Questions about the platform, your account, or a listing? Reach out — we typically respond within 1–2 business days."
      />

      <section className="container-custom pb-20">
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { key: "name", label: "Full Name", type: "text", placeholder: "Your name" },
              { key: "email", label: "Email", type: "email", placeholder: "you@example.com" },
              { key: "subject", label: "Subject", type: "text", placeholder: "How can we help?" },
            ].map((field) => (
              <div key={field.key}>
                <label className="block text-xs font-medium mb-1.5" style={{ color: "#11141C" }}>
                  {field.label}
                </label>
                <input
                  type={field.type}
                  required
                  placeholder={field.placeholder}
                  className={inputClass}
                  style={inputStyle}
                  value={form[field.key as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                />
              </div>
            ))}
            <div>
              <label className="block text-xs font-medium mb-1.5" style={{ color: "#11141C" }}>
                Message
              </label>
              <textarea
                required
                rows={5}
                placeholder="Tell us more..."
                className={inputClass}
                style={inputStyle}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>
            <button type="submit" className="btn-primary w-full">
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </form>

          <div className="space-y-4">
            {[
              {
                icon: Mail,
                title: "Email",
                lines: ["support@sa-errandlogistics.com"],
              },
              {
                icon: Phone,
                title: "Phone",
                lines: ["Nigeria: +234 801 234 5678", "Ghana: +233 20 123 4567", "Benin: +229 20 123 456"],
              },
              {
                icon: MapPin,
                title: "Offices",
                lines: ["Lagos, Nigeria", "Accra, Ghana", "Cotonou, Benin"],
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-5 rounded-2xl"
                style={{ backgroundColor: "#F7F7F5", border: "1px solid #E8E8E8" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#3DFF7F" }}
                >
                  <item.icon className="w-5 h-5" style={{ color: "#11141C" }} />
                </div>
                <div>
                  <div className="font-semibold text-sm mb-1" style={{ color: "#11141C" }}>{item.title}</div>
                  {item.lines.map((line) => (
                    <div key={line} className="text-sm" style={{ color: "#666" }}>{line}</div>
                  ))}
                </div>
              </div>
            ))}

            <div className="p-5 rounded-2xl text-sm" style={{ backgroundColor: "#11141C", color: "#888" }}>
              <p style={{ color: "#FFFFFF", fontWeight: 600, marginBottom: "0.5rem" }}>Note on transactions</p>
              SA-Errandlogistics does not handle payments between buyers and sellers.
              For order or payment disputes, contact the seller directly via messaging.
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
