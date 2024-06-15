'use server';
import bcrypt from 'bcryptjs';
import { redirect } from 'next/navigation';
import { z } from 'zod';

import dbConnect from '@/app/api/connect-db';
import User from '@/app/api/models/user';
import withValidation from '@/app/utils/zodValidation';

const schema = z.object({});

export const createReseller = withValidation(
  schema,
  async (formData: FormData) => {
    const inventory = formData.get('inventory') as string;
    const email = formData.get('email');
    const name = formData.get('name') as string;
    const password = formData.get('password') as string;
    const datePrice = formData.get('date-price') as string;
    const trafficPrice = formData.get('traffic-price');
    const userPrice = formData.get('user-price');

    try {
      await dbConnect();
    } catch (error: any) {
      throw Error(error.message);
    }

    try {
      const hashedPassword = await bcrypt.hash(password, 10);

      const addStaus = await User.create({
        email,
        password: hashedPassword,
        name,
        wallet: { inventory },
        accountStatus: 'active',
        prices: {
          traffic: trafficPrice,
          date: datePrice,
          limit: userPrice,
        },
      });

      console.log('User:', addStaus);
    } catch (error) {
      redirect('');
    }
  },
);