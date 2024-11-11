import { useState } from 'react';
import { ExperienceCard } from '@/components/ExperienceCard';
import { CategoryFilter } from '@/components/CategoryFilter';
import { CityHero } from '@/components/CityHero';
import { dalianExperiences } from '@/data/dalianExperiences';

function App() {
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const toggleFavorite = (id: string) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(id)) {
        newFavorites.delete(id);
      } else {
        newFavorites.add(id);
      }
      return newFavorites;
    });
  };

  const categories = Array.from(
    new Set(dalianExperiences.map(exp => exp.category))
  );

  const filteredExperiences = selectedCategory
    ? dalianExperiences.filter(exp => exp.category === selectedCategory)
    : dalianExperiences;

  return (
    <div className="min-h-screen w-full flex flex-col bg-background">
      <CityHero 
        city="Dalian"
        heroImage="https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?auto=format&fit=crop&q=80"
        experienceCount={dalianExperiences.length}
      />

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="mb-8">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExperiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              isFavorite={favorites.has(experience.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;