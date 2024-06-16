import { Button, useDisclosure } from '@nextui-org/react';
import { FaWallet } from 'react-icons/fa';

import { useWalletContextProvider } from './WalletProvider';

export default function Wallet() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { inventory } = useWalletContextProvider();

  return (
    <div className="flex cursor-pointer items-center rounded text-[1rem] md:text-[1.2rem] ">
      <Button onPress={onOpen} className="">
        <FaWallet className="" />
        <span className="font-bold">{inventory}</span>
        <span className="me-2 ">تومان</span>
      </Button>
    </div>
  );
}
