import React from 'react';
import { categories } from '../data/categories';
import * as LucideIcons from 'lucide-react';

export function CategoryList() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
      {categories.map((category) => {
        const Icon = LucideIcons[category.icon as keyof typeof LucideIcons];
        return (
          <div
            key={category.id}
            className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-yellow-100 hover:border-yellow-200"
          >
            {Icon && <Icon className="h-8 w-8 text-yellow-600 mb-2" />}
            <span className="text-gray-700 font-medium">{category.name}</span>
          </div>
        );
      })}
    </div>
  );
}