'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars, FaTimes, FaWallet } from 'react-icons/fa';
import { IoIosSettings } from 'react-icons/io';
import { IoNotifications } from 'react-icons/io5';

export default function Header() {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: 'صفحه اصلی',
      path: '/dashboard',
      icon: 'FaHome ',
    },
    {
      id: 4,
      link: 'ساخت یوزر',
      path: '/dashboard/create',
      icone: 'IoPersonAdd',
    },
    {
      id: 5,
      link: 'یوزر ها',
      path: '/dashboard/users',
      icon: 'FaUsers ',
    },
    {
      id: 3,
      link: 'افزایش موجودی',
      path: '/dashboard/payment',
    },
    {
      id: 2,
      link: 'تنظیمات',
      path: '/dashboard/setting',
    },
  ];

  return (
    <div className="flex h-20 w-full items-center justify-between bg-[#060B26] px-4 text-white ">
      <div>
        <h1 className=" ml-2 text-5xl">
          <Link className="text-xl" href="/">
            VPN LOGO
          </Link>
        </h1>
      </div>

      <div className=" flex items-center">
        <button
          type="button"
          className="mb-2 me-2 hidden rounded-3xl bg-purple-700 p-3 text-[1.5rem] font-medium text-white hover:bg-purple-800 focus:outline-none focus:ring-4  focus:ring-purple-300 md:block dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          <IoNotifications />
        </button>
        <Link href="/dashboard/setting">
          <button
            type="button"
            className="mb-2 me-2 hidden rounded-3xl bg-purple-700 p-3 text-[1.5rem] font-medium text-white hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 md:block dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            <IoIosSettings />
          </button>
        </Link>
        <span className="me-2 hidden rounded bg-green-100 p-3.5 text-[1.3rem] font-bold text-green-800  md:block dark:bg-green-900 dark:text-green-300">
          ابوالفضل حسن زاده
        </span>
        <div className="me-2 flex items-center rounded bg-blue-100 p-3.5 text-[1rem] font-medium text-blue-800 md:text-[1.3rem] dark:bg-blue-900 dark:text-blue-300">
          <FaWallet className="me-2 " />
          <span className="me-2 ">تومان</span>
          <span className="me-2 ">700.000</span>
        </div>
      </div>

      <button
        onClick={() => setNav(!nav)}
        className="z-10 cursor-pointer pr-4 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </button>

      {nav ? (
        <ul className="absolute left-0 top-0 flex h-screen w-full flex-col justify-center bg-gradient-to-b from-[#060B26] to-gray-800 p-2 ">
          {links.map(({ id, link, path }) => (
            <li
              key={id}
              className="mb-2 cursor-pointer rounded-3xl bg-purple-700 p-3 px-4 py-6 text-center text-2xl font-medium capitalize hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            >
              <Link onClick={() => setNav(!nav)} href={path}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
