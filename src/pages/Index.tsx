import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { EventsCarousel } from "@/components/EventsGrid";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <EventsCarousel />
      </main>
      <Footer />
    </div>
  );
};

export default Index;