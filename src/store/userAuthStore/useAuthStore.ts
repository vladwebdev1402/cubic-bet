import { create } from 'zustand';

type State = {
  isAuth: boolean;
};

type Action = {
  setIsAuth: (isAuth: boolean) => void;
};

export const useAuthStore = create<State & Action>((set) => ({
  isAuth: false,
  setIsAuth: (isAuth) => set({ isAuth }),
}));
