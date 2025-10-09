import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./FAQ.css";

export default function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: t("faq.questions.0.q", "How do I initiate a project with your team?"),
      a: t(
        "faq.questions.0.a",
        "Simply submit an inquiry through our contact form or call us directly. We'll schedule a free consultation to discuss requirements, scope and timelines before providing a tailored proposal."
      ),
    },
    {
      q: t("faq.questions.1.q", "What payment methods do you accept?"),
      a: t(
        "faq.questions.1.a",
        "We accept bank transfers and major corporate payment methods. For international clients we can handle wire transfers and arrange invoicing in the appropriate currency."
      ),
    },
    {
      q: t("faq.questions.2.q", "Can I request design changes mid-project?"),
      a: t(
        "faq.questions.2.a",
        "Yes — design iterations are part of our project lifecycle. Scope changes are managed through formal change requests to ensure timelines and costs are aligned with expectations."
      ),
    },
    {
      q: t(
        "faq.questions.3.q",
        "Do you offer discounts for long-term partnerships?"
      ),
      a: t(
        "faq.questions.3.a",
        "We offer tailored pricing models and discounts for multi-year partnerships and repeat engagements. Contact our commercial team to discuss options."
      ),
    },
    {
      q: t(
        "faq.questions.4.q",
        "What if I encounter urgent issues during delivery?"
      ),
      a: t(
        "faq.questions.4.a",
        "We provide escalation paths and support options for urgent matters. Critical issues are handled with priority and we maintain clear SLAs for response and resolution."
      ),
    },
  ];

  return (
    <section className="faq-section" aria-labelledby="faq-heading">
      <div className="faq-container">
        <div className="faq-intro">
          <div className="faq-label">{t("faq.label", "ORDER & PAYMENT")}</div>
          <h2 id="faq-heading" className="faq-title">
            {t("faq.title", "Most Popular Questions")}
          </h2>
          <p className="faq-desc">
            {t(
              "faq.description",
              "Get clarity on how we collaborate with clients to deliver precision solutions. Below are answers to the most common questions about working with us:"
            )}
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((item, i) => (
            <div
              key={i}
              className={`faq-item ${openIndex === i ? "open" : ""}`}
            >
              <button
                className="faq-question"
                aria-expanded={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              >
                <span className="q-text">{item.q}</span>
                <span className="chev" aria-hidden>
                  {openIndex === i ? "˄" : "˅"}
                </span>
              </button>
              <div
                className="faq-answer"
                style={{ display: openIndex === i ? "block" : "none" }}
              >
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
