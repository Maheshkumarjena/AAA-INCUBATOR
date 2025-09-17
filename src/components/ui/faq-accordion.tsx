import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
  className?: string;
}

export function FAQAccordion({ faqs, className }: FAQAccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div className={cn("space-y-4", className)}>
      {faqs.map((faq, index) => (
        <motion.div
          key={faq.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: index * 0.1,
            ease: [0.25, 0.25, 0, 1] 
          }}
          viewport={{ once: true, margin: "-50px" }}
          className="bg-card border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <button
            onClick={() => toggleItem(faq.id)}
            className="w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-primary/20 hover:bg-muted/50 transition-colors duration-200"
            aria-expanded={openItems.has(faq.id)}
            aria-controls={`faq-content-${faq.id}`}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground pr-4">
                {faq.question}
              </h3>
              <motion.div
                animate={{ rotate: openItems.has(faq.id) ? 180 : 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="flex-shrink-0"
              >
                {openItems.has(faq.id) ? (
                  <Minus className="h-5 w-5 text-primary" />
                ) : (
                  <Plus className="h-5 w-5 text-muted-foreground" />
                )}
              </motion.div>
            </div>
          </button>

          <AnimatePresence>
            {openItems.has(faq.id) && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ 
                  duration: 0.3,
                  ease: [0.25, 0.25, 0, 1]
                }}
                id={`faq-content-${faq.id}`}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4">
                  <motion.div
                    initial={{ y: -10 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                    className="text-muted-foreground leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}