"use client";

import { useCart } from "@/contexts/CartContext";
import { CheckCircle2 } from "lucide-react";

export default function CartToast() {
  const { toast, dismissToast } = useCart();

  if (!toast) return null;

  return (
    <div
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[90] flex items-center gap-3 px-5 py-3 rounded-xl shadow-lg"
      style={{ backgroundColor: "#11141C", color: "#FFFFFF", fontFamily: "Poppins" }}
      onClick={dismissToast}
    >
      <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: "#60A5FA" }} />
      <span className="text-sm font-medium">{toast}</span>
    </div>
  );
}
