'use client';

import type { PropsWithChildren } from 'react';
import { createContext, useContext, useMemo, useState } from 'react';

import type { NavProps } from './Nav';

const WalletContext = createContext<any>({});

export const useWalletContextProvider = () => useContext(WalletContext);

export default function WalletProvider({
  children,
  userData,
}: PropsWithChildren<{ userData: NavProps['user'] }>) {
  const [user, setUser] = useState(userData);
  const [inventory, setInventory] = useState(userData.wallet.inventory);

  const value = useMemo(
    () => ({
      inventory,
      setInventory,
      user,
      setUser,
    }),
    [inventory],
  );

  return (
    <WalletContext.Provider value={value}>{children}</WalletContext.Provider>
  );
}
