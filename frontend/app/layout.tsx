import type { ReactNode } from "react";

export const metadata = {
  title: "Sell It",
  description: "Minimal Next.js + Express app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, sans-serif", margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
