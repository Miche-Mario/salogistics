"use client";

import Link from "next/link";
import { X, UserPlus } from "lucide-react";

interface AccountRequiredModalProps {
  open: boolean;
  redirectTo?: string;
  onClose: () => void;
}

export default function AccountRequiredModal({
  open,
  redirectTo = "/cart",
  onClose,
}: AccountRequiredModalProps) {
  if (!open) return null;

  const redirect = encodeURIComponent(redirectTo);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(17, 20, 28, 0.55)" }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl p-6 relative"
        style={{ backgroundColor: "#FFFFFF", fontFamily: "Poppins" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" style={{ color: "#666" }} />
        </button>

        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
          style={{ backgroundColor: "#0047AB" }}
        >
          <UserPlus className="w-6 h-6" style={{ color: "#FFFFFF" }} />
        </div>

        <h2 className="text-xl font-bold mb-2" style={{ color: "#11141C" }}>
          Create an account to continue
        </h2>
        <p className="text-sm leading-relaxed mb-6" style={{ color: "#666" }}>
          You need an account to purchase products. Sign up for free or sign in if you already have one.
        </p>

        <div className="space-y-3">
          <Link
            href={`/register?redirect=${redirect}`}
            className="btn-primary w-full"
            onClick={onClose}
          >
            Create Account
          </Link>
          <Link
            href={`/login?redirect=${redirect}`}
            className="btn-outline w-full"
            onClick={onClose}
          >
            Sign In
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="w-full text-sm py-2 transition-opacity hover:opacity-60"
            style={{ color: "#888" }}
          >
            Continue browsing
          </button>
        </div>
      </div>
    </div>
  );
}
