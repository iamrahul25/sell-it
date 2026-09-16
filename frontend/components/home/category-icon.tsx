import {
  Baby,
  BookOpen,
  Bike,
  Car,
  Dumbbell,
  Headphones,
  Lamp,
  Laptop,
  LayoutGrid,
  PawPrint,
  Shirt,
  Smartphone,
  Sofa,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  mobiles: Smartphone,
  laptops: Laptop,
  electronics: Headphones,
  furniture: Sofa,
  "home-living": Lamp,
  bikes: Bike,
  cars: Car,
  fashion: Shirt,
  books: BookOpen,
  sports: Dumbbell,
  kids: Baby,
  pets: PawPrint,
  services: Wrench,
  other: LayoutGrid,
};

export function CategoryIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = ICONS[name] ?? LayoutGrid;
  return <Icon className={className} strokeWidth={1.75} />;
}
