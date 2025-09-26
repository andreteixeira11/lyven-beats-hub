import { Button } from "@/components/ui/button";
import { Smartphone, Instagram, Twitter, Facebook } from "lucide-react";
import lyvenLogo from "@/assets/lyven-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src={lyvenLogo} 
                alt="LYVEN - Discover Feel Celebrate"
                className="h-8 w-auto"
              />
            </div>
            <p className="text-background/70 leading-relaxed">
              The future of event discovery. Download Lyven to find incredible live shows 
              with upfront pricing and relevant recommendations.
            </p>
            <Button variant="hero" size="sm" className="gap-2">
              <Smartphone className="h-4 w-4" />
              Download Lyven
            </Button>
          </div>

          {/* Events */}
          <div className="space-y-6">
            <h3 className="font-bold text-background">Events</h3>
            <nav className="space-y-3">
              <a href="#" className="block text-background/70 hover:text-background transition-colors">
                Browse events
              </a>
              <a href="#" className="block text-background/70 hover:text-background transition-colors">
                Venues
              </a>
              <a href="#" className="block text-background/70 hover:text-background transition-colors">
                Artists
              </a>
              <a href="#" className="block text-background/70 hover:text-background transition-colors">
                Categories
              </a>
            </nav>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h3 className="font-bold text-background">Company</h3>
            <nav className="space-y-3">
              <a href="#" className="block text-background/70 hover:text-background transition-colors">
                About us
              </a>
              <a href="#" className="block text-background/70 hover:text-background transition-colors">
                Careers
              </a>
              <a href="#" className="block text-background/70 hover:text-background transition-colors">
                Press
              </a>
              <a href="#" className="block text-background/70 hover:text-background transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h3 className="font-bold text-background">Support</h3>
            <nav className="space-y-3">
              <a href="#" className="block text-background/70 hover:text-background transition-colors">
                Get help
              </a>
              <a href="#" className="block text-background/70 hover:text-background transition-colors">
                Safety
              </a>
              <a href="#" className="block text-background/70 hover:text-background transition-colors">
                Terms of service
              </a>
              <a href="#" className="block text-background/70 hover:text-background transition-colors">
                Privacy policy
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-background/70 text-sm">
            © 2024 Lyven. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <a href="#" className="text-background/70 hover:text-background transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-background/70 hover:text-background transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-background/70 hover:text-background transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};