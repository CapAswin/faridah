import type { Metadata } from "next";
import localFont from "next/font/local";
import {
  Bodoni_Moda,
  Cormorant_Garamond,
  EB_Garamond,
  Inter,
} from "next/font/google";
import "./globals.css";

// Material Symbols (icon font used in the header)
import type { Viewport } from "next";

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const title = localFont({
  variable: "--font-title",
  src: "../fonts/SunrollBold-Wy6YG.otf",
  display: "swap",
});

const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["400"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "FARIDAH | The Art of Scent",
  description:
    "Crafting invisible landscapes through heritage, restraint, and rare botanical distillations.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${body.variable} ${title.variable} ${garamond.variable} ${bodoni.variable} ${cormorant.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-on-surface overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
