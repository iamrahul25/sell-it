import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, MessageCircle } from "lucide-react";
import { ProductDescription } from "@/components/listing-details/product-description";
import { ProductGallery } from "@/components/listing-details/product-gallery";
import { ProductInfo } from "@/components/listing-details/product-info";
import { SafetyCard } from "@/components/listing-details/safety-card";
import { SellerCard } from "@/components/listing-details/seller-card";
import { SimilarListings } from "@/components/listing-details/similar-listings";
import { products } from "@/lib/data";
import { getGalleryImages, getListingBySlug, listings } from "@/lib/listings";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return listings.map((listing) => ({ slug: listing.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const listing = getListingBySlug(slug);

  return {
    title: listing ? `${listing.title} | Sell-it` : "Listing Not Found | Sell-it",
    description: listing
      ? `Buy ${listing.title} for ₹${listing.price.toLocaleString("en-IN")} on Sell-it.`
      : "This Sell-it listing could not be found.",
  };
}

export default async function ListingDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const listing = getListingBySlug(slug);

  if (!listing) notFound();

  const sourceProduct = products.find((product) => product.slug === listing.slug);
  const images = getGalleryImages(listing);
  const categoryLabel = listing.category
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
  const description =
    sourceProduct?.description ??
    `${listing.title} in ${listing.condition.toLowerCase()} condition. Carefully used and well maintained.

The item has been checked and is ready for a new home. Feel free to contact the seller for more details, additional images, or to arrange an inspection.`;
  const similar = [
    ...listings.filter(
      (item) => item.slug !== listing.slug && item.category === listing.category,
    ),
    ...listings.filter(
      (item) => item.slug !== listing.slug && item.category !== listing.category,
    ),
  ].slice(0, 6);

  return (
    <main className="bg-[#fbfcfb] pb-20 md:pb-0">
      <div className="mx-auto max-w-[1440px] px-4 py-5 sm:py-7">
        <nav
          aria-label="Breadcrumb"
          className="no-scrollbar flex items-center gap-1.5 overflow-x-auto whitespace-nowrap text-xs text-muted"
        >
          <Link href="/" className="transition hover:text-brand">
            Home
          </Link>
          <ChevronRight className="size-3.5 shrink-0" />
          <Link href="/listings" className="transition hover:text-brand">
            {categoryLabel}
          </Link>
          <ChevronRight className="size-3.5 shrink-0" />
          {sourceProduct?.brand && (
            <>
              <Link href="/listings" className="transition hover:text-brand">
                {sourceProduct.brand}
              </Link>
              <ChevronRight className="size-3.5 shrink-0" />
            </>
          )}
          <span className="font-medium text-ink">{listing.title}</span>
        </nav>

        <section className="mt-5 grid gap-6 lg:grid-cols-2 xl:grid-cols-[minmax(0,1.18fr)_minmax(310px,.75fr)_280px]">
          <ProductGallery images={images} title={listing.title} />

          <div className="rounded-2xl border border-line bg-white p-5 sm:p-6">
            <ProductInfo listing={listing} />
          </div>

          <div className="space-y-4 lg:col-span-2 xl:col-span-1">
            <SellerCard seller={sourceProduct?.seller} />
            <SafetyCard />
          </div>
        </section>

        <div className="mt-6 space-y-9">
          <ProductDescription
            description={description}
            images={images}
            title={listing.title}
          />
          <SimilarListings listings={similar} />
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-white p-3 shadow-[0_-8px_24px_rgba(15,23,42,.08)] md:hidden">
        <Link
          href="/messages"
          className="flex h-12 items-center justify-center gap-2 rounded-xl bg-brand text-sm font-bold text-white"
        >
          <MessageCircle className="size-5" />
          Chat with Seller
        </Link>
      </div>
    </main>
  );
}
