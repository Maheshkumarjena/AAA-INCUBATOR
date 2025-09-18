import { ContentSection } from '@/components/layout/content-section';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const mentors = [
  { name: "Dr. Sarah Johnson", title: "Former UN Advisor", expertise: "Sustainable Development", image: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Michael Chen", title: "Ex-Google Product Lead", expertise: "Tech Scaling", image: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Amina Diallo", title: "VC Partner", expertise: "Emerging Markets", image: "https://randomuser.me/api/portraits/women/68.jpg" },
  { name: "James Wilson", title: "Fortune 500 Executive", expertise: "Corporate Strategy", image: "https://randomuser.me/api/portraits/men/65.jpg" }
];

const investors = [
  { name: "VC Firm 1", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
  { name: "VC Firm 2", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "VC Firm 3", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
  { name: "Angel Network", logo: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" },
  { name: "Impact Fund", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Logo_TV_2015.png" },
  { name: "Bank Partners", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" }
];

const events = [
  { date: "Sep 15, 2024", title: "Funding Strategies Workshop", type: "Virtual" },
  { date: "Oct 5, 2024", title: "Demo Day - Fall Cohort", type: "In-Person" },
  { date: "Nov 12, 2024", title: "AI in Business Conference", type: "Hybrid" }
];

export const ResourcesNetwork = () => {
  return (
    <ContentSection
      title="Resources & Network"
      description="Access our extensive network of mentors, investors, and events"
      className="max-w-full mx-auto mt-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h3 className="text-2xl font-bold mb-6">Mentor Directory</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mentors.map((mentor, index) => (
              <Card key={index} className="p-4 flex items-center">
                <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700 mr-4 overflow-hidden flex items-center justify-center">
                  <img src={mentor.image} alt={mentor.name} className="object-cover w-16 h-16 rounded-full" />
                </div>
                <div>
                  <h4 className="font-semibold">{mentor.name}</h4>
                  <p className="text-sm text-muted-foreground">{mentor.title}</p>
                  <p className="text-xs text-primary mt-1">{mentor.expertise}</p>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-6">Investor Partners</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {investors.map((investor, index) => (
                <div key={index} className="p-4 border rounded-lg flex items-center justify-center h-20 bg-white dark:bg-gray-800">
                  <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center overflow-hidden">
                    <img src={investor.logo} alt={investor.name} className="object-contain w-12 h-12 rounded-md" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-6">Upcoming Events</h3>
          <div className="space-y-4">
            {events.map((event, index) => (
              <Card key={index} className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-primary font-medium">{event.date}</p>
                    <h4 className="font-semibold mt-1">{event.title}</h4>
                    <span className="inline-block px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-xs mt-2">
                      {event.type}
                    </span>
                  </div>
                  <Button variant="outline" size="sm">Register</Button>
                </div>
              </Card>
            ))}
          </div>
          
          <Button variant="outline" className="w-full mt-6">View Full Calendar</Button>
        </div>
      </div>
    </ContentSection>
  );
};

export default ResourcesNetwork;
