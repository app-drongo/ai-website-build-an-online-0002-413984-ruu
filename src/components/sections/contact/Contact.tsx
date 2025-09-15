'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Gem, Award } from 'lucide-react';

export default function Contact() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiry: '',
    message: '',
  });

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    router.push('/');
  };
  const handleSecondaryAction = () => {
    router.push('/about');
  };
  // ACTION_PLACEHOLDER_END

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Custom jewelry inquiry submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Our Artisans',
      description: 'Custom jewelry consultations',
      contact: 'creations@artisangems.com',
      action: 'Send Email',
    },
    {
      icon: Phone,
      title: 'Jewelry Hotline',
      description: 'Speak with our craftspeople',
      contact: '+1 (555) GEM-CRAFT',
      action: 'Call Now',
    },
    {
      icon: MessageSquare,
      title: 'Design Chat',
      description: 'Live jewelry design help',
      contact: 'Available during studio hours',
      action: 'Start Chat',
    },
  ];

  const studios = [
    {
      city: 'Santa Fe Workshop',
      address: '127 Canyon Road, Historic Arts District',
      timezone: 'MST (UTC-7)',
    },
    {
      city: 'Portland Atelier',
      address: '892 Pearl District, Artisan Quarter',
      timezone: 'PST (UTC-8)',
    },
    {
      city: 'Asheville Studio',
      address: '456 River Arts District, Craft Village',
      timezone: 'EST (UTC-5)',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-accent/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary text-primary">
            <Gem className="size-3 mr-2" />
            Custom Jewelry Consultation
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Let's Create Your
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Dream Piece
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ready to commission a one-of-a-kind jewelry piece? Our master artisans are here to bring
            your vision to life with ethically sourced gems and precious metals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Send className="size-6 text-primary" />
                Commission Request Form
              </CardTitle>
              <CardDescription>
                Tell us about your dream piece and we'll create a custom design proposal within 48
                hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="Sarah Martinez"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="sarah@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="inquiry" className="block text-sm font-medium mb-2">
                    Jewelry Type *
                  </label>
                  <select
                    id="inquiry"
                    name="inquiry"
                    value={formData.inquiry}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  >
                    <option value="">Select jewelry type...</option>
                    <option value="engagement-ring">Engagement Ring</option>
                    <option value="wedding-bands">Wedding Bands</option>
                    <option value="necklace">Custom Necklace</option>
                    <option value="earrings">Artisan Earrings</option>
                    <option value="bracelet">Handcrafted Bracelet</option>
                    <option value="pendant">Gemstone Pendant</option>
                    <option value="other">Other Custom Piece</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Design Vision *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    placeholder="Describe your dream piece... preferred gemstones, metal type, style inspiration, budget range, and any special meaning behind the piece..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full text-base py-6 group bg-primary hover:bg-primary/90"
                >
                  Request Custom Design
                  <Gem className="ml-2 size-4 transition-transform group-hover:rotate-12" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <MessageSquare className="size-5 text-primary" />
                Connect With Our Artisans
              </h3>
              <div className="grid gap-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <Card
                      key={index}
                      className="border-border/50 hover:border-primary/20 transition-colors cursor-pointer group"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Icon className="size-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1">{method.title}</h4>
                            <p className="text-sm text-muted-foreground mb-2">
                              {method.description}
                            </p>
                            <p className="font-medium text-primary">{method.contact}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Studio Locations */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <MapPin className="size-5 text-primary" />
                Visit Our Studios
              </h3>
              <div className="space-y-3">
                {studios.map((studio, index) => (
                  <div
                    key={index}
                    className="p-4 border border-border/50 rounded-lg hover:border-primary/20 transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold">{studio.city}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{studio.address}</p>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {studio.timezone}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Studio Hours */}
            <Card className="border-border/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                  <Clock className="size-5 text-primary" />
                  Studio Hours
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tuesday - Friday</span>
                    <span>10:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday - Monday</span>
                    <span className="text-muted-foreground">By Appointment</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                  <p className="text-sm text-primary font-medium flex items-center gap-2">
                    <Award className="size-4" />
                    Private consultations available for high-value commissions
                  </p>
                </div>
                <div className="mt-4 flex gap-3">
                  <Button onClick={handlePrimaryAction} size="sm" className="flex-1">
                    Shop Now
                  </Button>
                  <Button
                    onClick={handleSecondaryAction}
                    variant="outline"
                    size="sm"
                    className="flex-1"
                  >
                    New Arrivals
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
