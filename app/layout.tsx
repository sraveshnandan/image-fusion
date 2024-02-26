import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import SideBar from "@/components/shared/SideBar";
import MobileNav from "@/components/shared/MobileNav";

const IBMPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex",
});

export const metadata: Metadata = {
  title: "Image Fusion",
  description: "Enhance, colorise, and modify your images easily.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{ variables: { colorPrimary: "#000" } }}>
      <html lang="en">
        <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>
          <SideBar />
          <MobileNav />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
