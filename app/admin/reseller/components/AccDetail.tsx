import React from 'react';

export default function AccDetail({
  allUser,
  activeUser,
  purchases,
  amount,
}: any) {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-row items-center text-xl">
        <span className="m-2">تعداد یوزر های ساخته شده توسط این نماینده:</span>
        <span className="m-2 rounded-md bg-green-600 px-4 py-2">{allUser}</span>
      </div>
      <div className="flex flex-row items-center text-xl">
        <span>تعداد یوزر های فعال</span>
        <span className="m-2 rounded-md bg-green-600 px-4 py-2">
          {activeUser}
        </span>
      </div>
      <div className="flex flex-row items-center text-xl">
        <span>مقدار کل خرید</span>
        <span className="me-2 rounded-md bg-green-600 px-4 py-2">
          {purchases} تومان
        </span>
      </div>
      <div className="flex flex-row items-center text-xl">
        <span>موجودی</span>
        <span className="m-2 rounded-md bg-green-600 px-4 py-2">
          {amount} تومان
        </span>
      </div>
    </div>
  );
}
