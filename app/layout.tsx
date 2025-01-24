import type { Metadata } from "next";
import "./globals.css";
import { SourceSerif4 } from "./ui/fonts";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${SourceSerif4.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
