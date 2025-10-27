import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import emailjs from '@emailjs/browser';
import { Globe, CreditCard, Ticket, ThumbsUp } from "lucide-react";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

export default function AdvertiseEvent() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    city: "",
    currencyPrice: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Configurar EmailJS
      const serviceId = "service_foa7u6j";
      const templateId = "template_jio46ng";
      const publicKey = "AQyCUd5L3_1sL0Uzb";

      const templateParams = {
        to_email: "info@lyven.pt",
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        website: formData.website,
        city: formData.city,
        currency_price: formData.currencyPrice,
        subject: "Novo registo para aprovação - Anunciar Evento",
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      toast({
        title: t("advertise.form.success"),
        description: t("advertise.form.successDesc"),
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        website: "",
        city: "",
        currencyPrice: "",
      });

      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      console.error("Erro ao enviar:", error);
      toast({
        title: t("advertise.form.error"),
        description: t("advertise.form.errorDesc"),
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
            {t("advertise.hero.title")}
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            {t("advertise.hero.subtitle")}
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
              <h3 className="font-semibold mb-2">{t("advertise.benefit1.title")}</h3>
              <p className="text-sm text-muted-foreground">
                {t("advertise.benefit1.desc")}
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <CreditCard className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{t("advertise.benefit2.title")}</h3>
              <p className="text-sm text-muted-foreground">
                {t("advertise.benefit2.desc")}
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Ticket className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{t("advertise.benefit3.title")}</h3>
              <p className="text-sm text-muted-foreground">
                {t("advertise.benefit3.desc")}
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <ThumbsUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{t("advertise.benefit4.title")}</h3>
              <p className="text-sm text-muted-foreground">
                {t("advertise.benefit4.desc")}
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
              <div className="text-4xl font-bold text-primary mb-2">{t("advertise.stats.users")}</div>
              <p className="text-sm text-muted-foreground">{t("advertise.stats.usersDesc")}</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">{t("advertise.stats.events")}</div>
              <p className="text-sm text-muted-foreground">{t("advertise.stats.eventsDesc")}</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">{t("advertise.stats.cities")}</div>
              <p className="text-sm text-muted-foreground">{t("advertise.stats.citiesDesc")}</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">{t("advertise.stats.rating")}</div>
              <p className="text-sm text-muted-foreground">{t("advertise.stats.ratingDesc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 px-6" id="sell-faster">
        <div className="mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("advertise.form.title")}</h2>
            <p className="text-muted-foreground">
              {t("advertise.form.subtitle")}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-lg border">
            <div className="space-y-2">
              <Label htmlFor="name">{t("advertise.form.name")} *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder={t("advertise.form.name")}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">{t("advertise.form.email")} *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder={t("advertise.form.email")}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">{t("advertise.form.phone")} *</Label>
              <PhoneInput
                international
                defaultCountry="PT"
                value={formData.phone}
                onChange={(value) => setFormData({ ...formData, phone: value || "" })}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="website">{t("advertise.form.website")}</Label>
              <Input
                id="website"
                name="website"
                type="url"
                value={formData.website}
                onChange={handleChange}
                placeholder="https://www.example.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="city">{t("advertise.form.city")} *</Label>
              <Input
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                placeholder={t("advertise.form.city")}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="currencyPrice">{t("advertise.form.currency")} *</Label>
              <Input
                id="currencyPrice"
                name="currencyPrice"
                value={formData.currencyPrice}
                onChange={handleChange}
                required
                placeholder="EUR 25"
              />
            </div>

            <Button
              type="submit"
              className="w-full"
              size="lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? t("advertise.form.submitting") : t("advertise.form.submit")}
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              {t("advertise.form.terms")}
            </p>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
