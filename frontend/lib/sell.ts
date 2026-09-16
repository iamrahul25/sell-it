export type SellFormData = {
  title: string;
  category: string;
  subcategory: string;
  price: string;
  condition: string;
  description: string;
  city: string;
  area: string;
  showExactLocation: boolean;
};

export type UploadedPhoto = {
  id: string;
  file: File;
  previewUrl: string;
};

export const initialSellForm: SellFormData = {
  title: "",
  category: "",
  subcategory: "",
  price: "",
  condition: "",
  description: "",
  city: "Delhi",
  area: "",
  showExactLocation: false,
};

export const subcategories: Record<string, string[]> = {
  Mobiles: ["Smartphones", "Feature Phones", "Accessories"],
  Laptops: ["Windows Laptops", "MacBooks", "Chromebooks", "Accessories"],
  Electronics: ["Cameras", "Audio", "TVs", "Gaming", "Appliances"],
  Furniture: ["Sofas", "Tables", "Chairs", "Beds", "Storage"],
  Vehicles: ["Cars", "Motorcycles", "Bicycles", "Commercial Vehicles"],
  Fashion: ["Men", "Women", "Footwear", "Watches", "Accessories"],
  "Home & Living": ["Kitchen", "Decor", "Garden", "Tools"],
  Books: ["Fiction", "Non-fiction", "Academic", "Children"],
};
