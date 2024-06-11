import type { PropsWithChildren, SetStateAction } from 'react';
import React, { createContext, useContext, useMemo, useState } from 'react';

import type { UserDB } from '../dashboard/create/page';
import { compareDates } from '../utils/compareDates';

const CalculatorContext = createContext<any>({});

export const useCalculatorContext = () => useContext(CalculatorContext);

export const CalculatorProvider = ({
  children,
  prices,
}: PropsWithChildren<{ prices: UserDB['prices'] | undefined }>) => {
  const [traffic, setTraffic] = useState(1);
  const [limit, setLimit] = useState(1);
  const [date, setDate] = useState('6/15/2024');

  const increment = (
    value: number,
    setter: React.Dispatch<SetStateAction<number>>,
    max: number,
  ) => {
    setter((prevValue) => (prevValue < max ? prevValue + 1 : prevValue));
  };

  const decrement = (
    value: number,
    setter: React.Dispatch<SetStateAction<number>>,
    min: number,
  ) => {
    setter((prevValue) => (prevValue > min ? prevValue - 1 : prevValue));
  };

  const trafficIncrement = () => increment(traffic, setTraffic, 10);
  const trafficDecrement = () => decrement(traffic, setTraffic, 1);

  const limitIncrement = () => increment(limit, setLimit, 10);
  const limitDecrement = () => decrement(limit, setLimit, 1);

  const price = prices
    ? limit * parseInt(prices.limit, 10) +
      traffic * parseInt(prices.traffic, 10) +
      compareDates(date, new Date().toLocaleDateString('en')) *
        parseInt(prices.date, 10)
    : 0;

  const value = useMemo(
    () => ({
      traffic,
      limit,
      date,
      setDate,
      price,
      trafficIncrement,
      trafficDecrement,
      limitIncrement,
      limitDecrement,
    }),
    [traffic, limit, date, price],
  );

  return (
    <CalculatorContext.Provider value={value}>
      {children}
    </CalculatorContext.Provider>
  );
};
