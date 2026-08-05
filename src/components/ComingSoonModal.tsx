"use client";

import { X } from "lucide-react";

interface ComingSoonModalProps {
  open: boolean;
  feature: string;
  onClose: () => void;
}

export default function ComingSoonModal({ open, feature, onClose }: ComingSoonModalProps) {
  if (!open) return null;

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

        <span
          className="inline-block px-3 py-1 rounded-lg text-xs font-semibold mb-4"
          style={{ backgroundColor: "#E0E9F5", color: "#0047AB" }}
        >
          Coming Soon
        </span>

        <h2 className="text-xl font-bold mb-2" style={{ color: "#11141C" }}>
          {feature}
        </h2>
        <p className="text-sm leading-relaxed mb-6" style={{ color: "#666" }}>
          We&apos;re working on this feature. It will be available in a future update.
        </p>

        <button type="button" onClick={onClose} className="btn-primary w-full">
          Got it
        </button>
      </div>
    </div>
  );
}
