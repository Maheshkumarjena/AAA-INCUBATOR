import { ContentSection } from '@/components/layout/content-section';
import { Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const About = () => {
  return (
    <ContentSection
      title="About InnovateHub"
      description="We accelerate early-stage startups solving real-world problems"
      className="relative z-10 isolate max-w-full mx-auto mt-16 md:mt-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-2xl font-bold mb-6">Founder's Message</h3>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-muted-foreground mb-4">
              After years immersed in the banking and investment sectors, we recognized a powerful yet overlooked truth: 
              across developing nations, particularly in Africa, the world's youngest and most dynamic continent, 
              countless entrepreneurs possess brilliant ideas brimming with potential. But brilliance alone is not enough.
            </p>
            <p className="text-muted-foreground mb-4">
              Too often, these visionaries are not investor-ready. Their ventures lack the structural, financial, 
              and strategic frameworks necessary to attract and secure capital. The result? Untapped talent, stalled progress, 
              and missed opportunities for job creation on a massive scale.
            </p>
            <p className="text-muted-foreground mb-4">
              This is where we step in. We accelerate the transformation process, restructuring enterprises, 
              strengthening their foundations, and equipping them to meet global investment standards. 
              We don't just prepare businesses for funding; we build ecosystems that drive scalable, sustainable impact.
            </p>
            <p className="text-muted-foreground font-semibold">
              Our mission is clear: To unlock capital flows, catalyze innovation, and enable the rapid creation of 
              millions of jobs—especially in regions that need it most. Africa leads the charge, and we stand ready 
              to build the bridges that turn ideas into engines of prosperity.
            </p>
          </div>
        </div>

        <div className="bg-muted rounded-2xl p-8 h-full flex items-center justify-center">
    <div className="w-full h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
      <div className="text-center p-6">
      <div className="w-full aspect-video flex items-center justify-center mb-4">
        <iframe
          title="Founder's Video Message"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          width="100%"
          height="100%"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-xl shadow-lg w-full h-full"
        ></iframe>
      </div>
      <p className="text-lg font-medium">Founder's Video Message</p>
      <p className="text-muted-foreground mt-2">Watch the video introduction from our founder.</p>
      </div>
    </div>
    </div>
  </div>
  </ContentSection>
);
};

export default About;
