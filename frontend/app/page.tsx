import { CategoryBar } from "@/components/category-bar";
import { FeaturedListings } from "@/components/featured-listings";
import { HeroSection } from "@/components/hero-section";
import { HowItWorks } from "@/components/how-it-works";
import { SustainabilityBanner } from "@/components/sustainability-banner";
import { TrustStrip } from "@/components/trust-strip";
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
