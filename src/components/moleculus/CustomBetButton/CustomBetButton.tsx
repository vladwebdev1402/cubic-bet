import { ChangeEvent, FC } from 'react';

import { Button, ButtonProps, Input } from '@/components/atoms';

import { parseNumber } from './helpers';
import style from './CustomBetButton.module.scss';

type CustomBetButton = {
  betValue: string;
  inputDisable?: boolean;
  onBetChange: (value: string) => void;
} & ButtonProps;

const CustomBetButton: FC<CustomBetButton> = ({
  betValue,
  onBetChange,
  inputDisable = false,
  ...props
}) => {
  const onCustomNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value =
      e.target.value[1] !== undefined ? e.target.value[1] : e.target.value[0];

    if (value !== undefined) {
      const number = Number(value.replace(/\D/g, '').slice(0, 1));
      onBetChange(`${parseNumber(number)}`);
      return;
    }

    onBetChange('');
  };

  return (
    <Button
      lastIcon={
        <Input
          className={style.input}
          placeholder="1"
          disabled={inputDisable}
          value={betValue}
          onChange={onCustomNumberChange}
        />
      }
      {...props}
    >
      Конкретное число
    </Button>
  );
};

export { CustomBetButton };
