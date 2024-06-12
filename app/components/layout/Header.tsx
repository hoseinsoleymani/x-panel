import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import User from '@/app/api/models/user';
import type { User as UserT } from '@/app/dashboard/create/page';
import { verifyToken } from '@/app/utils/jwt';

import type { NavProps } from './Nav';
import Nav from './Nav';

export default async function Header() {
  const token = cookies().get('token');
  let user;

  if (!token) return redirect('/auth/login');

  try {
    const payload = await verifyToken<UserT>(token.value);
    if (!payload) return;

    const response = await User.findOne<NavProps['user']>({
      email: payload.email,
    });

    if (!response) return;
    user = JSON.parse(JSON.stringify(response));
  } catch (error) {
    console.error('Error verifying token:', error);
  }

  if (!user) return <span>loading...</span>;

  return <Nav user={user} />;
}
