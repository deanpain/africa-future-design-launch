import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ImpactSection from "@/components/ImpactSection";
import GivingSection from "@/components/GivingSection";
import MissionSection from "@/components/MissionSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <GivingSection />
      <ImpactSection />
      <MissionSection />
      <Footer />
    </div>
  );
};

export default Index;
