import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { AppShell } from "@/components/app-shell";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IBOOST — IB prep, gamified",
  description: "IBOOST — gamified learning PWA",
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#2563EB",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${nunito.variable} h-full antialiased`}>
      <body className="min-h-full font-[family-name:var(--font-nunito)]">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
