import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AppelsList from "@/components/AppelsList";
import MethodologieSection from "@/components/MethodologieSection";
import PlanAction from "@/components/PlanAction";
import ArchivesSection from "@/components/ArchivesSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[oklch(0.08_0.005_285)] text-white/90">
      <Header />
      <main>
        <HeroSection />
        <AppelsList />
        <PlanAction />
        <ArchivesSection />
        <MethodologieSection />
      </main>
      <Footer />
    </div>
  );
}
