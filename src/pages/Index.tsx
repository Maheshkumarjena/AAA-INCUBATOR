import { motion } from 'framer-motion';
import { Globe, Users, TrendingUp, Award, Heart, ArrowRight, Rocket, Target, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { PageHeader } from '@/components/layout/page-header';
import { ContentSection } from '@/components/layout/content-section';
import { trackCTAClick } from '@/lib/analytics';

const stats = [
  { number: '200+', label: 'Startups Accelerated', icon: Rocket },
  { number: '85%', label: 'Success Rate', icon: Target },
  { number: '$500M+', label: 'Total Funding Raised', icon: TrendingUp },
  { number: '50+', label: 'Countries Reached', icon: Globe },
];

const edges = [
  {
    icon: Globe,
    title: 'Global Network',
    description: 'Access partners and markets across 5 continents'
  },
  {
    icon: Users,
    title: 'Expert Mentorship',
    description: 'Learn from industry leaders and successful entrepreneurs'
  },
  {
    icon: Award,
    title: 'Comprehensive Support',
    description: 'From idea validation to Series A funding and beyond'
  },
  {
    icon: Heart,
    title: 'Purpose-Driven',
    description: 'Focus on startups solving meaningful problems'
  },
  {
    icon: Zap,
    title: 'Fast-Track Growth',
    description: 'Accelerated programs designed for rapid scaling'
  }
];

const programs = [
  { 
    name: 'Pre-Seed', 
    duration: '12 weeks', 
    color: 'from-accent to-accent-light',
    description: 'Transform your idea into a viable business model',
    highlights: ['Market validation', 'MVP development', 'Team building']
  },
  { 
    name: 'Seed', 
    duration: '16 weeks', 
    color: 'from-primary to-primary-light',
    description: 'Scale your validated concept into a growing business',
    highlights: ['Product-market fit', 'Go-to-market strategy', 'First customers']
  },
  { 
    name: 'Scale-Up', 
    duration: '20 weeks', 
    color: 'from-muted-foreground to-foreground',
    description: 'Accelerate growth and prepare for major funding rounds',
    highlights: ['Revenue optimization', 'Series A prep', 'International expansion']
  }
];

const Index = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-2xl p-8 md:p-12">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Accelerate Your
              <span className="text-gradient-primary block">Startup Journey</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transform innovative ideas into successful businesses with our comprehensive 
              acceleration programs, expert mentorship, and global network.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                className="btn-hero"
                onClick={() => trackCTAClick('apply_now', 'primary', '/')}
              >
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => trackCTAClick('view_programs', 'secondary', '/')}
              >
                View Programs
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <ContentSection>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center space-y-2"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-3">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </ContentSection>

      {/* Why Choose Us */}
      <ContentSection 
        title="Why InnovateHub?" 
        description="We provide everything you need to transform your startup idea into a thriving business"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {edges.map((edge, index) => (
            <motion.div
              key={edge.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-elevated hover-lift group"
            >
              <div className="p-4 bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                <edge.icon className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {edge.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {edge.description}
              </p>
            </motion.div>
          ))}
        </div>
      </ContentSection>

      {/* Programs */}
      <ContentSection 
        title="Programs for Every Stage" 
        description="Choose the acceleration program that matches your startup's current stage"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className={`bg-gradient-to-br ${program.color} text-white p-6 hover-lift h-full`}>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold">{program.name}</h3>
                    <p className="text-white/80">{program.duration}</p>
                  </div>
                  <p className="text-white/90">{program.description}</p>
                  <ul className="space-y-2">
                    {program.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center text-white/80 text-sm">
                        <div className="w-1.5 h-1.5 bg-white/60 rounded-full mr-2" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                    Learn More
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </ContentSection>

      {/* CTA Section */}
      <ContentSection>
        <div className="bg-gradient-to-r from-primary to-primary-light text-primary-foreground rounded-2xl p-8 md:p-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Accelerate Your Startup?
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Join the next cohort of innovative startups and transform your idea into a successful business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                onClick={() => trackCTAClick('apply_now', 'cta_section', '/')}
              >
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="ghost" 
                className="text-primary-foreground hover:bg-primary-foreground/10"
                onClick={() => trackCTAClick('schedule_call', 'cta_section', '/')}
              >
                Schedule a Call
              </Button>
            </div>
          </motion.div>
        </div>
      </ContentSection>
    </div>
  );
};

export default Index;
