import { useState } from 'react';
import { ExternalLink, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './button';
import { Badge } from './badge';
import { cn } from '@/lib/utils';

interface TeamCardProps {
  member: {
    id: string;
    name: string;
    role: string;
    avatar: string;
    bio: string;
    linkedin: string;
    badge: string;
  };
  index: number;
}

export function TeamCard({ member, index }: TeamCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const truncatedBio = member.bio.length > 120 
    ? member.bio.substring(0, 120) + '...' 
    : member.bio;

  const getBadgeVariant = (badge: string) => {
    switch (badge.toLowerCase()) {
      case 'founder':
        return 'default';
      case 'advisor':
        return 'secondary';
      case 'mentor':
        return 'outline';
      default:
        return 'secondary';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.25, 0.25, 0, 1]
      }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex flex-col items-center text-center space-y-4">
        {/* Avatar */}
        <div className="relative">
          <div className="w-30 h-30 rounded-full overflow-hidden bg-muted ring-2 ring-border group-hover:ring-primary/20 transition-all duration-300">
            {!imageError ? (
              <img
                src={member.avatar}
                alt={member.name}
                width={120}
                height={120}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-2xl font-semibold text-primary">
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
            )}
          </div>
          
          {/* Badge */}
          <div className="absolute -top-2 -right-2">
            <Badge variant={getBadgeVariant(member.badge)} className="text-xs px-2 py-1">
              {member.badge}
            </Badge>
          </div>
        </div>

        {/* Info */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg text-foreground">{member.name}</h3>
          <p className="text-sm text-primary font-medium">{member.role}</p>
        </div>

        {/* Bio */}
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {isExpanded ? member.bio : truncatedBio}
          </p>
          
          {member.bio.length > 120 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-xs text-primary hover:text-primary/80 font-medium transition-colors"
            >
              {isExpanded ? 'Read Less' : 'Read More'}
            </button>
          )}
        </div>

        {/* LinkedIn Button */}
        <div className="pt-2">
          <Button
            variant="outline"
            size="sm"
            className={cn(
              "w-full transition-all duration-300",
              "hover:bg-[#0077B5] hover:text-white hover:border-[#0077B5]",
              "group-hover:shadow-md"
            )}
            onClick={() => window.open(member.linkedin, '_blank', 'noopener,noreferrer')}
          >
            <Linkedin className="w-4 h-4 mr-2" />
            Connect
            <ExternalLink className="w-3 h-3 ml-2 opacity-70" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}