import React, { useState, useEffect, useRef, useMemo } from "react";
import { useTranslation } from "react-i18next";
import SEO from "../../components/SEO/SEO";
import "./CaseStudies.css";
import CaseStudyHeroImg from "/images/hero/CaseStudy.webp";

// Projects discovery: each project maps to a folder under public/images ("case studies")
// Note: the public folder name contains a space; encode it when building URLs.
const IMG_BASE = "/images/case%20studies"; // space encoded as %20 for URLs

const projects = [
  { id: "case-study-1", folder: "case-study-1", keyIndex: 0 },
  { id: "case-study-2", folder: "case-study-2", keyIndex: 1 },
  { id: "case-study-3", folder: "case-study-3", keyIndex: 2 },
  { id: "case-study-4", folder: "case-study-4", keyIndex: 3 },
];

// Static mapping of images for each case-study folder. We generate arrays based on expected counts.
const sampleImages = {
  "case-study-1": Array.from({ length: 9 }).map(
    (_, i) => `${IMG_BASE}/case-study-1/${i + 1}.jpg`
  ),
  "case-study-2": Array.from({ length: 4 }).map(
    (_, i) => `${IMG_BASE}/case-study-2/${i + 1}.webp`
  ),
  "case-study-3": Array.from({ length: 4 }).map(
    (_, i) => `${IMG_BASE}/case-study-3/${i + 1}.webp`
  ),
  "case-study-4": Array.from({ length: 4 }).map(
    (_, i) => `${IMG_BASE}/case-study-4/${i + 1}.webp`
  ),
};

