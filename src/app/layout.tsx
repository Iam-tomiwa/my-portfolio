import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import { personalInfo } from "@/data/portfolio";
import { siteName, siteUrl } from "@/lib/site";

const sans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});
const serif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  // Resolves relative URLs below, and the generated Open Graph image.
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tomiwa Ajayi — Frontend Engineer & Bioinformatics Researcher",
    // Route titles already carry the name, so they pass through unchanged.
    template: "%s",
  },
  description:
    "Ajayi Emmanuel Tomiwa: frontend engineer and bioinformatics researcher. Explore software projects, publications, genome research, and academic experience.",
  applicationName: siteName,
  authors: [{ name: siteName, url: personalInfo.linkedin }],
  creator: siteName,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Tomiwa Ajayi — Engineer & Researcher",
    description:
      "Code & discovery. Explore frontend engineering, publications, and research in microbiology and bioinformatics.",
    type: "website",
    url: "/",
    siteName,
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tomiwa Ajayi — Engineer & Researcher",
    description:
      "Code & discovery. Explore my engineering projects, publications, and academic research.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('tomiwa-color-theme');document.documentElement.dataset.theme=t==='dark'||t==='light'?t:matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}catch(e){document.documentElement.dataset.theme=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}})()`,
          }}
        />
      </head>
      <body id="top">
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Navbar />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Contact />
      </body>
    </html>
  );
}
