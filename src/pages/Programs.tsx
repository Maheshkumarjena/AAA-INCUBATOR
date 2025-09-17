import { motion } from 'framer-motion';
import { Clock, Users, Globe, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const programs = [
  {
    track: 'Pre-seed',
    duration: '12 weeks',
    structure: 'Hybrid/Remote',
    gradient: 'from-green-500 to-green-600',
    description: 'Transform your idea into a viable business model',
    benefits: [
      'Idea validation and market research',
      'Product-market fit analysis',
      'Basic business model development',
      'Prototype development support',
      'Initial mentor matching'
    ],
    ideal: 'Early-stage founders with validated ideas',
    commitment: '10-15 hours/week',
    cohortSize: '20 startups'
  },
  {
    track: 'Seed',
    duration: '16 weeks',
    structure: 'Hybrid',
    gradient: 'from-blue-500 to-blue-600',
    description: 'Scale your validated concept into a growing business',
    benefits: [
      'Go-to-market strategy development',
      'Customer acquisition optimization',
      'Team building and hiring support',
      'Investor readiness training',
      'Advanced mentorship program'
    ],
    ideal: 'Startups with MVP and initial traction',
    commitment: '20-25 hours/week',
    cohortSize: '15 startups'
  },
  {
    track: 'Scale-Up',
    duration: '20 weeks',
    structure: 'In-person + Remote',
    gradient: 'from-orange-500 to-orange-600',
    description: 'Accelerate growth and prepare for major funding rounds',
    benefits: [
      'Series A preparation and strategy',
      'International expansion support',
      'Advanced operational optimization',
      'Strategic partnership facilitation',
      'Executive coaching and leadership'
    ],
    ideal: 'Growth-stage companies seeking Series A+',
    commitment: '25-30 hours/week',
    cohortSize: '10 startups'
  }
];

const timeline = [
  { step: 1, title: 'Application', description: 'Submit your application with pitch deck and team info' },
  { step: 2, title: 'Interview', description: 'Virtual interview with our selection committee' },
  { step: 3, title: 'Selection', description: 'Final selection and program onboarding' },
  { step: 4, title: 'Program', description: 'Intensive incubation with mentors and resources' },
  { step: 5, title: 'Demo Day', description: 'Present to investors and ecosystem partners' }
];

export default function Programs() {
  return (
    // <div className="min-h-screen bg-gradient-surface">
    //   {/* Header */}
    //   <section className="py-16 md:py-24">
    //     <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    //       <motion.div
    //         initial={{ opacity: 0, y: 30 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.8 }}
    //       >
    //         <h1 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-6">
    //           Programs Offered
    //         </h1>
    //         <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
    //           Tailored incubation tracks designed to meet startups at every stage of their journey
    //         </p>
    //       </motion.div>
    //     </div>
    //   </section>

    //   {/* Program Cards */}
    //   <section className="py-16">
    //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
    //         {programs.map((program, index) => (
    //           <motion.div
    //             key={program.track}
    //             initial={{ opacity: 0, y: 30 }}
    //             animate={{ opacity: 1, y: 0 }}
    //             transition={{ duration: 0.6, delay: index * 0.2 }}
    //             className="group"
    //           >
    //             <Card className={`relative overflow-hidden bg-gradient-to-br ${program.gradient} text-white p-8 hover-lift`}>
    //               <div className="relative z-10">
    //                 <div className="flex items-center justify-between mb-6">
    //                   <h3 className="text-2xl font-bold">{program.track}</h3>
    //                   <div className="text-right">
    //                     <div className="text-sm opacity-90">{program.duration}</div>
    //                     <div className="text-xs opacity-75">{program.structure}</div>
    //                   </div>
    //                 </div>

    //                 <p className="text-white/90 mb-6">{program.description}</p>

    //                 <div className="space-y-4 mb-6">
    //                   <h4 className="font-semibold">Program Benefits:</h4>
    //                   <ul className="space-y-2">
    //                     {program.benefits.map((benefit, idx) => (
    //                       <li key={idx} className="flex items-start space-x-2 text-sm">
    //                         <CheckCircle className="h-4 w-4 mt-0.5 text-white/80 flex-shrink-0" />
    //                         <span className="text-white/90">{benefit}</span>
    //                       </li>
    //                     ))}
    //                   </ul>
    //                 </div>

    //                 <div className="space-y-3 mb-6 text-sm">
    //                   <div className="flex items-center space-x-2">
    //                     <Users className="h-4 w-4" />
    //                     <span>Ideal for: {program.ideal}</span>
    //                   </div>
    //                   <div className="flex items-center space-x-2">
    //                     <Clock className="h-4 w-4" />
    //                     <span>Commitment: {program.commitment}</span>
    //                   </div>
    //                   <div className="flex items-center space-x-2">
    //                     <Globe className="h-4 w-4" />
    //                     <span>Cohort Size: {program.cohortSize}</span>
    //                   </div>
    //                 </div>

    //                 <Button 
    //                   className="w-full bg-white/20 hover:bg-white/30 border border-white/30 text-white"
    //                   size="lg"
    //                 >
    //                   Learn More
    //                   <ArrowRight className="ml-2 h-4 w-4" />
    //                 </Button>
    //               </div>
                  
    //               {/* Background decoration */}
    //               <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
    //               <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12" />
    //             </Card>
    //           </motion.div>
    //         ))}
    //       </div>
    //     </div>
    //   </section>

    //   {/* Application Process */}
    //   <section className="py-16 bg-background">
    //     <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    //       <motion.div
    //         initial={{ opacity: 0, y: 30 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.8 }}
    //         className="text-center mb-16"
    //       >
    //         <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
    //           Application Process
    //         </h2>
    //         <p className="text-lg text-muted-foreground">
    //           A simple, transparent process to join our next cohort
    //         </p>
    //       </motion.div>

    //       <div className="relative">
    //         {/* Timeline Line */}
    //         <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border transform -translate-y-1/2 hidden md:block" />
            
    //         <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
    //           {timeline.map((item, index) => (
    //             <motion.div
    //               key={item.step}
    //               initial={{ opacity: 0, y: 30 }}
    //               animate={{ opacity: 1, y: 0 }}
    //               transition={{ duration: 0.6, delay: index * 0.1 }}
    //               className="relative text-center"
    //             >
    //               <div className="relative z-10 bg-background">
    //                 <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mx-auto mb-4">
    //                   {item.step}
    //                 </div>
    //                 <h3 className="text-lg font-semibold text-foreground mb-2">
    //                   {item.title}
    //                 </h3>
    //                 <p className="text-sm text-muted-foreground">
    //                   {item.description}
    //                 </p>
    //               </div>
    //             </motion.div>
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   {/* CTA Section */}
    //   <section className="py-16 bg-gradient-to-br from-primary to-primary-light text-primary-foreground">
    //     <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    //       <motion.div
    //         initial={{ opacity: 0, y: 30 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.8 }}
    //       >
    //         <h2 className="text-3xl md:text-4xl font-bold mb-6">
    //           Ready to Apply?
    //         </h2>
    //         <p className="text-xl text-primary-foreground/90 mb-8">
    //           Join our next cohort and transform your startup journey
    //         </p>
    //         <div className="flex flex-col sm:flex-row gap-4 justify-center">
    //           <Button size="lg" className="btn-accent">
    //             Start Application
    //             <ArrowRight className="ml-2 h-5 w-5" />
    //           </Button>
    //           <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
    //             Schedule a Call
    //           </Button>
    //         </div>
    //       </motion.div>
    //     </div>
    //   </section>
    // </div>
        <div className='flex w-full h-full flex-row justify-center items-center'> coming soon ....</div>

  );
}