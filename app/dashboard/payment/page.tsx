import { Button, Input } from '@nextui-org/react';

export default function Payment() {
  return (
    <div className="p-5 flex flex-col items-center w-full">
      <span className="bg-green-700 p-4 m-3 rounded-lg">
        موجودی شما 700.000 تومان مییاشد
      </span>
      <div className="add w-2/4 flex flex-col  ">
        <span className="text-xl m-2">افزایش موجودی:</span>
        <Input type="number" color="secondary" label="حداقل 100.000 تومان" />
        <Button className="m-3" color="primary">
          پرداخت
        </Button>
      </div>
    </div>
  );
}
