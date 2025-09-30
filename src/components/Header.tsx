import { Search, Menu, Smartphone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import lyvenLogo from "@/assets/lyven-logo.svg";
import { SearchModal } from "./SearchModal";
import { useState } from "react";

const languages = [
  { code: "pt", name: "Português" },
  { code: "en", name: "English" },
  { code: "fr", name: "Français" },
  { code: "de", name: "Deutsch" },
  { code: "es", name: "Español" },
];

export const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("en");

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-16 items-center gap-6">
            {/* Logo */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <img 
                src={lyvenLogo} 
                alt="LYVEN - Discover Feel Celebrate"
                className="h-8 w-auto"
              />
            </div>

            {/* Search - Prominent */}
            <div className="flex-1 max-w-2xl">
              <div 
                className="relative w-full cursor-pointer"
                onClick={() => setSearchOpen(true)}
              >
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                <Input
                  placeholder="Search by event, venue or city"
                  className="pl-10 bg-muted/50 border-0 focus-visible:ring-1 cursor-pointer"
                  readOnly
                />
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">Browse events</a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">Venues</a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">Artists</a>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3 flex-shrink-0">
              {/* Language Selector */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="flex-shrink-0">
                    <Globe className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-background z-50">
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => setSelectedLang(lang.code)}
                      className={selectedLang === lang.code ? "bg-muted" : ""}
                    >
                      {lang.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Button variant="ghost" size="sm" className="hidden sm:inline-flex whitespace-nowrap">
                Log in / Sign up
              </Button>
              <Button variant="app" size="sm" className="gap-2 whitespace-nowrap">
                <Smartphone className="h-4 w-4" />
                <span className="hidden sm:inline">GET THE APP</span>
              </Button>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <SearchModal open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  );
};