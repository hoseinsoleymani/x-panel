import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import Setting from '@/app/api/models/setting';
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

export interface Setting {
  minTraffic: string;
  maxTraffic: string;
  minExpirationTime: string;
  maxExpirationTime: string;
  maxUserLimit: string;
}

export default async function Create() {
  const token = cookies().get('token');
  let prices;
  let defaultSettings;

  if (!token) return redirect('/auth/login');

  try {
    const userData = await verifyToken<User>(token.value);
    if (!userData) return;

    const response = await User.findOne<UserDB>({ email: userData.email });
    const defaultSettingsResponse = await Setting.findOne<Setting>();
    if (!response || !defaultSettingsResponse) return;
    
    defaultSettings = defaultSettingsResponse
    prices = response.prices;
  } catch (error) {
    console.error('Error verifying token:', error);
  }

  return (
    <section className="m-2 grow  md:m-6">
      <div className="mt-6 flex flex-row">
        <div className="flex w-full flex-col">
          <Form prices={prices} settings={defaultSettings}/>
        </div>
      </div>
    </section>
  );
}
