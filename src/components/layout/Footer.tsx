'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
  Gem,
  Award,
  Shield,
} from 'lucide-react';

export default function Footer() {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    router.push('/');
  };
  const handleSecondaryAction = () => {
    router.push('/about');
  };
  // ACTION_PLACEHOLDER_END

  const footerSections = [
    {
      title: 'Collections',
      links: [
        { name: 'Handcrafted Rings', href: '#rings' },
        { name: 'Artisan Necklaces', href: '#necklaces' },
        { name: 'Custom Earrings', href: '#earrings' },
        { name: 'Gemstone Bracelets', href: '#bracelets' },
        { name: 'Wedding Sets', href: '#wedding' },
        { name: 'Limited Editions', href: '#limited' },
      ],
    },
    {
      title: 'Artisan Story',
      links: [
        { name: 'Our Craftspeople', href: '#artisans' },
        { name: 'Design Process', href: '#process' },
        { name: 'Sustainability', href: '#sustainability' },
        { name: 'Quality Promise', href: '#quality' },
        { name: 'Gemstone Sources', href: '#sources' },
        { name: 'Workshop Tours', href: '#tours' },
      ],
    },
    {
      title: 'Customer Care',
      links: [
        { name: 'Sizing Guide', href: '#sizing' },
        { name: 'Care Instructions', href: '#care' },
        { name: 'Custom Orders', href: '#custom' },
        { name: 'Repair Services', href: '#repairs' },
        { name: 'Gift Wrapping', href: '#gifts' },
        { name: 'Returns & Exchanges', href: '#returns' },
      ],
    },
    {
      title: 'Policies',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Shipping Policy', href: '/shipping' },
        { name: 'Authenticity Guarantee', href: '#authenticity' },
        { name: 'Lifetime Warranty', href: '#warranty' },
        { name: 'Ethical Sourcing', href: '#ethics' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/artisangems' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/artisangems' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/artisangems' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/artisangems' },
  ];

  return (
    <footer className="bg-background border-t border-primary/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Gem className="size-6 text-primary-foreground" />
                </div>
                <span className="font-bold text-xl text-primary">Artisan Gems</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Crafting extraordinary jewelry pieces since 1987. Each gem is hand-selected and
                every piece is meticulously crafted by master artisans who pour their passion into
                creating timeless treasures.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">orders@artisangems.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+1 (555) 847-3267</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">789 Artisan Quarter, Jewelry District</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Exclusive Collection Updates</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email for new arrivals"
                  className="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <Button size="sm" className="px-3" onClick={handlePrimaryAction}>
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Be first to discover new collections and exclusive artisan pieces. Unsubscribe
                anytime.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex items-center gap-2">
                <Award className="size-4 text-accent" />
                <span className="text-xs text-muted-foreground">Certified Artisan</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="size-4 text-accent" />
                <span className="text-xs text-muted-foreground">Lifetime Warranty</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm text-primary">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary/20 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 Artisan Gems. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Handcrafted with <Heart className="size-3 text-primary fill-current" /> since 1987
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2">Follow our journey:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-border/30">
            <Link
              href="#certifications"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Gemstone Certifications
            </Link>
            <Link
              href="#accessibility"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Accessibility
            </Link>
            <Link
              href="#security"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Secure Shopping
            </Link>
            <Link
              href="#international"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              International Shipping
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
