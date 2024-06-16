'use server';

import bcrypt from 'bcryptjs';
import { SignJWT } from 'jose';
import { cookies } from 'next/headers';
import { permanentRedirect } from 'next/navigation';
import { z } from 'zod';

import dbConnect from '@/app/api/connect-db';
import Setting from '@/app/api/models/setting';
import User from '@/app/api/models/user';
import { jwtSecretKey } from '@/app/utils/jwt';
import withValidation from '@/app/utils/zodValidation';

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

export const login = withValidation(schema, async (formData: FormData) => {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  try {
    await dbConnect();
  } catch (error: any) {
    console.log(error);
  }

  if (!(await isValidCredentials(email, password)))
    return {
      message: 'invalid email or password',
    };

  const token = await generateToken(email, password);

  // const hashedPassword = await bcrypt.hash(password, 10);

  // await User.create({
  //   email,
  //   password: hashedPassword,
  //   name: 'حسین سلیمانی',
  //   wallet: { inventory: '9000000' },
  //   accountStatus: 'active',
  //   prices: {
  //     traffic: '50000',
  //     date: '20000',
  //     limit: '10000',
  //   },
  // });

  // await Setting.create({
  //   minTraffic: '20',
  //   maxTraffic: '200',
  //   minExpirationTime: '30',
  //   maxExpirationTime: '60',
  //   maxUserLimit: '3',
  // });

  cookies().set('token', token);
  permanentRedirect('/dashboard');
});

async function isValidCredentials(email: string, password: string) {
  const user = await User.findOne({ email });
  if (!user) return false;

  const isPasswordValid = await bcrypt.compare(password, user.password);
  return isPasswordValid;
}

async function generateToken(email: string, password: string) {
  const token = await new SignJWT({ email, password, role: 'user' })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('2day')
    .sign(jwtSecretKey());

  return token;
}
