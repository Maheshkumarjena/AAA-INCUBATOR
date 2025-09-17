import { useState } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FilterOption {
  value: string;
  label: string;
  count?: number;
}

interface FilterDropdownProps {
  label: string;
  options: FilterOption[];
  selectedValues: string[];
  onSelectionChange: (values: string[]) => void;
  multiSelect?: boolean;
  className?: string;
}

export function FilterDropdown({ 
  label, 
  options, 
  selectedValues, 
  onSelectionChange,
  multiSelect = false,
  className 
}: FilterDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (value: string) => {
    if (multiSelect) {
      const newSelection = selectedValues.includes(value)
        ? selectedValues.filter(v => v !== value)
        : [...selectedValues, value];
      onSelectionChange(newSelection);
    } else {
      onSelectionChange(selectedValues.includes(value) ? [] : [value]);
      setIsOpen(false);
    }
  };

  const displayText = selectedValues.length > 0 
    ? multiSelect 
      ? `${selectedValues.length} selected`
      : options.find(opt => opt.value === selectedValues[0])?.label || label
    : label;

  return (
    <div className={cn("relative", className)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full px-4 py-2.5 text-left bg-background border border-border rounded-lg",
          "hover:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary",
          "flex items-center justify-between transition-colors duration-200",
          isOpen && "border-primary ring-2 ring-primary/20"
        )}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className={cn(
          "text-sm font-medium",
          selectedValues.length > 0 ? "text-foreground" : "text-muted-foreground"
        )}>
          {displayText}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 z-10" 
              onClick={() => setIsOpen(false)}
            />
            
            {/* Dropdown Menu */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-lg shadow-lg z-20 max-h-64 overflow-y-auto"
            >
              <div className="py-2">
                {options.map((option) => {
                  const isSelected = selectedValues.includes(option.value);
                  
                  return (
                    <button
                      key={option.value}
                      onClick={() => handleOptionClick(option.value)}
                      className={cn(
                        "w-full px-4 py-2.5 text-left text-sm hover:bg-muted transition-colors duration-150",
                        "flex items-center justify-between",
                        isSelected && "bg-primary/10 text-primary"
                      )}
                      role="option"
                      aria-selected={isSelected}
                    >
                      <div className="flex items-center space-x-3">
                        <span>{option.label}</span>
                        {option.count !== undefined && (
                          <span className="text-xs text-muted-foreground">
                            ({option.count})
                          </span>
                        )}
                      </div>
                      
                      {isSelected && (
                        <Check className="h-4 w-4 text-primary" />
                      )}
                    </button>
                  );
                })}
                
                {selectedValues.length > 0 && multiSelect && (
                  <div className="border-t border-border mt-2 pt-2">
                    <button
                      onClick={() => onSelectionChange([])}
                      className="w-full px-4 py-2 text-left text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Clear all filters
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}