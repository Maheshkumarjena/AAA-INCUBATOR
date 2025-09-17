import { motion } from 'framer-motion';
import { Users, Award, Target } from 'lucide-react';
import { PageHeader } from '@/components/layout/page-header';
import { ContentSection } from '@/components/layout/content-section';
import { TeamCard } from '@/components/ui/team-card';
import teamData from '@/data/team.json';

const stats = [
  {
    icon: Users,
    number: '50+',
    label: 'Startups Accelerated',
    description: 'Successfully graduated from our programs'
  },
  {
    icon: Award,
    number: '$2B+',
    label: 'Combined Valuation',
    description: 'Total portfolio company value'
  },
  {
    icon: Target,
    number: '85%',
    label: 'Success Rate',
    description: 'Companies still active after 3 years'
  }
];

export default function Team() {
  return (
    // <div className="min-h-screen">
    //   {/* Page Header */}
    //   <PageHeader
    //     title="Meet Our Team"
    //     description="Experienced entrepreneurs, investors, and industry experts dedicated to your startup's success"
    //   />

    //   {/* Stats Section */}
    //   <ContentSection className="py-16">
    //     <motion.div
    //       initial={{ opacity: 0, y: 20 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 0.6 }}
    //       className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
    //     >
    //       {stats.map((stat, index) => (
    //         <motion.div
    //           key={stat.label}
    //           initial={{ opacity: 0, y: 20 }}
    //           animate={{ opacity: 1, y: 0 }}
    //           transition={{ duration: 0.6, delay: index * 0.1 }}
    //           className="text-center p-6 rounded-lg bg-card border border-border"
    //         >
    //           <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-lg mb-4">
    //             <stat.icon className="w-6 h-6" />
    //           </div>
    //           <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
    //           <div className="text-lg font-semibold text-foreground mb-1">{stat.label}</div>
    //           <div className="text-sm text-muted-foreground">{stat.description}</div>
    //         </motion.div>
    //       ))}
    //     </motion.div>

    //     {/* Team Grid */}
    //     <div className="space-y-12">
    //       {/* Section Header */}
    //       <motion.div
    //         initial={{ opacity: 0, y: 20 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.6, delay: 0.3 }}
    //         className="text-center max-w-3xl mx-auto"
    //       >
    //         <h2 className="text-3xl font-bold text-foreground mb-4">
    //           Leadership & Advisors
    //         </h2>
    //         <p className="text-lg text-muted-foreground">
    //           Our team combines decades of startup experience with deep industry knowledge 
    //           to provide unparalleled guidance and support.
    //         </p>
    //       </motion.div>

    //       {/* Team Cards Grid */}
    //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    //         {teamData.map((member, index) => (
    //           <TeamCard
    //             key={member.id}
    //             member={member}
    //             index={index}
    //           />
    //         ))}
    //       </div>
    //     </div>

    //     {/* Join Team CTA */}
    //     <motion.div
    //       initial={{ opacity: 0, y: 20 }}
    //       whileInView={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 0.6 }}
    //       viewport={{ once: true }}
    //       className="mt-16 text-center p-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl border border-primary/10"
    //     >
    //       <h3 className="text-2xl font-bold text-foreground mb-4">
    //         Join Our Team
    //       </h3>
    //       <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
    //         We're always looking for passionate individuals who share our vision of 
    //         empowering the next generation of entrepreneurs. Explore opportunities 
    //         to make a meaningful impact.
    //       </p>
    //       <div className="flex flex-col sm:flex-row gap-4 justify-center">
    //         <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
    //           View Open Positions
    //         </button>
    //         <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-colors">
    //           Become a Mentor
    //         </button>
    //       </div>
    //     </motion.div>
    //   </ContentSection>
    // </div>
        <div className='flex w-full h-full flex-row justify-center items-center'> coming soon ....</div>

  );
}