import Link from 'next/link';
import { GoHome } from 'react-icons/go';
import { PiUsersThreeDuotone } from 'react-icons/pi';
import { TbUserEdit } from 'react-icons/tb';

export default function Sidebar() {
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
    <aside className="min-h-screen w-[289px] border border-tprimary-200 bg-tprimary-100 p-5 text-tgray-200 hidden md:block">
      <div className="flex items-center justify-between gap-2 p-6 lg:py-7 xl:py-10">
        <a href="/">
          <img
            alt="Logo"
            fetchPriority="high"
            width="176"
            height="32"
            decoding="async"
            data-nimg="1"
            className="dark:hidden"
            src="https://demo.nextadmin.co/images/logo/logo.svg"
            style={{ color: 'transparent', width: 'auto', height: 'auto' }}
          />
        </a>
        <button className="block lg:hidden">
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>
      <span className="text-sm">منو اصلی</span>
      <ul className="mt-4">
        {routes.map((item) => (
          <li key={item.path}>
            <Link
              href={item.path}
              className="flex items-center gap-4 rounded-md px-4 py-3 transition-all hover:bg-gray-300 hover:text-tgray-100"
            >
              {item.icon}
              <span>{item.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
