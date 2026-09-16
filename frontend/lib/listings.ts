import { products } from "@/lib/data";

export type Listing = {
  id: string;
  slug: string;
  title: string;
  price: number;
  imageUrl: string;
  location: string;
  postedAt: string;
  category: string;
  condition: string;
  sellerType: "Individual" | "Business";
};

const postedTimes = [
  "2 hours ago",
  "4 hours ago",
  "Yesterday",
  "Yesterday",
  "2 days ago",
  "2 days ago",
  "3 days ago",
  "3 days ago",
  "4 days ago",
  "5 days ago",
  "5 days ago",
  "6 days ago",
];

const existingListings: Listing[] = products.map((product, index) => ({
  id: product._id,
  slug: product.slug,
  title: product.title,
  price: product.price,
  imageUrl: product.imageUrl,
  location: product.location.city,
  postedAt: postedTimes[index],
  category: product.category,
  condition: product.condition,
  sellerType: index % 5 === 0 ? "Business" : "Individual",
}));

const additionalListings: Listing[] = [
  {
    id: "listing-13",
    slug: "boat-smartwatch",
    title: "boAt Smartwatch",
    price: 1800,
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    location: "Delhi",
    postedAt: "1 week ago",
    category: "electronics",
    condition: "Good",
    sellerType: "Individual",
  },
  {
    id: "listing-14",
    slug: "samsung-washing-machine",
    title: "Samsung Washing Machine",
    price: 10500,
    imageUrl: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1",
    location: "Noida",
    postedAt: "1 week ago",
    category: "home-living",
    condition: "Good",
    sellerType: "Individual",
  },
  {
    id: "listing-15",
    slug: "yamaha-acoustic-guitar",
    title: "Yamaha Acoustic Guitar",
    price: 7000,
    imageUrl: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1",
    location: "Gurgaon",
    postedAt: "1 week ago",
    category: "electronics",
    condition: "Like New",
    sellerType: "Business",
  },
  {
    id: "listing-16",
    slug: "ipad-9th-gen",
    title: "iPad 9th Gen",
    price: 18500,
    imageUrl: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0",
    location: "Delhi",
    postedAt: "8 days ago",
    category: "electronics",
    condition: "Good",
    sellerType: "Individual",
  },
  {
    id: "listing-17",
    slug: "north-face-jacket",
    title: "The North Face Jacket",
    price: 4000,
    imageUrl: "https://images.unsplash.com/photo-1551028719-00167b16eac5",
    location: "Delhi",
    postedAt: "9 days ago",
    category: "fashion",
    condition: "Like New",
    sellerType: "Individual",
  },
  {
    id: "listing-18",
    slug: "baby-stroller",
    title: "Baby Stroller",
    price: 3000,
    imageUrl: "https://images.unsplash.com/photo-1591088398332-8a7791972843",
    location: "Faridabad",
    postedAt: "10 days ago",
    category: "kids",
    condition: "Good",
    sellerType: "Individual",
  },
];

export const listings = [...existingListings, ...additionalListings];

export const listingCategories = [
  { label: "Mobiles", value: "mobiles", count: 124 },
  { label: "Laptops", value: "laptops", count: 89 },
  { label: "Furniture", value: "furniture", count: 56 },
  { label: "Electronics", value: "electronics", count: 103 },
  { label: "Bikes", value: "bikes", count: 34 },
  { label: "Cars", value: "cars", count: 27 },
  { label: "Home & Living", value: "home-living", count: 67 },
  { label: "Fashion", value: "fashion", count: 92 },
  { label: "Books", value: "books", count: 28 },
  { label: "Sports", value: "sports", count: 41 },
  { label: "Kids", value: "kids", count: 36 },
  { label: "Pets", value: "pets", count: 18 },
  { label: "Services", value: "services", count: 21 },
  { label: "Other", value: "other", count: 24 },
];