const CheckIcon = ({ className = "w-5 h-5 text-primary-600" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z"
      fill="currentColor"
    ></path>
  </svg>
);

const CaseStudies = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState(projects[0].id);
  const [lightbox, setLightbox] = useState(null);
  const closeBtnRef = useRef(null);
  const previouslyFocused = useRef(null);
  const modalRef = useRef(null);

  const activeProject = projects.find((p) => p.id === active) || projects[0];
  const images = useMemo(
    () => sampleImages[activeProject.folder] || [],
    [activeProject.folder]
  );
  const projectTitle = t(
    `caseStudies.projects.${activeProject.keyIndex}`,
    activeProject.folder.replace(/-/g, " ")
  );

  // Open lightbox and manage focus
  const openLightbox = (src, index) => {
    previouslyFocused.current = document.activeElement;
    setLightbox({ src, index });
  };

  const closeLightbox = () => {
    setLightbox(null);
    // restore focus
    if (previouslyFocused.current && previouslyFocused.current.focus) {
      previouslyFocused.current.focus();
    }
  };

  // keyboard handlers for accessibility (inline prev/next to satisfy deps)
  useEffect(() => {
    const onKey = (e) => {
      if (!lightbox) return;
      if (e.key === "Escape") {
        e.preventDefault();
        closeLightbox();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        // prev
        const idx = lightbox.index - 1;
        const newIndex = idx < 0 ? images.length - 1 : idx;
        setLightbox({ src: images[newIndex], index: newIndex });
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        // next
        const idx = lightbox.index + 1;
        const newIndex = idx >= images.length ? 0 : idx;
        setLightbox({ src: images[newIndex], index: newIndex });
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [lightbox, images]);

  // prevent background scroll when lightbox open
  useEffect(() => {
    if (lightbox) {
      document.body.style.overflow = "hidden";
      // focus the close button when opened
      setTimeout(() => closeBtnRef.current && closeBtnRef.current.focus(), 0);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  // Focus trap inside modal when open
  useEffect(() => {
    if (!lightbox || !modalRef.current) return;
    const node = modalRef.current;
    const focusableSelectors = [
      "a[href]",
      "area[href]",
      "input:not([disabled])",
      "select:not([disabled])",
      "textarea:not([disabled])",
      "button:not([disabled])",
      "iframe",
      "object",
      "embed",
      '[tabindex]:not([tabindex="-1"])',
      "[contenteditable]",
    ].join(",");

    const focusable = Array.from(
      node.querySelectorAll(focusableSelectors)
    ).filter(
      (el) =>
        el.offsetWidth > 0 || el.offsetHeight > 0 || el.getClientRects().length
    );
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    const onKey = (e) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <div className="case-studies-page">
      <SEO
        title={`${t(
          "caseStudies.heroTitle"
        )} — ${projectTitle} — MADAR DEVELOPMENT`}
        description={t("caseStudies.intro") + " " + projectTitle}
        pathname="/case-studies"
        image={images[0]}
      />
      {/* Hero */}
      <div className="case-study-hero-img-section w-100 mb-8">
        <div className="case-study-hero-img-wrapper relative">
          <img
            src={CaseStudyHeroImg}
            alt="Case Studies Hero"
            className="case-study-hero-img w-full h-56 object-cover rounded"
            loading="lazy"
            width={1600}
            height={420}
          />
          <div className="case-study-hero-overlay absolute inset-0 opacity-40 rounded" />
          <div className="case-study-hero-text absolute inset-0 flex items-center justify-center w-100">
            <h1 className="case-study-hero-title text-white text-3xl font-bold">
              {t("caseStudies.heroTitle")}
            </h1>
          </div>
        </div>
      </div>

      <div className="case-study-intro-features-wrapper">
        <div className="case-study-intro-features">
          <div className="case-study-intro-left">
            <h2 className="case-study-intro-highlight">
              {t("caseStudies.subtitle", "Our Work")}
            </h2>
            <h1 className="case-study-intro-title">
              {t("caseStudies.heroTitle")}
            </h1>
            <p className="mt-4 text-gray-700">
              {t(
                "caseStudies.intro",
                "Browse our completed projects and case studies."
              )}
            </p>

            <div className="mt-6">
              <nav aria-label={t("caseStudies.projectsNav", "Projects list")}>
                <ul className="space-y-2 w-100" role="list">
                  {projects.map((p) => (
                    <li key={p.id} role="listitem">
                      <button
                        type="button"
                        onClick={() => setActive(p.id)}
                        className={`w-full flex items-center gap-3 p-3 rounded-md text-right justify-end hover:bg-gray-50 transition-colors ${
                          p.id === active ? "bg-gray-50" : ""
                        }`}
                        aria-current={p.id === active}
                        aria-pressed={p.id === active}
                        aria-label={t(`caseStudies.projects.${p.keyIndex}`)}
                      >
                        <span className="flex-shrink-0">
                          <CheckIcon
                            className={`w-5 h-5 ${
                              p.id === active
                                ? "text-green-600"
                                : "text-gray-400"
                            }`}
                          />
                        </span>
                        <span className="flex-1 case-study-project">
                          {t(`caseStudies.projects.${p.keyIndex}`)}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          <div className="case-study-intro-right">
            {images.length === 0 ? (
              <p className="text-gray-600">
                {t("caseStudies.noImages", "No images for this project yet.")}
              </p>
            ) : (
              <>
                <h2 className="sr-only">{projectTitle} gallery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {images.map((src, i) => (
                    <div key={i} className="overflow-hidden rounded shadow">
                      <button
                        type="button"
                        onClick={() => openLightbox(src, i)}
                        className="w-full h-56"
                        aria-label={`${projectTitle} — Open image ${
                          i + 1
                        } in lightbox`}
                      >
                        <img
                          src={src}
                          alt={`${projectTitle} — image ${i + 1}`}
                          className="w-full h-56 object-cover"
                          loading="lazy"
                        />
                      </button>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      {/* Lightbox modal */}
      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${projectTitle} image viewer`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
          onClick={() => closeLightbox()}
          ref={modalRef}
        >
          <div
            className="max-w-5xl w-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-2">
              <div>
                <button
                  ref={closeBtnRef}
                  onClick={() => closeLightbox()}
                  className="text-white text-sm mr-4"
                  aria-label={t("caseStudies.close", "Close")}
                >
                  {t("caseStudies.close", "Close")}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (!lightbox) return;
                    const idx = lightbox.index - 1;
                    const newIndex = idx < 0 ? images.length - 1 : idx;
                    setLightbox({ src: images[newIndex], index: newIndex });
                  }}
                  className="text-white text-sm mr-2"
                  aria-label="Previous image"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (!lightbox) return;
                    const idx = lightbox.index + 1;
                    const newIndex = idx >= images.length ? 0 : idx;
                    setLightbox({ src: images[newIndex], index: newIndex });
                  }}
                  className="text-white text-sm"
                  aria-label="Next image"
                >
                  ›
                </button>
              </div>
            </div>
            <img
              src={lightbox.src}
              alt={`${projectTitle} — enlarged image ${lightbox.index + 1}`}
              className="w-full h-auto max-h-[80vh] object-contain mx-auto rounded"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CaseStudies;
