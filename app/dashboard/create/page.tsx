'use client';

import { DatePicker } from '@nextui-org/date-picker';
import { Button } from '@nextui-org/react';

import { Label } from '@/app/components/shared';
import AccountName from '@/app/dashboard/create/components/AccountName';
import Dropdown from '@/app/dashboard/create/components/Dropdown';
import DropdownS from '@/app/dashboard/create/components/DropdownS';
import NumberInput from '@/app/dashboard/create/components/Input';
import UserLimitInput from '@/app/dashboard/create/components/UserLimitInput';

import Cost from './components/Cost';

export default function Create() {
  return (
    <section className="m-6 min-h-screen grow">
      <div className="text-3xl">
        <h1 className="font-bold">ساخت اکانت جدید</h1>
      </div>

      <div className="mt-6 flex flex-row">
        <div className="flex w-full flex-col">
          <form className="grid grid-cols-3 gap-y-6">
            <div className="me-5">
              <Label>مدت زمان اکانت</Label>
              <DatePicker label="Birth date" className="max-w-[284px]" />
            </div>

            <NumberInput />

            <UserLimitInput />

            <Dropdown />
            <DropdownS />

            <AccountName />

            <div className="mt-10 flex items-center gap-6">
              <Cost />
              <Button color="primary" className="max-w-36">
                ساخت اکانت
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
