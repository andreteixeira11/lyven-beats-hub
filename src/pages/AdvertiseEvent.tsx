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
import { Ticket, BarChart3, Smartphone, Users, Megaphone, Mail, CreditCard, Clock, CheckCircle2 } from "lucide-react";
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
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-6 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="mx-auto max-w-5xl text-center space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            {t("advertise.hero.title")}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("advertise.hero.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="text-base" asChild>
              <a href="#register-form">{t("advertise.cta.getStarted")}</a>
            </Button>
            <Button size="lg" variant="outline" className="text-base">
              {t("advertise.cta.contactSales")}
            </Button>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xl md:text-2xl font-medium">{t("advertise.intro")}</p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Ticket className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">{t("advertise.features.ticketing.title")}</h3>
            <p className="text-muted-foreground">{t("advertise.features.ticketing.desc")}</p>
          </div>
          <div className="space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
              <BarChart3 className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">{t("advertise.features.analytics.title")}</h3>
            <p className="text-muted-foreground">{t("advertise.features.analytics.desc")}</p>
          </div>
          <div className="space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Smartphone className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">{t("advertise.features.app.title")}</h3>
            <p className="text-muted-foreground">{t("advertise.features.app.desc")}</p>
          </div>
        </div>
      </section>

      {/* Marketplace */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="mx-auto max-w-7xl space-y-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center max-w-4xl mx-auto">
            {t("advertise.marketplace.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Users className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">{t("advertise.marketplace.discovery.title")}</h3>
              <p className="text-muted-foreground">{t("advertise.marketplace.discovery.desc")}</p>
            </div>
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Megaphone className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">{t("advertise.marketplace.ads.title")}</h3>
              <p className="text-muted-foreground">{t("advertise.marketplace.ads.desc")}</p>
            </div>
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Mail className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">{t("advertise.marketplace.marketing.title")}</h3>
              <p className="text-muted-foreground">{t("advertise.marketplace.marketing.desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-7xl space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center">{t("advertise.tools.title")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-2xl border bg-card space-y-3">
              <Ticket className="h-8 w-8 text-primary" />
              <h3 className="font-semibold text-lg">{t("advertise.tools.ticketing.title")}</h3>
              <p className="text-sm text-muted-foreground">{t("advertise.tools.ticketing.desc")}</p>
            </div>
            <div className="p-6 rounded-2xl border bg-card space-y-3">
              <Megaphone className="h-8 w-8 text-primary" />
              <h3 className="font-semibold text-lg">{t("advertise.tools.ads.title")}</h3>
              <p className="text-sm text-muted-foreground">{t("advertise.tools.ads.desc")}</p>
            </div>
            <div className="p-6 rounded-2xl border bg-card space-y-3">
              <Mail className="h-8 w-8 text-primary" />
              <h3 className="font-semibold text-lg">{t("advertise.tools.marketing.title")}</h3>
              <p className="text-sm text-muted-foreground">{t("advertise.tools.marketing.desc")}</p>
            </div>
            <div className="p-6 rounded-2xl border bg-card space-y-3">
              <CreditCard className="h-8 w-8 text-primary" />
              <h3 className="font-semibold text-lg">{t("advertise.tools.payments.title")}</h3>
              <p className="text-sm text-muted-foreground">{t("advertise.tools.payments.desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Benefits */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="mx-auto max-w-7xl space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center max-w-3xl mx-auto">{t("advertise.pricing.title")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-card border space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <CreditCard className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">{t("advertise.pricing.lowFees.title")}</h3>
              <p className="text-muted-foreground">{t("advertise.pricing.lowFees.desc")}</p>
            </div>
            <div className="p-8 rounded-2xl bg-card border space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <CreditCard className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">{t("advertise.pricing.processing.title")}</h3>
              <p className="text-muted-foreground">{t("advertise.pricing.processing.desc")}</p>
            </div>
            <div className="p-8 rounded-2xl bg-card border space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">{t("advertise.pricing.payouts.title")}</h3>
              <p className="text-muted-foreground">{t("advertise.pricing.payouts.desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Details */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="text-center space-y-4 mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">{t("advertise.pricingSection.subtitle")}</p>
            <h2 className="text-3xl md:text-4xl font-bold">{t("advertise.pricingSection.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t("advertise.pricingSection.description")}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <Button size="lg" className="w-full" asChild><a href="#register-form">{t("advertise.cta.getStarted")}</a></Button>
              <ul className="space-y-3">
                {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">{t(`advertise.pricingSection.features.${i}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 rounded-2xl border bg-card space-y-6">
              <h3 className="text-xl font-semibold">{t("advertise.pricingSection.attendeeFees")}</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span>{t("advertise.pricingSection.freeEvents")}</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span>{t("advertise.pricingSection.serviceFee")}</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground pt-4 border-t">{t("advertise.pricingSection.note")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 px-6 bg-muted/30" id="register-form">
        <div className="mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("advertise.form.title")}</h2>
            <p className="text-muted-foreground">{t("advertise.form.subtitle")}</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-2xl border shadow-lg">
            <div className="space-y-2">
              <Label htmlFor="name">{t("advertise.form.name")} *</Label>
              <Input id="name" name="name" value={formData.name} onChange={handleChange} required placeholder={t("advertise.form.name")} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">{t("advertise.form.email")} *</Label>
              <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder={t("advertise.form.email")} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">{t("advertise.form.phone")} *</Label>
              <PhoneInput international defaultCountry="PT" value={formData.phone} onChange={(value) => setFormData({ ...formData, phone: value || "" })} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="website">{t("advertise.form.website")}</Label>
              <Input id="website" name="website" type="url" value={formData.website} onChange={handleChange} placeholder="https://www.example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="city">{t("advertise.form.city")} *</Label>
              <Input id="city" name="city" value={formData.city} onChange={handleChange} required placeholder={t("advertise.form.city")} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="currencyPrice">{t("advertise.form.currency")} *</Label>
              <Input id="currencyPrice" name="currencyPrice" value={formData.currencyPrice} onChange={handleChange} required placeholder="EUR 25" />
            </div>
            <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
              {isSubmitting ? t("advertise.form.submitting") : t("advertise.form.submit")}
            </Button>
            <p className="text-xs text-center text-muted-foreground">{t("advertise.form.terms")}</p>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
