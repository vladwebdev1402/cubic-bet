import { ChangeEvent, FC, useState } from 'react';
import {
  Button,
  Input,
  Select,
  SelectValue,
  Typography,
} from '@/components/atoms';

import style from './BetOptions.module.scss';
import { bets } from './data';
import { VariantBet } from './type';

type BetOptionsProps = {
  className?: string;
  onStart: (sizeBet: number, variantBet: VariantBet, customBet: number) => void;
};

const BetOptions: FC<BetOptionsProps> = ({ className, onStart }) => {
  const [customBet, setCustomBet] = useState('');
  const [sizeBet, setSizeBet] = useState<SelectValue>(bets[0]);
  const [variantBet, setVariantBet] = useState<VariantBet>(null);

  const onCustomNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value =
      e.target.value[1] !== undefined ? e.target.value[1] : e.target.value[0];

    const parseNumber = (num: number) => {
      if (num > 6) return 6;
      else if (num < 1) return 1;
      else return num;
    };

    if (value !== undefined) {
      const number = Number(value.replace(/\D/g, '').slice(0, 1));
      setCustomBet(`${parseNumber(number)}`);
      return;
    }

    setCustomBet('');
  };

  const handleStartClick = () => {
    if (variantBet !== null) {
      onStart(Number(sizeBet.value), variantBet, Number(customBet));
    }
  };

  return (
    <div className={className}>
      <div>
        <Typography className={style.label} variant="paragraph_14">
          Размер ставки
        </Typography>
        <Select
          cureentValue={sizeBet}
          onSelect={(value) => setSizeBet(value)}
          values={bets}
        />
      </div>
      <div className={style.bet_variants}>
        <Typography className={style.label} variant="paragraph_14">
          Варианты ставок
        </Typography>
        <div className={style.body}>
          <Button
            isActive={variantBet === 'even'}
            className={style.button}
            onClick={() => setVariantBet('even')}
          >
            Чётное
          </Button>
          <Button
            isActive={variantBet === 'odd'}
            className={style.button}
            onClick={() => setVariantBet('odd')}
          >
            Нечётное
          </Button>
          <Button
            isActive={variantBet === '1 - 3'}
            className={style.button}
            onClick={() => setVariantBet('1 - 3')}
          >
            От 1 до 3
          </Button>
          <Button
            isActive={variantBet === '4 - 6'}
            className={style.button}
            onClick={() => setVariantBet('4 - 6')}
          >
            От 4 до 6
          </Button>
          <Button
            isActive={variantBet === 'custom'}
            onClick={() => setVariantBet('custom')}
            className={style.custom}
            lastIcon={
              <Input
                className={style.input}
                placeholder="1"
                disabled={variantBet !== 'custom'}
                value={customBet}
                onChange={onCustomNumberChange}
              />
            }
          >
            Конкретное число
          </Button>
        </div>
      </div>
      <Button
        className={style.start}
        theme="green"
        disabled={
          variantBet === null || (variantBet === 'custom' && customBet === '')
        }
        onClick={handleStartClick}
      >
        Сделать ставку
      </Button>
    </div>
  );
};

export { BetOptions };
