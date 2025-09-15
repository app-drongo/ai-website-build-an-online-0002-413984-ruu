'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Heart, Star, Filter, ChevronDown } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Productgrid() {
  const router = useRouter();
  const [favorites, setFavorites] = useState<number[]>([]);

  // ACTION_PLACEHOLDER_START
  const handleAddToCart = (productId: number) => {
    router.push('/contact'); // Navigate to contact for custom orders
  };
  const handleViewMore = () => {
    router.push('/about'); // View more about artisan craftsmanship
  };
  const handleToggleFavorite = (productId: number) => {
    setFavorites(prev =>
      prev.includes(productId) ? prev.filter(id => id !== productId) : [...prev, productId]
    );
  };
  // ACTION_PLACEHOLDER_END

  const products = [
    {
      id: 1,
      name: 'Sunset Citrine Drop Earrings',
      price: 189.99,
      originalPrice: 249.99,
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop',
      rating: 4.9,
      reviews: 47,
      badge: 'Limited',
      category: 'Earrings',
      material: 'Sterling Silver & Citrine',
    },
    {
      id: 2,
      name: 'Crimson Fire Opal Ring',
      price: 329.99,
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop',
      rating: 5.0,
      reviews: 23,
      badge: 'Exclusive',
      category: 'Rings',
      material: '18K Gold & Fire Opal',
    },
    {
      id: 3,
      name: 'Amber Cascade Necklace',
      price: 275.99,
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop',
      rating: 4.8,
      reviews: 62,
      category: 'Necklaces',
      material: 'Baltic Amber & Copper',
    },
    {
      id: 4,
      name: 'Ruby Bloom Bracelet',
      price: 159.99,
      originalPrice: 199.99,
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop',
      rating: 4.7,
      reviews: 38,
      badge: 'Sale',
      category: 'Bracelets',
      material: 'Rose Gold & Ruby',
    },
    {
      id: 5,
      name: 'Carnelian Sun Pendant',
      price: 129.99,
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop',
      rating: 4.6,
      reviews: 91,
      category: 'Pendants',
      material: 'Sterling Silver & Carnelian',
    },
    {
      id: 6,
      name: 'Garnet Vintage Brooch',
      price: 219.99,
      image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&h=400&fit=crop',
      rating: 4.9,
      reviews: 29,
      badge: 'Artisan Choice',
      category: 'Brooches',
      material: 'Antique Brass & Garnet',
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Handcrafted Gemstone Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Each piece is meticulously crafted by skilled artisans using ethically sourced gemstones
            and precious metals
          </p>
        </div>

        {/* Filters Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="gap-2 border-primary/20 hover:bg-primary/10"
            >
              <Filter className="size-4" />
              Filter by Stone
            </Button>
            <Button variant="ghost" size="sm" className="gap-2 hover:bg-accent/20">
              Jewelry Type
              <ChevronDown className="size-4" />
            </Button>
            <Button variant="ghost" size="sm" className="gap-2 hover:bg-accent/20">
              Price Range
              <ChevronDown className="size-4" />
            </Button>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Showing 6 of 18 unique pieces</span>
            <Button variant="ghost" size="sm" className="gap-2 hover:bg-accent/20">
              Sort by: Newest
              <ChevronDown className="size-4" />
            </Button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <Card
              key={product.id}
              className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-muted hover:border-primary/30"
            >
              <div className="relative aspect-square bg-muted/30">
                {product.badge && (
                  <Badge
                    className={`absolute top-4 left-4 z-10 ${
                      product.badge === 'Sale'
                        ? 'bg-accent text-accent-foreground'
                        : product.badge === 'Limited' || product.badge === 'Exclusive'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-secondary text-secondary-foreground'
                    }`}
                  >
                    {product.badge}
                  </Badge>
                )}
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => handleToggleFavorite(product.id)}
                  className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 hover:bg-background"
                >
                  <Heart
                    className={`size-4 ${favorites.includes(product.id) ? 'fill-primary text-primary' : ''}`}
                  />
                </Button>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground mb-1">{product.category}</p>
                <h3 className="font-semibold text-foreground mb-2 line-clamp-2">{product.name}</h3>
                <p className="text-xs text-muted-foreground mb-3 italic">{product.material}</p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`size-4 ${
                          i < Math.floor(product.rating)
                            ? 'fill-primary text-primary'
                            : 'text-muted'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">({product.reviews})</span>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-foreground">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
              </CardContent>

              <CardFooter className="p-4 pt-0">
                <Button
                  onClick={() => handleAddToCart(product.id)}
                  className="w-full group/btn bg-primary hover:bg-primary/90 text-primary-foreground"
                  size="sm"
                >
                  <ShoppingCart className="size-4 mr-2 transition-transform group-hover/btn:scale-110" />
                  Add to Collection
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-12 text-center">
          <Button
            onClick={handleViewMore}
            variant="outline"
            size="lg"
            className="border-primary/30 text-primary hover:bg-primary/10"
          >
            Discover More Artisan Pieces
          </Button>
        </div>
      </div>
    </section>
  );
}
