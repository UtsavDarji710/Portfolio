import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/constants/site";
import { skillCategories, experiences, education } from "@/constants/data";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { SmoothScrollProvider } from "@/components/layout/smooth-scroll-provider";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { CursorGlow } from "@/components/layout/cursor-glow";
import { LoadingScreen } from "@/components/layout/loading-screen";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SiteBackground } from "@/components/layout/site-background";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#030712",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  applicationName: `${siteConfig.name} Portfolio`,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: `${siteConfig.name} — Portfolio`,
    images: [
      {
        url: "/og",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — ${siteConfig.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/og"],
    creator: siteConfig.twitterHandle,
    site: siteConfig.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  manifest: "/manifest.webmanifest",
  verification: {
    ...(siteConfig.verification.google
      ? { google: siteConfig.verification.google }
      : {}),
    ...(siteConfig.verification.bing
      ? { other: { "msvalidate.01": siteConfig.verification.bing } }
      : {}),
  },
};

const skillNames = Array.from(
  new Set(
    skillCategories.flatMap((category) =>
      category.skills.map((skill) => skill.name)
    )
  )
);

const currentRole = experiences.find((exp) => exp.current) ?? experiences[0];
const school = education[0];

const personId = `${siteConfig.url}/#person`;
const websiteId = `${siteConfig.url}/#website`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: siteConfig.name,
      url: siteConfig.url,
      image: siteConfig.ogImage,
      jobTitle: siteConfig.role,
      description: siteConfig.description,
      email: siteConfig.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.locality,
        addressCountry: siteConfig.countryCode,
      },
      worksFor: {
        "@type": "Organization",
        name: currentRole?.company ?? "Zignuts Technolab",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: school?.institution ?? "CHARUSAT University",
      },
      knowsAbout: skillNames,
      knowsLanguage: ["English", "Hindi", "Gujarati"],
      sameAs: [
        siteConfig.links.github,
        siteConfig.links.linkedin,
        siteConfig.links.portfolio,
      ],
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: siteConfig.url,
      name: `${siteConfig.name} — Portfolio`,
      description: siteConfig.description,
      inLanguage: "en-US",
      publisher: { "@id": personId },
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteConfig.url}/#webpage`,
      url: siteConfig.url,
      name: siteConfig.title,
      isPartOf: { "@id": websiteId },
      about: { "@id": personId },
      inLanguage: "en-US",
      primaryImageOfPage: siteConfig.ogImage,
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <SmoothScrollProvider>
            <SiteBackground />
            <LoadingScreen />
            <ScrollProgress />
            <CursorGlow />
            <Navbar />
            <main>{children}</main>
            <Footer />
            <ScrollToTop />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
