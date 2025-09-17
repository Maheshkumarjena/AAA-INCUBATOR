import { motion } from 'framer-motion';
import { Globe, Users, TrendingUp, Award, Heart, Lightbulb } from 'lucide-react';

const edges = [
  {
    icon: Globe,
    title: 'Global Reach, Local Impact',
    description: 'Partners across 5 continents, rooted in local realities'
  },
  {
    icon: Users,
    title: 'World-Class Mentorship',
    description: 'Industry leaders and successful entrepreneurs guide your journey'
  },
  {
    icon: TrendingUp,
    title: 'Proven Track Record',
    description: '85% success rate with portfolio companies achieving major milestones'
  },
  {
    icon: Award,
    title: 'Comprehensive Support',
    description: 'From idea validation to Series A funding and beyond'
  },
  {
    icon: Heart,
    title: 'Purpose-Driven',
    description: 'Focus on startups solving real-world problems'
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-surface">
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gradient-primary mb-6">
              About AAA INCUBATOR
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              We accelerate early-stage startups solving real-world problems through 
              comprehensive incubation programs and world-class mentorship.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Mission Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
              <div className="prose prose-lg text-muted-foreground">
                <p>
                  After years immersed in the startup ecosystem, we recognized a critical gap: 
                  brilliant ideas often fail not due to lack of innovation, but due to lack of 
                  proper guidance, resources, and strategic support.
                </p>
                <p>
                  AAA INCUBATOR was born from the belief that with the right combination of mentorship, 
                  funding, and global network access, any determined entrepreneur can build solutions 
                  that create lasting impact and become engines of prosperity.
                </p>
              </div>
            </motion.div>

            {/* Video/Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="aspect-video rounded-2xl bg-gradient-primary p-8 flex items-center justify-center shadow-large">
                <div className="text-center text-primary-foreground">
                  <Lightbulb className="h-16 w-16 mx-auto mb-4 animate-pulse" />
                  <h3 className="text-2xl font-bold mb-2">Founders' Message</h3>
                  <p className="text-primary-foreground/80">
                    "Every great company starts with solving a real problem."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Unique Edge
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What sets us apart in the crowded incubator landscape
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {edges.map((edge, index) => (
              <motion.div
                key={edge.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-elevated hover-lift group"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-accent/10 transition-colors">
                    <edge.icon className="h-8 w-8 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {edge.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {edge.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team/Values Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Built by Entrepreneurs, for Entrepreneurs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-muted-foreground">Mentor Hours</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">$50M+</div>
                <div className="text-muted-foreground">Capital Raised</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">95%</div>
                <div className="text-muted-foreground">Satisfaction Rate</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}