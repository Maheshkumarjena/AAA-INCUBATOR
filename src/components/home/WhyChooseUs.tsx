
import { motion, AnimatePresence } from 'framer-motion';
import { ContentSection } from '@/components/layout/content-section';
import { Card } from '@/components/ui/card';
import { Globe, Zap, Users, TrendingUp, Award, ChevronLeft, ChevronRight, LucideIcon } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

// Define the type for our edge items
interface EdgeItem {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
}

const edges: EdgeItem[] = [
  {
    icon: Globe,
    title: 'Global Reach, Local Impact',
    description: 'We operate at the intersection of international finance and grassroots innovation.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'
  },
  {
    icon: Zap,
    title: 'Unique Funding Model',
    description: 'Hybrid approach combining catalytic grants, equity investments, and impact-driven capital.',
    image: 'https://images.unsplash.com/photo-1551288049-b1f3c6f3c0e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'
  },
  {
    icon: Users,
    title: 'Top-Tier Advisors',
    description: 'Mentored by global leaders, VCs, and Fortune 500 executives',
    image: 'https://images.unsplash.com/photo-1516321310762-4794377e6c9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'
  },
  {
    icon: TrendingUp,
    title: 'Investor Readiness',
    description: 'We transform good ideas into fundable, scalable enterprises',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21a74c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'
  },
  {
    icon: Award,
    title: 'Speed + Sustainability',
    description: 'Compress two-year growth into six months without sacrificing stability',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'
  }
];

// Animation variants
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.9
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.9
  })
};

export const WhyChooseUs = () => {
  const [[currentIndex, direction], setCurrentIndex] = useState([0, 0]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Handle next slide
  const nextSlide = () => {
    setCurrentIndex([currentIndex === edges.length - 1 ? 0 : currentIndex + 1, 1]);
  };

  // Handle previous slide
  const prevSlide = () => {
    setCurrentIndex([currentIndex === 0 ? edges.length - 1 : currentIndex - 1, -1]);
  };

  // Go to specific slide
  const goToSlide = (index: number) => {
    const newDirection = index > currentIndex ? 1 : -1;
    setCurrentIndex([index, newDirection]);
  };

  // Handle touch events for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // Swipe left
      nextSlide();
    } else if (touchEndX.current - touchStartX.current > 50) {
      // Swipe right
      prevSlide();
    }
  };

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, currentIndex]);

  // Get the current edge item
  const currentEdge = edges[currentIndex];
  const IconComponent = currentEdge.icon;

  return (
    <ContentSection
      title="Why Choose InnovateHub?"
      description="Our unique approach to startup acceleration"
      className="relative z-10 isolate max-w-full mx-auto mt-16 md:mt-24"
    >
      <div 
        className="relative overflow-hidden rounded-xl"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Carousel container */}
        <div className="relative h-96 md:h-[500px] w-full">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
                scale: { duration: 0.4 }
              }}
              className="absolute inset-0 w-full h-full"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = Math.abs(offset.x) * velocity.x;
                
                if (swipe < -10000) {
                  nextSlide();
                } else if (swipe > 10000) {
                  prevSlide();
                }
              }}
            >
              <Card className="relative h-full overflow-hidden border-border dark:border-foreground/10 bg-card">
                {/* Background image with overlay */}
                <motion.div 
                  className="absolute inset-0 bg-cover bg-center z-0"
                  style={{ backgroundImage: `url(${currentEdge.image})` }}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <div className="absolute inset-0 bg-black/40"></div>
                </motion.div>
                
                {/* Content */}
                <motion.div 
                  className="relative z-10 p-8 h-full flex flex-col justify-center text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <motion.div 
                    className="p-3 bg-primary/20 rounded-lg w-12 h-12 flex items-center justify-center mb-6"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <IconComponent className="h-6 w-6 text-white" />
                  </motion.div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {currentEdge.title}
                  </h3>
                  <p className="text-lg md:text-xl max-w-md">
                    {currentEdge.description}
                  </p>
                  
                  {/* Indicator for current card */}
                  <div className="mt-8 flex space-x-2">
                    {edges.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => goToSlide(i)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          i === currentIndex 
                            ? 'bg-white w-8' 
                            : 'bg-white/50 w-2 hover:bg-white/70'
                        }`}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>
                </motion.div>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Navigation buttons */}
        <motion.button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/30 hover:bg-black/50 rounded-full text-white transition-colors backdrop-blur-sm"
          aria-label="Previous slide"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft size={24} />
        </motion.button>
        <motion.button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/30 hover:bg-black/50 rounded-full text-white transition-colors backdrop-blur-sm"
          aria-label="Next slide"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight size={24} />
        </motion.button>
      </div>
    </ContentSection>
  );
};

export default WhyChooseUs;
