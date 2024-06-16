'use client';

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react';
import Link from 'next/link';
import { useQRCode } from 'next-qrcode';
import React, { useEffect, useRef } from 'react';
import { useFormState } from 'react-dom';

import { useWalletContextProvider } from '@/app/components/layout/WalletProvider';
import { Card } from '@/app/components/shared/Card';
import { showToast } from '@/app/components/shared/Toast';
import AccountName from '@/app/dashboard/create/components/AccountName';
import NumberInput from '@/app/dashboard/create/components/Input';
import UserLimitInput from '@/app/dashboard/create/components/UserLimitInput';
import { CalculatorProvider } from '@/app/hook/useCalculator';

import { createUser } from '../actions/createUser';
import type { Setting, UserDB } from '../page';
import Cost from './Cost';
import { DatePicker } from './Date';

const initialState = {
  message: '',
  inventory: '',
  token: '',
};

export interface CreateUserProps {
  prices: UserDB['prices'] | undefined;
  settings: Setting | undefined;
}

export default function Form({ prices, settings }: CreateUserProps) {
  const [state, formAction] = useFormState<any>(createUser, initialState);
  const ref = useRef<HTMLFormElement>(null);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { Canvas } = useQRCode();
  const { setInventory } = useWalletContextProvider();

  if (state?.message) {
    showToast('error', <p>{state.message}</p>, {
      toastId: 'error 1',
    });
  }

  useEffect(() => {
    if (!state?.inventory || !state?.token) return;

    setInventory(state.inventory);
    onOpen();
  }, [state?.inventory, state?.token]);

  return (
    <CalculatorProvider prices={prices} settings={settings}>
      <Card>
        <form ref={ref} action={formAction}>
          <div className="grid grid-cols-1 gap-20 md:grid-cols-2">
            <DatePicker />
            <AccountName />
          </div>
          <div className="mt-6 grid grid-cols-1 gap-20 md:grid-cols-2">
            <NumberInput />
            <UserLimitInput />
          </div>

          <div className="mt-10 flex items-center gap-6">
            <Cost />
            <Button color="primary" type="submit" className="max-w-36">
              ساخت اکانت
            </Button>
          </div>
        </form>
      </Card>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-black">
                لینک اتصال
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col items-center justify-center">
                  <span className="rounded-lg bg-[#17c964] px-1 py-2 text-black">
                    {`${process.env.NEXT_PUBLIC_SUB ?? ''}${state?.token}`}
                  </span>
                  <Canvas
                    text={`${process.env.NEXT_PUBLIC_SUB ?? ''}${state?.token}`}
                    options={{
                      errorCorrectionLevel: 'M',
                      margin: 3,
                      scale: 4,
                      width: 200,
                    }}
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onPress={() => {
                    onClose();
                    ref.current?.reset();
                  }}
                >
                  بستن
                </Button>
                <Button color="primary">
                  <Link href="/dashboard/users">کاربران</Link>
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </CalculatorProvider>
  );
}
