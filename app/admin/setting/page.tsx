import { Label } from '@/app/components/shared';
import { Button, Input } from '@nextui-org/react';

export default function Setting() {
  return (
    <section className="w-full p-3">
      <h1 className="text-xl">تنظمات پنل و نماینده ها:</h1>
      <div className="grid grid-cols-3 gap-x-10 gap-y-20 p-5 ">
        <div className="flex items-center">
          <span>حداقل حجم برای ساخت اکانت</span>
          <Input
            color="secondary"
            type="number"
            label="براساس گیگابایت"
            placeholder="حداقل حجم"
            defaultValue="10"
          />
        </div>
        <div className="flex items-center">
          <span>حداکثر حجم برای ساخت اکانت</span>
          <Input
            color="secondary"
            type="number"
            label="براساس گیگابایت"
            placeholder="حداقل حجم"
            defaultValue="250"
          />
        </div>
        <div className="flex items-center">
          <span>حداقل مدت زمان برای ساخت اکانت</span>
          <Input
            color="secondary"
            type="number"
            label="براساس روز"
            placeholder="حداقل حجم"
            defaultValue="30"
          />
        </div>
        <div className="flex items-center">
          <span>حداکثر مدت زمان برای ساخت اکانت</span>
          <Input
            color="secondary"
            type="number"
            label="براساس روز"
            placeholder="حداکثر زمان"
            defaultValue="60"
          />
        </div>
        <div className="flex items-center">
          <span>حداکثر تعداد ایپی لیمیت برای ساخت اکانت</span>
          <Input
            color="secondary"
            type="number"
            label="تعداد یوزر"
            placeholder="حداکثر لیمیت یوزر"
            defaultValue="5"
          />
        </div>
        <div className="flex items-center">
          <span>api درگاه پرداخت نکست پی را وارد کنید</span>
          <Input
            color="secondary"
            type="text"
            label="api درگاه "
            // placeholder="حداکثر لیمیت یوزر"
          />
        </div>
      </div>
      <div className=" flex p-7">
        <Button className="mx-auto text-xl" color="warning">
          ذخیره تغییرات
        </Button>
      </div>
    </section>
  );
}
