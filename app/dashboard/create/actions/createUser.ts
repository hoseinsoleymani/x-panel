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
});

export const createUser = withValidation(schema, async (formData: FormData) => {
  const date = formData.get('date') as string;
  const amount = formData.get('amount') as string;
  const userLimit = formData.get('user-limit');
  const accountName = formData.get('account-name') as string;
  const accountPrice = parseInt(formData.get('account-price') as string, 10);

  const cookieJar = new CookieJar();
  const client = wrapper(axios.create({ jar: cookieJar }));
  const panelDomain = process.env.PANEL ?? '';

  try {
    const token = cookiesReq().get('token');
    if (!token) return redirect('/auth/login');

    const userData = await verifyToken<{ email: string }>(token.value);
    if (!userData) return;

    const { _id, wallet } = await User.findOne({ email: userData.email });
    const inventory = parseInt(wallet.inventory, 10);

    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
    const [rows, _] = await connection.execute(
      `SELECT id , token FROM user WHERE email = '${generateEmail(accountName)}'`,
    );
    await connection.end();

    if (rows.length === 0) {
      if (inventory >= accountPrice) {
        await client.post(
          `${panelDomain}admin/login`,
          {
            email: '4345abol@gmail.com',
            passwd: 'abol0011',
          },
          {
            withCredentials: true,
          },
        );

        const cookies = cookieJar.getCookiesSync(panelDomain);
        await axios.post(
          `${panelDomain}admin/user/save`,
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
        const [rows, _] = await connection.execute(
          `SELECT id , token FROM user WHERE email = '${generateEmail(accountName)}'`,
        );

        await connection.end();

        await axios.post(
          `${panelDomain}admin/user/save`,
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
          await User.updateOne(
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

        await User.updateOne(
          { _id },
          { wallet: { inventory: inventory - accountPrice } },
        );

        return { inventory: inventory - accountPrice, token: rows[0].token };
      } else {
        return {
          message: 'موجودی شما کافی نیست',
        };
      }
    } else {
      return {
        message: 'این اکانت وجود دارد یک اسم دیگه انتخاب کنید',
      };
    }
  } catch (error) {
    console.error('Error logging in:', error);
  }
});

function generateEmail(accountName: string) {
  return `${accountName}.1@gmail.com`;
}
