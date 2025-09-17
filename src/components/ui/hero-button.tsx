import { motion } from 'framer-motion';
import { ArrowRight, LucideIcon } from 'lucide-react';
import { Button } from './button';
import { cn } from '@/lib/utils';
import { trackHeroCTA } from '@/lib/analytics';

interface HeroButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'default' | 'lg';
  icon?: LucideIcon;
  showArrow?: boolean;
  className?: string;
  onClick?: () => void;
  href?: string;
  analyticsVariant?: 'apply_now' | 'learn_more' | 'join_mentor' | 'explore_startups';
}

export function HeroButton({ 
  children, 
  variant = 'primary', 
  size = 'lg',
  icon: Icon,
  showArrow = false,
  className,
  onClick,
  href,
  analyticsVariant,
  ...props 
}: HeroButtonProps) {
  const buttonVariants = {
    primary: "btn-hero",
    secondary: "btn-accent", 
    ghost: "btn-ghost"
  };

  const handleClick = () => {
    if (analyticsVariant) {
      trackHeroCTA(analyticsVariant);
    }
    if (onClick) {
      onClick();
    }
  };

  const buttonContent = (
    <motion.div
      className="flex items-center space-x-2"
      whileHover={{ x: 2 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {Icon && <Icon className="h-5 w-5" />}
      <span>{children}</span>
      {showArrow && (
        <motion.div
          animate={{ x: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowRight className="h-5 w-5" />
        </motion.div>
      )}
    </motion.div>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={cn(buttonVariants[variant], className)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
        onClick={handleClick}
        {...props}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={cn(buttonVariants[variant], className)}
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
      {...props}
    >
      {buttonContent}
    </motion.button>
  );
}