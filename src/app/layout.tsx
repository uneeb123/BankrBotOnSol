import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PrivyClientProvider from "../components/PrivyClientProvider";
import SolanaWalletProvider from "../components/SolanaWalletProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bankr on SOL",
  description: "Bankr on Solana - Wallet and messaging platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <SolanaWalletProvider>
          <PrivyClientProvider>{children}</PrivyClientProvider>
        </SolanaWalletProvider>
      </body>
    </html>
  );
}
