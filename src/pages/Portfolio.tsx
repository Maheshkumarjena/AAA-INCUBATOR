import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, ExternalLink, TrendingUp } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const startups = [
  {
    id: 1,
    name: 'EcoTech Solutions',
    sector: 'CleanTech',
    stage: 'Series A',
    funding: '$2.5M',
    description: 'Revolutionary solar panel technology increasing efficiency by 40%',
    logo: '🌱',
    metrics: { users: '50K+', countries: 12 }
  },
  {
    id: 2,
    name: 'HealthAI',
    sector: 'HealthTech',
    stage: 'Seed',
    funding: '$1.2M',
    description: 'AI-powered diagnostic tools for early disease detection',
    logo: '🏥',
    metrics: { hospitals: 25, accuracy: '94%' }
  },
  {
    id: 3,
    name: 'FinFlow',
    sector: 'FinTech',
    stage: 'MVP',
    funding: '$500K',
    description: 'Blockchain-based cross-border payment solutions',
    logo: '💰',
    metrics: { transactions: '100K+', savings: '60%' }
  },
  {
    id: 4,
    name: 'EduVerse',
    sector: 'EdTech',
    stage: 'Revenue',
    funding: '$800K',
    description: 'Virtual reality platform for immersive learning experiences',
    logo: '🎓',
    metrics: { students: '25K+', schools: 150 }
  },
  {
    id: 5,
    name: 'FoodChain',
    sector: 'AgriTech',
    stage: 'Scaling',
    funding: '$3.2M',
    description: 'Supply chain optimization for sustainable food production',
    logo: '🌾',
    metrics: { farms: '500+', waste: '-30%' }
  },
  {
    id: 6,
    name: 'UrbanMobility',
    sector: 'Mobility',
    stage: 'Seed',
    funding: '$1.8M',
    description: 'Smart traffic management using IoT and machine learning',
    logo: '🚗',
    metrics: { cities: 8, efficiency: '+25%' }
  }
];

const sectors = ['All', 'CleanTech', 'HealthTech', 'FinTech', 'EdTech', 'AgriTech', 'Mobility'];
const stages = ['All', 'MVP', 'Seed', 'Revenue', 'Series A', 'Scaling'];

export default function Portfolio() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSector, setSelectedSector] = useState('All');
  const [selectedStage, setSelectedStage] = useState('All');

  const filteredStartups = startups.filter(startup => {
    const matchesSearch = startup.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         startup.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSector = selectedSector === 'All' || startup.sector === selectedSector;
    const matchesStage = selectedStage === 'All' || startup.stage === selectedStage;
    
    return matchesSearch && matchesSector && matchesStage;
  });

  return (
    // <div className="min-h-screen bg-gradient-surface">
    //   {/* Header */}
    //   <section className="py-16 bg-gradient-primary text-primary-foreground">
    //     <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    //       <motion.div
    //         initial={{ opacity: 0, y: 30 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.8 }}
    //       >
    //         <h1 className="text-4xl md:text-5xl font-bold mb-6">
    //           Our Startup Portfolio
    //         </h1>
    //         <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
    //           Discover the innovative companies we've helped accelerate from idea to impact
    //         </p>
    //       </motion.div>
    //     </div>
    //   </section>

    //   {/* Search and Filters */}
    //   <section className="py-8 bg-background border-b">
    //     <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    //       <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
    //         <div className="relative flex-1 max-w-md">
    //           <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
    //           <Input
    //             type="text"
    //             placeholder="Search startups..."
    //             value={searchTerm}
    //             onChange={(e) => setSearchTerm(e.target.value)}
    //             className="pl-10"
    //           />
    //         </div>
            
    //         <div className="flex gap-2 flex-wrap">
    //           <div className="flex gap-1">
    //             {sectors.map(sector => (
    //               <Button
    //                 key={sector}
    //                 variant={selectedSector === sector ? "default" : "outline"}
    //                 size="sm"
    //                 onClick={() => setSelectedSector(sector)}
    //                 className="text-xs"
    //               >
    //                 {sector}
    //               </Button>
    //             ))}
    //           </div>
              
    //           <div className="flex gap-1">
    //             {stages.map(stage => (
    //               <Button
    //                 key={stage}
    //                 variant={selectedStage === stage ? "default" : "outline"}
    //                 size="sm"
    //                 onClick={() => setSelectedStage(stage)}
    //                 className="text-xs"
    //               >
    //                 {stage}
    //               </Button>
    //             ))}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Portfolio Grid */}
    //   <section className="py-16">
    //     <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    //       <motion.div
    //         initial={{ opacity: 0 }}
    //         animate={{ opacity: 1 }}
    //         transition={{ duration: 0.6 }}
    //         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    //       >
    //         {filteredStartups.map((startup, index) => (
    //           <motion.div
    //             key={startup.id}
    //             initial={{ opacity: 0, y: 30 }}
    //             animate={{ opacity: 1, y: 0 }}
    //             transition={{ duration: 0.6, delay: index * 0.1 }}
    //             className="card-elevated hover-lift group cursor-pointer"
    //           >
    //             <div className="space-y-4">
    //               <div className="flex items-start justify-between">
    //                 <div className="flex items-center space-x-3">
    //                   <div className="text-3xl">{startup.logo}</div>
    //                   <div>
    //                     <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
    //                       {startup.name}
    //                     </h3>
    //                     <div className="flex items-center space-x-2">
    //                       <Badge variant="secondary" className="text-xs">
    //                         {startup.sector}
    //                       </Badge>
    //                       <Badge variant="outline" className="text-xs">
    //                         {startup.stage}
    //                       </Badge>
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
    //               </div>

    //               <p className="text-muted-foreground text-sm">
    //                 {startup.description}
    //               </p>

    //               <div className="flex items-center justify-between">
    //                 <div className="text-lg font-semibold text-accent">
    //                   {startup.funding}
    //                 </div>
    //                 <div className="flex items-center space-x-1 text-green-600">
    //                   <TrendingUp className="h-4 w-4" />
    //                   <span className="text-sm font-medium">Growing</span>
    //                 </div>
    //               </div>

    //               <div className="pt-4 border-t border-border">
    //                 <div className="grid grid-cols-2 gap-4 text-xs text-muted-foreground">
    //                   {Object.entries(startup.metrics).map(([key, value]) => (
    //                     <div key={key} className="text-center">
    //                       <div className="font-semibold text-foreground">{value}</div>
    //                       <div className="capitalize">{key}</div>
    //                     </div>
    //                   ))}
    //                 </div>
    //               </div>
    //             </div>
    //           </motion.div>
    //         ))}
    //       </motion.div>

    //       {filteredStartups.length === 0 && (
    //         <div className="text-center py-16">
    //           <p className="text-muted-foreground text-lg">
    //             No startups found matching your criteria.
    //           </p>
    //         </div>
    //       )}
    //     </div>
    //   </section>

    //   {/* Success Stories CTA */}
    //   <section className="py-16 bg-primary text-primary-foreground">
    //     <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    //       <motion.div
    //         initial={{ opacity: 0, y: 30 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.8 }}
    //       >
    //         <h2 className="text-3xl font-bold mb-4">
    //           Ready to Join Our Success Stories?
    //         </h2>
    //         <p className="text-xl text-primary-foreground/90 mb-8">
    //           Transform your innovative idea into the next game-changing startup
    //         </p>
    //         <Button size="lg" className="btn-accent">
    //           Apply Now
    //         </Button>
    //       </motion.div>
    //     </div>
    //   </section>
    // </div>

        <div className='flex w-full h-full flex-row justify-center items-center'> coming soon ....</div>

  );
}