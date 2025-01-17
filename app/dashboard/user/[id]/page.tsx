/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable fp/no-let */
import mysql from 'mysql2/promise';
import { cookies as cookiesReq } from 'next/headers';
import { redirect } from 'next/navigation';
import React, { Suspense } from 'react';

import Setting from '@/app/api/models/setting';
import User from '@/app/api/models/user';
import { Card } from '@/app/components/shared/Card';
import Loading from '@/app/components/shared/Loading';
import { verifyToken } from '@/app/utils/jwt';

import AccDetails from '../components/AccDetails';
import AccID from '../components/AccID';
import { Extension } from '../components/Extension';
import type { Setting as SettingT } from '../components/Form';
import Qr from '../components/Qr';
import Span from '../components/Span';

export default async function Page({ params }: { params: { id: any } }) {
  let data: any = '';
  let price;
  let defaultSettings: any;

  try {
    const token = cookiesReq().get('token');
    if (!token) return redirect('/auth/login');

    const userData = await verifyToken<any>(token.value);
    if (!userData) return;
    const { accounts, prices } = await User.findOne({ email: userData.email });
    const account = accounts.some((account: any) => account.id === params.id);

    const defaultSettingsResponse = await Setting.findOne<SettingT>();

    defaultSettings = defaultSettingsResponse;
    price = prices;

    if (!account || !defaultSettingsResponse) return redirect('/dashboard');
  } catch (error) {
    redirect('/dashboard');
  }

  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    const [rows, _]: any = await connection.execute<any>(
      `SELECT id,username ,iplimit, token, total_data_used , transfer_enable, expire_in FROM user WHERE id = '${params.id}'`,
    );
    data = rows[0];
    await connection.end();
  } catch (error) {
    console.error('Error logging in:', error);
  }

  return (
    <Suspense fallback={<Loading />}>
      <div className="w-full md:mt-5 md:p-5">
        <AccID id={params.id} name={data.username} />

        <Card>
          <div className="grid grid-cols-1 items-center gap-16 sm:grid-cols-2 lg:grid-cols-3">
            <div className="text-xs">
              <Span className="bg-white text-black">
                {`${process.env.NEXT_PUBLIC_SUB ?? ''}${data.token}`}
              </Span>
            </div>

            <Qr data={`${process.env.NEXT_PUBLIC_SUB ?? ''}${data.token}`} />
          </div>
        </Card>

        <div className="mt-8">
          <AccDetails
            amount={data.transfer_enable}
            used={data.total_data_used}
            time={data.expire_in}
            limit={data.iplimit}
          />
        </div>

        <div className="mt-8">
          <Extension id={params.id} settings={defaultSettings} prices={price} />
        </div>
      </div>
    </Suspense>
  );
}
