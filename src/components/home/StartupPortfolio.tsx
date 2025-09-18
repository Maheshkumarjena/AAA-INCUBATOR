import React from 'react';
import { motion } from 'framer-motion';
import { ContentSection } from '@/components/layout/content-section';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { trackCTAClick } from '@/lib/analytics';

const startups = [
  {
    id: 1,
    name: "AgriTech Solutions",
    sector: "Agriculture",
    stage: "Seed",
    funding: "$2.4M",
  logo: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=80&q=80",
    description: "Revolutionizing farming with AI-powered crop monitoring"
  },
  {
    id: 2,
    name: "HealthBridge",
    sector: "HealthTech",
    stage: "Series A",
    funding: "$5.1M",
  logo: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=80&q=80",
    description: "Connecting remote patients with specialized healthcare"
  },
  {
    id: 3,
    name: "EduLearn",
    sector: "EdTech",
    stage: "Pre-seed",
    funding: "$750K",
  logo: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=80&q=80",
    description: "Personalized learning platforms for African schools"
  },
  {
    id: 4,
    name: "GreenEnergy",
    sector: "CleanTech",
    stage: "Series B",
    funding: "$12M",
  logo: "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=crop&w=80&q=80",
    description: "Affordable solar solutions for off-grid communities"
  },
  {
    id: 5,
    name: "FinAccess",
    sector: "FinTech",
    stage: "Seed",
    funding: "$3.2M",
  logo: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=80&q=80",
    description: "Digital banking for the unbanked population"
  },
  {
    id: 6,
    name: "SupplyChain Pro",
    sector: "Logistics",
    stage: "Series A",
    funding: "$4.5M",
  logo: "https://images.unsplash.com/photo-1465101178521-c1a4c8a0a8b7?auto=format&fit=crop&w=80&q=80",
    description: "Optimizing supply chains across emerging markets"
  }
];

const sectors = ["All", "Agriculture", "HealthTech", "EdTech", "CleanTech", "FinTech", "Logistics"];
const stages = ["All", "Pre-seed", "Seed", "Series A", "Series B"];

export const StartupPortfolio = () => {
  const [filteredSector, setFilteredSector] = React.useState("All");
  const [filteredStage, setFilteredStage] = React.useState("All");

  const filteredStartups = startups.filter(startup => {
    return (filteredSector === "All" || startup.sector === filteredSector) &&
           (filteredStage === "All" || startup.stage === filteredStage);
  });

  return (
    <ContentSection
      title="Startup Portfolio"
      description="Discover the innovative startups we've accelerated"
      className="max-w-full mx-auto mt-24"
    >
      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-2">Filter by Sector</label>
          <select 
            className="p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            value={filteredSector}
            onChange={(e) => setFilteredSector(e.target.value)}
          >
            {sectors.map(sector => (
              <option key={sector} value={sector}>{sector}</option>
            ))}
          </select>
        </div>
        
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-2">Filter by Stage</label>
          <select 
            className="p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            value={filteredStage}
            onChange={(e) => setFilteredStage(e.target.value)}
          >
            {stages.map(stage => (
              <option key={stage} value={stage}>{stage}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStartups.map((startup) => (
          <motion.div
            key={startup.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="group"
          >
            <Card className="p-6 h-full transition-all duration-300 hover:shadow-lg border-border">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center mr-4">
                  <img
                    src={startup.logo || "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=80&q=80"}
                    alt={startup.name}
                    width={48}
                    height={48}
                    className="rounded-md object-cover w-12 h-12"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{startup.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                      {startup.sector}
                    </span>
                    <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">
                      {startup.stage}
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4">{startup.description}</p>
              
              <div className="flex justify-between items-center">
                <span className="font-semibold text-primary">{startup.funding} raised</span>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button onClick={() => trackCTAClick('view_all_startups', 'portfolio', '/')}>View All Startups</Button>
      </div>
    </ContentSection>
  );
};

export default StartupPortfolio;
