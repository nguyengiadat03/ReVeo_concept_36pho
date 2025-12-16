import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import PhoCategories from '../components/PhoCategories';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <PhoCategories />
        <HowItWorks />
        <Features />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
