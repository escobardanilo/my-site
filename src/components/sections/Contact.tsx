"use client";

import { useSitePreferences } from "@/context/SitePreferencesProvider";

export function Contact() {
  const { copy } = useSitePreferences();

  return (
    <section
      className="contact"
      id="contact"
    >
      <div className="container">
        <div className="contact__top">
          <span className="contact__index">
            06
          </span>

          <p className="contact__eyebrow">
            {copy.contact.eyebrow}
          </p>
        </div>

        <div className="contact__main">
          <h2>
            {copy.contact.titleLineOne}
            <br />
            {copy.contact.titleLineTwo}
          </h2>

          <p>
            {copy.contact.description}
          </p>
        </div>

        <div className="contact__actions">
          <a
            className="contact__primary"
            href="mailto:your-email@example.com"
          >
            <span>
              your-email@example.com
            </span>

            <span aria-hidden="true">
              ↗
            </span>
          </a>

          <div className="contact__links">
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
              <span aria-hidden="true">
                ↗
              </span>
            </a>

            <a
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
              <span aria-hidden="true">
                ↗
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}