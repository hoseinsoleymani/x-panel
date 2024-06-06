'use server';

import axios from 'axios';
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

  try {
    const panelLogin = await axios.post(
      'https://dash.imfromir.site/admin/login',
      {
        email: '4345abol@gmail.com',
        passwd: 'abol0011',
      },
    );

    try {
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
            cookies: "",
          },
        },
      );
      console.log('Data issssssssssss', createAccount.data);
    } catch (error) {
      console.log('Create Is................', error);
    }
  } catch (error) {
    console.log('Login Error isssssssssss:', error);
  }
});
