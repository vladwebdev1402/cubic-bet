import { Input } from '@/components/atoms';
import style from './MainPage.module.scss';

const MainPage = () => {
  return (
    <div className={style.page}>
      <Input placeholder="asdasdasd" />
      <Input placeholder="asdasdasd" error="123123" />
    </div>
  );
};

export { MainPage };
