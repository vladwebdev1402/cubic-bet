import { useState } from 'react';

import { CubeStatus, GameCube, Typography } from '@/components/atoms';
import { BetOptions, VariantBet } from '@/components/moleculus';

import style from './MainPage.module.scss';

const MainPage = () => {
  const [status, setStatus] = useState<CubeStatus>('default');

  const handleStartClick = (
    sizeBet: number,
    variantBet: VariantBet,
    customBet: number,
  ) => {
    console.log(sizeBet);
    console.log(variantBet);
    console.log(customBet);
    setStatus('rotate-1');
  };

  return (
    <div className={style.container}>
      <Typography variant="title" className={style.title}>
        Сделайте ставку
      </Typography>
      <div className={style.cube_wrapper}>
        <GameCube status={status} />
      </div>
      <div className={style.options}>
        <BetOptions className={style.options} onStart={handleStartClick} />
      </div>
    </div>
  );
};

export { MainPage };
