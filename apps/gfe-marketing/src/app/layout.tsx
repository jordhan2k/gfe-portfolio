import "./globals.css";
import "@repo/ui/styles.css";
import type { Metadata } from "next";
import { notoSans } from "@repo/ui/config";
import { Toaster } from "@repo/ui/components/ui/toaster";


export const metadata: Metadata = {
  title: {
    template: '%s | Abstractly',
    default: 'Abstractly - Well crafted abstract images'
  },
  description: "High quality abstract images for your projects, wallpaper and presentations.",

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${notoSans.className} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
