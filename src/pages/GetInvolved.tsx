import { motion } from 'framer-motion';
import { Users, Heart, Handshake, Lightbulb, Calendar, MessageCircle, ArrowRight, UserCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { PageHeader } from '@/components/layout/page-header';
import { ContentSection } from '@/components/layout/content-section';
import { Badge } from '@/components/ui/badge';

const communityRoles = [
  {
    icon: Lightbulb,
    title: 'Mentor',
    description: 'Share your expertise and guide the next generation of entrepreneurs',
    commitment: '2-4 hours/month',
    benefits: ['Network expansion', 'Give back to community', 'Learn from startups'],
    color: 'from-accent to-accent-light'
  },
  {
    icon: UserCheck,
    title: 'Advisor',
    description: 'Provide strategic guidance and industry insights to our portfolio companies',
    commitment: '4-8 hours/month',
    benefits: ['Equity opportunities', 'Board positions', 'Strategic influence'],
    color: 'from-primary to-primary-light'
  },
  {
    icon: Handshake,
    title: 'Partner',
    description: 'Collaborate with us to create new opportunities and expand our reach',
    commitment: 'Flexible',
    benefits: ['Co-marketing opportunities', 'Shared resources', 'Joint initiatives'],
    color: 'from-muted-foreground to-foreground'
  }
];

const communityStats = [
  { number: '500+', label: 'Active Mentors' },
  { number: '50+', label: 'Industry Partners' },
  { number: '1000+', label: 'Community Members' },
  { number: '25', label: 'Countries Represented' }
];

const upcomingEvents = [
  {
    title: 'Startup Showcase',
    date: 'Dec 15, 2024',
    type: 'In-Person',
    location: 'San Francisco',
    description: 'Join us for our quarterly startup showcase and networking event'
  },
  {
    title: 'AI in Business Workshop',
    date: 'Dec 20, 2024',
    type: 'Virtual',
    location: 'Online',
    description: 'Learn how AI is transforming different industries'
  },
  {
    title: 'Founder Breakfast',
    date: 'Jan 10, 2025',
    type: 'In-Person',
    location: 'New York',
    description: 'Casual networking breakfast for founders and entrepreneurs'
  }
];

export default function GetInvolved() {
  return (
    <div className="space-y-12">
      <PageHeader 
        title="Get Involved" 
        description="Join our vibrant community of entrepreneurs, mentors, and partners building the future together"
      />

      {/* Community Stats */}
      <ContentSection>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {communityStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center space-y-2"
            >
              <div className="text-3xl font-bold text-primary">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </ContentSection>

      {/* Ways to Get Involved */}
      <ContentSection 
        title="Ways to Get Involved" 
        description="Choose how you'd like to contribute to our startup ecosystem"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {communityRoles.map((role, index) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`bg-gradient-to-br ${role.color} text-white p-6 hover-lift h-full`}>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <role.icon className="h-8 w-8" />
                    <div>
                      <h3 className="text-xl font-bold">{role.title}</h3>
                      <Badge variant="outline" className="border-white/30 text-white text-xs mt-1">
                        {role.commitment}
                      </Badge>
                    </div>
                  </div>
                  
                  <p className="text-white/90">{role.description}</p>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {role.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center text-white/80 text-sm">
                          <div className="w-1.5 h-1.5 bg-white/60 rounded-full mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                    Apply Now
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </ContentSection>

      {/* Upcoming Events */}
      <ContentSection 
        title="Upcoming Events" 
        description="Join us at our upcoming community events and workshops"
      >
        <div className="space-y-4">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-elevated hover-lift p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      <Badge variant={event.type === 'Virtual' ? 'secondary' : 'default'}>
                        {event.type}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{event.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    <p className="text-muted-foreground mb-2">{event.description}</p>
                    <p className="text-sm text-muted-foreground">{event.location}</p>
                  </div>
                  <Button variant="outline">
                    Register
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </ContentSection>

      {/* Community Newsletter */}
      <ContentSection>
        <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mx-auto">
              <MessageCircle className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Stay Connected</h2>
              <p className="text-muted-foreground">
                Get the latest updates on events, opportunities, and community news
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-2 rounded-lg border border-border bg-background"
              />
              <Button className="btn-accent">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </ContentSection>

      {/* Contact */}
      <ContentSection>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Have Questions?
          </h2>
          <p className="text-muted-foreground mb-6">
            Reach out to our community team to learn more about getting involved
          </p>
          <Button size="lg" className="btn-hero">
            Contact Us
            <MessageCircle className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </ContentSection>
    </div>
  );
}