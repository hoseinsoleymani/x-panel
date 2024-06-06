'use client';

import { DatePicker } from '@nextui-org/date-picker';
import { Button } from '@nextui-org/react';
import { useFormState } from 'react-dom';

import { Label } from '@/app/components/shared';
import AccountName from '@/app/dashboard/create/components/AccountName';
import Dropdown from '@/app/dashboard/create/components/Dropdown';
import DropdownS from '@/app/dashboard/create/components/DropdownS';
import NumberInput from '@/app/dashboard/create/components/Input';
import UserLimitInput from '@/app/dashboard/create/components/UserLimitInput';

import { createUser } from './actions/createUser';
import Cost from './components/Cost';

const initialState = {
  message: '',
};

export default function Create() {
  const [state, formAction] = useFormState(createUser, initialState);

  return (
    <section className="m-2 grow  md:m-6">
      <div className="text-3xl">
        <h1 className="font-bold">ساخت اکانت جدید</h1>
      </div>

      <div className="mt-6 flex flex-row">
        <div className="flex w-full flex-col">
          <form
            action={formAction}
            className="grid grid-cols-1 gap-y-6 md:grid-cols-3"
          >
            <div className="me-5">
              <Label>زمان اکانت</Label>
              <DatePicker
                name="date"
                label="زمان پایان"
                className="max-w-[284px]"
              />
            </div>
            <NumberInput />
            <UserLimitInput />
            <div className="flex gap-2">
              <Dropdown />
              <DropdownS />
            </div>
            <AccountName />
            <div className="mt-10 flex items-center gap-6">
              <Cost />
              <Button color="primary" type="submit" className="max-w-36">
                ساخت اکانت
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
