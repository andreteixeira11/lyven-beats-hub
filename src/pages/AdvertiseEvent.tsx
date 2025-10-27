import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import { Globe, CreditCard, Ticket, ThumbsUp } from "lucide-react";

export default function AdvertiseEvent() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    eventType: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Configurar EmailJS (IDs públicos que o utilizador precisa configurar)
      const serviceId = "service_lyven"; // O utilizador precisa criar isto no EmailJS
      const templateId = "template_advertise"; // O utilizador precisa criar isto no EmailJS
      const publicKey = "YOUR_PUBLIC_KEY"; // O utilizador precisa adicionar isto

      const templateParams = {
        to_email: "info@lyven.pt",
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company,
        event_type: formData.eventType,
        message: formData.message,
        subject: "Novo registo para aprovação - Anunciar Evento",
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      toast({
        title: "Pedido enviado com sucesso!",
        description: "Entraremos em contacto em breve para aprovar o seu registo.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        eventType: "",
        message: "",
      });

      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      console.error("Erro ao enviar:", error);
      toast({
        title: "Erro ao enviar",
        description: "Por favor, tente novamente ou contacte-nos diretamente em info@lyven.pt",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Potencialize <span className="text-primary">criadores de eventos</span>,{" "}
            <span className="text-primary">promotores</span> e{" "}
            <span className="text-primary">venues</span> através de dados e tecnologia
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Desbloqueie todo o potencial do seu evento com a Lyven
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Expanda a sua audiência</h3>
              <p className="text-sm text-muted-foreground">
                Alcance milhões de utilizadores interessados em eventos
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <CreditCard className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Maximize vendas e receita</h3>
              <p className="text-sm text-muted-foreground">
                Ferramentas inteligentes para otimizar as suas vendas
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Ticket className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Gestão de bilhetes simplificada</h3>
              <p className="text-sm text-muted-foreground">
                Sistema completo e fácil de gerir
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <ThumbsUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Aumente a satisfação do cliente</h3>
              <p className="text-sm text-muted-foreground">
                Experiência perfeita do início ao fim
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">Milhões</div>
              <p className="text-sm text-muted-foreground">de utilizadores confiam na nossa plataforma</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">150K+</div>
              <p className="text-sm text-muted-foreground">eventos à espera de serem vividos</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">200+</div>
              <p className="text-sm text-muted-foreground">cidades em mais de 30 países</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">4.8/5</div>
              <p className="text-sm text-muted-foreground">avaliação dos clientes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 px-6" id="sell-faster">
        <div className="mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comece Hoje</h2>
            <p className="text-muted-foreground">
              Preencha o formulário e entraremos em contacto para aprovar o seu registo
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-lg border">
            <div className="space-y-2">
              <Label htmlFor="name">Nome completo *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="O seu nome"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="seu@email.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Telefone *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+351 900 000 000"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Empresa / Organização</Label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Nome da empresa"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="eventType">Tipo de evento *</Label>
              <Input
                id="eventType"
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                required
                placeholder="Ex: Concertos, Festivais, Teatro..."
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Mensagem adicional</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Conte-nos mais sobre os seus eventos..."
                rows={4}
              />
            </div>

            <Button
              type="submit"
              className="w-full"
              size="lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? "A enviar..." : "Enviar Pedido"}
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              Ao submeter, concorda com os nossos termos e condições.
              Entraremos em contacto em breve para aprovar o seu registo.
            </p>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
