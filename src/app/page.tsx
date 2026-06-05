"use client";

import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import RankingsSection from "@/components/RankingsSection";
import CoursesSection from "@/components/CoursesSection";
import AdvantageSection from "@/components/AdvantageSection";
import BenefitsSection from "@/components/BenefitsSection";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";
import InquiryModal from "@/components/InquiryModal";
import DegreeSection from "@/components/DegreeSection";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <HeroSection onApply={() => setModalOpen(true)} />
      
      <RankingsSection />
      <CoursesSection onApply={() => setModalOpen(true)} />
      <AdvantageSection onApply={() => setModalOpen(true)} />
      <BenefitsSection />
      <DegreeSection onApply={() => setModalOpen(true)} />
      <FeaturesSection />
      <FAQSection />
      <Footer />
      <MobileStickyBar onApply={() => setModalOpen(true)} />
      <InquiryModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
