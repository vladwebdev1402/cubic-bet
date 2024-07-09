import { Select, SelectValue } from '@/components/atoms';

import style from './MainPage.module.scss';

const MainPage = () => {
  const values: SelectValue[] = [
    {
      title: '1.00',
      value: '1.00',
    },
    {
      title: '2.00',
      value: '2.00',
    },
    {
      title: '3.00',
      value: '3.00',
    },
    {
      title: '4.00',
      value: '4.00',
    },
    {
      title: '5.00',
      value: '5.00',
    },
    {
      title: '6.00',
      value: '6.00',
    },
  ];
  return (
    <div className={style.page}>
      <Select
        cureentValue={values[0]}
        values={values}
        onSelect={(value) => {
          console.log(value);
        }}
      />
    </div>
  );
};

export { MainPage };
