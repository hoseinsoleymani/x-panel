import '@/app/globals.css';
import localFont from 'next/font/local';


const sansfont = localFont({
  src: '../public/font/IRANSansWeb.woff',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)

{
  return (
    <html lang="en">
      <body className={`bg-tprimary-400 ${sansfont.className}`}>{children}</body>
    </html>
  );
}
