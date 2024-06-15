'use client';
import { Input } from '@nextui-org/react';

import AccDetail from '../components/AccDetail';
import BalanceModal from '../components/BalanceModal';
import PassModal from '../components/PassModal';
import PriceModal from '../components/PriceModal';

export default function Page({ params }: { params: { id: string } }) {
  return (
    <section className="w-full p-5">
      <div className="flex flex-col">
        <h1 className="m-3 text-center text-2xl text-white">
          نماینده شماره
          <span className="bg-green-600 m-2 rounded-md px-4  py-2">
            {params.id}
          </span>{' '}
        </h1>
        <h1 className="p-5 text-2xl text-white">ابوالفضل حسن زاده</h1>
      </div>

      <div className="flex p-5">
        <Input
          type="email"
          label="ایمیل نماینده"
          color="success"
          defaultValue="abolfazl@gmail.org"
          className="max-w-xs"
        />
      </div>
      <div className="flex items-center">
        <h1 className="text-white">عملیات:</h1>
        <div className="flex flex-col gap-3 p-2 md:flex-row">
          <PassModal />
          <PriceModal />
          <BalanceModal balance="500.000" />
        </div>
      </div>
    </section>
  );
}
