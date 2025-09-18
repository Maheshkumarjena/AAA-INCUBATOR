import { motion } from 'framer-motion';
import { ContentSection } from '@/components/layout/content-section';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GlareCard } from '@/components/ui/glare-card';
import { ChevronRight, CheckCircle } from 'lucide-react';

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

export const Programs = () => {
  return (
    <ContentSection
      title="Programs for Every Stage"
      description="Choose the acceleration program that matches your startup's current stage"
      className="max-w-full flex flex-col mx-auto mt-24"
    >
      <div className=" flex  flex-row justify-evenly items-center  items-stretch">
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
  );
};

export default Programs;
