import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Professional Medical Billing and Coding Solutions - RCM Hub Medical Billing",
  description: "RCM Hub Medical Billing offers expert medical billing and coding and revenue cycle management services to help healthcare providers maximize efficiency and boost revenue",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
