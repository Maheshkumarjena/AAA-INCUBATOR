import { ExternalLink, MapPin, Clock, DollarSign, TrendingUp, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { Badge } from './badge';
import { Button } from './button';
import { cn } from '@/lib/utils';

interface JobCardProps {
  job: {
    id: string;
    startup: string;
    title: string;
    location: string;
    type: string;
    sector: string;
    description: string;
    applyLink: string;
    salary: string;
    equity: string;
    experience: string;
    remote: boolean;
    featured: boolean;
  };
  index: number;
}

export function JobCard({ job, index }: JobCardProps) {
  const handleApplyClick = () => {
    if (job.applyLink.startsWith('mailto:')) {
      window.location.href = job.applyLink;
    } else {
      window.open(job.applyLink, '_blank', 'noopener,noreferrer');
    }
  };

  const getJobTypeBadgeVariant = (type: string) => {
    switch (type.toLowerCase()) {
      case 'full-time':
        return 'default';
      case 'part-time':
        return 'secondary';
      case 'contract':
        return 'outline';
      case 'internship':
        return 'secondary';
      default:
        return 'outline';
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
      className={cn(
        "group relative bg-card rounded-xl p-6 border hover:shadow-lg transition-all duration-300",
        job.featured 
          ? "border-primary/30 ring-1 ring-primary/20 shadow-md" 
          : "border-border hover:border-primary/30"
      )}
    >
      {/* Featured Badge */}
      {job.featured && (
        <div className="absolute -top-2 -right-2">
          <Badge className="bg-accent text-accent-foreground font-semibold px-3 py-1">
            Featured
          </Badge>
        </div>
      )}

      <div className="space-y-4">
        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {job.title}
              </h3>
              <div className="flex items-center space-x-2 mt-1">
                <p className="text-primary font-medium">{job.startup}</p>
                <Badge variant="outline" className="text-xs">
                  {job.sector}
                </Badge>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4" />
              <span>{job.location}</span>
              {job.remote && (
                <Badge variant="secondary" className="text-xs ml-1">
                  Remote OK
                </Badge>
              )}
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {job.description}
        </p>

        {/* Job Details Grid */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="font-medium text-foreground">{job.type}</p>
              <p className="text-xs text-muted-foreground">{job.experience}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <DollarSign className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="font-medium text-foreground">{job.salary}</p>
              {job.equity !== "N/A" && (
                <p className="text-xs text-muted-foreground">Equity: {job.equity}</p>
              )}
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          <Badge variant={getJobTypeBadgeVariant(job.type)}>
            {job.type}
          </Badge>
          <Badge variant="outline" className="text-xs">
            {job.experience}
          </Badge>
        </div>

        {/* Apply Button */}
        <div className="pt-2">
          <Button
            onClick={handleApplyClick}
            className="w-full group-hover:shadow-md transition-all duration-300"
            size="sm"
          >
            Apply Now
            <ExternalLink className="h-4 w-4 ml-2 opacity-70" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}