import { create } from 'zustand';

type State = {
  balance: number;
};

type Action = {
  setBalance: (rollPrice: number, type: 'win' | 'loss') => void;
};

export const useGameStore = create<State & Action>((set) => ({
  balance: 100,
  setBalance: (rollPrice, type) => {
    set((state) => ({
      balance:
        type === 'win' ? state.balance + rollPrice : state.balance - rollPrice,
    }));
  },
}));
