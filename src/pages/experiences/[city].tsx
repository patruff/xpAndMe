import { CityHero } from '@/components/CityHero';

export default function CityPage() {
  return (
    <main className="min-h-screen">
      <CityHero 
        city="Dalian"
        heroImage="https://images.unsplash.com/photo-1567933034667-a734f423579b?q=80&w=2000"
        experienceCount={156}
      />
      {/* Rest of your content */}
    </main>
  );
} 