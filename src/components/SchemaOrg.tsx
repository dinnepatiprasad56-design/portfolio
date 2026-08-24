import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const SchemaOrg: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PORTFOLIO_DATA.personal.name,
    jobTitle: PORTFOLIO_DATA.personal.title,
    description: PORTFOLIO_DATA.personal.bio,
    url: "https://github.com/prasad1271",
    sameAs: [
      PORTFOLIO_DATA.personal.socialLinks.github,
      PORTFOLIO_DATA.personal.socialLinks.linkedin,
      PORTFOLIO_DATA.personal.socialLinks.leetcode,
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "SIMATS Engineering (Saveetha University)",
      sameAs: "https://saveetha.ac.in",
    },
    knowsAbout: [
      "Software Engineering",
      "Android Development",
      "Artificial Intelligence",
      "Cloud Computing",
      "MONAI Medical Segmentation",
      "Python",
      "Kotlin",
      "Java",
      "AWS Lex",
      "FastAPI",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
