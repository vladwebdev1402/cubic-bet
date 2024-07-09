import { useState } from 'react';

import { Button, Modal, Typography } from '@/components/atoms';
import { AuthData, AuthForm } from '@/components/moleculus';
import { useAuthStore, useGameStore } from '@/store';

import style from './Header.module.scss';
import { LocalStorageManager } from '@/api';

const Header = () => {
  const balance = useGameStore((state) => state.balance);
  const isAuth = useAuthStore((state) => state.isAuth);
  const signIn = useAuthStore((state) => state.signIn);
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

  return (
    <>
      <header className={style.header}>
        <div className={style.container}>
          <Typography variant="title"> Test Game</Typography>
          {isAuth && <Typography>{balance} (TND)</Typography>}
          {!isAuth && !isLogined && (
            <div className={style.buttons}>
              <Button onClick={() => setIsOpen(true)}>Вход</Button>
              <Button onClick={() => setIsOpen(true)}>Регистрация</Button>
            </div>
          )}
        </div>
      </header>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <AuthForm onSubmit={onAuthSubmit}>
          <Button className={style.auth_button} loading={isSignLoading}>
            Войти
          </Button>
        </AuthForm>
        {error && <div>{error}</div>}
      </Modal>
    </>
  );
};

export { Header };
