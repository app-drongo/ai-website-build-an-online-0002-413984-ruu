'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import {
  Target,
  Users,
  Award,
  Globe,
  ArrowRight,
  Quote,
  Star,
  TrendingUp,
  Heart,
  Lightbulb,
} from 'lucide-react';

export default function About() {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    router.push('/'); // Shop our collections
  };
  const handleSecondaryAction = () => {
    router.push('/contact'); // Connect with our artisans
  };
  // ACTION_PLACEHOLDER_END

  const values = [
    {
      icon: Target,
      title: 'Artisan Excellence',
      description:
        'Every piece is meticulously handcrafted by skilled artisans using traditional techniques passed down through generations.',
    },
    {
      icon: Lightbulb,
      title: 'Unique Designs',
      description:
        "We create one-of-a-kind jewelry pieces that tell a story, ensuring you'll never find the same design anywhere else.",
    },
    {
      icon: Heart,
      title: 'Ethical Sourcing',
      description:
        'All our gemstones and precious metals are ethically sourced, supporting fair trade practices and sustainable mining.',
    },
    {
      icon: Globe,
      title: 'Global Craftsmanship',
      description:
        'We collaborate with talented artisans from around the world, bringing diverse cultural influences to our collections.',
    },
  ];

  const stats = [
    { value: '2015', label: 'Founded', icon: Award },
    { value: '12K+', label: 'Happy Customers', icon: Users },
    { value: '500+', label: 'Unique Designs', icon: TrendingUp },
    { value: '15+', label: 'Countries', icon: Globe },
  ];

  const team = [
    {
      name: 'Isabella Martinez',
      role: 'Master Jeweler & Founder',
      image: 'IM',
      bio: 'Third-generation jeweler specializing in vintage-inspired designs with modern flair.',
    },
    {
      name: 'Raj Patel',
      role: 'Gemstone Curator',
      image: 'RP',
      bio: 'Expert in rare gemstones with 20+ years sourcing the finest stones globally.',
    },
    {
      name: 'Sofia Chen',
      role: 'Design Director',
      image: 'SC',
      bio: 'Award-winning designer blending Eastern and Western jewelry traditions.',
    },
    {
      name: 'Marcus Thompson',
      role: 'Master Craftsman',
      image: 'MT',
      bio: 'Specializes in intricate metalwork and custom engagement ring settings.',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary">
            Our Story
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Crafting Timeless Beauty
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              One Gem at a Time
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            For nearly a decade, Artisan Gems has been creating extraordinary handcrafted jewelry
            that celebrates individuality, craftsmanship, and the natural beauty of precious stones.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Heritage</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2015 by master jeweler Isabella Martinez, Artisan Gems began as a small
                workshop dedicated to reviving traditional jewelry-making techniques in a modern
                world.
              </p>
              <p>
                What started as a passion for creating unique engagement rings has blossomed into a
                celebrated collection of handcrafted necklaces, earrings, bracelets, and custom
                pieces that capture life's most precious moments.
              </p>
              <p>
                Today, we're proud to have created over 500 unique designs for customers who value
                authenticity, quality, and the irreplaceable touch of human craftsmanship.
              </p>
            </div>
            <Button
              onClick={handleSecondaryAction}
              className="group bg-primary hover:bg-primary/90"
            >
              Meet Our Artisans
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="relative">
            <Card className="border-primary/20 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="size-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <Quote className="size-8 text-primary" />
                    </div>
                    <blockquote className="text-lg font-medium max-w-sm">
                      "Every gemstone has a story. Our job is to honor that story through
                      exceptional craftsmanship."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">
                      - Isabella Martinez, Founder
                    </cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="text-center border-primary/20 hover:border-primary/40 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="size-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2 text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Commitment</h3>
            <p className="text-muted-foreground">
              The principles that guide our craft and ensure every piece meets our exacting
              standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="border-primary/20 hover:border-primary/40 transition-all duration-300 group"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Master Craftspeople</h3>
            <p className="text-muted-foreground">
              The talented artisans who bring passion, skill, and decades of experience to every
              creation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {team.map((member, index) => (
              <Card
                key={index}
                className="border-primary/20 hover:border-primary/40 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="size-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {member.image}
                  </div>
                  <h4 className="font-semibold mb-1">{member.name}</h4>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button
              onClick={handlePrimaryAction}
              variant="outline"
              className="group border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Explore Our Collections
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-20">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 text-primary fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 max-w-3xl mx-auto">
                "My custom engagement ring from Artisan Gems is absolutely breathtaking. The
                attention to detail and craftsmanship is unmatched. It's truly a work of art that
                I'll treasure forever."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="size-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold">
                  EM
                </div>
                <div className="text-left">
                  <div className="font-semibold">Emma Richardson</div>
                  <div className="text-sm text-muted-foreground">Bride & Jewelry Collector</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
