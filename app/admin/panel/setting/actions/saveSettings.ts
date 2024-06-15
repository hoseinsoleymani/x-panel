'use server';

import { z } from 'zod';

import dbConnect from '../../../../api/connect-db';
import Setting from '../../../../api/models/setting';
import withValidation from '../../../../utils/zodValidation';

const schema = z.object({});

export const saveSetting = withValidation(
  schema,
  async (formData: FormData) => {
    const entries = Object.entries(Object.fromEntries(formData.entries()));
    const filterData = entries
      .filter(([_, value]) => value !== '')
      .filter(([key]) => !key.startsWith('$ACTION'));

    try {
      await dbConnect();
    } catch (error: any) {
      console.log(error);
    }

    try {
      await Setting.updateMany({ ...Object.fromEntries(filterData) });
    } catch (error: any) {
      throw Error(error);
    }
  },
);
