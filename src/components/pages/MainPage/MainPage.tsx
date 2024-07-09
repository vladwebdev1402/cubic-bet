import { GameCube, Typography } from '@/components/atoms';
import { BetOptions } from '@/components/moleculus';

import { useMainPage } from './useMainPage';
import style from './MainPage.module.scss';

const MainPage = () => {
  const {
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
        <Typography variant="title">
          {resultRoll !== null
            ? `Результат броска кубика: ${resultRoll}`
            : 'Сделайте ставку'}
        </Typography>
        {resultGame && rollPrice && (
          <Typography className={style.subtitle}>
            {resultGame === 'win'
              ? `Вы выиграли ${rollPrice} TND!`
              : 'Повезёт в слеудюищй раз'}
          </Typography>
        )}
      </div>

      <div className={style.cube_wrapper}>
        <GameCube status={cubeStatus} />
      </div>
      <div className={style.options}>
        <BetOptions
          className={style.options}
          onStart={handleStartClick}
          currentBalance={balance}
          disabledOptions
        />
      </div>
    </div>
  );
};

export { MainPage };
