'use client';

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { GoHome } from 'react-icons/go';
import { PiUsersThreeDuotone } from 'react-icons/pi';

export default function AdminNav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();
  const links = [
    {
      text: 'نماینده ها',
      icon: <GoHome size={26} />,
      path: '/admin/panel/resellers',
      id: 4,
    },
    {
      text: 'تنظیمات',
      icon: <PiUsersThreeDuotone size={26} />,
      path: '/admin/panel/setting',
      id: 5,
    },
  ];

  return (
    <Navbar
      isBordered
      maxWidth="2xl"
      className="border border-tprimary-200 bg-tprimary-100 py-5 text-white"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent justify="start">
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle className="[&>span:after]:bg-tgray-100 [&>span:before]:bg-tgray-100" />
        </NavbarContent>
        <NavbarBrand className="flex flex-col items-start gap-4">
          <h1 className="md:text-3xl">داشبورد</h1>
          <p className="hidden  text-tgray-200 md:flex ">
            داشبورد ادمین مدیریت اکانت های vpn
          </p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarMenu className="mt-6 bg-[#22025cdcc]">
        {links.map(({ id, path, text }) => (
          <NavbarMenuItem className=" m-2" key={id}>
            <Link
              onClick={() => setIsMenuOpen(false)}
              href={path}
              className={`flex w-40 ${pathname === `${path}` ? 'font-bold text-tprimary-300' : 'text-tgray-100'} p-2`}
            >
              {text}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
