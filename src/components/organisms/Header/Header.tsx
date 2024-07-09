import { useState } from 'react';

import { Button, Modal, Typography } from '@/components/atoms';
import { AuthForm } from '@/components/moleculus';
import { useAuthStore, useGameStore } from '@/store';

import style from './Header.module.scss';

const Header = () => {
  const balance = useGameStore((state) => state.balance);
  const isAuth = useAuthStore((state) => state.isAuth);
  const [typeAuth, setTypeAuth] = useState<'signin' | 'signup' | null>(null);

  return (
    <>
      <header className={style.header}>
        <div className={style.container}>
          <Typography variant="title"> Test Game</Typography>
          {isAuth && <Typography>{balance} (TND)</Typography>}
          {!isAuth && (
            <div className={style.buttons}>
              <Button onClick={() => setTypeAuth('signin')}>Вход</Button>
              <Button onClick={() => setTypeAuth('signup')}>Регистрация</Button>
            </div>
          )}
        </div>
      </header>
      <Modal isOpen={typeAuth !== null} onClose={() => setTypeAuth(null)}>
        <AuthForm onSubmit={() => {}}>
          <Button className={style.auth_button}>Войти</Button>
        </AuthForm>
      </Modal>
    </>
  );
};

export { Header };
