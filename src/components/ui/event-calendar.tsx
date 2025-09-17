import { useState, useMemo } from 'react';
import { format, parseISO, isAfter, isBefore, startOfDay } from 'date-fns';
import { Calendar as CalendarIcon, Clock, MapPin, Users, Filter, Star, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar } from './calendar';
import { Button } from './button';
import { Badge } from './badge';
import { Input } from './input';
import { Card, CardContent, CardHeader, CardTitle } from './card';
import { Popover, PopoverContent, PopoverTrigger } from './popover';
import { cn } from '@/lib/utils';

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: string;
  isDemoDay: boolean;
  featured: boolean;
  capacity: number;
  registered: number;
  speakers: string[];
  agenda: string[];
}

interface EventCalendarProps {
  events: Event[];
  onEventSelect?: (event: Event) => void;
  onRSVP?: (event: Event) => void;
}

export function EventCalendar({ events, onEventSelect, onRSVP }: EventCalendarProps) {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [searchTerm, setSearchTerm] = useState('');
  const [showDemoDaysOnly, setShowDemoDaysOnly] = useState(false);
  const [selectedEventTypes, setSelectedEventTypes] = useState<string[]>([]);

  // Get unique event types for filtering
  const eventTypes = useMemo(() => {
    const types = Array.from(new Set(events.map(event => event.type)));
    return types.map(type => ({
      value: type,
      label: type,
      count: events.filter(event => event.type === type).length
    }));
  }, [events]);

  // Filter events based on search, date, and filters
  const filteredEvents = useMemo(() => {
    return events.filter(event => {
      const eventDate = parseISO(event.date);
      
      // Search filter
      const matchesSearch = !searchTerm || 
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.type.toLowerCase().includes(searchTerm.toLowerCase());

      // Date filter
      const matchesDate = !selectedDate || 
        format(eventDate, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd');

      // Demo Day filter
      const matchesDemoDay = !showDemoDaysOnly || event.isDemoDay;

      // Type filter
      const matchesType = selectedEventTypes.length === 0 || 
        selectedEventTypes.includes(event.type);

      return matchesSearch && matchesDate && matchesDemoDay && matchesType;
    });
  }, [events, searchTerm, selectedDate, showDemoDaysOnly, selectedEventTypes]);

  // Get dates that have events for calendar highlighting
  const eventDates = useMemo(() => {
    return events.map(event => parseISO(event.date));
  }, [events]);

  const getEventTypeColor = (type: string, isDemoDay: boolean) => {
    if (isDemoDay) return 'bg-accent text-accent-foreground';
    
    switch (type) {
      case 'Workshop': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Panel Discussion': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Summit': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      default: return 'bg-secondary text-secondary-foreground';
    }
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedDate(undefined);
    setShowDemoDaysOnly(false);
    setSelectedEventTypes([]);
  };

  const hasActiveFilters = searchTerm || selectedDate || showDemoDaysOnly || selectedEventTypes.length > 0;

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <div className="space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Input
            type="text"
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
          <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        </div>

        {/* Filter Row */}
        <div className="flex flex-wrap gap-3 items-center">
          {/* Date Picker */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "justify-start text-left font-normal",
                  !selectedDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {selectedDate ? format(selectedDate, "PPP") : "Filter by date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                initialFocus
                className="pointer-events-auto"
                modifiers={{
                  hasEvent: eventDates
                }}
                modifiersStyles={{
                  hasEvent: { fontWeight: 'bold', textDecoration: 'underline' }
                }}
              />
            </PopoverContent>
          </Popover>

          {/* Demo Days Filter */}
          <Button
            variant={showDemoDaysOnly ? "default" : "outline"}
            onClick={() => setShowDemoDaysOnly(!showDemoDaysOnly)}
            className="flex items-center gap-2"
          >
            <Star className="h-4 w-4" />
            Demo Days Only
          </Button>

          {/* Event Type Filter */}
          <div className="flex flex-wrap gap-2">
            {eventTypes.map(type => (
              <Button
                key={type.value}
                variant={selectedEventTypes.includes(type.value) ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  setSelectedEventTypes(prev => 
                    prev.includes(type.value)
                      ? prev.filter(t => t !== type.value)
                      : [...prev, type.value]
                  );
                }}
                className="text-xs"
              >
                {type.label} ({type.count})
              </Button>
            ))}
          </div>

          {/* Clear Filters */}
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="text-muted-foreground"
            >
              <Filter className="h-4 w-4 mr-1" />
              Clear Filters
            </Button>
          )}
        </div>

        {/* Results Count */}
        <div className="text-sm text-muted-foreground">
          Showing {filteredEvents.length} of {events.length} events
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence>
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className={cn(
                "hover:shadow-lg transition-all duration-300 cursor-pointer",
                event.isDemoDay && "ring-2 ring-accent/30 border-accent/50",
                event.featured && !event.isDemoDay && "border-primary/30"
              )}>
                <CardHeader className="space-y-3">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                      {event.title}
                    </CardTitle>
                    <div className="flex flex-col gap-2 items-end">
                      {event.featured && (
                        <Badge variant="secondary" className="text-xs">
                          <Star className="h-3 w-3 mr-1" />
                          Featured
                        </Badge>
                      )}
                      <Badge 
                        className={cn("text-xs", getEventTypeColor(event.type, event.isDemoDay))}
                      >
                        {event.type}
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="h-4 w-4" />
                      <span>{format(parseISO(event.date), 'EEEE, MMMM d, yyyy')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span className="line-clamp-1">{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>{event.registered}/{event.capacity} registered</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {event.description}
                  </p>

                  {event.speakers.length > 0 && (
                    <div>
                      <h4 className="text-sm font-medium mb-2">Speakers:</h4>
                      <div className="flex flex-wrap gap-1">
                        {event.speakers.map(speaker => (
                          <Badge key={speaker} variant="outline" className="text-xs">
                            {speaker}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex gap-2 pt-2">
                    <Button
                      size="sm"
                      className="flex-1"
                      onClick={() => onRSVP?.(event)}
                      disabled={event.registered >= event.capacity}
                    >
                      {event.registered >= event.capacity ? 'Full' : 'RSVP'}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onEventSelect?.(event)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredEvents.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-12"
        >
          <CalendarIcon className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">No events found</h3>
          <p className="text-muted-foreground mb-4">
            Try adjusting your search criteria or filters.
          </p>
          {hasActiveFilters && (
            <Button variant="outline" onClick={clearFilters}>
              Clear All Filters
            </Button>
          )}
        </motion.div>
      )}
    </div>
  );
}