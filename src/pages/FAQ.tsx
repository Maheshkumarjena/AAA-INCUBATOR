import { motion } from 'framer-motion';
import { MessageCircleQuestion, HelpCircle, Phone, Mail } from 'lucide-react';
import { PageHeader } from '@/components/layout/page-header';
import { ContentSection } from '@/components/layout/content-section';
import { FAQAccordion } from '@/components/ui/faq-accordion';
import { Button } from '@/components/ui/button';
import faqData from '@/data/faq.json';

const supportOptions = [
  {
    icon: MessageCircleQuestion,
    title: 'Live Chat Support',
    description: 'Get instant help from our team',
    action: 'Start Chat',
    available: 'Available 9AM-6PM PST'
  },
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Send us detailed questions',
    action: 'Send Email',
    available: 'Response within 24 hours'
  },
  {
    icon: Phone,
    title: 'Schedule a Call',
    description: 'Book a consultation call',
    action: 'Book Call',
    available: 'Available Mon-Fri'
  }
];

export default function FAQ() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <PageHeader
        title="Frequently Asked Questions"
        description="Find answers to common questions about our accelerator programs, application process, and startup support"
      />

      {/* FAQ Section */}
      <ContentSection className="py-16">
        <div className="max-w-4xl mx-auto">
          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            <div className="text-center p-6 bg-card rounded-lg border border-border">
              <div className="text-2xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Startups Helped</div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg border border-border">
              <div className="text-2xl font-bold text-primary mb-2">85%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg border border-border">
              <div className="text-2xl font-bold text-primary mb-2">24h</div>
              <div className="text-sm text-muted-foreground">Response Time</div>
            </div>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              Common Questions & Answers
            </h2>
            <FAQAccordion faqs={faqData} />
          </motion.div>

          {/* Still Need Help Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-8 border border-primary/10">
              <HelpCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Still Need Help?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Can't find what you're looking for? Our support team is here to help you 
                with any questions about our programs, application process, or startup journey.
              </p>

              {/* Support Options */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {supportOptions.map((option, index) => (
                  <motion.div
                    key={option.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-card p-6 rounded-lg border border-border hover:shadow-md transition-all duration-300"
                  >
                    <option.icon className="w-8 h-8 text-primary mb-3 mx-auto" />
                    <h4 className="font-semibold text-foreground mb-2">{option.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{option.description}</p>
                    <p className="text-xs text-primary mb-4">{option.available}</p>
                    <Button variant="outline" size="sm" className="w-full">
                      {option.action}
                    </Button>
                  </motion.div>
                ))}
              </div>

              {/* Contact CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Contact Support Team
                </Button>
                <Button variant="outline" size="lg">
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </ContentSection>
    </div>
  );
}