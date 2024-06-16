'use server';
import { redirect } from 'next/navigation';
import { z } from 'zod';

import dbConnect from '@/app/api/connect-db';
import User from '@/app/api/models/user';
import withValidation from '@/app/utils/zodValidation';

const schema = z.object({});

export const editReseller = withValidation(
  schema,
  async (formData: FormData) => {
    const inventory = formData.get('inventory') as string;
    const name = formData.get('name') as string;
    const datePrice = formData.get('date-price') as string;
    const trafficPrice = formData.get('traffic-price');
    const userPrice = formData.get('user-price');
    const id = formData.get('id');

    try {
      await dbConnect();
    } catch (error: any) {
      throw Error(error.message);
    }

    try {
      await User.updateOne(
        { _id: id },
        {
          $set: {
            name,
            'wallet.inventory': inventory,
            'prices.traffic': trafficPrice,
            'prices.date': datePrice,
            'prices.limit:': userPrice,
          },
        },
      );
    } catch (error) {
      redirect('');
    }
  },
);
