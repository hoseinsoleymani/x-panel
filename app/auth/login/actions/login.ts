'use server';

import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';
import { permanentRedirect } from 'next/navigation';
import { z } from 'zod';

import dbConnect from '@/app/api/connect-db';
import User from '@/app/api/models/user';

const schema = z.object({
  email: z
    .string({
      invalid_type_error: 'Invalid Email',
    })
    .email('Invalid Email address'),
  password: z
    .string({
      invalid_type_error: 'Invalid Password',
    })
    .max(16, 'password max is 16 char')
    .min(6, 'password min is 6 char'),
});

export const login = async (prevState: any, formData: FormData) => {
  const email = formData.get('email');
  const password = formData.get('password');

  const validatedFields = schema.safeParse({
    email,
    password,
  });

  if (!validatedFields.success)
    return {
      message:
        validatedFields.error.flatten().fieldErrors.email?.[0] ??
        validatedFields.error.flatten().fieldErrors.password?.[0],
    };

  try {
    await dbConnect();
  } catch (error: any) {
    throw Error(error.message);
  }

  const user = await User.findOne({ email });

  const isPasswordValid = await bcrypt.compare(
    password as string,
    user.password,
  );

  if (!user || !isPasswordValid)
    return {
      message: 'invalid email or password',
    };

  cookies().set('token', user.token);
  permanentRedirect('/dashboard');
};
