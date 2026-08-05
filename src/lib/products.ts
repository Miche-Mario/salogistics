export interface Product {
  id: string;
  name: string;
  priceNGN: number;
  rating: number;
  reviews: number;
  image: string;
  images: string[];
  description: string;
  seller: string;
  sellerRating: number;
  location: string;
  badge?: string | null;
  category: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    priceNGN: 45000,
    rating: 4.8,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=700&auto=format&fit=crop&q=80",
    ],
    description:
      "High-quality wireless headphones with active noise cancellation, 30-hour battery life, and premium sound quality. Perfect for music lovers and professionals.",
    seller: "TechHub Lagos",
    sellerRating: 4.9,
    location: "Lagos, Nigeria",
    badge: "Trending",
    category: "Electronics",
  },
  {
    id: "2",
    name: "Ankara Print Dress",
    priceNGN: 18500,
    rating: 4.9,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=700&auto=format&fit=crop&q=80",
    ],
    description:
      "Beautiful handcrafted Ankara dress with vibrant patterns. Perfect for special occasions and everyday elegance.",
    seller: "AfroStyle Accra",
    sellerRating: 4.8,
    location: "Accra, Ghana",
    badge: "Top Rated",
    category: "Fashion",
  },
  {
    id: "3",
    name: "Smart Watch Series 7",
    priceNGN: 78500,
    rating: 4.7,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700&auto=format&fit=crop&q=80",
    ],
    description:
      "Feature-rich smartwatch with health tracking, notifications, and long battery life.",
    seller: "Gadget Store",
    sellerRating: 4.7,
    location: "Lagos, Nigeria",
    badge: null,
    category: "Electronics",
  },
  {
    id: "4",
    name: "Organic Shea Butter Set",
    priceNGN: 12000,
    rating: 5.0,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=700&auto=format&fit=crop&q=80",
    ],
    description:
      "Pure organic shea butter set sourced from West Africa. Nourishes and protects skin naturally.",
    seller: "Natural Beauty Cotonou",
    sellerRating: 5.0,
    location: "Cotonou, Benin",
    badge: "Best Seller",
    category: "Beauty",
  },
];

export function getProduct(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

export function toCartItem(product: Product) {
  return {
    id: product.id,
    name: product.name,
    priceNGN: product.priceNGN,
    image: product.image,
    seller: product.seller,
    quantity: 1,
  };
}
