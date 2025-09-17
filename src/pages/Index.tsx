import { motion } from 'framer-motion';
import { Globe, Users, TrendingUp, Award, Heart, ArrowRight, Rocket, Target, Zap, ChevronRight, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ContentSection } from '@/components/layout/content-section';
import { trackCTAClick } from '@/lib/analytics';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Spotlight } from '@/components/ui/spotlight';
import { useTheme } from "next-themes";
import { GlareCard } from '@/components/ui/glare-card';


// Updated Spotlight Component with light/dark mode support
type SpotlightProps = {
  className?: string;
  fill?: string;
};

const ThemedSpotlight = ({ className, fill }) => {
  const { theme } = useTheme();
  const isLightMode = theme === "light";
  
  return (
    <Spotlight 
      className={className} 
      fill={fill} 
      lightMode={isLightMode} 
    />
  );
};

// Mouse-following spotlight component
const MouseSpotlight = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none bg-pink-600 fixed inset-0 z-30 transition-opacity duration-300 opacity-0 md:opacity-100"
      style={{
        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.1), transparent 40%)`,
      }}
    />
  );
};

// Updated FullWidthGridPattern with better theme support
const FullWidthGridPattern = () => {
  return (
    <div className="absolute inset-0 z-0 w-screen h-full overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#d1d1d1_1px,transparent_1px),linear-gradient(to_bottom,#d1d1d1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_15%,transparent_65%)] 
                  dark:bg-[linear-gradient(to_right,#404040_1px,transparent_1px),linear-gradient(to_bottom,#404040_1px,transparent_1px)] opacity-60 transition-opacity duration-300"
        style={{
          left: '50%',
          transform: 'translateX(-50%)',
          width: '105vw'
        }}
      />
      
      {/* Additional gradient overlays for seamless blending */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background/90 opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/90 opacity-70" />
    </div>
  );
};
// Stats data
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
    color: 'from-blue-50/70 to-blue-100/70 dark:from-blue-600 dark:to-blue-700',
    borderColor: 'border-blue-50 dark:border-blue-800',
    textColor: 'text-blue-600 dark:text-blue-300',
    bgColor: 'bg-blue-50 dark:bg-blue-950/30',
    iconColor: 'text-blue-500 dark:text-blue-400',
    description: 'Transform your idea into a viable business model',
    highlights: ['Market validation', 'MVP development', 'Team building']
  },
  {
    name: 'Seed',
    duration: '16 weeks',
    color: 'from-purple-50/70 to-purple-100/70 dark:from-purple-600 dark:to-purple-700',
    borderColor: 'border-purple-50 dark:border-purple-800',
    textColor: 'text-purple-600 dark:text-purple-300',
    bgColor: 'bg-purple-50 dark:bg-purple-950/30',
    iconColor: 'text-purple-500 dark:text-purple-400',
    description: 'Scale your validated concept into a growing business',
    highlights: ['Product-market fit', 'Go-to-market strategy', 'First customers']
  },
  {
    name: 'Scale-Up',
    duration: '20 weeks',
    color: 'from-amber-50/70 to-amber-100/70 dark:from-amber-600 dark:to-amber-700',
    borderColor: 'border-amber-50 dark:border-amber-800',
    textColor: 'text-amber-600 dark:text-amber-300',
    bgColor: 'bg-amber-50 dark:bg-amber-950/30',
    iconColor: 'text-amber-500 dark:text-amber-400',
    description: 'Accelerate growth and prepare for major funding rounds',
    highlights: ['Revenue optimization', 'Series A prep', 'International expansion']
  }
];

// CountUp component
interface CountUpProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

const parseNumberParts = (value: string): { prefix: string; end: number; suffix: string } => {
  const m = value.trim().match(/^([^0-9]*)([0-9]+(?:\.[0-9]+)?)(.*)$/);
  if (!m) return { prefix: '', end: 0, suffix: '' };
  return { prefix: m[1] ?? '', end: parseFloat(m[2] ?? '0'), suffix: m[3] ?? '' };
};

const CountUp: React.FC<CountUpProps> = ({ end, duration = 1500, prefix = '', suffix = '', className }) => {
  const [value, setValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!ref.current || hasAnimated) return;

    let frameId = 0;
    let observer: IntersectionObserver | null = null;

    const startAnimation = () => {
      const start = performance.now();
      const from = 0;
      const to = end;

      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const current = Math.floor(from + (to - from) * progress);
        setValue(current);
        if (progress < 1) {
          frameId = requestAnimationFrame(tick);
        } else {
          setHasAnimated(true);
        }
      };

      frameId = requestAnimationFrame(tick);
    };

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startAnimation();
            observer?.disconnect();
          }
        });
      },
      { root: null, threshold: 0.3, rootMargin: '0px 0px -80px 0px' }
    );

    observer.observe(ref.current);

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
      observer?.disconnect();
    };
  }, [end, duration, hasAnimated]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
};

const Index = () => {
  const { theme } = useTheme();
  const isLightMode = theme === "light";
  return (
    <div className="pb-10 relative p-8 top-0 overflow-hidden">
      <div className="fixed inset-0 z-0">
        <MouseSpotlight />
        <MouseSpotlight />

        <Spotlight className="-top-40 left-0 md:-top-[300px] md:left-60" fill={isLightMode ? "black" : "white"} lightMode={isLightMode} />
        
        <Spotlight className="top-0 left-0" fill="black" lightMode={true} />
        


        <Spotlight className="" fill={isLightMode ? "black" : "white"} lightMode={isLightMode} />
        <FullWidthGridPattern />
        
        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 dark:from-primary/10 dark:via-background dark:to-accent/10" />

        {/* Full-Width Grid Pattern Background */}
        {/* <FullWidthGridPattern /> */}
        
        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />

        <div className="container relative mt-4 sm:mt-8 md:mt-12 z-10 px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8 max-w-4xl mx-auto"
          >

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center rounded-full border px-4 py-1 text-sm font-medium bg-primary/10 text-primary border-primary/20 mb-4"
            >
              <Star className="w-4 h-4 mr-2 fill-primary" />
              The leading startup accelerator in 2024
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
            >
              Accelerate Your
               <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-primary dark:to-accent bg-clip-text text-transparent block mt-2">
                Startup Journey
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              Transform innovative ideas into successful businesses with our comprehensive
              acceleration programs, expert mentorship, and global network.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-all duration-300 group px-8 py-6 text-base"
                onClick={() => trackCTAClick('apply_now', 'primary', '/')}
              >
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-accent/10 text-foreground px-8 py-6 text-base"
                onClick={() => trackCTAClick('view_programs', 'secondary', '/')}
              >
                View Programs
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.7 }}
              className="pt-8"
            >
              <p className="text-sm text-muted-foreground">Trusted by leading startups worldwide</p>
              <div className="flex justify-center items-center gap-8 mt-4 opacity-70">
                <div className="h-8 w-8 bg-primary/20 rounded-lg"></div>
                <div className="h-10 w-10 bg-accent/20 rounded-lg"></div>
                <div className="h-8 w-8 bg-primary/20 rounded-lg"></div>
                <div className="h-10 w-10 bg-accent/20 rounded-lg"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <ContentSection className='mt-4 sm:mt-8 md:mt-12'>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative z-0 text-center space-y-3 p-4 md:p-6 rounded-xl group transition-all duration-300
              bg-background/40 dark:bg-neutral-900/30 bg-clip-padding backdrop-blur-md supports-[backdrop-filter]:backdrop-blur-xl
              border border-white/30 dark:border-white/10 ring-1 ring-inset ring-white/10 dark:ring-white/5
              hover:border-primary/40 dark:hover:border-primary/50 hover:ring-primary/30 shadow-sm hover:shadow-lg
              before:content-[''] before:absolute before:inset-0 before:rounded-xl before:-z-10
              before:bg-[radial-gradient(closest-side,hsl(var(--primary)/.35),transparent)] before:opacity-0 group-hover:before:opacity-100 before:blur-xl before:transition-opacity"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-lg mx-auto mb-3
                bg-primary/10 dark:bg-primary/15 backdrop-blur-sm border border-white/30 dark:border-white/10
                ring-0 group-hover:ring-2 ring-primary/30 transition-all">
                <stat.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform drop-shadow-[0_0_6px_hsl(var(--primary)/0.5)]" />
              </div>
              <CountUp
                {...parseNumberParts(stat.number)}
                className="text-2xl md:text-3xl font-bold text-foreground"
              />
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </ContentSection>

      {/* Why Choose Us */}
      <ContentSection
        title="Why InnovateHub?"
        description="We provide everything you need to transform your startup idea into a thriving business"
        className="relative z-10 isolate max-w-full mx-auto mt-16 md:mt-24"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {edges.map((edge, index) => (
            <motion.div
              key={edge.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className={index === 4 ? "md:col-span-2 lg:col-span-1" : ""}
            >
              <Card className="relative z-10 p-6 h-full transition-all duration-300 hover:shadow-md hover:z-20 border-border dark:border-foreground/10 group hover:border-primary/20 dark:hover:border-primary/30 bg-card">
                <div className="p-3 bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <edge.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {edge.title}
                </h3>
                <p className="text-muted-foreground">
                  {edge.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </ContentSection>

      {/* Programs */}
      <ContentSection
        title="Programs for Every Stage"
        description="Choose the acceleration program that matches your startup's current stage"
        className="max-w-full mx-auto mt-24"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            
            <motion.div
              key={program.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group"
            >
            <GlareCard>
              <Card className={`p-1 min-w-fit h-full bg-gradient-to-br ${program.color} overflow-hidden transition-all duration-500 hover:shadow-xl`}>
                <div className={`flex flex-col h-full bg-card/80 dark:bg-card/90 backdrop-blur-sm rounded-[11px] p-6 border ${program.borderColor}`}>
                  <div className="mb-6">
                    <div className={`inline-flex items-center rounded-full ${program.bgColor} ${program.textColor} px-3 py-1 text-xs font-medium mb-4`}>
                      {program.duration}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{program.name}</h3>
                    <p className="text-muted-foreground">{program.description}</p>
                  </div>

                  <div className="flex-grow mb-6">
                    <ul className="space-y-3">
                      {program.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start text-foreground text-sm">
                          <CheckCircle className={`w-5 h-5 ${program.iconColor} mr-3 mt-0.5 flex-shrink-0`} />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    variant="outline"
                    className={`w-full border ${program.borderColor} ${program.textColor} hover:${program.bgColor} group-hover:shadow-md transition-all`}
                  >
                    Learn More
                    <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            </GlareCard>
            </motion.div>

          ))}
        </div>
      </ContentSection>

      {/* CTA Section */}
      <ContentSection className="max-w-full mx-auto mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative overflow-hidden rounded-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 dark:from-primary dark:to-primary/70" />

          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRo')]" />

          {/* Animated elements */}
          <div className="absolute top-1/4 -left-20 w-40 h-40 bg-white/10 rounded-full blur-xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 -right-20 w-40 h-40 bg-white/10 rounded-full blur-xl animate-pulse-slow delay-1000" />

          <div className="relative z-10 p-8 md:p-12 text-center space-y-6">
            <h2 className="text-2xl md:text-4xl font-bold text-primary-foreground">
              Ready to Accelerate Your Startup?
            </h2>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              Join the next cohort of innovative startups and transform your idea into a successful business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="bg-background text-foreground hover:bg-background/90 shadow-md hover:shadow-lg transition-all duration-300 group"
                onClick={() => trackCTAClick('apply_now', 'cta_section', '/')}
              >
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-primary-foreground/5"
                onClick={() => trackCTAClick('schedule_call', 'cta_section', '/')}
              >
                Schedule a Call
              </Button>
            </div>
          </div>
        </motion.div>
      </ContentSection>
    </div>
  );
};

export default Index;