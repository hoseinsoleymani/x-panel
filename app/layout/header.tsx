'use client'

import { IoNotifications , IoPersonAdd  } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import { FaWallet } from "react-icons/fa";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes , FaHome, FaUsers   } from "react-icons/fa";




export default function Header() {
    const [nav, setNav] = useState(false);
    const links = [
        {
          id: 1,
          link: "صفحه اصلی",
          path:'/dashboard',
          icon:'FaHome '
        },
        {
            id: 4,
            link: "ساخت یوزر",
            path:'/dashboard/create',
            icone:"IoPersonAdd"
          },
          {
            id: 5,
            link: "یوزر ها",
            path:'/dashboard/users',
            icon:'FaUsers '
          },
          {
            id: 3,
            link: "افزایش موجودی",
            path:'/dashboard/payment'
          },
        {
          id: 2,
          link: "تنظیمات",
          path:'/dashboard/setting'
        },


      ];
    
  return (
    <>

<div className="flex justify-between items-center w-full h-20 px-4 text-white bg-[#060B26] ">


      <div className="info flex items-center">
          <button
            type="button"
            className="focus:outline-none me-2 md:block hidden text-white text-[1.5rem] bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-3xl  p-3 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            <IoNotifications />
          </button>
          <Link href="/dashboard/setting">
            <button
              type="button"
              className="focus:outline-none me-2 md:block hidden text-white text-[1.5rem] bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-3xl p-3 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            >
              <IoIosSettings />
            </button>
          </Link>
          <span className="bg-green-100 font-bold text-[1.3rem] md:block hidden text-green-800 me-2 p-3.5  rounded dark:bg-green-900 dark:text-green-300">
            ابوالفضل حسن زاده
          </span>
          <div className="wallet flex items-center bg-blue-100 text-[1rem] md:text-[1.3rem] text-blue-800 font-medium me-2 p-3.5 rounded dark:bg-blue-900 dark:text-blue-300">
            <FaWallet className="me-2 " />
            <span className="me-2 ">تومان</span>
            <span className="me-2 ">700.000</span>
          </div>
        </div>

        <div>
        <h1 className="text-5xl font-signature ml-2">
          <Link
            className="link-underline link-underline-black text-xl"
            href="/"
          >
            VPN LOGO
          </Link>
        </h1>
      </div>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center p-2 absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-[#060B26] to-gray-800 ">
          {links.map(({ id, link, path }) => (
            <li
              key={id}
              className="px-4 text-center cursor-pointer capitalize py-6 text-2xl bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-3xl p-3 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            >
              <Link onClick={() => setNav(!nav)} href={path}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
    </>
  );
}
