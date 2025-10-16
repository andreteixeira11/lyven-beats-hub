import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { EventCard } from "./EventCard";
import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";
import event3 from "@/assets/event-3.jpg";

interface SearchModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const popularEvents = [
  {
    id: "1",
    title: "INDIE ROCK NIGHT",
    date: "Dec 15",
    time: "8:00 PM",
    venue: "The Garage",
    location: "Brooklyn, NY",
    price: "From $45.00",
    image: event1,
  },
  {
    id: "2",
    title: "Electronic Music Festival",
    date: "Dec 20",
    time: "9:00 PM",
    venue: "Warehouse 21",
    location: "Queens, NY",
    price: "From $89.00",
    image: event2,
  },
  {
    id: "3",
    title: "Classical Crossover Concert",
    date: "Dec 28",
    time: "7:30 PM",
    venue: "Symphony Center",
    location: "Manhattan, NY",
    price: "From $78.00",
    image: event3,
  },
  {
    id: "4",
    title: "Jazz & Blues Evening",
    date: "Jan 5",
    time: "8:30 PM",
    venue: "Blue Note",
    location: "Manhattan, NY",
    price: "From $65.00",
    image: event1,
  },
  {
    id: "5",
    title: "Hip Hop Showcase",
    date: "Jan 10",
    time: "10:00 PM",
    venue: "The Apollo",
    location: "Harlem, NY",
    price: "From $55.00",
    image: event2,
  },
];

export const SearchModal = ({ open, onOpenChange }: SearchModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Pesquisar Eventos</DialogTitle>
        </DialogHeader>
        
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Pesquisar por evento, local ou cidade"
            className="pl-12 h-12 text-lg"
            autoFocus
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">Eventos Mais Populares</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
