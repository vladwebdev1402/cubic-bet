import { FC, useState } from 'react';
import { Button, Select, SelectValue, Typography } from '@/components/atoms';

import { bets, buttonVariant } from './data';
import { VariantBet } from './type';
import { CustomBetButton } from '../CustomBetButton';
import style from './BetOptions.module.scss';
import clsx from 'clsx';

type BetOptionsProps = {
  currentBalance: number;
  disabledOptions?: boolean;
  className?: string;
  onStart: (sizeBet: number, variantBet: VariantBet, customBet: number) => void;
};

const BetOptions: FC<BetOptionsProps> = ({
  currentBalance,
  disabledOptions = false,
  className,
  onStart,
}) => {
  const [customBet, setCustomBet] = useState('');
  const [sizeBet, setSizeBet] = useState<SelectValue>(bets[0]);
  const [variantBet, setVariantBet] = useState<VariantBet>(null);
  const startDisabled =
    variantBet === null ||
    (variantBet === 'custom' && customBet === '') ||
    (variantBet === 'custom'
      ? currentBalance - Number(sizeBet.value) * 3 < 0
      : currentBalance - Number(sizeBet.value) * 2 < 0) ||
    disabledOptions;

  const onCustomNumberChange = (value: string) => {
    setCustomBet(value);
  };

  const handleStartClick = () => {
    if (variantBet !== null) {
      onStart(Number(sizeBet.value), variantBet, Number(customBet));
    }
  };

  return (
    <div className={className}>
      <div>
        <Typography
          className={clsx(style.label, { [style.disabled]: disabledOptions })}
          variant="paragraph_14"
        >
          Размер ставки
        </Typography>
        <Select
          cureentValue={sizeBet}
          onSelect={(value) => setSizeBet(value)}
          values={bets}
          disabled={disabledOptions}
        />
      </div>
      <div className={style.bet_variants}>
        <Typography
          className={clsx(style.label, { [style.disabled]: disabledOptions })}
          variant="paragraph_14"
        >
          Варианты ставок
        </Typography>
        <div className={style.body}>
          {buttonVariant.map((item) => (
            <Button
              key={item.variant}
              className={style.button}
              isActive={variantBet === item.variant}
              onClick={() => setVariantBet(item.variant)}
              disabled={disabledOptions}
            >
              {item.title}
            </Button>
          ))}
          <CustomBetButton
            betValue={customBet}
            onBetChange={onCustomNumberChange}
            className={style.custom}
            onClick={() => setVariantBet('custom')}
            isActive={variantBet === 'custom'}
            inputDisable={variantBet !== 'custom'}
            disabled={disabledOptions}
          />
        </div>
      </div>
      <Button
        className={style.start}
        theme="green"
        disabled={startDisabled}
        onClick={handleStartClick}
      >
        Сделать ставку
      </Button>
    </div>
  );
};

export { BetOptions };
