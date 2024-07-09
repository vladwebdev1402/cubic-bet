import { Typography } from '@/components/atoms';

import style from './MainPage.module.scss';

const MainPage = () => {
  return (
    <div className={style.page}>
      <Typography>paragraph_16</Typography>
      <Typography variant="paragraph_14">paragraph_14</Typography>
      <Typography variant="title">title</Typography>
    </div>
  );
};

export { MainPage };
