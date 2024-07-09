import { VariantBet } from '@/components/moleculus';

export const randomInteger = (min: number, max: number) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export const parseResultGame = (
  variantBet: VariantBet,
  newNumber: number,
  customBet: number,
): 'win' | 'loss' => {
  if (variantBet === 'odd' && newNumber % 2 === 1) return 'win';
  if (variantBet === 'even' && newNumber % 2 === 0) return 'win';
  if (variantBet === '1 - 3' && newNumber >= 1 && newNumber <= 3) return 'win';
  if (variantBet === '4 - 6' && newNumber >= 4 && newNumber <= 6) return 'win';
  if (variantBet === 'custom' && newNumber === customBet) return 'win';
  return 'loss';
};
