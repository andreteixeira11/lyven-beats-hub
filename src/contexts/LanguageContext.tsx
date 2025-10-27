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
    "header.advertise": "Anunciar Evento",
    
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
    
    // Advertise Event Page
    "advertise.hero.title": "Potencialize criadores de eventos, promotores e venues através de dados e tecnologia",
    "advertise.hero.subtitle": "Desbloqueie todo o potencial do seu evento com a Lyven",
    "advertise.benefit1.title": "Expanda a sua audiência",
    "advertise.benefit1.desc": "Alcance milhões de utilizadores interessados em eventos",
    "advertise.benefit2.title": "Maximize vendas e receita",
    "advertise.benefit2.desc": "Ferramentas inteligentes para otimizar as suas vendas",
    "advertise.benefit3.title": "Gestão de bilhetes simplificada",
    "advertise.benefit3.desc": "Sistema completo e fácil de gerir",
    "advertise.benefit4.title": "Aumente a satisfação do cliente",
    "advertise.benefit4.desc": "Experiência perfeita do início ao fim",
    "advertise.stats.users": "Milhões",
    "advertise.stats.usersDesc": "de utilizadores confiam na nossa plataforma",
    "advertise.stats.events": "150K+",
    "advertise.stats.eventsDesc": "eventos à espera de serem vividos",
    "advertise.stats.cities": "200+",
    "advertise.stats.citiesDesc": "cidades em mais de 30 países",
    "advertise.stats.rating": "4.8/5",
    "advertise.stats.ratingDesc": "avaliação dos clientes",
    "advertise.form.title": "Comece Hoje",
    "advertise.form.subtitle": "Preencha o formulário e entraremos em contacto para aprovar o seu registo",
    "advertise.form.name": "Nome completo",
    "advertise.form.email": "Email",
    "advertise.form.phone": "Telefone",
    "advertise.form.website": "Website",
    "advertise.form.city": "Cidade",
    "advertise.form.currency": "Moeda e preço médio do bilhete",
    "advertise.form.submit": "Enviar Pedido",
    "advertise.form.submitting": "A enviar...",
    "advertise.form.terms": "Ao submeter, concorda com os nossos termos e condições. Entraremos em contacto em breve para aprovar o seu registo.",
    "advertise.form.success": "Pedido enviado com sucesso!",
    "advertise.form.successDesc": "Entraremos em contacto em breve para aprovar o seu registo.",
    "advertise.form.error": "Erro ao enviar",
    "advertise.form.errorDesc": "Por favor, tente novamente ou contacte-nos diretamente em info@lyven.pt",
  },
  en: {
    // Header
    "header.search": "Search by event, venue or city",
    "header.login": "Log in / Sign up",
    "header.getApp": "GET THE APP",
    "header.advertise": "Advertise Event",
    
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
    
    // Advertise Event Page
    "advertise.hero.title": "Empower event creators, promoters and venues through data and technology",
    "advertise.hero.subtitle": "Unlock your event's full potential with Lyven",
    "advertise.benefit1.title": "Expand your audience",
    "advertise.benefit1.desc": "Reach millions of users interested in events",
    "advertise.benefit2.title": "Maximize sales and revenue",
    "advertise.benefit2.desc": "Smart tools to optimize your sales",
    "advertise.benefit3.title": "Simplified ticket management",
    "advertise.benefit3.desc": "Complete and easy-to-manage system",
    "advertise.benefit4.title": "Increase customer satisfaction",
    "advertise.benefit4.desc": "Perfect experience from start to finish",
    "advertise.stats.users": "Millions",
    "advertise.stats.usersDesc": "of users trust our platform",
    "advertise.stats.events": "150K+",
    "advertise.stats.eventsDesc": "events waiting to be lived",
    "advertise.stats.cities": "200+",
    "advertise.stats.citiesDesc": "cities in over 30 countries",
    "advertise.stats.rating": "4.8/5",
    "advertise.stats.ratingDesc": "customer rating",
    "advertise.form.title": "Get Started Today",
    "advertise.form.subtitle": "Fill out the form and we'll contact you to approve your registration",
    "advertise.form.name": "Full name",
    "advertise.form.email": "Email",
    "advertise.form.phone": "Phone",
    "advertise.form.website": "Website",
    "advertise.form.city": "City",
    "advertise.form.currency": "Currency and average ticket price",
    "advertise.form.submit": "Submit Request",
    "advertise.form.submitting": "Submitting...",
    "advertise.form.terms": "By submitting, you agree to our terms and conditions. We will contact you shortly to approve your registration.",
    "advertise.form.success": "Request sent successfully!",
    "advertise.form.successDesc": "We will contact you shortly to approve your registration.",
    "advertise.form.error": "Error sending",
    "advertise.form.errorDesc": "Please try again or contact us directly at info@lyven.pt",
  },
  fr: {
    // Header
    "header.search": "Rechercher par événement, lieu ou ville",
    "header.login": "Connexion / Inscription",
    "header.getApp": "OBTENIR L'APP",
    "header.advertise": "Annoncer un Événement",
    
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
    
    // Advertise Event Page
    "advertise.hero.title": "Autonomisez les créateurs d'événements, les promoteurs et les lieux grâce aux données et à la technologie",
    "advertise.hero.subtitle": "Libérez tout le potentiel de votre événement avec Lyven",
    "advertise.benefit1.title": "Élargissez votre audience",
    "advertise.benefit1.desc": "Atteignez des millions d'utilisateurs intéressés par les événements",
    "advertise.benefit2.title": "Maximisez les ventes et les revenus",
    "advertise.benefit2.desc": "Des outils intelligents pour optimiser vos ventes",
    "advertise.benefit3.title": "Gestion de billets simplifiée",
    "advertise.benefit3.desc": "Système complet et facile à gérer",
    "advertise.benefit4.title": "Augmentez la satisfaction client",
    "advertise.benefit4.desc": "Expérience parfaite du début à la fin",
    "advertise.stats.users": "Millions",
    "advertise.stats.usersDesc": "d'utilisateurs font confiance à notre plateforme",
    "advertise.stats.events": "150K+",
    "advertise.stats.eventsDesc": "événements à vivre",
    "advertise.stats.cities": "200+",
    "advertise.stats.citiesDesc": "villes dans plus de 30 pays",
    "advertise.stats.rating": "4.8/5",
    "advertise.stats.ratingDesc": "évaluation des clients",
    "advertise.form.title": "Commencez Aujourd'hui",
    "advertise.form.subtitle": "Remplissez le formulaire et nous vous contacterons pour approuver votre inscription",
    "advertise.form.name": "Nom complet",
    "advertise.form.email": "Email",
    "advertise.form.phone": "Téléphone",
    "advertise.form.website": "Site web",
    "advertise.form.city": "Ville",
    "advertise.form.currency": "Devise et prix moyen du billet",
    "advertise.form.submit": "Envoyer la Demande",
    "advertise.form.submitting": "Envoi en cours...",
    "advertise.form.terms": "En soumettant, vous acceptez nos termes et conditions. Nous vous contacterons bientôt pour approuver votre inscription.",
    "advertise.form.success": "Demande envoyée avec succès!",
    "advertise.form.successDesc": "Nous vous contacterons bientôt pour approuver votre inscription.",
    "advertise.form.error": "Erreur lors de l'envoi",
    "advertise.form.errorDesc": "Veuillez réessayer ou nous contacter directement à info@lyven.pt",
  },
  de: {
    // Header
    "header.search": "Nach Event, Veranstaltungsort oder Stadt suchen",
    "header.login": "Anmelden / Registrieren",
    "header.getApp": "APP HERUNTERLADEN",
    "header.advertise": "Event Bewerben",
    
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
    
    // Advertise Event Page
    "advertise.hero.title": "Stärken Sie Event-Ersteller, Promoter und Veranstaltungsorte durch Daten und Technologie",
    "advertise.hero.subtitle": "Entfalten Sie das volle Potenzial Ihres Events mit Lyven",
    "advertise.benefit1.title": "Erweitern Sie Ihr Publikum",
    "advertise.benefit1.desc": "Erreichen Sie Millionen an Events interessierter Nutzer",
    "advertise.benefit2.title": "Maximieren Sie Verkäufe und Umsatz",
    "advertise.benefit2.desc": "Intelligente Tools zur Optimierung Ihrer Verkäufe",
    "advertise.benefit3.title": "Vereinfachte Ticketverwaltung",
    "advertise.benefit3.desc": "Vollständiges und einfach zu verwaltendes System",
    "advertise.benefit4.title": "Steigern Sie die Kundenzufriedenheit",
    "advertise.benefit4.desc": "Perfektes Erlebnis von Anfang bis Ende",
    "advertise.stats.users": "Millionen",
    "advertise.stats.usersDesc": "Nutzer vertrauen unserer Plattform",
    "advertise.stats.events": "150K+",
    "advertise.stats.eventsDesc": "Events warten darauf, erlebt zu werden",
    "advertise.stats.cities": "200+",
    "advertise.stats.citiesDesc": "Städte in über 30 Ländern",
    "advertise.stats.rating": "4.8/5",
    "advertise.stats.ratingDesc": "Kundenbewertung",
    "advertise.form.title": "Starten Sie Heute",
    "advertise.form.subtitle": "Füllen Sie das Formular aus und wir werden uns mit Ihnen in Verbindung setzen, um Ihre Registrierung zu genehmigen",
    "advertise.form.name": "Vollständiger Name",
    "advertise.form.email": "Email",
    "advertise.form.phone": "Telefon",
    "advertise.form.website": "Webseite",
    "advertise.form.city": "Stadt",
    "advertise.form.currency": "Währung und durchschnittlicher Ticketpreis",
    "advertise.form.submit": "Anfrage Senden",
    "advertise.form.submitting": "Wird gesendet...",
    "advertise.form.terms": "Mit dem Absenden stimmen Sie unseren Allgemeinen Geschäftsbedingungen zu. Wir werden Sie in Kürze kontaktieren, um Ihre Registrierung zu genehmigen.",
    "advertise.form.success": "Anfrage erfolgreich gesendet!",
    "advertise.form.successDesc": "Wir werden Sie in Kürze kontaktieren, um Ihre Registrierung zu genehmigen.",
    "advertise.form.error": "Fehler beim Senden",
    "advertise.form.errorDesc": "Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt unter info@lyven.pt",
  },
  es: {
    // Header
    "header.search": "Buscar por evento, lugar o ciudad",
    "header.login": "Iniciar sesión / Registrarse",
    "header.getApp": "OBTENER LA APP",
    "header.advertise": "Anunciar Evento",
    
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
    
    // Advertise Event Page
    "advertise.hero.title": "Potencie a creadores de eventos, promotores y venues a través de datos y tecnología",
    "advertise.hero.subtitle": "Desbloquea todo el potencial de tu evento con Lyven",
    "advertise.benefit1.title": "Amplía tu audiencia",
    "advertise.benefit1.desc": "Alcanza millones de usuarios interesados en eventos",
    "advertise.benefit2.title": "Maximiza ventas e ingresos",
    "advertise.benefit2.desc": "Herramientas inteligentes para optimizar tus ventas",
    "advertise.benefit3.title": "Gestión de entradas simplificada",
    "advertise.benefit3.desc": "Sistema completo y fácil de gestionar",
    "advertise.benefit4.title": "Aumenta la satisfacción del cliente",
    "advertise.benefit4.desc": "Experiencia perfecta de principio a fin",
    "advertise.stats.users": "Millones",
    "advertise.stats.usersDesc": "de usuarios confían en nuestra plataforma",
    "advertise.stats.events": "150K+",
    "advertise.stats.eventsDesc": "eventos esperando ser vividos",
    "advertise.stats.cities": "200+",
    "advertise.stats.citiesDesc": "ciudades en más de 30 países",
    "advertise.stats.rating": "4.8/5",
    "advertise.stats.ratingDesc": "calificación de clientes",
    "advertise.form.title": "Comienza Hoy",
    "advertise.form.subtitle": "Completa el formulario y nos pondremos en contacto para aprobar tu registro",
    "advertise.form.name": "Nombre completo",
    "advertise.form.email": "Email",
    "advertise.form.phone": "Teléfono",
    "advertise.form.website": "Sitio web",
    "advertise.form.city": "Ciudad",
    "advertise.form.currency": "Moneda y precio promedio de entrada",
    "advertise.form.submit": "Enviar Solicitud",
    "advertise.form.submitting": "Enviando...",
    "advertise.form.terms": "Al enviar, aceptas nuestros términos y condiciones. Nos pondremos en contacto pronto para aprobar tu registro.",
    "advertise.form.success": "¡Solicitud enviada con éxito!",
    "advertise.form.successDesc": "Nos pondremos en contacto pronto para aprobar tu registro.",
    "advertise.form.error": "Error al enviar",
    "advertise.form.errorDesc": "Por favor, inténtalo de nuevo o contáctanos directamente en info@lyven.pt",
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
