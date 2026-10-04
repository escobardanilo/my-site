import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { SitePreferencesProvider } from "@/context/SitePreferencesProvider";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Danilo Escobar — AI Engineer",

  description:
    "AI Engineer building intelligent systems, software products and operational AI solutions.",

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