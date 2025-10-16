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
              O futuro da descoberta de eventos. Descarrega o Lyven para encontrar espetáculos incríveis ao vivo 
              com preços transparentes e recomendações relevantes.
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
            <h3 className="font-bold text-white">Eventos</h3>
            <nav className="space-y-3">
              <a href="#" className="block text-white/80 hover:text-white transition-colors">
                Explorar eventos
              </a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">
                Locais
              </a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">
                Artistas
              </a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">
                Categorias
              </a>
            </nav>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h3 className="font-bold text-white">Empresa</h3>
            <nav className="space-y-3">
              <a href="#" className="block text-white/80 hover:text-white transition-colors">
                Sobre nós
              </a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">
                Carreiras
              </a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">
                Imprensa
              </a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">
                Contacto
              </a>
            </nav>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h3 className="font-bold text-white">Suporte</h3>
            <nav className="space-y-3">
              <a href="#" className="block text-white/80 hover:text-white transition-colors">
                Obter ajuda
              </a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">
                Segurança
              </a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">
                Termos de serviço
              </a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">
                Política de privacidade
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