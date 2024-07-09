import { Button, Typography } from '@/components/atoms';

import style from './Header.module.scss';

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <Typography variant="title"> Test Game</Typography>
        <div className={style.buttons}>
          <Button>Вход</Button>
          <Button>Регистрация</Button>
        </div>
      </div>
    </header>
  );
};

export { Header };
