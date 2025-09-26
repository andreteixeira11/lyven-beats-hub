import { Search, Menu, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-primary">
                <span className="text-white font-black text-lg">L</span>
              </div>
              <span className="text-2xl font-black tracking-tight">LYVEN</span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Browse events</a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Venues</a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Artists</a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Get help</a>
            </nav>
          </div>

          {/* Search */}
          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search by event, venue or city"
                className="pl-10 bg-muted/50 border-0 focus-visible:ring-1"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
              Log in / Sign up
            </Button>
            <Button variant="app" size="sm" className="gap-2">
              <Smartphone className="h-4 w-4" />
              <span className="hidden sm:inline">GET THE APP</span>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};