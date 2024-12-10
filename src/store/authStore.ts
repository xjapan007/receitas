import { create } from 'zustand';
import { User } from '../types';
import { supabase } from '../config/supabase';

interface AuthState {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, username: string) => Promise<void>;
  signOut: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: true,
  signIn: async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    if (data.user) {
      set({ user: {
        id: data.user.id,
        email: data.user.email!,
        username: data.user.user_metadata.username,
        subscription: 'free'
      }});
    }
  },
  signUp: async (email, password, username) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { username }
      }
    });
    if (error) throw error;
    if (data.user) {
      set({ user: {
        id: data.user.id,
        email: data.user.email!,
        username,
        subscription: 'free'
      }});
    }
  },
  signOut: async () => {
    await supabase.auth.signOut();
    set({ user: null });
  },
}));