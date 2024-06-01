import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Sidebar from './components/sidebar';

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
    <body className={`bg-[#060B26] text-slate-200 ${vazirfont.className}`}>
      <main className="justify-between p-5 md:flex md:flex-row xl:px-20 ">
        <Sidebar />
        {children}
      </main>
    </body>
  );
}