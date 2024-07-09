import { SelectValue } from '@/components/atoms';
import { VariantBet } from './type';

export const bets: SelectValue[] = [
  {
    title: '1.00',
    value: '1.00',
  },
  {
    title: '5.00',
    value: '5.00',
  },
  {
    title: '10.00',
    value: '10.00',
  },

  {
    title: '15.00',
    value: '15.00',
  },
  {
    title: '20.00',
    value: '20.00',
  },
];

export const buttonVariant: { variant: VariantBet; title: string }[] = [
  { variant: 'even', title: 'Чётнок' },
  { variant: 'odd', title: 'Нечётное' },
  { variant: '1 - 3', title: 'От 1 до 3' },
  { variant: '4 - 6', title: 'От 4 до 6' },
];
