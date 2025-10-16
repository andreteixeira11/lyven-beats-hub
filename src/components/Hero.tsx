import { Button } from "@/components/ui/button";
import { Smartphone } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import appMockup from "@/assets/app-mockup.jpg";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src={heroImage} 
          alt="Concert background with vibrant stage lighting"
          className="h-full w-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh] py-20">
          {/* Left Column - Text */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="hero-text gradient-hero bg-clip-text text-transparent">
                DESCOBRE
                <br />
                OS MELHORES
                <br />
                <span className="text-foreground">EVENTOS AO VIVO</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Espetáculos incríveis ao vivo. Preços transparentes. Recomendações relevantes. 
                Descarrega o Lyven e começa a descobrir eventos fantásticos perto de ti.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="gap-3 text-lg px-8 py-6 h-auto">
                <Smartphone className="h-5 w-5" />
                DESCARREGAR LYVEN
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto">
                Explorar Eventos
              </Button>
            </div>

            <div className="flex items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full gradient-primary"></div>
                Sem taxas ocultas
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full gradient-primary"></div>
                Bilhetes instantâneos
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full gradient-primary"></div>
                Melhores preços
              </div>
            </div>
          </div>

          {/* Right Column - App Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 gradient-hero opacity-20 blur-3xl rounded-full"></div>
              
              {/* App mockup */}
              <div className="relative transform rotate-6 hover:rotate-3 transition-bounce">
                <img 
                  src={appMockup} 
                  alt="Lyven mobile app interface showing events"
                  className="w-80 h-auto rounded-3xl shadow-elevated"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};