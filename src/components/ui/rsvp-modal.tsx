import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { format, parseISO } from 'date-fns';
import { CalendarIcon, Clock, MapPin, Users, X, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './dialog';
import { Button } from './button';
import { Input } from './input';
import { Label } from './label';
import { RadioGroup, RadioGroupItem } from './radio-group';
import { Textarea } from './textarea';
import { Badge } from './badge';
import { Separator } from './separator';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './form';
import { useToast } from '@/hooks/use-toast';

const rsvpSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  role: z.string().optional(),
  isInvestor: z.enum(['yes', 'no']),
  fundName: z.string().optional(),
  dietaryRestrictions: z.string().optional(),
  questions: z.string().optional()
}).refine((data) => {
  if (data.isInvestor === 'yes' && !data.fundName) {
    return false;
  }
  return true;
}, {
  message: 'Fund name is required for investors',
  path: ['fundName']
});

type RSVPFormData = z.infer<typeof rsvpSchema>;

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

interface RSVPModalProps {
  event: Event | null;
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (data: RSVPFormData & { eventId: string }) => void;
}

export function RSVPModal({ event, isOpen, onClose, onSubmit }: RSVPModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<RSVPFormData>({
    resolver: zodResolver(rsvpSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      role: '',
      isInvestor: 'no',
      fundName: '',
      dietaryRestrictions: '',
      questions: ''
    }
  });

  const isInvestor = form.watch('isInvestor');

  const handleSubmit = (data: RSVPFormData) => {
    if (!event) return;

    // Simulate submission
    setTimeout(() => {
      setIsSubmitted(true);
      onSubmit?.({ ...data, eventId: event.id });
      
      toast({
        title: "RSVP Confirmed!",
        description: `You're registered for ${event.title}. Check your email for details.`,
      });

      // Reset after showing success
      setTimeout(() => {
        handleClose();
      }, 2000);
    }, 1000);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    form.reset();
    onClose();
  };

  if (!event) return null;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            RSVP for {event.title}
          </DialogTitle>
        </DialogHeader>

        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              {/* Event Details Summary */}
              <div className="bg-muted/30 rounded-lg p-4 space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <CalendarIcon className="h-4 w-4 text-primary" />
                  <span>{format(parseISO(event.date), 'EEEE, MMMM d, yyyy')}</span>
                  <Badge className={event.isDemoDay ? 'bg-accent' : 'bg-secondary'}>
                    {event.type}
                  </Badge>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>{event.registered}/{event.capacity} registered</span>
                </div>
              </div>

              {/* RSVP Form */}
              <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
                  {/* Personal Information */}
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="John" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Professional Information */}
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Company" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="role"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Role/Title</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Role" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <Separator />

                  {/* Investor Status */}
                  <FormField
                    control={form.control}
                    name="isInvestor"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>Are you an investor?</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex gap-6"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="yes" id="investor-yes" />
                              <Label htmlFor="investor-yes">Yes</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="no" id="investor-no" />
                              <Label htmlFor="investor-no">No</Label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {isInvestor === 'yes' && (
                    <FormField
                      control={form.control}
                      name="fundName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Fund Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Name of your fund or investment firm" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}

                  <Separator />

                  {/* Additional Information */}
                  <FormField
                    control={form.control}
                    name="dietaryRestrictions"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Dietary Restrictions</FormLabel>
                        <FormControl>
                          <Input placeholder="Any dietary restrictions or allergies?" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="questions"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Questions or Comments</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Any questions about the event or topics you'd like to discuss?"
                            className="min-h-[80px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Submit Button */}
                  <div className="flex gap-3 pt-4">
                    <Button
                      type="submit"
                      className="flex-1"
                      disabled={form.formState.isSubmitting}
                    >
                      {form.formState.isSubmitting ? 'Submitting...' : 'Confirm RSVP'}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleClose}
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </Form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                RSVP Confirmed!
              </h3>
              <p className="text-muted-foreground mb-4">
                Thank you for registering for {event.title}. 
                You'll receive a confirmation email shortly with event details.
              </p>
              <Badge variant="outline" className="text-sm">
                Confirmation sent to {form.getValues('email')}
              </Badge>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}