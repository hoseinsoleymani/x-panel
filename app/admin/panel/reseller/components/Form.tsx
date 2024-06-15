'use client';
import { Button, Input } from '@nextui-org/react';
import React from 'react';

import { Card } from '@/app/components/shared/Card';

import { editReseller } from '../actions/editReseller';
import { useFormState } from 'react-dom';

const initialState = {
  message: '',
};

export default function Form({data}:any) {
  const [state, formAction] = useFormState(editReseller, initialState);
  return (
    <Card>
      <form action={formAction}>
        <div className="grid grid-cols-1 gap-x-20 gap-y-14 md:grid-cols-2">
        <input type="hidden" name="id" value={data._id} />
          <Input
            className="text-white"
            type="text"
            variant="bordered"
            label="مقدار موجودی "
            defaultValue={data.wallet.inventory}
            name="inventory"
          />
          <Input
            className=" text-white"
            type="text"
            variant="bordered"
            defaultValue={data.name}
            label="نام نماینده"
            name="name"
          />


        </div>
        <div className="mt-6 grid grid-cols-1  gap-x-20 gap-y-14 md:grid-cols-2">
          <Input
            className=" text-white"
            type="number "
            variant="bordered"
            defaultValue={data.prices.traffic}
            label="قیمت هر گیگ"
            name="traffic-price"
          />
          <Input
            className=" text-white"
            type="number"
            variant="bordered"
            defaultValue={data.prices.date}
            label="قیمت هر روز"
            name="date-price"
          />
          <Input
            className=" text-white"
            type="number"
            variant="bordered"
            defaultValue={data.prices.limit}
            label="قیمت هر یوزر"
            name="user-price"
          />
          <Input
            className="text-white"
            type="text"
            variant="bordered"
            label="پسورد نماینده"
            name="password"
          />
        </div>

        <div className="mt-10 flex items-center gap-6">
          <Button color="primary" type="submit" className="max-w-36">
            ذخیره تغییرات
          </Button>
        </div>
      </form>
    </Card>
  );
}
