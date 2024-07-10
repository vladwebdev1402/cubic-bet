import { useState } from 'react';

import { CubeStatus } from '@/components/atoms';
import { VariantBet } from '@/components/moleculus';
import { useAuthStore, useGameStore } from '@/store';

import { parseResultGame, randomInteger } from './helpers';

export const useMainPage = () => {
  const setBalance = useGameStore((state) => state.setBalance);
  const balance = useGameStore((state) => state.balance);
  const isAuth = useAuthStore((state) => state.isAuth);

  const [cubeStatus, setCubeStatus] = useState<CubeStatus>('default');
  const [rollPrice, setRollPrice] = useState<number | null>(null);
  const [resultGame, setResultGame] = useState<'win' | 'loss' | null>(null);
  const [resultRoll, setResultRoll] = useState<number | null>(null);
  const [isStarted, setIsStarted] = useState(false);

  const handleStartClick = (
    sizeBet: number,
    variantBet: VariantBet,
    customBet: number,
  ) => {
    const newRoll = randomInteger(1, 6);
    const newStatus = `rotate-${newRoll}` as CubeStatus;

    setCubeStatus('default');
    setResultGame(null);
    setResultRoll(null);
    setIsStarted(true);

    const newResultGame = parseResultGame(variantBet, newRoll, customBet);
    const coef = variantBet === 'custom' ? 3 : 2;
    const newRollPrice = coef * sizeBet;

    setTimeout(() => {
      setCubeStatus(newStatus);
    }, 50);

    setTimeout(() => {
      setRollPrice(newRollPrice);
      setResultGame(newResultGame);
      setResultRoll(newRoll);
      setBalance(newRollPrice, newResultGame);
      setIsStarted(false);
    }, 5200);
  };

  return {
    isAuth,
    isStarted,
    cubeStatus,
    rollPrice,
    resultGame,
    resultRoll,
    balance,
    handleStartClick,
  };
};
