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
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";

const languages = [
  { code: "pt", name: "🇵🇹 Português" },
  { code: "en", name: "🇬🇧 English" },
  { code: "fr", name: "🇫🇷 Français" },
  { code: "de", name: "🇩🇪 Deutsch" },
  { code: "es", name: "🇪🇸 Español" },
];

export const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const navigate = useNavigate();

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
                  placeholder={t("header.search")}
                  className="pl-10 bg-muted/50 border-0 focus-visible:ring-1 cursor-pointer"
                  readOnly
                />
              </div>
            </div>


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
                      onClick={() => setLanguage(lang.code as any)}
                      className={language === lang.code ? "bg-muted" : ""}
                    >
                      {lang.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Button 
                variant="ghost" 
                size="sm" 
                className="hidden md:inline-flex whitespace-nowrap"
                onClick={() => navigate('/advertise')}
              >
                {t("header.advertise")}
              </Button>
              <Button variant="ghost" size="sm" className="hidden sm:inline-flex whitespace-nowrap">
                {t("header.login")}
              </Button>
              <Button variant="app" size="sm" className="gap-2 whitespace-nowrap">
                <Smartphone className="h-4 w-4" />
                <span className="hidden sm:inline">{t("header.getApp")}</span>
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