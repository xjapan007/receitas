import React, { useState } from 'react';
import { Header } from './components/Header';
import { CategoryList } from './components/CategoryList';
import { FeaturedRecipes } from './components/FeaturedRecipes';
import { AuthModal } from './components/auth/AuthModal';
import { SubscriptionPlans } from './components/subscription/SubscriptionPlans';

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-yellow-50">
      <Header onAuthClick={() => setIsAuthModalOpen(true)} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 font-serif">Categorias</h2>
          <CategoryList />
        </section>
        <FeaturedRecipes />
        <SubscriptionPlans />
      </main>
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </div>
  );
}

export default App;