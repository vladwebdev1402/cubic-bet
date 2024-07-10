import { Button, Modal, Typography } from '@/components/atoms';
import { AuthForm } from '@/components/moleculus';

import { useHeader } from './useHeader';
import style from './Header.module.scss';

const Header = () => {
  const { state, actions } = useHeader();

  return (
    <>
      <header className={style.header}>
        <div className={style.container}>
          <Typography variant="title"> Test Game</Typography>
          {!state.isAuth && !state.isLogined && (
            <div className={style.buttons}>
              <Button onClick={actions.openModal}>Вход</Button>
              <Button onClick={actions.openModal}>Регистрация</Button>
            </div>
          )}
          {state.isAuth && (
            <div className={style.buttons}>
              <Typography>{state.balance} (TND)</Typography>
              <Button onClick={actions.signOut}>Выйти</Button>
            </div>
          )}
        </div>
      </header>
      <Modal isOpen={state.isOpen} onClose={actions.closeModal}>
        <AuthForm onSubmit={actions.onAuthSubmit}>
          <Button className={style.auth_button} loading={state.isSignLoading}>
            Войти
          </Button>
        </AuthForm>
        {state.error && <div className={style.error}>{state.error}</div>}
      </Modal>
    </>
  );
};

export { Header };
