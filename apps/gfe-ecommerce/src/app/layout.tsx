import { notoSans } from "@repo/ui/config";
import { Toaster } from "@repo/ui/src/components/ui/toaster";
import "@repo/ui/styles.css";
import type { Metadata } from "next";
import AppProvider from "./app-provider";
import "./globals.css";
import Footer from "@/components/common/footer";


export const metadata: Metadata = {
  title: {
    template: '%s | StyleNest',
    default: 'StyleNest'
  },
  description: "Explore your style with StyleNest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <html lang="en">
      <body className={`${notoSans.className} antialiased bg-[linear-gradient(147.52deg,#f9fafb_8.89%,#d2d6db_100.48%)]`}>
        <AppProvider>
          {children}
        </AppProvider>
        <Toaster />
      </body>
    </html>
  );
}
