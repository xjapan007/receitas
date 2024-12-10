import React from 'react';
import { Search, Menu, UtensilsCrossed } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Menu className="h-6 w-6 text-gray-500 mr-4 cursor-pointer" />
            <div className="flex items-center">
              <UtensilsCrossed className="h-8 w-8 text-yellow-600 mr-2" />
              <h1 className="text-2xl font-bold text-yellow-600 font-serif">Reçeitas da avó</h1>
            </div>
          </div>
          
          <div className="flex-1 max-w-lg mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Procurar receita..."
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-yellow-600"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-yellow-600">Receitas</a>
            <a href="#" className="text-gray-600 hover:text-yellow-600">Categorias</a>
            <a href="#" className="text-gray-600 hover:text-yellow-600">Favoritos</a>
          </nav>
        </div>
      </div>
    </header>
  );
}