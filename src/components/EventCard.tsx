import { Calendar, MapPin, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  location: string;
  price: string;
  image: string;
  liked?: boolean;
}

interface EventCardProps {
  event: Event;
}

export const EventCard = ({ event }: EventCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:shadow-elevated transition-smooth">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={event.image} 
          alt={`${event.title} event`}
          className="h-full w-full object-cover transition-smooth group-hover:scale-105"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
        
        {/* Like button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 bg-background/80 hover:bg-background text-foreground backdrop-blur-sm"
        >
          <Heart className={`h-4 w-4 ${event.liked ? 'fill-red-500 text-red-500' : ''}`} />
        </Button>

        {/* Price badge */}
        <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1">
          <span className="text-sm font-bold text-foreground">{event.price}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-bold line-clamp-2 group-hover:text-primary transition-colors">
            {event.title}
          </h3>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{event.date}</span>
            </div>
            <span>•</span>
            <span>{event.time}</span>
          </div>

          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span className="truncate">{event.venue}, {event.location}</span>
          </div>
        </div>

        <Button className="w-full" variant="gradient">
          Obter Bilhetes
        </Button>
      </div>
    </div>
  );
};