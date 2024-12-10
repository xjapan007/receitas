import React from 'react';
import { RecipeCard } from './RecipeCard';
import { recipes } from '../data/recipes';

export function FeaturedRecipes() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 font-serif">Receitas em Destaque</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </section>
  );
}