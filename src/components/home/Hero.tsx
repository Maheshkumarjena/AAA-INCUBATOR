import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';
import MagicBorderButton from '@/components/ui/magic-border-button';
import HoverBorderGradientButton from '@/components/ui/hover-border-gradient-button';
import { trackCTAClick } from '@/lib/analytics';
import { SparklesCore } from '../ui/sparkles';

export const Hero = () => {
    // Typewriter state
    const line1 = 'Fueling Bold Ideas into';
    const line2 = 'Global Impact';
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
    const [phase, setPhase] = useState<'typing1' | 'pause' | 'typing2' | 'done'>('typing1');
    const timers = useRef<number[]>([]);

    // Type first line on mount
    useEffect(() => {
        const speed = 45; // ms per character
        const addTimer = (id: number) => timers.current.push(id);

        let i = 0;
        const typeLine1 = () => {
            if (i < line1.length) {
                setText1(line1.slice(0, i + 1));
                i++;
                addTimer(window.setTimeout(typeLine1, speed));
            } else {
                setPhase('pause');
                addTimer(window.setTimeout(() => setPhase('typing2'), 300));
            }
        };
        addTimer(window.setTimeout(typeLine1, speed));

        return () => {
            timers.current.forEach((t) => window.clearTimeout(t));
            timers.current = [];
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Then type second line
    useEffect(() => {
        if (phase !== 'typing2') return;
        const speed = 55;
        let j = 0;
        const id = window.setInterval(() => {
            if (j < line2.length) {
                setText2(line2.slice(0, j + 1));
                j++;
            } else {
                window.clearInterval(id);
                setPhase('done');
            }
        }, speed);
        return () => window.clearInterval(id);
    }, [phase]);

    const showCaret1 = phase === 'typing1' || phase === 'pause';
    const showCaret2 = phase === 'typing2' || phase === 'done';
    return (
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
            {/* Office discussion background image */}
            <img 
                src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1600&q=80" 
                alt="Office Discussion Background" 
                className="absolute inset-0 w-full h-full object-cover z-0 opacity-40" 
                style={{ pointerEvents: 'none' }}
            />
            <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-primary/10 dark:via-background dark:to-accent/10 pointer-events-none z-10" />
            <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none z-10" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow delay-1000 pointer-events-none z-10" />

            <div className="container relative mt-4 sm:mt-8 md:mt-12 z-20 px-4 md:px-6">
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
                        {/* Line 1 with neon effect */}
                        <span className="block relative neon-text glass-text">
                            {text1}
                            {showCaret1 && (
                                <span aria-hidden className="inline-block align-middle ml-1 w-[2px] h-[1em] bg-current animate-pulse" />
                            )}
                        </span>
                        {/* Line 2: keep gradient fill and add neon glow layer behind */}
                        <span className="block mt-2 relative glass-text">
                            {/* Glow layer behind (colored text with neon shadow) */}
                            <span
                                aria-hidden
                                className="absolute inset-0 -z-10 select-none pointer-events-none neon-text"
                            >
                                {text2}
                            </span>
                            {/* Visible gradient text on top */}
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-primary dark:to-accent bg-clip-text text-transparent">
                                {text2}
                            </span>
                            {showCaret2 && (
                                <span aria-hidden className="inline-block align-middle ml-1 w-[2px] h-[1em] bg-white/90 animate-pulse" />
                            )}
                        </span>
                    </motion.h1>

                    {/*  */}



                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.7 }}
                        className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                    >
                        An incubator designed for innovators, by innovators. Building the Next Generation of Global Innovators.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.7 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
                    >
                        <MagicBorderButton
                            onClick={() => trackCTAClick('apply_now', 'primary', '/')}
                            className="h-12"
                            innerClassName="bg-primary text-primary-foreground px-8 py-6 text-base group"
                        >
                            Apply Now
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </MagicBorderButton>
                        <HoverBorderGradientButton
                            onClick={() => trackCTAClick('join_mentor', 'secondary', '/')}
                            className="h-12"
                            innerClassName="px-8 py-6 text-base"
                        >
                            Join as a Mentor
                        </HoverBorderGradientButton>
                        <HoverBorderGradientButton
                            onClick={() => trackCTAClick('explore_startups', 'secondary', '/')}
                            className="h-12"
                            innerClassName="px-8 py-6 text-base"
                        >
                            Explore Startups
                        </HoverBorderGradientButton>
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
    );
};

export default Hero;