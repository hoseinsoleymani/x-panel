import type { PropsWithChildren } from 'react';
import React, { createContext, useContext, useMemo, useState } from 'react';

import type { Setting, UserDB } from '../dashboard/create/page';
import { compareDates } from '../utils/compareDates';

const CalculatorContext = createContext<any>({});

export const useCalculatorContext = () => useContext(CalculatorContext);

export const CalculatorProvider = ({
  children,
  prices,
  settings,
}: PropsWithChildren<{
  prices: UserDB['prices'] | undefined;
  settings: Setting | undefined;
}>) => {
  const [traffic, setTraffic] = useState('');
  const [limit, setLimit] = useState('');
  const [date, setDate] = useState('6/15/2024');
  console.log(traffic);

  const price =
    prices && traffic && limit
      ? parseInt(limit, 10) * parseInt(prices.limit, 10) +
          parseInt(traffic, 10) * parseInt(prices.traffic, 10) +
        compareDates(date, new Date().toLocaleDateString('en')) *
          parseInt(prices.date, 10)
      : 0;

  const value = useMemo(
    () => ({
      traffic,
      limit,
      date,
      setDate,
      setTraffic,
      setLimit,
      price,
      settings,
    }),
    [traffic, limit, date, price, settings],
  );

  return (
    <CalculatorContext.Provider value={value}>
      {children}
    </CalculatorContext.Provider>
  );
};
