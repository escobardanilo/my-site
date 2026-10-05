"use client";

import { useSitePreferences } from "@/context/SitePreferencesProvider";

export function Footer() {
  const { copy } =
    useSitePreferences();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__identity">
          <span>Danilo Escobar</span>

          <span>
            AI Engineer / Software Engineer
          </span>
        </div>

        <div className="footer__meta">
          <span>
            {copy.footer.location}
          </span>

          <span>
            © {new Date().getFullYear()} Danilo Escobar
          </span>
        </div>
      </div>
    </footer>
  );
}
