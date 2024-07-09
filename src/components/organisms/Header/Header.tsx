import { Button, Typography } from '@/components/atoms';
import { useGameStore } from '@/store';

import style from './Header.module.scss';

const Header = () => {
  const balance = useGameStore((state) => state.balance);

  return (
    <header className={style.header}>
      <div className={style.container}>
        <Typography variant="title"> Test Game</Typography>
        <Typography>{balance} TND</Typography>
        {/* <div className={style.buttons}>
          <Button>Вход</Button>
          <Button>Регистрация</Button>
        </div> */}
      </div>
    </header>
  );
};

export { Header };
