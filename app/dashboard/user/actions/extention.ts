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

const schema = z.object({});

export const extention = withValidation(schema, async (formData: FormData) => {
  const date = formData.get('date') as string;
  const amount = formData.get('amount') as string;
  const userLimit = formData.get('user-limit');
  const id = formData.get('id');
  // const serverType = formData.get('server-type');
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
    const edituser = await axios.post(
      `${process.env.PANEL}admin/user/save`,
      {
        id,
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

      const editUser = await User.updateOne(
        { _id,'accounts.id': id },
        {
          $set:{
            'accounts.$.amount': amount,
            'accounts.$.userLimit': userLimit,
            'accounts.$.expireTime': date,
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
