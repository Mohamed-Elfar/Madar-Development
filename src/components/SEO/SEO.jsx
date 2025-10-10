import React from "react";
import { Helmet } from "react-helmet-async";
import logoImg from "/public/images/logo/madar-logo.png";

const SEO = ({
  title = "MADAR DEVELOPMENT - نتطور معاً...نتميز معاً",
  description = "MADAR DEVELOPMENT offers professional consulting and training solutions to help organizations and individuals grow and succeed.",
  keywords = "business consulting, strategic planning, business advisory, corporate consulting, business solutions, consulting services, business growth, MADAR",
  url = "https://madar-development.com",
  image = logoImg,
  type = "website",
  pathname = "/",
}) => {
  // ensure og:image is an absolute URL
  const absoluteImage =
    typeof image === "string" && image.startsWith("/")
      ? url.replace(/\/$/, "") + image
      : image;

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: url.replace(/\/$/, "") + pathname,
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MADAR DEVELOPMENT",
    url,
    logo: absoluteImage,
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@madardevelopment.com",
      contactType: "Customer Service",
    },
  };

  const siteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "MADAR DEVELOPMENT",
    url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${url}/?s={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  // Breadcrumb structured data
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: url,
      },
      // second item is the page itself
      {
        "@type": "ListItem",
        position: 2,
        name: title,
        item: url.replace(/\/$/, "") + pathname,
      },
    ],
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="MADAR DEVELOPMENT" />

      {/* Font preload intentionally removed from here to avoid late preloading; add preload in index.html for earlier loading */}

      {/* Favicon */}
      <link rel="icon" type="image/png" href={logoImg} />
      <link rel="shortcut icon" type="image/png" href={logoImg} />
      <link rel="apple-touch-icon" href={logoImg} />

      {/* Open Graph Meta Tags for Social Media */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={absoluteImage} />
      <meta property="og:site_name" content="MADAR DEVELOPMENT" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImage} />
      <meta name="twitter:site" content="@madardevelopment" />
      <meta name="twitter:creator" content="@madardevelopment" />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#189748" />
      <meta name="msapplication-TileColor" content="#189748" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Canonical URL (per page) */}
      <link rel="canonical" href={url.replace(/\/$/, "") + pathname} />

      {/* Language / hreflang - use absolute URLs and include x-default */}
      <meta property="og:locale" content="en_US" />
      <link
        rel="alternate"
        href={url.replace(/\/$/, "") + pathname}
        hrefLang="en"
      />
      <link
        rel="alternate"
        href={url.replace(/\/$/, "") + "/ar" + pathname}
        hrefLang="ar"
      />
      <link
        rel="alternate"
        href={url.replace(/\/$/, "") + pathname}
        hrefLang="x-default"
      />

      {/* Robots */}
      <meta name="robots" content="index, follow" />

      {/* Structured data: Organization + WebSite + WebPage + Breadcrumb */}
      <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(siteSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(pageSchema)}</script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;
