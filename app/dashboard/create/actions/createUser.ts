'use server';
import axios from 'axios';
import { wrapper } from 'axios-cookiejar-support';
import mysql from 'mysql2/promise';
import { cookies as cookiesReq } from 'next/headers';
import { redirect } from 'next/navigation';
import { CookieJar } from 'tough-cookie';
import { z } from 'zod';

import dbConnect from '@/app/api/connect-db';
import User from '@/app/api/models/user';
import { verifyToken } from '@/app/utils/jwt';
import withValidation from '@/app/utils/zodValidation';

const schema = z.object({
  date: z.string().nonempty({ message: 'Date is required' }),
  amount: z.string().nonempty({ message: 'Amount is required' }),
  'user-limit': z.string().nonempty({ message: 'User limit is required' }),
  // 'server-type': z.string().nonempty({ message: 'Server type is required' }),
  // 'server-location': z
  //   .string()
  //   .nonempty({ message: 'Server location is required' }),
});

export const createUser = withValidation(schema, async (formData: FormData) => {
  const date = formData.get('date') as string;
  const amount = formData.get('amount') as string;
  const userLimit = formData.get('user-limit');
  // const serverType = formData.get('server-type');
  const accountName = formData.get('account-name') as string;
  // const serverLocation = formData.get('server-location');
  const cookieJar = new CookieJar();
  const client = wrapper(axios.create({ jar: cookieJar }));

  try {
    const loginToPanel = await client.post(
       `${process.env.PANEL}admin/login`,
      {
        email: '4345abol@gmail.com',
        passwd: 'abol0011',
      },
      {
        withCredentials: true,
      },
    );

    
    const cookies = cookieJar.getCookiesSync(process.env.PANEL);    
    const createAccount = await axios.post(
      `${process.env.PANEL}admin/user/save`,
      {
        email: generateEmail(accountName),
        passwd: '!ABdsv512com',
        name: `${accountName}.1`,
        server_group: '1',
        role: '0',
      },
      {
        headers: {
          Cookie: cookies,
        },
      },
    );

    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    const [rows, fields] = await connection.execute(
      `SELECT id , token FROM user WHERE email = '${generateEmail(accountName)}'`,
    );

    await connection.end();

    const edituser = await axios.post(
      `${process.env.PANEL}admin/user/save`,
      {
        id: `${rows[0].id}`,
        transfer_enable: amount,
        server_group: `1`,
        speedlimit: '1024',
        iplimit: userLimit,
        expire_in: `${date} 00:00:00`,
      },
      {
        headers: {
          Cookie: cookies,
        },
      },
    );

    try {
      await dbConnect();
    } catch (error: any) {
      throw Error(error.message);
    }

    try {
      const token = cookiesReq().get('token');
      if (!token) return redirect('/auth/login');

      const userData = await verifyToken<{ email: string }>(token.value);
      if (!userData) return;

      const { _id } = await User.findOne({ email: userData.email });

      const addDatatoDB = await User.updateOne(
        { _id },
        {
          $push: {
            accounts: {
              amount,
              userLimit,
              accountName,
              expireTime: date,
              // serverType,
              id: rows[0].id,
            },
          },
        },
      );
    } catch (error) {
      redirect('');
    }
  } catch (error) {
    console.error('Error logging in:', error);
  }
});

function generateEmail(accountName: string) {
  return `${accountName}.1@gmail.com`;
}
