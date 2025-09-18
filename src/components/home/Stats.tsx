import { motion } from 'framer-motion';
import { ContentSection } from '@/components/layout/content-section';
import { Rocket, Target, TrendingUp, Globe } from 'lucide-react';
import CountUp, { CountUpProps } from './CountUp';

const stats = [
  { number: '1458', label: 'Startups Accelerated', icon: Rocket },
  { number: '$50000', label: 'Minimum Capital', icon: Target },
  { number: '$500000', label: 'Maximum Capital', icon: TrendingUp },
  { number: '89', label: 'Countries Reached', icon: Globe },
];

export const Stats = () => {
  const parse = (CountUp as any).parseNumberParts as (value: string) => { prefix: string; end: number; suffix: string };
  return (
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
                      bg-background/40 dark:bg-neutral-900/30 backdrop-blur-[2px] 
                      border border-white/30 dark:border-white/10 
                      shadow-lg hover:shadow-xl
                      hover:bg-background/50 dark:hover:bg-neutral-900/40
                      before:content-[''] before:absolute before:inset-0 before:rounded-xl before:-z-10 
                      before:bg-[radial-gradient(closest-side,hsl(var(--primary)/.35),transparent)] 
                      before:opacity-0 group-hover:before:opacity-100 before:blur-xl before:transition-opacity"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-lg mx-auto mb-3 
                          bg-white/30 dark:bg-white/10 backdrop-blur-sm 
                          border border-white/30 dark:border-white/10 
                          group-hover:bg-white/40 dark:group-hover:bg-white/20
                          transition-all">
              <stat.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform 
                                  drop-shadow-[0_0_6px_hsl(var(--primary)/0.5)]" />
            </div>
            <CountUp {...parse(stat.number) as CountUpProps} className="text-2xl md:text-3xl font-bold text-foreground" />
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </ContentSection>
  );
};

export default Stats;