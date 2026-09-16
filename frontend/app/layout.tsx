import type { ReactNode } from "react";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/shared/site-header";
import { SiteFooter } from "@/components/shared/site-footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sell-it — Buy. Sell. Reuse. Better Together.",
  description:
    "A trusted community marketplace for buying and selling pre-owned items near you.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
