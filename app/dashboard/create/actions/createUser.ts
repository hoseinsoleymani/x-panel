'use server';
import axios from 'axios';
import { wrapper } from 'axios-cookiejar-support';
import mysql from 'mysql2/promise';
import { CookieJar } from 'tough-cookie';
import { z } from 'zod';
import withValidation from '@/app/utils/zodValidation';

const schema = z.object({
  date: z.string().nonempty({ message: 'Date is required' }),
  amount: z.string().nonempty({ message: 'Amount is required' }),
  'user-limit': z.string().nonempty({ message: 'User limit is required' }),
  'server-type': z.string().nonempty({ message: 'Server type is required' }),
  'server-location': z
    .string()
    .nonempty({ message: 'Server location is required' }),
});

export const createUser = withValidation(schema, async (formData: FormData) => {
  const date = formData.get('date');
  const amount = formData.get('amount');
  const userLimit = formData.get('user-limit');
  const serverType = formData.get('server-type');
  const accountName = formData.get('account-name');
  const serverLocation = formData.get('server-location');
  const cookieJar = new CookieJar();
  const client = wrapper(axios.create({ jar: cookieJar }));

  // conect to XMpanel
  try {
    const response = await client.post(
      'https://dash.imfromir.site/admin/login',
      {
        email: '4345abol@gmail.com',
        passwd: 'abol0011',
      },
      {
        withCredentials: true,
      },
    );

    const cookies = cookieJar.getCookiesSync('https://dash.imfromir.site');

    const createAccount = await axios.post(
      'https://dash.imfromir.site/admin/user/save',
      {
        email: `${accountName}.1@gmail.com`,
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
      `SELECT id , email , token FROM user WHERE email = 'dscsd.1@gmail.com'`,
    );

    await connection.end();

    const edituser = await axios.post(
      'https://dash.imfromir.site/admin/user/save',
      {
        id: `${rows.id}`,
        transfer_enable: '51',
        server_group: `1`,
        speedlimit: '1024',
        iplimit: userLimit,
        expire_in: '2024-06-09 03:22:11',
      },
      {
        headers: {
          Cookie: cookies,
        },
      },
    );
  } catch (error) {
    console.error('Error logging in:', error);
  }

});
