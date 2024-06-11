'use client';

import { Button } from '@nextui-org/react';
import { useFormState } from 'react-dom';

import AccountName from '@/app/dashboard/create/components/AccountName';
import NumberInput from '@/app/dashboard/create/components/Input';
import UserLimitInput from '@/app/dashboard/create/components/UserLimitInput';
import { CalculatorProvider } from '@/app/hook/useCalculator';

import { createUser } from '../actions/createUser';
import type { UserDB } from '../page';
import Cost from './Cost';
import { DatePicker } from './Date';

const initialState = {
  message: '',
};

export interface Props {
  prices: UserDB['prices'] | undefined;
}

export default function Form({ prices }: Props) {
  const [state, formAction] = useFormState(createUser, initialState);

  return (
    <CalculatorProvider prices={prices}>
      <form
        action={formAction}
        className="grid grid-cols-1 gap-y-6 md:grid-cols-3"
      >
        <div className="me-5">
          <DatePicker />
        </div>
        <NumberInput />
        <UserLimitInput />
        {/* <div className="flex gap-2">
              <Dropdown />
              <DropdownS />
            </div> */}
        <AccountName />
        <div className="mt-10 flex items-center gap-6">
          <Cost />
          <Button color="primary" type="submit" className="max-w-36">
            ساخت اکانت
          </Button>
        </div>
      </form>
    </CalculatorProvider>
  );
}
