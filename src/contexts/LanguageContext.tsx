import { createContext, useContext, useState, ReactNode } from "react";

type Language = "pt" | "en" | "fr" | "de" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  pt: {
    // Header
    "header.search": "Pesquisar por evento, local ou cidade",
    "header.login": "Entrar / Registar",
    "header.getApp": "OBTER A APP",
    
    // Search Modal
    "search.title": "Pesquisar Eventos",
    "search.popular": "Eventos Mais Populares",
    
    // Hero
    "hero.title1": "DESCOBRE",
    "hero.title2": "OS MELHORES",
    "hero.title3": "EVENTOS AO VIVO",
    "hero.description": "Espetáculos incríveis ao vivo. Preços transparentes. Recomendações relevantes. Descarrega o Lyven e começa a descobrir eventos fantásticos perto de ti.",
    "hero.download": "DESCARREGAR LYVEN",
    "hero.browse": "Explorar Eventos",
    "hero.noFees": "Sem taxas ocultas",
    "hero.instant": "Bilhetes instantâneos",
    "hero.bestPrices": "Melhores preços",
    
    // Events
    "events.trending": "Em Destaque em",
    "events.city": "Lisboa",
    "events.description": "Descobre alguns dos eventos mais populares que vêm aí na tua cidade, desde noites de clube e concertos a showcases de artistas e performances intimistas.",
    "events.swipe": "Desliza para mais",
    "events.browseAll": "Explorar todos os eventos",
    "events.swipeMore": "Desliza para explorar mais",
    "events.getTickets": "Obter Bilhetes",
    
    // Footer
    "footer.description": "O futuro da descoberta de eventos. Descarrega o Lyven para encontrar espetáculos incríveis ao vivo com preços transparentes e recomendações relevantes.",
    "footer.download": "Descarregar",
    "footer.events": "Eventos",
    "footer.browseEvents": "Explorar eventos",
    "footer.venues": "Locais",
    "footer.artists": "Artistas",
    "footer.categories": "Categorias",
    "footer.support": "Suporte",
    "footer.help": "Obter ajuda",
    "footer.safety": "Segurança",
    "footer.terms": "Termos de serviço",
    "footer.privacy": "Política de privacidade",
  },
  en: {
    // Header
    "header.search": "Search by event, venue or city",
    "header.login": "Log in / Sign up",
    "header.getApp": "GET THE APP",
    
    // Search Modal
    "search.title": "Search Events",
    "search.popular": "Most Popular Events",
    
    // Hero
    "hero.title1": "DISCOVER",
    "hero.title2": "THE BEST",
    "hero.title3": "LIVE EVENTS",
    "hero.description": "Incredible live shows. Upfront pricing. Relevant recommendations. Download Lyven and start discovering amazing events near you.",
    "hero.download": "DOWNLOAD LYVEN",
    "hero.browse": "Browse Events",
    "hero.noFees": "No hidden fees",
    "hero.instant": "Instant tickets",
    "hero.bestPrices": "Best prices",
    
    // Events
    "events.trending": "Trending in",
    "events.city": "New York",
    "events.description": "Check out some of the most popular events coming up in your city, from club nights and gigs to artist showcases and intimate performances.",
    "events.swipe": "Swipe left for more",
    "events.browseAll": "Browse all events",
    "events.swipeMore": "Swipe to explore more",
    "events.getTickets": "Get Tickets",
    
    // Footer
    "footer.description": "The future of event discovery. Download Lyven to find incredible live shows with upfront pricing and relevant recommendations.",
    "footer.download": "Download",
    "footer.events": "Events",
    "footer.browseEvents": "Browse events",
    "footer.venues": "Venues",
    "footer.artists": "Artists",
    "footer.categories": "Categories",
    "footer.support": "Support",
    "footer.help": "Get help",
    "footer.safety": "Safety",
    "footer.terms": "Terms of service",
    "footer.privacy": "Privacy policy",
  },
  fr: {
    // Header
    "header.search": "Rechercher par événement, lieu ou ville",
    "header.login": "Connexion / Inscription",
    "header.getApp": "OBTENIR L'APP",
    
    // Search Modal
    "search.title": "Rechercher des Événements",
    "search.popular": "Événements les Plus Populaires",
    
    // Hero
    "hero.title1": "DÉCOUVREZ",
    "hero.title2": "LES MEILLEURS",
    "hero.title3": "ÉVÉNEMENTS EN DIRECT",
    "hero.description": "Des spectacles incroyables en direct. Tarifs transparents. Recommandations pertinentes. Téléchargez Lyven et commencez à découvrir des événements extraordinaires près de chez vous.",
    "hero.download": "TÉLÉCHARGER LYVEN",
    "hero.browse": "Parcourir les Événements",
    "hero.noFees": "Pas de frais cachés",
    "hero.instant": "Billets instantanés",
    "hero.bestPrices": "Meilleurs prix",
    
    // Events
    "events.trending": "Tendances à",
    "events.city": "Paris",
    "events.description": "Découvrez certains des événements les plus populaires à venir dans votre ville, des soirées en club aux concerts en passant par les showcases d'artistes et les performances intimistes.",
    "events.swipe": "Glissez pour plus",
    "events.browseAll": "Parcourir tous les événements",
    "events.swipeMore": "Glissez pour explorer plus",
    "events.getTickets": "Obtenir des Billets",
    
    // Footer
    "footer.description": "L'avenir de la découverte d'événements. Téléchargez Lyven pour trouver des spectacles incroyables en direct avec des tarifs transparents et des recommandations pertinentes.",
    "footer.download": "Télécharger",
    "footer.events": "Événements",
    "footer.browseEvents": "Parcourir les événements",
    "footer.venues": "Lieux",
    "footer.artists": "Artistes",
    "footer.categories": "Catégories",
    "footer.support": "Support",
    "footer.help": "Obtenir de l'aide",
    "footer.safety": "Sécurité",
    "footer.terms": "Conditions d'utilisation",
    "footer.privacy": "Politique de confidentialité",
  },
  de: {
    // Header
    "header.search": "Nach Event, Veranstaltungsort oder Stadt suchen",
    "header.login": "Anmelden / Registrieren",
    "header.getApp": "APP HERUNTERLADEN",
    
    // Search Modal
    "search.title": "Events Suchen",
    "search.popular": "Beliebteste Events",
    
    // Hero
    "hero.title1": "ENTDECKE",
    "hero.title2": "DIE BESTEN",
    "hero.title3": "LIVE EVENTS",
    "hero.description": "Unglaubliche Live-Shows. Transparente Preise. Relevante Empfehlungen. Laden Sie Lyven herunter und beginnen Sie, fantastische Events in Ihrer Nähe zu entdecken.",
    "hero.download": "LYVEN HERUNTERLADEN",
    "hero.browse": "Events Durchsuchen",
    "hero.noFees": "Keine versteckten Gebühren",
    "hero.instant": "Sofortige Tickets",
    "hero.bestPrices": "Beste Preise",
    
    // Events
    "events.trending": "Trending in",
    "events.city": "Berlin",
    "events.description": "Schauen Sie sich einige der beliebtesten kommenden Events in Ihrer Stadt an, von Clubnächten und Konzerten bis hin zu Künstler-Showcases und intimen Aufführungen.",
    "events.swipe": "Wischen Sie für mehr",
    "events.browseAll": "Alle Events durchsuchen",
    "events.swipeMore": "Wischen Sie, um mehr zu erkunden",
    "events.getTickets": "Tickets Kaufen",
    
    // Footer
    "footer.description": "Die Zukunft der Event-Entdeckung. Laden Sie Lyven herunter, um unglaubliche Live-Shows mit transparenten Preisen und relevanten Empfehlungen zu finden.",
    "footer.download": "Herunterladen",
    "footer.events": "Events",
    "footer.browseEvents": "Events durchsuchen",
    "footer.venues": "Veranstaltungsorte",
    "footer.artists": "Künstler",
    "footer.categories": "Kategorien",
    "footer.support": "Support",
    "footer.help": "Hilfe erhalten",
    "footer.safety": "Sicherheit",
    "footer.terms": "Nutzungsbedingungen",
    "footer.privacy": "Datenschutzrichtlinie",
  },
  es: {
    // Header
    "header.search": "Buscar por evento, lugar o ciudad",
    "header.login": "Iniciar sesión / Registrarse",
    "header.getApp": "OBTENER LA APP",
    
    // Search Modal
    "search.title": "Buscar Eventos",
    "search.popular": "Eventos Más Populares",
    
    // Hero
    "hero.title1": "DESCUBRE",
    "hero.title2": "LOS MEJORES",
    "hero.title3": "EVENTOS EN VIVO",
    "hero.description": "Increíbles espectáculos en vivo. Precios transparentes. Recomendaciones relevantes. Descarga Lyven y comienza a descubrir eventos increíbles cerca de ti.",
    "hero.download": "DESCARGAR LYVEN",
    "hero.browse": "Explorar Eventos",
    "hero.noFees": "Sin tarifas ocultas",
    "hero.instant": "Entradas instantáneas",
    "hero.bestPrices": "Mejores precios",
    
    // Events
    "events.trending": "Tendencias en",
    "events.city": "Madrid",
    "events.description": "Descubre algunos de los eventos más populares que se avecinan en tu ciudad, desde noches de club y conciertos hasta showcases de artistas y actuaciones íntimas.",
    "events.swipe": "Desliza para más",
    "events.browseAll": "Explorar todos los eventos",
    "events.swipeMore": "Desliza para explorar más",
    "events.getTickets": "Obtener Entradas",
    
    // Footer
    "footer.description": "El futuro del descubrimiento de eventos. Descarga Lyven para encontrar increíbles espectáculos en vivo con precios transparentes y recomendaciones relevantes.",
    "footer.download": "Descargar",
    "footer.events": "Eventos",
    "footer.browseEvents": "Explorar eventos",
    "footer.venues": "Lugares",
    "footer.artists": "Artistas",
    "footer.categories": "Categorías",
    "footer.support": "Soporte",
    "footer.help": "Obtener ayuda",
    "footer.safety": "Seguridad",
    "footer.terms": "Términos de servicio",
    "footer.privacy": "Política de privacidad",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("pt");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
