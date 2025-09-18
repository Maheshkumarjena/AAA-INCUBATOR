import { Link } from 'react-router-dom';
import { Rocket, Mail, Phone, MapPin, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Team', href: '/team' },
  { name: 'Programs', href: '/programs' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Apply Now', href: '/apply' },
  { name: 'Resources', href: '/resources' },
  { name: 'Blog', href: '/blog' },
  { name: 'FAQ', href: '/faq' },
];

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export function Footer() {
  return (
    <footer className="bg-primary z-[1000] text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Mission */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Rocket className="h-8 w-8 text-accent" />
              <span className="text-2xl font-bold">AAA INCUBATOR</span>
            </div>
            <p className="text-primary-foreground/80 max-w-xs">
              Empowering the next generation of global innovators through 
              comprehensive incubation programs and mentorship.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 bg-primary-foreground/10 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter & Contact */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Stay Updated</h3>
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Button size="sm" className="btn-accent">
                  Subscribe
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Contact</h3>
              <div className="space-y-2 text-sm text-primary-foreground/80">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>hello@AAA INCUBATOR.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          <p>&copy; 2024 AAA INCUBATOR. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}