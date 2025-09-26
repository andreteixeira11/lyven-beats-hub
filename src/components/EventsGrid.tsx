import { EventCard } from "./EventCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";
import event3 from "@/assets/event-3.jpg";

const mockEvents = [
  {
    id: "1",
    title: "Electronic Vibes Festival 2024",
    date: "Dec 15",
    time: "8:00 PM",
    venue: "The Electric Warehouse",
    location: "Brooklyn, NY",
    price: "From $45.00",
    image: event1,
    liked: true,
  },
  {
    id: "2",
    title: "Indie Rock Night: Local Legends",
    date: "Dec 18",
    time: "9:30 PM",
    venue: "The Underground",
    location: "Manhattan, NY",
    price: "From $28.50",
    image: event2,
  },
  {
    id: "3",
    title: "Jazz & Wine Evening",
    date: "Dec 20",
    time: "7:00 PM",
    venue: "Blue Note Club",
    location: "Greenwich Village, NY",
    price: "From $65.00",
    image: event3,
    liked: true,
  },
  {
    id: "4",
    title: "Hip-Hop Showcase",
    date: "Dec 22",
    time: "10:00 PM",
    venue: "The Spot",
    location: "Queens, NY",
    price: "From $35.00",
    image: event1,
  },
  {
    id: "5",
    title: "Alternative Rock Experience",
    date: "Dec 25",
    time: "8:30 PM",
    venue: "Revolution Hall",
    location: "Brooklyn, NY",
    price: "From $42.00",
    image: event2,
  },
  {
    id: "6",
    title: "Classical Crossover Concert",
    date: "Dec 28",
    time: "7:30 PM",
    venue: "Symphony Center",
    location: "Manhattan, NY",
    price: "From $78.00",
    image: event3,
  },
];

export const EventsCarousel = () => {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              Trending in <span className="gradient-primary bg-clip-text text-transparent">New York</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Check out some of the most popular events coming up in your city, 
              from club nights and gigs to artist showcases and intimate performances.
            </p>
          </div>

          {/* Events Carousel */}
          <div className="relative px-4 -mx-4">
            <Carousel
              opts={{
                align: "start",
                loop: false,
                dragFree: true,
                containScroll: "trimSnaps",
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4 touch-pan-x">
                {mockEvents.map((event) => (
                  <CarouselItem key={event.id} className="pl-2 md:pl-4 basis-72 md:basis-80 lg:basis-96">
                    <EventCard event={event} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden md:block">
                <CarouselPrevious className="absolute -left-6 top-1/2 -translate-y-1/2" />
                <CarouselNext className="absolute -right-6 top-1/2 -translate-y-1/2" />
              </div>
            </Carousel>
            
            {/* Mobile swipe indicator */}
            <div className="md:hidden flex items-center justify-center gap-2 mt-6 text-sm text-muted-foreground">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <div className="w-2 h-2 rounded-full bg-muted"></div>
                <div className="w-2 h-2 rounded-full bg-muted"></div>
              </div>
              <span>Swipe left for more</span>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <button className="text-primary font-semibold hover:underline text-lg transition-colors">
              <span className="hidden md:inline">Browse all events</span>
              <span className="md:hidden">Swipe to explore more</span> →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};