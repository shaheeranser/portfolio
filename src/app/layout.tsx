import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-ui",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const themeInit = `try{var t=localStorage.getItem('theme');document.documentElement.setAttribute('data-theme',t==='light'?'light':'dark');}catch(e){document.documentElement.setAttribute('data-theme','dark');}`;

export const metadata: Metadata = {
  title: "Muhammad Shaheer · Full-Stack & Cloud/DevOps Engineer",
  description:
    "Muhammad Shaheer — full-stack software engineer building production web apps and the cloud & DevOps infrastructure that keeps them running.",
  metadataBase: new URL("https://shaheer.dev"),
  openGraph: {
    title: "Muhammad Shaheer · Full-Stack & Cloud/DevOps Engineer",
    description: "Production web apps, and the infrastructure that keeps them running.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable}`}>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        {children}
      </body>
    </html>
  );
}
