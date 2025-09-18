import { ContentSection } from '@/components/layout/content-section';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Rocket, Users, Globe } from 'lucide-react';
import { trackCTAClick } from '@/lib/analytics';

export const GetInvolved = () => {
  return (
    <ContentSection
      title="Get Involved"
      description="Join our mission to support innovative startups"
      className="max-w-full mx-auto mt-24"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 text-center group hover:shadow-lg transition-shadow">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
            <Rocket className="w-8 h-8 text-primary" />
          </div>
          <h3 className="font-bold text-xl mb-3">For Startups</h3>
          <p className="text-muted-foreground mb-4">
            Apply to join our accelerator program and get the support you need to scale
          </p>
          <Button onClick={() => trackCTAClick('apply_as_startup', 'get_involved', '/')}>Apply to Join</Button>
        </Card>
        
        <Card className="p-6 text-center group hover:shadow-lg transition-shadow">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
            <Users className="w-8 h-8 text-primary" />
          </div>
          <h3 className="font-bold text-xl mb-3">For Mentors/Investors</h3>
          <p className="text-muted-foreground mb-4">
            Share your expertise and support the next generation of innovators
          </p>
          <Button variant="outline" onClick={() => trackCTAClick('join_as_mentor', 'get_involved', '/')}>Express Interest</Button>
        </Card>
        
        <Card className="p-6 text-center group hover:shadow-lg transition-shadow">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
            <Globe className="w-8 h-8 text-primary" />
          </div>
          <h3 className="font-bold text-xl mb-3">For Corporates/Donors</h3>
          <p className="text-muted-foreground mb-4">
            Partner with us to drive innovation and create sustainable impact
          </p>
          <Button variant="outline" onClick={() => trackCTAClick('partner_with_us', 'get_involved', '/')}>Partner With Us</Button>
        </Card>
      </div>
    </ContentSection>
  );
};

export default GetInvolved;
