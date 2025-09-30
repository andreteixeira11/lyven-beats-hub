import { Instagram, Twitter, Facebook } from "lucide-react";
import lyvenLogo from "@/assets/lyven-logo.svg";

export const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#0099a8' }} className="text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src={lyvenLogo} 
                alt="LYVEN - Discover Feel Celebrate"
                className="h-8 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-white/80 leading-relaxed">
              The future of event discovery. Download Lyven to find incredible live shows 
              with upfront pricing and relevant recommendations.
            </p>
            <div className="flex flex-col gap-3">
              <a 
                href="#" 
                className="inline-block"
                aria-label="Download on the App Store"
              >
                <img 
                  src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83" 
                  alt="Download on the App Store" 
                  className="h-12 w-auto"
                />
              </a>
              <a 
                href="#" 
                className="inline-block"
                aria-label="Get it on Google Play"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                  alt="Get it on Google Play" 
                  className="h-12 w-auto"
                />
              </a>
            </div>
          </div>

          {/* Events */}
          <div className="space-y-6">
            <h3 className="font-bold text-white">Events</h3>
            <nav className="space-y-3">
              <a href="#" className="block text-white/80 hover:text-white transition-colors">
                Browse events
              </a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">
                Venues
              </a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">
                Artists
              </a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">
                Categories
              </a>
            </nav>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h3 className="font-bold text-white">Company</h3>
            <nav className="space-y-3">
              <a href="#" className="block text-white/80 hover:text-white transition-colors">
                About us
              </a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">
                Careers
              </a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">
                Press
              </a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h3 className="font-bold text-white">Support</h3>
            <nav className="space-y-3">
              <a href="#" className="block text-white/80 hover:text-white transition-colors">
                Get help
              </a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">
                Safety
              </a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">
                Terms of service
              </a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">
                Privacy policy
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/80 text-sm">
            © 2024 Lyven. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};