import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { EventsGrid } from "@/components/EventsGrid";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <EventsGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Index;