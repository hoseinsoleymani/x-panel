'use client';
import AccDetail from '../components/AccDetail';
import { Input } from '@nextui-org/react';
import PassModal from '../components/PassModal';
import PriceModal from '../components/PriceModal';
import BalanceModal from '../components/BalanceModal';

export default function Page({ params }: { params: { id: string } }) {
  return (
    <section className="w-full p-5">
      <div className="flex flex-col">
        <h1 className="m-3 text-2xl text-center text-white">
          نماینده شماره
          <span className="m-2 bg-green-600 px-4 py-2  rounded-md">
            {params.id}
          </span>{' '}
        </h1>
        <h1 className="p-5 text-2xl text-white">ابوالفضل حسن زاده</h1>
      </div>
      <AccDetail
        allUser="3"
        activeUser="2"
        purchases="500.000"
        amount="500.000"
      />
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
        <h1 className='text-white'>عملیات:</h1>
        <div className="flex p-2 flex-col md:flex-row gap-3">
        <PassModal />
        <PriceModal />
        <BalanceModal balance="500.000" />
        </div>
      </div>
    </section>
  );
}
