import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { GoHome } from 'react-icons/go';
import { PiUsersThreeDuotone } from 'react-icons/pi';
import { TbUserEdit } from 'react-icons/tb';

import Sidebar from '@/app/components/layout/sidebar';
import type { User as UserT } from '@/app/dashboard/create/page';

import User from '../api/models/user';
import Header from '../components/layout/Header';
import type { NavProps } from '../components/layout/Nav';
import WalletProvider from '../components/layout/WalletProvider';
import ToastProvider from '../components/shared/ToastProvider';
import { verifyToken } from '../utils/jwt';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const sansfont = localFont({
  src: '../../public/font/IRANSansWeb.woff',
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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

  const routes = [
    { text: 'پیشخوان', icon: <GoHome size={26} />, path: '/dashboard' },
    {
      text: 'ساخت کاربر',
      icon: <TbUserEdit size={26} />,
      path: '/dashboard/create',
    },
    {
      text: 'کاربران',
      icon: <PiUsersThreeDuotone size={26} />,
      path: '/dashboard/users',
    },
  ];

  return (
    <body className="bg-tprimary-400 md:min-h-screen">
      <main
        className={`justify-between dark md:flex md:flex-row ${sansfont.className}`}
      >
        <Sidebar routes={routes} />
        <WalletProvider userData={user}>
          <section className="grow">
            <Header />

            <ToastProvider>{children}</ToastProvider>
          </section>
        </WalletProvider>
      </main>
    </body>
  );
}
