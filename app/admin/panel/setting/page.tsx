'use client';

import { Button, Input } from '@nextui-org/react';
import { useFormState } from 'react-dom';

import { Label } from '@/app/components/shared';
import { Card } from '@/app/components/shared/Card';

import { saveSetting } from './actions/saveSettings';

const initialMessage = {
  message: '',
};

export default function Setting() {
  const [_, formAction] = useFormState(saveSetting, initialMessage);

  return (
    <section className="w-full p-3">
      <h1 className="text-xl text-white">تنظمات پنل و نماینده ها:</h1>
      <Card>
        <form
          action={formAction}
          className="grid grid-cols-1 gap-10 p-5 sm:grid-cols-2 xl:grid-cols-3"
        >
          <div className="flex flex-col items-start">
            <Label>حداقل حجم برای ساخت اکانت</Label>
            <Input
              type="number"
              label="براساس گیگابایت"
              placeholder="حداقل حجم"
              defaultValue="10"
              name="minTraffic"
            />
          </div>
          <div className="flex flex-col items-start">
            <Label>حداکثر حجم برای ساخت اکانت</Label>
            <Input
              type="number"
              label="براساس گیگابایت"
              placeholder="حداقل حجم"
              defaultValue="250"
              name="maxTraffic"
            />
          </div>
          <div className="flex flex-col items-start">
            <Label>حداقل مدت زمان برای ساخت اکانت</Label>
            <Input
              type="number"
              label="براساس روز"
              placeholder="حداقل حجم"
              defaultValue="30"
              name="minExpirationTime"
            />
          </div>
          <div className="flex flex-col items-start">
            <Label>حداکثر مدت زمان برای ساخت اکانت</Label>
            <Input
              type="number"
              label="براساس روز"
              placeholder="حداکثر زمان"
              defaultValue="60"
              name="maxExpirationTime"
            />
          </div>
          <div className="flex flex-col items-start">
            <Label>حداکثر تعداد ایپی لیمیت برای ساخت اکانت</Label>
            <Input
              type="number"
              label="تعداد یوزر"
              placeholder="حداکثر لیمیت یوزر"
              defaultValue="5"
              name="maxUserLimit"
            />
          </div>
          {/* <div className="flex flex-col items-start">
            <Label>api درگاه پرداخت نکست پی را وارد کنید</Label>
            <Input
              type="text"
              label="api درگاه "
              // placeholder="حداکثر لیمیت یوزر"
            />
          </div> */}
          <div className=" flex p-7">
            <Button type="submit" className="mx-auto text-lg" color="primary">
              ذخیره تغییرات
            </Button>
          </div>
        </form>
      </Card>
    </section>
  );
}
