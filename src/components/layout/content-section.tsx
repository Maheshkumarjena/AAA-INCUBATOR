import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ContentSectionProps {
  children: ReactNode;
  className?: string;
  title?: string;
  description?: string;
}

export function ContentSection({ children, className, title, description }: ContentSectionProps) {
  return (
    <section className={cn('relative z-10 space-y-6', className)}>
      {(title || description) && (
        <div className="space-y-2">
          {title && (
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-muted-foreground">
              {description}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}