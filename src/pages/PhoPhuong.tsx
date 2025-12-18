import AppShell from "../layout/AppShell";
import HomeHero from "../components/home/HomeHero";
import PhoGrid from "../components/home/PhoGrid";
import ValueSection from "../components/home/ValueSection";
import FinalCTA from "../components/home/FinalCTA";

const PhoPhuong = () => {
  return (
    <AppShell>
      <div className="space-y-0">
        {/* Hero Section */}
        <HomeHero />

        {/* 36 Pho Grid */}
        <PhoGrid />

        {/* Value Proposition */}
        <ValueSection />

        {/* Final CTA */}
        <FinalCTA />
      </div>
    </AppShell>
  );
};

export default PhoPhuong;
