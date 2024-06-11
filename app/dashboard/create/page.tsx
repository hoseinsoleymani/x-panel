import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import User from '@/app/api/models/user';
import type { Payload } from '@/app/utils/jwt';
import { verifyToken } from '@/app/utils/jwt';

import Form from './components/Form';

export interface User extends Payload {
  email: string;
  password: string;
}

export interface UserDB {
  wallet: { inventory: string };
  prices: { traffic: string; date: string; limit: string };
  email: string;
  password: string;
  name: string;
  accountStatus: string;
}

export default async function Create() {
  const token = cookies().get('token');
  let prices;

  if (!token) return redirect('/auth/login');

  try {
    const userData = await verifyToken<User>(token.value);
    if (!userData) return;

    const response = await User.findOne<UserDB>({ email: userData.email });
    if (!response) return;
    prices = response.prices;
  } catch (error) {
    console.error('Error verifying token:', error);
  }

  return (
    <section className="m-2 grow  md:m-6">
      <div className="text-3xl">
        <h1 className="font-bold">ساخت اکانت جدید</h1>
      </div>

      <div className="mt-6 flex flex-row">
        <div className="flex w-full flex-col">
          <Form prices={prices} />
        </div>
      </div>
    </section>
  );
}
