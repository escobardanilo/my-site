import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { SitePreferencesProvider } from "@/context/SitePreferencesProvider";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl =
  "https://daniloescobar.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Danilo Escobar — AI Engineer & Software Engineer",
    template:
      "%s | Danilo Escobar",
  },

  description:
    "AI Engineer and Software Engineer building full-stack products and AI systems connected to data, APIs and real operational workflows.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: "/",
    siteName: "Danilo Escobar",
    title:
      "Danilo Escobar — AI Engineer & Software Engineer",
    description:
      "Full-stack products and AI systems connected to data, APIs and real operational workflows.",
  },

  twitter: {
    card: "summary",
    title:
      "Danilo Escobar — AI Engineer & Software Engineer",
    description:
      "Full-stack products and AI systems connected to data, APIs and real operational workflows.",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: [
      {
        url: "/images/escobar-02.png",
        type: "image/png",
      },
    ],

    shortcut:
      "/images/escobar-02.png",

    apple:
      "/images/escobar-02.png",
  },
};

const themeScript = `
(function () {
  try {
    var theme = localStorage.getItem("portfolio-theme-v2");

    if (theme === "dark" || theme === "light") {
      document.documentElement.dataset.theme = theme;
    } else {
      document.documentElement.dataset.theme = "dark";
    }

    var language = localStorage.getItem("portfolio-language-v2");

    if (
      language === "pt" ||
      language === "es" ||
      language === "en" ||
      language === "de"
    ) {
      document.documentElement.lang = language;
    } else {
      document.documentElement.lang = "en";
    }
  } catch (error) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: themeScript,
          }}
        />
      </head>

      <body className={inter.variable}>
        <SitePreferencesProvider>
          {children}
        </SitePreferencesProvider>
      </body>
    </html>
  );
}
