/* eslint-disable fp/no-let */
import mysql from 'mysql2/promise';
import { cookies as cookiesReq } from 'next/headers';
import { redirect } from 'next/navigation';
import { Suspense } from 'react';

import User from '@/app/api/models/user';
import Loading from '@/app/components/shared/Loading';
import { verifyToken } from '@/app/utils/jwt';

import RTables from './components/RTables';

export default async function Users() {
  let data: any = '';
  let combinedArray = 'a';

  try {
    const token = cookiesReq().get('token');
    if (!token) return redirect('/auth/login');
    const userData = await verifyToken<any>(token.value);
    if (!userData) return;

    const { _id } = await User.findOne({ email: userData.email });
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
    const response = await User.findOne({ _id });
    data = JSON.parse(JSON.stringify(response));
    const faa = data.accounts;
    const ids = faa.map((item: any) => item.id);
    const formattedArray = `${ids.join(', ')}`;
    const [rows, _]: any = await connection.execute<any>(
      `SELECT token,used FROM user WHERE id IN (${formattedArray})`,
    );

    await connection.end();
    combinedArray = faa.map((item: any, index: any) => {
      return { ...item, ...rows[index] };
    });
  } catch (error) {
    redirect('');
  }

  return (
    <Suspense fallback={<Loading />}>
      <div className="z-0 mx-auto flex flex-row overflow-x-scroll py-10 md:w-8/12 md:overflow-hidden ">
        <RTables data={combinedArray} />
      </div>
    </Suspense>
  );
}
