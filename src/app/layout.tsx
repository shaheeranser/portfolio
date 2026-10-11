import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Shaheer | Full-Stack Software Engineer",
  description:
    "Muhammad Shaheer — full-stack software engineer building production web apps and the cloud & DevOps infrastructure that keeps them running.",
  metadataBase: new URL("https://shaheer.dev"),
  openGraph: {
    title: "Muhammad Shaheer | Full-Stack Software Engineer",
    description:
      "Production web apps, and the infrastructure that keeps them running.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${syne.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}