import type { Metadata } from 'next';
import localFont from 'next/font/local';

import Sidebar from '@/app/components/layout/sidebar';

import Header from '../components/layout/Header';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const vazirfont = localFont({
  src: '../../public/font/Vazirmatn-Regular.woff2',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body
      className={`h-max bg-[#060B26] text-slate-200 md:h-[100vh] ${vazirfont.className}`}
    >
      <Header />
      <main className="justify-between p-2 md:flex md:flex-row md:p-5 xl:px-20 ">
        <Sidebar />
        {children}
      </main>
    </body>
  );
}
