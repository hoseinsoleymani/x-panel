'use client';

import { Button } from '@nextui-org/react';
import { useEffect } from 'react';
import { useFormState } from 'react-dom';

import { useWalletContextProvider } from '@/app/components/layout/WalletProvider';
import { Card } from '@/app/components/shared/Card';
import { showToast } from '@/app/components/shared/Toast';
import { CalculatorProvider } from '@/app/hook/useCalculator';

import Cost from '../../create/components/Cost';
import { DatePicker } from '../../create/components/Date';
import NumberInput from '../../create/components/Input';
import UserLimitInput from '../../create/components/UserLimitInput';
import type { Setting, UserDB } from '../../create/page';
import { extention } from '../actions/extention';

export interface CreateUserProps {
  prices: UserDB['prices'] | undefined;
  settings: Setting | undefined;
  id: Setting | undefined;
}

const initialState = {
  message: '',
  inventory: '',
};

export function Extension({ prices, settings, id }: CreateUserProps) {
  const [state, formAction] = useFormState<any>(extention, initialState);

  const { setInventory } = useWalletContextProvider();

  if (state?.message) {
    showToast('error', <p>{state.message}</p>, {
      toastId: 'error 1',
    });
  }

  useEffect(() => {
    if (!state?.inventory) return;

    setInventory(state.inventory);
  }, [state?.inventory]);

  return (
    <CalculatorProvider prices={prices} settings={settings}>
      <Card>
        <form
          action={formAction}
          className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-20"
        >
          <input type="hidden" name="id" value={id} />
          <DatePicker />
          <NumberInput />
          <UserLimitInput />
          <Cost />
          <Button color="primary" type="submit" className="max-w-36">
            ساخت اکانت
          </Button>
        </form>
      </Card>
    </CalculatorProvider>
  );
}
