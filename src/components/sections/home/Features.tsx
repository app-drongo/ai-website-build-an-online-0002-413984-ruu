'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useRouter } from 'next/navigation';
import { Gem, Sparkles, Heart, Crown, Star, Award, Palette, Shield, Gift } from 'lucide-react';

export default function Features() {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    router.push('/'); // Shop Now - main collection
  };
  const handleSecondaryAction = () => {
    router.push('/about'); // Learn about craftsmanship
  };
  // ACTION_PLACEHOLDER_END

  const features = [
    {
      icon: Gem,
      title: 'Ethically Sourced Gemstones',
      description:
        'Every precious stone is carefully selected from certified ethical suppliers, ensuring beauty with conscience.',
      badge: 'Ethical',
    },
    {
      icon: Sparkles,
      title: 'Hand-Forged Excellence',
      description:
        'Master artisans craft each piece using traditional techniques passed down through generations.',
      badge: 'Craftsmanship',
    },
    {
      icon: Heart,
      title: 'Personalized Engravings',
      description:
        'Add your personal touch with custom engravings, birthstones, and bespoke design modifications.',
      badge: 'Custom',
    },
    {
      icon: Crown,
      title: 'Heirloom Quality',
      description:
        'Built to last generations with premium metals and reinforced settings that maintain their beauty.',
      badge: 'Quality',
    },
    {
      icon: Star,
      title: 'Limited Edition Collections',
      description:
        'Exclusive designs with only 50 pieces per collection, ensuring your jewelry remains truly unique.',
      badge: 'Exclusive',
    },
    {
      icon: Award,
      title: 'Artisan Certified',
      description:
        'Each piece comes with authenticity certification from our guild-certified master jewelers.',
      badge: 'Certified',
    },
    {
      icon: Palette,
      title: 'Custom Color Matching',
      description:
        'Perfect gemstone color coordination to complement your style and existing jewelry collection.',
      badge: 'Design',
    },
    {
      icon: Shield,
      title: 'Lifetime Warranty',
      description:
        'Comprehensive protection covering craftsmanship defects and free annual maintenance services.',
      badge: 'Warranty',
    },
    {
      icon: Gift,
      title: 'Luxury Gift Packaging',
      description:
        'Elegant presentation boxes with silk lining and personalized cards for special occasions.',
      badge: 'Presentation',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/30">
            Artisan Excellence
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Why Choose Artisan Gems for Your
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Precious Moments
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Discover the difference that authentic craftsmanship, ethical sourcing, and personalized
            attention make in creating jewelry that tells your unique story.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge
                      variant="secondary"
                      className="text-xs bg-accent/20 text-accent-foreground"
                    >
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to discover your perfect handcrafted piece?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handlePrimaryAction}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-lg hover:shadow-primary/20"
            >
              Shop Now
            </button>
            <button
              onClick={handleSecondaryAction}
              className="px-8 py-3 border border-primary/30 rounded-lg font-medium hover:bg-primary/5 transition-colors text-primary"
            >
              Meet Our Artisans
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
