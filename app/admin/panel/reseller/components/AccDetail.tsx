import React from 'react';

export default function AccDetail({
  allUser,
  activeUser,
  purchases,
  amount,
}: any) {
  return (
    <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
      <div className="flex flex-row items-center rounded-xl  bg-success-500 py-2 text-white">
        <span className="mx-2">تعداد یوزر های ساخته شده توسط این نماینده:</span>
        <span className="rounded-md  px-4 py-2">{allUser}</span>
      </div>
      <div className="flex flex-row items-center rounded-xl bg-success-500 text-xl text-white">
        <span className="mx-2">تعداد یوزر های فعال</span>
        <span className=" rounded-md  px-4 py-2">{activeUser}</span>
      </div>
      <div className="flex flex-row items-center rounded-xl bg-success-500 text-xl text-white">
        <span className="mx-2">مقدار کل خرید</span>
        <span className=" rounded-md px-4 py-2">{purchases} تومان</span>
      </div>
      <div className="flex flex-row items-center rounded-xl bg-success-500 text-xl text-white">
        <span className="mx-2">موجودی</span>
        <span className="bg-green-600 rounded-md px-4 py-2">
          {amount} تومان
        </span>
      </div>
    </div>
  );
}
