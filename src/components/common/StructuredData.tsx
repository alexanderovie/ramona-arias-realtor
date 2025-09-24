export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Ramona Arias Realtor",
    "description": "Professional real estate services by Ramona Arias. Find your perfect home with expert guidance and personalized service.",
    "url": "https://www.ramonaariasrealtor.com",
    "logo": "https://www.ramonaariasrealtor.com/assets/images/logo/logo-ramona-arias-realtor.png",
    "image": "https://www.ramonaariasrealtor.com/assets/images/logo/logo-ramona-arias-realtor.png",
    "telephone": "+1-813-786-4201",
    "email": "info@ramonaariasrealtor.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "400 N Tampa St floor 15",
      "addressLocality": "Tampa",
      "addressRegion": "FL",
      "postalCode": "33602",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "27.9506",
      "longitude": "-82.4572"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Tampa",
        "containedInPlace": {
          "@type": "State",
          "name": "Florida"
        }
      },
      {
        "@type": "City", 
        "name": "St. Petersburg",
        "containedInPlace": {
          "@type": "State",
          "name": "Florida"
        }
      },
      {
        "@type": "City",
        "name": "Clearwater", 
        "containedInPlace": {
          "@type": "State",
          "name": "Florida"
        }
      },
      {
        "@type": "City",
        "name": "Brandon",
        "containedInPlace": {
          "@type": "State", 
          "name": "Florida"
        }
      }
    ],
    "serviceType": "Real Estate Services",
    "priceRange": "$$",
    "openingHours": "Mo-Sa 07:00-19:00",
    "sameAs": [
      "https://www.instagram.com/ramonaariasrealtor"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Ramona Arias Realtor",
    "url": "https://www.ramonaariasrealtor.com",
    "description": "Professional real estate services by Ramona Arias. Find your perfect home with expert guidance and personalized service.",
    "publisher": {
      "@type": "RealEstateAgent",
      "name": "Ramona Arias Realtor"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}
