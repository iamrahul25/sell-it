import { CategoryBar } from "@/components/home/category-bar";
import { FeaturedListings } from "@/components/home/featured-listings";
import { HeroSection } from "@/components/home/hero-section";
import { HowItWorks } from "@/components/home/how-it-works";
import { SustainabilityBanner } from "@/components/home/sustainability-banner";
import { TrustStrip } from "@/components/home/trust-strip";
import { formatPostedAt, getFeaturedProducts } from "@/lib/data";

export default function HomePage() {
  const featuredItems = getFeaturedProducts().map((product) => ({
    product,
    postedLabel: formatPostedAt(product.createdAt),
  }));

  return (
    <main>
      <HeroSection />
      <CategoryBar />
      <FeaturedListings items={featuredItems} />
      <SustainabilityBanner />
      <HowItWorks />
      <TrustStrip />
    </main>
  );
}
