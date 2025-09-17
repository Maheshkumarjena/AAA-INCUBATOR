import { motion } from 'framer-motion';
import { ArrowRight, Rocket, Globe, TrendingUp, Users } from 'lucide-react';
import { HeroButton } from '../ui/hero-button';
import heroImage from '@/assets/hero-workspace.jpg';

const stats = [
  { icon: Rocket, value: '1,458', label: 'Startups Accelerated' },
  { icon: TrendingUp, value: '$50K', label: 'Min Cap Table' },
  { icon: TrendingUp, value: '$500K', label: 'Max Capital' },
  { icon: Globe, value: '89', label: 'Countries' },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Diverse entrepreneurs collaborating in modern workspace"
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-accent rounded-full animate-float opacity-60" />
      <div className="absolute top-32 right-20 w-6 h-6 bg-primary-light rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-accent-light rounded-full animate-float opacity-50" style={{ animationDelay: '4s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            <span className="block">Fueling Bold Ideas</span>
            <span className="block text-gradient-accent">into Global Impact</span>
          </h1>
          
          <motion.h2 
            className="text-2xl md:text-4xl text-primary-foreground/90 mb-4 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            An incubator designed for innovators, by innovators
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Building the Next Generation of Global Innovators
          </motion.p>

          {/* Stats Grid */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="card-glass text-center group hover-lift"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <stat.icon className="h-8 w-8 text-accent mx-auto mb-3 group-hover:animate-pulse" />
                <div className="text-3xl font-bold text-primary-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/70">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col md:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <HeroButton
              variant="primary"
              showArrow
              href="/apply"
              analyticsVariant="apply_now"
              className="text-lg px-8 py-4 animate-pulse-glow"
            >
              Apply Now
            </HeroButton>
            
            <HeroButton
              variant="ghost"
              href="/portfolio"
              analyticsVariant="explore_startups"
              className="text-lg px-8 py-4"
            >
              Explore Startups
            </HeroButton>
            
            <HeroButton
              variant="secondary"
              href="/get-involved"
              analyticsVariant="join_mentor"
              className="text-lg px-8 py-4"
            >
              Join as Mentor
            </HeroButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}