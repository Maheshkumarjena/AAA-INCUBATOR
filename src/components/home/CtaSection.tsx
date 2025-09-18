import { ContentSection } from '@/components/layout/content-section';
import { motion } from 'framer-motion';
import MagicBorderButton from '@/components/ui/magic-border-button';
import HoverBorderGradientButton from '@/components/ui/hover-border-gradient-button';
import { ArrowRight } from 'lucide-react';
import { trackCTAClick } from '@/lib/analytics';

export const CtaSection = () => {
  return (
    <ContentSection className="max-w-full mx-auto my-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative overflow-hidden rounded-2xl"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 dark:from-primary dark:to-primary/70 pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRo')] pointer-events-none" />
        <div className="absolute top-1/4 -left-20 w-40 h-40 bg-white/10 rounded-full blur-xl animate-pulse-slow pointer-events-none" />
        <div className="absolute bottom-1/4 -right-20 w-40 h-40 bg-white/10 rounded-full blur-xl animate-pulse-slow delay-1000 pointer-events-none" />

        <div className="relative z-10 p-8 md:p-12 text-center space-y-6">
          <h2 className="text-2xl md:text-4xl font-bold text-primary-foreground">Ready to Accelerate Your Startup?</h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">Join the next cohort of innovative startups and transform your idea into a successful business.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <MagicBorderButton onClick={() => trackCTAClick('apply_now', 'cta_section', '/')} className="h-12" innerClassName="bg-background text-foreground px-6 py-3 text-base group">
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </MagicBorderButton>
            <HoverBorderGradientButton onClick={() => trackCTAClick('schedule_call', 'cta_section', '/')} className="h-12" innerClassName="text-primary-foreground px-6 py-3 text-base">
              Schedule a Call
            </HoverBorderGradientButton>
          </div>
        </div>
      </motion.div>
    </ContentSection>
  );
};

export default CtaSection;
