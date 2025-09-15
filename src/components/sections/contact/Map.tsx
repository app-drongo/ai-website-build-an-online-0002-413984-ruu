'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Navigation, Gem, Clock, Star, Award, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Map() {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    router.push('/'); // Navigate to shop
  };
  const handleSecondaryAction = () => {
    router.push('/about'); // Learn about artisan process
  };
  // ACTION_PLACEHOLDER_END

  const storeLocations = [
    {
      id: 1,
      name: 'Artisan Gems Flagship',
      address: 'Downtown Arts District',
      specialty: 'Custom Rings',
      rating: 4.9,
    },
    {
      id: 2,
      name: 'Artisan Gems Gallery',
      address: 'Heritage Square',
      specialty: 'Vintage Collection',
      rating: 4.8,
    },
    {
      id: 3,
      name: 'Artisan Gems Studio',
      address: 'Craftsman Quarter',
      specialty: 'Workshop Tours',
      rating: 5.0,
    },
  ];

  const nearbyFeatures = [
    { icon: Gem, name: 'Jewelry Workshops', count: 4 },
    { icon: Award, name: 'Certified Artisans', count: 12 },
    { icon: Sparkles, name: 'Custom Studios', count: 6 },
    { icon: Star, name: 'Master Jewelers', count: 8 },
    { icon: Clock, name: 'Same-Day Sizing', count: 3 },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Visit Our Artisan Studios
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience handcrafted jewelry in person at our boutique locations and working studios
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map Area */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden border-primary/20">
              <div className="relative aspect-[16/10] bg-muted">
                {/* Placeholder Map */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10">
                  <img
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=750&fit=crop"
                    alt="Artisan district map view"
                    className="w-full h-full object-cover opacity-60"
                  />
                </div>

                {/* Map Overlay Elements */}
                <div className="absolute inset-0">
                  {/* Store Markers */}
                  <div className="absolute top-1/4 left-1/3 transform -translate-x-1/2">
                    <div className="relative group">
                      <div className="absolute -inset-2 bg-primary/30 rounded-full animate-pulse" />
                      <Button
                        size="icon"
                        className="rounded-full size-10 bg-primary hover:bg-primary/90"
                      >
                        <Gem className="size-5" />
                      </Button>
                      <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Card className="p-2 whitespace-nowrap border-primary/20">
                          <p className="text-xs font-semibold">Flagship Store</p>
                          <p className="text-xs text-muted-foreground">Custom Rings</p>
                        </Card>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-1/2 right-1/3">
                    <div className="relative group">
                      <div className="absolute -inset-2 bg-primary/30 rounded-full animate-pulse" />
                      <Button
                        size="icon"
                        className="rounded-full size-10 bg-primary hover:bg-primary/90"
                      >
                        <Gem className="size-5" />
                      </Button>
                    </div>
                  </div>

                  <div className="absolute bottom-1/3 left-1/2">
                    <div className="relative group">
                      <div className="absolute -inset-2 bg-primary/30 rounded-full animate-pulse" />
                      <Button
                        size="icon"
                        className="rounded-full size-10 bg-primary hover:bg-primary/90"
                      >
                        <Gem className="size-5" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Map Controls */}
                <div className="absolute top-4 right-4 space-y-2">
                  <Button size="icon" variant="secondary" className="shadow-lg border-primary/20">
                    <Navigation className="size-4" />
                  </Button>
                </div>

                {/* Legend */}
                <div className="absolute bottom-4 left-4 bg-background/95 backdrop-blur-sm rounded-lg p-3 border border-primary/20">
                  <div className="flex items-center gap-4 text-xs">
                    <div className="flex items-center gap-1">
                      <div className="size-3 bg-primary rounded-full" />
                      <span>Artisan Studios</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="size-3 bg-accent rounded-full" />
                      <span>Gallery Locations</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Store List */}
            <Card className="border-primary/20">
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <MapPin className="size-5 text-primary" />
                  Studio Locations
                </h3>
                <div className="space-y-3">
                  {storeLocations.map(store => (
                    <div
                      key={store.id}
                      className="flex items-center justify-between p-3 rounded-lg border border-primary/10 hover:bg-primary/5 cursor-pointer transition-colors"
                    >
                      <div>
                        <p className="font-medium text-sm">{store.name}</p>
                        <p className="text-xs text-muted-foreground">{store.address}</p>
                        <p className="text-xs text-primary font-medium">{store.specialty}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 mb-1">
                          <Star className="size-3 fill-primary text-primary" />
                          <span className="text-xs font-semibold">{store.rating}</span>
                        </div>
                        <Badge variant="secondary" className="text-xs bg-primary/10 text-primary">
                          Open Now
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Nearby Features */}
            <Card className="border-primary/20">
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-4">Artisan Services</h3>
                <div className="space-y-3">
                  {nearbyFeatures.map((feature, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <feature.icon className="size-5 text-primary" />
                        </div>
                        <span className="text-sm font-medium">{feature.name}</span>
                      </div>
                      <Badge variant="outline" className="border-primary/30 text-primary">
                        {feature.count}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="space-y-3">
              <Button
                onClick={handlePrimaryAction}
                className="w-full bg-primary hover:bg-primary/90"
                size="lg"
              >
                Shop Now
              </Button>
              <Button
                onClick={handleSecondaryAction}
                variant="outline"
                className="w-full border-primary/30 text-primary hover:bg-primary/5"
                size="lg"
              >
                New Arrivals
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
