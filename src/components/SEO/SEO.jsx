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
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="MADAR DEVELOPMENT" />

      {/* Font Preload for Priority Loading */}
      <link
        rel="preload"
        href="/assets/fonts/alfont_com_خط-الإيغور.ttf"
        as="font"
        type="font/ttf"
        crossOrigin="anonymous"
      />

      {/* Favicon */}
      <link rel="icon" type="image/png" href={logoImg} />
      <link rel="shortcut icon" type="image/png" href={logoImg} />
      <link rel="apple-touch-icon" href={logoImg} />

      {/* Open Graph Meta Tags for Social Media */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="MADAR DEVELOPMENT" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@madardevelopment" />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#189748" />
      <meta name="msapplication-TileColor" content="#189748" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Language */}
      <meta property="og:locale" content="en_US" />
      <link rel="alternate" href="/ar" hrefLang="ar" />

      {/* Robots */}
      <meta name="robots" content="index, follow" />

      {/* Additional structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "MADAR DEVELOPMENT",
          url: url,
          logo: image,
          description: description,
          contactPoint: {
            "@type": "ContactPoint",
            email: "info@madardevelopment.com",
            contactType: "Customer Service",
          },
          sameAs: [
            "https://linkedin.com/company/madar-development",
            "https://twitter.com/madar_development",
          ],
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
