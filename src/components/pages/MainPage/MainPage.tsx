import { Typography } from '@/components/atoms';

import { BetOptions, VariantBet } from '@/components/moleculus';
import style from './MainPage.module.scss';

const MainPage = () => {
  const handleStartClick = (
    sizeBet: number,
    variantBet: VariantBet,
    customBet: number,
  ) => {
    console.log(sizeBet);
    console.log(variantBet);
    console.log(customBet);
  };

  return (
    <div className={style.container}>
      <Typography variant="title" className={style.title}>
        Сделайте ставку
      </Typography>
      <div className={style.cubic}></div>
      <div className={style.options}>
        <BetOptions className={style.options} onStart={handleStartClick} />
      </div>
    </div>
  );
};

export { MainPage };
