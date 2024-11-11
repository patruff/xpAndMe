import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface CityHeroProps {
  city: string;
  heroImage: string;
  experienceCount: number;
}

export function CityHero({ city, heroImage, experienceCount }: CityHeroProps) {
  return (
    <div 
      className="relative h-[500px] w-full bg-cover bg-center" 
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="container relative z-10 flex flex-col items-center justify-center h-full px-4 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Explore {city}
        </h1>
        <p className="text-lg md:text-xl mb-8 text-center">
          Discover {experienceCount.toLocaleString()} unique experiences in this vibrant city
        </p>
        
        {/* Search Bar */}
        <div className="flex w-full max-w-2xl gap-2 bg-white/10 backdrop-blur-md p-2 rounded-lg">
          <div className="flex-1 flex items-center bg-white/10 rounded-md px-3">
            <Search className="w-5 h-5 text-white/70 mr-2 shrink-0" />
            <Input 
              type="text" 
              placeholder={`Search experiences in ${city}...`}
              className="border-0 bg-transparent text-white placeholder:text-white/70 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
          <Button 
            size="lg" 
            className="px-8 bg-white text-black hover:bg-white/90 shrink-0"
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}