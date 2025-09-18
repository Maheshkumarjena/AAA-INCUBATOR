import HomeBackground from '@/components/home/HomeBackground';
import Hero from '@/components/home/Hero';
import Stats from '@/components/home/Stats';
import About from '@/components/home/About';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Programs from '@/components/home/Programs';
import StartupPortfolio from '@/components/home/StartupPortfolio';
import HowToApply from '@/components/home/HowToApply';
import ResourcesNetwork from '@/components/home/ResourcesNetwork';
import BlogInsights from '@/components/home/BlogInsights';
import GetInvolved from '@/components/home/GetInvolved';
import CtaSection from '@/components/home/CtaSection';
import { Footer } from '@/components/sections/footer';

const Index = () => {
  return (
    <div className="pb-10 relative p-8 top-0 overflow-hidden">
      <HomeBackground />
      <Hero />
      <Stats />
      <About />
      <WhyChooseUs />
      <Programs />
      <StartupPortfolio />
      <HowToApply />
      <ResourcesNetwork />
      <BlogInsights />
      <GetInvolved />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;