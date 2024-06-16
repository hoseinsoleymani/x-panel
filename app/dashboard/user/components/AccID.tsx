import { Card, CardBody } from '@nextui-org/react';
import React from 'react';

export default function AccID({ id, name }: any) {
  return (
    <div className=" flex flex-wrap items-center gap-5 py-5">
      <h1 className="text-2xl text-white">مشخصات:</h1>
      <Card className=" bg-[#d4d4d8]">
        <CardBody>
          <p className="inline-block w-full justify-start px-1 text-sm font-medium text-tprimary-400 lg:text-xl">
            یوزر: {id}
          </p>
        </CardBody>
      </Card>
      <Card className="bg-[#d4d4d8]">
        <CardBody>
          <p className="justify-start px-1 text-sm font-medium text-tprimary-400 lg:text-xl">
            نام اکانت: {name}
          </p>
        </CardBody>
      </Card>
    </div>
  );
}
