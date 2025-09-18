import React from 'react';
import { motion } from 'framer-motion';
import { ContentSection } from '@/components/layout/content-section';
import { Button } from '@/components/ui/button';
import { Calendar, Clock } from 'lucide-react';
import { trackCTAClick } from '@/lib/analytics';

const HowToApply = () => {
  const steps = [
    {
      step: 1,
      title: "Submit Application",
      description: "Fill out our online application form with details about your startup",
      duration: "15-20 mins"
    },
    {
      step: 2,
      title: "Screening Interview",
      description: "A 30-minute call with our team to discuss your application",
      duration: "30 mins"
    },
    {
      step: 3,
      title: "Detailed Review",
      description: "Our selection committee reviews your application in depth",
      duration: "1-2 weeks"
    },
    {
      step: 4,
      title: "Final Decision",
      description: "Receive our decision and next steps for accepted startups",
      duration: "2-3 days"
    }
  ];

  const eligibilityCriteria = {
    projectStatus: ["Idea Stage", "Prototype", "Testing Phase", "Recently Launched", "Scaling Up"],
    teamSize: ["1-10", "11-20", "21-50", "51-100", "100+"],
    sectors: [
      "Agriculture & Farming", "Mining & Quarrying", "Oil & Gas Extraction",
      "Manufacturing", "Construction", "Industrial Production", "Automotive", "Energy Production",
      "Retail & Wholesale Trade", "Hospitality & Tourism", "Transportation & Logistics", 
      "Finance & Banking", "Real Estate", "Education & Training", "Healthcare & Social Services",
      "Telecommunications", "Information Technology (IT)", "Legal & Consulting Services",
      "Media & Entertainment", "Public Administration & Government Services",
      "Research & Development (R&D)", "Scientific & Technical Services", "Information Services",
      "Financial Technology (FinTech)", "Education Technology (EdTech)", "Health Technology (HealthTech)",
      "Data Analytics & AI", "Executive Leadership & Policy", "Nonprofit & NGO Management",
      "Social Entrepreneurship", "Cultural & Creative Leadership"
    ]
  };

  // Sample images for sectors (replace with actual images)
  const sectorImages = {
    "Agriculture & Farming": "https://images.unsplash.com/photo-1625246335526-8715fae9d012?w=300&h=200&fit=crop",
    "Manufacturing": "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=300&h=200&fit=crop",
    "Information Technology (IT)": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=200&fit=crop",
    "Healthcare & Social Services": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=200&fit=crop",
    "Financial Technology (FinTech)": "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=300&h=200&fit=crop",
    "Education Technology (EdTech)": "https://images.unsplash.com/photo-1584697964358-3e14ca57658b?w=300&h=200&fit=crop",
    "Data Analytics & AI": "https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?w=300&h=200&fit=crop",
    "Energy Production": "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=300&h=200&fit=crop"
  };

  // InfiniteMovingCards Component
  const InfiniteMovingCards = ({ items, direction = 'left', speed = 'normal' }) => {
    const duration = speed === 'fast' ? 40 : speed === 'normal' ? 60 : 80;
    
    return (
      <div className="overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        <motion.div
          className="flex gap-4"
          animate={{
            x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: duration,
              ease: "linear",
            },
          }}
        >
          {[...items, ...items].map((item, idx) => (
            <div key={idx} className="flex-shrink-0 w-[300px] h-[200px] rounded-lg overflow-hidden relative group">
              <img 
                src={sectorImages[item] || "https://images.unsplash.com/photo-1620325867503-6a4d67effa0f?w=300&h=200&fit=crop"} 
                alt={item} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white font-semibold text-center px-2">{item}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    );
  };

  return (
    <ContentSection
      title="How to Apply"
      description="Join our next cohort of innovative startups"
      className="max-w-full mx-auto mt-24"
    >
      <div className="grid grid-cols-1 gap-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Application Process</h3>
            <div className="space-y-6">
              {steps.map((step) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: step.step * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="flex"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold mr-4">
                    {step.step}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{step.title}</h4>
                    <p className="text-muted-foreground">{step.description}</p>
                    <div className="flex items-center mt-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-1" />
                      {step.duration}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/10">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-primary mr-2" />
                <span className="font-semibold">Next Batch Deadline:</span>
                <span className="ml-2">October 15, 2024</span>
              </div>
              <Button className="mt-4 w-full" onClick={() => trackCTAClick('apply_now', 'how_to_apply', '/')}>
                Apply Now
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Eligibility Criteria</h3>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Current Project Status</h4>
              <div className="flex flex-wrap gap-2">
                {eligibilityCriteria.projectStatus.map(status => (
                  <span key={status} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                    {status}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold mb-3">Team Size</h4>
              <div className="flex flex-wrap gap-2">
                {eligibilityCriteria.teamSize.map(size => (
                  <span key={size} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                    {size}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mt-8">
          <h3 className="text-2xl font-bold mb-6">Sectors We Support</h3>
          <div className="p-4 border rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
              {eligibilityCriteria.sectors.map(sector => (
                <div key={sector} className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm">
                  {sector}
                </div>
              ))}
            </div>
          </div>
        </div> */}

        <div className="mt-12 space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">Sectors we support</h3>
            <InfiniteMovingCards 
              items={[
                "Agriculture & Farming",
                "Manufacturing",
                "Information Technology (IT)",
                "Healthcare & Social Services",
                "Financial Technology (FinTech)",
                "Education Technology (EdTech)",
                "Data Analytics & AI",
                "Energy Production"
              ]} 
              direction="left" 
              speed="normal" 
            />
          </div>
          
          <div>
            <InfiniteMovingCards 
              items={[
                "Retail & Wholesale Trade",
                "Telecommunications",
                "Real Estate",
                "Media & Entertainment",
                "Research & Development (R&D)",
                "Transportation & Logistics",
                "Social Entrepreneurship",
                "Construction"
              ]} 
              direction="right" 
              speed="normal" 
            />
          </div>
        </div>
      </div>
    </ContentSection>
  );
};

export default HowToApply;