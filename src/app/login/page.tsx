"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowRight, Eye, EyeOff } from "lucide-react";
import ComingSoonModal from "@/components/ComingSoonModal";
import { signIn } from "@/lib/auth";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect") || "/";
  const [showPassword, setShowPassword] = useState(false);
  const [comingSoon, setComingSoon] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signIn({ email: form.email });
    router.push(redirectTo);
  };

  const inputStyle = {
    backgroundColor: "#F7F7F5",
    border: "1.5px solid #E8E8E8",
    color: "#11141C",
    fontFamily: "Poppins",
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2" style={{ fontFamily: "Poppins" }}>
      {/* Left */}
      <div className="flex flex-col justify-center px-8 py-12 md:px-16">
        <Link href="/" className="flex items-center gap-2.5 mb-12">
          <div className="w-9 h-9 rounded-lg overflow-hidden p-1" style={{ backgroundColor: "#11141C" }}>
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
            Welcome back.
          </h1>
          <p style={{ color: "#888" }} className="text-sm mb-10">
            Don't have an account?{" "}
            <Link href={`/register?redirect=${encodeURIComponent(redirectTo)}`} style={{ color: "#11141C", fontWeight: 600 }}>
              Create one
            </Link>
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium mb-1.5" style={{ color: "#11141C" }}>
                Email Address
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = "#0047AB")}
                onBlur={(e) => (e.target.style.borderColor = "#E8E8E8")}
                placeholder="you@example.com"
              />
            </div>

            <div>
              <div className="flex justify-between mb-1.5">
                <label className="block text-xs font-medium" style={{ color: "#11141C" }}>
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => setComingSoon(true)}
                  className="text-xs"
                  style={{ color: "#888" }}
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none pr-12"
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "#0047AB")}
                  onBlur={(e) => (e.target.style.borderColor = "#E8E8E8")}
                  placeholder="Your password"
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
              Sign In
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      {/* Right */}
      <div className="hidden lg:block relative" style={{ backgroundColor: "#F7F7F5" }}>
        <img
          src="https://images.unsplash.com/photo-1607082349566-187342175e2f?w=900&auto=format&fit=crop&q=80"
          alt="Shopping"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(17,20,28,0.7) 0%, transparent 50%)" }}
        />
        <div className="absolute bottom-12 left-12 right-12">
          <div className="flex gap-2 mb-4">
            {["🇳🇬", "🇬🇭", "🇧🇯"].map((f) => (
              <span key={f} className="text-2xl">{f}</span>
            ))}
          </div>
          <p style={{ fontFamily: "Poppins", color: "#FFFFFF", fontWeight: 300 }} className="text-xl">
            Trade freely across West Africa.
          </p>
        </div>
      </div>

      <ComingSoonModal
        open={comingSoon}
        feature="Password Recovery"
        onClose={() => setComingSoon(false)}
      />
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}
