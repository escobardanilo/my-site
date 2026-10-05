"use client";

import { useSitePreferences } from "@/context/SitePreferencesProvider";

export function Contact() {
  const { copy } =
    useSitePreferences();

  return (
    <section
      className="contact"
      id="contact"
      aria-labelledby="contact-title"
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
          <h2 id="contact-title">
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
            href="mailto:d.escobar-016@hotmail.com"
            className="contact__primary"
          >
            <span>
              d.escobar-016@hotmail.com
            </span>

            <span aria-hidden="true">
              ↗
            </span>
          </a>

          <div className="contact__links">
            <a
              href="https://linkedin.com/in/escobardanilo/"
              target="_blank"
              rel="noreferrer"
            >
              <span>LinkedIn</span>

              <span aria-hidden="true">
                ↗
              </span>
            </a>

            <a
              href="https://github.com/escobardanilo"
              target="_blank"
              rel="noreferrer"
            >
              <span>GitHub</span>

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
