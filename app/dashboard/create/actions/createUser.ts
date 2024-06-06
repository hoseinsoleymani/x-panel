'use server';

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

export const createUser = withValidation(schema, (formData: FormData) => {
  const date = formData.get('date');
  const amount = formData.get('amount');
  const userLimit = formData.get('user-limit');
  const serverType = formData.get('server-type');
  const serverLocation = formData.get('server-location');

  
});
