import { useEffect } from 'react';

import { useAuthStore } from '@/store';
import { LocalStorageManager } from '@/api';

export const useLayout = () => {
  const getUser = useAuthStore((state) => state.getUser);
  const isLogined = LocalStorageManager.checkIsLogined();

  useEffect(() => {
    if (isLogined) {
      getUser();
    }
  }, [isLogined]);
};
