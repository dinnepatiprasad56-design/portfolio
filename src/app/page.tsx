import React from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { PDDHeroCaseStudy } from "@/components/PDDHeroCaseStudy";
import { TimelineSection } from "@/components/TimelineSection";
import { SkillsSection } from "@/components/SkillsSection";
import { OtherProjectsSection } from "@/components/OtherProjectsSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { ContactSection } from "@/components/ContactSection";
import { ResumeSection } from "@/components/ResumeSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090B] text-[#F8FAFC] relative overflow-hidden">
      <Navbar />
      <HeroSection />
      
      {/* Flagship Hero Case Study: PDD Application */}
      <PDDHeroCaseStudy />
      
      {/* Unified Interactive Timeline: Education, Internships, Projects & Credentials */}
      <TimelineSection />
      
      {/* Full Projects Catalog */}
      <OtherProjectsSection />
      
      {/* Technical Skill Matrix */}
      <SkillsSection />
      
      {/* Verified Certifications */}
      <CertificationsSection />
      
      {/* Official Resume & Portfolio QR Integration */}
      <ResumeSection />
      
      {/* Recruiter Contact Section */}
      <ContactSection />
      
      <Footer />
    </main>
  );
}
