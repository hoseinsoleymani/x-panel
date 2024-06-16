/* eslint-disable import/extensions */
'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: 'صفحه اصلی',
      path: '/admin',
      icon: 'FaHome ',
    },
    {
      id: 4,
      link: 'وضعیت سرور ها',
      path: '/admin/status',
      icone: 'IoPersonAdd',
    },
    {
      id: 5,
      link: 'نماینده ها',
      path: '/admin/resellers',
      icon: 'FaUsers ',
    },

    {
      id: 2,
      link: 'تنظیمات',
      path: '/admin/setting',
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

      <button
        onClick={() => setNav(!nav)}
        className="z-10 cursor-pointer pr-4 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </button>

      {nav ? (
        <ul className="absolute left-0 top-0 z-[1] flex h-screen w-full flex-col justify-center bg-gradient-to-b from-[#060B26] p-2">
          {links.map(({ id, link, path }) => (
            <li
              key={id}
              className="mb-2 cursor-pointer rounded-3xl p-3 px-4 py-6 text-center text-2xl font-medium capitalize"
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
