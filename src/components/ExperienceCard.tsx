import { Star, Clock, MapPin, Heart } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ExperienceCardProps {
  experience: {
    id: string;
    title: string;
    description: string;
    price: number;
    duration: string;
    location: string;
    category: string;
    image: string;
    bestSeason: string;
    features: string[];
  };
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

export function ExperienceCard({ experience, isFavorite, onToggleFavorite }: ExperienceCardProps) {
  return (
    <Card className="overflow-hidden group h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={experience.image} 
          alt={experience.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button
          onClick={() => onToggleFavorite(experience.id)}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
        >
          <Heart 
            className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
          />
        </button>
        <Badge className="absolute top-4 left-4 bg-primary">
          {experience.category}
        </Badge>
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {experience.duration}
          </div>
          <Badge variant="secondary">{experience.bestSeason}</Badge>
        </div>
        <h3 className="text-xl font-semibold mb-2">{experience.title}</h3>
        <p className="text-muted-foreground mb-4 flex-1">{experience.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {experience.features.slice(0, 3).map((feature, index) => (
            <Badge key={index} variant="outline">{feature}</Badge>
          ))}
        </div>
        <div className="flex items-center gap-2 mb-4">
          <MapPin className="w-4 h-4 text-muted-foreground" />
          <span className="text-muted-foreground">{experience.location}</span>
        </div>
        <Button className="w-full">Book Experience</Button>
      </div>
    </Card>
  );
}