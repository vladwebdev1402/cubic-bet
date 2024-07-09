import { Button } from '@/components/atoms';

import style from './MainPage.module.scss';

const MainPage = () => {
  return (
    <div className={style.page}>
      <Button>asasdads</Button>
      <Button theme="green">asasdads</Button>
      <Button isActive>asasdads</Button>
      <Button disabled>disabled</Button>
      <Button loading>disabled</Button>
      <Button
        className={style.btn}
        lastIcon={
          <div
            style={{
              width: '16px',
              height: '16px',
              backgroundColor: 'white',
            }}
          />
        }
      >
        Конкретное ч
      </Button>
    </div>
  );
};

export { MainPage };
