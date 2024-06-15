import { Input } from '@nextui-org/react';
import { redirect } from 'next/navigation';

import User from '@/app/api/models/user';

import BalanceModal from '../components/BalanceModal';
import Form from '../components/Form';
import PassModal from '../components/PassModal';
import PriceModal from '../components/PriceModal';

export default async function Page({ params }: { params: { id: string } }) {
  let userData;

  try {
    const aData = await User.findOne({ _id: params.id });
    userData = JSON.parse(JSON.stringify(aData));
  } catch (error) {
    redirect('/dashboard');
  }

  return (
    <section className="m-2 grow  md:m-6">
      <div className="flex flex-col">
        <h1 className="p-5 text-2xl text-white">{userData.name}</h1>
      </div>

      <div className="flex p-5">
        <Input
          type="email"
          label="ایمیل نماینده"
          color="primary"
          isDisabled
          defaultValue={userData.email}
          className="max-w-xs text-white"
        />
      </div>
      <h1 className="text-white">عملیات:</h1>
      <div className="mt-6 flex flex-row">
        <div className="flex w-full flex-col">
          <Form data={userData} />
        </div>
      </div>
    </section>
  );
}
