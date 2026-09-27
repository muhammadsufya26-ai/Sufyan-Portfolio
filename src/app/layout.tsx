import type { Metadata, Viewport } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Muhammad Sufyan (Sufii) — Frontend Developer & Visual Designer",
  description:
    "Portfolio of Muhammad Sufyan (Sufii) — Minimalist Cyberpunk & Editorial Dark Mode portfolio showcasing modern Next.js engineering, Groq AI integrations, and automotive/streetwear poster designs.",
  keywords: [
    "Muhammad Sufyan",
    "Sufii",
    "sufii.raw",
    "Frontend Developer",
    "Visual Designer",
    "Next.js App Router",
    "Framer Motion",
    "Tailwind CSS",
    "Cyberpunk UI",
    "Editorial Poster Design",
  ],
  authors: [{ name: "Muhammad Sufyan", url: "https://instagram.com/sufii.raw" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0a0a0a] text-zinc-100 antialiased selection:bg-cyan-400 selection:text-black">
        {/* Subtle Noise Texture Overlay */}
        <div className="noise-overlay" />
        {/* Custom Spring Animated Cursor */}
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
