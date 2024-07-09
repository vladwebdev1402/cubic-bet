import { useState } from 'react';

import { useAuthStore, useGameStore } from '@/store';
import { LocalStorageManager } from '@/api';
import { AuthData } from '@/type';

export const useHeader = () => {
  const balance = useGameStore((state) => state.balance);
  const isAuth = useAuthStore((state) => state.isAuth);
  const signIn = useAuthStore((state) => state.signIn);
  const signOut = useAuthStore((state) => state.signOut);
  const error = useAuthStore((state) => state.error);
  const isSignLoading = useAuthStore((state) => state.isSignLoading);
  const isLogined = LocalStorageManager.checkIsLogined();
  const [isOpen, setIsOpen] = useState(false);

  const onAuthSubmit = async (data: AuthData) => {
    const status = await signIn(data);
    if (status === 'success') {
      setIsOpen(false);
    }
  };

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return {
    state: {
      balance,
      isAuth,
      error,
      isSignLoading,
      isLogined,
      isOpen,
    },
    actions: {
      closeModal,
      openModal,
      onAuthSubmit,
      signOut,
    },
  };
};
