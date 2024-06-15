import React from 'react';
import { Label } from '@/app/components/shared';
import NumberInput from '../../create/components/Input';
import { DatePicker } from '@nextui-org/date-picker';
import UserLimitInput from '../../create/components/UserLimitInput';
import { Button } from '@nextui-org/react';

export default function Tamdid() {
  return (
    <>
      <h1 className="py-5 text-xl text-white">تمدید</h1>
      <div className="grid grid-cols-2 items-center gap-16 py-6 md:grid-cols-3">
        <NumberInput />
        <div className="me-5">
          <Label>مدت زمان اکانت</Label>
          <DatePicker label="زمان تمدید" className="max-w-[284px]" />
        </div>
        <UserLimitInput />
      </div>

      <div className="mt-5 flex items-center justify-center">
        <Cost />

        <Button color="primary" className="mx-5 max-w-36">
          تمدید اکانت
        </Button>
      </div>
    </>
  );
}
