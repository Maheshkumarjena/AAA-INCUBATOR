import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, BookOpen, Download } from 'lucide-react';
import { PageHeader } from '@/components/layout/page-header';
import { ContentSection } from '@/components/layout/content-section';
import { EventCalendar } from '@/components/ui/event-calendar';
import { RSVPModal } from '@/components/ui/rsvp-modal';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import eventsData from '@/data/events.json';

const resourceCategories = [
  {
    title: 'Startup Guides',
    description: 'Essential resources for launching and growing your startup',
    items: [
      'Business Plan Template',
      'Pitch Deck Framework',
      'Financial Modeling Guide',
      'Legal Checklist for Startups'
    ],
    icon: BookOpen
  },
  {
    title: 'Funding Resources',
    description: 'Tools and templates for raising capital',
    items: [
      'Investor Database',
      'Term Sheet Templates',
      'Due Diligence Checklist',
      'Cap Table Calculator'
    ],
    icon: Download
  },
  {
    title: 'Community Access',
    description: 'Connect with fellow entrepreneurs and mentors',
    items: [
      'Alumni Network',
      'Mentor Directory',
      'Industry Slack Groups',
      'Founder Meetups'
    ],
    icon: Users
  }
];

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

export default function Resources() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isRSVPModalOpen, setIsRSVPModalOpen] = useState(false);
  const [rsvpEvent, setRSVPEvent] = useState<Event | null>(null);

  const handleRSVP = (event: Event) => {
    setRSVPEvent(event);
    setIsRSVPModalOpen(true);
  };

  const handleRSVPSubmit = (data: any) => {
    console.log('RSVP submitted:', data);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <PageHeader
        title="Resources & Events"
        description="Access our comprehensive library of startup resources and join our exclusive events and workshops"
      />

      {/* Resource Categories */}
      <ContentSection className="py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Startup Resources
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resourceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <category.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{category.title}</CardTitle>
                    </div>
                    <p className="text-muted-foreground">{category.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.items.map((item) => (
                        <li key={item} className="flex items-center text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-6" variant="outline">
                      Access Resources
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Events Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center space-x-3 mb-8">
            <Calendar className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">
              Upcoming Events
            </h2>
          </div>
          
          <EventCalendar
            events={eventsData}
            onEventSelect={setSelectedEvent}
            onRSVP={handleRSVP}
          />
        </motion.div>
      </ContentSection>

      {/* RSVP Modal */}
      <RSVPModal
        event={rsvpEvent}
        isOpen={isRSVPModalOpen}
        onClose={() => {
          setIsRSVPModalOpen(false);
          setRSVPEvent(null);
        }}
        onSubmit={handleRSVPSubmit}
      />
    </div>
  );
}