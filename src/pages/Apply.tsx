import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, Users, FileText, Video, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const applicationSteps = [
  {
    icon: FileText,
    title: 'Application Form',
    description: 'Complete our comprehensive application',
    status: 'current'
  },
  {
    icon: Video,
    title: 'Video Interview',
    description: 'Virtual meeting with our team',
    status: 'upcoming'
  },
  {
    icon: Award,
    title: 'Final Selection',
    description: 'Decision and program onboarding',
    status: 'upcoming'
  }
];

const requirements = [
  'Early to growth-stage startup',
  'Solving a real-world problem',
  'Committed founding team',
  'Some form of validation or traction',
  'Open to mentorship and feedback'
];

export default function Apply() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="min-h-screen bg-gradient-surface">
      {/* Header */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-6">
              Apply to AAA INCUBATOR
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Take the first step towards accelerating your startup journey
            </p>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              Next Batch: March 2024
            </Badge>
          </motion.div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Application Form */}
          <div className="lg:col-span-2">
            {/* Progress Steps */}
            <Card className="p-6 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-foreground">Application Process</h2>
                <div className="text-sm text-muted-foreground">Step {currentStep} of 3</div>
              </div>
              
              <div className="flex items-center space-x-4">
                {applicationSteps.map((step, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className={`
                      w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors
                      ${index + 1 <= currentStep 
                        ? 'bg-primary border-primary text-primary-foreground' 
                        : 'border-border text-muted-foreground'
                      }
                    `}>
                      {index + 1 < currentStep ? (
                        <CheckCircle className="h-5 w-5" />
                      ) : (
                        <step.icon className="h-5 w-5" />
                      )}
                    </div>
                    <div className="hidden md:block">
                      <div className="font-medium text-sm">{step.title}</div>
                      <div className="text-xs text-muted-foreground">{step.description}</div>
                    </div>
                    {index < applicationSteps.length - 1 && (
                      <div className="w-8 h-0.5 bg-border" />
                    )}
                  </div>
                ))}
              </div>
            </Card>

            {/* Application Form */}
            <Card className="p-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Startup Application Form
                </h3>
                
                <div className="space-y-6">
                  {/* Basic Information */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-foreground">Basic Information</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Startup Name *
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="Enter your startup name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Website URL
                        </label>
                        <input
                          type="url"
                          className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="https://yourstartup.com"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Founder Information */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-foreground">Founder Information</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Startup Details */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-foreground">Startup Details</h4>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Describe your startup in 2-3 sentences *
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="What problem are you solving and how?"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Industry/Sector *
                        </label>
                        <select className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                          <option value="">Select industry</option>
                          <option value="fintech">FinTech</option>
                          <option value="healthtech">HealthTech</option>
                          <option value="edtech">EdTech</option>
                          <option value="cleantech">CleanTech</option>
                          <option value="agritech">AgriTech</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Current Stage *
                        </label>
                        <select className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                          <option value="">Select stage</option>
                          <option value="idea">Idea</option>
                          <option value="mvp">MVP</option>
                          <option value="revenue">Revenue</option>
                          <option value="scaling">Scaling</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Demo & Materials */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-foreground">Demo & Materials</h4>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Pitch Deck (PDF)
                      </label>
                      <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                        <FileText className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                        <p className="text-muted-foreground">
                          Drag and drop your pitch deck or <span className="text-primary cursor-pointer">browse</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between pt-6">
                    <Button variant="outline">
                      Save as Draft
                    </Button>
                    <Button className="btn-hero">
                      Submit Application
                    </Button>
                  </div>
                </div>
              </motion.div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Requirements */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Application Requirements
              </h3>
              <ul className="space-y-3">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{requirement}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Timeline */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Important Dates
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Application Deadline</span>
                  <span className="font-medium">Feb 15, 2024</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Interview Period</span>
                  <span className="font-medium">Feb 20-28</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Final Decisions</span>
                  <span className="font-medium">Mar 5, 2024</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Program Starts</span>
                  <span className="font-medium text-primary">Mar 15, 2024</span>
                </div>
              </div>
            </Card>

            {/* Support */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Need Help?
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Have questions about the application process?
              </p>
              <Button variant="outline" className="w-full">
                Schedule a Call
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}