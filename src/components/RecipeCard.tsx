import React from 'react';
import { Clock, Star } from 'lucide-react';
import { Recipe } from '../types';

interface RecipeCardProps {
  recipe: Recipe;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-yellow-100 hover:border-yellow-200">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 font-serif">{recipe.title}</h3>
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{recipe.duration}</span>
          </div>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-500 mr-1" />
            <span>{recipe.rating}</span>
          </div>
        </div>
        <div className="mt-2">
          <span className="inline-block px-2 py-1 text-xs font-medium text-yellow-600 bg-yellow-50 rounded-full">
            {recipe.difficulty}
          </span>
        </div>
      </div>
    </div>
  );
}