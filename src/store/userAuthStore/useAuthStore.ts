import { create } from 'zustand';

import { LocalStorageManager } from '@/api';
import { AuthData, User } from '@/type';
import { AuthService } from '@/services';

type State = {
  isAuth: boolean;
  user: User | null;
  error: string;
  isSignLoading: boolean;
};

type Action = {
  signIn: (data: AuthData) => Promise<string>;
  getUser: () => void;
  signOut: () => void;
};

export const useAuthStore = create<State & Action>((set) => ({
  user: null,
  isSignLoading: false,
  error: '',
  isAuth: LocalStorageManager.checkIsLogined(),
  signIn: async (authData) => {
    try {
      set({ isSignLoading: true });
      set({ error: '' });
      const user = await AuthService.signIn(authData);
      set({ isAuth: true });
      set({ user });
      LocalStorageManager.setIsLogined();
      return 'success';
    } catch (e) {
      if (e instanceof Error) set({ error: e.message });
      else set({ error: 'Произошла ошибка' });
      return 'rejected';
    } finally {
      set({ isSignLoading: false });
    }
  },
  getUser: async () => {
    try {
      set({ isSignLoading: true });
      set({ error: '' });
      const user = await AuthService.getUser();
      set({ isAuth: true });
      set({ user });
    } catch (e) {
      LocalStorageManager.removeIsLodined();
      set({ isAuth: false });
      if (e instanceof Error) set({ error: e.message });
      else set({ error: 'Произошла ошибка' });
    } finally {
      set({ isSignLoading: false });
    }
  },

  signOut: async () => {
    LocalStorageManager.removeIsLodined();
    set({ isAuth: false });
    set({ user: null });
  },
}));
