import categoriesJson from "@/data/categories.json";
import productsJson from "@/data/products.json";

export type Seller = {
  _id: string;
  name: string;
  rating: number;
  reviews: number;
  isVerified: boolean;
  memberSince: string;
};

export type Product = {
  _id: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  currency: string;
  category: string;
  brand: string;
  condition: string;
  imageUrl: string;
  images: string[];
  location: { area: string; city: string; state: string };
  seller: Seller;
  isFeatured: boolean;
  views: number;
  createdAt: string;
  updatedAt: string;
};

export type Category = {
  _id: string;
  name: string;
  slug: string;
  icon: string;
  accent: string;
  listingCount: number;
};

export const products: Product[] = productsJson;
export const categories: Category[] = categoriesJson;

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.isFeatured);
}

export function formatPrice(value: number): string {
  return `₹${value.toLocaleString("en-IN")}`;
}

export function formatPostedAt(isoDate: string): string {
  const minutes = Math.floor((Date.now() - new Date(isoDate).getTime()) / 60000);

  if (minutes < 60) {
    return `${Math.max(minutes, 1)} min ago`;
  }

  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  }

  const days = Math.floor(hours / 24);
  if (days < 30) {
    return `${days} ${days === 1 ? "day" : "days"} ago`;
  }

  const months = Math.floor(days / 30);
  return `${months} ${months === 1 ? "month" : "months"} ago`;
}
