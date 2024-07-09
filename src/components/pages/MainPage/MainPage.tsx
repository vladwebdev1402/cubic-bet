import { GameCube, Typography } from '@/components/atoms';
import { BetOptions } from '@/components/moleculus';

import { useMainPage } from './useMainPage';
import style from './MainPage.module.scss';
import clsx from 'clsx';

const MainPage = () => {
  const {
    isAuth,
    balance,
    cubeStatus,
    rollPrice,
    resultRoll,
    resultGame,
    handleStartClick,
  } = useMainPage();

  return (
    <div className={style.container}>
      <div className={style.title}>
        {!isAuth && (
          <Typography variant="title">Войдите, чтобы продолжить</Typography>
        )}
        {isAuth && (
          <Typography variant="title">
            {resultRoll !== null
              ? `Результат броска кубика: ${resultRoll}`
              : 'Сделайте ставку'}
          </Typography>
        )}
        {resultGame && rollPrice && (
          <Typography className={style.subtitle}>
            {resultGame === 'win'
              ? `Вы выиграли ${rollPrice} TND!`
              : 'Повезёт в слеудюищй раз'}
          </Typography>
        )}
      </div>

      <div
        className={clsx(style.cube, {
          [style.disabled]: !isAuth,
        })}
      >
        <GameCube status={cubeStatus} />
      </div>
      <div className={style.options}>
        <BetOptions
          className={style.options}
          onStart={handleStartClick}
          currentBalance={balance}
          disabledOptions={!isAuth}
        />
      </div>
    </div>
  );
};

export { MainPage };
