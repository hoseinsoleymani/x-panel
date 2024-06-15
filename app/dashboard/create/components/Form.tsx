'use client';

import { Button } from '@nextui-org/react';
import { useFormState } from 'react-dom';

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
};

export interface CreateUserProps {
  prices: UserDB['prices'] | undefined;
  settings: Setting | undefined;
}

export default function Form({ prices, settings }: CreateUserProps) {
  const [state, formAction] = useFormState(createUser, initialState);

  if (state?.message) {
    showToast('error', <p>{state.message}</p>, {
      toastId: 'error 1',
    });
  }

  return (
    <CalculatorProvider prices={prices} settings={settings}>
      <Card>
        <form action={formAction}>
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
    </CalculatorProvider>
  );
}
