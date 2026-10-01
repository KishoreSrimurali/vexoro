// schema.org data for the home page (Organization, WebSite, ProfessionalService, WebPage, FAQPage).
export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://vexoro.dev/#organization",
      "name": "vexoro",
      "url": "https://vexoro.dev/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://vexoro.dev/assets/brand/vexoro-mark.png",
        "width": 1174,
        "height": 886
      },
      "image": "https://vexoro.dev/assets/img/og-image.png",
      "email": "hello@vexoro.dev",
      "description": "vexoro is a web design and development studio that builds fast, search-ready websites for brands.",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "sales",
        "email": "hello@vexoro.dev",
        "availableLanguage": [
          "English"
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://vexoro.dev/#website",
      "url": "https://vexoro.dev/",
      "name": "vexoro",
      "publisher": {
        "@id": "https://vexoro.dev/#organization"
      },
      "inLanguage": "en"
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://vexoro.dev/#service",
      "name": "vexoro",
      "url": "https://vexoro.dev/",
      "image": "https://vexoro.dev/assets/img/og-image.png",
      "email": "hello@vexoro.dev",
      "areaServed": "Worldwide",
      "parentOrganization": {
        "@id": "https://vexoro.dev/#organization"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Website services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Brand website design and development"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Landing page design and development"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Online store development"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Web app development"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Technical SEO audit"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Website care plan"
            }
          }
        ]
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://vexoro.dev/#webpage",
      "url": "https://vexoro.dev/",
      "name": "vexoro | Web Design & Development Studio for Brands",
      "isPartOf": {
        "@id": "https://vexoro.dev/#website"
      },
      "about": {
        "@id": "https://vexoro.dev/#organization"
      },
      "primaryImageOfPage": "https://vexoro.dev/assets/img/og-image.png",
      "inLanguage": "en"
    },
    {
      "@type": "FAQPage",
      "@id": "https://vexoro.dev/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does a website cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on the number of pages, the features and how much content we write for you. Send us a short brief and we'll reply with a fixed quote within two business days."
          }
        },
        {
          "@type": "Question",
          "name": "Is SEO included?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Every site ships with page titles and descriptions, social preview images, schema.org data, a sitemap, robots.txt, compressed images, redirects from your old URLs and Google Search Console set up."
          }
        },
        {
          "@type": "Question",
          "name": "Do I own the website?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Once the final invoice is paid, the design, code, content and domain are yours. We hand over the code repository, hosting access and a short guide."
          }
        },
        {
          "@type": "Question",
          "name": "Can my team edit the site after launch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We set up a content editor so you can change text and images, publish posts and add products without touching code."
          }
        },
        {
          "@type": "Question",
          "name": "Do you work with brands in other countries?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We work remotely, share progress in writing and book calls at times that suit your time zone."
          }
        }
      ]
    }
  ]
} as const;
