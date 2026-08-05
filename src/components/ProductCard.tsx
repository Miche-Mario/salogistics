"use client";

import Link from "next/link";
import { Heart, Star } from "lucide-react";
import { useCountry } from "@/contexts/CountryContext";
import { useCart } from "@/contexts/CartContext";
import type { Product } from "@/lib/products";

interface ProductCardProps {
  product: Product;
  onWishlist?: () => void;
}

export default function ProductCard({ product, onWishlist }: ProductCardProps) {
  const { formatPrice } = useCountry();
  const { addItem } = useCart();

  return (
    <div className="group">
      <Link href={`/product/${product.id}`} className="block">
        <div
          className="relative overflow-hidden rounded-xl mb-4"
          style={{ aspectRatio: "4/5", backgroundColor: "#EFEFEF" }}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {product.badge && (
            <div
              className="absolute top-3 left-3 px-2.5 py-1 rounded-lg text-xs font-semibold"
              style={{ backgroundColor: "#0047AB", color: "#FFFFFF", fontFamily: "Poppins" }}
            >
              {product.badge}
            </div>
          )}

          <button
            type="button"
            className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
            style={{ backgroundColor: "#FFFFFF", color: "#11141C" }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onWishlist?.();
            }}
          >
            <Heart className="w-4 h-4" />
          </button>

          <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button
              type="button"
              className="w-full py-2.5 rounded-lg text-sm font-semibold"
              style={{ backgroundColor: "#11141C", color: "#FFFFFF", fontFamily: "Poppins" }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addItem(product);
              }}
            >
              Quick Add
            </button>
          </div>
        </div>
      </Link>

      <div className="space-y-1.5">
        <p style={{ color: "#999", fontFamily: "Poppins" }} className="text-xs">
          {product.seller}
        </p>
        <Link href={`/product/${product.id}`}>
          <h3
            style={{ fontFamily: "Poppins", color: "#11141C", fontWeight: 500, lineHeight: 1.3 }}
            className="text-sm hover:opacity-70 transition-opacity"
          >
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-between">
          <span
            style={{ fontFamily: "Poppins", color: "#11141C", fontWeight: 600 }}
            className="text-base"
          >
            {formatPrice(product.priceNGN)}
          </span>
          <div className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 fill-current" style={{ color: "#0047AB" }} />
            <span style={{ color: "#666", fontFamily: "Poppins" }} className="text-xs">
              {product.rating}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
