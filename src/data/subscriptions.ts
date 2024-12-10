import { SubscriptionPlan } from '../types';

export const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: 'free',
    name: 'Gratuito',
    price: 0,
    features: [
      'Acesso a receitas básicas',
      'Pesquisa de receitas',
      'Salvar favoritos',
      'Comentários em receitas'
    ]
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 9.99,
    recommended: true,
    features: [
      'Todas as funcionalidades gratuitas',
      'Adicionar receitas próprias',
      'Upload de fotos',
      'Receitas exclusivas',
      'Sem anúncios'
    ]
  },
  {
    id: 'professional',
    name: 'Profissional',
    price: 19.99,
    features: [
      'Todas as funcionalidades premium',
      'Upload de vídeos',
      'Perfil profissional destacado',
      'Estatísticas detalhadas',
      'Suporte prioritário',
      'Workshops exclusivos'
    ]
  }
];