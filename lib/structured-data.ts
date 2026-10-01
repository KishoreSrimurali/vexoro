// schema.org data for the home page (Organization, WebSite, ProfessionalService, WebPage, FAQPage).
import { FAQS } from "@/lib/faq";

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
      "mainEntity": FAQS.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      }))
    }
  ]
} as const;
